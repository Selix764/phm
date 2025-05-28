import { PageHero } from "@/components/page-hero"
import { ServicePage } from "@/components/service-page"
import { Printer, PenTool, LayoutGrid } from "lucide-react"

export default function ProductiePublicitaraPage() {
  return (
    <>
      <PageHero
        title="Producție"
        subtitle="Publicitară"
        description="Vă punem la dispoziție o mare varietate de materiale cu opțiuni de finisare și materiale promoționale pentru orice tip de afacere."
        heroImages={{
          topLeft: { src: "/images/street-shadows.jpeg", alt: "Street with shadows" },
          bottomLeft: { src: "/images/microphone.jpeg", alt: "Microphone" },
          topRight: { src: "/images/vintage-camera.jpeg", alt: "Vintage camera" },
          bottomRight: { src: "/images/modern-interior.jpeg", alt: "Modern interior" },
        }}
      />
      <ServicePage
        title="Producție"
        subtitle="Publicitară"
        description="Vă punem la dispoziție o mare varietate de materiale cu opțiuni de finisare și materiale promoționale pentru orice tip de afacere. Membrii echipei noastre sunt gata să vă ajute cu soluții de imprimare care vor crea materiale de marketing personalizate."
        image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        features={[
          {
            title: "Printare Digitală",
            description:
              "De mari dimensiuni: autocolante, bannere, backlit-uri, mesh-uri, steaguri, afise, panouri PVC.",
            icon: <Printer className="w-6 h-6 text-white" />,
          },
          {
            title: "Printuri Fizice",
            description: "Pentru sisteme de expunere: Roll-up, postere",
            icon: <PenTool className="w-6 h-6 text-white" />,
          },
          {
            title: "Materiale Tipărite",
            description:
              "Design și producție de broșuri, cataloage, afișe, flyere și alte materiale tipărite pentru campanii.",
            icon: <LayoutGrid className="w-6 h-6 text-white" />,
          },
        ]}
      />
    </>
  )
}
