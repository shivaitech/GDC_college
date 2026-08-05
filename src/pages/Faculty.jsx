import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMountain, FaUserTie, FaChalkboardTeacher, FaSearch } from 'react-icons/fa'
import { teachingStaff, nonTeachingStaff } from '../data/collegeData'

const ARTS_SUBJECTS = ['hindi', 'english', 'sanskrit', 'political science', 'economics', 'history', 'sociology', 'yoga', 'arts']
const SCIENCE_SUBJECTS = ['physics', 'chemistry', 'botany', 'zoology', 'mathematics', 'computer science', 'math']

function isArts(member) {
  const d = member.designation.toLowerCase()
  return ARTS_SUBJECTS.some(s => d.includes(s))
}
function isScience(member) {
  const d = member.designation.toLowerCase()
  return SCIENCE_SUBJECTS.some(s => d.includes(s))
}

function PageHero({ section }) {
  const titles = {
    arts:    { h1a: 'Faculty –', h1b: 'Arts',    sub: 'Meet our dedicated Arts & Humanities educators' },
    science: { h1a: 'Faculty –', h1b: 'Science', sub: 'Meet our dedicated Science & Applied Sciences educators' },
    staff:   { h1a: 'Non-Teaching', h1b: 'Staff', sub: 'Our administrative and support staff keeping the college running' },
  }
  const t = titles[section] || { h1a: 'Faculty &', h1b: 'Staff', sub: 'Meet our dedicated team of educators and administrative staff committed to academic excellence' }
  const breadcrumb = section ? `Faculty / ${t.h1b}` : 'Faculty & Staff'

  return (
    <div className="relative bg-mountain-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-saffron-400 text-sm">Home</span>
            <span className="text-primary-400">/</span>
            <span className="text-white text-sm">{breadcrumb}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.h1a} <span className="text-saffron-400">{t.h1b}</span>
          </h1>
          <p className="text-primary-200 text-lg max-w-xl">{t.sub}</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <FaMountain className="text-white text-[250px]" />
      </div>
    </div>
  )
}

// Generate avatar gradient colors based on initials
function getAvatarBg(initials) {
  const colors = [
    'from-primary-600 to-primary-800',
    'from-saffron-500 to-saffron-700',
    'from-blue-500 to-blue-700',
    'from-purple-500 to-purple-700',
    'from-teal-500 to-teal-700',
    'from-rose-500 to-rose-700',
  ]
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % colors.length
  return colors[idx]
}

function FacultyCard({ member, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div
      ref={ref}
      className={`card p-6 text-center group transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${member.isPrincipal ? 'border-2 border-primary-300 bg-primary-50' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      {/* Avatar / Photo */}
      <div className="relative w-20 h-20 mx-auto mb-4">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.nameEn}
            className="w-20 h-20 rounded-full object-cover shadow-md group-hover:shadow-[0_4px_14px_rgba(255,124,18,0.35)] transition-shadow duration-300"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${getAvatarBg(member.avatar)} items-center justify-center text-white text-xl font-bold shadow-md group-hover:shadow-[0_4px_14px_rgba(255,124,18,0.35)] transition-shadow duration-300`}
          style={{ display: member.photo ? 'none' : 'flex' }}
        >
          {member.avatar}
        </div>
        {member.isPrincipal && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-saffron-500 rounded-full flex items-center justify-center">
            <span className="text-white text-[10px]">★</span>
          </div>
        )}
      </div>

      {member.isPrincipal && (
        <span className="badge bg-primary-700 text-white text-[10px] mb-2">Principal</span>
      )}

      <h3 className="font-bold text-primary-900 text-sm leading-tight font-hindi">{member.name}</h3>
      <p className="text-xs text-gray-500 mt-0.5">{member.nameEn}</p>
      <p className="text-xs text-primary-600 font-medium mt-2 px-2 leading-tight">{member.designation}</p>
      <p className="text-[11px] text-gray-500 mt-1 font-hindi px-2 leading-tight">{member.designationHindi}</p>

      {member.email && member.email !== 'info@gdcbithyani.ac.in' && (
        <a
          href={`mailto:${member.email}`}
          className="flex items-center justify-center gap-1.5 mt-3 text-xs text-primary-600 hover:text-primary-800 transition-colors"
        >
          <FaEnvelope className="text-[11px]" />
          <span className="truncate max-w-[160px]">{member.email}</span>
        </a>
      )}
    </div>
  )
}

