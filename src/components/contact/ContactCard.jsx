import { Phone, MessageSquare, MapPin, Facebook } from "lucide-react";
import {
  businessAddress,
  businessPhone,
  businessPhoneLink,
  facebookHandle,
  facebookPageUrl,
  createWhatsAppUrl,
} from "../../data/contact";

export default function ContactCard() {
  return (
    <section className="bg-white rounded-2xl border border-charcoal/8 p-6 sm:p-8 space-y-6 shadow-sm">
      <h3 className="font-display text-2xl font-medium text-charcoal">
        Direct Contact Info
      </h3>
      <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
        Call or message Pretty Clean to discuss your home cleaning needs, or
        find us on Facebook.
      </p>

      <div className="space-y-4 pt-2">
        <a
          href={businessPhoneLink}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors duration-150 group"
        >
          <Phone size={18} className="text-brand-purple flex-shrink-0" />
          <span className="text-sm font-semibold text-charcoal font-sans">
            {businessPhone}
          </span>
        </a>

        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors duration-150 group"
        >
          <MessageSquare size={18} className="text-[#25D366] flex-shrink-0" />
          <span className="text-sm font-semibold text-charcoal font-sans">
            WhatsApp · {businessPhone}
          </span>
        </a>

        <p className="flex items-center gap-3 p-3 text-sm font-semibold text-charcoal font-sans">
          <MapPin size={18} className="text-brand-teal flex-shrink-0" />
          {businessAddress}
        </p>

        <a
          href={facebookPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors"
        >
          <Facebook size={18} className="text-brand-purple flex-shrink-0" />
          <span className="text-sm font-semibold text-charcoal font-sans">
            Find us on Facebook · {facebookHandle}
          </span>
        </a>
      </div>

      <div className="pt-4 border-t border-charcoal/6 text-xs text-charcoal/50 font-sans leading-relaxed">
        Serving Swansea and surrounding areas.
      </div>
    </section>
  );
}
