import { ReviewCard } from "@/components/ui/ReviewCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getReviews } from "@/lib/restaurant-data";

export default function ReviewsSection({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const reviews = getReviews(locale);

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionLabel text={dictionary.reviews.label} className="mb-5" />
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={`${review.author}-${review.date}`} locale={locale} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
