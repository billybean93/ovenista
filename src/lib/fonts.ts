import { Cormorant_Garamond, Manrope } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const manropeDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const manropeAccent = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
  preload: false,
});
