import Link from "next/link";

import { navLinks } from "@/lib/restaurant-data";
import { restaurantContact } from "@/lib/metadata";

export function Footer() {
  return (
    <footer className="bg-[#3b2c21] text-[#e8dcc8]">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_1.1fr]">
        <div className="space-y-5">
          <p className="font-display text-4xl text-[#fff6e8]">OVENISTA</p>
          <div className="space-y-2 text-sm leading-7 text-[#cdbba2]">
            <p>{restaurantContact.address}</p>
            <p>{restaurantContact.phone}</p>
            <p>Open daily 11:00 - 22:00</p>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b69a71]">
            Navigate
          </p>
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-sm text-[#d7c8b1] transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/reserve" className="block text-sm text-[#d7c8b1] transition hover:text-white">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b69a71]">
            Subscribe for seasonal specials.
          </p>
          <div className="flex max-w-sm overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)]">
            <input
              type="email"
              placeholder="Email Address"
              className="min-h-11 flex-1 bg-transparent px-4 text-sm text-[#f2e8d8] outline-none placeholder:text-[#a58f72]"
            />
            <button
              type="button"
              className="bg-[#d8aa38] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d2119]"
            >
              Go
            </button>
          </div>
          <p className="mt-5 text-sm text-[#a58f72]">{restaurantContact.email}</p>
        </div>
      </div>
      <div className="container-shell border-t border-[rgba(255,255,255,0.08)] py-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#8e785e]">
        © 2026 Ovenista. Handcrafted for convivial evenings.
      </div>
    </footer>
  );
}
