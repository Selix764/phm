import { PageHero } from "@/components/page-hero"
import { AboutUs } from "@/components/about-us"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Despre"
        subtitle="noi"
        description="Perfect Home Media (PHM) este o agenție de publicitate full-service, specializată în producție publicitară, organizare de evenimente și servicii media"
        heroImages={{
          topLeft: { src: "/images/vintage-camera.jpeg", alt: "Vintage camera" },
          bottomLeft: { src: "/images/cat.webp", alt: "Cat in black and white" },
          topRight: { src: "/images/microphone.jpeg", alt: "Microphone" },
          bottomRight: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
        }}
      />
      <AboutUs />
    </>
  )
}
