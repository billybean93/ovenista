import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

type DishCardProps = {
  image: string;
  category: string;
  name: string;
  description: string;
  href: string;
};

export function DishCard({
  image,
  category,
  name,
  description,
  href,
}: DishCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[color:var(--color-border)] bg-surface shadow-card transition hover:border-[color:var(--color-border-hover)] hover:shadow-glow">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-card-gradient" />
      </div>
      <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
        <p className="font-accent text-[14px] uppercase tracking-[0.22em] text-gold">
          {category}
        </p>
        <h3 className="font-display text-3xl text-cream">{name}</h3>
        <p className="max-w-sm text-[15px] leading-7 text-cream-muted">{description}</p>
        <Button href={href} variant="ghost" className="px-0 text-gold">
          <span className="inline-flex items-center gap-2">
            Explore Menu
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </article>
  );
}
