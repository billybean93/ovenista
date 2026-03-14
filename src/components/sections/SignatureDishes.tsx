import { DishCard } from "@/components/ui/DishCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { featuredDishes } from "@/lib/restaurant-data";

export default function SignatureDishes() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionLabel text="Our Craft" className="mb-5" />
        <h2 className="max-w-3xl font-display text-[var(--text-heading)] font-semibold leading-[0.92] tracking-[-0.02em] text-cream drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
          Four Things We Do With Soul
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
