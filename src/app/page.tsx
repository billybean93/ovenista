import dynamic from "next/dynamic";

import HeroSection from "@/components/sections/HeroSection";
import ManifestoStrip from "@/components/sections/ManifestoStrip";
import SignatureDishes from "@/components/sections/SignatureDishes";

const OurStory = dynamic(() => import("@/components/sections/OurStory"));
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const ReservationSection = dynamic(() => import("@/components/sections/ReservationSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoStrip />
      <SignatureDishes />
      <OurStory />
      <GallerySection />
      <ReservationSection />
    </>
  );
}
