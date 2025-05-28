"use client"

import { useEffect, useState } from "react"
import { Play, Calendar, Eye } from "lucide-react"
import { type Video } from "@/lib/youtube"
import { formatViewCount, formatPublishDate } from "@/lib/youtube"

interface YouTubeFeedProps {
  className?: string
}

export function YouTubeFeed({ className = "" }: YouTubeFeedProps) {
  const [videos, setVideos] = useState<Video[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/youtube")
        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setVideos(data.videos)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load videos")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-lg">
        <p>Error loading videos: {error}</p>
      </div>
    )
  }

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Play className="text-red-600" />
          Latest Videos
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

interface VideoCardProps {
  video: Video
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnails.maxres || video.thumbnails.high}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatPublishDate(video.publishedAt)}</span>
          </div>
          
          {video.statistics?.viewCount && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{formatViewCount(video.statistics.viewCount)}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

function VideoSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-video bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3" />
      </div>
    </div>
  )
} 