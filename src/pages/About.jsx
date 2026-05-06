import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaCalendar, FaUniversity, FaAward, FaLeaf, FaArrowRight, FaMountain, FaBookOpen, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { collegeInfo, affiliations, stats } from '../data/collegeData'

const IMAGES = {
  college1:  '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%201.png',
  college2:  '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/college%202.png',
  card1:     '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/1.png',
  card2:     '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/2.png',
  ba1:       '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/BA%201.png',
  ba2:       '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/BA%202.png',
  principal: '/Mahayogi%20Guru%20Gorakhnath%20Govt/card/prinj.jpg',
  message:   '/Mahayogi%20Guru%20Gorakhnath%20Govt/message.png',
  slider1:   '/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/1.png',
  slider2:   '/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/2.png',
  slider3:   '/Mahayogi%20Guru%20Gorakhnath%20Govt/slider/3.png',
}

function PageHero() {
  return (
    <div className="relative bg-mountain-gradient py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-saffron-400 text-sm">Home</span>
            <span className="text-primary-400">/</span>
            <span className="text-white text-sm">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            About Our <span className="text-saffron-400">College</span>
          </h1>
          <p className="text-primary-200 text-lg max-w-xl">
            A journey of knowledge, service and excellence — nestled in the green mountains of Garhwal Himalaya
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <FaMountain className="text-white text-[250px]" />
      </div>
    </div>
  )
}

