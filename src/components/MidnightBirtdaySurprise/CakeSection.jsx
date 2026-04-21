import { useEffect, useRef, useState } from 'react'
import '../../assets/css/MidnightBirthdaySurprise/Cake.css'

// ── Candle component ──────────────────────────────────────────────
function Candle({ blown, delay = 0, color = '#ffe066' }) {
  return (
    <div className="candle-wrap" style={{ '--delay': `${delay}s` }}>
      <div className="candle-body" style={{ background: `linear-gradient(to bottom, ${color}, ${color}aa)` }}>
        <div className="candle-stripe" />
      </div>
      <div className="candle-wick" />
      {!blown && (
        <div className="flame-wrap">
          <div className="flame-outer" />
          <div className="flame-inner" />
          <div className="flame-sparkle" />
          {/* Sparkle ring */}
          {['✦','✧','✦','✧'].map((s,i) => (
            <span key={i} className="candle-sparkle" style={{ '--i': i }}>{s}</span>
          ))}
        </div>
      )}
      {blown && <div className="smoke" />}
    </div>
  )
}

const CANDLE_COLORS = ['#ffe066','#ff6ec7','#7efff5','#b388ff','#ff8a65','#69f0ae','#ffe066']

// ── Main Cake Page ────────────────────────────────────────────────
function CakeSection({ onNext }) {
  const [cakeVisible, setCakeVisible] = useState(false)
  const [blown, setBlown] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setCakeVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  const blowCandles = () => {
    setBlown(true)
    // play puff sound if exists
    if (audioRef.current) {
      audioRef.current.play().catch(() => {})
    }
    setTimeout(() => onNext(), 1200)
  }

  return (
    <div className="cake-root">
      <div className="cake-bg" />

      {/* Floating sparkles background */}
      {Array.from({length: 18}).map((_,i) => (
        <span key={i} className="bg-sparkle" style={{
          left: `${Math.random()*95}%`,
          top: `${Math.random()*95}%`,
          animationDelay: `${Math.random()*3}s`,
          fontSize: `${Math.random()*10+8}px`,
          opacity: Math.random()*0.5+0.2,
        }}>✦</span>
      ))}

      <div className={`cake-section ${cakeVisible ? 'visible' : ''}`}>

        {/* Name reminder */}
        <h2 className="cake-name">Adyasha Satpathy</h2>
        <p className="cake-sub">Make a wish and blow the candles! 🌙</p>

        {/* Cake visual */}
        <div className="cake-container">
          {/* Candles row */}
          <div className="candles-row">
            {CANDLE_COLORS.map((c, i) => (
              <Candle key={i} blown={blown} delay={i * 0.08} color={c} />
            ))}
          </div>

          {/* Cake tiers */}
          <div className="cake-top-tier">
            <div className="cake-tier-deco">
              {['🌙','✨','⭐','✨','🌙'].map((e,i)=><span key={i}>{e}</span>)}
            </div>
            <div className="cake-frosting-drip top-drip" />
          </div>

          <div className="cake-middle-tier">
            <div className="cake-tier-deco">
              {['✦','🎂','✦','🎂','✦'].map((e,i)=><span key={i}>{e}</span>)}
            </div>
            <div className="cake-frosting-drip mid-drip" />
          </div>

          <div className="cake-bottom-tier">
            <div className="cake-tier-deco">
              {['🌟','💫','🌟','💫','🌟','💫'].map((e,i)=><span key={i}>{e}</span>)}
            </div>
          </div>

          <div className="cake-plate" />
        </div>

        {/* Blow button */}
        {!blown && (
          <button className="star-btn blow-btn" onClick={blowCandles}>
            <svg viewBox="0 0 120 120" className="star-svg">
              <polygon
                points="60,5 72,42 110,42 80,65 91,102 60,80 29,102 40,65 10,42 48,42"
                className="star-polygon blow-star"
              />
            </svg>
            <span className="star-btn-text">Blow The Candles</span>
          </button>
        )}

        {blown && (
          <p className="wish-text">✨ Your wish is flying to the stars… ✨</p>
        )}
      </div>

      <audio ref={audioRef}>
        <source src="/src/assets/blow.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
export default CakeSection;