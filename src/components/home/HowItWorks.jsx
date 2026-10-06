import { Phone, ClipboardList, MessageSquare, CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Get in Touch",
    description: "Call or message Pretty Clean to tell us what you need.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Discuss Your Cleaning",
    description:
      "Tell us about your home, the service you need and any specific requirements.",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Get Your Quote",
    description:
      "We’ll discuss your requirements and provide a personalised quote.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Enjoy a Cleaner Home",
    description:
      "Enjoy a fresh, clean space with less stress and fewer chores.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="bg-charcoal py-16 sm:py-20 lg:py-24"
      aria-label="How it works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Simple Process"
            heading="Getting Started is Easy"
            subheading="A simple, personal way to arrange the cleaning your home needs."
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden sm:block absolute top-8 left-1/6 right-1/6 h-px bg-white/10"
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white/8 border border-white/15 flex items-center justify-center">
                    <Icon size={24} className="text-brand-purple" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-yellow text-charcoal text-[10px] font-bold font-sans flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-medium text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
