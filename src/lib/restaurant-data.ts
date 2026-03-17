import type { Dish, MenuCategory, NavLink, Review } from "@/types";

export const navLinks: NavLink[] = [
  { href: "/menu", label: "Menu" },
  { href: "/#our-story", label: "Our Story" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#location", label: "Location" },
];

export const heroSlides = [
  {
    src: "/images/hero/interior-01.svg",
    alt: "Warm Ovenista dining room with brick walls and amber lighting",
  },
  {
    src: "/images/hero/hero-slide-01.svg",
    alt: "Wood-fired oven at Ovenista with glowing ember light",
  },
  {
    src: "/images/hero/hero-slide-02.svg",
    alt: "Wood-fired pizza served fresh from the oven",
  },
  {
    src: "/images/interior/mural-detail.svg",
    alt: "Venetian mural detail inside Ovenista",
  },
];

export const manifestoItems = [
  "Pizza",
  "Handmade Pasta",
  "Long-Smoked",
  "European Craft",
  "Dine-in",
  "Takeaway",
];

export const featuredDishes: Dish[] = [
  {
    image: "/images/food/margherita.jpg",
    category: "Wood-Fired Pizza",
    name: "Margherita della Casa",
    description: "Blistered crust, ancient dough, and bright basil heat.",
    href: "/menu#pizza",
  },
  {
    image: "/images/food/bbq-chicken.jpg",
    category: "6-hour Sous-vide, Smoked",
    name: "Smoked BBQ Chicken",
    description: "Boneless, BBQ spices, served with honey mustard lemon dressing",
    href: "/menu#pasta",
  },
  {
    image: "/images/food/brisket.webp",
    category: "Long-Smoked",
    name: "Oak & Ember Brisket",
    description: "Low fire. Long patience. Pure flavour.",
    href: "/menu#long-smoked",
  },
  {
    image: "/images/food/seabass.jpg",
    category: "Chef's Selection",
    name: "Today from the Oven",
    description: "Whatever the oven is feeling today.",
    href: "/menu#desserts",
  },
];

export const storyImage = {
  src: "/images/interior/red.webp",
  alt: "Ovenista interior with exposed brick and dark wood tables",
};

export const galleryImages = [
  {
    src: "/images/interior/red.webp",
    alt: "Interior full shot of Ovenista",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/interior/cook2.jpg",
    alt: "Close-up of a pizza from Ovenista",
    className: "",
  },
  {
    src: "/images/interior/outside.webp",
    alt: "Venetian mural detail at Ovenista",
    className: "",
  },
  {
    src: "/images/interior/cook.jpg",
    alt: "Oven dome close-up at Ovenista",
    className: "md:col-span-2",
  },
  {
    src: "/images/interior/cook-cut.jpg",
    alt: "Hands shaping pasta dough",
    className: "md:row-span-2",
  },
  {
    src: "/images/interior/up.jpg",
    alt: "Warm dining area viewed from the mezzanine",
    className: "",
  },
  {
    src: "/images/food/close-up-pizza.jpg",
    alt: "Brick wall textures and warm Ovenista lighting",
    className: "",
  },
  {
    src: "/images/food/carbon.webp",
    alt: "Wood-fired oven detail with glowing embers",
    className: "md:col-span-2",
  },
];

export const reviews: Review[] = [
  {
    rating: 5,
    text: "The pizza was extraordinary. Crispy, soulful, perfect.",
    author: "Maria G.",
    source: "google",
    date: "October 2024",
  },
  {
    rating: 5,
    text: "A restaurant with real warmth. The smoked meats were outstanding.",
    author: "David L.",
    source: "google",
    date: "November 2024",
  },
  {
    rating: 5,
    text: "You feel the craft in every plate. Pasta, service, atmosphere, all of it.",
    author: "Anh P.",
    source: "google",
    date: "December 2024",
  },
];

export const hours = [
  { day: "Monday - Sunday", time: "11:00 AM - 10:00 PM" },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    label: "Pizza",
    intro: "Wood-fired, blistered, and finished with a little theatre.",
    items: [
      {
        image: "/images/food/pizza-01.svg",
        category: "Pizza",
        name: "Margherita della Casa",
        description: "San Marzano tomato, fior di latte, basil, olive oil.",
        href: "/reserve",
        price: "220.000 VND",
        dietaryTags: ["Vegetarian"],
      },
      {
        image: "/images/food/pizza-01.svg",
        category: "Pizza",
        name: "Diavola Ember",
        description: "Spicy salami, roasted pepper, smoked chili honey.",
        href: "/reserve",
        price: "265.000 VND",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    intro: "Hand-cut, hand-rolled, and dressed with restraint.",
    items: [
      {
        image: "/images/food/pasta-01.svg",
        category: "Pasta",
        name: "Tagliatelle al Ragu",
        description: "Slow-cooked beef ragu, parmigiano, cracked pepper.",
        href: "/reserve",
        price: "285.000 VND",
      },
      {
        image: "/images/food/pasta-01.svg",
        category: "Pasta",
        name: "Cacio e Pepe",
        description: "Pecorino cream, black pepper, toasted breadcrumbs.",
        href: "/reserve",
        price: "245.000 VND",
        dietaryTags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "long-smoked",
    label: "Long-Smoked",
    intro: "Low flames, long patience, deep savoury character.",
    items: [
      {
        image: "/images/food/smoked-01.svg",
        category: "Long-Smoked",
        name: "Oak-Smoked Brisket",
        description: "Served with charred onions, mustard cream, herbs.",
        href: "/reserve",
        price: "360.000 VND",
      },
      {
        image: "/images/food/smoked-01.svg",
        category: "Long-Smoked",
        name: "Brick House Ribs",
        description: "Glazed slowly with ember barbecue and apple vinegar.",
        href: "/reserve",
        price: "395.000 VND",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    intro: "A short, confident list built for the food.",
    items: [
      {
        image: "/images/interior/ambiance-01.svg",
        category: "Drinks",
        name: "Venetian Spritz",
        description: "Aperitivo, sparkling wine, orange peel.",
        href: "/reserve",
        price: "165.000 VND",
      },
      {
        image: "/images/interior/ambiance-01.svg",
        category: "Drinks",
        name: "Espresso Finale",
        description: "Short, dark, and proper.",
        href: "/reserve",
        price: "55.000 VND",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    intro: "A quiet ending with smoke, cream, and spice.",
    items: [
      {
        image: "/images/food/chef-selection.svg",
        category: "Desserts",
        name: "House Tiramisu",
        description: "Mascarpone, espresso, cocoa, soft sponge.",
        href: "/reserve",
        price: "145.000 VND",
      },
      {
        image: "/images/food/chef-selection.svg",
        category: "Desserts",
        name: "Vanilla Panna Cotta",
        description: "Burnt honey, poached fig, toasted almond.",
        href: "/reserve",
        price: "135.000 VND",
      },
    ],
  },
];

export const reservationTimes = [
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

export const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];
