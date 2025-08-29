import Image from "next/image"
import Link from "next/link"

export default function BuySellSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Selling Panel */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[600px]">
              <Image
                src="/selling.jpg"
                alt="Luxury home with pool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="h-full flex flex-col items-center justify-center text-center text-white p-8">
                  <h3 className="text-3xl font-light mb-4">SELLING A HOME?</h3>
                  <p className="text-sm italic mb-8">Find out what your home is really worth</p>
                  <Link
                    href="/home-value"
                    className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    GET HOME VALUE
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Buying Panel */}
          <div className="relative group overflow-hidden">
            <div className="relative h-[600px]">
              <Image
                src="/buying.jpg"
                alt="Modern home with outdoor lounge"
                fill
                className="object-cover object-right"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                <div className="h-full flex flex-col items-center justify-center text-center text-white p-8">
                  <h3 className="text-3xl font-light mb-4">BUYING A HOME?</h3>
                  <p className="text-sm italic mb-2">Listings updated every 15 minutes.</p>
                  <p className="text-sm italic mb-8">Use our advanced home search now!</p>
                  <Link
                    href="/search"
                    className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    FIND YOUR HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
