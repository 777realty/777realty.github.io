"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import TeamAccolades from "@/components/sections/team-accolades"
import FeaturedListings from "@/components/sections/featured-listings/featured-listings"
import BuySellSection from "@/components/sections/buy-sell-section"
import CommunitiesSection from "@/components/sections/communities-section"
import WorkWithUsNewsletter from "@/components/sections/work-with-us-newsletter"
import BlogSection from "@/components/sections/blog-section"
import OffMarketSection from "@/components/sections/off-market-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamAccolades />
      <FeaturedListings />
      <BuySellSection />
      <CommunitiesSection />
      <WorkWithUsNewsletter />
      <BlogSection />
      <OffMarketSection />
      <Footer />
    </main>
  )
}
