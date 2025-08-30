import Image from "next/image"
import Link from "next/link"
import NewsletterForm from "./newsletter/newsletter-form"

export default function WorkWithUsNewsletter() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/newsletter.jpg"
        alt="Luxury gated community entrance at sunset"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60">
        <div className="container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            {/* Work With Us */}
            <div className="text-white max-w-xl">
              <h2 className="text-2xl font-light tracking-widest mb-6">WORK WITH US</h2>
              <p className="text-sm mb-6 leading-relaxed">
                We offer the highest level of expertise and service with integrity.
              </p>
              <p className="text-sm mb-8 leading-relaxed">
                Agent 1 and Agent 2 are Luxury Homes Specialists in Calabasas with a particular expertise in
                Hidden Hills, The Oaks, Bell Canyon, Calabasas, West San Fernando Valley, Conejo Valley, Malibu and
                Greater Los Angeles areas. As consummate professionals, Agent 1 and Agent 2 provide their
                clients with the highest level of service to reach their unique real estate goals.
              </p>
              <Link
                href="/contact"
                className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                CONTACT US
              </Link>
            </div>

            {/* Newsletter */}
            <div className="text-white max-w-xl">
              <h2 className="text-2xl font-light tracking-widest mb-6">NEWSLETTER</h2>
              <p className="text-sm mb-6 italic">For exclusive news and market updates sign up for our newsletter.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
