// Force static generation for GitHub Pages deployment
export const dynamic = 'force-static'
export const revalidate = false

import { NextResponse } from "next/server"
import {
  YOUTUBE_CONFIG,
  getYouTubeApiKey,
  buildYouTubeUrl,
  fetchWithRetry,
  parseVideoData,
  type YouTubeResponse,
  YouTubeResponseSchema,
} from "@/lib/youtube"

// Define types for YouTube API responses
interface YouTubePlaylistItem {
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: { url: string }
      medium: { url: string }
      high: { url: string }
      standard?: { url: string }
      maxres?: { url: string }
    }
    resourceId: {
      videoId: string
    }
  }
  status: {
    privacyStatus: string
  }
}

interface VideoDetails {
  id: string
  status?: {
    uploadStatus?: string
    privacyStatus?: string
    publishAt?: string
  }
  statistics?: {
    viewCount?: string
    likeCount?: string
  }
  contentDetails?: {
    duration?: string
  }
}

// Simple in-memory cache
type Cache = {
  data: YouTubeResponse
  timestamp: number
}

let cache: Cache | null = null

function isVideoPublished(item: any): boolean {
  // Check if video is public
  if (item.status?.privacyStatus !== "public") {
    return false
  }

  // Check if video is already published (not scheduled)
  const publishedAt = new Date(item.snippet.publishedAt)
  const now = new Date()

  // If publishedAt is in the future, it's scheduled
  if (publishedAt > now) {
    return false
  }
  
  return true
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get("q")?.toLowerCase() || ""

    // Check cache if no search query
    if (!query && cache && Date.now() - cache.timestamp < YOUTUBE_CONFIG.CACHE_DURATION * 1000) {
      return NextResponse.json({
        ...cache.data,
        cached: true,
      })
    }

    // Fetch fresh data from YouTube API
    const apiKey = "AIzaSyBBZwxS6oZtryQ5g02R-EVQXSIikC7oo-U"

    // 1. Get channel's uploads playlist ID
    const channelUrl = buildYouTubeUrl("channels", {
      key: apiKey,
      id: YOUTUBE_CONFIG.CHANNEL_ID,
      part: "contentDetails",
    })

    const channelResponse = await fetchWithRetry(channelUrl)
    const channelData = await channelResponse.json()

    if (!channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads) {
      throw new Error("Could not find uploads playlist")
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // 2. Get latest videos from uploads playlist
    const playlistUrl = buildYouTubeUrl("playlistItems", {
      key: apiKey,
      playlistId: uploadsPlaylistId,
      part: "snippet,status",
      maxResults: "20", // Increased to account for filtered videos
    })

    const playlistResponse = await fetchWithRetry(playlistUrl)
    const playlistData = await playlistResponse.json()

    if (!playlistData.items?.length) {
      throw new Error("No videos found")
    }

    // Filter videos by publish status and search query
    const publishedVideos = playlistData.items
      .filter(isVideoPublished)
      .filter((item: any) => {
        if (!query) return true
        
        try {
          const title = item.snippet?.title?.toLowerCase() || ""
          const description = item.snippet?.description?.toLowerCase() || ""
          return title.includes(query) || description.includes(query)
        } catch (error) {
          console.warn("[YouTube API] Error filtering video:", error)
          return false
        }
      })

    if (!publishedVideos.length) {
      return NextResponse.json({
        videos: [],
        totalResults: 0,
        message: query ? "No videos found matching your search" : "No published videos found",
      })
    }

    // Take only the first 10 published videos
    const publicVideos = publishedVideos.slice(0, 10)

    // Extract video IDs for detailed info
    const videoIds = publicVideos.map((item: any) => item.snippet.resourceId.videoId).join(",")

    // 3. Get detailed video information
    const detailsUrl = buildYouTubeUrl("videos", {
      key: apiKey,
      id: videoIds,
      part: "statistics,contentDetails,status",
    })

    const detailsResponse = await fetchWithRetry(detailsUrl)
    const detailsData = await detailsResponse.json()

    // Create a map of video details
    const detailsMap = new Map<string, VideoDetails>(
      (detailsData.items || [])
        .filter((item: VideoDetails) => item.status?.uploadStatus === "processed")
        .map((item: VideoDetails) => [item.id, item])
    )

    // Combine playlist items with details
    const videos = publicVideos.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId
      const details = detailsMap.get(videoId)
      
      return parseVideoData({
        snippet: {
          resourceId: { videoId },
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnails: item.snippet.thumbnails,
        },
        statistics: details?.statistics || {},
        contentDetails: details?.contentDetails || {},
      })
    })

    // Prepare response
    const response: YouTubeResponse = YouTubeResponseSchema.parse({
      videos,
      totalResults: videos.length,
      nextPageToken: playlistData.nextPageToken,
    })

    // Update cache only for non-search requests
    if (!query) {
      cache = {
        data: response,
        timestamp: Date.now(),
      }
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("[YouTube API] Error:", error)
    
    return NextResponse.json(
      {
        videos: [],
        totalResults: 0,
        error: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    )
  }
} 