import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Star, MessageSquareQuote, CheckCircle, Info, ShieldCheck } from "lucide-react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import Breadcrumb from "../components/common/Breadcrumb";
import CTASection from "../components/common/CTASection";
import ReviewCard from "../components/reviews/ReviewCard";
import ReviewSummary from "../components/reviews/ReviewSummary";
import { reviews } from "../data/reviews";
import { services } from "../data/services";

export default function Reviews() {
  const location = useLocation();

  // Review Form local state (visual demo only)
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    service: services[1]?.title || "Deep Cleaning",
    review: "",
    consent: false,
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  // Smooth scroll to #review-form on direct visit or navigation
  useEffect(() => {
    if (location.hash === "#review-form") {
      const scrollTimer = setTimeout(() => {
        const target = document.getElementById("review-form");
        if (target) {
          const yOffset = -90; // sticky header offset
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(scrollTimer);
    }
  }, [location.hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDemoNotice(true);
  };

  return (
    <>
      <title>Customer Reviews | Pretty Clean</title>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-cream">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Reviews" }]} />

            <div className="mt-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider text-brand-purple bg-brand-purple-light border border-brand-purple/20 mb-3">
                <MessageSquareQuote size={14} />
                Client Testimonials
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                What Our Customers Say
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/70 leading-relaxed">
                Discover what our customers think about their experience with Pretty Clean. Your feedback helps us continue delivering a service you can feel good about.
              </p>
            </div>

            {/* Review Summary Component */}
            <div className="mt-10">
              <ReviewSummary reviews={reviews} />
            </div>

            {/* Subtle Demo Content Notice */}
            <div className="mt-6 flex items-center gap-2 text-xs text-charcoal/60 bg-white/80 border border-charcoal/10 rounded-xl px-4 py-3 max-w-3xl">
              <Info size={15} className="text-brand-purple flex-shrink-0" />
              <p className="font-sans">
                Sample reviews are displayed for this website preview and will be replaced with genuine customer feedback before launch.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid Section */}
        <section className="py-14 sm:py-18 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-2 font-sans">
                  All Feedback
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-charcoal">
                  Recent Customer Experiences
                </h2>
              </div>
              <a
                href="#review-form"
                className="btn-primary text-xs self-start sm:self-auto"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("review-form");
                  if (target) {
                    const yOffset = -90;
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    window.history.pushState(null, "", "#review-form");
                  }
                }}
              >
                Write a Review
              </a>
            </div>

            {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>

        {/* Review Submission Form Section */}
        <section
          id="review-form"
          className="py-16 sm:py-20 lg:py-24 bg-white border-t border-charcoal/8 scroll-mt-24"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider text-brand-purple bg-brand-purple-light border border-brand-purple/20 mb-3">
                <ShieldCheck size={14} />
                Your Feedback
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-3">
                Share Your Experience
              </h2>
              <p className="font-sans text-base text-charcoal/65 leading-relaxed">
                We would love to hear about your experience with our cleaning services.
              </p>
            </div>

            <div className="bg-cream rounded-3xl border border-charcoal/10 p-6 sm:p-10 shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="customer-name" className="label font-medium">
                    Your Name <span className="text-brand-purple">*</span>
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className="input-field"
                  />
                </div>

                {/* Rating Field */}
                <div>
                  <label className="label font-medium mb-2">
                    Your Rating <span className="text-brand-purple">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Star rating">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled =
                          (hoverRating || formData.rating) >= star;
                        return (
                          <button
                            key={star}
                            type="button"
                            role="radio"
                            aria-checked={formData.rating === star}
                            aria-label={`${star} star${star > 1 ? "s" : ""}`}
                            onClick={() =>
                              setFormData({ ...formData, rating: star })
                            }
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 rounded-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
                          >
                            <Star
                              size={26}
                              className={
                                isFilled
                                  ? "text-brand-yellow fill-brand-yellow drop-shadow-xs"
                                  : "text-charcoal/20"
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                    <span className="font-sans text-sm font-semibold text-charcoal/70 ml-2">
                      {(hoverRating || formData.rating)} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Service Used Field */}
                <div>
                  <label htmlFor="cleaning-service" className="label font-medium">
                    Which service did you use? <span className="text-brand-purple">*</span>
                  </label>
                  <select
                    id="cleaning-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="input-field bg-white"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Household Cleaning">General Household Cleaning</option>
                    <option value="Bathroom Deep Clean">Bathroom Deep Clean</option>
                    <option value="Kitchen Deep Clean">Kitchen Deep Clean</option>
                  </select>
                </div>

                {/* Review Field */}
                <div>
                  <label htmlFor="customer-review" className="label font-medium">
                    Your Review <span className="text-brand-purple">*</span>
                  </label>
                  <textarea
                    id="customer-review"
                    required
                    rows={4}
                    value={formData.review}
                    onChange={(e) =>
                      setFormData({ ...formData, review: e.target.value })
                    }
                    placeholder="Tell us what you loved about our cleaning service, our team or your results..."
                    className="input-field resize-none leading-relaxed"
                  />
                </div>

                {/* Publication Consent Checkbox */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="review-consent"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-border text-brand-purple focus:ring-brand-purple/30 cursor-pointer"
                  />
                  <label
                    htmlFor="review-consent"
                    className="font-sans text-xs text-charcoal/70 leading-normal cursor-pointer select-none"
                  >
                    I understand that reviews may be publicly displayed on the website.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto px-8 py-3.5 text-sm font-semibold"
                  >
                    Submit Review
                  </button>
                  <p className="mt-3 font-sans text-xs text-charcoal/50">
                    Review submission will be available when the website's review system is connected.
                  </p>
                </div>

                {/* Frontend Visual Demo Notice upon click */}
                {showDemoNotice && (
                  <div className="mt-4 p-4 rounded-2xl bg-brand-teal-light border border-brand-purple/20 flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-brand-purple flex-shrink-0 mt-0.5"
                    />
                    <div className="text-xs text-charcoal/80 font-sans leading-relaxed">
                      <strong className="font-semibold block text-charcoal text-sm mb-0.5">
                        Frontend Demonstration Only
                      </strong>
                      Thank you for previewing the review form! Review submission will be active once the website's live review system is connected. No data has been stored.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <CTASection
          heading="Ready to Experience Nice Cleaning?"
          subheading="Join our happy customers across Swansea. Request a personalised quote for your home today."
        />
      </main>

      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
