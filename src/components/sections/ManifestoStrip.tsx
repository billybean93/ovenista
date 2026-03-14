import { manifestoItems } from "@/lib/restaurant-data";

export default function ManifestoStrip() {
  const marquee = [...manifestoItems, ...manifestoItems].join("  ·  ");

  return (
    <section className="border-y border-[rgba(212,168,83,0.12)] bg-[#11100d] py-10">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
        <p className="font-display text-4xl italic leading-tight text-cream md:text-5xl">
          Crafted with passion, baked with soul.
        </p>
        <div className="overflow-hidden">
          <p className="animate-marquee whitespace-nowrap text-lg uppercase tracking-[0.28em] text-gold-muted hover:[animation-play-state:paused]">
            {marquee}
          </p>
        </div>
      </div>
    </section>
  );
}
