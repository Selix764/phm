"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    {
      name: t("nav.services"),
      href: "#",
      dropdown: true,
      items: [
        { name: t("nav.servicesDropdown.advertising"), href: "/productie-publicitara" },
        { name: t("nav.servicesDropdown.media"), href: "/media" },
        { name: t("nav.servicesDropdown.events"), href: "/evenimente" },
      ],
    },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.clients"), href: "/clients" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-5 px-5 md:px-[120px] transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-logo2-k9zVAAIVmhYHZPVSHydfcWnFK1rhmA.png"
              alt="Perfect Home Media Logo"
              width={120}
              height={40}
              className="h-auto invert brightness-0 filter"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`text-[16px] font-medium transition-colors flex items-center gap-1 ${
                      openDropdown === item.name ? "text-[#FF0000]" : "text-white hover:text-[#FF0000]"
                    }`}
                  >
                    {item.name}
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
                      className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-md overflow-hidden shadow-lg z-50">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-white hover:bg-[#FF0000] transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`text-[16px] font-medium transition-colors ${
                    pathname === item.href ? "text-[#FF0000]" : "text-white hover:text-[#FF0000]"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.div
            className="flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setLanguage("ro")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === "ro" ? "bg-[#FF0000] text-white shadow-lg" : "text-white/70 hover:text-white"
              }`}
            >
              RO
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                language === "en" ? "bg-[#FF0000] text-white shadow-lg" : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </button>
          </motion.div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-5">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`py-3 text-[16px] font-medium transition-colors flex items-center justify-between w-full ${
                        openDropdown === item.name ? "text-[#FF0000]" : "text-white hover:text-[#FF0000]"
                      }`}
                    >
                      {item.name}
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
                        className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 border-l border-white/20 ml-4 mt-1 mb-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-white hover:text-[#FF0000] transition-colors"
                            onClick={() => {
                              setOpenDropdown(null)
                              setIsMobileMenuOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`py-3 text-[16px] font-medium transition-colors block ${
                      pathname === item.href ? "text-[#FF0000]" : "text-white hover:text-[#FF0000]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
