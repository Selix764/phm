import { PageHero } from "@/components/page-hero"
import { ClientsGrid } from "@/components/clients-grid"

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Clienții"
        subtitle="noștri"
        description="Am avut plăcerea de a lucra cu o varietate de clienți din diverse industrii. Iată câțiva dintre partenerii noștri de încredere."
        heroImages={{
          topLeft: { src: "/images/modern-interior.jpeg", alt: "Modern interior" },
          bottomLeft: { src: "/images/landscape-dock.jpeg", alt: "Landscape with dock" },
          topRight: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
          bottomRight: { src: "/images/vintage-camera.jpeg", alt: "Vintage camera" },
        }}
      />
      <ClientsGrid />
    </>
  )
}
