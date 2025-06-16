"use client"

import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Users, Lightbulb, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function EventsPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("services.events.title")}
        subtitle={t("services.events.subtitle")}
        description={t("services.events.description")}
        heroImages={{
          topLeft: { src: "/images/cat.webp", alt: t("about.images.cat") },
          bottomLeft: { src: "/images/landscape-dock.jpeg", alt: t("projects.images.landscapeDock") },
          topRight: { src: "/images/silhouette-stripes.png", alt: t("contact.images.silhouetteStripes") },
          bottomRight: { src: "/images/microphone.jpeg", alt: t("media.images.microphone") },
        }}
      />
      <ServicePage
        title={t("services.events.title")}
        subtitle={t("services.events.subtitle")}
        description={t("services.events.fullDescription")}
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: t("services.events.features.social.title"),
            description: t("services.events.features.social.description"),
            icon: <Award className="w-6 h-6 text-white" />,
          },
          {
            title: t("services.events.features.corporate.title"),
            description: t("services.events.features.corporate.description"),
            icon: <Users className="w-6 h-6 text-white" />,
          },
          {
            title: t("services.events.features.thematic.title"),
            description: t("services.events.features.thematic.description"),
            icon: <Lightbulb className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
