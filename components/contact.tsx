"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-parchment mb-4">Contact Us</h2>
        <p className="text-parchment/80 max-w-2xl mx-auto">Have questions or feedback? We&apos;d love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-serif font-semibold text-parchment mb-6">Get in Touch</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-parchment font-medium mb-1">Email</h4>
                <p className="text-parchment/70">connect.sahilghodvinde@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-parchment font-medium mb-1">Address</h4>
                <p className="text-parchment/70">
                  Founders-suite
                  <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-parchment font-medium mb-1">Phone</h4>
                <p className="text-parchment/70">+91 7039708212</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

