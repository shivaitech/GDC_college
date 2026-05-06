import { useInView } from 'react-intersection-observer'
import { FaUsers, FaUserTie, FaChevronRight } from 'react-icons/fa'

// ─── PTA Data ─────────────────────────────────────────────────────────────────
const ptaData = [
  {
    sno: 1,
    tenure: '2021–22',
    patron: 'Principal',
    president: 'Mr. Satendra Singh Negi',
    secretary: 'Mr. Mahavir Singh',
    members: ['Dr. Neeraj Nautiyal'],
  },
  {
    sno: 2,
    tenure: '2022–23',
    patron: 'Principal',
    president: 'Mr. Satendra Singh Negi',
    secretary: 'Mr. Mahavir Singh',
    members: ['Mr. Vidhadat Raturi', 'Mrs. Mamta Verma', 'Dr. Neeraj Nautiyal'],
  },
  {
    sno: 3,
    tenure: '2023–24',
    patron: 'Principal',
    president: 'Mrs. Rajni Devi',
    secretary: 'Mr. Vidhadat Raturi',
    members: ['Mrs. Mamta Verma', 'Mrs. Munni Devi'],
  },
  {
    sno: 4,
    tenure: '2024–25',
    patron: 'Principal',
    president: 'Mr. Satish Singh',
    secretary: 'Mrs. Pooja Rani',
    members: ['Mrs. Urmila Devi', 'Mrs. Maya Devi', 'Mr. Santosh Singh'],
  },
  {
    sno: 5,
    tenure: '2025–26',
    patron: 'Principal',
    president: 'Mr. Manoj Singh',
    secretary: 'Mrs. Pooja Rani',
    members: [
      'Mr. Katheshvar', 'Mr. Sanjay Singh', 'Mr. Kuldeep Singh',
      'Mrs. Pooja Rani', 'Mrs. Surma Devi', 'Mrs. Vimla Devi',
    ],
  },
]

// ─── Student Union Data ───────────────────────────────────────────────────────
const suData = [
  {
    sno: 1,
    tenure: '2022–23',
    president: 'Ms. Prerna Badola',
    vicePresident: '—',
    secretary: 'Ms. Sakshi Giri',
    treasurer: 'Mr. Sagar Binjola',
    others: ['Joint Secretary: University Representative'],
  },
  {
    sno: 2,
    tenure: '2023–24',
    president: 'Ms. Priyanka Gusain',
    vicePresident: 'Ms. Preeti',
    secretary: 'Ms. Lakshmi',
    treasurer: 'Ms. Nikita',
    others: ['Mr. Aman Singh', 'Mr. Rupesh Kumar'],
  },
  {
    sno: 3,
    tenure: '2024–25',
    president: 'Ms. Simran',
    vicePresident: '—',
    secretary: 'Ms. Sakshi',
    treasurer: 'Ms. Sonali',
    others: ['(Elections not conducted by the university)'],
    note: true,
  },
  {
    sno: 4,
    tenure: '2025–26',
    president: 'Mr. Ayush Badola',
    vicePresident: 'Ms. Savita',
    secretary: 'Ms. Nisha',
    treasurer: 'Ms. Pooja',
    others: ['Ms. Anuradha', 'Mr. Harsh Singh'],
  },
]

// ─── Section Heading ─────────────────────────────────────────────────────────
function SectionHeading({ badge, title, titleHindi, icon: Icon, color }) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon className="text-white text-xl" />
      </div>
      <div>
        <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold mb-1 ${color.replace('bg-', 'bg-').replace('-700', '-100')} text-${color.split('-')[1]}-700`}>
          {badge}
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">{title}</h2>
        {titleHindi && <p className="text-gray-500 text-sm font-hindi mt-0.5">{titleHindi}</p>}
      </div>
    </div>
  )
}

// ─── PTA Section ─────────────────────────────────────────────────────────────
function PTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <SectionHeading
            badge="Parents Teachers Association"
            title="Teacher-Parent Association"
            titleHindi="शिक्षक-अभिभावक संघ — कार्यकाल एवं पदाधिकारी"
            icon={FaUserTie}
            color="bg-primary-700"
          />

          {/* Cards for each tenure */}
          <div className="space-y-4">
            {ptaData.map((row, i) => (
              <div
                key={row.sno}
                className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-500 overflow-hidden ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Tenure strip */}
                <div className="flex items-center gap-3 bg-primary-50 border-b border-primary-100 px-5 py-3">
                  <span className="bg-primary-700 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    S.No. {row.sno}
                  </span>
                  <span className="font-bold text-primary-900 text-sm">{row.tenure}</span>
                  <span className="ml-auto text-xs text-primary-500 flex items-center gap-1">
                    <FaChevronRight className="text-[9px]" /> Patron: {row.patron}
                  </span>
                </div>

                {/* Role grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">President</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.president}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">Secretary</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.secretary}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">Members</p>
                    <div className="flex flex-wrap gap-1.5">
                      {row.members.map((m, j) => (
                        <span key={j} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">{m}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Student Union Section ────────────────────────────────────────────────────
function StudentUnionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <SectionHeading
            badge="Student Union"
            title="Student Union"
            titleHindi="छात्र संघ — कार्यकाल एवं पदाधिकारी"
            icon={FaUsers}
            color="bg-saffron-600"
          />

          <div className="space-y-4">
            {suData.map((row, i) => (
              <div
                key={row.sno}
                className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-saffron-200 transition-all duration-500 overflow-hidden ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Tenure strip */}
                <div className="flex items-center gap-3 bg-saffron-50 border-b border-saffron-100 px-5 py-3">
                  <span className="bg-saffron-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    S.No. {row.sno}
                  </span>
                  <span className="font-bold text-saffron-900 text-sm">{row.tenure}</span>
                  {row.note && (
                    <span className="ml-auto text-[10px] text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      Elections not conducted by university
                    </span>
                  )}
                </div>

                {/* Role grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">President</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.president}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">Vice President</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.vicePresident}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">Secretary</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.secretary}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1">Treasurer</p>
                    <p className="text-gray-800 font-semibold text-sm">{row.treasurer}</p>
                  </div>
                </div>
                {row.others && row.others.length > 0 && !row.note && (
                  <div className="px-5 pb-4">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide mb-1.5">Other Members</p>
                    <div className="flex flex-wrap gap-1.5">
                      {row.others.map((m, j) => (
                        <span key={j} className="bg-saffron-50 text-saffron-700 text-xs px-2.5 py-0.5 rounded-full border border-saffron-200">{m}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Associations() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            Student & Parent Bodies
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
            Associations & Unions
          </h1>
          <p className="text-primary-300 text-base max-w-xl mx-auto font-hindi">
            शिक्षक-अभिभावक संघ एवं छात्र संघ — कार्यकाल एवं पदाधिकारी
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-primary-400 text-xs">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Associations</span>
          </div>
        </div>
      </section>

      <PTASection />
      <StudentUnionSection />
    </main>
  )
}
