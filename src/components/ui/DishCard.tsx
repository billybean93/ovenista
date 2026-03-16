import Image from "next/image";
import Link from "next/link";

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
    <article className="group">
      <Link href={href} className="block">
        <div className="relative aspect-[0.86] overflow-hidden border border-[rgba(88,66,43,0.12)] bg-[#ead9c1] shadow-[0_20px_35px_rgba(94,71,47,0.06)]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="px-1 pb-1 pt-5">
          <h3 className="font-display text-[34px] leading-none text-[#2d2016]">{name}</h3>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#c08f44]">
            {category}
          </p>
          <p className="mt-3 text-sm leading-6 text-[#7b6752]">{description}</p>
        </div>
      </Link>
    </article>
  );
}
