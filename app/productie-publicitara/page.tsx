"use client"

import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Printer, PenTool, LayoutGrid } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ProductiePublicitaraPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("services.advertising.title")}
        subtitle={t("services.advertising.subtitle")}
        description={t("services.advertising.description")}
        heroImages={{
          topLeft: { src: "/images/street-shadows.jpeg", alt: t("pageHero.images.streetShadows") },
          bottomLeft: { src: "/images/microphone.jpeg", alt: t("media.images.microphone") },
          topRight: { src: "/images/vintage-camera.jpeg", alt: t("about.images.vintageCamera") },
          bottomRight: { src: "/images/modern-interior.jpeg", alt: t("media.images.modernInterior") },
        }}
      />
      <ServicePage
        title={t("services.advertising.title")}
        subtitle={t("services.advertising.subtitle")}
        description={t("services.advertising.fullDescription")}
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: t("services.advertising.features.digitalPrint.title"),
            description: t("services.advertising.features.digitalPrint.description"),
            icon: <Printer className="w-6 h-6 text-white" />,
          },
          {
            title: t("services.advertising.features.physicalPrint.title"),
            description: t("services.advertising.features.physicalPrint.description"),
            icon: <PenTool className="w-6 h-6 text-white" />,
          },
          {
            title: t("services.advertising.features.printedMaterials.title"),
            description: t("services.advertising.features.printedMaterials.description"),
            icon: <LayoutGrid className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
