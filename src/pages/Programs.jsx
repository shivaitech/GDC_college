import { useState, useRef, useEffect } from 'react'
import {
  FaChevronLeft, FaChevronRight, FaClock, FaWallet,
  FaArrowRight, FaExternalLinkAlt, FaMountain, FaGraduationCap,
} from 'react-icons/fa'
import { programs, collegeInfo } from '../data/collegeData'

// ─── Extra metadata per program ───────────────────────────────────────────────
const programMeta = {
  1: {
    badge: 'Trending', badgeColor: '#f59e0b', badgeText: '#78350f',
    type: 'UG', tags: ['Trending', 'Arts & Humanities'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  2: {
    badge: 'Trending', badgeColor: '#f59e0b', badgeText: '#78350f',
    type: 'UG', tags: ['Trending', 'Arts & Humanities'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  3: {
    badge: 'Heritage', badgeColor: '#d97706', badgeText: '#fff',
    type: 'UG', tags: ['Arts & Humanities'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1545569289-e2e9bc3c0677?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  4: {
    badge: 'Popular', badgeColor: '#2563eb', badgeText: '#fff',
    type: 'UG', tags: ['Management', 'Social Sciences'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  5: {
    badge: 'In Demand', badgeColor: '#2563eb', badgeText: '#fff',
    type: 'UG', tags: ['Commerce', 'Management', 'Trending'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  6: {
    badge: 'Popular', badgeColor: '#dc2626', badgeText: '#fff',
    type: 'UG', tags: ['Arts & Humanities', 'Social Sciences'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1461360370896-22ded9ba4b55?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
  7: {
    badge: 'New', badgeColor: '#7c3aed', badgeText: '#fff',
    type: 'UG', tags: ['Social Sciences', 'Management'], fee: 'Govt. Rates',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80',
    collaboration: 'Sri Dev Suman University',
  },
}

const allCourses = programs.map(p => ({ ...p, ...programMeta[p.id] }))

const courseTypes = ['All Courses', 'UG Courses', 'PG Courses', 'Specializations', 'Certifications']
const subjectTags  = ['Trending', 'Arts & Humanities', 'Social Sciences', 'Management', 'Commerce']

// ─── Course Card ──────────────────────────────────────────────────────────────
function CourseCard({ course }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-72 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col group hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
      {/* Image + Ribbon Badge */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={course.image}
          alt={course.departmentEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={e => { e.target.src = `https://images.unsplash.com/photo-1562774053-701939374585?w=500&q=80` }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Ribbon / Flag Badge — top-left */}
        <div
          className="absolute top-4 left-0 flex items-center h-8 pl-3 pr-5 text-xs font-bold tracking-wide shadow-md z-10 select-none"
          style={{
            backgroundColor: course.badgeColor,
            color: course.badgeText,
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
            minWidth: '108px',
          }}
        >
          {course.badge}
        </div>

        {/* Affiliation pill — bottom-right of image */}
        <div className="absolute bottom-3 right-3 bg-white/95 rounded-xl px-3 py-2 shadow z-10 max-w-[170px]">
          <p className="text-gray-400 text-[9px] leading-none mb-0.5">Affiliated with</p>
          <p className="text-gray-800 font-semibold text-[11px] leading-tight truncate">{course.collaboration}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 pb-4">
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-[15px] leading-snug min-h-[2.8rem] mb-1">
          B.A. in {course.departmentEn}
        </h3>
        <p className="text-xs text-gray-400 font-hindi mb-4">{course.department}</p>

        {/* Duration + Fee */}
        <div className="flex items-center gap-4 text-[13px] text-gray-500 mt-auto mb-4">
          <span className="flex items-center gap-1.5">
            <FaClock className="text-gray-400 text-xs flex-shrink-0" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <FaWallet className="text-gray-400 text-xs flex-shrink-0" />
            {course.fee}
          </span>
        </div>

        {/* Enroll Button */}
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
  )
}

// ─── Carousel wrapper ─────────────────────────────────────────────────────────
function CourseCarousel({ courses }) {
  const scrollRef  = useRef(null)
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
  }, [courses])

  const CARD_W = 296 // card width + gap
  const scroll = dir => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
  }

  return (
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
        {courses.map(c => (
          <div key={c.id} style={{ scrollSnapAlign: 'center', flexShrink: 0 }}>
            <CourseCard course={c} />
          </div>
        ))}
      </div>

      {/* Arrows — outside track, overlaid */}
      {canLeft && (
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-primary-700 hover:border-primary-300 transition-all"
        >
          <FaChevronLeft className="text-sm" />
        </button>
      )}
      {canRight && (
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-primary-700 hover:border-primary-300 transition-all"
        >
          <FaChevronRight className="text-sm" />
        </button>
      )}
    </div>
  )
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ type }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <FaGraduationCap className="text-6xl text-gray-200 mb-4" />
      <h4 className="text-base font-semibold text-gray-400">No {type} available yet</h4>
      <p className="text-sm text-gray-400 mt-1">We are working on expanding our program offerings. Check back soon!</p>
    </div>
  )
}

// ─── Admission Process ────────────────────────────────────────────────────────
function AdmissionProcess() {
  const steps = [
    { step: '01', title: 'Fill Application',   desc: 'Complete the online form on the Samarth Portal with accurate details and upload all required documents.' },
    { step: '02', title: 'Entrance Exam',       desc: 'Some programs may require an entrance exam to assess your academic aptitude.' },
    { step: '03', title: 'Admission Decision',  desc: 'We notify you after evaluating your application, exam results, and interview (if applicable).' },
    { step: '04', title: 'Enroll & Pay Fee',    desc: 'Confirm your acceptance and complete enrollment by paying the required fee within the deadline.' },
  ]

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-saffron-100 text-saffron-700 mb-3">How to Apply</span>
          <h2 className="text-3xl font-bold text-primary-900">Admission Process</h2>
          <div className="w-12 h-1 bg-saffron-500 rounded-full mx-auto mt-3"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-2xl p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 z-10">
                  <FaArrowRight className="text-gray-300" />
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary-700 text-white text-base font-extrabold flex items-center justify-center mx-auto mb-4 shadow-[0_4px_12px_rgba(37,99,235,0.35)]">
                {s.step}
              </div>
              <h3 className="font-bold text-primary-900 text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={collegeInfo.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-saffron-500 hover:bg-saffron-600 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-md text-sm"
          >
            Apply Online Now <FaExternalLinkAlt className="text-xs" />
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Via Uttarakhand Samarth Portal: <span className="text-primary-600 font-medium">ukadmission.samarth.ac.in</span>
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <div className="relative bg-mountain-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-saffron-400 text-sm">Home</span>
            <span className="text-primary-400">/</span>
            <span className="text-white text-sm">Programs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Academic <span className="text-saffron-400">Programs</span>
          </h1>
          <p className="text-primary-200 text-lg max-w-xl">
            Explore our B.A. programs — 7 departments, 6 semesters, 3 years of transformative learning
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <FaMountain className="text-white text-[250px]" />
      </div>
    </div>
  )
}

// ─── Main Programs Page ───────────────────────────────────────────────────────
export default function Programs() {
  const [activeType, setActiveType] = useState('All Courses')
  const [activeTag,  setActiveTag]  = useState('Trending')

  const filtered = (() => {
    let list = allCourses
    if      (activeType === 'UG Courses')       list = list.filter(c => c.type === 'UG')
    else if (activeType !== 'All Courses')       list = []
    if (list.length === 0) return list
    return list.filter(c => c.tags.includes(activeTag))
  })()

  return (
    <main>
      <PageHero />

      {/* ── Course Listing ─────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">

          {/* Course Type Tabs */}
          <div className="overflow-x-auto">
            <div className="flex border-b border-gray-200 min-w-max">
              {courseTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-[3px] -mb-px ${
                    activeType === type
                      ? 'border-primary-800 text-primary-900'
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Tag Pills */}
          <div className="flex flex-wrap gap-2 mt-5 mb-8">
            {subjectTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-primary-700 text-white font-semibold'
                    : 'text-gray-500 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Carousel or Empty */}
          {filtered.length > 0 ? (
            <CourseCarousel courses={filtered} />
          ) : (
            <EmptyState type={activeType} />
          )}
        </div>
      </section>

      <AdmissionProcess />
    </main>
  )
}
