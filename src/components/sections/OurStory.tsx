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
            Established 2026
          </p>
          <h2 className="mt-6 max-w-md font-display text-[clamp(46px,5vw,72px)] leading-[0.92] text-[#fff6e8]">
            We put a soul in every dish.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#d9c6aa]">
            <p>
              Ovenista is a new, small restaurant with an innovative spirit,
              inspired by the flavors and traditions of European cuisine. Every
              plate is crafted with care to deliver bold ideas and genuinely
              good food.
            </p>
            <p>
              From rustic classics to modern interpretations, we focus on quality
              ingredients, thoughtful technique, and honest cooking that feels
              both fresh and familiar.
            </p>
          </div>
     
        </div>
      </div>
    </section>
  );
}
