import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Users, Lightbulb, Award } from "lucide-react"

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Organizare"
        subtitle="Evenimente"
        description="Vă punem la dispoziție o gamă largă de evenimente cu standarde de înaltă tehnologie."
        heroImages={{
          topLeft: { src: "/images/cat.webp", alt: "Cat in black and white" },
          bottomLeft: { src: "/images/landscape-dock.jpeg", alt: "Landscape with dock" },
          topRight: { src: "/images/silhouette-stripes.png", alt: "Silhouette with stripes" },
          bottomRight: { src: "/images/microphone.jpeg", alt: "Microphone" },
        }}
      />
      <ServicePage
        title="Organizare"
        subtitle="Evenimente"
        description="Vă punem la dispoziție o gamă largă de evenimente cu standarde de înaltă tehnologie. Indiferent de evenimentul dvs., vă oferim consultanță pentru a executa orice mărime sau tip de eveniment. Creăm amintiri pentru"
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: "Evenimente Sociale și Caritabile",
            description:
              "Oferim servicii profesionale de captare video pentru evenimente caritabile, gale și inițiative sociale, la calitate cinematografică, evidențiind emoția și mesajul momentului.",
            icon: <Award className="w-6 h-6 text-white" />,
          },
          {
            title: "Evenimente Corporative",
            description:
              "Realizăm materiale video de înaltă rezoluție pentru conferințe, lansări de produse și întâlniri de afaceri, ideale pentru promovare internă sau externă.",
            icon: <Users className="w-6 h-6 text-white" />,
          },
          {
            title: "Evenimente Tematice",
            description:
              "Surprindem atmosfera unică a petrecerilor tematice, aniversărilor și festivalurilor cu imagini dinamice și montaj creativ, perfecte pentru promovarea online.",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
