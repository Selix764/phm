import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Tv, Target, Camera } from "lucide-react"
import { YouTubeRobust } from "@/components/youtube-robust"

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="Servicii"
        subtitle="Media"
        description="Vă punem la dispoziție o platformă dedicată aplicării unor idei proaspete și ale unui stil de viață sănătos."
        heroImages={{
          topLeft: { src: "/images/microphone.jpeg", alt: "Microphone" },
          bottomLeft: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
          topRight: { src: "/images/modern-interior.jpeg", alt: "Modern interior" },
          bottomRight: { src: "/images/cat.webp", alt: "Cat in black and white" },
        }}
      />
      <ServicePage
        title="Servicii"
        subtitle="Media"
        description="Vă punem la dispoziție o platformă dedicată aplicării unor idei proaspete și ale unui stil de viață sănătos. Noi propunem dezvoltarea unui plan decomunicare pentru identificarea gradului de notorietatea a brandului ori a afacerii."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: "Strategii pentru dezovltarea produsului",
            description:
              "Dezvoltăm strategii media de marketing bazându-ne pe canalele media și dezvolatarea de concepte creative.",
            icon: <Target className="w-6 h-6 text-white" />,
          },
          {
            title: "Productie audio-vizual și multimedia",
            description: "Producem materiale video, audio cât și multimedia ale produsului vostru.",
            icon: <Camera className="w-6 h-6 text-white" />,
          },
          {
            title: "Creearea unei Emisiuni",
            description:
              "Credem că creearea unei Eminisiuni Online dedicate unei audiențe specifice. targetate poate aduce beneficii",
            icon: <Tv className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
