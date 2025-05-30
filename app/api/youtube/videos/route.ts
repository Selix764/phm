import { type NextRequest, NextResponse } from "next/server"
import {
  YOUTUBE_CONFIG,
  getAPIKey,
  validateAPIKey,
  buildYouTubeURL,
  fetchWithRetry,
  parseYouTubeResponse,
  checkDNSResolution,
  type YouTubeResponse,
} from "@/lib/youtube-api"

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
let cache: { data: YouTubeResponse; timestamp: number } | null = null

export async function GET(request: NextRequest) {
  const startTime = Date.now()
  const debug: { skippedVideos: Array<{ id: string; reason: string }> } = {
    skippedVideos: [],
  }
  const { searchParams } = new URL(request.url)
  const requestedResults = Math.min(Number.parseInt(searchParams.get("maxResults") || "6"), 50)
  const order = searchParams.get("order") || "date"
  const includeDebug = searchParams.get("debug") === "true"

  try {
    console.log(`[YouTube API] Request: maxResults=${requestedResults}, order=${order}`)

    // Check cache first
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      console.log("[YouTube API] Returning cached data")
      return NextResponse.json({
        ...cache.data,
        cached: true,
        responseTime: Date.now() - startTime,
        ...(includeDebug && { debug }),
      })
    }

    // Validate API key
    const apiKey = getAPIKey()
    if (!apiKey) {
      console.warn("[YouTube API] No API key available, using fallback data")
      return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
    }

    if (!validateAPIKey(apiKey)) {
      console.warn("[YouTube API] Invalid API key format, using fallback data")
      return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
    }

    // Check DNS resolution
    const dnsOk = await checkDNSResolution()
    if (!dnsOk) {
      console.error("[YouTube API] DNS resolution failed, using fallback data")
      return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
    }

    const validVideos: any[] = []
    let nextPageToken: string | undefined = ""
    let totalApiCalls = 0
    const MAX_API_CALLS = 5 // Limit total API calls to avoid excessive quota usage

    // Keep fetching until we have enough valid videos or run out of results
    while (
      validVideos.length < requestedResults &&
      nextPageToken !== undefined &&
      totalApiCalls < MAX_API_CALLS
    ) {
      totalApiCalls++

      // Build API URL - always request maximum results per page
      const url = buildYouTubeURL("search", {
        key: apiKey,
        channelId: YOUTUBE_CONFIG.CHANNEL_ID,
        part: "snippet",
        order,
        type: "video",
        maxResults: "50", // Always request maximum allowed
        pageToken: nextPageToken || "",
      })

      console.log(
        `[YouTube API] Fetching page ${totalApiCalls}: ${url.replace(apiKey, "API_KEY_HIDDEN")}`
      )

      // Fetch data with retry logic
      const response = await fetchWithRetry(url)
      const data = await response.json()

      if (data.error) {
        console.error("[YouTube API] API Error:", data.error)
        if (validVideos.length > 0) {
          break // Use what we have so far
        }
        return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
      }

      // Parse response
      const pageVideos = parseYouTubeResponse(data)
      nextPageToken = data.nextPageToken

      // Get additional video details (statistics, content details) for this page
      const videoIds = pageVideos.map((v) => v.id).join(",")
      const detailsUrl = buildYouTubeURL("videos", {
        key: apiKey,
        id: videoIds,
        part: "statistics,contentDetails",
      })

      try {
        const detailsResponse = await fetchWithRetry(detailsUrl)
        const detailsData = await detailsResponse.json()

        // Process each video
        if (detailsData.items) {
          for (const video of pageVideos) {
            const details = detailsData.items.find((item: any) => item.id === video.id)
            
            // Skip videos that don't meet criteria
            if (!details) {
              debug.skippedVideos.push({ id: video.id, reason: "No details available" })
              continue
            }

            if (!details.statistics?.viewCount) {
              debug.skippedVideos.push({ id: video.id, reason: "No view count" })
              continue
            }

            // Skip videos with 0 views
            const viewCount = parseInt(details.statistics.viewCount, 10)
            if (viewCount === 0) {
              debug.skippedVideos.push({ id: video.id, reason: "Zero views" })
              continue
            }

            // Add details to video
            video.viewCount = details.statistics.viewCount
            video.likeCount = details.statistics.likeCount
            video.duration = details.contentDetails?.duration

            validVideos.push(video)

            // Stop if we have enough videos
            if (validVideos.length >= requestedResults) {
              break
            }
          }
        }
      } catch (error) {
        console.warn("[YouTube API] Failed to fetch video details:", error)
        debug.skippedVideos.push({
          id: "batch",
          reason: `Failed to fetch details for page ${totalApiCalls}`,
        })
      }

      // Break if we have enough videos or no more pages
      if (validVideos.length >= requestedResults || !nextPageToken) {
        break
      }
    }

    // If we didn't get any valid videos, use fallback
    if (validVideos.length === 0) {
      console.warn("[YouTube API] No valid videos found")
      return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
    }

    const result: YouTubeResponse = {
      videos: validVideos.slice(0, requestedResults), // Ensure we don't return more than requested
      nextPageToken: nextPageToken,
      totalResults: validVideos.length,
      responseTime: Date.now() - startTime,
    }

    // Update cache
    cache = { data: result, timestamp: Date.now() }

    console.log(
      `[YouTube API] Success: ${validVideos.length} valid videos in ${
        Date.now() - startTime
      }ms (${totalApiCalls} API calls)`
    )

    return NextResponse.json(
      {
        ...result,
        ...(includeDebug && { debug }),
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
          "CDN-Cache-Control": "public, s-maxage=300",
          "Vercel-CDN-Cache-Control": "public, s-maxage=300",
        },
      }
    )
  } catch (error) {
    console.error("[YouTube API] Unexpected error:", error)

    // Return stale cache if available
    if (cache) {
      console.log("[YouTube API] Returning stale cache due to error")
      return NextResponse.json({
        ...cache.data,
        stale: true,
        error: "Using cached data due to API error",
        responseTime: Date.now() - startTime,
        ...(includeDebug && { debug }),
      })
    }

    // Final fallback
    return NextResponse.json({ ...getFallbackData(), ...(includeDebug && { debug }) })
  }
}

