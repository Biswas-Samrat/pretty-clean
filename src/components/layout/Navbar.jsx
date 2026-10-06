import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import {
  businessPhone,
  businessPhoneLink,
  createWhatsAppUrl,
} from "../../data/contact";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/our-work", label: "Our Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/areas", label: "Areas We Cover" },
  { to: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const { isOpen, close, toggle } = useMobileMenu();
  const location = useLocation();

  return (
    <>
      <header
        className={`sticky top-0 z-30 transform-gpu transition-colors duration-300 ${
          isScrolled
            ? "bg-cream/95 shadow-sm border-b border-charcoal/8"
            : "bg-cream"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" aria-label="Pretty Clean - Home">
              <Logo size="md" />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3.5 py-2 rounded-lg font-sans font-medium text-sm transition-colors duration-150 ${
                      isActive
                        ? "text-charcoal bg-brand-purple-light"
                        : "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={businessPhoneLink}
                className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-charcoal font-medium transition-colors duration-150 px-2"
                aria-label="Call Pretty Clean"
              >
                <Phone size={15} />
                <span className="hidden xl:inline">{businessPhone}</span>
              </a>
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-2 px-4 text-xs"
                aria-label="WhatsApp Pretty Clean"
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
              <Link
                to="/request-quote"
                className="btn-primary py-2 px-4 text-xs"
              >
                Request a Quote
              </Link>
            </div>

            <button
              onClick={toggle}
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-charcoal hover:bg-charcoal/5 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-charcoal/20"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
}
