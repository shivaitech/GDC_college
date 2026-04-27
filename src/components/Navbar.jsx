import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  FaBars, FaTimes, FaHome, FaInfoCircle, FaUsers, FaBook,
  FaImages, FaPhone, FaExternalLinkAlt,
} from 'react-icons/fa'
import { collegeInfo } from '../data/collegeData'

const navLinks = [
  { to: '/',          label: 'Home',        labelHindi: 'होम',            icon: <FaHome /> },
  { to: '/about',     label: 'About Us',    labelHindi: 'हमारे बारे में', icon: <FaInfoCircle /> },
  { to: '/faculty',   label: 'Faculty',     labelHindi: 'संकाय',          icon: <FaUsers /> },
  { to: '/programs',  label: 'Programs',    labelHindi: 'पाठ्यक्रम',     icon: <FaBook /> },
  { to: '/gallery',   label: 'Gallery',     labelHindi: 'गैलरी',          icon: <FaImages /> },
  { to: '/contact',   label: 'Contact',     labelHindi: 'संपर्क',         icon: <FaPhone /> },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`} style={{ overflow: 'hidden' }}>

      {/* ── Row 1: Navigation ── */}
      <div className="bg-primary-800">
        <nav className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-10 sm:h-11">

            {/* Desktop nav links (lg+) */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-sm font-medium rounded transition-colors duration-150 ${
                      isActive
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile/tablet shortcut links (< lg) */}
            <div className="flex lg:hidden items-center gap-0.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/faculty', label: 'Faculty' },
                { to: '/programs', label: 'Programs' },
              ].map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-2 sm:px-3 py-1 text-[0.7rem] sm:text-xs font-medium rounded transition-colors duration-150 ${
                      isActive
                        ? 'bg-white/20 text-white font-semibold'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right: contact info + Apply + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <a href={`mailto:${collegeInfo.email}`}
                 className="hidden xl:flex items-center gap-1 text-primary-200 text-xs hover:text-white transition-colors">
                ✉ {collegeInfo.email}
              </a>
              <a href={`tel:${collegeInfo.phones[0]}`}
                 className="hidden lg:flex items-center gap-1 text-primary-200 text-xs hover:text-white transition-colors">
                📞 {collegeInfo.phones[0]}
              </a>
              <a
                href={collegeInfo.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-saffron-500 hover:bg-saffron-400 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
              >
                Apply <FaExternalLinkAlt className="text-[9px]" />
              </a>
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="lg:hidden p-1.5 rounded text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>

          </div>
        </nav>

        {/* ── Mobile Dropdown ── */}
        <div className={`lg:hidden bg-primary-900 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="container mx-auto px-3 py-2 flex flex-col gap-0.5">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-primary-100 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                <span className="ml-auto text-xs opacity-50 font-hindi">{link.labelHindi}</span>
              </NavLink>
            ))}
            <a
              href={collegeInfo.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-2 my-1.5 py-2.5 bg-saffron-500 text-white rounded font-semibold text-sm hover:bg-saffron-600 transition-colors"
            >
              Apply Online – Admission 2025–26
            </a>
          </div>
        </div>
      </div>

      {/* ── Row 2: Institutional Identity ── */}
      <div className="bg-white border-b border-gray-200 w-full overflow-hidden">

        {/* SCROLLED: compact single line — logo left + name right */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-6 py-1.5 flex items-center gap-2">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.png" alt="GDC Bithyani"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover" />
            </Link>
            <p className="font-hindi font-bold text-red-600 leading-tight truncate"
               style={{ fontSize: 'clamp(0.6rem, 2vw, 0.85rem)' }}>
              महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी, यमकेश्वर, पौड़ी गढ़वाल
            </p>
          </div>
        </div>

        {/* NOT SCROLLED: full identity block */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-60 opacity-100'}`}>
          <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-6 py-2 sm:py-3">

            {/* ── Mobile (< md): stacked center ── */}
            <div className="flex md:hidden flex-col items-center text-center gap-1">
              <img src="/logo.png" alt="GDC Bithyani"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              <p className="font-hindi font-extrabold text-red-600 leading-snug text-[0.82rem] sm:text-[0.95rem] w-full">
                महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी, यमकेश्वर, पौड़ी गढ़वाल, उत्तराखंड
              </p>
              <p className="text-blue-700 font-semibold leading-tight text-[0.68rem] sm:text-[0.75rem] w-full">
                Mahayogi Gurugorakhnath Govt. Degree College Bithyani, Yamkeswar, Pauri Garhwal, Uttarakhand
              </p>
              <p className="text-gray-500 text-[0.62rem]">
                Affiliated to <span className="font-bold text-primary-800">Sri Dev Suman Uttarakhand University</span>, Tehri Garhwal
              </p>
            </div>

            {/* ── Desktop (md+): 3-column ── */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="flex-shrink-0">
                <img src="/logo.png" alt="GDC Bithyani"
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0 text-center">
                <p className="font-hindi font-extrabold text-red-600 leading-snug"
                   style={{ fontSize: 'clamp(0.78rem, 1.5vw, 1.1rem)' }}>
                  महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी, यमकेश्वर पौड़ी गढ़वाल उत्तराखंड
                </p>
                <p className="text-blue-700 font-semibold leading-tight mt-0.5"
                   style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.8rem)' }}>
                  Mahayogi Gurugorakhnath Govt. Degree College Bithyani, Yamkeswar, Pauri Garhwal, Uttarakhand
                </p>
              </div>
              <div className="flex-shrink-0 text-right" style={{ maxWidth: '165px' }}>
                <p className="text-gray-500 leading-tight text-[0.6rem]">Affiliated to</p>
                <p className="text-primary-800 font-bold leading-tight text-[0.65rem]">Sri Dev Suman Uttarakhand University</p>
                <p className="text-gray-400 leading-tight text-[0.58rem]">Badshahithaul, Tehri Garhwal</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </header>
  )
}
