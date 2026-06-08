import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Faculty from './pages/Faculty'
import Programs from './pages/Programs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Associations from './pages/Associations'

// Scroll to top on route change
function RouteChangeScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <p className="text-8xl font-extrabold text-primary-200 mb-4">404</p>
        <h1 className="text-2xl font-bold text-primary-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary">Go to Home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteChangeScrollTop />
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/faculty"         element={<Faculty />}                        />
        <Route path="/faculty/arts"    element={<Faculty section="arts" />}    />
        <Route path="/faculty/science" element={<Faculty section="science" />} />
        <Route path="/faculty/staff"   element={<Faculty section="staff" />}   />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery"  element={<Gallery />}  />
        <Route path="/contact"      element={<Contact />}      />
        <Route path="/associations"  element={<Associations />}  />
        <Route path="*"              element={<NotFound />}      />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}
