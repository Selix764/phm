"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="py-[100px] px-5 md:px-[120px] max-w-[1400px] mx-auto bg-black">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="font-bold text-[40px] text-white mb-4">{t("contact.title")}</h2>
        <p className="text-[18px] text-white/70 max-w-[600px] mx-auto">
          {t("contact.description")}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">{t("contact.form.title")}</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-white/10 focus:outline-none focus:border-[#FF0000]"
                  placeholder={t("contact.form.namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-white/10 focus:outline-none focus:border-[#FF0000]"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-white/70 mb-2">
                {t("contact.form.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-white/10 focus:outline-none focus:border-[#FF0000]"
                placeholder={t("contact.form.phonePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white/70 mb-2">
                {t("contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-white/10 focus:outline-none focus:border-[#FF0000]"
                placeholder={t("contact.form.subjectPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/70 mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-lg border border-white/10 focus:outline-none focus:border-[#FF0000]"
                placeholder={t("contact.form.messagePlaceholder")}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[#FF0000] text-white py-3 rounded-lg font-medium hover:bg-[#FF0000]/90 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("contact.form.submit")}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">{t("contact.info.title")}</h3>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#FF0000] p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{t("contact.info.address.title")}</h4>
                <p className="text-white mt-1 bg-[#FF0000]/10 border-l-4 border-[#FF0000] pl-3 py-2 rounded-r-md font-medium">
                  {t("contact.info.address.value")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FF0000] p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{t("contact.info.email.title")}</h4>
                <p className="text-white mt-1 bg-[#FF0000]/10 border-l-4 border-[#FF0000] pl-3 py-2 rounded-r-md font-medium">
                  {t("contact.info.email.value1")}
                </p>
                <p className="text-white mt-2 bg-[#FF0000]/10 border-l-4 border-[#FF0000] pl-3 py-2 rounded-r-md font-medium">
                  {t("contact.info.email.value2")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#FF0000] p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{t("contact.info.phone.title")}</h4>
                <p className="text-white mt-1 bg-[#FF0000]/10 border-l-4 border-[#FF0000] pl-3 py-2 rounded-r-md font-medium">
                  {t("contact.info.phone.value")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-white mb-4">{t("contact.social.title")}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/search/top?q=perfect%20home%20media"
                className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF0000] transition-colors"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/perfecthomemedia/"
                className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF0000] transition-colors"
              >
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF0000] transition-colors">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="bg-[#1A1A1A] p-3 rounded-full hover:bg-[#FF0000] transition-colors">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {t("contact.map.title")}
        </h3>
        <div className="w-full h-[400px] bg-[#1A1A1A] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8456339940896!2d26.0311541!3d44.439663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201b5eb58ebfd%3A0xd4fc9ea5e089ecc3!2sStrada%20B%C4%83be%C8%99ti%201%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1651234567890!5m2!1sro!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  )
}
