import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFF7E8",
        surface: "#FFF1D8",
        elevated: "#FFE5BF",
        ember: "#E85B3B",
        gold: "#E6B93D",
        "gold-muted": "#C8952D",
        forest: "#4E8B57",
        cream: "#3F3427",
        "cream-muted": "#7A6A58",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        card: "0 18px 44px rgba(121, 92, 55, 0.12)",
        glow: "0 0 40px rgba(230, 185, 61, 0.18)",
        ember: "0 0 52px rgba(232, 91, 59, 0.18)",
      },
      animation: {
        "ember-float": "emberFloat 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.8s var(--ease-reveal) both",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        emberFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "50%": { transform: "translateY(-24px) scale(0.85)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(230,185,61,0.12)" },
          "50%": { boxShadow: "0 0 48px rgba(232,91,59,0.18)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(255,247,232,0.08) 0%, rgba(255,232,199,0.18) 45%, rgba(255,247,232,0.48) 100%)",
        "card-gradient":
          "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,241,216,0.55) 55%, rgba(255,229,191,0.92) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
