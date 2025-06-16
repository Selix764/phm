"use client"

import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Tv, Target, Camera } from "lucide-react"
import { YouTubeRobust } from "@/components/youtube-robust"
import { useLanguage } from "@/lib/language-context"

export default function MediaPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("media.title")}
        subtitle={t("media.subtitle")}
        description={t("media.description")}
        heroImages={{
          topLeft: { src: "/images/microphone.jpeg", alt: t("media.images.microphone") },
          bottomLeft: { src: "/images/street-shadows.jpeg", alt: t("media.images.streetShadows") },
          topRight: { src: "/images/modern-interior.jpeg", alt: t("media.images.modernInterior") },
          bottomRight: { src: "/images/cat.webp", alt: t("media.images.cat") },
        }}
      />
      <ServicePage
        title={t("media.service.title")}
        subtitle={t("media.service.subtitle")}
        description={t("media.service.description")}
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: t("media.features.strategy.title"),
            description: t("media.features.strategy.description"),
            icon: <Target className="w-6 h-6 text-white" />,
          },
          {
            title: t("media.features.production.title"),
            description: t("media.features.production.description"),
            icon: <Camera className="w-6 h-6 text-white" />,
          },
          {
            title: t("media.features.broadcast.title"),
            description: t("media.features.broadcast.description"),
            icon: <Tv className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
