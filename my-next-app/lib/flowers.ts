export type Flower = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  season: string;
  color: string;
  careTips: string;
};

// For now this is in-memory mock data.
// Later, you can replace this with PostgreSQL / Supabase queries.
export const flowers: Flower[] = [
  {
    id: 1,
    name: "Morning Ritual Bouquet",
    slug: "morning-ritual-bouquet",
    description:
      "Soft blush roses, white ranunculus, and airy greenery designed for calm kitchen counters and bedside tables.",
    price: 42,
    images: ["/images/morning-ritual-1.jpg"],
    season: "Spring",
    color: "Blush",
    careTips:
      "Trim stems at an angle, change water every 2 days, and keep away from direct sunlight for longer-lasting blooms.",
  },
  {
    id: 2,
    name: "Sunday Table Arrangement",
    slug: "sunday-table-arrangement",
    description:
      "A generous centerpiece with seasonal stems for slow breakfasts, dinner parties, and everything in between.",
    price: 58,
    images: ["/images/sunday-table-1.jpg"],
    season: "All-season",
    color: "Neutral",
    careTips:
      "Refresh water often and remove any leaves below the water line. Rotate the vase daily for even light exposure.",
  },
  {
    id: 3,
    name: "Desk-side Posy",
    slug: "desk-side-posy",
    description:
      "Compact arrangement perfect for your workspace — a small daily reminder to look up from your screen.",
    price: 32,
    images: ["/images/desk-side-posy-1.jpg"],
    season: "All-season",
    color: "Bright",
    careTips:
      "Place away from vents and drafts. Top up water frequently as small vases dry out faster.",
  },
];

export function getAllFlowers() {
  return flowers;
}

export function getFlowerBySlug(slug: string) {
  return flowers.find((flower) => flower.slug === slug) ?? null;
}

export function getFeaturedFlower() {
  // Simple placeholder: always return the first flower.
  // A real implementation would pick by date or use an admin-set flag.
  return flowers[0] ?? null;
}