function NonTeachingCard({ member, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.nameEn}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
      ) : null}
      <div
        className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarBg(member.nameEn.split(' ').map(w => w[0]).join('').slice(0, 2))} items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        style={{ display: member.photo ? 'none' : 'flex' }}
      >
        {member.id}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 font-hindi leading-tight">{member.name}</p>
        <p className="text-xs text-primary-600">{member.designation}</p>
        <p className="text-[11px] text-gray-400 font-hindi">{member.designationHindi}</p>
      </div>
      <FaUserTie className="text-gray-300 flex-shrink-0" />
    </div>
  )
}

const SECTION_META = {
  arts:    { title: 'कला संकाय', titleEn: 'Faculty – Arts',    badge: 'Arts Department',    bg: 'bg-blue-50',   color: 'text-blue-700'   },
  science: { title: 'विज्ञान संकाय', titleEn: 'Faculty – Science', badge: 'Science Department', bg: 'bg-green-50', color: 'text-green-700' },
  staff:   { title: 'स्टाफ', titleEn: 'Staff',                 badge: 'Non-Teaching Staff', bg: 'bg-gray-50',   color: 'text-gray-700'   },
}

export default function Faculty({ section }) {
  const [search, setSearch] = useState('')

  const baseTeaching = section === 'arts'
    ? teachingStaff.filter(isArts)
    : section === 'science'
      ? teachingStaff.filter(isScience)
      : teachingStaff

  const filteredTeaching = baseTeaching.filter(m =>
    m.nameEn.toLowerCase().includes(search.toLowerCase()) ||
    m.designation.toLowerCase().includes(search.toLowerCase()) ||
    m.name.includes(search)
  )

  const meta = section ? SECTION_META[section] : null

  return (
    <main>
      <PageHero section={section} />

      {/* Intro */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <span className={`badge mb-3 ${meta ? `${meta.bg} ${meta.color}` : 'bg-primary-100 text-primary-700'}`}>
            {meta ? meta.badge : 'Our Team'}
          </span>
          <h2 className="section-title mb-2">{meta ? meta.title : 'संकाय और स्टाफ'}</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle mx-auto mt-4">
            {section === 'staff'
              ? 'Our administrative and support staff ensure the smooth operation of GDC Bithyani.'
              : section === 'arts'
                ? 'Our Arts faculty brings together dedicated educators in Humanities and Social Sciences.'
                : section === 'science'
                  ? 'Our Science faculty comprises expert educators in Natural and Applied Sciences.'
                  : 'Our dedicated faculty and staff members are the backbone of academic excellence at GDC Bithyani. Their passion for education and community development shapes the future of our students.'
            }
          </p>
        </div>
      </section>

      {/* Teaching Staff (not shown when section=staff) */}
      {section !== 'staff' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <FaChalkboardTeacher className="text-primary-600 text-xl" />
                  <h2 className="text-2xl font-bold text-primary-900">
                    {section === 'arts' ? '📓 कला संकाय' : section === 'science' ? '🔬 विज्ञान संकाय' : '📓 शिक्षण स्टाफ'}
                  </h2>
                </div>
                <p className="text-gray-500 text-sm pl-8">
                  {section === 'arts' ? 'Arts Faculty' : section === 'science' ? 'Science Faculty' : 'Teaching Faculty'} — {baseTeaching.length} members
                </p>
              </div>
              {/* Search */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search faculty..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="input-field pl-9 w-full sm:w-56 text-sm py-2.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredTeaching.length > 0
                ? filteredTeaching.map((member, i) => (
                    <FacultyCard key={member.id} member={member} index={i} />
                  ))
                : (
                  <div className="col-span-full text-center py-12 text-gray-400">
                    <FaSearch className="text-4xl mx-auto mb-3 opacity-30" />
                    <p>No faculty found for "{search}"</p>
                  </div>
                )
              }
            </div>
          </div>
        </section>
      )}

      {/* Non-Teaching Staff (shown when section=staff or section=undefined) */}
      {(!section || section === 'staff') && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <FaUserTie className="text-primary-600 text-xl" />
              <h2 className="text-2xl font-bold text-primary-900">🧍‍♂️ गैर शिक्षण कर्मचारी</h2>
            </div>
            <p className="text-gray-500 text-sm mb-8 pl-8">Non-Teaching Staff — {nonTeachingStaff.length} members</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
              {nonTeachingStaff.map((member, i) => (
                <NonTeachingCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
