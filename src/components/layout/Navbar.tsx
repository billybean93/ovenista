"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useCallback, useState } from "react";

import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { navLinks } from "@/lib/restaurant-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeDrawer = useCallback(() => setOpen(false), []);
  const leftLinks = navLinks.filter((link) => link.href === "/#our-story" || link.href === "/menu");
  const rightLinks = navLinks.filter((link) => link.href === "/#gallery");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(88,66,43,0.12)] bg-[rgba(246,237,222,0.94)] backdrop-blur-md">
        <div className="container-shell grid min-h-14 grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden items-center gap-7 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.22em] text-[#4e3d2b] transition hover:text-[#d66a3f]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="justify-self-center font-display text-[26px] font-semibold tracking-[0.04em] text-[#25180f]"
          >
            OVENISTA
          </Link>
          <div className="hidden items-center justify-self-end gap-7 md:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.22em] text-[#4e3d2b] transition hover:text-[#d66a3f]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reserve"
              className="inline-flex h-9 items-center bg-[#d66a3f] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c65b33]"
            >
              Book Table
            </Link>
          </div>
          <button
            className="justify-self-end md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6 text-[#25180f]" />
          </button>
        </div>
      </header>
      <MobileDrawer open={open} onClose={closeDrawer} />
    </>
  );
}
