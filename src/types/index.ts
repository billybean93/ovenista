export type NavLinkKey = "menu" | "ourStory" | "gallery" | "location";

export type NavLink = {
  href: string;
  key: NavLinkKey;
};

export type Dish = {
  image: string;
  category: string;
  name: string;
  description: string;
  href: string;
  price?: string;
  dietaryTags?: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  className: string;
};

export type HoursEntry = {
  day: string;
  time: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro: string;
  items: Dish[];
};

export type Review = {
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  author: string;
  source: "google" | "tripadvisor";
  date: string;
};
