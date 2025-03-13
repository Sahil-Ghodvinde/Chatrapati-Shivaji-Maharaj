import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone/20 border-t border-stone/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-parchment mb-4">Chhatrapati Shivaji Maharaj</h3>
            <p className="text-parchment/70 mb-4">
              A historical tribute to the founder of the Maratha Empire and one of India's greatest leaders.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-parchment mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Historical Timeline
                </Link>
              </li>
              <li>
                <Link href="#forts" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Fort Gallery
                </Link>
              </li>
              <li>
                <Link href="#legacy" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Legacy
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-parchment mb-4">Related Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Maharashtra Tourism
                </Link>
              </li>
              <li>
                <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Archaeological Survey of India
                </Link>
              </li>
              <li>
                <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Directorate of Archives, Maharashtra
                </Link>
              </li>
              <li>
                <Link href="#" className="text-parchment/70 hover:text-primary transition-colors duration-300">
                  Historical Research Foundation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone/30 pt-8 text-center">
          <p className="text-parchment/60 text-sm">
            &copy; {new Date().getFullYear()} Chhatrapati Shivaji Maharaj Historical Tribute. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="text-parchment/60 hover:text-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-parchment/60 hover:text-primary text-sm transition-colors duration-300">
              Terms of Use
            </Link>
            <Link href="#" className="text-parchment/60 hover:text-primary text-sm transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

