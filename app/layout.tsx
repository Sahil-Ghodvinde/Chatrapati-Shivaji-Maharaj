import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Cinzel, Poppins } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Chhatrapati Shivaji Maharaj | Historical Tribute",
  description:
    "An immersive tribute to the life, legacy and achievements of Chhatrapati Shivaji Maharaj, founder of the Maratha Empire.",
  keywords: ["Shivaji Maharaj", "Maratha Empire", "Indian History", "Maharashtra", "Raigad", "Maratha Forts"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cinzel.variable} ${poppins.variable} bg-background text-parchment antialiased`}>
        {children}
      </body>
    </html>
  )
}

