"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Define image interface
interface ProjectImage {
  id: string
  src: string
  alt: string
  event: string
}

// Define all project images
const projectImages: ProjectImage[] = [
  // Estee Lauder images
  {
    id: "estee-1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/465037757_8507720505979074_1825151571555011564_n.jpg-a72vbhTBei77DErBFs3GZdkVDwQanN.jpeg",
    alt: "Estee Lauder products display",
    event: "Estee Lauder",
  },
  {
    id: "estee-2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/465123026_8507720292645762_7013363845576557775_n.jpg-5Oy14OoQKybwZ4hDry0jXLamxa9uvS.jpeg",
    alt: "Estee Lauder event with macarons",
    event: "Estee Lauder",
  },
  {
    id: "estee-3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464928439_8507720282645763_850765008899797095_n.jpg-0eWMMvrHEv0EBjc07YNUDBrdiMQUhE.jpeg",
    alt: "Estee Lauder makeup session",
    event: "Estee Lauder",
  },

  // Spotlight images - using direct blob URLs
  {
    id: "spotlight-1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464829545_8496473303770461_4653132791413028636_n.jpg-kC0CKRN321HE10NbCfoKErcUPvTNIk.jpeg",
    alt: "Building projection at Spotlight event",
    event: "Spotlight",
  },
  {
    id: "spotlight-2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464863934_8496473293770462_2337330054043778825_n.jpg-eSaYMFZD9AKLBj2MK4MnE89i9iNQI3.jpeg",
    alt: "Light figures at Spotlight event",
    event: "Spotlight",
  },
  {
    id: "spotlight-3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464785509_8496473307103794_4936683601564721938_n.jpg-mEI486mSZpkoFHOHXE82j8Q8N0DlsV.jpeg",
    alt: "Owl projection at Spotlight event",
    event: "Spotlight",
  },
  {
    id: "spotlight-4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/464583134_8496473310437127_1883851769511557915_n.jpg-5TNPFSLmqOBEasC7VRlg9YizIiTEBQ.jpeg",
    alt: "City lights at Spotlight event",
    event: "Spotlight",
  },

  // Spring Cocktail 2025 images
  {
    id: "spring-1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0024.jpg-TfIIf3HFU7inFQjFQ2kuC2jtJ70Bzr.jpeg",
    alt: "Le Dôme entrance at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0025.jpg-cVPcqCvkp2xfXfj27Lu2gWmeMLDdMm.jpeg",
    alt: "Attendees with gift bags at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0022.jpg-9BMxcryOU5jLG3hsIxOfwKz53MHnt7.jpeg",
    alt: "Networking at Spring Cocktail 2025 event",
    event: "Spring Cocktail",
  },
  {
    id: "spring-4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0023.jpg-0d5d3YOd7TgjHZiIADKXZ0zhQGviV9.jpeg",
    alt: "Guests networking at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-5",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0021.jpg-bsJIoLlXutHB1dvW0lrlerKTKKFT1a.jpeg",
    alt: "Presenters on stage at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-6",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0026.jpg-hNNJNDWfBuhYdLJWU72NTuKMJPCH7c.jpeg",
    alt: "Attendees posing at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-7",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0027.jpg-YBSAhm4VaCZ8RRU90vyf5ORQR7MUXb.jpeg",
    alt: "Venue setup at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-8",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0018.jpg-77QOIy2YR56i8IeBBRtbvok8ilSFpj.jpeg",
    alt: "Audience at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-9",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0019.jpg-QC1IYXbbSDDqFZbbl6NT550Jn0pS7B.jpeg",
    alt: "Speaker at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },
  {
    id: "spring-10",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250515-WA0020.jpg-VIKw34WUQfHZEc8nvMj4riNTNoHJfe.jpeg",
    alt: "Presentation at Spring Cocktail 2025",
    event: "Spring Cocktail",
  },

  // Media Production images
  {
    id: "media-1",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2017.36.43_7b3a96a3.jpg-8wGQL9IYRHMC2xc5MbEjk74Li9vaRI.jpeg",
    alt: "Professional photography studio setup",
    event: "Media Production",
  },
  {
    id: "media-2",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2017.23.31_93a7e23f.jpg-JgRqvA92yfuBOel8qOKjEs3Acslbjr.jpeg",
    alt: "Audio production workstation",
    event: "Media Production",
  },
  {
    id: "media-3",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2017.43.25_c30635ff.jpg-AUSs7smBhWg73LXi845NzgohHtCmmm.jpeg",
    alt: "Concert recording on smartphone",
    event: "Media Production",
  },
  {
    id: "media-4",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-05-16%20at%2017.34.49_f0b1ea96.jpg-cI2LLzNYFDh0ka1GIZCISYtI2Ledjg.jpeg",
    alt: "Professional Sony camera with SmallRig mount",
    event: "Media Production",
  },
]

// Get unique event names for filter buttons
const eventNames = ["All", ...Array.from(new Set(projectImages.map((img) => img.event)))]

export function ProjectGallery() {
  const [selectedEvent, setSelectedEvent] = useState("All")
  const [filteredImages, setFilteredImages] = useState<ProjectImage[]>(projectImages)

  // Filter images when selected event changes
  useEffect(() => {
    if (selectedEvent === "All") {
      setFilteredImages(projectImages)
    } else {
      setFilteredImages(projectImages.filter((img) => img.event === selectedEvent))
    }
  }, [selectedEvent])

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Galerie de Proiecte</h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventNames.map((event) => (
            <button
              key={event}
              onClick={() => setSelectedEvent(event)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedEvent === event
                  ? "bg-red-600 text-white scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {event}
            </button>
          ))}
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded-full mb-2">
                    {image.event}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
