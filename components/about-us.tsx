"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AboutUs() {
  return (
    <section id="about-us" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">Despre noi</h2>
        <p className="text-[18px] text-white/70 max-w-[800px] mx-auto">
          Perfect Home Media (PHM) este o agenție de publicitate full-service, specializată în producție publicitară,
          organizare de evenimente și servicii media. Cu o experiență de peste 15 ani în industrie, am dezvoltat
          campanii de succes pentru branduri naționale și internaționale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-[200px] relative">
                  <Image src="/images/modern-interior.jpeg" alt="Modern interior" fill className="object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-[280px] relative">
                  <Image src="/images/street-shadows.jpeg" alt="Street shadows" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-[280px] relative">
                  <Image src="/images/landscape-dock.jpeg" alt="Landscape with dock" fill className="object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-[200px] relative">
                  <Image src="/images/microphone.jpeg" alt="Microphone" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#FF0000]/20 rounded-full -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold text-[28px] text-white mb-6">Povestea PHM</h3>
          <p className="text-[16px] text-white/70 mb-6">
            PHM a luat naștere dintr-o nevoie reală: lipsa unor servicii de promovare media eficiente pentru brandurile
            aflate în plină expansiune, atât naționale, cât și internaționale, în România.
          </p>
          <p className="text-[16px] text-white/70 mb-6">
            „Ideea PHM a apărut după numeroase participări la evenimente publicitare și campanii media, fie ca persoană
            publică, fie ca om de televiziune. Am simțit atunci că era nevoie de mai mult: de o schimbare reală în felul
            în care facem publicitate, în modul în care comunicăm vizual și emoțional cu publicul. În 2006, am fondat
            Perfect Home Media tocmai pentru a răspunde acestei cereri. Creșterea PHM a devenit vizibilă în 2006, odată
            cu dezvoltarea pieței media locale."
          </p>
          

          <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">200+</span>
              <span className="text-white/70">Proiecte finalizate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">150+</span>
              <span className="text-white/70">Clienți mulțumiți</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">15+</span>
              <span className="text-white/70">Ani de experiență</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">20+</span>
              <span className="text-white/70">Membri în echipă</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all text-center"
            >
              Contactează-ne
            </Link>
            <Link
              href="/clients"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all text-center"
            >
              Vezi clienții noștri
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Additional About Us Content */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-bold text-[28px] text-white mb-6">Cine suntem</h3>
            <p className="text-[16px] text-white/70 mb-6">
              PHM este o platformă și un canal de comunicare creativ, cu experiență solidă în media, branding și
              <span className="text-[#FF0000]"> lifestyle</span>. Oferim soluții moderne și eficiente, personalizate
              pentru succesul afacerii tale – indiferent de domeniu.
            </p>
            <h3 className="font-bold text-[28px] text-white mb-6 mt-10">Misiunea noastră</h3>
            <p className="text-[16px] text-white/70 mb-6">
              Să transformăm ideile în povești vizuale puternice și branduri cu impact. De la strategie la execuție, ne
              implicăm 100% în fiecare proiect.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[28px] text-white mb-6">Ce oferim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Producție media completă (video, audio, fotografie, podcast)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Branding & rebranding</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Campanii integrate de comunicare</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Evenimente, activări BTL și proiecte speciale</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Strategii de promovare personalizate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#FF0000] p-2 rounded-full mt-1 flex-shrink-0">
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
                    className="text-white"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/70">Soluții multimedia pentru online și televiziune</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-bold text-[28px] text-white mb-6">De ce PHM?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Experiență dovedită</h4>
              <p className="text-white/70">Experiență dovedită în media & lifestyle</p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Creativitate</h4>
              <p className="text-white/70">Creativitate aplicată strategic</p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Flexibilitate</h4>
              <p className="text-white/70">Flexibilitate în abordare</p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Standarde înalte</h4>
              <p className="text-white/70">Proiecte livrate la standarde internaționale</p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Rețea solidă</h4>
              <p className="text-white/70">Rețea solidă de colaboratori și parteneri</p>
            </div>

            <div className="bg-black/30 p-6 rounded-xl border border-white/10 hover:border-[#FF0000]/50 transition-all">
              <div className="bg-[#FF0000] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 2v8"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <rect width="20" height="8" x="2" y="14" rx="2"></rect>
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Rezultate măsurabile</h4>
              <p className="text-white/70">Campanii orientate spre rezultate concrete</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="text-center pt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="font-bold text-[28px] text-white mb-6">Alege PHM. Alege să fii remarcat.</h3>
        <p className="text-white/70 mb-8">
          📩 Contactează-ne astăzi și hai să construim împreună viitorul brandului tău.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all inline-block"
        >
          Contactează-ne
        </Link>
      </motion.div>
    </section>
  )
}
