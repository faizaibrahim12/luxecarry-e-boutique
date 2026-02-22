export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  features: string[];
  reviews: { name: string; rating: number; comment: string }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "The Élan Tote",
    price: 289,
    category: "Tote",
    color: "Ivory",
    image: "/bag-1",
    description: "A refined structured tote crafted from premium Italian leather. The Élan is designed for the modern woman who values both elegance and functionality. Spacious enough for daily essentials with a sophisticated silhouette.",
    features: ["Premium Italian leather", "Gold-tone hardware", "Interior zip pocket", "Magnetic snap closure", "Protective metal feet"],
    reviews: [
      { name: "Sarah M.", rating: 5, comment: "Absolutely stunning. The leather quality is exceptional." },
      { name: "Priya K.", rating: 5, comment: "Gets compliments everywhere I go. Worth every penny." },
      { name: "Emma L.", rating: 4, comment: "Beautiful bag, slightly larger than expected but I love it." },
    ],
  },
  {
    id: "2",
    name: "The Soirée Crossbody",
    price: 219,
    category: "Crossbody",
    color: "Cognac",
    image: "/bag-2",
    description: "A compact yet versatile crossbody that transitions effortlessly from day to evening. Handcrafted with meticulous attention to detail, the Soirée features an adjustable strap and secure zip closure.",
    features: ["Full-grain leather", "Adjustable crossbody strap", "Zip-top closure", "Card slots interior", "Lightweight design"],
    reviews: [
      { name: "Aisha R.", rating: 5, comment: "Perfect size for essentials. The cognac color is gorgeous." },
      { name: "Claire D.", rating: 5, comment: "My go-to bag for everything. Impeccable craftsmanship." },
    ],
  },
  {
    id: "3",
    name: "The Grace Shoulder Bag",
    price: 259,
    category: "Shoulder",
    color: "Blush",
    image: "/bag-3",
    description: "Soft, feminine, and undeniably chic. The Grace shoulder bag features a relaxed silhouette with structured details. Its blush hue adds a touch of warmth to any outfit.",
    features: ["Soft pebbled leather", "Dual carry handles", "Detachable shoulder strap", "Suede-lined interior", "Hidden magnetic closure"],
    reviews: [
      { name: "Mia T.", rating: 5, comment: "The blush color is even more beautiful in person!" },
      { name: "Nina S.", rating: 4, comment: "Lovely bag. The leather gets better with age." },
      { name: "Olivia W.", rating: 5, comment: "Received so many compliments on my first day out with it." },
    ],
  },
  {
    id: "4",
    name: "The Noire Bucket Bag",
    price: 249,
    category: "Bucket",
    color: "Black",
    image: "/bag-4",
    description: "A timeless bucket silhouette reimagined with modern luxury. The Noire combines classic elegance with contemporary design, featuring gold drawstring hardware and a spacious interior.",
    features: ["Smooth calfskin leather", "Gold drawstring closure", "Removable crossbody strap", "Interior patch pocket", "Dust bag included"],
    reviews: [
      { name: "Zara H.", rating: 5, comment: "Elegant and practical. The gold hardware is stunning." },
      { name: "Jessica P.", rating: 5, comment: "My favorite bag purchase this year. Simply gorgeous." },
    ],
  },
];
