import Image from "next/image"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  slug: string
  category: string
  excerpt: string
  imageIndex: number
}

export default function BlogPostCard({ title, slug, category, excerpt, imageIndex }: BlogPostCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden">
        <Image
          src={`/blog${imageIndex + 1}${imageIndex === 0 ? '.png' : '.jpg'}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4">
          <span className="bg-black text-white text-xs px-3 py-1">{category}</span>
        </div>
      </div>
      <h3 className="text-lg font-light mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-xs hover:underline">
        READ MORE
      </Link>
    </article>
  )
}
