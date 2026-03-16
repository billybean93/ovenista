import type { Metadata } from "next";

import OurStory from "@/components/sections/OurStory";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about Ovenista's craft, fire, and European dining philosophy.",
};

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="container-shell mb-12">
        <SectionLabel text="Our Story" className="mb-5" />
        <h1 className="max-w-4xl font-display text-[var(--text-display)] font-semibold leading-[0.94] tracking-[-0.01em] text-cream">
          A room built around patience, fire, and real hospitality.
        </h1>
      </div>
      <OurStory />
    </div>
  );
}
