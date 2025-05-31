"use client"

import { motion } from "framer-motion"
import { Camera, Radio, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesOverview() {
  const services = [
    {
      icon: <Camera className="w-6 h-6 text-white" />,
      title: "Producție Publicitară",
      description:
        "Vă punem la dispoziție o mare varietate de materiale cu opțiuni de finisare și materiale promoționale pentru orice tip de afacere. Membrii echipei noastre sunt gata să vă ajute cu soluții de imprimare care vor crea materiale de marketing personalizate.",
      color: "#FF0000",
      link: "/productie-publicitara",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Radio className="w-6 h-6 text-white" />,
      title: "Media",
      description:
        "Vă punem la dispoziție o platformă dedicată aplicării unor idei proaspete și ale unui stil de viață sănătos. Noi propunem dezvoltarea unui plan decomunicare pentru identificarea gradului de notorietatea a brandului ori a afacerii.",
      color: "#FF0000",
      link: "/media",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Evenimente",
      description:
        "Vă punem la dispoziție o gamă largă de evenimente cu standarde de înaltă tehnologie. Indiferent de evenimentul dvs., vă oferim consultanță pentru a executa orice mărime sau tip de eveniment. Creăm amintiri pentru",
      color: "#FF0000",
      link: "/evenimente",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  return (
    <section className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-[#0A0A0A]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Serviciile noastre</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          Oferim soluții complete pentru a vă ajuta să vă promovați afacerea și să creați experiențe memorabile pentru
          clienții dumneavoastră.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A] rounded-2xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Link href={service.link} className="block">
              <div className="relative h-[200px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <div className="flex items-center text-[#FF0000] font-medium group-hover:underline">
                  Află mai multe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
