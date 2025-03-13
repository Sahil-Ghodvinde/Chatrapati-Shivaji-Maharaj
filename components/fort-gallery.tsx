"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"

const forts = [
  {
    id: 1,
    name: "Raigad",
    description: "The capital fort of Shivaji's kingdom and the site of his coronation in 1674.",
    image: "/Raigad2.jpg?height=400&width=600",
    location: "Mahad, Raigad district",
  },
  {
    id: 2,
    name: "Pratapgad",
    description: "The site of the famous battle where Shivaji defeated Afzal Khan in 1659.",
    image: "/pratapgad.jpeg?height=400&width=600",
    location: "Satara district",
  },
  {
    id: 3,
    name: "Sindhudurg",
    description: "A sea fort built by Shivaji in 1664, showcasing his naval strategy.",
    image: "/Sindhu-durg-fort-1.jpg?height=400&width=600",
    location: "Malvan, Sindhudurg district",
  },
  {
    id: 4,
    name: "Sinhagad",
    description: "Originally called Kondhana, renamed after Tanaji Malusare's sacrifice in 1670.",
    image: "/Sinhagad.jpg?height=400&width=600",
    location: "Pune district",
  },
  {
    id: 5,
    name: "Rajgad",
    description: "Served as Shivaji's capital for over 25 years before moving to Raigad.",
    image: "/Rajgad.jpg?height=400&width=600",
    location: "Pune district",
  },
  {
    id: 6,
    name: "Torna",
    description: "The first fort captured by Shivaji at the age of 16 in 1645.",
    image: "/Torna.jpg?height=400&width=600",
    location: "Pune district",
  },
]

export default function FortGallery() {
  const [selectedFort, setSelectedFort] = useState<null | (typeof forts)[0]>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="forts" className="py-20" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">Fort Gallery</h2>
        <p className="text-parchment/80 max-w-2xl mx-auto">
          Explore the magnificent forts conquered and built by Chhatrapati Shivaji Maharaj, showcasing his military
          genius and architectural vision.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {forts.map((fort) => (
          <motion.div
            key={fort.id}
            className="fort-card group cursor-pointer"
            onClick={() => setSelectedFort(fort)}
            variants={itemVariants}
          >
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <Image
                src={fort.image || "/placeholder.svg"}
                alt={fort.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-serif font-semibold text-parchment mb-2">{fort.name}</h3>
              <p className="text-parchment/70 text-sm">{fort.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fort Modal */}
      {selectedFort && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background border border-stone rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setSelectedFort(null)}
                className="absolute top-4 right-4 text-parchment/70 hover:text-primary z-10 bg-background/70 rounded-full p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="relative h-72 sm:h-96">
                <Image
                  src={selectedFort.image || "/placeholder.svg"}
                  alt={selectedFort.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-parchment mb-2">{selectedFort.name}</h3>
              <p className="text-primary/90 text-sm mb-4">{selectedFort.location}</p>
              <div className="prose prose-invert max-w-none">
                <p className="text-parchment/90 mb-4">{selectedFort.description}</p>
                <p className="text-parchment/80">
                  This magnificent fort stands as a testament to Chhatrapati Shivaji Maharaj&apos;s military genius and
                  architectural vision. The strategic location and innovative design elements showcase the advanced
                  military thinking of the era.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

