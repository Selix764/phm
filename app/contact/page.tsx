import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactează-"
        subtitle="ne"
        description="Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să găsești soluția perfectă pentru video-urile tale."
        heroImages={{
          topLeft: { src: "/images/modern-interior.jpeg", alt: "Modern interior" },
          bottomLeft: { src: "/images/silhouette-stripes.png", alt: "Silhouette with stripes" },
          topRight: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
          bottomRight: { src: "/images/microphone.jpeg", alt: "Microphone" },
        }}
        isContactPage={true} // Set this to true for the contact page
      />
      <Contact />
    </>
  )
}
