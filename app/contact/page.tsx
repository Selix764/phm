"use client"

import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        description={t("contact.description")}
        heroImages={{
          topLeft: { src: "/images/modern-interior.jpeg", alt: t("contact.images.modernInterior") },
          bottomLeft: { src: "/images/silhouette-stripes.png", alt: t("contact.images.silhouetteStripes") },
          topRight: { src: "/images/street-shadows.jpeg", alt: t("contact.images.streetShadows") },
          bottomRight: { src: "/images/microphone.jpeg", alt: t("contact.images.microphone") },
        }}
        isContactPage={true}
      />
      <Contact />
    </>
  )
}
