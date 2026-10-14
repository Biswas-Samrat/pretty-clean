import { Phone } from "lucide-react";
import { createWhatsAppUrl } from "../../data/contact";

export default function AnnouncementBar() {
  return (
    <div id="announcement-bar" className="bg-charcoal text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between gap-4 text-xs sm:text-xs md:text-sm">
        <p className="font-sans text-white/90 text-center sm:text-left w-full sm:w-auto leading-relaxed">
          Making life a little cleaner, one home at a time • Swansea &
          surrounding areas
        </p>
        <a
          href={createWhatsAppUrl(
            "Hi Pretty Clean, I'd like to enquire about a cleaning service.",
          )}
          className="hidden sm:flex items-center gap-1.5 text-[#F4E5B2] hover:text-white font-medium transition-colors duration-150 flex-shrink-0"
          aria-label="Message Pretty Clean on WhatsApp"
        >
          <Phone size={13} />
          <span>Regular Cleaning • Deep Cleaning • Airbnb Cleans</span>
        </a>
      </div>
    </div>
  );
}
