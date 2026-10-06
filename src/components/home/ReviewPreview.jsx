import { Link } from "react-router-dom";
import { Facebook, MessageSquare } from "lucide-react";
import { reviewSummary } from "../../data/reviews";
import SectionHeading from "../common/SectionHeading";
import { facebookPageUrl, createWhatsAppUrl } from "../../data/contact";

export default function ReviewPreview() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-label="Customer reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <SectionHeading
              eyebrow="Facebook Reviews"
              heading="100% Recommended"
              subheading={`Pretty Clean is rated 100% recommended on Facebook, based on ${reviewSummary.total} reviews.`}
              align="left"
            />
          </div>

          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs flex-shrink-0 self-start sm:self-auto"
          >
            <Facebook size={14} /> Visit Our Facebook Page
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/request-quote"
            className="btn-primary text-xs flex items-center gap-1.5"
          >
            Request a Quote
          </Link>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs flex items-center gap-1.5"
          >
            <MessageSquare size={14} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
