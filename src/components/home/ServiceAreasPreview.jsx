import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { areas } from "../../data/areas";
import SectionHeading from "../common/SectionHeading";

export default function ServiceAreasPreview() {
  return (
    <section
      className="bg-cream py-16 sm:py-20 lg:py-24"
      aria-label="Service areas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-purple mb-3 font-sans">
              Service Areas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal mb-4">
              Serving Swansea & Surrounding Areas
            </h2>
            <p className="font-sans text-base text-charcoal/65 leading-relaxed mb-8">
              Pretty Clean provides professional home cleaning across Swansea
              and nearby local communities. Get in touch to check availability.
            </p>
            <Link to="/areas" className="btn-primary">
              View All Areas <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {areas.map((area) => (
              <div
                key={area.id}
                className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border transition-colors duration-150 ${
                  area.isMain
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-white border-charcoal/10 text-charcoal hover:border-brand-purple/40 hover:bg-brand-teal-light/50"
                }`}
              >
                <MapPin
                  size={14}
                  className={
                    area.isMain
                      ? "text-brand-purple flex-shrink-0"
                      : "text-brand-purple flex-shrink-0"
                  }
                />
                <span
                  className={`font-sans font-medium text-sm ${area.isMain ? "text-white" : "text-charcoal"}`}
                >
                  {area.name}
                </span>
                {area.isMain && (
                  <span className="ml-auto text-[10px] text-white/60 font-sans">
                    Base
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
