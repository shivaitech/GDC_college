// ─── College Core Data ───────────────────────────────────────────────────────

export const collegeInfo = {
  nameHindi:    'महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय',
  nameEnglish:  'Mahayogi Guru Gorakhnath Govt. Degree College',
  shortName:    'GDC Bithyani',
  tagline:      'ज्ञान, संस्कृति और उत्कृष्टता का केंद्र',
  taglineEn:    'Centre of Knowledge, Culture & Excellence',
  location:     'Bithyani, Yamkeshwar',
  city:         'Pauri Garhwal',
  state:        'Uttarakhand',
  pincode:      '246121',
  address:      'Mahayogi Guru Gorakhnath Govt. Degree College Bithyani, PO Chai Damrada, Via Bhigu Khal, Yamkeshwar, Pauri Garhwal, Uttarakhand – 246121',
  phones:       ['+91 8979321615', '+91 9837926677', '+91 9837849194'],
  email:        'mggmbithyani05@gmail.com',
  website:      'gdcbithyani.ac.in',
  established:  '2005',
  govtRecognition: '2017 & 2018',
  applyLink:    'https://ukadmission.samarth.ac.in/',
  mapEmbedSrc:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0!2d78.5!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA0JzAzLjMiTiA3OMKwMjgnNTkuOSJF!5e0!3m2!1sen!2sin!4v1234567890',
}

// ─── University Affiliations ─────────────────────────────────────────────────

export const affiliations = [
  {
    name: 'Sri Dev Suman Uttarakhand University',
    nameHindi: 'श्री देव सुमन उत्तराखंड विश्वविद्यालय',
    period: '2018 – Present',
    location: 'Badshahithaul, Tehri Garhwal',
    logo: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/Sri_Dev_Suman_Uttarakhand_University_Logo.png',
    current: true,
  },
  {
    name: 'Hemwati Nandan Bahuguna Garhwal University',
    nameHindi: 'हेमवती नंदन बहुगुणा गढ़वाल विश्वविद्यालय',
    period: '2005 – 2018',
    location: 'Srinagar, Garhwal',
    logo: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/HNBG-new-logo.png',
    current: false,
  },
]

// ─── News & Announcements ────────────────────────────────────────────────────

export const newsItems = [
  { id: 1, text: 'First Merit List of B.A. I Semester (Session 2025-26) Published',  date: '2025-08-20', type: 'new' },
  { id: 2, text: 'कक्षावार शुल्क विवरण 2025-26 की जानकारी हेतु यहाँ क्लिक करें',    date: '2025-08-18', type: 'new' },
  { id: 3, text: 'Book Tender Notice – Last Date for Submission',                      date: '2025-08-15', type: 'notice' },
  { id: 4, text: '13/08/2025 को महाविद्यालय में तिरंगा यात्रा कार्यक्रम का आयोजन', date: '2025-08-13', type: 'event' },
  { id: 5, text: '13/08/2025 को महाविद्यालय में कृषक प्रशिक्षण कार्यक्रम का आयोजन',date: '2025-08-13', type: 'event' },
  { id: 6, text: '19/08/2025 को नवप्रवेशी छात्रों का दीक्षारम्भ कार्यक्रम आयोजित',  date: '2025-08-19', type: 'event' },
  { id: 7, text: '16/07/2025 को महाविद्यालय में हरेला पर्व मनाया गया',               date: '2025-07-16', type: 'event' },
  { id: 8, text: 'Online Admission Open for 2025-26 – Apply at ukadmission.samarth.ac.in', date: '2025-07-01', type: 'new' },
]

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { label: 'Years of Excellence',  labelHindi: 'उत्कृष्टता के वर्ष',  value: 20,   suffix: '+', icon: '🏛️' },
  { label: 'Teaching Faculty',     labelHindi: 'शिक्षण स्टाफ',        value: 13,   suffix: '',  icon: '👨‍🏫' },
  { label: 'Programs Offered',     labelHindi: 'पाठ्यक्रम',           value: 13,   suffix: '',  icon: '📚' },
  { label: 'Students Enrolled',    labelHindi: 'नामांकित छात्र',      value: 500,  suffix: '+', icon: '👨‍🎓' },
]

// ─── Teaching Faculty ────────────────────────────────────────────────────────

