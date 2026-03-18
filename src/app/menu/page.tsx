import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { defaultLocale, getDictionary, localizeHref, type Locale } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/metadata";
import { getMenuCategories } from "@/lib/restaurant-data";

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
  const menuCategories = getMenuCategories(locale);

  return (
    <div className="pb-24 pt-32">
      <div className="container-shell">
        <SectionLabel text={dictionary.pages.menu.label} className="mb-5" />
        <h1 className="max-w-4xl font-display text-[var(--text-display)] font-semibold leading-[0.94] tracking-[-0.01em] text-cream">
          {dictionary.pages.menu.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-cream-muted">{dictionary.pages.menu.subheading}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/menu.pdf" target="_blank" rel="noreferrer" variant="outline">
            {dictionary.pages.menu.pdfCta}
          </Button>
          <p className="self-center text-sm text-cream-muted">{dictionary.pages.menu.pdfNote}</p>
        </div>
        <div className="mt-8 md:sticky md:top-20 md:z-20">
          <div className="hide-scrollbar flex gap-3 overflow-x-auto rounded-full border border-[color:var(--color-border)] bg-[rgba(255,247,232,0.9)] p-3 backdrop-blur-xl md:flex-wrap md:overflow-visible">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 rounded-full border border-transparent px-4 py-2 text-base uppercase tracking-[0.12em] text-cream-muted hover:border-[color:var(--color-border)] hover:text-ember"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 space-y-16">
          {menuCategories.map((category) => (
            <section key={category.id} id={category.id}>
              <h2 className="font-display text-6xl font-semibold leading-none tracking-[-0.01em] text-cream">{category.label}</h2>
              <p className="mt-3 max-w-2xl text-cream-muted">{category.intro}</p>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="luxury-panel rounded-[24px] border border-[color:var(--color-border)] p-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="font-accent text-base uppercase tracking-[0.12em] text-gold-muted">
                          {item.category}
                        </p>
                        <h3 className="mt-2 font-display text-4xl font-semibold leading-none tracking-[-0.01em] text-cream">{item.name}</h3>
                        <p className="mt-3 max-w-xl text-cream-muted">{item.description}</p>
                        {item.dietaryTags?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.dietaryTags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-base uppercase tracking-[0.1em] text-forest"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16 rounded-[24px] border border-[color:var(--color-border)] bg-white/40 p-6 text-cream-muted">
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
