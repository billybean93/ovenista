import { ReservationForm } from "@/components/forms/ReservationForm";

export default function ReservationSection() {
  return (
    <section className="bg-[#f6edde] py-20 md:py-28">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl border-t border-[rgba(88,66,43,0.08)] pt-12 text-center">
          <div className="mx-auto inline-flex bg-[#d8aa38] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3a2a18]">
            Join Us Tonight
          </div>
          <div className="mx-auto mt-4 max-w-3xl bg-[#fcfbf9] px-6 py-10 shadow-[0_28px_60px_rgba(94,71,47,0.12)] md:px-14 md:py-12">
            <h2 className="font-display text-[clamp(40px,5vw,56px)] leading-none text-[#2c2017]">
              Book Your Table
            </h2>
            <p className="mt-3 text-sm tracking-[0.04em] text-[#9b8569]">
              Experience the soul of European wood-fired cooking.
            </p>
            <div className="mt-8">
              <ReservationForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
