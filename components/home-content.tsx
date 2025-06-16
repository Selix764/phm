'use client'

import { HeroSimple } from "@/components/hero-simple"
import { YouTubeRobust } from "@/components/youtube-robust"
import { ServicesOverview } from "@/components/services-overview"
import { Contact } from "@/components/contact"
import { useLanguage } from "@/lib/language-context"

export function HomeContent() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSimple />
      <ServicesOverview />
      <YouTubeRobust
        title={t('education.title')}
        description={t('education.description')}
        maxVideos={3}
        category="education"
      />
      <Contact />
    </>
  )
} 