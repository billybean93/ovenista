import { notFound } from "next/navigation";

import { AboutPageContent, buildAboutMetadata } from "@/app/about/page";
import { isLocale } from "@/lib/i18n";

type LocalizedAboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return buildAboutMetadata(locale);
}

export default async function LocalizedAboutPage({ params }: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <AboutPageContent locale={locale} />;
}
