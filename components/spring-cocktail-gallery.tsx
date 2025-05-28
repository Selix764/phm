"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function SpringCocktailGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const images = [
    {
      src: "/projects/spring-cocktail-1.jpeg",
      alt: "Spring Cocktail 2025 - Attendees receiving gift bags",
    },
    {
      src: "/projects/spring-cocktail-2.jpeg",
      alt: "Spring Cocktail 2025 - Speaker presenting on stage",
    },
    {
      src: "/projects/spring-cocktail-3.jpeg",
      alt: "Spring Cocktail 2025 - Karoly Borbe speaking",
    },
    {
      src: "/projects/spring-cocktail-4.jpeg",
      alt: "Spring Cocktail 2025 - Panel discussion",
    },
    {
      src: "/projects/spring-cocktail-5.jpeg",
      alt: "Spring Cocktail 2025 - Networking and gift distribution",
    },
    {
      src: "/projects/spring-cocktail-6.jpeg",
      alt: "Spring Cocktail 2025 - Audience at the event",
    },
    {
      src: "/projects/spring-cocktail-7.jpeg",
      alt: "Spring Cocktail 2025 - Attendees with gift bags",
    },
    {
      src: "/projects/spring-cocktail-8.jpeg",
      alt: "Spring Cocktail 2025 - Dunhill bar area",
    },
    {
      src: "/projects/spring-cocktail-9.jpeg",
      alt: "Spring Cocktail 2025 - Outside Le Dome venue",
    },
    {
      src: "/projects/spring-cocktail-10.jpeg",
      alt: "Spring Cocktail 2025 - Attendees posing with event backdrop",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-white">Spring Cocktail 2025</h2>
        <p className="text-xl text-white/70 mb-12">Un eveniment exclusivist organizat de Energynomics</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
