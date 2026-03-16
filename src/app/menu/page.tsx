import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { menuCategories } from "@/lib/restaurant-data";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Ovenista's full menu: wood-fired pizza, handmade pasta, long-smoked specialties and more.",
};

export default function MenuPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="container-shell">
        <SectionLabel text="Our Menu" className="mb-5" />
        <h1 className="max-w-4xl font-display text-[var(--text-display)] font-semibold leading-[0.94] tracking-[-0.01em] text-cream">
          Wood-Fired Comfort, Handmade Detail, Slow-Smoked Depth.
        </h1>
        <div className="sticky top-20 z-20 mt-8 flex flex-wrap gap-3 rounded-full border border-[color:var(--color-border)] bg-[rgba(255,247,232,0.9)] p-3 backdrop-blur-xl">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-transparent px-4 py-2 text-base uppercase tracking-[0.12em] text-cream-muted hover:border-[color:var(--color-border)] hover:text-ember"
            >
              {category.label}
            </a>
          ))}
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
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
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
                      <div className="text-right">
                        <p className="font-display text-3xl text-ember">{item.price}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16">
          <Button href="/reserve" size="lg">
            Reserve for Dinner
          </Button>
        </div>
      </div>
    </div>
  );
}
