"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  image: string
  ctaText?: string
  ctaLink?: string
}

export function ServicePage({
  title,
  subtitle,
  description,
  features = [], // Add default empty array
  image,
  ctaText = "Solicită o ofertă",
  ctaLink = "/contact",
}: ServicePageProps) {
  return (
    <section className="pt-[120px] pb-[80px] px-5 md:px-[120px] max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-bold text-[42px] md:text-[56px] leading-[1.1] text-white mb-6">
            {title}
            <span className="text-[#FF0000]"> {subtitle}</span>
          </h1>

          <p className="text-[18px] text-white/80 mb-8 max-w-[600px]">{description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={ctaLink}
              className="group bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all flex items-center"
            >
              {ctaText}
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
            >
              Vezi proiectele noastre
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      {features && features.length > 0 && (
        <div className="mt-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-[40px] text-white mb-4">Ce oferim</h2>
            <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
              Descoperă serviciile noastre specializate de {title.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center bg-[#FF0000]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <motion.div
        className="mt-20 bg-[#1A1A1A] rounded-2xl p-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-[32px] text-white mb-4">Pregătit să începem?</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto mb-8">
          Contactează-ne astăzi pentru a discuta despre proiectul tău și pentru a afla cum te putem ajuta.
        </p>
        <Link
          href={ctaLink}
          className="inline-block bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all"
        >
          {ctaText}
        </Link>
      </motion.div>
    </section>
  )
}
