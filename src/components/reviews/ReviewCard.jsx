import { Facebook } from "lucide-react";
import RatingStars from "../common/RatingStars";

export default function ReviewCard({ review }) {
  return (
    <article className="bg-white rounded-xl border border-charcoal/8 p-6 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-semibold text-sm font-sans flex-shrink-0`}
          >
            {review.initials}
          </div>
          <div>
            <p className="font-sans font-semibold text-charcoal text-sm">
              {review.name}
            </p>
            <p className="font-sans text-xs text-charcoal/50 mt-0.5">
              {review.service}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[#4267B2] flex-shrink-0">
          <Facebook size={15} />
        </div>
      </div>

      <RatingStars rating={review.rating} size={14} className="mb-3" />

      <blockquote className="font-sans text-sm text-charcoal/70 leading-relaxed flex-1 italic">
        "{review.text}"
      </blockquote>

      {review.recommended && (
        <div className="mt-5 pt-4 border-t border-charcoal/6 flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full bg-brand-teal"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold text-brand-teal font-sans">
            Recommends Pretty Clean
          </span>
        </div>
      )}
    </article>
  );
}
