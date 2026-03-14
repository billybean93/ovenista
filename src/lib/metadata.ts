const siteUrl = "https://ovenista.com";

export const restaurantContact = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+84-XXX-XXX-XXXX",
  address:
    process.env.NEXT_PUBLIC_ADDRESS ?? "[Street], Ho Chi Minh City, Vietnam",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@ovenista.com",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/ovenista",
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK ?? "https://facebook.com/ovenista",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "https://tiktok.com/@ovenista",
};

export const sharedMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Ovenista",
    default: "Ovenista - From Oven With Soul | European Restaurant Ho Chi Minh City",
  },
  description:
    "Ovenista brings authentic European dining to Ho Chi Minh City. Wood-fired pizza, handmade pasta, and long-smoked specialties. Dine-in and takeaway available.",
  keywords: [
    "Ovenista",
    "restaurant HCMC",
    "pizza Ho Chi Minh City",
    "Italian restaurant Saigon",
    "European restaurant Vietnam",
    "wood-fired pizza",
    "handmade pasta Saigon",
    "best pizza HCMC",
    "dine in takeaway Saigon",
    "smoked food restaurant Vietnam",
  ],
  openGraph: {
    type: "website",
    locale: "en_VN",
    url: siteUrl,
    siteName: "Ovenista",
    title: "Ovenista - From Oven With Soul",
    description:
      "Authentic European dining in Ho Chi Minh City. Wood-fired pizza, handmade pasta, and long-smoked specialties.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Ovenista social card" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovenista - From Oven With Soul",
    description: "Authentic European dining in Ho Chi Minh City.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  manifest: "/manifest.json",
};

export function getRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ovenista",
    description:
      "Authentic European dining. Wood-fired pizza, handmade pasta, and long-smoked specialties.",
    url: siteUrl,
    telephone: restaurantContact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantContact.address,
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "[LAT]",
      longitude: "[LNG]",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    servesCuisine: ["Italian", "European", "Pizza", "Pasta"],
    priceRange: "$$",
    image: `${siteUrl}/og-image.svg`,
    hasMenu: `${siteUrl}/menu`,
    acceptsReservations: true,
  };
}
