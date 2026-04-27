import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaTimes, FaChevronLeft, FaChevronRight, FaMountain } from 'react-icons/fa'
import { galleryImages } from '../data/collegeData'

function PageHero() {
  return (
    <div className="relative bg-mountain-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-saffron-400 text-sm">Home</span>
            <span className="text-primary-400">/</span>
            <span className="text-white text-sm">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Photo <span className="text-saffron-400">Gallery</span>
          </h1>
          <p className="text-primary-200 text-lg max-w-xl">
            A visual journey through campus life, events and the beautiful Himalayan surroundings
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <FaMountain className="text-white text-[250px]" />
      </div>
    </div>
  )
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes />
      </button>
      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <FaChevronLeft />
      </button>
      {/* Image */}
      <img
        src={img.src}
        alt={img.alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()}
        onError={e => { e.target.src = `https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80` }}
      />
      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <FaChevronRight />
      </button>
      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-white font-medium">{img.alt}</p>
        <p className="text-gray-400 text-sm">{index + 1} / {images.length}</p>
      </div>
    </div>
  )
}

function GalleryGrid({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const openLightbox = i => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImg = () => setLightboxIndex(i => (i - 1 + images.length) % images.length)
  const nextImg = () => setLightboxIndex(i => (i + 1) % images.length)

  return (
    <>
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => openLightbox(i)}
            className={`relative overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-700 ${
              inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: `${i * 0.05}s`, aspectRatio: '1/1' }}
            aria-label={`View ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={e => { e.target.src = `https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=70&sig=${i}` }}
            />
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-all duration-300 flex flex-col items-center justify-end p-3">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <p className="text-white text-xs font-medium">{img.alt}</p>
                <span className="inline-block mt-1 text-[10px] bg-white/20 text-white rounded-full px-2 py-0.5">{img.category}</span>
              </div>
            </div>
            <div className="absolute top-2 right-2">
              <span className="badge bg-black/50 text-white text-[10px]">{img.category}</span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}
    </>
  )
}

export default function Gallery() {
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))]
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <main>
      <PageHero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Photo Gallery</span>
            <h2 className="section-title">महाविद्यालय फोटो गैलरी</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle mx-auto mt-3">
              Glimpses of college life, events, and the scenic Himalayan campus environment
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-700 text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  ({cat === 'All' ? galleryImages.length : galleryImages.filter(i => i.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />

          <p className="text-center text-sm text-gray-400 mt-8">
            Click on any image to view in full screen
          </p>
        </div>
      </section>
    </main>
  )
}
