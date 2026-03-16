import { Button } from "@/components/ui/Button";

const heroPosterSrc = "/images/hero/interior-01.svg";

const titleLetters = "OVENISTA".split("");

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[#130c08] pt-14">
      <div aria-hidden="true" className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPosterSrc}
          preload="metadata"
          className="hidden h-full w-full object-cover object-center md:block"
        >
          <source
            src="/images/hero/hero-video.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
        <div
          className="block h-full w-full bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url('${heroPosterSrc}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,7,0.2)_0%,rgba(22,15,10,0.4)_42%,rgba(20,13,9,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(7,5,4,0.48),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[radial-gradient(circle_at_12%_100%,rgba(232,91,59,0.3),transparent_10%),radial-gradient(circle_at_24%_100%,rgba(230,185,61,0.28),transparent_12%),radial-gradient(circle_at_38%_100%,rgba(232,91,59,0.24),transparent_11%),radial-gradient(circle_at_57%_100%,rgba(230,185,61,0.28),transparent_9%),radial-gradient(circle_at_69%_100%,rgba(232,91,59,0.28),transparent_12%),radial-gradient(circle_at_84%_100%,rgba(230,185,61,0.26),transparent_10%)]" />
      </div>

      <div className="container-shell relative z-10 flex min-h-[calc(100dvh-56px)] flex-col items-center justify-center pb-12 pt-12 text-center">
        <div className="flex max-w-4xl flex-col items-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#e6c164]">
            European Craft Kitchen
          </p>
          <h1 className="flex flex-nowrap whitespace-nowrap font-display text-[clamp(58px,12vw,108px)] font-medium leading-[0.88] tracking-[0.03em] text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.38)]">
            {titleLetters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block animate-[fadeUp_0.7s_var(--ease-reveal)_both]"
                style={{ animationDelay: `${0.08 + index * 0.035}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="mt-3 animate-[fadeUp_0.8s_var(--ease-reveal)_both] font-display text-[clamp(28px,4vw,46px)] italic leading-tight text-[#fff5e8] [animation-delay:0.42s]">
            From Oven With Soul
          </p>
          <div className="mt-9 animate-[fadeUp_0.8s_var(--ease-reveal)_both] [animation-delay:0.55s]">
            <Button
              href="/menu"
              variant="outline"
              className="min-h-0 rounded-none border-white/80 bg-[rgba(20,14,10,0.2)] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm hover:bg-[rgba(255,255,255,0.12)]"
            >
              Explore Our Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
