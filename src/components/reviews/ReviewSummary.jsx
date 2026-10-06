import { Facebook, CheckCircle } from "lucide-react";
import { reviewSummary } from "../../data/reviews";

export default function ReviewSummary() {
  return (
    <div className="bg-white rounded-2xl border border-charcoal/8 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex items-center gap-4 text-center sm:text-left">
        <div className="w-14 h-14 rounded-2xl bg-[#4267B2]/10 text-[#4267B2] flex items-center justify-center flex-shrink-0">
          <Facebook size={30} />
        </div>
        <div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="font-display text-2xl font-bold text-charcoal">
              100%
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle size={12} /> Recommended
            </span>
          </div>
          <p className="font-sans text-sm text-charcoal/65 mt-0.5">
            Pretty Clean is rated {reviewSummary.recommendPercent}% recommended
            on Facebook, based on {reviewSummary.total} reviews.
          </p>
        </div>
      </div>
    </div>
  );
}
