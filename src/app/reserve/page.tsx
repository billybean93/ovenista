import type { Metadata } from "next";

import { ReservationForm } from "@/components/forms/ReservationForm";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Reserve a Table",
  description:
    "Book your table at Ovenista. Authentic European dining in Ho Chi Minh City. Dine-in and takeaway.",
};

export default function ReservePage() {
  return (
    <div className="pb-24 pt-32">
      <div className="container-shell">
        <SectionLabel text="Reserve a Table" className="mb-5" />
        <h1 className="max-w-4xl font-display text-[var(--text-display)] font-semibold leading-[0.94] tracking-[-0.01em] text-cream">
          Reserve Your Evening.
        </h1>
        <p className="mt-4 max-w-2xl text-cream-muted">
          Tell us the date, the time, and who is joining you. We&apos;ll hold the
          table, warm the room, and keep the fire going.
        </p>
        <div className="mt-10">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
