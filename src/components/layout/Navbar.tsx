"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { defaultLocale, getDictionary, getLocaleFromPathname, localizeHref } from "@/lib/i18n";
import { navLinks } from "@/lib/restaurant-data";

export function Navbar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? defaultLocale;
  const labels = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const leftLinks = navLinks.filter((link) => link.key === "ourStory" || link.key === "menu");
  const rightLinks = navLinks.filter((link) => link.key === "gallery");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[rgba(88,66,43,0.12)] bg-[rgba(246,237,222,0.94)] backdrop-blur-md">
        <div className="container-shell grid min-h-[56px] grid-cols-[auto_1fr_auto] items-center gap-4 md:min-h-[60px] md:grid-cols-[1fr_auto_1fr]">
          <nav className="hidden items-center gap-7 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="text-[20px] uppercase tracking-[0.22em] text-[#4e3d2b] transition hover:text-[#d66a3f]"
              >
                {labels.nav[link.key]}
              </Link>
            ))}
          </nav>
          <Link
            href={localizeHref("/", locale)}
            className="justify-self-center"
            aria-label="Ovenista home"
          >
            <span className="relative block h-10 w-[180px] overflow-hidden md:h-11 md:w-[212px]">
              <Image
                src="/images/hero/logo.png"
                alt="Ovenista"
                fill
                priority
                sizes="(max-width: 768px) 180px, 212px"
                className="object-contain scale-[1.08]"
              />
            </span>
          </Link>
          <div className="hidden items-center justify-self-end gap-7 md:flex">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(link.href, locale)}
                className="text-[20px] uppercase tracking-[0.22em] text-[#4e3d2b] transition hover:text-[#d66a3f]"
              >
                {labels.nav[link.key]}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href={localizeHref("/#contact", locale)}
              className="inline-flex h-9 items-center bg-[#d66a3f] px-4 text-[15px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#c65b33]"
            >
              {labels.common.contactUs}
            </Link>
          </div>
          <div className="flex items-center justify-self-end gap-2 md:hidden">
            <LanguageSwitcher compact tight className="bg-white/70" />
            <button
              className="inline-flex h-10 w-10 items-center justify-center"
              aria-label={labels.common.openMenu}
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6 text-[#25180f]" />
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer open={open} onClose={closeDrawer} />
    </>
  );
}
