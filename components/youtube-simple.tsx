"use client"

import { useState } from "react"
import { Play, Calendar, Eye, ExternalLink } from "lucide-react"
import { getVideosByCategory, type VideoData, getViewCount } from "@/lib/youtube-data"

interface YouTubeSimpleProps {
  title?: string
  description?: string
  maxVideos?: number
  category?: string
  className?: string
}

export function YouTubeSimple({
  title = "Videoclipuri YouTube",
  description,
  maxVideos = 3,
  category = "all",
  className = "",
}: YouTubeSimpleProps) {
  // Get videos and filter out ones with less than 5 views
  const [videos] = useState<VideoData[]>(() => {
    const allVideos = getVideosByCategory(category, maxVideos * 2) // Get more videos to account for filtering
    return allVideos.filter(video => getViewCount(video.viewCount) >= 5).slice(0, maxVideos)
  })

  return (
    <section className={`w-full py-8 bg-black ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#FF0000] p-1.5 rounded-full">
                <Play className="text-white w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
            </div>
            {description && <p className="text-white/70 text-sm">{description}</p>}
          </div>

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

        {/* Videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="bg-[#111111] rounded-lg overflow-hidden group hover:bg-[#1A1A1A] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video bg-gray-800">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Simple fallback to a default image
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
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-full flex items-center gap-1">
                    <Eye className="w-3 h-3 text-white/80" />
                    <span className="text-white text-xs">{video.viewCount}</span>
                  </div>

                  {/* PHM Logo */}
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded">
                    <span className="text-white text-xs font-bold">PHM</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-semibold text-base mb-2 line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">{video.description}</p>

                  <div className="flex items-center text-white/60 text-xs">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <span>{video.publishedAt}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
