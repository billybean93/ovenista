"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { navLinks } from "@/lib/restaurant-data";
import { restaurantContact } from "@/lib/metadata";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [onClose, pathname]);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        className={`absolute inset-0 bg-[rgba(63,52,39,0.24)] transition ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-label="Close navigation drawer"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-[82vw] max-w-sm flex-col justify-between border-l border-[color:var(--color-border)] bg-elevated p-6 transition ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          <div className="mb-12 flex items-center justify-between">
            <p className="font-display text-3xl text-ember">OVENISTA</p>
            <button onClick={onClose} aria-label="Close menu">
              <X className="h-6 w-6 text-cream" />
            </button>
          </div>
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-display text-4xl text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/reserve" className="block font-display text-4xl text-ember">
              Reserve
            </Link>
          </nav>
        </div>
        <div className="space-y-3 text-base text-cream-muted">
          <a href={restaurantContact.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={restaurantContact.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={restaurantContact.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </aside>
    </div>
  );
}
