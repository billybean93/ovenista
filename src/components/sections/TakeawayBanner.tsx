import { Button } from "@/components/ui/Button";
import { getDictionary, type Locale } from "@/lib/i18n";
import { restaurantContact } from "@/lib/metadata";

export default function TakeawayBanner({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <section className="section-space py-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[linear-gradient(135deg,rgba(78,139,87,0.86),rgba(230,185,61,0.68),rgba(255,241,216,0.72))] px-6 py-8 shadow-ember md:flex md:items-center md:justify-between md:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(232,91,59,0.18),transparent_28%)]" />
          <div>
            <h2 className="relative font-display text-5xl font-semibold leading-none tracking-[-0.02em] text-cream">{dictionary.takeaway.title}</h2>
            <p className="relative mt-3 max-w-xl text-cream/80">
              {dictionary.takeaway.description}
            </p>
          </div>
          <div className="relative mt-6 flex flex-col gap-3 md:mt-0 md:flex-row">
            <Button href={`tel:${restaurantContact.phone}`} variant="outline">
              {dictionary.takeaway.callToOrder}
            </Button>
            <Button href="#location" className="bg-white/90 text-cream hover:bg-white">
              {dictionary.common.getDirections}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
