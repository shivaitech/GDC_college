import { useEffect, useRef, useState, useCallback } from 'react'
import { FaPlus, FaMinus, FaExpand } from 'react-icons/fa'
import * as pdfjsLib from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl

const MIN_ZOOM = 1
const MAX_ZOOM = 4
const MAX_CANVAS_PX = 3200
const clamp = z => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z))

// Renders one page to a canvas, only once it nears the viewport.
function PdfPage({ pdf, pageNumber, width, ratio, root, onRatio }) {
  const holderRef = useRef(null)
  const canvasRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = holderRef.current
    if (!el || !root) return
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root, rootMargin: '600px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [root])

  useEffect(() => {
    if (!visible || !width) return
    let cancelled = false
    let task
    const timer = setTimeout(async () => {
      try {
        const page = await pdf.getPage(pageNumber)
        if (cancelled) return
        const base = page.getViewport({ scale: 1 })
        onRatio(pageNumber, base.height / base.width)
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const pxWidth = Math.min(width * dpr, MAX_CANVAS_PX)
        const viewport = page.getViewport({ scale: pxWidth / base.width })
        const canvas = canvasRef.current
        if (!canvas) return
        canvas.width = viewport.width
        canvas.height = viewport.height
        task = page.render({ canvasContext: canvas.getContext('2d'), viewport })
        await task.promise
      } catch (err) {
        if (err?.name !== 'RenderingCancelledException') console.error(err)
      }
    }, 150) // debounce while zooming
    return () => {
      cancelled = true
      clearTimeout(timer)
      task?.cancel()
    }
  }, [visible, width, pdf, pageNumber, onRatio])

  return (
    <div
      ref={holderRef}
      className="bg-white shadow-md mx-auto"
      style={{ width, height: width * ratio }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}

export default function PdfReader({ file }) {
  const scrollRef = useRef(null)
  const [root, setRoot] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [error, setError] = useState(false)
  const [boxWidth, setBoxWidth] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [ratios, setRatios] = useState({})
  const zoomRef = useRef(1)
  zoomRef.current = zoom

  const setScrollEl = useCallback(el => { scrollRef.current = el; setRoot(el) }, [])
  const onRatio = useCallback((n, r) => {
    setRatios(prev => (Math.abs((prev[n] || 0) - r) < 0.001 ? prev : { ...prev, [n]: r }))
  }, [])

  // Load document (pdf.js fetches pages on demand via range requests)
  useEffect(() => {
    let cancelled = false
    setError(false)
    const task = pdfjsLib.getDocument({ url: file })
    task.promise
      .then(doc => { if (!cancelled) setPdf(doc) })
      .catch(() => { if (!cancelled) setError(true) })
    return () => { cancelled = true; task.destroy() }
  }, [file])

  // Track container width so pages always fit it at zoom 1
  useEffect(() => {
    if (!root) return
    const measure = () => setBoxWidth(root.clientWidth - 16)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(root)
    return () => ro.disconnect()
  }, [root])

  // Pinch-to-zoom (non-passive so we can stop the browser zooming the whole page)
  useEffect(() => {
    if (!root) return
    let startDist = 0
    let startZoom = 1
    const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)
    const onStart = e => {
      if (e.touches.length === 2) { startDist = dist(e.touches); startZoom = zoomRef.current }
    }
    const onMove = e => {
      if (e.touches.length === 2 && startDist) {
        e.preventDefault()
        setZoom(clamp(startZoom * (dist(e.touches) / startDist)))
      }
    }
    const onEnd = () => { startDist = 0 }
    root.addEventListener('touchstart', onStart, { passive: true })
    root.addEventListener('touchmove', onMove, { passive: false })
    root.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      root.removeEventListener('touchstart', onStart)
      root.removeEventListener('touchmove', onMove)
      root.removeEventListener('touchend', onEnd)
    }
  }, [root])

  const pageWidth = Math.max(0, boxWidth * zoom)
  const firstRatio = ratios[1] || 1.414
  const btn = 'w-9 h-9 flex items-center justify-center rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors disabled:opacity-40'

  return (
    <div>
      {/* Zoom controls */}
      <div className="flex items-center justify-center gap-2 bg-primary-900 py-2">
        <button className={btn} aria-label="Zoom out" disabled={zoom <= MIN_ZOOM} onClick={() => setZoom(z => clamp(z - 0.5))}><FaMinus /></button>
        <span className="text-white text-xs font-semibold w-12 text-center">{Math.round(zoom * 100)}%</span>
        <button className={btn} aria-label="Zoom in" disabled={zoom >= MAX_ZOOM} onClick={() => setZoom(z => clamp(z + 0.5))}><FaPlus /></button>
        <button className={btn} aria-label="Fit to width" onClick={() => setZoom(1)}><FaExpand /></button>
        {pdf && <span className="text-primary-200 text-xs ml-2">{pdf.numPages} pages</span>}
      </div>

      {/* Scrollable pages */}
      <div
        ref={setScrollEl}
        className="bg-gray-200 overflow-auto h-[70vh] min-h-[420px] md:h-[80vh] p-2"
        style={{ overscrollBehavior: 'contain' }}
      >
        {error && !pdf && (
          <p className="text-center text-sm text-gray-600 py-10">Couldn't load the magazine. Please use the Full Screen or Download button above.</p>
        )}
        {!error && !pdf && (
          <p className="text-center text-sm text-gray-500 py-10">Loading magazine…</p>
        )}
        {pdf && boxWidth > 0 && (
          <div className="flex flex-col gap-3 w-max min-w-full items-center">
            {Array.from({ length: pdf.numPages }, (_, i) => (
              <PdfPage
                key={i}
                pdf={pdf}
                pageNumber={i + 1}
                width={pageWidth}
                ratio={ratios[i + 1] || firstRatio}
                root={root}
                onRatio={onRatio}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
