"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Define the project image interface
interface GalleryImage {
  id: string
  src: string
  alt: string
  tags: string[]
}

// Define the gallery images with tags
const galleryImages: GalleryImage[] = [
  // Estee Lauder images
  {
    id: "estee-1",
    src: "/projects/estee-lauder-products-closeup.jpeg",
    alt: "Estee Lauder Advanced Night Repair serum bottles",
    tags: ["Estee Lauder"],
  },
  {
    id: "estee-2",
    src: "/projects/estee-lauder-macarons-display.jpeg",
    alt: "Estee Lauder event with macarons display",
    tags: ["Estee Lauder"],
  },
  {
    id: "estee-3",
    src: "/projects/estee-lauder-makeup-session.jpeg",
    alt: "Estee Lauder makeup session",
    tags: ["Estee Lauder"],
  },
  // Spotlight images
  {
    id: "spotlight-1",
    src: "/projects/spotlight-building-projection.jpeg",
    alt: "Building projection mapping for Spotlight event",
    tags: ["Spotlight"],
  },
  {
    id: "spotlight-2",
    src: "/projects/spotlight-light-figures.jpeg",
    alt: "Light figures installation at Spotlight festival",
    tags: ["Spotlight"],
  },
  {
    id: "spotlight-3",
    src: "/projects/spotlight-owl-projection.jpeg",
    alt: "Building projection with owl design at Spotlight",
    tags: ["Spotlight"],
  },
  {
    id: "spotlight-4",
    src: "/projects/spotlight-city-lights.jpeg",
    alt: "City buildings illuminated during Spotlight festival",
    tags: ["Spotlight"],
  },
]

// Get all unique tags from images
const allTags = ["All", ...Array.from(new Set(galleryImages.flatMap((img) => img.tags)))]

export function TaggedGallery() {
  const [selectedTag, setSelectedTag] = useState<string>("All")

  // Filter images based on selected tag
  const filteredImages =
    selectedTag === "All" ? galleryImages : galleryImages.filter((img) => img.tags.includes(selectedTag))

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie de proiecte</h2>
        <p className="text-gray-400 max-w-2xl">
          Explorați colecția noastră de imagini din diverse evenimente și proiecte.
        </p>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full transition-all transform ${
              selectedTag === tag ? "bg-red-600 text-white scale-105" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Image gallery with animations */}
      <div className="relative min-h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="aspect-square relative overflow-hidden rounded-lg bg-gray-900"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {image.tags.map((tag) => (
                      <span
                        key={`${image.id}-${tag}`}
                        className="text-xs bg-red-600/80 text-white px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
