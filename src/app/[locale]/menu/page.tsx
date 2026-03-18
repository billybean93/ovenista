import { notFound } from "next/navigation";

import { MenuPageContent, buildMenuMetadata } from "@/app/menu/page";
import { isLocale } from "@/lib/i18n";

type LocalizedMenuPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalizedMenuPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return buildMenuMetadata(locale);
}

export default async function LocalizedMenuPage({ params }: LocalizedMenuPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <MenuPageContent locale={locale} />;
}
