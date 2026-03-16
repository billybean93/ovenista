import Image from "next/image";
import { Flame } from "lucide-react";

import { storyImage } from "@/lib/restaurant-data";

export default function OurStory() {
  return (
    <section id="our-story" className="bg-[#f6edde] py-4 md:py-8">
      <div className="grid md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[420px] md:min-h-[680px]">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 52vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,249,238,0.42),transparent_34%),linear-gradient(180deg,rgba(255,247,232,0.04),rgba(255,247,232,0.12))]" />
        </div>
        <div className="bg-[#3d2f24] px-8 py-16 text-[#efe1cb] md:px-14 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d2ab61]">
            Established 2012
          </p>
          <h2 className="mt-6 max-w-md font-display text-[clamp(46px,5vw,72px)] leading-[0.92] text-[#fff6e8]">
            Heritage in every flame.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#d9c6aa]">
            <p>
              Ovenista began as a small family dream in a coastal town, centered
              around simple, honest wood-fired cooking. We built the room around
              the same old-world warmth you feel in every dish.
            </p>
            <p>
              We believe fire gives food its clearest voice. It bridges craft and
              celebration, and lets slow methods, good ingredients, and proper
              patience do the talking.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-3 text-[#d2ab61]">
            <Flame className="h-4 w-4" />
            <span className="text-[11px] uppercase tracking-[0.24em]">
              Signature
            </span>
          </div>
          <div className="mt-4 max-w-[320px] border border-white/10 bg-[#2b2119] px-8 py-10 text-center">
            <p className="font-display text-[56px] italic leading-none text-[#ebc56f]">
              Signature
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[#cab28d]">
              Mineral infused natural
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#cab28d]">
              late harvest soil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
