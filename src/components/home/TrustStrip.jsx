const trustBadges = [
  "100% Recommended",
  "Fully Insured",
  "DBS Checked",
  "Local Swansea Team",
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-charcoal/10 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-brand-purple/20 bg-brand-purple-light px-4 py-2 text-[10px] font-sans font-semibold uppercase tracking-[0.16em] text-charcoal"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
