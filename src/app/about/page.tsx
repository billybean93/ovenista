import type { Metadata } from "next";

import OurStory from "@/components/sections/OurStory";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { defaultLocale, getDictionary, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

export function buildAboutMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);

  return getPageMetadata({
    locale,
    pathname: "/about",
    title: dictionary.pages.about.title,
    description: dictionary.pages.about.description,
  });
}

export const metadata = buildAboutMetadata(defaultLocale);

export function AboutPageContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="pb-24 pt-32">
      <div className="container-shell mb-12">
        <SectionLabel text={dictionary.pages.about.label} className="mb-5" />
        <h1 className="max-w-4xl font-display text-[var(--text-display)] font-semibold leading-[0.94] tracking-[-0.01em] text-cream">
          {dictionary.pages.about.heading}
        </h1>
      </div>
      <OurStory locale={locale} />
    </div>
  );
}

export default function AboutPage() {
  return <AboutPageContent locale={defaultLocale} />;
}
