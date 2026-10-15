import { useState } from "react";
import { Quote, User, CheckCircle } from "lucide-react";
import RatingStars from "../common/RatingStars";

export default function ReviewCard({ review, className = "" }) {
  const [imgError, setImgError] = useState(false);

  const reviewText = review.comment || review.text;

  return (
    <article
      className={`bg-white rounded-2xl border border-charcoal/10 p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar with fallback */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-charcoal/5 border border-charcoal/10">
            {review.avatar && !imgError ? (
              <img
                src={review.avatar}
                alt={`${review.name} profile`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className={`w-full h-full ${
                  review.avatarColor || "bg-brand-purple"
                } flex items-center justify-center text-white font-sans font-semibold text-sm`}
                aria-label={review.name}
              >
                {review.initials || <User size={18} />}
              </div>
            )}
          </div>

          {/* Name & Meta */}
          <div className="min-w-0">
            <h3 className="font-sans font-semibold text-charcoal text-base truncate">
              {review.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-charcoal/55 font-sans mt-0.5">
              {review.location && <span>{review.location}</span>}
              {review.location && review.date && <span>•</span>}
              {review.date && <span>{review.date}</span>}
            </div>
          </div>
        </div>

        {/* Decorative Quote Icon */}
        <Quote
          size={20}
          className="text-brand-purple/30 flex-shrink-0 mt-1 transform rotate-180"
          aria-hidden="true"
        />
      </div>

      {/* Star Rating & Service Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <RatingStars rating={review.rating || 5} size={15} />

        {review.service && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium font-sans bg-brand-teal-light text-brand-purple-dark border border-brand-purple/15">
            {review.service}
          </span>
        )}
      </div>

      {/* Review Content */}
      <blockquote className="font-sans text-sm text-charcoal/75 leading-relaxed flex-1 mt-1">
        “{reviewText}”
      </blockquote>

      {/* Recommended Tag */}
      {review.recommended !== false && (
        <div className="mt-5 pt-3.5 border-t border-charcoal/8 flex items-center gap-1.5 text-xs font-medium text-brand-purple-dark font-sans">
          <CheckCircle size={13} className="text-brand-purple flex-shrink-0" />
          <span>Verified Experience</span>
        </div>
      )}
    </article>
  );
}
