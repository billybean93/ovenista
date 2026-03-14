import dynamic from "next/dynamic";

import HeroSection from "@/components/sections/HeroSection";
import ManifestoStrip from "@/components/sections/ManifestoStrip";
import OurStory from "@/components/sections/OurStory";
import SignatureDishes from "@/components/sections/SignatureDishes";
import { SectionDivider } from "@/components/ui/SectionDivider";

const GallerySection = dynamic(() => import("@/components/sections/GallerySection"));
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection"));
const TakeawayBanner = dynamic(() => import("@/components/sections/TakeawayBanner"));
const ReservationSection = dynamic(() => import("@/components/sections/ReservationSection"));
const LocationSection = dynamic(() => import("@/components/sections/LocationSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoStrip />
      <SignatureDishes />
      <SectionDivider />
      <OurStory />
      <GallerySection />
      <ReviewsSection />
      <TakeawayBanner />
      <ReservationSection />
      <LocationSection />
    </>
  );
}
