import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import Breadcrumb from "../components/common/Breadcrumb";
import QuoteForm from "../components/contact/QuoteForm";
import ContactCard from "../components/contact/ContactCard";
import { ShieldCheck, Star, ThumbsUp, MapPin } from "lucide-react";
import { areas } from "../data/areas";

export default function RequestQuote() {
  return (
    <>
      <title>Request a Quote | Pretty Clean</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream py-14 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Request a Quote" }]} />
            <div className="mt-6 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
                Personalised Quotes
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                Request a Cleaning Quote
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed">
                Tell Pretty Clean what you need and we’ll get back to discuss
                your requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Form & Sidebar */}
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-8">
                <QuoteForm />
              </div>

              <div className="lg:col-span-4 space-y-6">
                {/* Why Choose Us Card */}
                <div className="bg-white rounded-2xl border border-charcoal/8 p-6 space-y-4 shadow-sm">
                  <h3 className="font-display font-medium text-lg text-charcoal mb-2">
                    Why Choose Pretty Clean?
                  </h3>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ThumbsUp size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">
                        100% Recommended
                      </p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                        40 Facebook reviews
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">
                        5 Star Cleans
                      </p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                        Professional cleaning with a focus on quality, care and
                        detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 text-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-xs text-charcoal">
                        Fully Insured
                      </p>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                        Your home is treated with care by a fully insured
                        cleaning service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Info */}
                <ContactCard />

                {/* Service Areas Summary */}
                <div className="bg-white rounded-2xl border border-charcoal/8 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-brand-purple" />
                    <h3 className="font-display font-medium text-base text-charcoal">
                      Serving Swansea & Nearby
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {areas.map((a) => (
                      <span
                        key={a.id}
                        className="text-xs bg-cream px-2.5 py-1 rounded-md text-charcoal/70 font-sans border border-charcoal/6"
                      >
                        {a.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
