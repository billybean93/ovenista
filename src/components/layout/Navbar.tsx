"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/restaurant-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeDrawer = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition",
          scrolled
            ? "border-b border-[rgba(212,168,83,0.08)] bg-[rgba(20,20,16,0.92)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-shell flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="font-display text-[26px] tracking-[0.16em] text-gold">
            OVENISTA
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="gold-line text-base uppercase tracking-[0.2em] text-cream-muted hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/reserve" variant="outline">
              Reserve a Table
            </Button>
          </div>
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6 text-cream" />
          </button>
        </div>
      </header>
      <MobileDrawer open={open} onClose={closeDrawer} />
    </>
  );
}
