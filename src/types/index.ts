export type NavLink = {
  href: string;
  label: string;
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

export type ReservationFormValues = {
  fullName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  partySize: string;
  specialRequests?: string;
};
