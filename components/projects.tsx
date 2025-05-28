"use client"
import { useState } from "react"

export function Projects() {
  const [openFolder, setOpenFolder] = useState<string | null>("estee-lauder")

  const toggleFolder = (folderId: string) => {
    if (openFolder === folderId) {
      setOpenFolder(null)
    } else {
      setOpenFolder(folderId)
    }
  }

  const folders = [
    {
      id: "estee-lauder",
      name: "Estée Lauder Event",
      description: "Campanie de promovare pentru produsele Estée Lauder",
      images: [
        {
          src: "/projects/estee-lauder-makeup.jpeg",
          alt: "Eveniment de aplicare machiaj Estée Lauder",
          title: "Sesiune de Machiaj",
        },
        {
          src: "/projects/estee-lauder-macarons.jpeg",
          alt: "Macarons la evenimentul Estée Lauder",
          title: "Gustări pentru Eveniment",
        },
        {
          src: "/projects/estee-lauder-products.jpeg",
          alt: "Produse Estée Lauder Advanced Night Repair",
          title: "Prezentare Produse",
        },
      ],
    },
    {
      id: "home-cinema",
      name: "Home Cinema Premium",
      description: "Sistem home cinema de ultimă generație cu proiector 4K și sistem audio surround 7.1.2.",
      images: [],
    },
    {
      id: "corporate-events",
      name: "Evenimente Corporative",
      description: "Organizare și producție pentru evenimente corporate și lansări de produse",
      images: [],
    },
    {
      id: "multimedia-projects",
      name: "Proiecte Multimedia",
      description: "Soluții multimedia integrate pentru spații comerciale și rezidențiale",
      images: [],
    },
  ]

  return null
}
