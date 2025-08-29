import CommunityCard from "./communities/community-card"

export default function CommunitiesSection() {
  const communities = [
    {
      name: "Lake View Terrace",
      slug: "lake-view-terrace",
      imageUrl: "/LVT.png",
    },
    {
      name: "Malibu",
      slug: "malibu",
      imageUrl: "/malibu.png",
    },
    {
      name: "Mont Calabasas",
      slug: "mont-calabasas",
      imageUrl: "/montcalabasas.png",
    },
    {
      name: "Westlake Village",
      imageUrl: "/westlake village.png",
    },
    {
      name: "Bell Canyon",
      imageUrl: "/bell canyon.png",
    },
  ]

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CommunityCard
            name="Communities"
            imageUrl=""
            isViewAll={true}
          />
          {communities.map((community) => (
            <CommunityCard
              key={community.name}
              name={community.name}
              slug={community.slug}
              imageUrl={community.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
