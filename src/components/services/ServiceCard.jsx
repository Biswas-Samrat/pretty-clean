import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { serviceIcons } from "../../data/services";

const accentColors = {
  purple: "bg-brand-purple-light text-brand-purple border-brand-purple/20",
  teal: "bg-brand-teal-light text-brand-teal border-brand-teal/20",
  coral: "bg-brand-coral/10 text-brand-coral border-brand-coral/20",
};

export default function ServiceCard({ service }) {
  const Icon = serviceIcons[service.icon];
  const badgeColor = accentColors[service.accent] || accentColors.purple;

  return (
    <article className="bg-white rounded-2xl border border-charcoal/8 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-52 overflow-hidden bg-white">
        <img
          src={service.image}
          alt={`${service.title} by Pretty Clean`}
          className="w-full h-full bg-white object-contain"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-sans backdrop-blur-md bg-white/90 border ${badgeColor}`}
          >
            {Icon && <Icon size={13} />}
            Personalised quote
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-medium text-charcoal mb-2">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-charcoal/65 leading-relaxed mb-4 flex-1">
          {service.shortDescription || service.description}
        </p>

        {service.benefits && service.benefits.length > 0 && (
          <ul className="space-y-1.5 mb-5 pt-3 border-t border-charcoal/6">
            {service.benefits.slice(0, 3).map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs text-charcoal/70 font-sans"
              >
                <Check size={12} className="text-brand-teal flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-brand-purple hover:text-charcoal transition-colors uppercase tracking-wider"
          >
            Request a Quote <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
