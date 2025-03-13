"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface TimelineEventType {
  year: string
  title: string
  description: string
  image: string
  side: "left" | "right"
  imageProps: {
    width: number
    height: number
  }
}

const timelineEvents: TimelineEventType[] = [
  {
    year: "1630",
    title: "Birth at Shivneri Fort",
    description:
      "Born on February 19th, 1630 to Shahaji Bhonsle and Jijabai at Shivneri Fort. His mother, Jijabai, instilled in him a strong sense of duty and independence.",
    image: "/birth.jpg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1645",
    title: "Early Fort Captures",
    description:
      "At the age of 16,  Chatrapati Shivaji Maharaj captured the Torna Fort, followed by several other strategic forts, marking the beginning of his quest for Swarajya (self-rule).",
    image: "/early.png",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1656",
    title: "Capture of Javli",
    description:
      "Conquered Javli from Chandra Rao More, expanding his territory and gaining control of vital routes to the Konkan region.",
    image: "/javli.jpeg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1659",
    title: "Battle of Pratapgad",
    description:
      "In a legendary encounter at Pratapgad,  Chatrapati Shivaji Maharaj outmaneuvered and defeated Afzal Khan of Bijapur, a pivotal victory that established his reputation.",
    image: "/afzal.jpg",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1660",
    title: "Battle of Pawankhind",
    description:
      "A crucial battle where Baji Prabhu Deshpande and 300 warriors held off the massive Adilshahi army at Ghod Khind, sacrificing their lives to ensure Shivaji's safe escape.",
    image: "/pawankhind.jpg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1663",
    title: "Attack on Shaista Khan",
    description:
      "Led a daring night raid on Shaista Khan's camp in Pune, demonstrating his tactical brilliance and dealing a significant blow to Mughal pride.",
    image: "/shaista.png",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1664",
    title: "First Sack of Surat",
    description:
      "Raided Surat, the wealthy Mughal trading port, acquiring resources to fund his military campaigns and asserting his growing power.",
    image: "/surat.jpeg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1666",
    title: "Escape from Agra",
    description:
      "Made a legendary escape from Aurangzeb's captivity in Agra, showcasing his intelligence and resourcefulness in the face of adversity.",
    image: "/agra.jpeg",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1670",
    title: "Conquest of Sinhagad",
    description:
      "Led by Tanaji Malusare, Chatrapati Shivaji Maharaj's forces recaptured the strategic Sinhagad fort in a daring night raid, though Tanaji sacrificed his life in the battle.",
    image: "/tanaji.jpg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1674",
    title: "Coronation (Rajyabhishek)",
    description:
      "Formally crowned as Chhatrapati at Raigad Fort, establishing the Maratha Empire with traditional Vedic rituals, marking the birth of an independent Hindu kingdom.",
    image: "/shivrajyabhishek1.jpg",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1677",
    title: "Southern Campaign",
    description:
      "Launched a successful campaign in southern India, expanding his influence and capturing important forts including Gingee and Vellore.",
    image: "/southern.jpg",
    side: "right",
    imageProps: { width: 600, height: 400 }
  },
  {
    year: "1680",
    title: "Legacy",
    description:
      "Passed away on April 3rd, 1680 at Raigad Fort, leaving behind a legacy of just governance, military innovation, and cultural renaissance that continues to inspire millions.",
    image: "/death.jpg",
    side: "left",
    imageProps: { width: 600, height: 400 }
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">Historical Timeline</h2>
        <p className="text-parchment/80 max-w-2xl mx-auto">
          Journey through the remarkable life of Chhatrapati Shivaji Maharaj, from his birth at Shivneri Fort to
          establishing the Maratha Empire.
        </p>
      </div>

      <div className="relative">
        {/* Timeline track */}
        <div className="timeline-track" />

        {/* Timeline events */}
        <div className="relative z-10">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({ event }: { event: TimelineEventType }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    hidden: {
      opacity: 0,
      x: event.side === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  return (
    <div
      ref={ref}
      className={`mb-24 md:mb-32 flex flex-col ${
        event.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } items-center`}
    >
      {/* Timeline node */}
      
      <div className="timeline-node" style={{ top: "4%" }} />
      <div className="timeline-node" style={{ top: "14%" }} />
      <div className="timeline-node" style={{ top: "21%" }} />
      <div className="timeline-node" style={{ top: "29%" }} />
      <div className="timeline-node" style={{ top: "37%" }} />
      <div className="timeline-node" style={{ top: "44%" }} />
      <div className="timeline-node" style={{ top: "53%" }} />
      <div className="timeline-node" style={{ top: "62%" }} />
      <div className="timeline-node" style={{ top: "72%" }} />
      <div className="timeline-node" style={{ top: "81%" }} />
      <div className="timeline-node" style={{ top: "88%" }} />
      <div className="timeline-node" style={{ top: "97%" }} />

      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`w-full md:w-1/2 px-4 ${event.side === "left" ? "md:pr-12" : "md:pl-12"}`}
      >
        <div className="bg-stone/10 border border-stone/30 rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center mb-4">
            <span className="text-primary font-bold text-xl">{event.year}</span>
            <div className="h-px bg-primary/30 flex-grow mx-4"></div>
            <h3 className="text-xl font-serif font-semibold text-parchment">{event.title}</h3>
          </div>

          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={event.imageProps?.width || 600}
              height={event.imageProps?.height || 400}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <p className="text-parchment/80">{event.description}</p>
        </div>
      </motion.div>
    </div>
  )
}

