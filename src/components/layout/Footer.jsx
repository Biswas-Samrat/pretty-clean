import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Phone, MapPin, Facebook } from "lucide-react";
import {
  businessAddress,
  businessPhone,
  businessPhoneLink,
  facebookHandle,
  facebookPageUrl,
  createWhatsAppUrl,
} from "../../data/contact";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/our-work", label: "Our Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/areas", label: "Areas We Cover" },
  { to: "/faq", label: "FAQ" },
  { to: "/request-quote", label: "Request a Quote" },
];

const serviceLinks = [
  { to: "/services#regular-cleaning", label: "Regular Cleaning" },
  { to: "/services#deep-cleaning", label: "Deep Cleaning" },
  { to: "/services#monthly-deep-clean", label: "Monthly Deep Clean" },
  { to: "/services#airbnb-changeovers", label: "Airbnb Changeovers" },
  { to: "/services#end-of-tenancy-cleaning", label: "End of Tenancy Cleaning" },
  { to: "/services#commercial-cleaning", label: "Commercial Cleaning" },
  { to: "/services#cleaning-extras", label: "Cleaning Extras" },
];

const areas = [
  "Swansea SA1",
  "Swansea SA2",
  "Swansea SA3",
  "Surrounding Areas",
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F3EC] text-black" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm text-black/70 leading-relaxed font-sans max-w-xs">
              Friendly, professional cleaning across Swansea and surrounding
              areas.
            </p>
            <div className="mt-5 flex items-center gap-1.5 text-sm text-black/70">
              <MapPin size={14} className="text-brand-purple flex-shrink-0" />
              <span>{businessAddress}</span>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <Phone size={14} className="text-brand-purple flex-shrink-0" />
              <a
                href={businessPhoneLink}
                className="text-sm text-black/70 hover:text-black transition-colors duration-150"
              >
                {businessPhone}
              </a>
            </div>
            <div className="mt-5">
              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pretty Clean on Facebook"
                className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors duration-150"
              >
                <Facebook size={16} className="text-[#4267B2]" />
                {facebookHandle}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-black/60 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-black/70 hover:text-black transition-colors duration-150 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-black/60 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-black/70 hover:text-black transition-colors duration-150 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-black/60 mb-4">
              Areas We Cover
            </h3>
            <ul className="space-y-1.5">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    to="/areas"
                    className="text-sm text-black/70 hover:text-black transition-colors duration-150 font-sans"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center py-2 text-xs"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={businessPhoneLink}
                className="flex items-center justify-center gap-1.5 w-full py-2 px-4 border border-black/20 rounded-lg text-xs font-sans font-medium text-black/70 hover:text-black hover:border-black/40 transition-colors duration-150"
              >
                <Phone size={13} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/60 font-sans">
          <p>© 2026 Pretty Clean. All rights reserved.</p>
          <p>Making life a little cleaner, one home at a time.</p>
        </div>
      </div>
    </footer>
  );
}
