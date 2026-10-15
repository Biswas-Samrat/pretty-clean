import { Star, CheckCircle, Info } from "lucide-react";
import RatingStars from "../common/RatingStars";
import { reviews as defaultReviews, getReviewStats } from "../../data/reviews";

export default function ReviewSummary({ reviews = defaultReviews }) {
  const stats = getReviewStats(reviews);
  const total = stats.total;

  return (
    <div className="bg-white rounded-3xl border border-charcoal/10 p-6 sm:p-8 lg:p-9 shadow-soft">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Overall Score */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-charcoal/8 pb-6 md:pb-0 md:pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider text-brand-purple bg-brand-purple-light border border-brand-purple/20 mb-3">
            <CheckCircle size={13} />
            {stats.recommendPercent}% Recommended
          </div>

          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-display text-5xl sm:text-6xl font-bold text-charcoal">
              {stats.averageRating.toFixed(1)}
            </span>
            <span className="font-sans text-sm text-charcoal/50 font-medium">
              / 5.0
            </span>
          </div>

          <RatingStars rating={Math.round(stats.averageRating)} size={20} className="mb-2" />

          <p className="font-sans text-sm text-charcoal/70">
            Based on <strong className="text-charcoal font-semibold">{total}</strong> sample customer reviews
          </p>
        </div>

        {/* Rating Breakdown */}
        <div className="md:col-span-7 space-y-2">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/60 mb-3">
            Rating Distribution
          </h4>

          {[5, 4, 3, 2, 1].map((stars) => {
            const count = stats.distribution[stars] || 0;
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

            return (
              <div key={stars} className="flex items-center gap-3 text-xs font-sans text-charcoal/70">
                <span className="w-12 flex items-center gap-1 font-medium text-charcoal/80 flex-shrink-0">
                  {stars} <Star size={12} className="text-brand-yellow fill-brand-yellow inline" />
                </span>

                <div className="flex-1 h-2.5 bg-cream rounded-full overflow-hidden border border-charcoal/5">
                  <div
                    className="h-full bg-brand-purple rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>

                <span className="w-9 text-right font-medium text-charcoal/60 tabular-nums">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preview Content Notice */}
      <div className="mt-6 pt-4 border-t border-charcoal/6 flex items-center justify-between flex-wrap gap-2 text-xs text-charcoal/50 font-sans">
        <div className="flex items-center gap-1.5">
          <Info size={13} className="text-brand-purple flex-shrink-0" />
          <span>Calculated from active preview dataset</span>
        </div>
        <span className="text-[11px] bg-brand-teal-light text-brand-purple-dark px-2.5 py-0.5 rounded-full font-medium">
          Frontend Demonstration Data
        </span>
      </div>
    </div>
  );
}
