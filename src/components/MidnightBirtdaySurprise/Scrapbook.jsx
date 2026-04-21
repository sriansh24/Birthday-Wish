import { useState } from 'react'
import '../../assets/css/MidnightBirthdaySurprise/Scrapbook.css'
import IMG1 from '../../assets/img/MidnightBirthdaySurprise/IMG-1.jpeg'
import IMG2 from '../../assets/img/MidnightBirthdaySurprise/IMG-2.jpeg'
import IMG3 from '../../assets/img/MidnightBirthdaySurprise/IMG-3.jpeg'
import IMG4 from '../../assets/img/MidnightBirthdaySurprise/IMG-4.jpeg'
import IMG5 from '../../assets/img/MidnightBirthdaySurprise/IMG-5.jpeg'
import IMG6 from '../../assets/img/MidnightBirthdaySurprise/IMG-6.jpeg'
import IMG7 from '../../assets/img/MidnightBirthdaySurprise/IMG-7.jpeg'
import IMG8 from '../../assets/img/MidnightBirthdaySurprise/IMG-8.jpeg'
import IMG9 from '../../assets/img/MidnightBirthdaySurprise/IMG-9.jpeg'
import IMG10 from '../../assets/img/MidnightBirthdaySurprise/IMG-10.jpeg'
import IMG11 from '../../assets/img/MidnightBirthdaySurprise/IMG-11.jpeg'
import IMG12 from '../../assets/img/MidnightBirthdaySurprise/IMG-12.jpeg'

const PAGES = [
  {
    id: 1,
    title: 'Chapter I · The Beginning',
    polaroids: [
      {
        src: IMG1,
        caption: 'Capturing Some Random Happy Moments ✨',
        rotate: '-3deg',
      },
      {
        src: IMG2,
        caption: 'Forever the Belajya Gosti 🌙',
        rotate: '2deg',
      },
      {
        src: IMG3,
        caption: 'Messing Up With You Is My Favorite Thing 💫',
        rotate: '-1.5deg',
      },
    ],
  },
  {
    id: 2,
    title: 'Chapter II · Golden Moments',
    polaroids: [
      {
        src: IMG4,
        caption: 'Me Between Two Adyashas 🌟',
        rotate: '2.5deg',
      },
      {
        src: IMG5,
        caption: 'My 1st and Forever Bestest Friend Ever ✦',
        rotate: '-2deg',
      },
      {
        src: IMG6,
        caption: 'The Last Meet 🙂',
        rotate: '1deg',
      },
    ],
  },
  {
    id: 3,
    title: 'Chapter III · Laughter & Light',
    polaroids: [
      {
        src: IMG7,
        caption: 'The Random One 🌸',
        rotate: '-2.5deg',
      },
      {
        src: IMG8,
        caption: 'Forever Type Mates 🌙',
        rotate: '3deg',
      },
      {
        src: IMG9,
        caption: 'Say Cheese 😁',
        rotate: '-1deg',
      },
    ],
  },
  {
    id: 4,
    title: 'Chapter IV · Always & Forever',
    polaroids: [
      {
        src: IMG10,
        caption: 'The Close Eye Click ✨',
        rotate: '2deg',
      },
      {
        src: IMG11,
        caption: 'The LAst Trip To Your Home Click 🌟',
        rotate: '-3deg',
      },
      {
        src: IMG12,
        caption: 'The Last Photo Of Us 💫',
        rotate: '1.5deg',
      },
    ],
  },
]

function Polaroid({ src, caption, rotate, index }) {
  return (
    <div
      className="polaroid"
      style={{
        '--rotate': rotate,
        '--delay': `${index * 0.15}s`,
      }}
    >
      <div className="polaroid-photo-wrap">
        <img
          src={src}
          alt={caption}
          className="polaroid-img"
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('no-img')
          }}
        />
        <div className="polaroid-placeholder">
          <span>🌙</span>
          <p>Your Photo Here</p>
        </div>
      </div>
      <div className="polaroid-tape" />
      <p className="polaroid-caption">{caption}</p>
    </div>
  )
}

function Scrapbook() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null) // 'left' | 'right'
  const [animating, setAnimating] = useState(false)

  const goTo = (dir) => {
    if (animating) return
    const nextIndex = dir === 'right'
      ? (current + 1) % PAGES.length
      : (current - 1 + PAGES.length) % PAGES.length

    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(nextIndex)
      setDirection(null)
      setAnimating(false)
    }, 400)
  }

  const page = PAGES[current]

  return (
    <div className="scrapbook-root">
      <div className="scrapbook-bg" />

      {/* Floating sparkles */}
      {Array.from({length: 14}).map((_,i) => (
        <span key={i} className="sb-sparkle" style={{
          left:`${5+i*7}%`,
          animationDelay:`${i*0.4}s`,
          fontSize:`${10+i%3*4}px`,
        }}>✦</span>
      ))}

      {/* Book frame */}
      <div className="scrapbook-frame">
        {/* Header */}
        <div className="scrapbook-header">
          <p className="scrapbook-subtitle">A Digital Memory Scrapbook</p>
          <h1 className="scrapbook-title">Adyasha's Story</h1>
        </div>

        {/* Page */}
        <div className={`scrapbook-page ${animating ? `exit-${direction}` : 'enter'}`}>
          <h2 className="chapter-title">{page.title}</h2>

          <div className="polaroids-row">
            {page.polaroids.map((p, i) => (
              <Polaroid key={`${current}-${i}`} {...p} index={i} />
            ))}
          </div>

          {/* Page indicator dots */}
          <div className="page-dots">
            {PAGES.map((_, i) => (
              <span key={i} className={`dot ${i === current ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className="nav-arrow nav-left"
          onClick={() => goTo('left')}
          aria-label="Previous page"
        >
          <svg viewBox="0 0 40 40" fill="none">
            <polygon points="28,5 12,20 28,35" fill="currentColor" />
          </svg>
        </button>

        <button
          className="nav-arrow nav-right"
          onClick={() => goTo('right')}
          aria-label="Next page"
        >
          <svg viewBox="0 0 40 40" fill="none">
            <polygon points="12,5 28,20 12,35" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Footer message */}
      <p className="scrapbook-footer">
        🌙 Happy Birthday, Adyasha Satpathy — may every memory shine forever ✨
      </p>
    </div>
  )
}
export default Scrapbook;