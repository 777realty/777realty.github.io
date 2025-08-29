import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pr-0 md:pr-12 flex flex-col justify-center">
            <h2 className="text-2xl font-light mb-8 tracking-wide">MEET 777 REAL ESTATE & INVESTMENTS</h2>
            <div className="space-y-6 text-sm leading-relaxed text-gray-700">
              <p>
                777 Real Estate & Investments is the future of real estate, having created a streamlined, tech savvy, and personalized
                experience for buyers and sellers. From selection to service, the operational excellence the team
                provides is unmatchable, and they guide their clients with a friendly, casual approach that optimizes
                the California lifestyle.
              </p>
              <p>
                Their engaging nature is the result of intention – not a lack of intensity. It is marked by a combined
                40-plus years of expertise and a digital mindset that pairs proven, high-touch techniques with modern,
                tech forward offerings.
              </p>
              <p>
                Dawn, Jeff, and the 777 Real Estate & Investments team consistently advise a wide range of influential buyers and sellers
                in a manner and style that has earned them recognition on a national level.
              </p>
              <Link
                href="/about"
                className="inline-block border border-black px-8 py-3 text-xs tracking-widest hover:bg-black hover:text-white transition-colors mt-4"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className="relative min-h-[600px]">
            <Image
              src="/meet.jpg"
              alt="777 Real Estate & Investments team members"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
