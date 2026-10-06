import { PhoneCall, CalendarCheck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Get In Touch",
    description: "Call or message Pretty Clean to tell us what you need.",
  },
  {
    icon: CalendarCheck,
    title: "2. Discuss Your Cleaning",
    description:
      "Tell us about your home, the service you need and any specific requirements.",
  },
  {
    icon: Sparkles,
    title: "3. Get Your Quote",
    description:
      "We’ll discuss your requirements and provide a personalised quote.",
  },
  {
    icon: Home,
    title: "4. Enjoy a Cleaner Home",
    description:
      "Enjoy a fresh, clean space with less stress and fewer chores.",
  },
];

export default function CleaningProcess() {
  return (
    <section className="bg-brand-teal-light py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
            Simple & Stress-Free
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal">
            How Our Cleaning Service Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal/65 mt-3">
            Four easy steps to a cleaner, fresher home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-brand-purple/15 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-purple flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-medium text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
