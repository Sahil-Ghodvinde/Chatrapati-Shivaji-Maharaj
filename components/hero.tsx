"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />

      {/* Orange sunrise effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-radial from-primary/30 to-transparent opacity-30 blur-3xl" />

      {/* Fort silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/images/fort-silhouette.png')] bg-repeat-x bg-bottom opacity-30 z-20" />

      {/* Parallax hero image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/home12.png"
          alt="Chhatrapati Shivaji Maharaj"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-80 md:mt-80"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-parchment mb-6">
            Chhatrapati Shivaji Maharaj
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-parchment/90 max-w-2xl mx-auto font-medium italic"
          >
            &quot;Freedom is a boon, which everyone has the right to receive.&quot;
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span className="text-parchment/70 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="text-primary animate-bounce" size={24} />
        </div>
      </div>
    </section>
  )
}

