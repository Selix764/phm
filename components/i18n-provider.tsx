"use client"

import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"
import { PropsWithChildren } from "react"

export function I18nProvider({ children, i18n: i18nInstance }: PropsWithChildren & { i18n?: typeof i18n }) {
  return <I18nextProvider i18n={i18nInstance || i18n}>{children}</I18nextProvider>
} 