import Header from "@/components/header"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import FortGallery from "@/components/fort-gallery"
import Legacy from "@/components/legacy"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4">
        <Timeline />
        <div className="section-divider" />
        <FortGallery />
        <div className="section-divider" />
        <Legacy />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

