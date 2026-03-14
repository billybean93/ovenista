import { Button } from "@/components/ui/Button";
import { restaurantContact } from "@/lib/metadata";

export default function TakeawayBanner() {
  return (
    <section className="section-space py-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-forest px-6 py-8 shadow-ember md:flex md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="font-display text-5xl font-semibold leading-none tracking-[-0.02em] text-cream">Take the Oven Home</h2>
            <p className="mt-3 max-w-xl text-cream/80">
              Pizza &amp; Pasta made fresh for takeaway - call ahead or walk in.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 md:mt-0 md:flex-row">
            <Button href={`tel:${restaurantContact.phone}`} variant="outline">
              Call to Order
            </Button>
            <Button href="#location">Get Directions</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
