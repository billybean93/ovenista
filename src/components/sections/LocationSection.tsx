"use client";

import { Clock3, MapPin, Phone } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { defaultLocale, getDictionary, getLocaleFromPathname } from "@/lib/i18n";
import { restaurantContact } from "@/lib/metadata";
import { getHours } from "@/lib/restaurant-data";

function getEmbedUrl() {
  const embedId = process.env.NEXT_PUBLIC_MAPS_EMBED_ID;
  if (!embedId || embedId === "YOUR_EMBED_ID_HERE") return null;
  return `https://www.google.com/maps/embed?pb=${embedId}`;
}

export default function LocationSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? defaultLocale;
  const dictionary = getDictionary(locale);
  const hours = getHours(locale);
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const embedUrl = useMemo(() => getEmbedUrl(), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true);
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="section-space">
      <div className="container-shell">
        <SectionLabel text={dictionary.location.label} className="mb-5" />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            ref={ref}
            className="min-h-[320px] overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-surface"
          >
            {loaded && embedUrl ? (
              <iframe
                src={embedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(232,91,59,0.12),transparent_55%)] px-6 text-center text-cream-muted">
                {dictionary.location.mapFallback}
              </div>
            )}
          </div>
          <div className="luxury-panel rounded-[28px] border border-[color:var(--color-border)] p-8">
            <p className="font-display text-5xl text-cream">OVENISTA</p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 text-ember" />
                <div>
                  <p className="font-accent text-base uppercase tracking-[0.12em] text-gold-muted">{dictionary.location.address}</p>
                  <p className="mt-2 text-cream-muted">{restaurantContact.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="mt-1 h-5 w-5 text-ember" />
                <div>
                  <p className="font-accent text-base uppercase tracking-[0.12em] text-gold-muted">{dictionary.location.hours}</p>
                  {hours.map((item) => (
                    <p key={item.day} className="mt-2 text-cream-muted">
                      {item.day}: {item.time}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 text-ember" />
                <div>
                  <p className="font-accent text-base uppercase tracking-[0.12em] text-gold-muted">{dictionary.location.phone}</p>
                  <p className="mt-2 text-cream-muted">{restaurantContact.phone}</p>
                </div>
              </div>
              <p className="font-accent text-base uppercase tracking-[0.12em] text-gold-muted">
                {dictionary.location.serviceModes}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#location">{dictionary.common.getDirections}</Button>
              <Button href={`tel:${restaurantContact.phone}`} variant="outline">
                {dictionary.common.callNow}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
