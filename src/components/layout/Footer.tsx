"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { defaultLocale, getDictionary, getLocaleFromPathname } from "@/lib/i18n";
import { restaurantContact } from "@/lib/metadata";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? defaultLocale;
  const dictionary = getDictionary(locale);
  const mapQuery = encodeURIComponent(restaurantContact.address);

  return (
    <footer id="contact" className="bg-[#e2d2b6] text-[#4a3a2c]">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_0.8fr_1.05fr] lg:gap-12">
          <div className="space-y-5">
            <Image
              src="/images/hero/logo.png"
              alt="Ovenista"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />
            <div className="space-y-1 text-sm leading-7 text-[#6f5b46]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f744e]">
                {dictionary.footer.addressTitle}
              </p>
              <p>{restaurantContact.address}</p>
              <p>{restaurantContact.email}</p>
              <p>{dictionary.footer.openDaily}</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f744e]">
              {dictionary.footer.contactTitle}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f744e]">
              {dictionary.footer.socialTitle}
            </p>
            <div className="space-y-3 text-sm leading-7 text-[#6f5b46]">
              <a href={`tel:${restaurantContact.phone}`} className="block hover:text-[#d66a3f]">
                {dictionary.common.hotline}: {restaurantContact.phone}
              </a>
              <a href={restaurantContact.instagram} target="_blank" rel="noreferrer" className="block hover:text-[#d66a3f]">
                {dictionary.common.instagram}
              </a>
              <a href={restaurantContact.facebook} target="_blank" rel="noreferrer" className="block hover:text-[#d66a3f]">
                {dictionary.common.facebook}
              </a>
              <a href={restaurantContact.zalo} target="_blank" rel="noreferrer" className="block hover:text-[#d66a3f]">
                {dictionary.common.zalo}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f744e]">
              {dictionary.footer.findUs}
            </p>
            <div className="relative overflow-hidden border border-[rgba(74,58,44,0.18)] bg-[rgba(255,255,255,0.28)] shadow-[0_12px_32px_rgba(84,63,36,0.12)]">
              <iframe
                title={dictionary.footer.mapTitle}
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full md:h-[360px]"
              />
              <a
                href={restaurantContact.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0"
                aria-label={dictionary.footer.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell border-t border-[rgba(74,58,44,0.14)] py-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#7b664f]">
        {dictionary.footer.copyright}
      </div>
    </footer>
  );
}
