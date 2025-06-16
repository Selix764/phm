"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-5 md:px-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-logo2-k9zVAAIVmhYHZPVSHydfcWnFK1rhmA.png"
                alt="Perfect Home Media Logo"
                width={120}
                height={40}
                className="h-auto invert brightness-0 filter"
              />
            </Link>
            <p className="text-gray-400 mb-2">{t("footer.tagline")}</p>
            <p className="text-gray-400 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/search/top?q=perfect%20home%20media" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={25} />
              </Link>
              <Link href="https://www.youtube.com/@PERFECTHOMEMEDIA/videos" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={25} />
              </Link>
              <Link href="https://www.instagram.com/perfecthomemedia/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={25} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={25} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/productie-publicitara" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.servicesDropdown.advertising")}
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.servicesDropdown.media")}
                </Link>
              </li>
              <li>
                <Link
                  href="/evenimente"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  {t("nav.servicesDropdown.events")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.clients")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">{t("footer.services")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/media" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.servicesDropdown.media")}
                </Link>
              </li>
              <li>
                <Link href="/productie-publicitara" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.servicesDropdown.advertising")}
                </Link>
              </li>
              <li>
                <Link href="/evenimente" className="text-gray-400 hover:text-white transition-colors">
                  {t("nav.servicesDropdown.events")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">{t("footer.newsletter.title")}</h3>
            <p className="text-gray-400 mb-4">
              {t("footer.newsletter.description")}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="px-4 py-2 bg-[#1A1A1A] text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] w-full"
              />
              <button
                type="submit"
                className="bg-[#FF0000] text-white px-4 py-2 rounded-r-lg hover:bg-[#FF0000]/90 transition-colors"
              >
                {t("footer.newsletter.subscribe")}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Perfect Home Media. {t("footer.rights")}
            </p>
            <div className="flex space-x-6">
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t("footer.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