// Helper: build faculty photo URL from the old website's image directory
const fp = (file) =>
  `https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/fac%20%26%20staff/${encodeURIComponent(file)}`

export const teachingStaff = [
  { id: 1,  name: 'प्रो. योगेश कुमार शर्मा', nameEn: 'Prof. Yogesh Kumar Sharma',    designation: 'Principal & Professor of Physics',              designationHindi: 'प्राचार्य, प्रोफ़ेसर भौतिक विज्ञान', email: 'info@gdcbithyani.ac.in',       isPrincipal: true,  avatar: 'YKS', photo: fp('prof yks.webp') },
  { id: 2,  name: 'डॉ. उमेश त्यागी',          nameEn: 'Dr. Umesh Tyagi',              designation: 'Assistant Professor, History',                  designationHindi: 'सहायक प्राध्यापक, इतिहास',          email: 'dr.umeshtyagi78@gmail.com',    isPrincipal: false, avatar: 'UT',  photo: fp('umesh k s.webp') },
  { id: 3,  name: 'श्री विनय कुमार पाण्डेय',  nameEn: 'Shri Vinay Kumar Pandey',      designation: 'Assistant Professor, Economics',                designationHindi: 'सहायक प्राध्यापक, अर्थशास्त्र',     email: 'vinay111pandey@gmail.com',     isPrincipal: false, avatar: 'VP',  photo: fp('vinay p.webp') },
  { id: 4,  name: 'डॉ. राम सिंह सामंत',       nameEn: 'Dr. Ram Singh Samant',         designation: 'Assistant Professor, Sociology',                designationHindi: 'सहायक प्राध्यापक, समाजशास्त्र',     email: 'ramsamant007@gmail.com',       isPrincipal: false, avatar: 'RS',  photo: fp('samant.webp') },
  { id: 5,  name: 'डॉ. नीरज नौटियाल',         nameEn: 'Dr. Neeraj Nautiyal',          designation: 'Assistant Professor, Sanskrit',                 designationHindi: 'सहायक प्राध्यापक, संस्कृत',         email: 'nnautiyal098@gmail.com',       isPrincipal: false, avatar: 'NN',  photo: fp('neeraj.webp') },
  { id: 6,  name: 'श्री सुनील प्रसाद',         nameEn: 'Shri Sunil Prasad',            designation: 'Assistant Professor, English',                  designationHindi: 'सहायक प्राध्यापक, अंग्रेज़ी',       email: 'suneelprasad28@gmail.com',     isPrincipal: false, avatar: 'SP',  photo: fp('Suneel.webp') },
  { id: 7,  name: 'श्रीमती पूजा रानी',         nameEn: 'Shrimati Pooja Rani',          designation: 'Assistant Professor, Hindi',                    designationHindi: 'सहायक प्राध्यापक, हिंदी',           email: 'poojaashwani15@gmail.com',     isPrincipal: false, avatar: 'PR',  photo: fp('Pooja.webp') },
  { id: 8,  name: 'डॉ. गिरिराज सिंह',         nameEn: 'Dr. Giriraj Singh',            designation: 'Assistant Professor, Political Science',        designationHindi: 'सहायक प्राध्यापक, राजनीति विज्ञान', email: 'kasana020214@gmail.com',       isPrincipal: false, avatar: 'GS',  photo: fp('Giriraj.webp') },
  { id: 9,  name: 'डॉ. केशव प्रसाद डबराल',    nameEn: 'Dr. Keshav Prasad Dabral',     designation: 'Assistant Professor, Physics',                  designationHindi: 'सहायक प्राध्यापक, भौतिक विज्ञान',   email: 'keshav.dabral@gmail.com',      isPrincipal: false, avatar: 'KD',  photo: fp('dabral2.webp') },
  { id: 10, name: 'डॉ. हिमानी बडोनी',         nameEn: 'Dr. Himani Badoni',            designation: 'Assistant Professor, Botany',                   designationHindi: 'सहायक प्राध्यापक, वनस्पति विज्ञान', email: 'himani318@gmail.com',          isPrincipal: false, avatar: 'HB',  photo: fp('himani1.webp') },
  { id: 11, name: 'श्री चेतन भट्ट',           nameEn: 'Shri Chetan Bhatt',            designation: 'Assistant Professor, Chemistry (Guest)',        designationHindi: 'सहायक प्राध्यापक, रसायन विज्ञान (अतिथि)', email: 'cbhatt47@yahoo.com',      isPrincipal: false, avatar: 'CB',  photo: fp('chetan.webp') },
  { id: 12, name: 'डॉ. मनवीर सिंह कंडारी',   nameEn: 'Dr. Manveer Singh Kandari',    designation: 'Assistant Professor, Zoology (Guest)',          designationHindi: 'सहायक प्राध्यापक, जन्तु विज्ञान (अतिथि)', email: 'manveerkandari@gmail.com', isPrincipal: false, avatar: 'MK',  photo: fp('manveer.webp') },
  { id: 13, name: 'श्री नरेश सिंह राणा',      nameEn: 'Shri Naresh Singh Rana',       designation: 'Yoga Instructor',                               designationHindi: 'योग प्रशिक्षक',                      email: 'Nareshrana640@gmail.com',      isPrincipal: false, avatar: 'NR',  photo: fp('Naresh.webp') },
]

