import { defaultLocale, type Locale } from "@/lib/i18n";
import type { Dish, GalleryImage, HoursEntry, MenuCategory, NavLink, Review } from "@/types";
import { getSpreadsheetMenuCategories } from "@/lib/menu-catalog";

export const navLinks: NavLink[] = [
  { href: "/menu", key: "menu" },
  { href: "/#our-story", key: "ourStory" },
  { href: "/#gallery", key: "gallery" },
  { href: "/#location", key: "location" },
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

const manifestoItemsByLocale: Record<Locale, string[]> = {
  en: ["Pizza", "Handmade Pasta", "Long-Smoked", "European Craft", "Dine-in", "Takeaway"],
  vi: ["Pizza", "Pasta Thủ Công", "Hun Khói Chậm", "Tinh Hoa Âu", "Ăn Tại Chỗ", "Mang Đi"],
};

const featuredDishesByLocale: Record<Locale, Dish[]> = {
  en: [
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
  ],
  vi: [
    {
      image: "/images/food/margherita.jpg",
      category: "Pizza Nướng Lò",
      name: "Margherita della Casa",
      description: "Đế bánh cháy cạnh nhẹ, bột ủ lâu và hương húng quế tươi bừng sáng.",
      href: "/menu#pizza",
    },
    {
      image: "/images/food/bbq-chicken.jpg",
      category: "Sous-vide 6 giờ, Hun Khói",
      name: "Gà BBQ Hun Khói",
      description: "Gà phi lê, gia vị BBQ, dùng cùng sốt mật ong mù tạt chanh.",
      href: "/menu#pasta",
    },
    {
      image: "/images/food/brisket.webp",
      category: "Hun Khói Chậm",
      name: "Brisket Gỗ Sồi & Than Hồng",
      description: "Lửa nhỏ. Kiên nhẫn dài lâu. Hương vị nguyên bản.",
      href: "/menu#long-smoked",
    },
    {
      image: "/images/food/seabass.jpg",
      category: "Chọn Lọc Từ Bếp Trưởng",
      name: "Món Trong Lò Hôm Nay",
      description: "Món gì lò nướng đang muốn kể hôm nay.",
      href: "/menu#desserts",
    },
  ],
};

const storyImageByLocale: Record<Locale, { src: string; alt: string }> = {
  en: {
    src: "/images/interior/red.webp",
    alt: "Ovenista interior with exposed brick and dark wood tables",
  },
  vi: {
    src: "/images/interior/red.webp",
    alt: "Không gian Ovenista với tường gạch mộc và bàn gỗ tối màu",
  },
};

const galleryImagesByLocale: Record<Locale, GalleryImage[]> = {
  en: [
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
  ],
  vi: [
    {
      src: "/images/interior/red.webp",
      alt: "Toàn cảnh không gian bên trong Ovenista",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/interior/cook2.jpg",
      alt: "Cận cảnh pizza tại Ovenista",
      className: "",
    },
    {
      src: "/images/interior/outside.webp",
      alt: "Chi tiết tranh tường phong cách Venice tại Ovenista",
      className: "",
    },
    {
      src: "/images/interior/cook.jpg",
      alt: "Cận cảnh vòm lò nướng tại Ovenista",
      className: "md:col-span-2",
    },
    {
      src: "/images/interior/cook-cut.jpg",
      alt: "Đôi tay đang tạo hình bột pasta",
      className: "md:row-span-2",
    },
    {
      src: "/images/interior/up.jpg",
      alt: "Không gian ấm áp nhìn từ tầng lửng",
      className: "",
    },
    {
      src: "/images/food/close-up-pizza.jpg",
      alt: "Chi tiết tường gạch và ánh sáng ấm của Ovenista",
      className: "",
    },
    {
      src: "/images/food/carbon.webp",
      alt: "Chi tiết lò củi với than hồng rực",
      className: "md:col-span-2",
    },
  ],
};

const reviewsByLocale: Record<Locale, Review[]> = {
  en: [
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
  ],
  vi: [
    {
      rating: 5,
      text: "Pizza thật sự xuất sắc. Giòn, có chiều sâu và rất trọn vẹn.",
      author: "Maria G.",
      source: "google",
      date: "Tháng 10 2024",
    },
    {
      rating: 5,
      text: "Một nhà hàng có sự ấm áp rất thật. Các món hun khói đặc biệt ấn tượng.",
      author: "David L.",
      source: "google",
      date: "Tháng 11 2024",
    },
    {
      rating: 5,
      text: "Bạn cảm nhận được sự chăm chút trong từng đĩa ăn. Pasta, phục vụ, không khí, tất cả đều rất tốt.",
      author: "Anh P.",
      source: "google",
      date: "Tháng 12 2024",
    },
  ],
};

const hoursByLocale: Record<Locale, HoursEntry[]> = {
  en: [{ day: "Monday - Sunday", time: "11:00 AM - 10:00 PM" }],
  vi: [{ day: "Thứ Hai - Chủ Nhật", time: "11:00 - 22:00" }],
};

const menuCategoriesByLocale: Record<Locale, MenuCategory[]> = {
  en: getSpreadsheetMenuCategories("en"),
  vi: getSpreadsheetMenuCategories("vi"),
};

export function getManifestoItems(locale: Locale = defaultLocale) {
  return manifestoItemsByLocale[locale];
}

export function getFeaturedDishes(locale: Locale = defaultLocale) {
  return featuredDishesByLocale[locale];
}

export function getStoryImage(locale: Locale = defaultLocale) {
  return storyImageByLocale[locale];
}

export function getGalleryImages(locale: Locale = defaultLocale) {
  return galleryImagesByLocale[locale];
}

export function getReviews(locale: Locale = defaultLocale) {
  return reviewsByLocale[locale];
}

export function getHours(locale: Locale = defaultLocale) {
  return hoursByLocale[locale];
}

export function getMenuCategories(locale: Locale = defaultLocale) {
  return menuCategoriesByLocale[locale];
}
