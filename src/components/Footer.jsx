import { Link } from 'react-router-dom'
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe,
  FaExternalLinkAlt, FaArrowRight,
  FaFacebook, FaYoutube, FaWhatsapp
} from 'react-icons/fa'
import { collegeInfo, importantLinks } from '../data/collegeData'

const quickLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/faculty',  label: 'Faculty & Staff' },
  { to: '/programs', label: 'Our Programs' },
  { to: '/gallery',  label: 'Gallery' },
  { to: '/contact',  label: 'Contact Us' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white text-gray-800 border-t border-slate-200">
      {/* ─── CTA Strip ────────────────────────────────────────────────────── */}
      <div className="bg-primary-800">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Admissions Open 2025–26</h3>
            <p className="text-primary-200 text-sm mt-1">Apply online through the Samarth Portal – Uttarakhand</p>
          </div>
          <a
            href={collegeInfo.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-saffron-500 hover:bg-saffron-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
          >
            Apply Now <FaArrowRight />
          </a>
        </div>
      </div>

      {/* ─── Main Footer ──────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="GDC Bithyani Logo"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">Mahayogi Guru Gorakhnath</p>
                <p className="text-gray-500 text-xs">Govt. Degree College Bithyani</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Nestled in the mountains of Garhwal Himalaya, providing quality higher education to the youth of Yamkeshwar region since 2005.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-saffron-500 mt-0.5 flex-shrink-0" />
                <span className="leading-tight">{collegeInfo.address}</span>
              </div>
              <a href={`tel:${collegeInfo.phones[0]}`} className="flex items-center gap-2 hover:text-primary-700 transition-colors">
                <FaPhone className="text-saffron-500 flex-shrink-0" />
                {collegeInfo.phones[0]}
              </a>
              <a href={`mailto:${collegeInfo.email}`} className="flex items-center gap-2 hover:text-primary-700 transition-colors">
                <FaEnvelope className="text-saffron-500 flex-shrink-0" />
                {collegeInfo.email}
              </a>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-saffron-500 flex-shrink-0" />
                {collegeInfo.website}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-saffron-500 inline-block"></span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-500 hover:text-saffron-500 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={collegeInfo.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-saffron-500 text-sm transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Apply Online
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-saffron-500 inline-block"></span>
              Important Links
            </h4>
            <ul className="space-y-2">
              {importantLinks.slice(0, 8).map(link => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-saffron-500 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <FaExternalLinkAlt className="text-xs opacity-60 flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations & Info */}
          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-saffron-500 inline-block"></span>
              Affiliations
            </h4>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <p className="text-gray-900 text-sm font-semibold">Sri Dev Suman University</p>
                <p className="text-gray-500 text-xs mt-0.5">Affiliated Since 2018 (Current)</p>
                <p className="text-gray-500 text-xs">Badshahithaul, Tehri Garhwal</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <p className="text-gray-900 text-sm font-semibold">HNBG University</p>
                <p className="text-gray-500 text-xs mt-0.5">2005 – 2018</p>
                <p className="text-gray-500 text-xs">Srinagar, Garhwal</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-900 text-sm font-semibold mb-3">Stay Connected</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-200 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-200 hover:bg-red-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href={`https://wa.me/918979321615`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-200 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Bar ───────────────────────────────────────────────────── */}
      <div className="border-t border-slate-200">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Mahayogi Guru Gorakhnath Rajkiya Mahavidyalaya Bithyani. All rights reserved.</p>
          <p>Yamkeshwar, Pauri Garhwal, Uttarakhand – 246121</p>
        </div>
      </div>
    </footer>
  )
}
