"use client"

import { useState, useEffect, useCallback, Suspense } from "react"
import { Play, Calendar, Eye, ExternalLink, AlertCircle, RefreshCw } from "lucide-react"
import { formatViewCount, formatDate, type YouTubeVideo, type YouTubeResponse } from "@/lib/youtube-api"

interface YouTubeRobustProps {
  title?: string
  description?: string
  maxVideos?: number
  category?: string
  className?: string
  autoLoad?: boolean
}

type LoadingState = "idle" | "loading" | "success" | "error"

const isLoading = (state: LoadingState): state is "loading" => state === "loading"
const isError = (state: LoadingState): state is "error" => state === "error"

function VideoSkeleton() {
  return (
    <div className="bg-[#111111] rounded-xl overflow-hidden animate-pulse">
      <div className="h-[200px] bg-gray-800" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-3 bg-gray-800 rounded w-1/2" />
      </div>
    </div>
  )
}

function VideoGrid({ videos }: { videos: YouTubeVideo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111111] rounded-xl overflow-hidden group hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div className="relative aspect-video bg-gray-800">
            <img
              src={video.thumbnails.medium || video.thumbnails.default}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/youtube-video-thumbnail.png"
              }}
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-[#FF0000]/90 flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </div>

            {/* View count badge */}
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1">
              <Eye className="w-3 h-3 text-white/80" />
              <span className="text-white text-xs">{formatViewCount(video.viewCount)}</span>
            </div>

            {/* PHM Logo */}
            <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
              <span className="text-white text-xs font-bold">PHM</span>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-white font-medium mb-2 line-clamp-2">{video.title}</h3>
            <p className="text-white/60 text-sm mb-3 line-clamp-2">{video.description}</p>
            <div className="flex items-center text-white/40 text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{formatDate(video.publishedAt)}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export function YouTubeRobust({
  title = "Videoclipuri YouTube",
  description,
  maxVideos = 6,
  category = "all",
  className = "",
  autoLoad = true,
}: YouTubeRobustProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loadingState, setLoadingState] = useState<LoadingState>("idle")
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const [isCached, setIsCached] = useState(false)
  const [isStale, setIsStale] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fetchVideos = useCallback(async () => {
    if (loadingState === "loading") return

    setLoadingState("loading")
    setError(null)

    const startTime = Date.now()

    try {
      const params = new URLSearchParams({
        maxResults: maxVideos.toString(),
        order: "date",
      })

      console.log(`[YouTube Robust] Fetching videos: ${params.toString()}`)

      const response = await fetch(`/api/youtube/videos?${params}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data: YouTubeResponse = await response.json()

      setResponseTime(Date.now() - startTime)
      setIsCached(data.cached || false)
      setIsStale(data.stale || false)

      if (data.error) {
        throw new Error(data.error)
      }

      if (!data.videos || data.videos.length === 0) {
        throw new Error("No videos found in response")
      }

      setVideos(data.videos)
      setTotalResults(data.totalResults || 0)
      setLoadingState("success")
      setRetryCount(0)

      console.log(`[YouTube Robust] Success: ${data.videos.length} videos loaded`)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred"
      console.error("[YouTube Robust] Error:", errorMessage)

      setError(errorMessage)
      setLoadingState("error")
      setRetryCount((prev) => prev + 1)
    }
  }, [maxVideos, loadingState])

  const handleRetry = useCallback(() => {
    console.log(`[YouTube Robust] Retry attempt ${retryCount + 1}`)
    fetchVideos()
  }, [fetchVideos, retryCount])

  useEffect(() => {
    if (mounted && autoLoad && loadingState === "idle") {
      // Delay initial load to prevent blocking render
      const timer = setTimeout(() => {
        fetchVideos()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [mounted, autoLoad, loadingState, fetchVideos])

  const renderStatusBadge = () => {
    if (!mounted) return null

    if (isCached) {
      return (
        <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          Cached
        </span>
      )
    }

    if (isStale) {
      return (
        <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          Stale
        </span>
      )
    }

    if (responseTime !== null) {
      return (
        <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          {responseTime}ms
        </span>
      )
    }

    return null
  }

  if (!mounted) {
    return (
      <div className={`w-full py-8 bg-black ${className}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: maxVideos }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full py-8 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#FF0000] p-1.5 rounded-full">
                <Play className="text-white w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              {renderStatusBadge()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isError(loadingState) && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full transition-colors text-sm"
                disabled={isLoading(loadingState)}
              >
                <RefreshCw className={`w-4 h-4 ${isLoading(loadingState) ? "animate-spin" : ""}`} />
                Retry ({retryCount})
              </button>
            )}

            <a
              href="https://www.youtube.com/channel/UCVcQFFnRV6gaOyM8l7YmjMw/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-4 py-2 rounded-full transition-colors text-sm"
            >
              <span>Vezi toate pe YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Loading State */}
        {isLoading(loadingState) && videos.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: maxVideos }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        )}

        {/* Error State */}
        {isError(loadingState) && videos.length === 0 && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <h3 className="text-red-500 font-medium mb-1">Nu s-au putut încărca videoclipurile</h3>
            <p className="text-red-400/80 text-sm mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Încearcă din nou
            </button>
          </div>
        )}

        {/* Videos Grid */}
        {videos.length > 0 && <VideoGrid videos={videos} />}
      </div>
    </div>
  )
}
