import Link from "next/link"
import BlogPostCard from "./blog/blog-post-card"

export default function BlogSection() {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-light mb-8 text-center">FROM OUR BLOG</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={post.title}
              {...post}
              imageIndex={index}
            />
          ))}
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
  )
}
