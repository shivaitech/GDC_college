import { newsItems } from '../data/collegeData'
import { FaNewspaper } from 'react-icons/fa'

export default function NewsTicker() {
  // Duplicate items for seamless loop
  const allItems = [...newsItems, ...newsItems]

  return (
    <div className="bg-primary-800 text-white text-sm overflow-hidden">
      <div className="container mx-auto px-0 flex items-stretch">
        {/* Label */}
        <div className="flex-shrink-0 bg-saffron-500 text-white flex items-center gap-2 px-4 py-2 font-semibold text-xs uppercase tracking-wide">
          <FaNewspaper className="text-sm" />
          <span className="hidden sm:inline">Latest News</span>
          <span className="sm:hidden">News</span>
        </div>
        {/* Ticker */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className="flex items-center gap-0 py-2"
            style={{ animation: 'ticker 40s linear infinite', width: 'max-content' }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {allItems.map((item, i) => (
              <span key={`${item.id}-${i}`} className="flex items-center gap-2 whitespace-nowrap px-6">
                {item.type === 'new' && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">NEW</span>
                )}
                {item.type === 'notice' && (
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Notice</span>
                )}
                {item.type === 'event' && (
                  <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">Event</span>
                )}
                <span className="text-primary-100">{item.text}</span>
                <span className="text-primary-400 text-[11px] ml-2">| {item.date}</span>
                <span className="text-primary-600 ml-4">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
