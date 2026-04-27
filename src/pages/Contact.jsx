import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaClock,
  FaUser, FaMobileAlt, FaPaperPlane, FaCheck, FaMountain,
  FaWhatsapp, FaUniversity
} from 'react-icons/fa'
import { collegeInfo } from '../data/collegeData'

function PageHero() {
  return (
    <div className="relative bg-mountain-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-saffron-400 text-sm">Home</span>
            <span className="text-primary-400">/</span>
            <span className="text-white text-sm">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-saffron-400">Us</span>
          </h1>
          <p className="text-primary-200 text-lg max-w-xl">
            Reach out to us for admissions, queries, or any information about the college
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <FaMountain className="text-white text-[250px]" />
      </div>
    </div>
  )
}

const initialForm = { name: '', phone: '', email: '', course: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.phone.trim())   errs.phone   = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter valid 10-digit mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // In production, send to a backend endpoint; here we just show success
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-green-600 text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm mb-6">
          Thank you for contacting us. We will get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`input-field pl-9 ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaMobileAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`input-field pl-9 ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com (optional)"
            className={`input-field pl-9 ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Interested Course</label>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select a course...</option>
          <option>B.A. – Hindi</option>
          <option>B.A. – English</option>
          <option>B.A. – Sanskrit</option>
          <option>B.A. – Political Science</option>
          <option>B.A. – Economics</option>
          <option>B.A. – History</option>
          <option>B.A. – Sociology</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="w-full btn-primary justify-center py-3.5">
        <FaPaperPlane /> Send Message
      </button>
    </form>
  )
}

function ContactInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const contacts = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      titleHindi: 'पता',
      content: collegeInfo.address,
      color: 'bg-primary-100 text-primary-700',
    },
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      titleHindi: 'फोन',
      content: collegeInfo.phones.join('\n'),
      color: 'bg-blue-100 text-blue-700',
      links: collegeInfo.phones.map(p => ({ href: `tel:${p}`, text: p })),
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      titleHindi: 'ईमेल',
      content: collegeInfo.email,
      color: 'bg-saffron-100 text-saffron-700',
      links: [{ href: `mailto:${collegeInfo.email}`, text: collegeInfo.email }],
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      titleHindi: 'कार्यालय समय',
      content: 'Mon – Sat: 10:00 AM – 5:00 PM\nSunday: Closed',
      color: 'bg-green-100 text-green-700',
    },
  ]

  return (
    <div ref={ref} className="space-y-4">
      {contacts.map((c, i) => (
        <div
          key={c.title}
          className={`card p-5 flex items-start gap-4 transition-all duration-700 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
            <c.icon />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">{c.title}</p>
            <p className="text-xs text-gray-400 font-hindi">{c.titleHindi}</p>
            {c.links ? (
              <div className="mt-1 space-y-0.5">
                {c.links.map(link => (
                  <a key={link.href} href={link.href} className="block text-sm text-primary-600 hover:text-primary-800 transition-colors">
                    {link.text}
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">{c.content}</p>
            )}
          </div>
        </div>
      ))}

      {/* Principal Contact */}
      <div
        className={`card p-5 bg-primary-50 border-2 border-primary-200 transition-all duration-700 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
        }`}
        style={{ transitionDelay: '0.4s' }}
      >
        <div className="flex items-center gap-3 mb-2">
          <FaUniversity className="text-primary-700" />
          <p className="font-bold text-primary-900 text-sm">Office of the Principal</p>
        </div>
        <p className="text-xs text-gray-700">Dr. Suneel Devrari (Nodal Samarth Team)</p>
        <div className="flex flex-wrap gap-3 mt-2">
          <a href="tel:+918979321615" className="text-xs text-primary-600 hover:underline flex items-center gap-1">
            <FaPhone className="text-[10px]" /> +91 8979321615
          </a>
          <a href="tel:+917409150642" className="text-xs text-primary-600 hover:underline flex items-center gap-1">
            <FaPhone className="text-[10px]" /> +91 7409150642
          </a>
        </div>
        <a href={`mailto:${collegeInfo.email}`} className="text-xs text-primary-600 hover:underline flex items-center gap-1 mt-1">
          <FaEnvelope className="text-[10px]" /> {collegeInfo.email}
        </a>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918979321615"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl hover:bg-green-100 transition-colors"
      >
        <FaWhatsapp className="text-green-600 text-2xl flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-gray-900">WhatsApp Us</p>
          <p className="text-xs text-gray-500">Quick response for admission queries</p>
        </div>
      </a>
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <main>
      <PageHero />

      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Get In Touch</span>
            <h2 className="section-title">हमसे संपर्क करें</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <div
              className={`lg:col-span-3 card p-6 md:p-8 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-xl font-bold text-primary-900 mb-6">Send us a Message</h3>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary-900">Find Us on the Map</h3>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-primary-600" />
              Bithyani, Yamkeshwar, Pauri Garhwal, Uttarakhand – 246121
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card-lg h-72 md:h-96 bg-primary-100 flex items-center justify-center">
            <div className="text-center text-primary-600">
              <FaMapMarkerAlt className="text-5xl mx-auto mb-3 text-primary-700" />
              <p className="font-semibold text-primary-900">GDC Bithyani</p>
              <p className="text-sm text-primary-600">Yamkeshwar, Pauri Garhwal, Uttarakhand</p>
              <a
                href="https://maps.google.com/?q=Bithyani+Yamkeshwar+Pauri+Garhwal+Uttarakhand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
