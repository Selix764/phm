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

  try {
    const { searchParams } = new URL(request.url)
    const maxResults = Math.min(Number.parseInt(searchParams.get("maxResults") || "6"), 50)
    const pageToken = searchParams.get("pageToken") || ""
    const order = searchParams.get("order") || "date"

    console.log(`[YouTube API] Request: maxResults=${maxResults}, pageToken=${pageToken}, order=${order}`)

    // Check cache first
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      console.log("[YouTube API] Returning cached data")
      return NextResponse.json({
        ...cache.data,
        cached: true,
        responseTime: Date.now() - startTime,
      })
    }

    // Validate API key
    const apiKey = getAPIKey()
    if (!apiKey) {
      console.warn("[YouTube API] No API key available, using fallback data")
      return NextResponse.json(getFallbackData())
    }

    if (!validateAPIKey(apiKey)) {
      console.warn("[YouTube API] Invalid API key format, using fallback data")
      return NextResponse.json(getFallbackData())
    }

    // Check DNS resolution
    const dnsOk = await checkDNSResolution()
    if (!dnsOk) {
      console.error("[YouTube API] DNS resolution failed, using fallback data")
      return NextResponse.json(getFallbackData())
    }

    // Build API URL
    const url = buildYouTubeURL("search", {
      key: apiKey,
      channelId: YOUTUBE_CONFIG.CHANNEL_ID,
      part: "snippet",
      order,
      type: "video",
      maxResults: maxResults.toString(),
      pageToken,
    })

    console.log("[YouTube API] Fetching from:", url.replace(apiKey, "API_KEY_HIDDEN"))

    // Fetch data with retry logic
    const response = await fetchWithRetry(url)
    const data = await response.json()

    if (data.error) {
      console.error("[YouTube API] API Error:", data.error)
      return NextResponse.json(getFallbackData())
    }

    // Parse and validate response
    const videos = parseYouTubeResponse(data)

    if (videos.length === 0) {
      console.warn("[YouTube API] No videos found in response")
      return NextResponse.json(getFallbackData())
    }

    // Get additional video details (statistics, content details)
    const videoIds = videos.map((v) => v.id).join(",")
    const detailsUrl = buildYouTubeURL("videos", {
      key: apiKey,
      id: videoIds,
      part: "statistics,contentDetails",
    })

    try {
      const detailsResponse = await fetchWithRetry(detailsUrl)
      const detailsData = await detailsResponse.json()

      // Merge statistics into videos
      if (detailsData.items) {
        detailsData.items.forEach((item: any) => {
          const video = videos.find((v) => v.id === item.id)
          if (video && item.statistics) {
            video.viewCount = item.statistics.viewCount
            video.likeCount = item.statistics.likeCount
          }
          if (video && item.contentDetails) {
            video.duration = item.contentDetails.duration
          }
        })
      }
    } catch (error) {
      console.warn("[YouTube API] Failed to fetch video details:", error)
      // Continue without detailed statistics
    }

    const result: YouTubeResponse = {
      videos,
      nextPageToken: data.nextPageToken,
      totalResults: data.pageInfo?.totalResults || videos.length,
      responseTime: Date.now() - startTime,
    }

    // Update cache
    cache = { data: result, timestamp: Date.now() }

    console.log(`[YouTube API] Success: ${videos.length} videos in ${Date.now() - startTime}ms`)

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        "CDN-Cache-Control": "public, s-maxage=300",
        "Vercel-CDN-Cache-Control": "public, s-maxage=300",
      },
    })
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
      })
    }

    // Final fallback
    return NextResponse.json(getFallbackData())
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
