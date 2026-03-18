import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { Navbar } from "@/components/layout/Navbar";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { italiannoScript, manrope, manropeAccent, manropeDisplay } from "@/lib/fonts";
import { getRestaurantJsonLd, getSharedMetadata } from "@/lib/metadata";
import { defaultLocale } from "@/lib/i18n";

import "./globals.css";
import "react-day-picker/dist/style.css";

export const metadata: Metadata = getSharedMetadata(defaultLocale);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body
        className={`${manropeDisplay.variable} ${manropeAccent.variable} ${manrope.variable} ${italiannoScript.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantJsonLd(defaultLocale)) }}
        />
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