export const nonTeachingStaff = [
  { id: 1,  name: 'श्री महेंद्र सिंह बिष्ट',   nameEn: 'Shri Mahendra Singh Bisht',   designation: 'Administrative Officer',     designationHindi: 'प्रशासनिक अधिकारी',        photo: fp('mahendra.webp') },
  { id: 2,  name: 'श्री मानेन्द्र सिंह बिष्ट', nameEn: 'Shri Manendra Singh Bisht',   designation: 'Chief Assistant',            designationHindi: 'मुख्य सहायक',               photo: fp('manendra.webp') },
  { id: 3,  name: 'श्री संजय कुमार रतूड़ी',    nameEn: 'Shri Sanjay Kumar Raturi',    designation: 'Assistant Accountant',       designationHindi: 'सहायक लेखाकार',             photo: fp('sanjay.webp') },
  { id: 4,  name: 'श्रीमती सीमा देवी',          nameEn: 'Shrimati Seema Devi',          designation: 'Assistant Librarian',        designationHindi: 'सहायक पुस्तकालय अध्यक्ष',  photo: fp('seema_devi.webp') },
  { id: 5,  name: 'श्रीमती उर्वशी जुयाल',       nameEn: 'Shrimati Urvashi Juyal',       designation: 'Library Clerk',              designationHindi: 'पुस्तकालय लिपिक',           photo: null },
  { id: 6,  name: 'श्री उपेन्द्र कुमार',         nameEn: 'Shri Upendra Kumar',           designation: 'Junior Clerk',               designationHindi: 'कनिष्ठ लिपिक',              photo: null },
  { id: 7,  name: 'श्री अरविंद कुमार',           nameEn: 'Shri Arvind Kumar',            designation: 'Junior Assistant',           designationHindi: 'कनिष्ठ सहायक',              photo: null },
  { id: 8,  name: 'श्री सुनील रावत',             nameEn: 'Shri Sunil Rawat',             designation: 'Computer Operator',          designationHindi: 'कंप्यूटर ऑपरेटर',          photo: fp('sunil.webp') },
  { id: 9,  name: 'श्रीमती बीना देवी',           nameEn: 'Shrimati Bina Devi',           designation: 'Store Keeper',               designationHindi: 'स्टोर कीपर',                photo: fp('beena.webp') },
  { id: 10, name: 'श्री सतीश कुमार नेगी',        nameEn: 'Shri Satish Kumar Negi',       designation: 'Electrician',                designationHindi: 'विधुतकार',                  photo: fp('satish.webp') },
  { id: 11, name: 'श्री गजेंद्र सिंह',           nameEn: 'Shri Gajendra Singh',          designation: 'Operator',                   designationHindi: 'परिचालक',                   photo: null },
  { id: 12, name: 'श्री सुशील कुमार',             nameEn: 'Shri Sushil Kumar',            designation: 'Night Watchman',             designationHindi: 'रात्रि चौकीदार',            photo: fp('shushil.webp') },
  { id: 13, name: 'श्री अखिलेश सिंह नेगी',       nameEn: 'Shri Akhilesh Singh Negi',     designation: 'Attendant',                  designationHindi: 'अनुसेवक',                   photo: fp('Akhilesh.webp') },
  { id: 14, name: 'श्री वेदकिशोर सिंह नेगी',     nameEn: 'Shri Vedkishor Singh Negi',    designation: 'Gardener',                   designationHindi: 'माली',                      photo: fp('vedkishor.webp') },
  { id: 15, name: 'श्री प्रशांत कुकरेती',         nameEn: 'Shri Prashant Kukreti',        designation: 'Book Binder & Lifter',       designationHindi: 'बुक बाइंडर और लिफ्टर',     photo: null },
  { id: 16, name: 'श्री धर्मेन्द्र सिंह',         nameEn: 'Shri Dharmendra Singh',        designation: 'Environment Friend',         designationHindi: 'पर्यावरण मित्र',            photo: null },
]

