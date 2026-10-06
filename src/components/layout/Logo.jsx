export default function Logo({ size = "md", light = false }) {
  const heightClass =
    {
      sm: "h-8 sm:h-9",
      md: "h-10 sm:h-12",
      lg: "h-14 sm:h-16",
    }[size] || "h-10 sm:h-12";

  return (
    <div
      className={`flex items-center gap-2.5 ${light ? "text-white" : "text-dark"}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-purple/40 bg-brand-purple-light text-brand-purple shadow-sm">
        <span className="font-script text-2xl leading-none text-charcoal">
          P
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-sans text-lg sm:text-xl font-semibold tracking-[0.12em] uppercase leading-none text-current">
          Pretty
        </span>
        <span className="font-display text-base sm:text-xl font-medium leading-none text-current">
          Clean
        </span>
      </div>
    </div>
  );
}
