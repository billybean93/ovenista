import type { Metadata } from "next";

import { defaultLocale, locales, localizeHref, type Locale } from "@/lib/i18n";

export const siteUrl = "https://ovenista.com";

export const restaurantContact = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+84-XXX-XXX-XXXX",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "[Street], Ho Chi Minh City, Vietnam",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@ovenista.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "https://instagram.com/ovenista",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "https://facebook.com/ovenista",
  zalo: process.env.NEXT_PUBLIC_ZALO ?? "https://zalo.me/",
  tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "https://tiktok.com/@ovenista",
};

const metadataCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  }
> = {
  en: {
    title: "Ovenista - From Oven With Soul | European Restaurant Ho Chi Minh City",
    description:
      "Ovenista brings authentic European dining to Ho Chi Minh City. Wood-fired pizza, handmade pasta, and long-smoked specialties. Dine-in and takeaway available.",
    ogLocale: "en_VN",
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
  },
  vi: {
    title: "Ovenista - Ra Lò Với Cả Tâm Hồn | Nhà Hàng Âu Tại TP.HCM",
    description:
      "Ovenista mang trải nghiệm ẩm thực châu Âu đến TP.HCM với pizza nướng lò, pasta thủ công và các món hun khói chậm. Phục vụ ăn tại chỗ và mang đi.",
    ogLocale: "vi_VN",
    keywords: [
      "Ovenista",
      "nhà hàng TP.HCM",
      "pizza nướng lò",
      "nhà hàng Âu Sài Gòn",
      "pasta thủ công",
      "ẩm thực châu Âu Việt Nam",
      "đặt bàn nhà hàng quận 2",
      "món hun khói TP.HCM",
    ],
  },
};

function getLocalizedPath(pathname: string, locale: Locale) {
  return localizeHref(pathname, locale);
}

function getLanguageAlternates(pathname: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, `${siteUrl}${getLocalizedPath(pathname, locale)}`]),
  );
}

export function getSharedMetadata(locale: Locale = defaultLocale): Metadata {
  const copy = metadataCopy[locale];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: "%s | Ovenista",
      default: copy.title,
    },
    description: copy.description,
    keywords: copy.keywords,
    openGraph: {
      type: "website",
      locale: copy.ogLocale,
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => metadataCopy[entry].ogLocale),
      url: `${siteUrl}${getLocalizedPath("/", locale)}`,
      siteName: "Ovenista",
      title: copy.title,
      description: copy.description,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Ovenista social card" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: ["/og-image.svg"],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteUrl}${getLocalizedPath("/", locale)}`,
      languages: getLanguageAlternates("/"),
    },
    manifest: "/manifest.json",
  };
}

export function getPageMetadata({
  locale,
  pathname,
  title,
  description,
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
}): Metadata {
  const localizedPath = getLocalizedPath(pathname, locale);

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${localizedPath}`,
      languages: getLanguageAlternates(pathname),
    },
    openGraph: {
      locale: metadataCopy[locale].ogLocale,
      url: `${siteUrl}${localizedPath}`,
      title,
      description,
      siteName: "Ovenista",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Ovenista social card" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}

export function getRestaurantJsonLd(locale: Locale = defaultLocale) {
  const copy = metadataCopy[locale];

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ovenista",
    inLanguage: locale,
    description: copy.description,
    url: `${siteUrl}${getLocalizedPath("/", locale)}`,
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "22:00",
      },
    ],
    servesCuisine: ["Italian", "European", "Pizza", "Pasta"],
    priceRange: "$$",
    image: `${siteUrl}/og-image.svg`,
    hasMenu: `${siteUrl}${getLocalizedPath("/menu", locale)}`,
  };
}
