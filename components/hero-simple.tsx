"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronRight, Calendar, Eye, Play } from "lucide-react"
import type { YouTubeVideo } from "@/lib/youtube-api"

export function HeroSimple() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch latest video
  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch('/api/youtube/videos?maxResults=1')
        const data = await response.json()
        if (data.videos && data.videos.length > 0) {
          setLatestVideo(data.videos[0])
        }
      } catch (error) {
        console.error('Failed to fetch latest video:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestVideo()
  }, [])

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2.jpg-Gl7J1nn08TVo3HMNm5XNYeQ3z5rXX5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3.jpg-srcW7f7NAbkxorrKY1TPzcKhJ1TMzc.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-QdrjlzBc3qOmpItstcb0mr0C4tFjsG.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_left-MVEsTolZFENCvkoNi3FXecTtVlrIJD.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_right-e3PRxwb7TE0t70xL0pcqbi16kptil1.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const upcomingEvent = {
    title: "Spring Cocktail 2025",
    date: "15 Iunie 2025",
    location: "Le Dome, București",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0019.jpg-N6oPrpWHEOA7stJ1C5IXd4AXo4WZ6J.jpeg",
  }

  return (
    <section id="home" className="relative pt-[120px] pb-[80px] px-0 max-w-full mx-auto overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out w-full"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover w-full"
                priority={index === 0}
                unoptimized
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/60 z-10 w-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-5 md:px-[120px] max-w-[1400px] mx-auto">
        {/* Left content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block">
            <motion.div
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-white font-light tracking-wider text-sm">Perfect Home Media</span>
            </motion.div>
          </div>

          <h1 className="font-bold text-[42px] md:text-[56px] leading-[1.1] text-white mb-6">
            We brand your <span style={{ color: "#FF0000" }}>lifestyle</span>
          </h1>

          <p className="text-[18px] text-white/80 mb-8 max-w-[600px]">
            Suntem mai mult decât o agenție de media. Suntem partenerul tău în construirea unui brand memorabil.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all flex items-center"
            >
              Solicită o ofertă
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
            >
              Vezi proiectele noastre
            </a>
          </div>

          {/* Floating Cards */}
          <div className="mt-12">
            <p className="text-sm text-white/60 mb-4">Descoperă mai mult:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* YouTube Video Card */}
              <motion.div
                className="bg-[#111111] rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {isLoading ? (
                  <div className="h-[120px] bg-gray-800 animate-pulse" />
                ) : latestVideo ? (
                <a
                  href={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-[120px] bg-gray-800">
                    <img
                        src={latestVideo.thumbnails.medium || latestVideo.thumbnails.default}
                      alt={latestVideo.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/youtube-video-thumbnail.png"
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#FF0000]/80 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Eye className="w-2.5 h-2.5 text-white/80" />
                        <span className="text-white text-[10px]">{latestVideo.viewCount || '0'} vizualizări</span>
                    </div>

                    <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
                      <span className="text-white text-xs font-bold">PHM</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{latestVideo.title}</h3>
                    <p className="text-white/70 text-xs mb-2 line-clamp-1">{latestVideo.description}</p>
                    <div className="flex items-center text-white/60 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(latestVideo.publishedAt).toLocaleDateString('ro-RO', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="h-[120px] bg-gray-800 flex items-center justify-center">
                    <p className="text-white/60 text-sm">Nu s-au găsit videoclipuri</p>
                  </div>
                )}
              </motion.div>

              {/* Event Card */}
              <motion.div
                className="bg-[#111111] rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <a href="/projects" className="block">
                  <div className="relative h-[120px]">
                    <Image
                      src={upcomingEvent.image || "/placeholder.svg"}
                      alt={upcomingEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
                      <span className="text-white text-xs font-bold">PHM</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold text-white mb-1">{upcomingEvent.title}</h3>
                    <p className="text-white/70 text-xs mb-2">
                      {upcomingEvent.date} • {upcomingEvent.location}
                    </p>
                    <div className="flex items-center text-[#FF0000] text-xs font-medium group-hover:underline">
                      Vezi toate evenimentele
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px] relative">
                <Image
                  src="/images/landscape-dock.jpeg"
                  alt="Landscape with dock"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src="/images/vintage-camera.jpeg"
                  alt="Vintage camera"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src="/images/microphone.jpeg"
                  alt="Microphone"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px] relative">
                <Image
                  src="/images/modern-interior.jpeg"
                  alt="Modern interior"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-20 mt-20 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/10 mx-5 md:mx-[120px] max-w-[1400px] lg:mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">200+</h3>
            <p className="text-white/80">Proiecte finalizate</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">15+</h3>
            <p className="text-white/80">Ani de experiență</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">150+</h3>
            <p className="text-white/80">Clienți mulțumiți</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">98%</h3>
            <p className="text-white/80">Rată de satisfacție</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
