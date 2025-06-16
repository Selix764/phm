"use client"

import { PageHero } from "@/components/page-hero"
import { ClientsGrid } from "@/components/clients-grid"
import { useLanguage } from "@/lib/language-context"

export default function ClientsPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("clients.title")}
        subtitle={t("clients.subtitle")}
        description={t("clients.description")}
        heroImages={{
          topLeft: { src: "/images/modern-interior.jpeg", alt: t("clients.images.modernInterior") },
          bottomLeft: { src: "/images/landscape-dock.jpeg", alt: t("clients.images.landscapeDock") },
          topRight: { src: "/images/street-shadows.jpeg", alt: t("clients.images.streetShadows") },
          bottomRight: { src: "/images/vintage-camera.jpeg", alt: t("clients.images.vintageCamera") },
        }}
      />
      <ClientsGrid />
    </>
  )
}