// ─── Programs / Courses ───────────────────────────────────────────────────────

export const programs = [
  {
    id: 1,
    department: 'हिंदी',
    departmentEn: 'Hindi',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Hindi literature, grammar, and linguistic studies covering classical and modern texts.',
    icon: '📖',
    color: 'bg-amber-50 border-amber-200',
    iconBg: 'bg-amber-100',
  },
  {
    id: 2,
    department: 'अंग्रेज़ी',
    departmentEn: 'English',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'English language and literature with focus on prose, poetry, drama and communication.',
    icon: '✍️',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 3,
    department: 'संस्कृत',
    departmentEn: 'Sanskrit',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Classical Sanskrit language, Vedic literature, grammar (Vyakaran), and ancient Indian texts.',
    icon: '🕉️',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    id: 4,
    department: 'राजनीति विज्ञान',
    departmentEn: 'Political Science',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Indian and world political systems, governance, international relations, and public administration.',
    icon: '🏛️',
    color: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
  },
  {
    id: 5,
    department: 'अर्थशास्त्र',
    departmentEn: 'Economics',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Micro and macro economics, Indian economic development, statistics and economic theories.',
    icon: '📊',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 6,
    department: 'इतिहास',
    departmentEn: 'History',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Ancient, medieval and modern Indian history along with world history and archaeological studies.',
    icon: '🏺',
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
  },
  {
    id: 7,
    department: 'समाजशास्त्र',
    departmentEn: 'Sociology',
    course: 'B.A.',
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Social structures, institutions, culture, social change and research methods in social sciences.',
    icon: '🤝',
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
  },

  // ─── B.Sc. Programs ────────────────────────────────────────────────────────
  {
    id: 8,
    department: 'भौतिक विज्ञान',
    departmentEn: 'Physics',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Classical and modern physics covering mechanics, thermodynamics, optics, electricity, and practical lab work.',
    icon: '⚛️',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 9,
    department: 'रसायन विज्ञान',
    departmentEn: 'Chemistry',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Organic, inorganic and physical chemistry with extensive laboratory experiments and analytical techniques.',
    icon: '🧪',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    id: 10,
    department: 'गणित',
    departmentEn: 'Mathematics',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Pure and applied mathematics — algebra, calculus, differential equations, real analysis and numerical methods.',
    icon: '📐',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 11,
    department: 'जन्तु विज्ञान',
    departmentEn: 'Zoology',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Animal biology, physiology, ecology, genetics and evolutionary biology with field and lab components.',
    icon: '🦋',
    color: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
  },
  {
    id: 12,
    department: 'वनस्पति विज्ञान',
    departmentEn: 'Botany',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Plant biology, morphology, physiology, ecology, and biotechnology with emphasis on Himalayan flora.',
    icon: '🌿',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 13,
    department: 'कंप्यूटर साइंस',
    departmentEn: 'Computer Science',
    course: 'B.Sc.',
    seats: 60,
    semesters: 6,
    duration: '3 Years',
    nature: 'Regular',
    natureHindi: 'नियमित',
    description: 'Programming, data structures, algorithms, databases, networking, and software development fundamentals.',
    icon: '💻',
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
]

// ─── Important Links ──────────────────────────────────────────────────────────

export const importantLinks = [
  { name: 'Directorate of Higher Education UK', url: 'https://www.directorateheuk.com/', category: 'Government' },
  { name: 'Ekosh (eHRMS Uttarakhand)',           url: 'https://www.ekosh.uk.gov.in/',     category: 'Government' },
  { name: 'NAAC',                                url: 'http://www.naac.gov.in/',           category: 'Academic' },
  { name: 'UGC India',                           url: 'https://www.ugc.gov.in/',           category: 'Academic' },
  { name: 'SDSUV',                               url: 'https://www.sdsuv.ac.in/',          category: 'University' },
  { name: 'Uttarakhand Government',              url: 'https://uk.gov.in/',               category: 'Government' },
  { name: 'India.Gov.In',                        url: 'https://www.india.gov.in/',         category: 'Government' },
  { name: 'National Scholarships',               url: 'https://scholarships.gov.in/',      category: 'Students' },
  { name: 'Samadhan UK',                         url: 'http://samadhan.uk.gov.in/',        category: 'Government' },
  { name: 'MHRD',                                url: 'http://mhrd.gov.in/',               category: 'Academic' },
  { name: 'National Digital Library',            url: 'https://ndl.iitkgp.ac.in/',        category: 'Academic' },
  { name: 'AISHE',                               url: 'http://aishe.nic.in/aishe/home',    category: 'Academic' },
]

// ─── Gallery Images ───────────────────────────────────────────────────────────

export const galleryImages = [
  { id: 1,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/gallery/11.png',  alt: 'College Campus',      category: 'Campus' },
  { id: 2,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/gallery/12.png',  alt: 'College Building',    category: 'Campus' },
  { id: 3,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/gallery/10.png',  alt: 'College Activity',    category: 'Events' },
  { id: 4,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/gallery/9.png',   alt: 'College Event',       category: 'Events' },
  { id: 5,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/1.png',      alt: 'Campus View 1',       category: 'Campus' },
  { id: 6,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/2.png',      alt: 'Campus View 2',       category: 'Campus' },
  { id: 7,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%201.png', alt: 'College Front', category: 'Campus' },
  { id: 8,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%202.png', alt: 'College Side',  category: 'Campus' },
  { id: 9,  src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/1.png',    alt: 'College Slide 1',     category: 'Events' },
  { id: 10, src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/2.png',    alt: 'College Slide 2',     category: 'Events' },
  { id: 11, src: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/3.png',    alt: 'College Slide 3',     category: 'Academic' },
]

// ─── Hero Slides ──────────────────────────────────────────────────────────────

export const heroSlides = [
  {
    id: 1,
    image: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/1.png',
    title: 'महायोगी गुरु गोरखनाथ',
    subtitle: 'राजकीय महाविद्यालय बिथ्याणी',
    description: 'हरे-भरे गढ़वाल हिमालय की गोद में स्थित — ज्ञान और संस्कृति का केंद्र',
    ctaText: 'Admission Open 2025–26',
    ctaLink: 'https://ukadmission.samarth.ac.in/',
  },
  {
    id: 2,
    image: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/2.png',
    title: 'Quality Higher Education',
    subtitle: 'In the Green Mountains of Uttarakhand',
    description: 'Affiliated to Sri Dev Suman Uttarakhand University since 2018',
    ctaText: 'Explore Programs',
    ctaLink: '/programs',
  },
  {
    id: 3,
    image: 'https://gdcbithyani.ac.in/images/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/3.png',
    title: 'Empowering Students',
    subtitle: 'Since 2005',
    description: 'Government recognized institution serving the youth of Yamkeshwar and surrounding areas',
    ctaText: 'Know More',
    ctaLink: '/about',
  },
]

// ─── Facilities ───────────────────────────────────────────────────────────────

export const facilities = [
  { icon: '📚', title: 'Library',          titleHindi: 'पुस्तकालय',        description: 'Well-stocked library with thousands of books, journals and reference materials.' },
  { icon: '💻', title: 'Computer Lab',     titleHindi: 'कंप्यूटर लैब',     description: 'Modern computer laboratory with internet connectivity for digital learning.' },
  { icon: '🏋️', title: 'Sports Ground',   titleHindi: 'खेल मैदान',         description: 'Large sports ground for outdoor games and annual sports events.' },
  { icon: '🧘', title: 'Yoga Center',      titleHindi: 'योग केंद्र',        description: 'Dedicated yoga and wellness center for holistic student development.' },
  { icon: '🌿', title: 'NSS Unit',         titleHindi: 'राष्ट्रीय सेवा योजना', description: 'Active NSS unit conducting community service and social outreach programs.' },
  { icon: '🏛️', title: 'Seminar Hall',    titleHindi: 'सेमिनार हॉल',       description: 'Spacious seminar hall for lectures, workshops, and cultural programs.' },
]
