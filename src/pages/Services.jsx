import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MobileContactBar from "../components/layout/MobileContactBar";
import BackToTopButton from "../components/common/BackToTopButton";
import CTASection from "../components/common/CTASection";
import Breadcrumb from "../components/common/Breadcrumb";
import FAQPreview from "../components/home/FAQPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import { services, serviceIcons } from "../data/services";
import { createWhatsAppUrl } from "../data/contact";

const accentColors = {
  purple: {
    icon: "bg-brand-purple/10 text-brand-purple",
    border: "border-brand-purple/20",
  },
  teal: {
    icon: "bg-brand-teal-light text-brand-teal",
    border: "border-brand-teal/20",
  },
  coral: {
    icon: "bg-brand-coral/10 text-brand-coral",
    border: "border-brand-coral/20",
  },
};

const steps = [
  "Call or message Pretty Clean to tell us what you need",
  "Discuss your home, service and any requirements",
  "Receive a personalised quote for your needs",
  "Enjoy a fresher home with fewer chores",
];

export default function Services() {
  return (
    <>
      <title>Cleaning Services | Pretty Clean</title>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="bg-cream py-14 sm:py-16 border-b border-charcoal/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Services" }]} />
            <div className="mt-6 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
                Pretty Clean
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-medium text-charcoal mb-4 leading-tight">
                Cleaning Services Designed Around You
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/65 leading-relaxed mb-6">
                From regular cleans to detailed deep cleans and end of tenancy
                cleaning, Pretty Clean provides a professional, friendly service
                tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/request-quote" className="btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <a
                  href={createWhatsAppUrl()}
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

        {/* Services Grid */}
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, i) => {
                const Icon = serviceIcons[service.icon];
                const colors =
                  accentColors[service.accent] || accentColors.blue;
                const isEven = i % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                      isEven ? "" : "lg:flex lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="rounded-2xl overflow-hidden bg-white shadow-md">
                        <img
                          src={service.image}
                          alt={`${service.title} by Pretty Clean`}
                          className="w-full h-[300px] sm:h-[380px] bg-white object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "" : "lg:order-1"}>
                      <div
                        className={`w-10 h-10 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}
                      >
                        {Icon && <Icon size={18} />}
                      </div>
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <h2 className="font-display text-3xl sm:text-[2rem] font-medium text-charcoal">
                          {service.title}
                        </h2>
                        {service.id === "deep-cleaning" && (
                          <span className="font-display font-bold text-2xl sm:text-[1.75rem] text-brand-purple">
                            {service.price}
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="font-sans font-semibold text-charcoal text-sm mb-2 uppercase tracking-wide">
                            Suitable For
                          </h3>
                          <ul className="space-y-1.5">
                            {service.suitableFor.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-charcoal/65 font-sans"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-sans font-semibold text-charcoal text-sm mb-2 uppercase tracking-wide">
                            Key Benefits
                          </h3>
                          <ul className="space-y-1.5">
                            {service.benefits.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-charcoal/65 font-sans"
                              >
                                <Check
                                  size={13}
                                  className="text-brand-teal flex-shrink-0"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Price / Quote label */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.border} bg-white mb-5`}
                      >
                        <span className="font-display font-semibold text-charcoal text-xl">
                          {service.price || "Personalised quote"}
                        </span>
                        {service.priceNote && (
                          <span className="font-sans text-xs text-charcoal/60">
                            • {service.priceNote}
                          </span>
                        )}
                      </div>

                      <div>
                        <Link to="/request-quote" className="btn-primary">
                          Request a Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Cleaning Process */}
        <section className="bg-brand-teal-light py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
                Simple Process
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal">
                How Pretty Clean Works
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <ol className="relative">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4 pb-8 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center text-sm font-bold font-sans flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-px flex-1 bg-charcoal/15 mt-2"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="font-sans text-base text-charcoal/70 pt-1.5 pb-2">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Quick FAQ */}
        <FAQPreview />

        <CTASection />
      </main>
      <Footer />
      <MobileContactBar />
      <BackToTopButton />
    </>
  );
}
