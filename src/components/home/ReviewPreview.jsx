import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star, ArrowUpRight } from "lucide-react";
import { reviews } from "../../data/reviews";
import SectionHeading from "../common/SectionHeading";
import ReviewCard from "../reviews/ReviewCard";

export default function ReviewPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);

  // Responsive itemsPerPage: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Ensure currentIndex stays within bounds when itemsPerPage changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  // Check prefers-reduced-motion
  const isReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Gentle autoplay: pause on hover / focus / touch
  useEffect(() => {
    if (isPaused || isReducedMotion || maxIndex === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, isReducedMotion, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    const threshold = 45;

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

  // Indicator dots count (pages or step indicators)
  const totalDots = maxIndex + 1;

  return (
    <section
      className="bg-cream py-18 sm:py-24 lg:py-28 overflow-hidden border-t border-b border-charcoal/6"
      aria-label="Customer reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <SectionHeading
            eyebrow="Customer Reviews"
            heading="Kind Words From Our Customers"
            subheading="A little feedback goes a long way. See what our customers have to say about their experience with Nice Cleaning."
            align="left"
          />

          {/* Carousel Next/Prev Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-charcoal/20 bg-white text-charcoal hover:border-brand-purple hover:bg-brand-purple-light hover:text-brand-purple-dark flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 shadow-xs active:scale-95"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-charcoal/20 bg-white text-charcoal hover:border-brand-purple hover:bg-brand-purple-light hover:text-brand-purple-dark flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 shadow-xs active:scale-95"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden -mx-2 sm:-mx-3 py-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              transitionDuration: isReducedMotion ? "0ms" : "280ms",
              transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 flex flex-col"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="px-2 sm:px-3 h-full">
                  <ReviewCard review={review} className="h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Clustered for smooth overview) */}
        <div className="flex items-center justify-center gap-1.5 mt-8 sm:mt-10">
          {Array.from({ length: totalDots }).map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 ${
                  isActive
                    ? "w-7 bg-brand-purple"
                    : "w-2 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
              />
            );
          })}
        </div>

        {/* Action Buttons: See All Reviews & Add a Review */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/reviews"
            className="btn-secondary w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group"
          >
            See All Reviews
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            to="/reviews#review-form"
            className="btn-primary w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group"
          >
            <Star size={15} className="fill-charcoal text-charcoal group-hover:fill-white group-hover:text-white transition-colors" />
            Add a Review
          </Link>
        </div>
      </div>
    </section>
  );
}
