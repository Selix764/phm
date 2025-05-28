import type React from "react"

interface LegalDocumentProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function LegalDocument({ title, subtitle, children }: LegalDocumentProps) {
  return (
    <div className="text-white/80 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
      {subtitle && <p className="text-lg text-white/90 italic mb-6">{subtitle}</p>}
      <div className="space-y-6">{children}</div>
    </div>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      {children}
    </section>
  )
}
