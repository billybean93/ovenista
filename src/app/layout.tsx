import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { Navbar } from "@/components/layout/Navbar";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { italiannoScript, manrope, manropeAccent, manropeDisplay } from "@/lib/fonts";
import { getRestaurantJsonLd, sharedMetadata } from "@/lib/metadata";

import "./globals.css";
import "react-day-picker/dist/style.css";

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeDisplay.variable} ${manropeAccent.variable} ${manrope.variable} ${italiannoScript.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantJsonLd()) }}
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
