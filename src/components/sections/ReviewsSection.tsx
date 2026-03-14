import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { reviews } from "@/lib/restaurant-data";

export default function ReviewsSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionLabel text="What Guests Say" className="mb-5" />
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={`${review.author}-${review.date}`} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
