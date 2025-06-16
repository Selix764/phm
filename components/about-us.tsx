"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function AboutUs() {
  const { t } = useLanguage()
  
  return (
    <section id="about-us" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">{t("aboutUs.title")}</h2>
        <p className="text-[18px] text-white/70 max-w-[800px] mx-auto">
          {t("aboutUs.description")}
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
                  <Image src="/images/modern-interior.jpeg" alt={t("aboutUs.images.modernInterior")} fill className="object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-[280px] relative">
                  <Image src="/images/street-shadows.jpeg" alt={t("aboutUs.images.streetShadows")} fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-[280px] relative">
                  <Image src="/images/landscape-dock.jpeg" alt={t("aboutUs.images.landscapeDock")} fill className="object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-[200px] relative">
                  <Image src="/images/microphone.jpeg" alt={t("aboutUs.images.microphone")} fill className="object-cover" />
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
          <h3 className="font-bold text-[28px] text-white mb-6">{t("aboutUs.story.title")}</h3>
          <p className="text-[16px] text-white/70 mb-6">
            {t("aboutUs.story.paragraph1")}
          </p>
          <p className="text-[16px] text-white/70 mb-6">
            {t("aboutUs.story.paragraph2")}
          </p>
          

          <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">200+</span>
              <span className="text-white/70">{t("aboutUs.stats.projects")}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-[#FF0000]">150+</span>
              <span className="text-white/70">{t("aboutUs.stats.clients")}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">15+</span>
              <span className="text-white/70">{t("aboutUs.stats.experience")}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[40px] font-bold text-white">20+</span>
              <span className="text-white/70">{t("aboutUs.stats.team")}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all text-center"
            >
              {t("aboutUs.buttons.contact")}
            </Link>
            <Link
              href="/clients"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all text-center"
            >
              {t("aboutUs.buttons.viewClients")}
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
            <h3 className="font-bold text-[28px] text-white mb-6">{t("aboutUs.whoWeAre.title")}</h3>
            <p className="text-[16px] text-white/70 mb-6">
              {t("aboutUs.whoWeAre.description")}
            </p>
            <h3 className="font-bold text-[28px] text-white mb-6 mt-10">{t("aboutUs.mission.title")}</h3>
            <p className="text-[16px] text-white/70 mb-6">
              {t("aboutUs.mission.description")}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[28px] text-white mb-6">{t("aboutUs.whatWeOffer.title")}</h3>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.mediaProduction")}</p>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.branding")}</p>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.campaigns")}</p>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.events")}</p>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.personalizedStrategies")}</p>
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
                  <p className="text-white/70">{t("aboutUs.whatWeOffer.items.multimediaSolutions")}</p>
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
          <h3 className="font-bold text-[28px] text-white mb-6">{t("aboutUs.whyPHM.title")}</h3>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.provenExperience")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.provenExperienceDescription")}</p>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.creativity")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.creativityDescription")}</p>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.flexibility")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.flexibilityDescription")}</p>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.highStandards")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.highStandardsDescription")}</p>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.strongNetwork")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.strongNetworkDescription")}</p>
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
              <h4 className="text-white font-semibold text-lg mb-2">{t("aboutUs.whyPHM.items.measurableResults")}</h4>
              <p className="text-white/70">{t("aboutUs.whyPHM.items.measurableResultsDescription")}</p>
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
                 <h3 className="font-bold text-[28px] text-white mb-6">{t("aboutUs.finalCta.title")}</h3>
         <p className="text-white/70 mb-8">
           📩 {t("aboutUs.finalCta.paragraph")}
         </p>
         <Link
           href="/contact"
           className="bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all inline-block"
         >
           {t("aboutUs.finalCta.button")}
        </Link>
      </motion.div>
    </section>
  )
}
