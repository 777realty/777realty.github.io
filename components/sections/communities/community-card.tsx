import Image from "next/image"
import Link from "next/link"

interface CommunityCardProps {
  name: string
  slug?: string
  imageUrl: string
  isViewAll?: boolean
}

export default function CommunityCard({ name, slug, imageUrl, isViewAll = false }: CommunityCardProps) {
  if (isViewAll) {
    return (
      <Link
        href="/communities"
        className="relative group block aspect-[4/3] overflow-hidden bg-black"
      >
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-light tracking-widest mb-4">COMMUNITIES</h2>
          <span className="inline-block border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors">
            VIEW ALL
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={slug ? `/communities/${slug}` : "#"}
      className="relative group block aspect-[4/3] overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={`${name} community`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-light tracking-wider">{name}</h3>
        </div>
      </div>
    </Link>
  )
}
