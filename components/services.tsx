"use client"

import { motion } from "framer-motion"
import { Music, Tv, Home, Smartphone, Zap, Shield } from "lucide-react"
import Image from "next/image"

export function Services() {
  const services = [
    {
      icon: <Tv className="w-6 h-6 text-white" />,
      title: "Home Cinema",
      description:
        "Transformăm orice cameră într-o sală de cinema privată cu sisteme audio-video de înaltă calitate, proiectoare și ecrane premium.",
      color: "#FF0000",
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Music className="w-6 h-6 text-white" />,
      title: "Sisteme Audio Multi-Room",
      description:
        "Instalăm sisteme audio care vă permit să ascultați muzica preferată în orice cameră a casei, controlate printr-o singură aplicație.",
      color: "#1E1E1E",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: "Smart Home",
      description:
        "Automatizăm casa dvs. pentru confort și eficiență energetică, de la iluminat și termostate la sisteme de securitate și jaluzele.",
      color: "#FF0000",
      image:
        "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Integrare și Control",
      description:
        "Integrăm toate sistemele într-o singură interfață ușor de utilizat, accesibilă de pe smartphone, tabletă sau panou de control.",
      color: "#1E1E1E",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Consultanță și Design",
      description:
        "Oferim consultanță specializată și design personalizat pentru a crea soluții care se potrivesc perfect spațiului și nevoilor dvs.",
      color: "#FF0000",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Mentenanță și Suport",
      description:
        "Asigurăm mentenanță regulată și suport tehnic prompt pentru toate sistemele instalate, pentru funcționare optimă pe termen lung.",
      color: "#1E1E1E",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-[#0A0A0A]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Serviciile noastre</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          Soluții complete audio-video și smart home adaptate nevoilor dumneavoastră.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A] rounded-2xl p-8 hover:shadow-lg transition-shadow border border-white/5"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div
              className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
              style={{ backgroundColor: service.color }}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-white/70 mb-4">{service.description}</p>
            {service.image && (
              <div className="mt-4 relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={
                    service.image ||
                    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" ||
                    "/placeholder.svg" ||
                    "/placeholder.svg"
                  }
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.button
          className="px-8 py-3 bg-[#FF0000] text-white rounded-full font-medium hover:bg-[#FF0000]/90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Toate serviciile
        </motion.button>
      </motion.div>
    </section>
  )
}