function getFallbackData(): YouTubeResponse {
  return {
    videos: [
      {
        id: "YL9TbJF2x8k",
        title: "Somnul copiilor",
        description: "Somnul copiilor. De vorba cu Iulia! 20.05.2025",
        publishedAt: "2025-05-20T10:00:00Z",
        thumbnails: {
          default: "/images/video-thumbnail-1.png",
          medium: "/images/video-thumbnail-1.png",
          high: "/images/video-thumbnail-1.png",
        },
        viewCount: "18",
        channelTitle: "Perfect Home Media",
      },
      {
        id: "Jv3MdHwLh9E",
        title: "Creme care șterg ridurile",
        description: "Creme care șterg ridurile. De vorba cu Iulia! 19.05.2025",
        publishedAt: "2025-05-19T10:00:00Z",
        thumbnails: {
          default: "/images/video-thumbnail-2.png",
          medium: "/images/video-thumbnail-2.png",
          high: "/images/video-thumbnail-2.png",
        },
        viewCount: "81",
        channelTitle: "Perfect Home Media",
      },
      {
        id: "FRvJp9JEXcw",
        title: "Micile lucruri mari sezon 2 Episodul 20",
        description: "Vera Rubin a privit cerul și a văzut ceea ce nimeni altcineva nu observase.",
        publishedAt: "2025-05-18T10:00:00Z",
        thumbnails: {
          default: "/images/video-thumbnail-3.png",
          medium: "/images/video-thumbnail-3.png",
          high: "/images/video-thumbnail-3.png",
        },
        viewCount: "28",
        channelTitle: "Perfect Home Media",
      },
    ],
    totalResults: 3,
    cached: true,
    stale: true,
    responseTime: 0,
  }
}
