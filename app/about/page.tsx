"use client"

import { PageHero } from "@/components/page-hero"
import { AboutUs } from "@/components/about-us"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        description={t('about.description')}
        heroImages={{
          topLeft: { src: "/images/vintage-camera.jpeg", alt: t('about.images.vintageCamera') },
          bottomLeft: { src: "/images/cat.webp", alt: t('about.images.cat') },
          topRight: { src: "/images/microphone.jpeg", alt: t('about.images.microphone') },
          bottomRight: { src: "/images/street-shadows.jpeg", alt: t('about.images.streetShadows') },
        }}
      />
      <AboutUs />
    </>
  )
}
