"use server"

import { XMLParser } from "fast-xml-parser"

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  viewCount: string
}

// Fallback videos to use when fetching fails
const FALLBACK_VIDEOS: YouTubeVideo[] = [
  {
    id: "Yd-Uc8_QgSI",
    title: "Voluntari sunt și cei care fac bine fără să știe nimeni",
    description: "Voluntariat în comunitate",
    thumbnail: "https://i.ytimg.com/vi/Yd-Uc8_QgSI/maxresdefault.jpg",
    publishedAt: "15 mai 2023",
    viewCount: "1,245 vizualizări",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Spring Cocktail 2023 - Highlights",
    description: "Highlights from our annual Spring Cocktail event",
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    publishedAt: "10 iunie 2023",
    viewCount: "876 vizualizări",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Energynomics Awards 2024 - Gala Ceremony",
    description: "Coverage of the Energynomics Awards ceremony",
    thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    publishedAt: "22 martie 2024",
    viewCount: "2,134 vizualizări",
  },
]

// Education videos fallback
const EDUCATION_VIDEOS: YouTubeVideo[] = [
  {
    id: "YL9TbJF2x8k",
    title: "Somnul copiilor",
    description: "Somnul copiilor. De vorba cu Iulia! 20.05.2025",
    thumbnail: "https://i.ytimg.com/vi/YL9TbJF2x8k/maxresdefault.jpg",
    publishedAt: "20 mai 2025",
    viewCount: "18 vizualizări",
  },
  {
    id: "Jv3MdHwLh9E",
    title: "Creme care șterg ridurile",
    description: "Creme care șterg ridurile. De vorba cu Iulia! 19.05.2025",
    thumbnail: "https://i.ytimg.com/vi/Jv3MdHwLh9E/maxresdefault.jpg",
    publishedAt: "19 mai 2025",
    viewCount: "81 vizualizări",
  },
  {
    id: "FRvJp9JEXcw",
    title: "Micile lucruri mari sezon 2 Episodul 20 Vera Rubin",
    description:
      "Vera Rubin a privit cerul și a văzut ceea ce nimeni altcineva nu observase. A avut curajul să conteste...",
    thumbnail: "https://i.ytimg.com/vi/FRvJp9JEXcw/maxresdefault.jpg",
    publishedAt: "18 mai 2025",
    viewCount: "28 vizualizări",
  },
]

// Function to format date to Romanian format
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    const months = [
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
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  } catch (e) {
    return dateString
  }
}

// Function to extract video ID from YouTube URL
function extractVideoId(url: string): string {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : ""
}

// Function to fetch YouTube videos using RSS feed
export async function fetchYouTubeVideosRSS(channelId: string, maxResults = 3, category = "latest") {
  console.log(`[SERVER RSS] Fetching ${category} videos for channel ${channelId}, max: ${maxResults}`)

  // Check if we should use education videos
  if (category === "education") {
    console.log("[SERVER RSS] Using education videos for education category")
    return {
      videos: EDUCATION_VIDEOS.slice(0, maxResults),
      error: null,
      usingFallback: true,
    }
  }

  try {
    // Fetch the RSS feed for the channel
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    console.log(`[SERVER RSS] Fetching RSS feed from: ${rssUrl}`)

    const response = await fetch(rssUrl, { next: { revalidate: 3600 } }) // Cache for 1 hour
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`)
    }

    const xml = await response.text()
    console.log(`[SERVER RSS] Received XML response of length: ${xml.length}`)

    // Parse the XML
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    })
    const result = parser.parse(xml)

    // Extract the videos
    const entries = result.feed.entry || []
    console.log(`[SERVER RSS] Found ${entries.length} entries in RSS feed`)

    if (!Array.isArray(entries) || entries.length === 0) {
      throw new Error("No videos found in RSS feed")
    }

    // Map the entries to our video format
    const videos: YouTubeVideo[] = entries.slice(0, maxResults).map((entry: any) => {
      const videoId = extractVideoId(entry.link["@_href"])
      return {
        id: videoId,
        title: entry.title,
        description: entry["media:group"]["media:description"] || "",
        thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        publishedAt: formatDate(entry.published),
        viewCount: "N/A vizualizări", // Will be updated below if possible
      }
    })

    // Try to fetch view counts if we have an API key
    if (process.env.YOUTUBE_API_KEY) {
      try {
        const apiKey = process.env.YOUTUBE_API_KEY
        const videoIds = videos.map((v) => v.id).join(",")
        const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`

        console.log(`[SERVER RSS] Fetching view counts for videos: ${videoIds}`)
        const statsResponse = await fetch(statsUrl, { next: { revalidate: 3600 } })

        if (statsResponse.ok) {
          const statsData = await statsResponse.json()

          if (statsData.items && statsData.items.length > 0) {
            // Update videos with view counts
            statsData.items.forEach((item: any) => {
              const video = videos.find((v) => v.id === item.id)
              if (video && item.statistics && item.statistics.viewCount) {
                const viewCount = Number.parseInt(item.statistics.viewCount, 10)
                video.viewCount = `${viewCount.toLocaleString("ro-RO")} vizualizări`
              }
            })
            console.log(`[SERVER RSS] Successfully updated videos with view counts`)
          }
        }
      } catch (error) {
        console.error(`[SERVER RSS] Error fetching view counts:`, error)
        // Continue without view counts if there's an error
      }
    }

    console.log(`[SERVER RSS] Processed ${videos.length} videos`)
    return {
      videos,
      error: null,
      usingFallback: false,
    }
  } catch (error) {
    console.error("[SERVER RSS] Error fetching videos:", error)
    return {
      videos: FALLBACK_VIDEOS.slice(0, maxResults),
      error: `Error fetching videos: ${error instanceof Error ? error.message : String(error)}`,
      usingFallback: true,
    }
  }
}
