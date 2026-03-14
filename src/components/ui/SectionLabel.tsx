import { cn } from "@/lib/utils";

type SectionLabelProps = {
  text: string;
  className?: string;
};

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-accent text-[14px] uppercase tracking-[0.28em] text-gold",
        className,
      )}
    >
      - {text} -
    </p>
  );
}
