import { cn } from "@/lib/utils";

type SectionLabelProps = {
  text: string;
  className?: string;
};

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "block text-base font-semibold uppercase tracking-[0.08em] text-gold-muted",
        className,
      )}
    >
      - {text} -
    </p>
  );
}
