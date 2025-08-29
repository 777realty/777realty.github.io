interface FeaturedListing {
  id: number
  title: string
  price: string
  beds: number
  baths: number
  sqft: number
  imageUrl: string
  slug: string
  caption: string
}

export const featuredListings: FeaturedListing[] = [
  {
    id: 1,
    title: "3542 VIA DEL PRADO",
    price: "$2,386,000",
    beds: 4,
    baths: 3,
    sqft: 3419,
    imageUrl: "/featured.jpg",
    slug: "3542-via-del-prado",
    caption: "Luxurious Mediterranean Estate showcasing refined elegance"
  },
  {
    id: 2,
    title: "25721 PACIFIC CREST",
    price: "$3,495,000",
    beds: 5,
    baths: 4.5,
    sqft: 4200,
    imageUrl: "/featured.jpg",
    slug: "25721-pacific-crest",
    caption: "Contemporary masterpiece with stunning ocean views"
  },
  {
    id: 3,
    title: "4829 BREWSTER DRIVE",
    price: "$4,250,000",
    beds: 6,
    baths: 5,
    sqft: 5100,
    imageUrl: "/featured.jpg",
    slug: "4829-brewster-drive",
    caption: "Elegant modern design meets classic sophistication"
  },
  {
    id: 4,
    title: "23655 HARBOR VIEW",
    price: "$5,890,000",
    beds: 5,
    baths: 5.5,
    sqft: 6300,
    imageUrl: "/featured.jpg",
    slug: "23655-harbor-view",
    caption: "Premier waterfront estate with panoramic views"
  },
  {
    id: 5,
    title: "4218 LOST HILLS ROAD",
    price: "$3,975,000",
    beds: 4,
    baths: 4,
    sqft: 4800,
    imageUrl: "/featured.jpg",
    slug: "4218-lost-hills-road",
    caption: "Secluded oasis offering ultimate privacy and comfort"
  },
  {
    id: 6,
    title: "25331 PRADO DE LAS BELLOTAS",
    price: "$6,495,000",
    beds: 6,
    baths: 6.5,
    sqft: 7200,
    imageUrl: "/featured.jpg",
    slug: "25331-prado-de-las-bellotas",
    caption: "Spanish revival estate with luxury modern amenities"
  },
  {
    id: 7,
    title: "3892 RIDGEMONT COURT",
    price: "$4,750,000",
    beds: 5,
    baths: 4.5,
    sqft: 5500,
    imageUrl: "/featured.jpg",
    slug: "3892-ridgemont-court",
    caption: "Contemporary hilltop retreat with city light views"
  },
  {
    id: 8,
    title: "24988 VISTA POINT LANE",
    price: "$7,295,000",
    beds: 7,
    baths: 7,
    sqft: 8100,
    imageUrl: "/featured.jpg",
    slug: "24988-vista-point-lane",
    caption: "Architectural masterpiece with unparalleled views"
  },
  {
    id: 9,
    title: "4567 OCEANVIEW TERRACE",
    price: "$5,250,000",
    beds: 5,
    baths: 5.5,
    sqft: 5800,
    imageUrl: "/featured.jpg",
    slug: "4567-oceanview-terrace",
    caption: "Modern coastal living at its finest"
  },
  {
    id: 10,
    title: "25892 ROYAL VISTA",
    price: "$8,950,000",
    beds: 8,
    baths: 8.5,
    sqft: 9200,
    imageUrl: "/featured.jpg",
    slug: "25892-royal-vista",
    caption: "Grand estate offering the pinnacle of luxury living"
  }
]
