import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageSquare } from "lucide-react";
import { faqs } from "../../data/faqs";
import SectionHeading from "../common/SectionHeading";
import { createWhatsAppUrl } from "../../data/contact";

export default function FAQPreview() {
  const [openId, setOpenId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 6);
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      className="bg-brand-teal-light py-16 sm:py-20 lg:py-24"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionHeading
              eyebrow="Help & Information"
              heading="Common Questions Answered"
              subheading="Clear answers about Pretty Clean’s services, coverage and bookings."
            />
          </div>

          <div className="space-y-3">
            {displayedFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-charcoal/8 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream/50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-purple/30"
                >
                  <span className="font-sans font-semibold text-charcoal text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-brand-purple flex-shrink-0 transition-transform duration-200 ${openId === faq.id ? "rotate-180" : ""}`}
                  />
                </button>

                {openId === faq.id && (
                  <div className="px-5 pb-5 border-t border-charcoal/5">
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed pt-3">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {faqs.length > 6 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="btn-secondary text-xs font-sans"
              >
                {showAll
                  ? "Show Fewer Questions"
                  : `See All Questions (${faqs.length})`}
              </button>
            </div>
          )}

          <div className="mt-10 p-6 bg-white/90 rounded-2xl border border-brand-purple/20 text-center shadow-sm">
            <p className="font-sans font-semibold text-charcoal text-base mb-1">
              Have another question?
            </p>
            <p className="font-sans text-sm text-charcoal/60 mb-5">
              Get in touch directly through our quote form or message us on
              WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/request-quote" className="btn-primary text-xs">
                Request a Quote
              </Link>
              <a
                href={createWhatsAppUrl(
                  "Hi Pretty Clean, I've got a question about your cleaning services.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs flex items-center gap-1.5"
              >
                <MessageSquare size={14} />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
