import { z } from "zod"

// Configuration
export const YOUTUBE_CONFIG = {
  API_BASE_URL: "https://www.googleapis.com/youtube/v3",
  CHANNEL_ID: "UCVcQFFnRV6gaOyM8l7YmjMw",
  MAX_RESULTS: 50,
  CACHE_DURATION: 120, // 2 minutes
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
}

// Type Definitions with Zod for runtime validation
export const VideoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  thumbnails: z.object({
    default: z.string(),
    medium: z.string(),
    high: z.string(),
    standard: z.string().optional(),
    maxres: z.string().optional(),
  }),
  statistics: z.object({
    viewCount: z.string().optional(),
    likeCount: z.string().optional(),
  }).optional(),
  duration: z.string().optional(),
})

export type Video = z.infer<typeof VideoSchema>

export const YouTubeResponseSchema = z.object({
  videos: z.array(VideoSchema),
  nextPageToken: z.string().optional(),
  totalResults: z.number(),
  error: z.string().optional(),
  cached: z.boolean().optional(),
  stale: z.boolean().optional(),
})

export type YouTubeResponse = z.infer<typeof YouTubeResponseSchema>

// Utility Functions
export function getYouTubeApiKey(): string {
  const apiKey = "AIzaSyBBZwxS6oZtryQ5g02R-EVQXSIikC7oo-U"
  if (!apiKey) {
    throw new Error("YouTube API key is not configured")
  }
  return apiKey
}

export function buildYouTubeUrl(endpoint: string, params: Record<string, string>): string {
  const url = new URL(`${YOUTUBE_CONFIG.API_BASE_URL}/${endpoint}`)
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value)
  })
  return url.toString()
}

export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = YOUTUBE_CONFIG.RETRY_ATTEMPTS
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          ...options.headers,
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return response
    } catch (error) {
      lastError = error as Error
      console.error(`[YouTube] Fetch attempt ${attempt + 1} failed:`, error)

      if (attempt < retries) {
        const delay = YOUTUBE_CONFIG.RETRY_DELAY * Math.pow(2, attempt)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError || new Error("Max retries exceeded")
}

interface YouTubePlaylistItem {
  snippet: {
    resourceId?: {
      videoId?: string
    }
    title?: string
    description?: string
    publishedAt?: string
    thumbnails?: {
      default?: { url: string }
      medium?: { url: string }
      high?: { url: string }
      standard?: { url: string }
      maxres?: { url: string }
    }
  }
  statistics?: {
    viewCount?: string
    likeCount?: string
  }
  contentDetails?: {
    duration?: string
  }
}

export function parseVideoData(item: YouTubePlaylistItem): Video {
  const { snippet = {}, statistics = {}, contentDetails = {} } = item
  const { resourceId = {}, thumbnails = {} } = snippet

  return VideoSchema.parse({
    id: resourceId.videoId || "",
    title: snippet.title || "",
    description: snippet.description || "",
    publishedAt: snippet.publishedAt || new Date().toISOString(),
    thumbnails: {
      default: thumbnails.default?.url || "",
      medium: thumbnails.medium?.url || "",
      high: thumbnails.high?.url || "",
      standard: thumbnails.standard?.url,
      maxres: thumbnails.maxres?.url,
    },
    statistics: {
      viewCount: statistics.viewCount,
      likeCount: statistics.likeCount,
    },
    duration: contentDetails.duration,
  })
}

export function formatViewCount(count?: string): string {
  if (!count) return "0 views"
  const num = parseInt(count, 10)
  
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M views`
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K views`
  }
  return `${num} views`
}

export function formatPublishDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
} 