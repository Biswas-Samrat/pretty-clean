export default function Logo({ size = "md", className = "" }) {
  const heightClass =
    {
      sm: "h-8 sm:h-9",
      md: "h-10 sm:h-12 lg:h-13",
      lg: "h-14 sm:h-16 lg:h-18",
    }[size] || "h-10 sm:h-12 lg:h-13";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/assat/logo.png"
        alt="Pretty Clean - Premium Cleaning Services"
        className={`${heightClass} w-auto max-w-full object-contain select-none`}
        loading="eager"
      />
    </div>
  );
}

