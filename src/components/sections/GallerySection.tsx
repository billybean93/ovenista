import Image from "next/image";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { galleryImages } from "@/lib/restaurant-data";

export default function GallerySection() {
  return (
    <section id="gallery" className="section-space">
      <div className="container-shell">
        <SectionLabel text="Inside Ovenista" className="mb-5" />
        <h2 className="font-display text-[var(--text-heading)] font-semibold leading-[0.92] tracking-[-0.02em] text-cream drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
          The Space. The Craft. The Fire.
        </h2>
        <div className="hide-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 md:hidden">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[3/4] w-[85vw] shrink-0 snap-center overflow-hidden rounded-[24px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="85vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 hidden grid-cols-4 gap-2 md:grid md:auto-rows-[220px]">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className={cn(
                "group relative overflow-hidden rounded-[20px]",
                image.className,
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1280px) 25vw, 20vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gold/0 transition group-hover:bg-gold/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
