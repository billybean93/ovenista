import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#141410",
        surface: "#1C1A14",
        elevated: "#252018",
        ember: "#C8452A",
        gold: "#D4A853",
        "gold-muted": "#9A7A3A",
        forest: "#3D5A3E",
        cream: "#F5EDD8",
        "cream-muted": "#A89880",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      boxShadow: {
        card: "0 4px 32px rgba(0,0,0,0.6)",
        glow: "0 0 40px rgba(212, 168, 83, 0.15)",
        ember: "0 0 60px rgba(200, 69, 42, 0.20)",
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
          "0%, 100%": { boxShadow: "0 0 30px rgba(212,168,83,0.10)" },
          "50%": { boxShadow: "0 0 60px rgba(212,168,83,0.25)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(20,20,16,0.10) 0%, rgba(20,20,16,0.40) 60%, rgba(20,20,16,0.92) 100%)",
        "card-gradient":
          "linear-gradient(to bottom, rgba(20,20,16,0) 30%, rgba(20,20,16,0.95) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
