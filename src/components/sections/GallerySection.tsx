import Image from "next/image";

import { galleryImages } from "@/lib/restaurant-data";

export default function GallerySection() {
  const mobileImages = galleryImages.slice(0, 4);
  const extraMobileImages = galleryImages.slice(4);

  return (
    <section id="gallery" className="bg-[#f6edde] py-20 md:py-28">
      <div className="container-shell">
        <div className="text-center">
          <h2 className="font-display text-[clamp(38px,5vw,58px)] leading-none text-[#2a1d15]">
            Inside Our World
          </h2>
          <p className="mt-3 text-sm tracking-[0.08em] text-[#b29c7f]">
            Vibes, murals, and culinary moments.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 md:hidden">
          {mobileImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative overflow-hidden ${index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "100vw" : "50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {extraMobileImages.length > 0 ? (
          <details className="group mt-4 md:hidden">
            <summary className="mx-auto w-fit list-none rounded-full border border-[#c9b295] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a6248] transition hover:border-[#b29878] hover:text-[#4d3928]">
              <span className="group-open:hidden">View more photos</span>
              <span className="hidden group-open:inline">Show fewer photos</span>
            </summary>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {extraMobileImages.map((image, index) => (
                <div key={`${image.src}-${index + 4}`} className="relative aspect-square overflow-hidden">
                  <Image src={image.src} alt={image.alt} fill sizes="50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </details>
        ) : null}
        <div className="mt-12 hidden md:grid md:grid-cols-12 md:gap-3">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`relative min-h-[220px] overflow-hidden ${
                index === 0
                  ? "col-span-6 row-span-2"
                  : index === 1 || index === 2
                    ? "col-span-3"
                    : index === 3
                      ? "col-span-6"
                      : "col-span-3"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 33vw, (max-width: 1440px) 26vw, 22vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
