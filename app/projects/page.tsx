"use client"

import { PageHero } from "@/components/page-hero"
import { ProjectGallery } from "@/components/project-gallery"
import { useLanguage } from "@/lib/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <PageHero
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        description={t("projects.description")}
        heroImages={{
          topLeft: { src: "/images/landscape-dock.jpeg", alt: t("projects.images.landscapeDock") },
          bottomLeft: { src: "/images/microphone.jpeg", alt: t("projects.images.microphone") },
          topRight: { src: "/images/vintage-camera.jpeg", alt: t("projects.images.vintageCamera") },
          bottomRight: { src: "/images/street-shadows.jpeg", alt: t("projects.images.streetShadows") },
        }}
      />
      <ProjectGallery />
    </>
  )
}
