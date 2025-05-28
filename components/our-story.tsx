"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function OurStory() {
  return (
    <section className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-[#0A0A0A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-bold text-[40px] text-white mb-6">Povestea noastră</h2>
          <p className="text-white/80 mb-6">
            PHM a luat naștere dintr-o nevoie reală: lipsa unor servicii de promovare media eficiente pentru brandurile
            aflate în plină expansiune, atât naționale, cât și internaționale, în România.
          </p>
          <p className="text-white/80 mb-6">
            „Ideea PHM a apărut după numeroase participări la evenimente publicitare și campanii media, fie ca persoană
            publică, fie ca om de televiziune. Am simțit atunci că era nevoie de mai mult: de o schimbare reală în felul
            în care facem publicitate, în modul în care comunicăm vizual și emoțional cu publicul. În 2002, am fondat
            Perfect Home Media tocmai pentru a răspunde acestei cereri. Creșterea PHM a devenit vizibilă în 2010, odată
            cu dezvoltarea pieței media locale."
          </p>
          <p className="text-[#FF0000] font-medium">— Andrei Bărbulescu</p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/silhouette-stripes.png" alt="Andrei Bărbulescu" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-[#0A0A0A]">
            <Image src="/images/vintage-camera.jpeg" alt="Vintage camera" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
