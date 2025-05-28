import { PageHero } from "@/components/page-hero"
import { ProjectGallery } from "@/components/project-gallery"

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Proiectele"
        subtitle="noastre"
        description="Descoperă o selecție din proiectele noastre recente și vezi cum am ajutat alte afaceri să își atingă obiectivele."
        heroImages={{
          topLeft: { src: "/images/landscape-dock.jpeg", alt: "Landscape with dock" },
          bottomLeft: { src: "/images/microphone.jpeg", alt: "Microphone" },
          topRight: { src: "/images/vintage-camera.jpeg", alt: "Vintage camera" },
          bottomRight: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
        }}
      />
      <ProjectGallery />
    </>
  )
}