// ── College Campus Photo Grid ─────────────────────────────────────────────────
function CampusPhotos() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[IMAGES.college1, IMAGES.college2, IMAGES.card1, IMAGES.card2, IMAGES.ba1, IMAGES.ba2].map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl aspect-video bg-gray-100 shadow-sm group">
              <img
                src={src}
                alt={`College campus ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={e => { e.target.src = `https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&sig=${i}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── History Section (Hindi + English) ────────────────────────────────────────
function HistorySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge bg-primary-100 text-primary-700 mb-3">Our History</span>
          <h2 className="section-title">महाविद्यालय का इतिहास</h2>
          <div className="section-divider"></div>
          <p className="text-sm text-gray-500 mt-2">College History &amp; Background</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Hindi Text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="font-bold text-primary-900 text-lg mb-4 font-hindi">हिन्दी में विवरण</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed font-hindi bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p>
                यमकेश्वर विधानसभा क्षेत्र के अन्तर्गत कोटद्वार से ऋषिकेश के मध्य उच्च शिक्षा का
                कोई माध्यम न होने के कारण यह महसूस किया गया कि यमकेश्वर ब्लाक के ग्राम बिथ्याणी
                (यमकेश्वर) जो कि कोटद्वार एवम् ऋषिकेश से 70-70 किमी० के मध्य स्थित है, में उच्च
                शिक्षा के लिए एक महाविद्यालय की स्थापना की जाये।
              </p>
              <p>
                यमकेश्वर, दुगड्डा तथा द्वारीखाल विकास क्षेत्र के मिलानी क्षेत्र के छात्र/छात्राओं
                खासतौर से गरीब परिवार के बालक एवं बालिकाएं उच्च शिक्षा से वंचित रहते आये थे और
                धनाभाव एवं साधनाभाव के कारण काफी छात्र/छात्रायें उच्च शिक्षा प्राप्त नहीं कर पाते थे।
              </p>
              <p>
                इस महाविद्यालय की प्रेरणा श्री गोरक्षनाथ मंदिर गोरखपुर (उत्तर प्रदेश), परम पूज्य
                गोरक्षापीठाधीश्वर महंत अवैद्यनाथ जी महाराज (वर्तमान में माननीय योगी आदित्यनाथ जी,
                मुख्यमंत्री उत्तर प्रदेश) ने दी और महाविद्यालय संचालन के लिए शिक्षा समिति के गठन,
                पंजीकरण एवं भूमि की व्यवस्था करने के लिए आवश्यक मार्ग निर्देशन दिया।
              </p>
              <p>
                उक्त निर्देशन प्राप्त होने पर <strong>महायोगी गुरु गोरखनाथ शिक्षा समिति बिथ्याणी
                (यमकेश्वर) पौड़ी गढ़वाल</strong> का गठन वर्ष 1998 में किया गया तथा सोसाइटी का पंजीकरण
                दिसम्बर 1998 में सम्पन्न हुआ।
              </p>
              <p>
                शिक्षा समिति ने ग्राम बिथ्याणी, मुंजरा, मलेथा एवं उमरोली के भूमि दाताओं से भूमि दान
                करने की अपील की। उक्त सम्मानित भूमि दान दाताओं ने भूमि दान देने में बढ़ चढ़ कर हिस्सा
                लिया और वर्ष 1999 अक्टूबर में चार दिन में ही <strong>179 नाली भूमि</strong> का शिक्षा
                समिति के नाम पर पंजीकरण हो गया।
              </p>
              <p>
                वर्ष 1999 से क्षेत्र में उच्चशिक्षा प्रारम्भ करने के उद्देश्य से स्थान बिथ्याणी के
                मिलन केन्द्र पर ट्यूटोरियल कक्षायें प्रारम्भ की गयी जो वर्ष 2004 तक संचालित होती रही।
                2004 में शिक्षा समिति के अध्यक्ष माननीय योगी आदित्यनाथ जी ने ट्यूटोरियल कक्षायें
                स्थगित करके महाविद्यालय की विधिवत शासन से मान्यता तथा विश्वविद्यालय से सम्बद्धता
                प्राप्त करने के निर्देश दिये।
              </p>
              <p>
                तदुपरान्त <strong>जून 2005</strong> को शासन से महाविद्यालय को मान्यता तथा हेमवती नन्दन
                बहुगुणा गढ़वाल विश्वविद्यालय श्रीनगर गढ़वाल से सम्बद्धता प्राप्त हुई। महाविद्यालय का
                प्रथम सत्र <strong>जुलाई 2006</strong> से प्रारम्भ हुआ जिसमें कला संकाय के सात विषयों
                — हिन्दी, अंग्रेजी, संस्कृत, राजनीति विज्ञान, इतिहास, अर्थशास्त्र एवं समाजशास्त्र
                में पाठ्यक्रम प्रारम्भ किया गया।
              </p>
              <p>
                महाविद्यालय अनुदानित <strong>25 मई 2017</strong> एवं तत्पश्चात दिनांक
                <strong> 27 सितम्बर 2018</strong> को महाविद्यालय के राजकीयकरण का शासनादेश
                सं० 538/XXIV(7)/2018-14(घो०)15 के रूप में पूर्ण हुआ व आज महाविद्यालय
                <strong> "महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय"</strong> के रूप में स्थापित है।
              </p>
            </div>
          </div>

          {/* English Text + Timeline */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative mb-8">
              <img
                src={IMAGES.college1}
                alt="College Campus"
                className="rounded-2xl w-full shadow-card-lg object-cover"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' }}
              />
              <div className="absolute -bottom-5 -right-5 bg-primary-700 rounded-2xl p-5 shadow-[0_4px_14px_rgba(37,99,235,0.35)] hidden md:block">
                <p className="text-white text-3xl font-extrabold">2005</p>
                <p className="text-primary-200 text-sm">Year Founded</p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {[
                { year: '1998', event: 'Shiksha Samiti formed & registered in December', color: 'bg-primary-500' },
                { year: '1999', event: '179 Nali land donated by villagers (4 days)', color: 'bg-primary-600' },
                { year: '1999', event: 'Tutorial classes begin at Bithyani Milap Kendra', color: 'bg-primary-700' },
                { year: '2005', event: 'Govt. recognition & HNBGU affiliation in June', color: 'bg-saffron-500' },
                { year: '2006', event: 'First academic session — 7 Arts subjects', color: 'bg-saffron-600' },
                { year: '2017', event: 'Govt. grant received (25 May)', color: 'bg-orange-500' },
                { year: '2018', event: 'Full Rajkiya (Govt.) recognition (27 September)', color: 'bg-red-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-14 h-7 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {item.year}
                  </div>
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <p className="text-sm text-gray-700 w-64 text-right">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Gratitude / Tribute Section (आभार संदेश) ─────────────────────────────────
function GratitudeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="badge bg-saffron-100 text-saffron-700 mb-3">Tribute</span>
          <h2 className="section-title">आभार संदेश</h2>
          <div className="section-divider"></div>
        </div>
        <div className={`max-w-4xl mx-auto card p-8 md:p-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex justify-center">
              <img
                src={IMAGES.message}
                alt="Late Anand Singh Bisht Ji"
                className="rounded-2xl w-full max-w-[200px] object-cover shadow-card border-2 border-saffron-200"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div className="md:col-span-2 space-y-3 text-sm text-gray-700 leading-relaxed font-hindi">
              <p>
                महायोगी गुरु गोरखनाथ राजकीय महाविद्यालय बिथ्याणी (यमकेश्वर) आज इस मंजिल की ओर
                अग्रसर हो गया है जहां से महाविद्यालय की अनवरत प्रगति दृष्टिगोचर प्रतीत होती है।
              </p>
              <p>
                <strong>स्व० श्री आनन्द सिंह बिष्ट जी</strong>, मंत्री/प्रबन्धक महायोगी गुरु गोरखनाथ
                महाविद्यालय बिथ्याणी (यमकेश्वर) और शिक्षा समिति के अथक प्रयासों का ही यह प्रतिफल है।
              </p>
              <p>
                महाविद्यालय के राजकीयकरण के साथ ही इसे स्नातकोत्तर महाविद्यालय के रूप में देखने के लिए
                मा० बिष्ट जी प्रबल इच्छुक रहे हैं। महाविद्यालय में अन्य कोर्स भी संचालित हों, जिससे
                क्षेत्र के छात्र/छात्रायें एवम् क्षेत्रीय जनता भी लाभान्वित हो सकें। उनकी शुभकामनाएं
                एवम् आशीर्वाद सदैव महाविद्यालय के साथ हैं।
              </p>
              <p className="italic text-gray-500 text-xs">
                क्षेत्र प्रगति में महाविद्यालय की भूमिका का जब कभी भी आंकलन किया जायेगा, विकट व
                विपरीत परिस्थितियों में महाविद्यालय स्थापना एवं संचालन में आपका सहयोग सदैव स्मरणीय रहेगा।
              </p>
              <p className="font-semibold text-primary-800">
                — महाविद्यालय परिवार की ओर से आभार
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Affiliations ──────────────────────────────────────────────────────────────
function AffiliationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="badge bg-primary-100 text-primary-700 mb-3">University Affiliations</span>
          <h2 className="section-title">Academic Affiliations</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {affiliations.map(aff => (
            <div key={aff.name} className={`card p-6 border-2 ${aff.current ? 'border-primary-300 bg-primary-50' : 'border-gray-200'}`}>
              <div className="flex items-start gap-4">
                <img
                  src={aff.logo}
                  alt={aff.name}
                  className="w-16 h-16 object-contain rounded-lg bg-white p-1 flex-shrink-0"
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div>
                  {aff.current && <span className="badge bg-primary-700 text-white text-[10px] mb-2">Current</span>}
                  <h3 className="font-bold text-primary-900 text-sm leading-tight">{aff.name}</h3>
                  <p className="text-xs text-primary-600 font-hindi mt-1">{aff.nameHindi}</p>
                  <p className="text-xs text-gray-500 mt-1"><FaCalendar className="inline mr-1" />{aff.period}</p>
                  <p className="text-xs text-gray-500">{aff.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Principal's Message ───────────────────────────────────────────────────────
function PrincipalMessageFull() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="badge bg-primary-100 text-primary-700 mb-3">Message</span>
            <h2 className="section-title">प्राचार्य का संदेश</h2>
            <div className="section-divider"></div>
          </div>
          <div className="card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary-200 shadow-[0_4px_14px_rgba(37,99,235,0.25)] mb-3">
                  <img
                    src={IMAGES.principal}
                    alt="Principal Prof. Yogesh Kumar Sharma"
                    className="w-full h-full object-cover"
                    onError={e => { e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%231b844d"/><text x="50" y="60" font-size="36" text-anchor="middle" fill="white" font-family="serif">YS</text></svg>' }}
                  />
                </div>
                <h4 className="font-bold text-primary-900 text-sm">Prof. Yogesh Kumar Sharma</h4>
                <p className="text-xs text-gray-500">Principal</p>
                <p className="text-xs text-gray-500">Professor of Physics</p>
              </div>
              <div className="md:col-span-3 text-gray-600 text-sm leading-relaxed space-y-3">
                <p className="font-hindi text-gray-700">
                  शिक्षा छात्रों को उपलब्ध साहित्य और सांस्कृतिक विरासत से अवगत कराती है, जो मानव
                  जीवन की रचनात्मकता और कौशल सीखने की क्षमताओं को बढ़ाती है। मानव जीवन प्रकृति के
                  सबसे अनमोल वरदानों में से एक है। इसलिए मनुष्य होने के नाते हमें इसे खोए हुए
                  आँकड़ों के रूप में बर्बाद नहीं करना चाहिए।
                </p>
                <p>
                  Education introduces students to the available literary and cultural heritage, enhancing the
                  creative and skill-learning capabilities of human life. Human life is one of the most precious
                  gifts of nature. Therefore, as human beings, we should not waste it — we must make our best
                  efforts to make it meaningful.
                </p>
                <p>
                  Mahayogi Guru Gorakhnath Rajkiya Mahavidyalaya Bithyani, Yamkeshwar, Pauri Garhwal Uttarakhand
                  is striving to imbibe the socio-cultural traditions of India along with up-to-date factual
                  information about various areas of life. Our institution aims to create a breeding ground where
                  human life can be transformed into a value-based, civilized, rational and awakened citizen who
                  can contribute wisely to strengthening brotherhood, social solidarity and progressive society.
                </p>
                <p className="text-primary-700 font-medium font-hindi">
                  — प्रो. योगेश कुमार शर्मा, प्राचार्य एवं प्रोफ़ेसर, भौतिक विज्ञान
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Vision & Mission ──────────────────────────────────────────────────────────
function VisionMission() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-primary-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Vision &amp; Mission</h2>
          <div className="section-divider"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: '🔭',
              title: 'Vision',
              titleHindi: 'दृष्टि',
              text: 'To be a centre of excellence in higher education that nurtures holistic development, fosters critical thinking, and produces value-based citizens ready to contribute to society.',
              delay: '0s',
            },
            {
              icon: '🎯',
              title: 'Mission',
              titleHindi: 'मिशन',
              text: 'To provide quality, accessible, and affordable higher education to students from rural and semi-urban areas of Yamkeshwar, enabling them to achieve their academic and professional goals.',
              delay: '0.15s',
            },
            {
              icon: '⭐',
              title: 'Values',
              titleHindi: 'मूल्य',
              text: 'Excellence, Integrity, Inclusivity, Community Service, Cultural Heritage, Environmental Consciousness, and Respect for all individuals.',
              delay: '0.3s',
            },
          ].map(item => (
            <div
              key={item.title}
              className={`bg-primary-900 border border-primary-800 rounded-2xl p-7 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-saffron-400 text-sm font-hindi mb-3">{item.titleHindi}</p>
              <p className="text-primary-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main>
      <PageHero />
      <CampusPhotos />
      <HistorySection />
      <GratitudeSection />
      <AffiliationsSection />
      <PrincipalMessageFull />
      <VisionMission />
    </main>
  )
}
