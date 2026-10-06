import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { services, serviceIcons } from "../../data/services";
import SectionHeading from "../common/SectionHeading";

export default function ServicesPreview() {
  const previewServices = services;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % previewServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [previewServices.length]);

  const renderServiceCard = (service, index, isMobile = false) => {
    const Icon = serviceIcons[service.icon];
    const isFeatured = index === 0;
    const isLarge = index >= 3;
    const gridClass = isFeatured
      ? "lg:col-span-6"
      : isLarge
        ? "lg:col-span-6"
        : "lg:col-span-3";

    return (
      <Link
        key={service.id}
        to="/services"
        className={
          isMobile
            ? "group relative flex w-full flex-shrink-0 flex-col overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_8px_35px_rgba(90,42,145,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-[0_20px_50px_rgba(90,42,145,0.10)]"
            : `group relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_8px_35px_rgba(90,42,145,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-[0_20px_50px_rgba(90,42,145,0.10)] ${gridClass}`
        }
      >
        <div
          className={
            isMobile
              ? "relative aspect-[16/9] overflow-hidden bg-white"
              : `relative overflow-hidden bg-white ${isFeatured || isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`
          }
        >
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute left-5 top-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 backdrop-blur-md">
              <span className="text-[10px] font-bold tracking-[0.16em] text-neutral-800">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-3 w-px bg-neutral-300" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Service
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6 sm:pb-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-purple-light text-brand-purple ring-1 ring-inset ring-brand-purple/20 transition-all duration-300 group-hover:bg-brand-teal-light group-hover:text-brand-purple-dark">
              {Icon && <Icon size={19} strokeWidth={1.8} aria-hidden="true" />}
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-purple">
              Pretty Clean
            </span>
          </div>

          <h3
            className={
              isMobile
                ? "font-display font-semibold leading-[1.1] tracking-[-0.025em] text-neutral-900 text-2xl"
                : `font-display font-semibold leading-[1.1] tracking-[-0.025em] text-neutral-900 ${isFeatured || isLarge ? "text-2xl sm:text-[1.8rem]" : "text-xl"}`
            }
          >
            {service.title}
          </h3>

          <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-neutral-500">
            {service.shortDescription}
          </p>

          <div className="mt-auto pt-8">
            <div className="flex items-center justify-between border-t border-neutral-100 pt-5">
              <div className="flex flex-col">
                <span className="font-sans text-xs font-semibold text-neutral-800">
                  {service.price}
                </span>

                {service.priceNote && (
                  <span className="mt-1 font-sans text-[11px] text-neutral-400">
                    {service.priceNote}
                  </span>
                )}
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple-light text-brand-purple transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white">
                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-32"
      aria-label="Services preview"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Offer"
            heading="Cleaning Services Designed Around You"
            subheading="From regular cleans to detailed deep cleans and end of tenancy cleaning, Pretty Clean provides a professional, friendly service tailored to your needs."
            align="left"
          />

          <Link
            to="/services"
            className="group inline-flex w-fit shrink-0 items-center gap-2.5 rounded-full border border-brand-purple/20 bg-brand-purple-light px-5 py-3 font-sans text-sm font-semibold text-brand-purple transition-all duration-300 hover:border-brand-purple/40 hover:bg-brand-teal-light hover:text-brand-purple-dark"
          >
            View Our Services
            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <div className="overflow-hidden rounded-[28px]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {previewServices.map((service, index) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  {renderServiceCard(service, index, true)}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous service"
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    (current - 1 + previewServices.length) %
                    previewServices.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/25 text-brand-purple transition-colors hover:bg-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>

            <div className="flex items-center justify-center gap-2">
              {previewServices.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  aria-label={`Show ${service.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-brand-purple"
                      : "w-2.5 bg-brand-purple/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next service"
              onClick={() =>
                setActiveIndex(
                  (current) => (current + 1) % previewServices.length,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/25 text-brand-purple transition-colors hover:bg-brand-purple-light focus:outline-none focus:ring-2 focus:ring-brand-purple/40"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5">
          {previewServices.map((service, index) =>
            renderServiceCard(service, index, false),
          )}
        </div>
      </div>
    </section>
  );
}
