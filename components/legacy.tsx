"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const quotes = [
  {
    quote: "Shivaji is one of the greatest national builders that the history of the world has produced.",
    author: "Sir Jadunath Sarkar",
    title: "Historian",
  },
  {
    quote: "Shivaji was the greatest Hindu king that India had produced within the last thousand years.",
    author: "Vincent Smith",
    title: "British Historian",
  },
  {
    quote: "Shivaji was the greatest man of his age in India, probably the greatest Indian ruler since Ashoka.",
    author: "Dennis Kincaid",
    title: "Author",
  },
  {
    quote:
      "Shivaji's administrative skills and his foresight in establishing a navy were unparalleled in Indian history.",
    author: "Babasaheb Purandare",
    title: "Historian and Writer",
  },
]

export default function Legacy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="legacy" className="py-20" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">Legacy and Influence</h2>
        <p className="text-parchment/80 max-w-2xl mx-auto">
          The enduring impact of Chhatrapati Shivaji Maharaj on Indian history, culture, and the independence movement.
        </p>
      </div>

      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="bg-stone/10 border border-stone/30 rounded-lg p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-serif font-semibold text-parchment mb-4">Historical Impact</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-primary mb-2">Military Innovation</h4>
              <p className="text-parchment/80 mb-4">
                Shivaji Maharaj revolutionized warfare with his guerrilla tactics, naval strategy, and fort
                architecture. His military organization and intelligence network were far ahead of their time.
              </p>

              <h4 className="text-lg font-medium text-primary mb-2">Administrative Reforms</h4>
              <p className="text-parchment/80">
                The Ashtapradhan (council of eight ministers) established by Shivaji created a sophisticated
                administrative system with checks and balances. His revenue systems were fair and progressive.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-primary mb-2">Cultural Renaissance</h4>
              <p className="text-parchment/80 mb-4">
                Shivaji promoted the use of Marathi language in administration and court proceedings, sparking a
                cultural revival. He respected all religions while championing indigenous traditions.
              </p>

              <h4 className="text-lg font-medium text-primary mb-2">Inspiration for Independence</h4>
              <p className="text-parchment/80">
                Freedom fighters like Lokmanya Tilak invoked Shivaji's legacy during India's struggle for independence.
                His resistance against foreign rule became a powerful symbol of self-determination.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-serif font-semibold text-parchment mb-6 text-center">
          Historical Perspectives
        </h3>
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {quotes.map((item, index) => (
            <motion.div key={index} className="quote-card" variants={itemVariants}>
              <blockquote className="text-parchment/90 italic mb-4">"{item.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-10 h-px bg-primary/50 mr-3"></div>
                <div>
                  <p className="text-primary font-medium">{item.author}</p>
                  <p className="text-parchment/70 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

