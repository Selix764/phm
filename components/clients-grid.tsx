"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Client {
  name: string
  logo: string
}

export function ClientsGrid() {
  const clients: Client[] = [
    {
      name: "AQUA CARPATICA",
      logo: "/clients/aqua-carpatica.png",
    },
    {
      name: "Asociatia ENVIRON",
      logo: "/clients/environ.jpeg",
    },
    {
      name: "Filarmonica George Enescu",
      logo: "/clients/filarmonica.jpeg",
    },
    {
      name: "Devin",
      logo: "/clients/devin.png",
    },
    {
      name: "L'oreal Paris",
      logo: "/clients/loreal.jpeg",
    },
    {
      name: "Dove",
      logo: "/clients/dove.jpeg",
    },
    {
      name: "Lancome Paris",
      logo: "/clients/lancome.jpeg",
    },
    {
      name: "Shorts Up",
      logo: "/clients/shortsup.png",
    },
    {
      name: "Carrefour",
      logo: "/clients/carrefour.jpeg",
    },
    {
      name: "Dance Planet",
      logo: "/clients/dance-planet.jpeg",
    },
    {
      name: "CCE Sector 6",
      logo: "/clients/cce.png",
    },
    {
      name: "Novamusic Entertainment",
      logo: "/clients/novamusic.png",
    },
    {
      name: "MAC",
      logo: "/clients/mac.png",
    },
    {
      name: "Clinique",
      logo: "/clients/clinique.jpeg",
    },
    {
      name: "Estee Lauder",
      logo: "/clients/estee-lauder.jpeg",
    },
    {
      name: "Domeniile Samburesti",
      logo: "/clients/samburesti.jpeg",
    },
    {
      name: "ArCuB",
      logo: "/clients/arcub.png",
    },
    {
      name: "Energynomics",
      logo: "/clients/energynomics.jpeg",
    },
    {
      name: "Energynomics TALKS",
      logo: "/clients/energynomics-talks.jpeg",
    },
    {
      name: "WATT's NEXT",
      logo: "/clients/watts-next.jpeg",
    },
  ]

  return (
    <section className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Clienții noștri</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          Am avut plăcerea să colaborăm cu branduri de renume și organizații din diverse industrii. Iată câțiva dintre
          clienții noștri.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A] rounded-xl p-4 flex items-center justify-center h-[180px] border border-white/5 hover:border-[#FF0000]/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative w-[90%] h-[90%]">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Devino și tu clientul nostru</h3>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto mb-8">
          Suntem pregătiți să transformăm ideile tale în realitate. Contactează-ne astăzi pentru a discuta despre
          proiectul tău.
        </p>
        <motion.a
          href="/contact"
          className="inline-block bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contactează-ne
        </motion.a>
      </motion.div>
    </section>
  )
}
