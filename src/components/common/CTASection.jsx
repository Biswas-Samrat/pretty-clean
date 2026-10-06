import { Link } from "react-router-dom";
import { MessageCircle, Sparkles } from "lucide-react";
import { createWhatsAppUrl } from "../../data/contact";

export default function CTASection({
  heading = "Ready to Make Your Home Sparkle?",
  subheading = "Professional cleaning with a personal touch across Swansea and surrounding areas.",
  showPhone = false,
}) {
  return (
    <section className="bg-brand-purple-light py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-white px-4 py-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-charcoal">
          <Sparkles size={14} />
          Let’s get started
        </div>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-4">
          {heading}
        </h2>
        <p className="text-muted font-sans text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/request-quote"
            className="btn-primary w-full sm:w-auto justify-center"
          >
            Request a Quote
          </Link>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto justify-center"
          >
            <MessageCircle size={16} />
            Message Us
          </a>
        </div>
      </div>
    </section>
  );
}
