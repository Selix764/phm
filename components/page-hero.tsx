"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

interface HeroImage {
  src: string
  alt: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  showCta?: boolean
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  heroImages?: {
    topLeft?: HeroImage
    bottomLeft?: HeroImage
    topRight?: HeroImage
    bottomRight?: HeroImage
  }
  isContactPage?: boolean
}

export function PageHero({
  title,
  subtitle,
  description,
  showCta = true,
  ctaText,
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink = "/projects",
  heroImages,
  isContactPage = false,
}: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { t } = useLanguage()

  // Use translations for default values if not provided
  const finalDescription = description || t("pageHero.defaultDescription")
  const finalCtaText = ctaText || t("pageHero.requestQuote")
  const finalSecondaryCtaText = secondaryCtaText || t("pageHero.viewProjects")

  // Default hero images if none are provided
  const defaultHeroImages = {
    topLeft: { src: "/images/cat.webp", alt: t("pageHero.images.cat") },
    bottomLeft: { src: "/images/street-shadows.jpeg", alt: t("pageHero.images.streetShadows") },
    topRight: { src: "/images/silhouette-stripes.png", alt: t("pageHero.images.silhouetteStripes") },
    bottomRight: { src: "/images/landscape-dock.jpeg", alt: t("pageHero.images.landscapeDock") },
  }

  // Merge provided images with defaults
  const images = {
    topLeft: heroImages?.topLeft || defaultHeroImages.topLeft,
    bottomLeft: heroImages?.bottomLeft || defaultHeroImages.bottomLeft,
    topRight: heroImages?.topRight || defaultHeroImages.topRight,
    bottomRight: heroImages?.bottomRight || defaultHeroImages.bottomRight,
  }

  const backgroundImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2.jpg-Gl7J1nn08TVo3HMNm5XNYeQ3z5rXX5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3.jpg-srcW7f7NAbkxorrKY1TPzcKhJ1TMzc.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-QdrjlzBc3qOmpItstcb0mr0C4tFjsG.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_left-MVEsTolZFENCvkoNi3FXecTtVlrIJD.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_right-e3PRxwb7TE0t70xL0pcqbi16kptil1.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative pt-[120px] pb-[80px] px-0 max-w-full mx-auto overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full">
        <div className="relative w-full h-full">
          {backgroundImages.map((src, index) => (
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
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/60 z-10 w-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-5 md:px-[120px] max-w-[1400px] mx-auto">
        {/* Content - takes 7 columns on large screens */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-block">
            <motion.div
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-white font-light tracking-wider text-sm">Perfect Home Media</span>
            </motion.div>
          </div>

          {/* Linear text for all pages */}
          <div className="mb-8">
            <h1 className="font-bold text-[36px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.1] text-white mb-0 md:mb-0 hyphens-auto">
              {title}
              {subtitle && <span className="text-[#FF0000]"> {subtitle}</span>}
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-[22px] text-white/80 mb-10 max-w-[600px]">{finalDescription}</p>

          {showCta && (
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link
                href={ctaLink}
                className="group bg-[#FF0000] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all flex items-center text-base sm:text-lg"
              >
                {finalCtaText}
                <ChevronRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryCtaLink}
                className="border border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all text-base sm:text-lg"
              >
                {finalSecondaryCtaText}
              </Link>
            </div>
          )}
        </motion.div>

        {/* Right content - takes 5 columns on large screens */}
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
                  src={images.topLeft.src || "/placeholder.svg"}
                  alt={images.topLeft.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src={images.bottomLeft.src || "/placeholder.svg"}
                  alt={images.bottomLeft.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src={images.topRight.src || "/placeholder.svg"}
                  alt={images.topRight.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px] relative">
                <Image
                  src={images.bottomRight.src || "/placeholder.svg"}
                  alt={images.bottomRight.alt}
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
            <p className="text-white/80">{t("hero.stats.completedProjects")}</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">15+</h3>
            <p className="text-white/80">{t("hero.stats.yearsExperience")}</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">150+</h3>
            <p className="text-white/80">{t("hero.stats.satisfiedClients")}</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">98%</h3>
            <p className="text-white/80">{t("hero.stats.satisfactionRate")}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
