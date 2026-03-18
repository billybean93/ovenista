"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { defaultLocale, getDictionary, getLocaleFromPathname, locales, switchLocalePath } from "@/lib/i18n";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
  tight?: boolean;
};

export function LanguageSwitcher({ className, compact = false, tight = false }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = getLocaleFromPathname(pathname) ?? defaultLocale;
  const dictionary = getDictionary(activeLocale);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[rgba(88,66,43,0.14)] bg-white/55 p-1",
        className,
      )}
      aria-label={dictionary.common.language}
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        const label = locale.toUpperCase();

        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            className={cn(
              "rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition",
              compact ? "text-center" : "",
              compact && tight ? "min-w-[44px] px-2" : "",
              compact && !tight ? "min-w-[88px]" : "",
              isActive ? "bg-[#2d2119] text-white" : "text-[#5d4a38] hover:bg-white/70",
            )}
            hrefLang={locale}
            lang={locale}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
