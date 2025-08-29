"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useState } from "react"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { featuredListings } from "./data"

export default function FeaturedListings() {
  const [api, setApi] = useState<CarouselApi>()
  const plugin = Autoplay({ 
    delay: 5000, 
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    stopOnFocusIn: true
  })

  return (
    <section className="relative">
      <Carousel
        opts={{
          loop: true,
          skipSnaps: false,
          containScroll: "keepSnaps",
          dragFree: false,
          align: "start"
        }}
        plugins={[plugin]}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent className="ml-0">
          {featuredListings.map((listing) => (
            <CarouselItem key={listing.id} className="relative w-full pl-0">
              <div className="relative">
                <Image
                  src={listing.imageUrl}
                  alt={`${listing.title} - Luxury home exterior`}
                  width={1200}
                  height={600}
                  className="w-full h-[633px] object-cover"
                  priority={listing.id === 1}
                />
                <div className="absolute inset-0 bg-black/10">
                  <div className="container mx-auto px-4 h-full flex flex-col">
                    <div className="text-white flex items-end justify-between pt-[450px]">
                      <div 
                        className="group cursor-pointer overflow-hidden"
                        onMouseEnter={() => {
                          api?.plugins().autoplay.stop()
                        }}
                        onMouseLeave={() => {
                          api?.plugins().autoplay.reset()
                        }}
                      >
                        <div className="translate-y-0 opacity-100 transition-all duration-500 ease-out transform-gpu lg2:group-hover:translate-y-[-100px] lg2:group-hover:opacity-0">
                          <p className="text-sm tracking-widest mb-2">FEATURED LISTING</p>
                          <h3 className="text-3xl font-light mb-1">{listing.title}</h3>
                          <p className="text-sm text-white/80 font-serif">
                            {`${listing.price} | ${listing.beds} Beds | ${listing.baths} Baths | ${listing.sqft.toLocaleString()} Sq.Ft.`}
                          </p>
                        </div>
                        <div className="text-black absolute translate-y-[150%] transition-transform duration-500 ease-out transform-gpu lg2:group-hover:translate-y-[-100px] hidden lg2:flex">
                          <p className="text-base text-gray-800 font-serif italic leading-relaxed text-left bg-white px-6 py-8 max-w-md">
                            {listing.caption}
                          </p>
                          <div className="bg-black/75 text-white px-6 py-6 text-right flex flex-col space-y-2 w-[280px]">
                            <div className="border-b border-white/20 pb-2 flex justify-between items-center">
                              <span className="font-bold text-base">{listing.price}</span>
                              <span className="font-serif text-xs italic">Price</span>
                            </div>
                            
                            <div className="border-b border-white/20 pb-2 flex justify-between items-center">
                              <span className="font-bold text-base">{listing.beds}</span>
                              <span className="font-serif text-xs italic">Beds</span>
                            </div>

                            <div className="border-b border-white/20 pb-2 flex justify-between items-center">
                              <span className="font-bold text-base">{listing.baths}</span>
                              <span className="font-serif text-xs italic">Baths</span>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="font-bold text-base">{listing.sqft.toLocaleString()}</span>
                              <span className="font-serif text-xs italic">Sq.Ft.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/listings/${listing.slug}`}
                        className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors self-end"
                      >
                        LEARN MORE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 h-auto w-auto p-2 bg-transparent hover:bg-transparent border border-white hover:border-white/70 [&>svg]:text-white [&>svg]:stroke-[1.5]">
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>

        <CarouselNext className="absolute right-4 top-1/2 h-auto w-auto p-2 bg-transparent hover:bg-transparent border border-white hover:border-white/70 [&>svg]:text-white [&>svg]:stroke-[1.5]">
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>
      </Carousel>
    </section>
  )
}
