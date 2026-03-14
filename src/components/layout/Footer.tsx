import Link from "next/link";

import { navLinks } from "@/lib/restaurant-data";
import { restaurantContact } from "@/lib/metadata";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-bg">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-5xl text-cream">OVENISTA</p>
          <p className="font-display text-2xl italic text-gold">From Oven With Soul</p>
          <div className="space-y-2 text-sm text-cream-muted">
            <p>{restaurantContact.address}</p>
            <p>{restaurantContact.phone}</p>
            <p>{restaurantContact.email}</p>
          </div>
        </div>
        <div>
          <p className="mb-5 font-accent text-[14px] uppercase tracking-[0.22em] text-gold">
            Quick Links
          </p>
          <div className="space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-cream-muted hover:text-gold">
                {link.label}
              </Link>
            ))}
            <Link href="/reserve" className="block text-cream-muted hover:text-gold">
              Reserve
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-5 font-accent text-[14px] uppercase tracking-[0.22em] text-gold">
            Follow Us
          </p>
          <div className="space-y-3">
            <a href={restaurantContact.instagram} className="block text-cream-muted hover:text-ember">
              Instagram
            </a>
            <a href={restaurantContact.facebook} className="block text-cream-muted hover:text-ember">
              Facebook
            </a>
            <a href={restaurantContact.tiktok} className="block text-cream-muted hover:text-ember">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="container-shell border-t border-[color:var(--color-border)] py-5 text-sm text-cream-muted">
        &copy; 2025 Ovenista · All rights reserved
      </div>
    </footer>
  );
}
