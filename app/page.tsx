import { HeroSimple } from "@/components/hero-simple"
import { YouTubeRobust } from "@/components/youtube-robust"
import { ServicesOverview } from "@/components/services-overview"
import { Contact } from "@/components/contact"

export default function HomePage() {
  return (
    <>
      <HeroSimple />
      <ServicesOverview />
      <YouTubeRobust
        title="Secțiunea de educație & inspirație"
        description="Conținut educațional și de inspirație pentru tine"
        maxVideos={3}
        category="education"
      />
      <Contact />
    </>
  )
}
