import { Link } from "react-router-dom";
import { ArrowRight, MapPin, MessageSquare } from "lucide-react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import CTASection from "../components/common/CTASection";
import Breadcrumb from "../components/common/Breadcrumb";
import AreasList from "../components/areas/AreasList";
import { createWhatsAppUrl } from "../data/contact";

export default function Areas() {
  return (
    <>
      <title>Areas We Cover | Pretty Clean</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="bg-cream py-14 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Areas We Cover" }]} />
            <div className="mt-6 max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
                Local Coverage
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                Serving Newport & Surrounding Areas
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed mb-6">
                Pretty Clean provides professional home cleaning across Swansea
                and nearby local communities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/request-quote" className="btn-primary">
                  Check Availability <ArrowRight size={16} />
                </Link>
                <a
                  href={createWhatsAppUrl(
                    "Hi Pretty Clean, I'd like to check if you cover my area.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Areas List Section */}
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mb-10">
              <h2 className="font-display text-3xl font-medium text-charcoal mb-3">
                Our Primary Service Locations
              </h2>
              <p className="font-sans text-sm text-charcoal/65">
                Click any location or request a quote to check if we can visit
                your area.
              </p>
            </div>

            <AreasList />

            <div className="mt-12 bg-brand-teal-light rounded-2xl p-6 sm:p-8 border border-brand-purple/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg text-charcoal mb-1">
                    Not sure if we cover your area?
                  </h3>
                  <p className="font-sans text-sm text-charcoal/65">
                    Get in touch to check availability for your local area
                    around Newport and nearby communities.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                <Link to="/request-quote" className="btn-primary text-xs">
                  Request a Quote
                </Link>
                <a
                  href={createWhatsAppUrl(
                    "Hi Pretty Clean, I'd like to check availability for my postcode.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs flex items-center gap-1.5"
                >
                  <MessageSquare size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
