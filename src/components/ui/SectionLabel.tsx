import { cn } from "@/lib/utils";

type SectionLabelProps = {
  text: string;
  className?: string;
};

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-accent text-base uppercase tracking-[0.24em] text-gold",
        className,
      )}
    >
      - {text} -
    </p>
  );
}
