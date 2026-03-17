import { manifestoItems } from "@/lib/restaurant-data";

export default function ManifestoStrip() {
  const marquee = [...manifestoItems, ...manifestoItems,...manifestoItems ,...manifestoItems].join("  ·  ");

  return (
    <section className="border-y border-[rgba(88,66,43,0.08)] bg-[#f6edde] py-10 md:py-12">
      <div className="container-shell text-center">
        <p className="font-display text-[clamp(40px,6vw,70px)] italic leading-tight text-[#3b2c1f]">
          &quot;Crafted with passion, baked with soul&quot;
        </p>
        <div className="mt-5 overflow-hidden border-t border-[rgba(88,66,43,0.08)] pt-4">
          <p className="animate-marquee whitespace-nowrap text-[20px] uppercase tracking-[0.18em] text-[#c08f44] hover:[animation-play-state:paused]">
            {marquee}
          </p>
        </div>
      </div>
    </section>
  );
}
