import Image from "next/image";

import { galleryImages } from "@/lib/restaurant-data";

export default function GallerySection() {
  const [leadImage, topImage, bottomImage, sideImage] = galleryImages;

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
        <div className="mt-12 grid gap-3 md:hidden">
          {[leadImage, topImage, bottomImage, sideImage].map((image) => (
            <div key={image.src} className="relative aspect-[16/11] overflow-hidden">
              <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-12 hidden md:grid md:grid-cols-[1.55fr_0.78fr_0.97fr] md:gap-3">
          <div className="relative min-h-[340px] overflow-hidden">
            <Image
              src={leadImage.src}
              alt={leadImage.alt}
              fill
              sizes="(max-width: 1280px) 50vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-3">
            {[topImage, bottomImage].map((image) => (
              <div key={image.src} className="relative min-h-[164px] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1280px) 24vw, 18vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="relative min-h-[340px] overflow-hidden">
            <Image
              src={sideImage.src}
              alt={sideImage.alt}
              fill
              sizes="(max-width: 1280px) 30vw, 24vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
