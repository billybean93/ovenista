import { Flame } from "lucide-react";

import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { storyImage } from "@/lib/restaurant-data";

export default function OurStory() {
  return (
    <section id="our-story" className="section-space">
      <div className="container-shell grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] border border-[color:var(--color-border)]">
          <ParallaxImage
            src={storyImage.src}
            alt={storyImage.alt}
            className="absolute inset-0"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-[16px] rounded-[18px] border border-gold/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/40" />
        </div>
        <div>
          <SectionLabel text="From Oven With Soul" className="mb-4" />
          <Flame className="mb-4 h-5 w-5 text-ember" />
          <h2 className="max-w-2xl font-display text-[var(--text-heading)] font-semibold leading-[0.92] tracking-[-0.02em] text-cream drop-shadow-[0_10px_26px_rgba(0,0,0,0.3)]">
            We Didn&apos;t Open a Restaurant. We Lit a Fire.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-cream-muted">
            <p>
              Ovenista was born from a simple belief: that the best food comes from
              patience, craft, and a proper fire. Every pizza dough rests overnight.
              Every pasta is pulled by hand. Every smoked cut earns its low-and-slow
              hours.
            </p>
            <p>
              This is European dining the way it was meant to be: intimate,
              unhurried, and made with love.
            </p>
          </div>
          <p className="mt-8 font-display text-2xl italic text-gold">
            - The Ovenista Kitchen
          </p>
        </div>
      </div>
    </section>
  );
}
