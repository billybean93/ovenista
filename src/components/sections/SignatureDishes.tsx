import { DishCard } from "@/components/ui/DishCard";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getFeaturedDishes } from "@/lib/restaurant-data";

export default function SignatureDishes({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const featuredDishes = getFeaturedDishes(locale);

  return (
    <section className="bg-[#f6edde] py-20 md:py-28">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="font-display text-[clamp(42px,5vw,64px)] leading-none text-[#23170f]">
            {dictionary.signature.title}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#d66a3f]" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.name} locale={locale} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
