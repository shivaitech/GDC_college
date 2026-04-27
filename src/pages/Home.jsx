import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
  FaChevronLeft, FaChevronRight, FaArrowRight, FaExternalLinkAlt,
  FaMapMarkerAlt, FaMountain, FaLeaf, FaStar, FaQuoteLeft,
  FaBook, FaUsers, FaGraduationCap, FaAward, FaPhone,
  FaEnvelope, FaPlay, FaClock, FaWallet,
} from 'react-icons/fa'
import NewsTicker from '../components/NewsTicker'

// ─── Program metadata (badge, image, tags) ───────────────────────────────────
const programMeta = {
  1: { badge: 'Trending',  badgeColor: '#f59e0b', badgeText: '#78350f', image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&q=80' },
  2: { badge: 'Trending',  badgeColor: '#f59e0b', badgeText: '#78350f', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80' },
  3: { badge: 'Heritage',  badgeColor: '#d97706', badgeText: '#fff',    image: 'https://images.unsplash.com/photo-1545569289-e2e9bc3c0677?w=500&q=80' },
  4: { badge: 'Popular',   badgeColor: '#2563eb', badgeText: '#fff',    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80' },
  5: { badge: 'In Demand', badgeColor: '#2563eb', badgeText: '#fff',    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80' },
  6: { badge: 'Popular',   badgeColor: '#dc2626', badgeText: '#fff',    image: 'https://images.unsplash.com/photo-1461360370896-22ded9ba4b55?w=500&q=80' },
  7: { badge: 'New',       badgeColor: '#7c3aed', badgeText: '#fff',    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80' },
}
import {
  heroSlides, stats, programs, facilities, importantLinks,
  galleryImages, newsItems, collegeInfo, teachingStaff, affiliations
} from '../data/collegeData'

// ─── Hero Slider ──────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const next = () => setCurrent(c => (c + 1) % heroSlides.length)
  const prev = () => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5500)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const slide = heroSlides[current]

  return (
    <>
      {/* ══════════════════════ MOBILE LAYOUT (< md) ══════════════════════ */}
      <section className="md:hidden w-full bg-white">

        {/* Full-width image carousel */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          {heroSlides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={s.image}
                alt={s.subtitle}
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' }}
              />
            </div>
          ))}

          {/* Dot indicators inside image */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); resetTimer() }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2 bg-saffron-500' : 'w-2 h-2 bg-white/70'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text content below image — center aligned */}
        <div className="px-4 py-5 text-center bg-gradient-to-b from-slate-900 to-blue-950">
          <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">
            <FaMapMarkerAlt className="text-saffron-400 text-xs" />
            <span className="text-white/80 text-[0.65rem] font-medium">Yamkeshwar, Pauri Garhwal</span>
          </div>
          <h1
            key={`m-title-${current}`}
            className="text-xl font-extrabold text-white leading-snug mb-1 font-hindi animate-fade-in-up"
          >
            {slide.title}
          </h1>
          <h2
            key={`m-sub-${current}`}
            className="text-base font-bold text-saffron-400 mb-2 animate-fade-in-up"
          >
            {slide.subtitle}
          </h2>
          <p
            key={`m-desc-${current}`}
            className="text-xs text-white/80 mb-4 leading-relaxed animate-fade-in-up"
          >
            {slide.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href={slide.ctaLink.startsWith('http') ? slide.ctaLink : undefined}
              onClick={!slide.ctaLink.startsWith('http') ? e => { e.preventDefault(); window.location.href = slide.ctaLink } : undefined}
              target={slide.ctaLink.startsWith('http') ? '_blank' : undefined}
              rel={slide.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-1.5 bg-saffron-500 hover:bg-saffron-400 text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              {slide.ctaText} <FaArrowRight className="text-xs" />
            </a>
            <Link
              to="/about"
              className="flex items-center gap-1.5 bg-white/10 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              About College
            </Link>
          </div>
        </div>

      </section>

      {/* ══════════════════════ DESKTOP LAYOUT (md+) ══════════════════════ */}
      <section className="hidden md:block relative h-[88vh] min-h-[500px] max-h-[780px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.image}
              alt={s.subtitle}
              className="w-full h-full object-cover animate-hero-zoom"
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80' }}
            />
            <div className="absolute inset-0 bg-hero-gradient" />
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
              style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}
            />
          </div>
        ))}

        {/* Content overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <FaMapMarkerAlt className="text-saffron-400 text-xs" />
                <span className="text-white text-xs font-medium">Yamkeshwar, Pauri Garhwal, Uttarakhand</span>
              </div>
              <h1
                key={`title-${current}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 animate-fade-in-up font-hindi"
              >
                {slide.title}
              </h1>
              <h2
                key={`sub-${current}`}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-saffron-400 mb-4 animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                {slide.subtitle}
              </h2>
              <p
                key={`desc-${current}`}
                className="text-base md:text-lg text-white/85 mb-8 max-w-xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a
                  href={slide.ctaLink.startsWith('http') ? slide.ctaLink : undefined}
                  onClick={!slide.ctaLink.startsWith('http') ? e => { e.preventDefault(); window.location.href = slide.ctaLink } : undefined}
                  target={slide.ctaLink.startsWith('http') ? '_blank' : undefined}
                  rel={slide.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                >
                  {slide.ctaText} <FaArrowRight />
                </a>
                <Link
                  to="/about"
                  className="flex items-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300"
                >
                  About College
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer() }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-8 h-2.5 bg-saffron-500' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Quick info bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4">
            <div className="hidden md:grid grid-cols-4 gap-px bg-white/10 backdrop-blur-md border-t border-white/10">
              {[
                { icon: FaBook,          label: 'BA Programs',    value: '7 Subjects' },
                { icon: FaUsers,         label: 'Faculty',        value: '13 Teachers' },
                { icon: FaGraduationCap, label: 'Established',    value: '2005' },
                { icon: FaAward,         label: 'Recognition',    value: 'Govt. 2018' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 px-6 py-3 bg-black/30">
                  <item.icon className="text-saffron-400 text-lg flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-medium">{item.label}</p>
                    <p className="text-saffron-300 text-sm font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
// ─── Stats Section ────────────────────────────────────────────────────────────
function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-mountain-gradient py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="stat-number text-white">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                ) : '0'}
              </div>
              <p className="text-primary-200 font-medium text-sm mt-1">{stat.label}</p>
              <p className="text-primary-400 text-xs font-hindi">{stat.labelHindi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About Preview ────────────────────────────────────────────────────────────
function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div
            className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%201.png"
                alt="GDC Bithyani Campus"
                className="rounded-2xl w-full h-48 object-cover shadow-card"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80' }}
              />
              <img
                src="https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%202.png"
                alt="GDC Bithyani Building"
                className="rounded-2xl w-full h-48 object-cover shadow-card mt-6"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary-700 text-white rounded-2xl px-5 py-3 shadow-green text-center">
              <p className="text-2xl font-extrabold">20+</p>
              <p className="text-xs text-primary-200">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <span className="badge bg-primary-100 text-primary-700 mb-3">About Us</span>
            <h2 className="section-title mb-2">
              महायोगी गुरु गोरखनाथ<br />
              <span className="text-saffron-600">राजकीय महाविद्यालय</span>
            </h2>
            <div className="section-divider-left"></div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Situated in the breathtaking <strong>Green Mountains of Garhwal Himalaya</strong>, our college
              connects students from Yamkeshwar and surrounding areas with quality higher education.
              Established in <strong>2005</strong>, we have continuously improved our academic standards.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Granted government recognition in <strong>2017 and 2018</strong>, we are now proudly established
              as the "Mahayogi Guru Gorakhnath Rajkiya Mahavidyalaya" — affiliated to
              <strong> Sri Dev Suman Uttarakhand University</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: FaLeaf,       text: 'Green Mountains Campus' },
                { icon: FaAward,      text: 'Govt. Recognized (2018)' },
                { icon: FaGraduationCap, text: 'UGC Affiliated Programs' },
                { icon: FaStar,       text: 'Quality Education' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <item.icon className="text-primary-600 flex-shrink-0" />
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <Link to="/about" className="btn-primary">
                Read More <FaArrowRight />
              </Link>
              <a
                href={collegeInfo.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-saffron"
              >
                Apply Now
              </a>
            </div>

            {/* Affiliation badges */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-widest mb-3">Affiliated To</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {affiliations.map(aff => (
                  <div key={aff.name} className={`flex items-center gap-3 rounded-xl px-4 py-3 border flex-1 ${
                    aff.current ? 'bg-primary-50 border-primary-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <img
                      src={aff.logo}
                      alt={aff.name}
                      className="w-10 h-10 object-contain rounded-lg bg-white p-0.5 flex-shrink-0"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                    <div className="min-w-0">
                      {aff.current && <span className="text-[9px] bg-primary-700 text-white px-1.5 py-0.5 rounded font-semibold">Current</span>}
                      <p className="text-gray-900 text-xs font-bold leading-tight mt-0.5 truncate">{aff.name}</p>
                      <p className="text-gray-400 text-[10px]">{aff.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Tribute Section ──────────────────────────────────────────────────────────
function TributeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="badge bg-saffron-100 text-saffron-700 mb-3">Tribute / आभार</span>
          <h2 className="section-title">आभार संदेश</h2>
          <div className="section-divider"></div>
        </div>
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
            {/* Top saffron strip */}
            <div className="h-1.5 bg-gradient-to-r from-saffron-400 via-amber-300 to-saffron-500" />
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="rounded-2xl overflow-hidden w-full max-w-[180px] border-4 border-saffron-100 shadow-lg">
                    <img
                      src="https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/message.png"
                      alt="Late Anand Singh Bisht Ji"
                      className="w-full object-cover"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">स्व० श्री आनन्द सिंह बिष्ट जी</p>
                    <p className="text-xs text-gray-500 mt-0.5">संस्थापक / मंत्री – शिक्षा समिति</p>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-3 text-sm text-gray-700 leading-relaxed">
                  <FaQuoteLeft className="text-saffron-300 text-3xl" />
                  <p className="font-hindi">
                    महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी (यमकेश्वर) आज इस मंजिल की ओर
                    अग्रसर हो गया है जहां से महाविद्यालय की अनवरत प्रगति दृष्टिगोचर प्रतीत होती है।
                  </p>
                  <p className="font-hindi">
                    <strong>स्व० श्री आनन्द सिंह बिष्ट जी</strong>, मंत्री/प्रबन्धक महायोगी गुरु गोरखनाथ
                    महाविद्यालय बिथ्याणी (यमकेश्वर) और शिक्षा समिति के अथक प्रयासों का ही यह प्रतिफल है।
                  </p>
                  <p className="font-hindi">
                    महाविद्यालय के राजकीयकरण के साथ ही इसे स्नातकोत्तर महाविद्यालय के रूप में देखने के लिए
                    मा० बिष्ट जी प्रबल इच्छुक रहे हैं। उनकी शुभकामनाएं एवम् आशीर्वाद सदैव महाविद्यालय के साथ हैं।
                  </p>
                  <p className="italic text-gray-400 text-xs font-hindi">
                    विकट व विपरीत परिस्थितियों में महाविद्यालय स्थापना एवं संचालन में आपका सहयोग सदैव स्मरणीय रहेगा।
                  </p>
                  <p className="font-semibold text-primary-800 text-sm mt-2">
                    — महाविद्यालय परिवार की ओर से आभार
                  </p>
                </div>
              </div>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-saffron-500 via-amber-300 to-saffron-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Programs Section ─────────────────────────────────────────────────────────
function ProgramsSection() {
  const scrollRef = useRef(null)
  const [canLeft,  setCanLeft]  = useState(false)
  const [canRight, setCanRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 8)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    updateArrows()
    const el = scrollRef.current
    el?.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el?.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const CARD_W = 296
  const scroll = dir => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gray-50 bg-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge bg-primary-100 text-primary-700 mb-3">Our Programs</span>
          <h2 className="section-title">Bachelor of Arts (B.A.)</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle mx-auto mt-3">
            6-Semester B.A. programs across 7 departments — empowering students with knowledge,
            critical thinking, and cultural understanding.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory',
              paddingLeft: 'max(1rem, calc(50% - 140px))',
              paddingRight: 'max(1rem, calc(50% - 140px))',
            }}
          >
            {programs.map(prog => {
              const meta = programMeta[prog.id]
              return (
                <div key={prog.id} className="flex-shrink-0 w-[276px] sm:w-72" style={{ scrollSnapAlign: 'center' }}>
                <div className="w-full bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col group hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={meta.image}
                      alt={prog.departmentEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    {/* Ribbon badge */}
                    <div
                      className="absolute top-4 left-0 flex items-center h-8 pl-3 pr-5 text-xs font-bold tracking-wide shadow-md z-10 select-none"
                      style={{ backgroundColor: meta.badgeColor, color: meta.badgeText, clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)', minWidth: '108px' }}
                    >
                      {meta.badge}
                    </div>
                    {/* Affiliation pill */}
                    <div className="absolute bottom-3 right-3 bg-white/95 rounded-xl px-3 py-2 shadow z-10 max-w-[170px]">
                      <p className="text-gray-400 text-[9px] leading-none mb-0.5">Affiliated with</p>
                      <p className="text-gray-800 font-semibold text-[11px] leading-tight truncate">Sri Dev Suman University</p>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5 pb-4">
                    <h3 className="font-bold text-gray-900 text-[15px] leading-snug min-h-[2.8rem] mb-1">B.A. in {prog.departmentEn}</h3>
                    <p className="text-xs text-gray-400 font-hindi mb-4">{prog.department}</p>
                    <div className="flex items-center gap-4 text-[13px] text-gray-500 mt-auto mb-4">
                      <span className="flex items-center gap-1.5"><FaClock className="text-gray-400 text-xs flex-shrink-0" />{prog.duration}</span>
                      <span className="flex items-center gap-1.5"><FaWallet className="text-gray-400 text-xs flex-shrink-0" />Govt. Rates</span>
                    </div>
                    <a
                      href={collegeInfo.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0f172a] hover:bg-primary-800 text-white text-[13px] font-semibold rounded-xl transition-colors duration-200 group/btn"
                    >
                      Enroll For Course
                      <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            )
            })}
          </div>

          {/* Arrows overlaid */}
          {canLeft && (
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="absolute left-0 top-[40%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-primary-700 hover:border-primary-300 transition-all"
            >
              <FaChevronLeft className="text-sm" />
            </button>
          )}
          {canRight && (
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="absolute right-0 top-[40%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-primary-700 hover:border-primary-300 transition-all"
            >
              <FaChevronRight className="text-sm" />
            </button>
          )}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs" className="btn-primary">
            View All Programs <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Principal's Message ──────────────────────────────────────────────────────
function PrincipalMessage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`card p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-saffron-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Photo */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-primary-100 border-4 border-primary-200 overflow-hidden mb-3 shadow-green">
                  <img
                    src="https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/prinj.jpg"
                    alt="Principal"
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%231b844d"/><text x="50" y="60" font-size="36" text-anchor="middle" fill="white" font-family="serif">YS</text></svg>'
                    }}
                  />
                </div>
                <h4 className="font-bold text-primary-900 text-center text-sm">Prof. Yogesh Kumar Sharma</h4>
                <p className="text-gray-500 text-xs text-center">Principal & Professor, Physics</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-saffron-400 text-xs" />
                  ))}
                </div>
              </div>
              {/* Message */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="badge bg-primary-700 text-white">Principal's Message</div>
                  <div className="badge bg-saffron-100 text-saffron-700">प्राचार्य का संदेश</div>
                </div>
                <FaQuoteLeft className="text-primary-200 text-4xl mb-3" />
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Education introduces students to the available literary and cultural heritage, enhancing the
                  creative and skill-learning capabilities of human life. Mahayogi Guru Gorakhnath Rajkiya
                  Mahavidyalaya Bithyani strives to impart up-to-date factual knowledge in various fields of
                  life while integrating the socio-cultural traditions of India.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-3">
                  Our aim is to create a breeding ground where human life can be transformed into a value-based,
                  civilized, rational and awakened citizen who can contribute meaningfully to the strengthening
                  of brotherhood and progressive society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Facilities Section ───────────────────────────────────────────────────────
function FacilitiesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-primary-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge bg-primary-800 text-primary-200 mb-3">Campus Life</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Facilities & Infrastructure</h2>
          <div className="section-divider"></div>
          <p className="text-primary-300 mt-3 max-w-xl mx-auto">
            Modern facilities supporting holistic education in a serene mountain environment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((fac, i) => (
            <div
              key={i}
              className={`bg-primary-900 border border-primary-800 rounded-2xl p-6 hover:border-primary-600 transition-all duration-700 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{fac.icon}</div>
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-saffron-400 transition-colors">
                {fac.title}
              </h3>
              <p className="text-primary-400 text-xs font-hindi mb-2">{fac.titleHindi}</p>
              <p className="text-primary-300 text-sm leading-relaxed">{fac.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Enquiry & Map Section ────────────────────────────────────────────────────
function EnquirySection() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', course: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const courseOptions = [
    'B.A. – Hindi', 'B.A. – English', 'B.A. – Sanskrit',
    'B.A. – Political Science', 'B.A. – Economics',
    'B.A. – History', 'B.A. – Sociology',
  ]

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.course) e.course = 'Please select a course'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const Field = ({ id, label, type = 'text', placeholder, error, children }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} <span className="text-red-500">*</span>
      </label>
      {children || (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          className={`w-full px-4 py-2.5 rounded-xl border ${error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition`}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="badge bg-primary-100 text-primary-700 mb-3">Admissions 2025–26</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Enquire &amp; Find Us</h2>
          <div className="section-divider"></div>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Fill in your details and we'll get back to you, or find us on the map
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">

          {/* ── Left: Enquiry Form ── */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            {/* Blue top accent strip */}
            <div className="bg-primary-800 px-8 py-5">
              <h3 className="text-white font-bold text-lg">Send an Enquiry</h3>
              <p className="text-primary-200 text-sm mt-0.5">Our team will respond within 24 hours</p>
            </div>

            <div className="px-8 py-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xl">Enquiry Submitted!</p>
                    <p className="text-gray-500 text-sm mt-1">Thank you, <span className="font-semibold text-primary-700">{form.name}</span>. We'll contact you soon.</p>
                  </div>
                  <button
                    onClick={() => { setForm({ name: '', mobile: '', email: '', course: '' }); setSubmitted(false) }}
                    className="mt-2 text-primary-700 text-sm font-semibold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <Field id="name" label="Full Name" placeholder="e.g. Rahul Negi" error={errors.name} />
                  <Field id="mobile" label="Mobile" type="tel" placeholder="10-digit mobile number" error={errors.mobile} />
                  <Field id="email" label="Email" type="email" placeholder="you@example.com" error={errors.email} />
                  <Field id="course" label="Course" error={errors.course}>
                    <select
                      id="course"
                      value={form.course}
                      onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.course ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition`}
                    >
                      <option value="">Select a course</option>
                      {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>
                  <button
                    type="submit"
                    className="w-full bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2"
                  >
                    Submit Enquiry <FaArrowRight />
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Or call us directly at{' '}
                    <a href={`tel:${collegeInfo.phones[0]}`} className="text-primary-600 font-semibold hover:underline">
                      {collegeInfo.phones[0]}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── Right: Map + Contact ── */}
          <div className="flex flex-col gap-5">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex-1 min-h-[280px]">
              <iframe
                title="GDC Bithyani Location"
                src="https://maps.google.com/maps?q=Mahayogi+Guru+Gorakhnath+Govt+Degree+College+Bithyani+Yamkeshwar+Pauri+Garhwal+Uttarakhand&output=embed&z=13"
                width="100%"
                height="100%"
                style={{ minHeight: '280px', border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: FaPhone,       label: 'Call Us',  value: collegeInfo.phones[0], href: `tel:${collegeInfo.phones[0]}`, bg: 'bg-blue-50', iconColor: 'text-primary-700' },
                { icon: FaEnvelope,    label: 'Email Us', value: 'mggmbithyani05\n@gmail.com', href: `mailto:${collegeInfo.email}`, bg: 'bg-orange-50', iconColor: 'text-saffron-600' },
                { icon: FaMapMarkerAlt,label: 'Address',  value: 'Yamkeshwar,\nPauri Garhwal', href: '#', bg: 'bg-red-50', iconColor: 'text-red-500' },
              ].map(({ icon: Icon, label, value, href, bg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  className={`${bg} rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow group`}
                >
                  <div className={`w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                    <Icon className={`${iconColor} text-base`} />
                  </div>
                  <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-gray-800 text-xs font-semibold leading-tight whitespace-pre-line">{value}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Gallery Preview ──────────────────────────────────────────────────────────
function GalleryPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge bg-primary-100 text-primary-700 mb-3">Photo Gallery</span>
          <h2 className="section-title">College Life</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.slice(0, 8).map((img, i) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-700 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${i === 0 || i === 5 ? 'row-span-2' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s`, aspectRatio: (i === 0 || i === 5) ? '1/2' : '1/1' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={e => { e.target.src = `https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=70&sig=${i}` }}
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-all duration-300 flex items-center justify-center">
                <FaPlay className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute top-2 right-2 badge bg-black/50 text-white text-[10px]">
                {img.category}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── News Section ─────────────────────────────────────────────────────────────
function NewsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* News */}
          <div className="lg:col-span-2">
            <span className="badge bg-red-100 text-red-600 mb-3">Latest News</span>
            <h2 className="section-title mb-2">ताजा खबर</h2>
            <div className="section-divider-left mb-6"></div>

            <div className="space-y-3">
              {newsItems.map((item, i) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 transition-opacity duration-700 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  {item.type === 'new' && (
                    <span className="badge bg-red-500 text-white text-[10px] mt-0.5 flex-shrink-0">NEW</span>
                  )}
                  {item.type === 'notice' && (
                    <span className="badge bg-amber-500 text-white text-[10px] mt-0.5 flex-shrink-0">Notice</span>
                  )}
                  {item.type === 'event' && (
                    <span className="badge bg-blue-500 text-white text-[10px] mt-0.5 flex-shrink-0">Event</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 font-hindi leading-relaxed">{item.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <span className="badge bg-primary-100 text-primary-700 mb-3">Important Links</span>
            <h2 className="text-2xl font-bold text-primary-900 mb-2">Useful Resources</h2>
            <div className="section-divider-left mb-6"></div>

            <div className="space-y-2">
              {importantLinks.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-primary-700 transition-colors">{link.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400">{link.category}</span>
                    <FaExternalLinkAlt className="text-[10px] text-gray-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────
function ContactCTA() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg px-8 py-12 border border-slate-200">
          <FaMountain className="text-saffron-500 text-4xl mx-auto mb-4 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            Join Us in the Mountains
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Start your academic journey at GDC Bithyani — where knowledge meets nature
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={collegeInfo.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Apply Online <FaArrowRight />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <FaPhone /> Contact Us
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-500 text-sm">
            <a href={`tel:${collegeInfo.phones[0]}`} className="flex items-center gap-2 hover:text-primary-700 transition-colors">
              <FaPhone className="text-saffron-500" /> {collegeInfo.phones[0]}
            </a>
            <a href={`mailto:${collegeInfo.email}`} className="flex items-center gap-2 hover:text-primary-700 transition-colors">
              <FaEnvelope className="text-saffron-500" /> {collegeInfo.email}
            </a>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-saffron-500" /> Yamkeshwar, Pauri Garhwal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <HeroSlider />
      <NewsTicker />
      <StatsSection />
      <AboutSection />
      <TributeSection />
      <ProgramsSection />
      <PrincipalMessage />
      <FacilitiesSection />
      <EnquirySection />
      <GalleryPreview />
      <NewsSection />
      <ContactCTA />
    </main>
  )
}
