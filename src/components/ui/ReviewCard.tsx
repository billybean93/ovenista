import { Star } from "lucide-react";

import type { Review } from "@/types";

export function ReviewCard({ rating, text, author, source, date }: Review) {
  return (
    <article className="luxury-panel rounded-2xl border border-[color:var(--color-border)] p-6 transition hover:-translate-y-1 hover:border-[color:var(--color-border-hover)]">
      <div className="mb-6 flex gap-1 text-gold">
        {Array.from({ length: rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mb-8 font-display text-2xl italic leading-tight text-cream">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div className="space-y-3">
        <div>
          <p className="text-[15px] text-cream">- {author}, via Google</p>
          <p className="text-[14px] uppercase tracking-[0.18em] text-cream-muted">{date}</p>
        </div>
        <p className="text-[14px] uppercase tracking-[0.2em] text-cream-muted">
          {source === "google" ? "Google Review" : "Tripadvisor"}
        </p>
      </div>
    </article>
  );
}
