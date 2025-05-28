// YouTube API configuration and utilities
export const YOUTUBE_CONFIG = {
  BASE_URL: "https://www.googleapis.com/youtube/v3",
  CHANNEL_ID: "UCVcQFFnRV6gaOyM8l7YmjMw",
  MAX_RESULTS: 50,
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second base delay
}

export interface YouTubeVideo {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnails: {
    default: string
    medium: string
    high: string
    standard?: string
    maxres?: string
  }
  viewCount?: string
  likeCount?: string
  duration?: string
  channelTitle: string
}

export interface YouTubeResponse {
  videos: YouTubeVideo[]
  nextPageToken?: string
  totalResults: number
  error?: string
  cached?: boolean
  stale?: boolean
  responseTime?: number
}

// Exponential backoff utility
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// DNS resolution check
export async function checkDNSResolution(): Promise<boolean> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const response = await fetch("https://www.googleapis.com/youtube/v3", {
      method: "HEAD",
      signal: controller.signal,
    })

    clearTimeout(timeoutId)
    return response.ok || response.status === 404 // 404 is expected for base URL
  } catch (error) {
    console.error("[DNS Check] Failed:", error)
    return false
  }
}

// Robust fetch with retry logic
export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries = YOUTUBE_CONFIG.RETRY_ATTEMPTS,
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), YOUTUBE_CONFIG.TIMEOUT)

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          Accept: "application/json",
          "User-Agent": "PHM-Website/1.0",
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
      console.error(`[Fetch Attempt ${attempt + 1}] Failed:`, error)

      if (attempt < maxRetries) {
        const delayMs = YOUTUBE_CONFIG.RETRY_DELAY * Math.pow(2, attempt)
        console.log(`[Retry] Waiting ${delayMs}ms before attempt ${attempt + 2}`)
        await delay(delayMs)
      }
    }
  }

  throw lastError || new Error("Max retries exceeded")
}

// Get API key with validation
export function getAPIKey(): string | null {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    console.warn("[YouTube API] No API key found in environment variables")
    return null
  }

  if (apiKey.length < 30) {
    console.warn("[YouTube API] API key appears to be invalid (too short)")
    return null
  }

  return apiKey
}

// Validate API key format
export function validateAPIKey(apiKey: string): boolean {
  // YouTube API keys are typically 39 characters long and alphanumeric
  const apiKeyPattern = /^[A-Za-z0-9_-]{35,45}$/
  return apiKeyPattern.test(apiKey)
}

// Build YouTube API URL
export function buildYouTubeURL(endpoint: string, params: Record<string, string>): string {
  const url = new URL(`${YOUTUBE_CONFIG.BASE_URL}/${endpoint}`)

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.append(key, value)
    }
  })

  return url.toString()
}

// Parse YouTube API response
export function parseYouTubeResponse(data: any): YouTubeVideo[] {
  if (!data.items || !Array.isArray(data.items)) {
    console.warn("[YouTube API] Invalid response format:", data)
    return []
  }

  return data.items.map((item: any) => {
    const snippet = item.snippet || {}
    const statistics = item.statistics || {}
    const contentDetails = item.contentDetails || {}

    return {
      id: item.id?.videoId || item.id,
      title: snippet.title || "Untitled Video",
      description: snippet.description || "",
      publishedAt: snippet.publishedAt || new Date().toISOString(),
      thumbnails: {
        default: snippet.thumbnails?.default?.url || "/youtube-video-thumbnail.png",
        medium: snippet.thumbnails?.medium?.url || "/youtube-video-thumbnail.png",
        high: snippet.thumbnails?.high?.url || "/youtube-video-thumbnail.png",
        standard: snippet.thumbnails?.standard?.url,
        maxres: snippet.thumbnails?.maxres?.url,
      },
      viewCount: statistics.viewCount,
      likeCount: statistics.likeCount,
      duration: contentDetails.duration,
      channelTitle: snippet.channelTitle || "Perfect Home Media",
    }
  })
}

// Format view count
export function formatViewCount(count: string | number | undefined): string {
  if (!count) return "0 vizualizări"

  const num = typeof count === "string" ? Number.parseInt(count, 10) : count

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M vizualizări`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K vizualizări`
  } else {
    return `${num} vizualizări`
  }
}

// Format date
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("ro-RO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch (error) {
    console.error("[Date Format] Error:", error)
    return "Data necunoscută"
  }
}
