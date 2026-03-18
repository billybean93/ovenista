import type { MetadataRoute } from "next";

import { locales, localizeHref } from "@/lib/i18n";
import { siteUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["/", "/menu", "/about"] as const;
  const priorities: Record<(typeof routes)[number], number> = {
    "/": 1,
    "/menu": 0.9,
    "/about": 0.7,
  };

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}${localizeHref(route, locale)}`,
      lastModified,
      changeFrequency: route === "/menu" ? "weekly" : "monthly",
      priority: priorities[route],
    })),
  );
}
