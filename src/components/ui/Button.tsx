import type { ReactNode } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-base font-medium tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
  {
    variants: {
      variant: {
        primary:
          "border-ember bg-ember text-white hover:bg-[#d84d2f] active:scale-[0.98]",
        ghost:
          "border-transparent bg-transparent text-cream hover:bg-white/60 hover:text-ember",
        outline:
          "border-[color:var(--color-border-hover)] bg-white/60 text-cream hover:bg-gold/25 hover:text-cream",
      },
      size: {
        sm: "px-4 py-2.5 text-base",
        md: "px-5 py-3 text-base",
        lg: "px-7 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  href,
  onClick,
  className,
  variant,
  size,
  type = "button",
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
