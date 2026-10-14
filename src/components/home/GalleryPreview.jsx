import { Link } from 'react-router-dom'
import { ArrowRight, SlidersHorizontal } from 'lucide-react'
import { galleryItems } from '../../data/gallery'
import SectionHeading from '../common/SectionHeading'

export default function GalleryPreview() {
  const preview = galleryItems.slice(0, 6)

  return (
    <section className="bg-brand-teal-light py-16 sm:py-20 lg:py-24" aria-label="Gallery preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Our Work & Portfolio"
            heading="Cleaning Results That Speak for Themselves"
            align="left"
          />
          <div className="flex flex-wrap gap-2 flex-shrink-0 self-start sm:self-auto">
            <Link to="/our-work" className="btn-primary text-xs flex items-center gap-1.5">
              <SlidersHorizontal size={14} />
              View Our Work (Before & After)
            </Link>
            <Link to="/gallery" className="btn-ghost text-xs text-charcoal/70 flex items-center gap-1">
              View Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {preview.map((item, i) => (
            <Link
              to="/gallery"
              key={item.id}
              className={`group relative overflow-hidden rounded-xl shadow-xs hover:shadow-md transition-shadow ${i === 0 ? 'sm:col-span-1 row-span-2' : ''}`}
              aria-label={`View ${item.title} in gallery`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? 'h-[280px] sm:h-full min-h-[280px]' : 'h-[160px] sm:h-[180px]'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-white/95 text-charcoal text-xs font-semibold font-sans px-2.5 py-1 rounded-full shadow-xs">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/our-work" className="btn-primary">
            View Our Work (Before & After Slider) <ArrowRight size={15} />
          </Link>
          <Link to="/gallery" className="btn-secondary">
            View Photo Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
