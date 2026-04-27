export default function CollegeHeader() {
  return (
    <div className="w-full bg-white border-b-2 border-primary-100 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-6">

          {/* Left — College Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="College Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-primary-200 shadow"
            />
          </div>

          {/* Center — College Info */}
          <div className="flex-1 text-center min-w-0">
            {/* Hindi Name — big, bold, red */}
            <h1 className="font-hindi font-extrabold text-red-600 leading-tight"
                style={{ fontSize: 'clamp(0.7rem, 2.2vw, 1.35rem)' }}>
              महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी, यमकेश्वर पौड़ी गढ़वाल उत्तराखंड
            </h1>

            {/* English Name — blue */}
            <p className="text-blue-700 font-semibold leading-snug mt-0.5"
               style={{ fontSize: 'clamp(0.55rem, 1.3vw, 0.95rem)' }}>
              Mahayogi Gurugorakhnath Government Degree College Bithyani, Yamkeswar, Pauri Garhwal, Uttarakhand
            </p>
          </div>

          {/* Right — Affiliation text block */}
          <div className="flex-shrink-0 text-center max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">
            <p className="font-semibold text-gray-800 leading-snug"
               style={{ fontSize: 'clamp(0.52rem, 1vw, 0.82rem)' }}>
              Affiliated to
            </p>
            <p className="font-bold text-primary-800 leading-snug"
               style={{ fontSize: 'clamp(0.52rem, 1vw, 0.82rem)' }}>
              Sri Dev Suman Uttarakhand University
            </p>
            <p className="text-gray-600 leading-snug"
               style={{ fontSize: 'clamp(0.48rem, 0.9vw, 0.75rem)' }}>
              Badshahithaul, Tehri Garhwal, Uttarakhand
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
