import { DishCard } from "@/components/ui/DishCard";
import { featuredDishes } from "@/lib/restaurant-data";

export default function SignatureDishes() {
  return (
    <section className="bg-[#f6edde] py-20 md:py-28">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="font-display text-[clamp(42px,5vw,64px)] leading-none text-[#23170f]">
            Our Signature Specialties
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-[#d66a3f]" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
      </div>
    </section>
  );
}
