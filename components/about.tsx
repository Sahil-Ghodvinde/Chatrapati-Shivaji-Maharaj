"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Users, FileText } from "lucide-react"



export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">About This Project</h2>
        <p className="text-parchment/80 max-w-2xl mx-auto">
          Our mission, research methodology, and the dedicated team behind this historical tribute.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <div className="bg-stone/10 border border-stone/30 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-primary" size={28} />
          </div>
          <h3 className="text-xl font-serif font-semibold text-parchment mb-2">Our Mission</h3>
          <p className="text-parchment/80">
            To create an immersive, historically accurate digital tribute to Chhatrapati Shivaji Maharaj, making his
            legacy accessible to a global audience.
          </p>
        </div>

        <div className="bg-stone/10 border border-stone/30 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="text-primary" size={28} />
          </div>
          <h3 className="text-xl font-serif font-semibold text-parchment mb-2">Research Methodology</h3>
          <p className="text-parchment/80">
            Our content is based on primary historical sources, scholarly works, and consultation with leading
            historians specializing in Maratha history.
          </p>
        </div>

        <div className="bg-stone/10 border border-stone/30 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-primary" size={28} />
          </div>
          <h3 className="text-xl font-serif font-semibold text-parchment mb-2">Educational Focus</h3>
          <p className="text-parchment/80">
            We strive to present history in an engaging, accessible format while maintaining scholarly integrity and
            historical accuracy.
          </p>
        </div>
      </motion.div>

      
      

      <div className="mt-16">
        <div className="sword-divider"></div>
        <div className="text-center">
          <h3 className="text-xl font-serif font-semibold text-parchment mb-4">References & Resources</h3>
          <p className="text-parchment/80 max-w-2xl mx-auto mb-6">
            Our research draws from these authoritative sources on Maratha history:
          </p>
          <ul className="text-parchment/70 space-y-2 max-w-xl mx-auto">
            <li>• &quot;Shivaji and His Times&quot; by Sir Jadunath Sarkar</li>
            <li>• &quot;Shivaji: The Great Maratha&quot; by H.S. Sardesai</li>
            <li>• Archives of the Directorate of Archives, Government of Maharashtra</li>
            <li>• &quot;History of the Marathas&quot; by James Grant Duff</li>
            <li>• &quot;Shivaji and the Indian National Movement&quot; by Richard I. Cashman</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

