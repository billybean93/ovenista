"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { EmberParticle } from "@/components/ui/EmberParticle";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { heroSlides } from "@/lib/restaurant-data";

const embers = [
  { x: 14, size: 4, delay: 0.2, duration: 4.6 },
  { x: 24, size: 6, delay: 0.8, duration: 5.2 },
  { x: 32, size: 4, delay: 1.4, duration: 4.4 },
  { x: 48, size: 5, delay: 1.1, duration: 5.4 },
  { x: 58, size: 3, delay: 0.3, duration: 4.8 },
  { x: 69, size: 5, delay: 1.7, duration: 5.1 },
  { x: 78, size: 4, delay: 0.5, duration: 4.3 },
  { x: 88, size: 6, delay: 1.9, duration: 5.7 },
];

export default function HeroSection() {
  const heroType = process.env.NEXT_PUBLIC_HERO_TYPE ?? "slideshow";
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroType !== "slideshow") return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [heroType]);

  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      <div className="absolute inset-0">
        {heroType === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroSlides[0].src}
            className="h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="relative h-full w-full">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={slide.src}
                initial={false}
                animate={{
                  opacity: index === activeSlide ? 1 : 0,
                  scale: index === activeSlide ? 1.08 : 1.02,
                }}
                transition={{
                  duration: 6,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      <div className="container-shell relative z-10 flex min-h-[100dvh] flex-col justify-end pb-20 pt-28">
        <div className="max-w-5xl">
          <SectionLabel text="Authentic European Dining" className="mb-6" />
          <AnimatedText
            text="OVENISTA"
            splitBy="letters"
            className="font-display text-[clamp(108px,19vw,260px)] font-semibold leading-[0.82] tracking-[0.14em] text-cream drop-shadow-[0_16px_40px_rgba(0,0,0,0.62)]"
          />
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-3xl font-display text-[clamp(30px,4vw,48px)] italic leading-tight text-gold drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)]"
          >
            From Oven With Soul
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/reserve" size="lg" className="shadow-glow">
              Reserve a Table
            </Button>
            <Button href="/menu" variant="outline" size="lg">
              View Menu
            </Button>
          </motion.div>
          <div className="mt-10 flex gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show hero slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition ${index === activeSlide ? "w-14 bg-gold" : "w-8 bg-cream/25 hover:bg-cream/45"}`}
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]">
          {embers.map((ember) => (
            <EmberParticle key={ember.x} {...ember} />
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 self-center text-base uppercase tracking-[0.24em] text-cream-muted">
          <span>scroll</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
