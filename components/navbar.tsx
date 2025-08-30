import Image from "next/image"
import Link from "next/link"
import { Menu, Mail } from "lucide-react"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  const { isVisible, isAtTop } = useScrollDirection()

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transform transition-all duration-300
        ${!isVisible ? '-translate-y-full' : ''}
        ${!isAtTop ? 'bg-black/75 backdrop-blur-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative h-[72px] w-[200px]">
            <Image src="/777.png" alt="777 Real Estate & Investments" fill className="object-contain" />
          </Link>

          {/* Navigation for large screens */}
          <nav className="hidden mdl:flex items-center space-x-6 text-white text-sm tracking-wider">
            <Link href="/properties" className="hidden xl:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              OUR PROPERTIES
            </Link>
            <Link href="/team" className="hidden lg:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              MEET THE TEAM
            </Link>
            <Link href="/join" className="hidden lg:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              JOIN THE TEAM
            </Link>
            <Link href="/search" className="hidden lg:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              MLS SEARCH
            </Link>
            <Link href="/contact" className="hidden lg:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              CONTACT US
            </Link>
            <a href="tel:+15551234567" className="hidden lg:inline-block hover:opacity-80 transition-opacity whitespace-nowrap">
              (555) 123-4567
            </a>
          </nav>

          {/* Menu button and Sheet (visible on all screen sizes) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="group text-white flex items-center space-x-2 hover:opacity-80 transition-all duration-200">
                <span>MENU</span>
                <Menu className="h-5 w-5 transition-transform group-hover:scale-y-75" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 text-white border-l-0 flex flex-col">
              <nav className="flex flex-col items-center space-y-8 mt-12 text-sm tracking-wider">
                <Link href="/" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  HOME
                </Link>
                <Link href="/about" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  ABOUT
                </Link>
                <Link href="/properties" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  PROPERTIES
                </Link>
                <Link href="/new-development" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  NEW DEVELOPMENT
                </Link>
                <Link href="/sellers" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  SELLERS
                </Link>
                <Link href="/buyers" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  BUYERS
                </Link>
                <Link href="/worldwide" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  WORLDWIDE
                </Link>
                <Link href="/blog" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  BLOG
                </Link>
                <Link href="/communities" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  COMMUNITIES
                </Link>
                <Link href="/contact" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  CONTACT US
                </Link>
                <Link href="/search" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                  MY SEARCH PORTAL
                </Link>
              </nav>
              <div className="flex justify-center mt-auto pb-8">
                <button className="text-white hover:opacity-80 transition-opacity">
                  <Mail className="h-6 w-6" />
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
