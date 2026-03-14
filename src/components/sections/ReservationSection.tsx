import { SectionLabel } from "@/components/ui/SectionLabel";
import { ReservationForm } from "@/components/forms/ReservationForm";

export default function ReservationSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--color-border)] bg-[linear-gradient(rgba(20,20,16,0.74),rgba(20,20,16,0.92)),url('/images/interior/ambiance-01.svg')] bg-cover bg-center px-6 py-12 md:px-10">
          <SectionLabel text="Book Your Table" className="mb-5" />
          <h2 className="mb-8 font-display text-[var(--text-heading)] font-semibold leading-[0.92] tracking-[-0.02em] text-cream drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
            Reserve Your Evening
          </h2>
          <ReservationForm compact />
        </div>
      </div>
    </section>
  );
}
