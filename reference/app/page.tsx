"use client"

import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  const communities = [
    {
      name: "Hidden Hills",
      slug: "hidden-hills",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cp3E33QLH4311E4gudKHGElPC6wKx3.png",
    },
    {
      name: "The Oaks",
      slug: "the-oaks",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cp3E33QLH4311E4gudKHGElPC6wKx3.png",
    },
    {
      name: "Calabasas",
      slug: "calabasas",
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cp3E33QLH4311E4gudKHGElPC6wKx3.png",
    },
  ]

  const blogPosts = [
    {
      title: "RETROGRADES AND ECLIPSES",
      slug: "retrogrades-and-eclipses",
      category: "LIFESTYLE",
      excerpt: "March is a Total Wave of Change",
    },
    {
      title: "5TH ANNUAL SHRED EVENT",
      slug: "5th-annual-shred-event",
      category: "LOCAL HAPPENINGS",
      excerpt: "Saturday, April 15th from 9:00 AM - 12:00 PM",
    },
    {
      title: "5 REASONS WHY CALIFORNIA'S PROPERTY MARKET WILL STAY STRONG IN 2023",
      slug: "california-property-market-2023",
      category: "REAL ESTATE",
      excerpt: "Despite the recent devastating storm that took us all by...",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-34OHADmKjMRtf5cpvOkI9XzkvVVBPj.png"
          alt="Luxury home with pool at night"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <div className="max-w-3xl">
              <p className="text-sm tracking-widest mb-2">WELCOME TO</p>
              <h1 className="text-5xl md:text-6xl font-light mb-4">FRONTGATE REAL ESTATE</h1>
              <p className="text-sm italic mb-6">Search our exclusive listings.</p>

              <div className="mb-8 space-y-1">
                <p className="text-sm">Dawn Olson | CA DRE# 00944676</p>
                <p className="text-sm">Jeff Biebuyck | CA DRE# 01883921</p>
              </div>

              <Link
                href="/search"
                className="inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                SEARCH ALL HOMES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pr-0 md:pr-12 flex flex-col justify-center">
              <h2 className="text-2xl font-light mb-8 tracking-wide">MEET FRONTGATE REAL ESTATE</h2>
              <div className="space-y-6 text-sm leading-relaxed text-gray-700">
                <p>
                  Frontgate is the future of real estate, having created a streamlined, tech savvy, and personalized
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
                  Dawn, Jeff, and the Frontgate team consistently advise a wide range of influential buyers and sellers
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
            <div className="relative min-h-[400px]">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Frontgate team members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Accolades Section */}
      <section className="relative">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AzIL8wGXuaPhUCibFZ48BIwsrKP4p1.png"
            alt="Modern interior with large windows"
            width={1200}
            height={500}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-light mb-12 tracking-widest">TEAM ACCOLADES</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <div className="text-center border-r border-gray-500 last:border-r-0">
                  <p className="text-5xl font-light mb-2">45</p>
                  <p className="text-xs tracking-wider">COMBINED YEARS IN BUSINESS</p>
                </div>

                <div className="text-center border-r border-gray-500 last:border-r-0">
                  <p className="text-5xl font-light mb-2">1.5%</p>
                  <p className="text-xs tracking-wider">TOP 1.5% OF TEAMS NATIONWIDE</p>
                </div>

                <div className="text-center">
                  <p className="text-5xl font-light mb-2">$1B+</p>
                  <p className="text-xs tracking-wider">OVER 1 BILLION IN TOTAL SALES</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-12">
                <div className="text-center border-r border-gray-500 last:border-r-0">
                  <p className="text-5xl font-light mb-2">200+M</p>
                  <p className="text-xs tracking-wider">DEAL VOLUME IN THE PAST 12 MONTHS</p>
                </div>

                <div className="text-center border-r border-gray-500 last:border-r-0">
                  <p className="text-5xl font-light mb-2">3%</p>
                  <p className="text-xs tracking-wider">LIST TO SOLD AVERAGE</p>
                </div>

                <div className="text-center">
                  <p className="text-5xl font-light mb-2">1000+</p>
                  <p className="text-xs tracking-wider">
                    # OF CHAMPAGNE BOTTLES
                    <br />
                    DELIVERED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listing Section */}
      <section className="relative">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AzIL8wGXuaPhUCibFZ48BIwsrKP4p1.png"
            alt="Luxury home exterior with backyard"
            width={1200}
            height={600}
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/10">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16">
              <div className="text-white">
                <p className="text-sm tracking-widest mb-2">FEATURED LISTING</p>
                <h3 className="text-3xl font-light mb-2">3542 VIA DEL PRADO</h3>
                <p className="text-sm mb-4">$2,386,000 | 4 Beds | 3 Baths | 3,419 Sq.Ft.</p>
                <Link
                  href="/listings/3542-via-del-prado"
                  className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            &lt;
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
            &gt;
          </button>
        </div>
      </section>

      {/* Buy/Sell Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Selling Panel */}
            <div className="relative group overflow-hidden">
              <div className="relative h-[600px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tw6QGAkah8rFcNQZmWa9pucXJFIP49.png"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tw6QGAkah8rFcNQZmWa9pucXJFIP49.png"
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

      {/* Communities Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light tracking-widest text-white mb-4">COMMUNITIES</h2>
            <Link
              href="/communities"
              className="inline-block border border-white px-8 py-3 text-xs tracking-widest text-white hover:bg-white hover:text-black transition-colors"
            >
              VIEW ALL
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={`/communities/${community.slug}`}
                className="relative group block aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={
                    community.imageUrl ||
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cp3E33QLH4311E4gudKHGElPC6wKx3.png" ||
                    "/placeholder.svg"
                   || "/placeholder.svg"}
                  alt={`${community.name} community`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-light tracking-wider">{community.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us & Newsletter Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aYpMBrWwzw1FWczYMKSPYcEkbzmeYy.png"
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
                  Jeff Biebuyck & Dawn Olmos are Luxury Homes Specialists in Calabasas with a particular expertise in
                  Hidden Hills, The Oaks, Bell Canyon, Calabasas, West San Fernando Valley, Conejo Valley, Malibu and
                  Greater Los Angeles areas. As consummate professionals, Jeff Biebuyck & Dawn Olmos provide their
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
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light tracking-widest text-center mb-12">FROM OUR BLOG</h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post) => (
                <article key={post.title} className="group">
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black text-white text-xs px-3 py-1 tracking-wider">{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-light mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-xs tracking-wider hover:underline">
                    READ MORE
                  </Link>
                </article>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
              &lt;
            </button>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
              &gt;
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block border border-black px-8 py-3 text-xs tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* Off-Market Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-light tracking-widest mb-6">
                GET ACCESS TO OFF-MARKET LISTINGS
              </h2>
              <p className="text-sm mb-8">
                Tired of dealing with outrageous bidding wars? Get in line real time! Beat your competition by subscribing to our off-market property list.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-white border shadow px-6 py-3 flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors">
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  <span>Sign in with Google</span>
                </button>
                
                <button className="w-full bg-[#1877F2] text-white px-6 py-3 flex items-center justify-center space-x-2 hover:bg-[#1864D9] transition-colors">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                  <span>Continue with Facebook</span>
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address*"
                    className="w-full px-4 py-3 border focus:ring-2 focus:ring-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors"
                  >
                    CONTINUE WITH EMAIL
                  </button>
                </form>
              </div>
            </div>

            <div className="relative h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ELMYndEbHp0eUq9vh9G9Z4XmZRrqRU.png"
                alt="Modern interior with yellow chair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-sm tracking-widest mb-4">FRONTGATE REAL ESTATE</h3>
              <p className="text-sm text-gray-400 mb-2">Premier Real Estate Agents</p>
              <p className="text-sm text-gray-400 mb-2">in Greater Los Angeles, San Fernando,</p>
              <p className="text-sm text-gray-400 mb-2">and Conejo Valley Areas</p>
              <p className="text-sm text-gray-400">Dawn Olmos | CA DRE# 00944676</p>
              <p className="text-sm text-gray-400">Jeff Biebuyck | CA DRE# 01883921</p>
              <p className="text-sm text-gray-400">Compass | DRE# 01991628</p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-sm tracking-widest mb-4">LOCATION</h3>
              <div className="relative h-40 mb-4">
                <Image
                  src="/map.png"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
              </div>
              <Link href="/directions" className="text-sm text-gray-400 hover:text-white transition-colors">
                Get Directions
              </Link>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm tracking-widest mb-4">CONTACT US</h3>
              <p className="text-sm text-gray-400 mb-2">(747) 888-0000</p>
              <p className="text-sm text-gray-400">
                25500 Long Valley Rd, Hidden Hills, CA 91302, USA
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/logo.svg"
              alt="Frontgate Compass"
              width={160}
              height={40}
              className="invert"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 italic mb-4">
              While some of the listings on this site may not be our exclusive listings, 
              we have ongoing relationships with all of the listing agents. View our Disclaimer
            </p>
            <div className="flex justify-center space-x-4">
              <Image
                src="/realtor.svg"
                alt="Realtor"
                width={24}
                height={24}
                className="invert"
              />
              <Image
                src="/equal-housing.svg"
                alt="Equal Housing Opportunity"
                width={24}
                height={24}
                className="invert"
              />
            </div>
          </div>

          {/* Credits */}
          <div className="text-center text-sm text-gray-400">
            <p className="mb-4">Website designed and developed by Luxury Presence.</p>
            <div className="flex justify-center space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.\

