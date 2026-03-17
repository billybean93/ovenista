import Image from "next/image";

import { restaurantContact } from "@/lib/metadata";

export function Footer() {
  const mapQuery = encodeURIComponent(restaurantContact.address);

  return (
    <footer className="bg-[#e2d2b6] text-[#4a3a2c]">
      <div className="container-shell py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="space-y-5">
            <Image
              src="/images/hero/logo.png"
              alt="Ovenista"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />
            <div className="space-y-1 text-sm leading-7 text-[#6f5b46]">
              <p>{restaurantContact.address}</p>
              <p>{restaurantContact.phone}</p>
              <p>{restaurantContact.email}</p>
              <p>Open daily 11:00 - 22:00</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f744e]">
              Find us
            </p>
            <div className="overflow-hidden border border-[rgba(74,58,44,0.18)] bg-[rgba(255,255,255,0.28)] shadow-[0_12px_32px_rgba(84,63,36,0.12)]">
              <iframe
                title="Ovenista location map"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full md:h-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-shell border-t border-[rgba(74,58,44,0.14)] py-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#7b664f]">
        © 2026 Ovenista. Handcrafted for convivial evenings.
      </div>
    </footer>
  );
}
