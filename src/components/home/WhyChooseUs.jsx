import { Star, BadgeCheck, ShieldCheck, MapPin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const values = [
  {
    icon: Star,
    title: "5 Star Cleans",
    description:
      "Professional cleaning with a focus on quality, care and detail.",
    accent: "bg-brand-yellow/15 text-brand-yellow",
  },
  {
    icon: BadgeCheck,
    title: "DBS Checked",
    description: "Extra peace of mind from a DBS-checked cleaning service.",
    accent: "bg-brand-teal-light text-brand-purple",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description:
      "Your home is treated with care by a fully insured cleaning service.",
    accent: "bg-brand-teal/10 text-brand-teal",
  },
  {
    icon: MapPin,
    title: "Local & Reliable",
    description: "Proudly serving Swansea and surrounding local communities.",
    accent: "bg-brand-purple-light text-brand-purple",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-label="Why choose Pretty Clean"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden bg-white">
              <img
                src="/photo/Why%20Choose%20Nice%20Cleaning.png"
                alt="Pretty Clean service benefits: five-star cleans, DBS checked, fully insured and local"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            {/* Accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-brand-teal-light -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-brand-yellow/15 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
              Why Pretty Clean
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              Why Choose Pretty Clean?
            </h2>
            <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-8">
              Friendly, professional cleaning with care, quality and attention
              to detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg ${value.accent} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-charcoal text-sm mb-1">
                        {value.title}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
