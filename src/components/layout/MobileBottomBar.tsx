"use client";

import Link from "next/link";
import { MenuSquare, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { defaultLocale, getDictionary, getLocaleFromPathname, localizeHref } from "@/lib/i18n";
import { restaurantContact } from "@/lib/metadata";

export function MobileBottomBar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? defaultLocale;
  const labels = getDictionary(locale);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[color:var(--color-border)] bg-[rgba(255,247,232,0.94)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${restaurantContact.phone}`}
          className="flex min-h-14 items-center justify-center gap-2 text-base text-cream"
        >
          <Phone className="h-4 w-4 text-ember" />
          {labels.common.call}
        </a>
        <Link
          href={localizeHref("/menu", locale)}
          className="flex min-h-14 items-center justify-center gap-2 text-base text-cream"
        >
          <MenuSquare className="h-4 w-4 text-forest" />
          {labels.common.menu}
        </Link>
      </div>
    </div>
  );
}
