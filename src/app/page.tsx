import dynamic from "next/dynamic";

import HeroSection from "@/components/sections/HeroSection";
import ManifestoStrip from "@/components/sections/ManifestoStrip";
import SignatureDishes from "@/components/sections/SignatureDishes";
import { defaultLocale, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/i18n";

const OurStory = dynamic(() => import("@/components/sections/OurStory"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));

export function buildHomeMetadata(locale: Locale) {
  const dictionary = getDictionary(locale);

  return getPageMetadata({
    locale,
    pathname: "/",
    title: dictionary.pages.home.title,
    description: dictionary.pages.home.description,
  });
}

export const metadata = buildHomeMetadata(defaultLocale);

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <ManifestoStrip locale={locale} />
      <SignatureDishes locale={locale} />
      <OurStory locale={locale} />
      <GallerySection locale={locale} />
    </>
  );
}

export default function Home() {
  return <HomePage locale={defaultLocale} />;
}
