import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { defaultLocale, getDictionary, localizeHref, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";

const orderedMenuFiles = [1, 7, 2, 3, 9, 11, 8, 6, 4, 10, 5];

const menuPages = orderedMenuFiles.map((fileNumber, index) => {
  const pageNumber = index + 1;

  return {
    pageNumber,
    src: `/menu/menu${fileNumber}.jpg`,
  };
});

const menuPageCopy: Record<
  Locale,
  {
    printEdition: string;
    pageLabel: string;
    pagesLabel: string;
    pdfLabel: string;
    imageLabel: string;
    coverAlt: string;
    navLabel: string;
  }
> = {
  en: {
    printEdition: "Latest print edition",
    pageLabel: "Page",
    pagesLabel: "11 menu pages",
    pdfLabel: "Full PDF",
    imageLabel: "Printed menu page",
    coverAlt: "Ovenista printed menu cover",
    navLabel: "Menu pages",
  },
  vi: {
    printEdition: "Bản in mới nhất",
    pageLabel: "Trang",
    pagesLabel: "11 trang menu",
    pdfLabel: "PDF đầy đủ",
    imageLabel: "Trang menu in",
    coverAlt: "Bìa menu in của Ovenista",
    navLabel: "Các trang menu",
  },
};

export function buildMenuMetadata(locale: Locale): Metadata {
  const dictionary = getDictionary(locale);

  return getPageMetadata({
    locale,
    pathname: "/menu",
    title: dictionary.pages.menu.title,
    description: dictionary.pages.menu.description,
  });
}

export const metadata = buildMenuMetadata(defaultLocale);

export function MenuPageContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = menuPageCopy[locale];

  return (
    <div className="bg-[#f6edde] pb-24 pt-28 text-cream">
      <div className="container-shell">
        <section
          id="menu-page-1"
          className="grid scroll-mt-32 gap-10 py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.52fr)] lg:items-center lg:py-16"
        >
          <div>
            <SectionLabel text={dictionary.pages.menu.label} className="mb-5" />
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e85b3b]">
              {copy.printEdition}
            </p>
            <h1 className="max-w-5xl font-display text-[52px] font-semibold leading-[0.95] text-cream md:text-[72px] lg:text-[84px]">
              {dictionary.pages.menu.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream-muted">{dictionary.pages.menu.subheading}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/menu2.pdf" target="_blank" rel="noreferrer" variant="primary">
                {dictionary.pages.menu.pdfCta}
              </Button>
              <a
                href="#menu-page-1"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-border-hover)] bg-white/50 px-5 py-3 text-base font-medium tracking-[0.08em] text-cream hover:bg-gold/25"
              >
                {copy.pagesLabel}
              </a>
              <p className="text-sm text-cream-muted">{dictionary.pages.menu.pdfNote}</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:justify-self-end">
            <div className="overflow-hidden rounded-[8px] border border-white/15 bg-[#080605] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <Image
                src="/menu/menu1.jpg"
                alt={copy.coverAlt}
                width={1810}
                height={2560}
                priority
                sizes="(min-width: 1024px) 420px, 86vw"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-sm uppercase tracking-[0.16em] text-cream-muted">
              <span>{copy.pdfLabel}</span>
              <span>{copy.pagesLabel}</span>
            </div>
          </div>
        </section>

        <div className="sticky top-16 z-20 -mx-4 border-y border-[color:var(--color-border)] bg-[#f6edde] px-4 py-3 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
          <nav className="hide-scrollbar flex gap-2 overflow-x-auto" aria-label={copy.navLabel}>
            {menuPages.map((page) => (
              <a
                key={page.pageNumber}
                href={`#menu-page-${page.pageNumber}`}
                className="shrink-0 rounded-full border border-[color:var(--color-border)] bg-white/45 px-4 py-2 text-sm font-medium text-cream-muted hover:border-[color:var(--color-border-hover)] hover:text-ember"
              >
                {copy.pageLabel} {page.pageNumber}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-12 grid max-w-[860px] gap-10">
          {menuPages.slice(1).map((page) => (
            <article
              key={page.pageNumber}
              id={`menu-page-${page.pageNumber}`}
              className="scroll-mt-32"
            >
              <div className="mb-3 flex items-center justify-between text-sm uppercase tracking-[0.16em] text-cream-muted">
                <span>
                  {copy.pageLabel} {page.pageNumber}
                </span>
                <span>{copy.imageLabel}</span>
              </div>
              <div className="overflow-hidden rounded-[8px] border border-[color:var(--color-border)] bg-[#fff7e8] shadow-[0_22px_70px_rgba(121,92,55,0.16)]">
                <Image
                  src={page.src}
                  alt={`${copy.imageLabel} ${page.pageNumber}`}
                  width={1810}
                  height={2560}
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[860px] rounded-[8px] border border-[color:var(--color-border)] bg-white/45 p-6 text-cream-muted">
          {dictionary.pages.menu.notes.map((note) => (
            <p key={note} className="text-sm leading-7">
              {note}
            </p>
          ))}
        </div>
        <div className="mt-16">
          <Button href={localizeHref("/#contact", locale)} size="lg">
            {dictionary.pages.menu.reserveCta}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return <MenuPageContent locale={defaultLocale} />;
}
