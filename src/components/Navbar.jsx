import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  FaBars, FaTimes, FaExternalLinkAlt, FaChevronDown, FaGlobe,
} from 'react-icons/fa'
import { collegeInfo } from '../data/collegeData'

// ─── Nav config — Hindi + English labels ─────────────────────────────────────
const navConfig = [
  { label: 'मुख्य पृष्ठ',       labelEn: 'Home',             to: '/', exact: true },
  {
    label:   'अधिक जानें',
    labelEn: 'Know More',
    dropdown: [
      { label: 'हमारे बारे में',    labelEn: 'About Us',         to: '/about',   internal: true },
      { label: 'संकाय एवं स्टाफ',  labelEn: 'Faculty & Staff',  to: '/faculty', internal: true },
      { label: 'हमारी समिति',       labelEn: 'Our Committee',    href: 'https://gdcbithyani.ac.in/commitee.php' },
    ],
  },
  {
    label:   'हमारे पाठ्यक्रम',
    labelEn: 'Our Program',
    dropdown: [
      { label: 'बी.ए. कार्यक्रम',       labelEn: 'B.A. Programs',   to: '/programs', internal: true },
      { label: 'बी.एससी. कार्यक्रम',    labelEn: 'B.Sc. Programs',  to: '/programs', internal: true },
      { label: 'ऑनलाइन आवेदन',           labelEn: 'Apply Online',     href: 'https://ukadmission.samarth.ac.in/' },
    ],
  },
  {
    label:   'शैक्षणिक',
    labelEn: 'Academics',
    dropdown: [
      { label: 'पुस्तकालय',                   labelEn: 'Library',               href: 'https://gdcbithyani.ac.in/Library.php' },
      { label: 'शैक्षणिक कैलेंडर',            labelEn: 'Academic Calendar',     href: 'https://gdcbithyani.ac.in/calender.php' },
      { label: 'पाठ्यक्रम एवं कार्यक्रम',    labelEn: 'Syllabus & Programs',   to: '/programs', internal: true },
      { label: 'SDSUV विश्वविद्यालय',          labelEn: 'SDSUV University',       href: 'https://www.sdsuv.ac.in/' },
    ],
  },
  { label: 'NAAC & IQAC',   labelEn: 'NAAC & IQAC',   href: 'http://www.naac.gov.in/' },
  { label: 'NIRF / AISHE',  labelEn: 'NIRF / AISHE',  href: 'http://aishe.nic.in/aishe/home' },
  {
    label:   'गतिविधियाँ',
    labelEn: 'Activities',
    dropdown: [
      { label: 'एनएसएस इकाई',              labelEn: 'NSS Unit',              to: '/about',   internal: true },
      { label: 'सांस्कृतिक गतिविधियाँ',   labelEn: 'Cultural Activities',   to: '/gallery', internal: true },
      { label: 'खेलकूद',                    labelEn: 'Sports',                to: '/gallery', internal: true },
      { label: 'इवेंट गैलरी',              labelEn: 'Events Gallery',        to: '/gallery', internal: true },
    ],
  },
  {
    label:   'छात्र सहायता',
    labelEn: 'Student Supports',
    dropdown: [
      { label: 'ऑनलाइन आवेदन (समर्थ)',          labelEn: 'Apply Online (Samarth)',    href: 'https://ukadmission.samarth.ac.in/' },
      { label: 'राष्ट्रीय छात्रवृत्ति',         labelEn: 'National Scholarships',     href: 'https://scholarships.gov.in/' },
      { label: 'राष्ट्रीय डिजिटल पुस्तकालय',   labelEn: 'National Digital Library',  href: 'https://ndl.iitkgp.ac.in/' },
      { label: 'UGC India',                       labelEn: 'UGC India',                 href: 'https://www.ugc.gov.in/' },
      { label: 'छात्र संघ',                       labelEn: 'Student Union',             to: '/associations', internal: true },
      { label: 'अभिभावक-शिक्षक संघ',             labelEn: 'Parents Teachers Assoc.',   to: '/associations', internal: true },
    ],
  },
  { label: 'गैलरी',        labelEn: 'Gallery',   to: '/gallery' },
  {
    label:   'डाउनलोड',
    labelEn: 'Downloads',
    dropdown: [
      { label: 'महाविद्यालय प्रॉस्पेक्टस',  labelEn: 'College Prospectus',    href: '/Mahayogi%20Guru%20Gorakhnath%20Govt/syllabus%20%20pdf/college%20handbook%20prospectus%20pdf.pdf' },
      { label: 'मेरिट लिस्ट – बी.ए. प्रथम', labelEn: 'Merit List – B.A. I',   href: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/News/First%20Marit%20List%20BA%20I%20sem%20.pdf' },
      { label: 'शुल्क संरचना 2025–26',       labelEn: 'Fee Structure 2025–26', href: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/News%20paper/First%20Mertit%20list%20BA%20I%20sem.pdf' },
    ],
  },
  { label: 'संपर्क करें',  labelEn: 'Contact',   to: '/contact' },
]

// helper to pick label based on lang
const lbl = (item, lang) => lang === 'en' ? (item.labelEn || item.label) : item.label

// ─── Desktop hover-dropdown (JS-controlled so overflow-x never clips panel) ──
function DesktopDropdown({ item, lang }) {
  const [open, setOpen] = useState(false)
  let closeTimer = null

  const handleEnter = () => { clearTimeout(closeTimer); setOpen(true) }
  const handleLeave = () => { closeTimer = setTimeout(() => setOpen(false), 120) }

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-0.5 px-1.5 xl:px-2 py-1.5 text-[0.68rem] xl:text-[0.81rem] font-semibold rounded transition-colors whitespace-nowrap uppercase tracking-wide ${
          open ? 'bg-white/20 text-white' : 'text-primary-100 hover:bg-white/10 hover:text-white'
        }`}
      >
        {lbl(item, lang)}
        <FaChevronDown className={`text-[7px] opacity-70 transition-transform duration-200 flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      {/* Panel — rendered only when open so it never affects layout */}
      {open && (
        <div className="absolute top-full left-0 min-w-[210px] bg-white rounded-b-lg rounded-tr-lg shadow-xl border border-gray-100 z-[200] py-1 notranslate" translate="no">
          {item.dropdown.map((sub, j) =>
            sub.internal ? (
              <Link
                key={j}
                to={sub.to}
                className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {lbl(sub, lang)}
              </Link>
            ) : (
              <a
                key={j}
                href={sub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 text-xs text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors gap-2"
              >
                {lbl(sub, lang)}
                <FaExternalLinkAlt className="text-[8px] opacity-40 flex-shrink-0" />
              </a>
            )
          )}
        </div>
      )}
    </div>
  )
}

// ─── Language Dropdown ───────────────────────────────────────────────────────
const LANGS = [
  { code: 'hi', label: 'हिंदी'   },
  { code: 'en', label: 'English' },
]

function LangDropdown({ lang, onSelect }) {
  const [open, setOpen] = useState(false)
  const current = LANGS.find(l => l.code === lang) || LANGS[0]

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [open])

  return (
    <div className="relative" onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1 px-2 py-1 rounded border border-white/30 text-[0.78rem] font-bold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
      >
        <FaGlobe className="text-[9px] opacity-80" />
        {current.label}
        <FaChevronDown className={`text-[8px] opacity-70 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-[300] py-1 min-w-[110px]">
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { onSelect(l.code); setOpen(false) }}
              className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                lang === l.code
                  ? 'bg-primary-50 text-primary-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {l.label}
              {lang === l.code && <span className="text-primary-500 text-[10px]">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [scrolled,      setScrolled]      = useState(false)
  const [lang,          setLang]          = useState(() =>
    (typeof window !== 'undefined' && window._gdcGetLang) ? window._gdcGetLang() : 'hi'
  )
  const location = useLocation()

  const selectLang = (code) => {
    setLang(code)
    if (window._gdcSetLang) window._gdcSetLang(code)
  }

  // Sync React lang state when GT changes language externally (auto-init)
  useEffect(() => {
    const handler = (e) => setLang(e.detail.lang)
    window.addEventListener('gdcLangChange', handler)
    return () => window.removeEventListener('gdcLangChange', handler)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenAccordion(null)
  }, [location.pathname])

  const toggleAccordion = (i) => setOpenAccordion(o => o === i ? null : i)

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>

      {/* ── Row 1: Navigation ── */}
      <div className="bg-primary-800">
        <nav className="w-full px-2 sm:px-3 notranslate" translate="no">
          <div className="flex items-center h-10 sm:h-11 gap-1">

            {/* Desktop nav — all items with dropdowns (lg+) */}
            <div className="hidden lg:flex items-center flex-1 h-full">
              {navConfig.map((item, i) => {
                if (item.dropdown) return <DesktopDropdown key={i} item={item} lang={lang} />
                if (item.to) return (
                  <NavLink
                    key={i}
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `px-1.5 xl:px-2 py-1.5 text-[0.68rem] xl:text-[0.81rem] font-semibold rounded transition-colors whitespace-nowrap uppercase tracking-wide ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'text-primary-100 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >{lbl(item, lang)}</NavLink>
                )
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-1.5 xl:px-2 py-1.5 text-[0.68rem] xl:text-[0.81rem] font-semibold rounded transition-colors whitespace-nowrap uppercase tracking-wide text-primary-100 hover:bg-white/10 hover:text-white"
                  >{lbl(item, lang)}</a>
                )
              })}
            </div>

            {/* Mobile shortcut links (< lg) */}
            <div className="flex lg:hidden items-center gap-0.5 flex-1">
              {[
                { to: '/',         label: 'Home' },
                { to: '/about',    label: 'About' },
                { to: '/programs', label: 'Programs' },
                { to: '/gallery',  label: 'Gallery' },
              ].map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-2 sm:px-3 py-1 text-[0.68rem] sm:text-xs font-semibold rounded transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'text-primary-100 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >{link.label}</NavLink>
              ))}
            </div>

            {/* Right: phone (xl+) + Lang toggle + Apply + Hamburger */}
            <div className="flex items-center gap-2 ml-auto flex-shrink-0">
              <a href={`tel:${collegeInfo.phones[0]}`}
                 className="hidden xl:flex items-center gap-1 text-primary-200 text-xs hover:text-white transition-colors">
                📞 {collegeInfo.phones[0]}
              </a>
              <LangDropdown lang={lang} onSelect={selectLang} />
              <a
                href={collegeInfo.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-saffron-500 hover:bg-saffron-400 text-white px-3 py-1 rounded text-xs font-semibold transition-colors whitespace-nowrap"
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

        {/* ── Mobile Full Menu (< lg) ── */}
        <div className={`lg:hidden bg-primary-900 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'}`}>
          <div className="px-3 py-2 flex flex-col gap-0.5">
            {navConfig.map((item, i) => {
              if (!item.dropdown) {
                if (item.to) return (
                  <NavLink
                    key={i}
                    to={item.to}
                    end={item.exact}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white font-semibold'
                          : 'text-primary-100 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >{lbl(item, lang)}</NavLink>
                )
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded text-sm font-medium text-primary-100 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {lbl(item, lang)}
                    <FaExternalLinkAlt className="text-[9px] opacity-50" />
                  </a>
                )
              }
              // Accordion dropdown
              const isOpen = openAccordion === i
              return (
                <div key={i}>
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded text-sm font-medium text-primary-100 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {lbl(item, lang)}
                    <FaChevronDown className={`text-xs opacity-70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                    <div className="ml-4 border-l border-white/10 pl-3 py-1 flex flex-col gap-0.5">
                      {item.dropdown.map((sub, j) =>
                        sub.internal ? (
                          <Link
                            key={j}
                            to={sub.to}
                            className="block px-3 py-2 rounded text-xs text-primary-200 hover:bg-white/10 hover:text-white transition-colors"
                          >{lbl(sub, lang)}</Link>
                        ) : (
                          <a
                            key={j}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 rounded text-xs text-primary-200 hover:bg-white/10 hover:text-white transition-colors"
                          >
                            {lbl(sub, lang)}
                            <FaExternalLinkAlt className="text-[8px] opacity-50 flex-shrink-0" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
            {/* Apply CTA */}
            <a
              href={collegeInfo.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mx-2 my-2 py-2.5 bg-saffron-500 text-white rounded font-semibold text-sm hover:bg-saffron-600 transition-colors"
            >
              Apply Online – Admission 2025–26
            </a>
          </div>
        </div>
      </div>

      {/* ── Row 2: Institutional Identity ── */}
      <div className="bg-white border-b border-gray-200 w-full">

        {/* SCROLLED: compact single line — full width, no whitespace */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="w-full px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3">
            {/* Left: logo + name */}
            <div className="flex items-center gap-2 min-w-0">
              <Link to="/" className="flex-shrink-0">
                <img src="/logo.png" alt="GDC Bithyani"
                  className="w-8 h-8 rounded-full object-cover" />
              </Link>
              <p className="font-hindi font-bold text-red-600 leading-tight truncate"
                 style={{ fontSize: 'clamp(1.05rem, 2.42vw, 1.52rem)' }}>
                महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी, यमकेश्वर, पौड़ी गढ़वाल
              </p>
            </div>
            {/* Right: affiliation (desktop only) */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <img
                src="/ukr.png"
                alt="Uttarakhand Rajya"
                className="w-10 h-10 object-contain"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="w-px h-8 bg-gray-300 mx-1" />
              <img
                src="/Mahayogi%20Guru%20Gorakhnath%20Govt/Sri_Dev_Suman_Uttarakhand_University_Logo.png"
                alt="SDSUV"
                className="w-10 h-10 object-contain"
                onError={e => { e.target.style.display = 'none' }}
              />
              <p className="text-primary-800 font-semibold text-[0.9rem] leading-tight">
                Affiliated to Sri Dev Suman Uttarakhand University
              </p>
            </div>
          </div>
        </div>

        {/* NOT SCROLLED: full identity block */}
        <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-72 opacity-100'}`}>
          <div className="w-full px-3 sm:px-4 py-2 sm:py-3">

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

            {/* ── Desktop (md+): left-aligned name + right affiliation ── */}
            <div className="hidden md:flex items-center justify-between gap-4 w-full">

              {/* LEFT: logo + college names */}
              <div className="flex items-center gap-3 min-w-0">
                <Link to="/" className="flex-shrink-0">
                  <img src="/logo.png" alt="GDC Bithyani"
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover" />
                </Link>
                <div className="min-w-0">
                  <p className="font-hindi font-extrabold text-red-600 leading-snug"
                     style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.65rem)' }}>
                    महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी
                  </p>
                  <p className="font-hindi font-semibold text-gray-600 leading-tight mt-0.5"
                     style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.05rem)' }}>
                    यमकेश्वर, पौड़ी गढ़वाल, उत्तराखंड – 246121
                  </p>
                  <p className="text-primary-700 font-semibold leading-tight mt-0.5"
                     style={{ fontSize: 'clamp(0.58rem, 1.04vw, 0.87rem)' }}>
                    Mahayogi Gurugorakhnath Govt. Degree College Bithyani, Yamkeswar, Pauri Garhwal, Uttarakhand
                  </p>
                </div>
              </div>

              {/* RIGHT: affiliations */}
              <div className="flex-shrink-0 flex items-center gap-3 border-l border-gray-200 pl-4">
                {/* Uttarakhand Govt Logo */}
                <img
                  src="/ukr.png"
                  alt="Uttarakhand Rajya"
                  className="w-10 h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
                  onError={e => { e.target.style.display = 'none' }}
                />
                {/* Separator */}
                <div className="hidden lg:block w-px h-10 bg-gray-200" />
                {/* Current: SDSUV */}
                <a href="https://www.sdsuv.ac.in/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 group">
                  <img
                    src="/Mahayogi%20Guru%20Gorakhnath%20Govt/Sri_Dev_Suman_Uttarakhand_University_Logo.png"
                    alt="SDSUV"
                    className="w-10 h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
                    onError={e => { e.target.style.display = 'none' }}
                  />
                  <div className="text-right">
                    <p className="text-[0.64rem] text-gray-400 leading-tight">Affiliated to</p>
                    <p className="text-primary-800 font-bold leading-tight text-[0.72rem] lg:text-[0.78rem] group-hover:text-primary-600 transition-colors">
                      Sri Dev Suman<br />Uttarakhand University
                    </p>
                    <p className="text-gray-400 leading-tight text-[0.64rem]">Tehri Garhwal</p>
                  </div>
                </a>
                {/* Separator */}
                <div className="hidden lg:block w-px h-10 bg-gray-200 mx-1" />
                {/* UGC / NAAC badges */}
                <div className="hidden lg:flex flex-col items-center gap-1">
                  <span className="text-[0.61rem] font-bold text-gray-400 uppercase tracking-wide">Recognised by</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-primary-100 text-primary-700 text-[0.64rem] font-bold">UGC</span>
                    <span className="px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 text-[0.64rem] font-bold">NAAC</span>
                    <span className="px-1.5 py-0.5 rounded bg-green-100 text-green-700 text-[0.64rem] font-bold">Govt.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </header>
  )
}
