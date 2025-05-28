"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, RefreshCw, ExternalLink, Calendar, Eye } from "lucide-react"

// Define video data structure
interface VideoItem {
  id: string
  youtubeId: string
  title: string
  description: string
  publishedAt: string
  viewCount: string
  thumbnail: string
}

// Static video data with actual YouTube IDs
const EDUCATION_VIDEOS: VideoItem[] = [
  {
    id: "video1",
    youtubeId: "YL9TbJF2x8k", // Sleep tips for children video
    title: "Somnul copiilor.",
    description: "Somnul copiilor. De vorba cu Iulia! 20 05 2025 www.iuliazgripcea.ro www.perfecthomemedia.ro",
    publishedAt: "20 mai 2025",
    viewCount: "18 vizualizări",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/dark-haired-woman-talking-ikl26ciwCtQoO9a3G30QN1reyqRbrN.png",
  },
  {
    id: "video2",
    youtubeId: "Jv3MdHwLh9E", // Anti-aging creams video
    title: "Creme care șterg ridurile.",
    description: "Creme care șterg ridurile. De vorba cu Iulia! 19 05 2025 www.iuliazgripcea.ro",
    publishedAt: "19 mai 2025",
    viewCount: "81 vizualizări",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/dark-haired-woman-talking-ikl26ciwCtQoO9a3G30QN1reyqRbrN.png",
  },
  {
    id: "video3",
    youtubeId: "FRvJp9JEXcw", // Vera Rubin astronomy video
    title: "Micile lucruri mari sezon 2 Episodul 20 Vera Rubin",
    description:
      "Vera Rubin a privit cerul și a văzut ceea ce nimeni altcineva nu observase. A avut curajul să conteste...",
    publishedAt: "18 mai 2025",
    viewCount: "28 vizualizări",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/man-talking-dark-yHstRnLkHuSYdjlYO8BwaZY4f4v1yd.png",
  },
]

interface EducationInspirationSectionDirectProps {
  maxVideos?: number
  channelId?: string
}

export function EducationInspirationSectionDirect({
  maxVideos = 3,
  channelId = "UCVcQFFnRV6gaOyM8l7YmjMw",
}: EducationInspirationSectionDirectProps) {
  const limitedVideos = EDUCATION_VIDEOS.slice(0, maxVideos)

  return (
    <section className="w-full py-12 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF0000] p-2 rounded-full">
              <Play className="text-white w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-white">Secțiunea de educație & inspirație</h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-3 py-1.5 rounded-full transition-colors text-sm">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reîncarcă</span>
            </button>
            <Link
              href={`https://www.youtube.com/channel/${channelId}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white px-3 py-1.5 rounded-full transition-colors text-sm"
            >
              <span>Vezi toate videoclipurile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {limitedVideos.map((video) => (
            <div key={video.id} className="bg-[#111111] rounded-lg overflow-hidden group">
              <Link
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-[#FF0000]/80 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* PHM Logo Watermark */}
                  <div className="absolute top-2 right-2 bg-black/50 p-1 rounded">
                    <span className="text-white text-xs font-bold">PHM</span>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="text-white font-medium text-base mb-1">{video.title}</h3>
                  <p className="text-white/60 text-xs mb-2 line-clamp-2">{video.description}</p>

                  <div className="flex justify-between text-white/60 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{video.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.viewCount}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
