import { PageHero } from "@/components/page-hero"
import { AboutUs } from "@/components/about-us"

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Despre"
        subtitle="noi"
        description="Suntem o echipă de specialiști pasionați de tehnologie, dedicați creării de experiențe audio-video excepționale pentru casa ta."
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
