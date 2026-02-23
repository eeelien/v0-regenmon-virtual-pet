import React from "react"
import type { Metadata, Viewport } from "next"
import { Press_Start_2P } from "next/font/google"

import "./globals.css"
// import PrivyProviderWrapper from "@/components/privy-provider"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "Regenmon - Tu Mascota Virtual",
  description:
    "Crea y cuida tu propia mascota virtual estilo Tamagotchi con estetica retro pixel art.",
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${pressStart2P.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
