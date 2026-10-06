import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl } from "../../data/contact";

const heroBubbles = [
  { x: 6, y: 8, size: 12, color: "#FF6B57", delay: -1.2, duration: 8.5 },
  { x: 21, y: 51, size: 9, color: "#FFB703", delay: -4.1, duration: 9.5 },
  { x: 36, y: 7, size: 18, color: "#7C3AED", delay: -2.7, duration: 11 },
  { x: 50, y: 57, size: 11, color: "#00D1B2", delay: -6.3, duration: 10 },
  { x: 65, y: 9, size: 14, color: "#FF7F50", delay: -3.5, duration: 12 },
  { x: 80, y: 49, size: 10, color: "#3B82F6", delay: -7.4, duration: 9 },
  { x: 94, y: 6, size: 17, color: "#F472B6", delay: -5.2, duration: 11.5 },
  { x: 12, y: 55, size: 11, color: "#22C55E", delay: -2.1, duration: 10.5 },
  { x: 29, y: 27, size: 14, color: "#FFB703", delay: -8.2, duration: 12.5 },
  { x: 46, y: 59, size: 9, color: "#F43F5E", delay: -3.9, duration: 8 },
  { x: 67, y: 27, size: 13, color: "#06B6D4", delay: -6.8, duration: 10.5 },
  { x: 87, y: 52, size: 10, color: "#A78BFA", delay: -1.7, duration: 11 },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-[90svh] flex items-center bg-[#F7F3EC] pt-10 sm:pt-6 lg:pt-5 pb-6 sm:pb-8 lg:pb-8 overflow-hidden"
      aria-label="Hero"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-md xl:max-w-lg">
              <div className="hero-bubble-field" aria-hidden="true">
                {heroBubbles.map((bubble) => (
                  <span
                    key={`${bubble.x}-${bubble.y}`}
                    className="hero-bubble"
                    style={{
                      "--bubble-x": `${bubble.x}%`,
                      "--bubble-y": `${bubble.y}px`,
                      "--bubble-size": `${bubble.size}px`,
                      "--bubble-color": bubble.color,
                      "--bubble-delay": `${bubble.delay}s`,
                      "--bubble-duration": `${bubble.duration}s`,
                    }}
                  />
                ))}
              </div>
              <img
                src="/new%20hero%20photo.png"
                alt="Pretty Clean home cleaning service"
                className="w-full h-auto lg:max-h-[380px] object-contain"
              />
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-6 space-y-3.5 sm:space-y-4 lg:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-purple/20 border border-brand-purple/40 px-3.5 py-1 rounded-full text-xs sm:text-sm font-sans text-charcoal/80 shadow-xs mx-auto lg:mx-0">
              <svg
                className="w-3.5 h-3.5 text-charcoal"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>

              <span>100% Recommended • DBS Checked • Fully Insured</span>
            </div>

            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] text-charcoal leading-[1.12] tracking-tight max-sm:mb-2">
              Making Life a Little <br className="hidden sm:inline" />
              Cleaner <br className="hidden sm:inline" />
              <span className="relative inline-block font-script font-normal text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-charcoal mt-0.5">
                Pretty Clean
                <span className="absolute -top-2 -right-5 text-charcoal/70 text-base sm:text-lg select-none">
                  ✦
                </span>
                <span className="absolute -bottom-1 -right-8 text-charcoal/50 text-xs sm:text-sm select-none">
                  ✦
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-charcoal/80"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 198 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-charcoal/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Professional domestic and commercial cleaning across Swansea and
              surrounding areas. Pretty Clean takes care of the details so you
              can enjoy a fresher home with less stress.
            </p>

            <div
              className="
                flex flex-col items-center justify-center
                gap-4 pt-4
                sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-0
                lg:justify-start
              "
            >
              <div className="flex items-center gap-2.5">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#25D366] p-2.5 text-white shadow-sm transition-colors hover:bg-[#1fb75d]"
                  aria-label="WhatsApp us"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>

                <Link
                  to="/request-quote"
                  className="
                    inline-flex items-center gap-2.5
                    bg-brand-purple hover:bg-brand-purple-dark
                    text-charcoal
                    rounded-full
                    px-5 sm:px-6 py-2.5
                    text-xs sm:text-sm
                    font-sans font-medium
                    transition-all duration-200
                    shadow-sm
                    group
                  "
                >
                  <span>Request a Quote</span>

                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <Link
                to="/services"
                className="
                  inline-flex items-center gap-1.5
                  bg-brand-teal-light hover:bg-brand-teal
                  text-charcoal
                  border border-brand-teal
                  rounded-full
                  px-5 py-2.5
                  font-sans font-medium text-xs sm:text-sm
                  shadow-sm
                  transition-all duration-200
                  group
                "
              >
                <span>View Our Services</span>

                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
