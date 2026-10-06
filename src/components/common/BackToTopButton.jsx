import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={`hidden lg:flex fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-charcoal text-white shadow-lg items-center justify-center transition-all duration-300 hover:bg-charcoal-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={16} />
    </button>
  );
}
