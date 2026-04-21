import { useEffect, useRef, useState } from 'react';
import '../../assets/css/MidnightBirthdaySurprise/Birthday.css';

// ── Fireworks canvas ──────────────────────────────────────────────
function FireworksCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const colors = ['#ffe066','#ff6ec7','#7efff5','#b388ff','#ff8a65','#69f0ae','#fff']

    function explode(x, y) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 90; i++) {
        const angle = (Math.PI * 2 / 90) * i
        const speed = Math.random() * 5 + 2
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          r: Math.random() * 3 + 1,
          decay: Math.random() * 0.015 + 0.012,
        })
      }
    }

    let animId
    let lastExplode = 0

    const draw = (ts) => {
      ctx.fillStyle = 'rgba(5,5,20,0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (ts - lastExplode > 600) {
        explode(
          Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
          Math.random() * canvas.height * 0.55 + 40
        )
        lastExplode = ts
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.06
        p.vx *= 0.98
        p.alpha -= p.decay
        if (p.alpha <= 0) { particles.splice(i, 1); continue }
        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="fireworks-canvas" />
}

// ── Sky Lanterns ──────────────────────────────────────────────────
const LANTERNS = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  left: `${8 + i * 10}%`,
  delay: `${i * 1.1}s`,
  dur: `${7 + (i % 3) * 2}s`,
  color: ['#ffe066','#ffb347','#ff8a65','#f9a8d4','#fde68a'][i % 5],
}))

function SkyLanterns() {
  return (
    <div className="lanterns-layer">
      {LANTERNS.map(l => (
        <div key={l.id} className="lantern-wrap" style={{ left: l.left, animationDelay: l.delay, animationDuration: l.dur }}>
          <div className="lantern-body" style={{ background: `radial-gradient(ellipse at 40% 35%, #fff8e1, ${l.color})`, boxShadow: `0 0 18px 6px ${l.color}88` }}>
            <div className="lantern-glow" style={{ background: l.color }} />
          </div>
          <div className="lantern-thread" />
          <div className="lantern-flame" />
        </div>
      ))}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────
function Surprise({ onNext }) {
  const [photoVisible, setPhotoVisible] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Fade in photo + name
    const t1 = setTimeout(() => setPhotoVisible(true), 300)
    const t2 = setTimeout(() => setNameVisible(true), 900)

    // Auto-advance to cake page after 4.5s
    const t3 = setTimeout(() => onNext(), 4500)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onNext])

  return (
    <div className="birthday-root">
      {/* Background starfield */}
      <div className="birthday-bg" />

      {/* Fireworks */}
      <FireworksCanvas />

      {/* Sky Lanterns */}
      <SkyLanterns />

      {/* Content */}
      <div className="birthday-content">
        <div className={`photo-frame ${photoVisible ? 'visible' : ''}`}>
          <div className="photo-glow-ring" />
          {/* <img
            src={Birthday_Person}
            alt="Adyasha Satpathy"
            className="person-photo"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('no-photo')
            }}
          /> */}
          <div className="photo-sparkles">
            {['✦','✧','✦','✧','✦'].map((s,i) => (
              <span key={i} className="ph-sparkle" style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>
            ))}
          </div>
        </div>

        <div className={`name-reveal ${nameVisible ? 'visible' : ''}`}>
          <p className="happy-birthday-text">🎂 Happy Birthday 🎂</p>
          <h1 className="person-name">Adyasha Satpathy</h1>
          <p className="name-tagline">May your night shine as bright as the stars ✨</p>
        </div>
      </div>
    </div>
  )
}
export default Surprise