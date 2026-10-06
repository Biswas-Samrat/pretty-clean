import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import {
  businessPhone,
  businessPhoneLink,
  createWhatsAppUrl,
} from "../../data/contact";

export default function ServiceCTA() {
  return (
    <section className="bg-cream py-16 sm:py-20 border-t border-charcoal/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-charcoal/8 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-sm">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-purple font-sans mb-3 block">
            Pretty Clean
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal mb-4">
            Ready to Make Your Space Shine?
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed max-w-2xl mx-auto mb-8">
            Ask us about House Cleans, Deep Cleans or End of Tenancy Cleans in
            Newport and surrounding areas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link to="/request-quote" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={16} />
              WhatsApp Us
            </a>
            <a href={businessPhoneLink} className="btn-secondary">
              <Phone size={16} />
              Call {businessPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
