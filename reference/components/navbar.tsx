import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative h-8 w-32">
            <Image src="/logo.svg" alt="Frontgate Compass" fill className="object-contain" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-white text-xs tracking-wider">
            <Link href="/properties" className="hover:opacity-80 transition-opacity">
              OUR PROPERTIES
            </Link>
            <Link href="/team" className="hover:opacity-80 transition-opacity">
              MEET THE TEAM
            </Link>
            <Link href="/join" className="hover:opacity-80 transition-opacity">
              JOIN THE TEAM
            </Link>
            <Link href="/search" className="hover:opacity-80 transition-opacity">
              MLS SEARCH
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              CONTACT US
            </Link>
            <a href="tel:+17478880000" className="hover:opacity-80 transition-opacity">
              (747) 888-0000
            </a>
            <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span>MENU</span>
              <Menu className="h-5 w-5" />
            </button>
          </nav>

          <button className="md:hidden text-white flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span>MENU</span>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

