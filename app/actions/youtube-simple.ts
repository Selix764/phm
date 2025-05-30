"use server"

import { getViewCount } from "@/lib/youtube-data"

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  viewCount: string
}

// Fallback videos if API fails - filtered to only show ones with 5+ views
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "Jv3MdHwLh9E",
    title: "Creme care șterg ridurile",
    description: "Creme care șterg ridurile. De vorba cu Iulia! 19.05.2025",
    publishedAt: "19 mai 2025",
    thumbnail: "https://img.youtube.com/vi/Jv3MdHwLh9E/mqdefault.jpg",
    viewCount: "81 vizualizări",
  },
  {
    id: "FRvJp9JEXcw",
    title: "Micile lucruri mari sezon 2 Episodul 20 Vera Rubin",
    description: "Vera Rubin a privit cerul și a văzut ceea ce nimeni altcineva nu observase.",
    publishedAt: "18 mai 2025",
    thumbnail: "https://img.youtube.com/vi/FRvJp9JEXcw/mqdefault.jpg",
    viewCount: "28 vizualizări",
  },
  {
    id: "dm1TxidYb2Q",
    title: "Tehnologie și inovație",
    description: "Ultimele tendințe în tehnologie și cum ne afectează viața",
    publishedAt: "15 mai 2023",
    thumbnail: "https://img.youtube.com/vi/dm1TxidYb2Q/mqdefault.jpg",
    viewCount: "82 vizualizări",
  },
]

// Format view count
function formatViewCount(count: number): string {
  return `${count.toLocaleString("ro-RO")} vizualizări`
}

// Format date to Romanian format
function formatDate(isoDate: string): string {
  try {
    const date = new Date(isoDate)
    const day = date.getDate()
    const monthNames = [
      "ianuarie",
      "februarie",
      "martie",
      "aprilie",
      "mai",
      "iunie",
      "iulie",
      "august",
      "septembrie",
      "octombrie",
      "noiembrie",
      "decembrie",
    ]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  } catch {
    return isoDate
  }
}

export async function fetchYouTubeVideos(channelId = "UCVcQFFnRV6gaOyM8l7YmjMw", maxResults = 3) {
  console.log(`[SERVER] Fetching videos for channel ${channelId}...`)

  try {
    const apiKey = process.env.YOUTUBE_API_KEY

    if (!apiKey) {
      console.error("[SERVER] YouTube API key is missing")
      return { videos: FALLBACK_VIDEOS.filter(v => getViewCount(v.viewCount) >= 5), error: "YouTube API key is missing" }
    }

    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    const channelResponse = await fetch(channelUrl, { cache: "no-store" })

    if (!channelResponse.ok) throw new Error(`Channel API error: ${channelResponse.status}`)

    const channelData = await channelResponse.json()
    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads
    if (!uploadsPlaylistId) throw new Error("Upload playlist not found")

    let nextPageToken = ""
    const validVideos: YouTubeVideo[] = []

    while (validVideos.length < maxResults) {
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${apiKey}&pageToken=${nextPageToken}`
      const playlistResponse = await fetch(playlistUrl, { cache: "no-store" })
      if (!playlistResponse.ok) throw new Error(`Playlist API error: ${playlistResponse.status}`)

      const playlistData = await playlistResponse.json()
      const videoItems = playlistData.items || []
      if (videoItems.length === 0) break

      const videoIds = videoItems.map((item: any) => item.snippet.resourceId.videoId).join(",")
      const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
      const videosResponse = await fetch(videosUrl, { cache: "no-store" })
      const videosData = await videosResponse.json()

      const statsMap = (videosData.items || []).reduce((acc: Record<string, any>, item: any) => {
        acc[item.id] = item.statistics
        return acc
      }, {})

      for (const item of videoItems) {
        const videoId = item.snippet.resourceId.videoId
        const stats = statsMap[videoId]
        const viewCountNum = stats?.viewCount ? parseInt(stats.viewCount) : 0

        if (viewCountNum >= 5) {
          validVideos.push({
            id: videoId,
            title: item.snippet.title,
            description: item.snippet.description || "",
            publishedAt: formatDate(item.snippet.publishedAt),
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            viewCount: formatViewCount(viewCountNum),
          })
        }

        if (validVideos.length === maxResults) break
      }

      if (!playlistData.nextPageToken) break
      nextPageToken = playlistData.nextPageToken
    }

    return {
      videos: validVideos,
      error: validVideos.length < maxResults ? "Not enough videos found with sufficient views" : null,
    }
  } catch (error) {
    console.error("[SERVER] Error fetching YouTube videos:", error)
    return {
      videos: FALLBACK_VIDEOS.filter(v => getViewCount(v.viewCount) >= 5),
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
