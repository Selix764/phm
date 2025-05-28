"use server"

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnail: string
  viewCount: string
}

// Fallback videos if API fails
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "YL9TbJF2x8k",
    title: "Somnul copiilor",
    description: "Somnul copiilor. De vorba cu Iulia! 20.05.2025",
    publishedAt: "20 mai 2025",
    thumbnail: "https://img.youtube.com/vi/YL9TbJF2x8k/mqdefault.jpg",
    viewCount: "18 vizualizări",
  },
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
    // Get API key from environment variables
    const apiKey = process.env.YOUTUBE_API_KEY

    if (!apiKey) {
      console.error("[SERVER] YouTube API key is missing")
      return { videos: FALLBACK_VIDEOS, error: "YouTube API key is missing" }
    }

    // 1. Get the channel's uploads playlist ID
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    const channelResponse = await fetch(channelUrl, { cache: "no-store" })

    if (!channelResponse.ok) {
      throw new Error(`Channel API error: ${channelResponse.status}`)
    }

    const channelData = await channelResponse.json()

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found")
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads

    // 2. Get videos from the uploads playlist
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${uploadsPlaylistId}&key=${apiKey}`
    const playlistResponse = await fetch(playlistUrl, { cache: "no-store" })

    if (!playlistResponse.ok) {
      throw new Error(`Playlist API error: ${playlistResponse.status}`)
    }

    const playlistData = await playlistResponse.json()

    if (!playlistData.items || playlistData.items.length === 0) {
      throw new Error("No videos found")
    }

    // 3. Get video statistics
    const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(",")
    const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
    const videosResponse = await fetch(videosUrl, { cache: "no-store" })

    let videoStats: Record<string, any> = {}

    if (videosResponse.ok) {
      const videosData = await videosResponse.json()

      // Create a map of video ID to statistics
      videoStats = (videosData.items || []).reduce((acc: Record<string, any>, item: any) => {
        acc[item.id] = item.statistics
        return acc
      }, {})
    }

    // 4. Map the data to our format
    const videos: YouTubeVideo[] = playlistData.items.map((item: any) => {
      const videoId = item.snippet.resourceId.videoId
      const stats = videoStats[videoId] || {}

      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description || "",
        publishedAt: formatDate(item.snippet.publishedAt),
        thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        viewCount: stats.viewCount ? formatViewCount(Number.parseInt(stats.viewCount)) : "N/A",
      }
    })

    return { videos, error: null }
  } catch (error) {
    console.error("[SERVER] Error fetching YouTube videos:", error)
    return {
      videos: FALLBACK_VIDEOS,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
