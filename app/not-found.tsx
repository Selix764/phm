"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">{t('notFound.title')}</h2>
        <p className="text-gray-400 mb-8">{t('notFound.description')}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  )
} 