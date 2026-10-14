import { useState } from 'react'
import { galleryItems, galleryCategories } from '../../data/gallery'
import GalleryModal from './GalleryModal'

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const handleOpen = (item) => setSelectedItem(item)
  const handleClose = () => setSelectedItem(null)

  const handlePrev = () => {
    const idx = filtered.findIndex(i => i.id === selectedItem.id)
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length]
    setSelectedItem(prev)
  }

  const handleNext = () => {
    const idx = filtered.findIndex(i => i.id === selectedItem.id)
    const next = filtered[(idx + 1) % filtered.length]
    setSelectedItem(next)
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`px-4 py-2 rounded-full text-sm font-medium font-sans transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-brand-purple/40 ${
              activeCategory === cat
                ? 'bg-charcoal text-white'
                : 'bg-white border border-charcoal/10 text-charcoal/70 hover:border-charcoal/30 hover:text-charcoal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => handleOpen(item)}
            className="group block w-full rounded-xl overflow-hidden relative focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 break-inside-avoid mb-4 bg-charcoal/5 shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
            aria-label={`View ${item.title}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center justify-between gap-2">
                <span className="bg-white/95 text-charcoal text-xs font-semibold font-sans px-2.5 py-1 rounded-full shadow-xs">
                  {item.category}
                </span>
                <span className="bg-charcoal/85 text-white text-xs font-sans px-2.5 py-1 rounded-full truncate">
                  {item.title}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal/50 font-sans py-12">No images in this category yet.</p>
      )}

      {/* Modal */}
      {selectedItem && (
        <GalleryModal
          item={selectedItem}
          items={filtered}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  )
}
