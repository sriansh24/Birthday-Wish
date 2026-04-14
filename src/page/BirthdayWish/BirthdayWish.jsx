import { useState, useEffect, useRef } from 'react'

/* ─── Utility ─────────────────────────────────────── */
const rand = (a, b) => Math.random() * (b - a) + a

/* ─── Inline Styles (CSS-in-JS for complex animations) ─── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Orbitron:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; height: 100%; overflow: hidden; }

  :root {
    --neon-blue: #00d4ff;
    --neon-blue-dim: rgba(0,212,255,0.3);
    --neon-blue-glow: rgba(0,212,255,0.6);
    --gold: #ffd700;
  }

  @keyframes twinkle {
    0%,100% { opacity: 0.1; }
    50%      { opacity: 0.85; }
  }
  @keyframes fallDown {
    0%   { transform: translateY(0) rotate(var(--angle,15deg)); opacity: 1; }
    100% { transform: translateY(var(--fall-dist,300px)) rotate(var(--angle,15deg)); opacity: 0; }
  }
  @keyframes framePulse {
    0%,100% { box-shadow: 0 0 20px var(--neon-blue-glow), 0 0 50px rgba(124,58,237,0.4); }
    50%      { box-shadow: 0 0 35px var(--neon-blue-glow), 0 0 80px rgba(124,58,237,0.6), 0 0 100px rgba(0,212,255,0.2); }
  }
  @keyframes giftGlow {
    0%,100% { box-shadow: 0 0 12px var(--neon-blue-dim), inset 0 0 10px rgba(0,212,255,0.05); }
    50%      { box-shadow: 0 0 28px var(--neon-blue-glow), 0 0 50px rgba(0,212,255,0.3), inset 0 0 16px rgba(0,212,255,0.1); }
  }
  @keyframes goldGlow {
    0%,100% { box-shadow: 0 0 12px rgba(255,215,0,0.3); }
    50%      { box-shadow: 0 0 28px rgba(255,215,0,0.7), 0 0 50px rgba(255,215,0,0.3); }
  }
  @keyframes rotate3d {
    0%   { transform: perspective(400px) rotateY(0deg); }
    100% { transform: perspective(400px) rotateY(360deg); }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes cakeFadeUp {
    0%   { opacity: 0; transform: translateY(80px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes scrapFadeIn {
    0%   { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes confettiFall {
    0%   { transform: translateY(0) rotateZ(0); opacity: 1; }
    100% { transform: translateY(var(--cf-dist,200px)) translateX(var(--cf-x,20px)) rotateZ(var(--cf-rot,720deg)); opacity: 0; }
  }
  @keyframes flicker {
    0%,100% { transform: scaleY(1) scaleX(1); }
    50%      { transform: scaleY(1.15) scaleX(0.85); }
  }

  .star-static {
    position: absolute; border-radius: 50%; background: white; opacity: 0;
    animation: twinkle var(--dur,3s) ease-in-out infinite var(--delay,0s);
  }
  .fall-star {
    position: absolute; width: 2px; border-radius: 2px;
    background: linear-gradient(180deg, #fff 0%, rgba(180,220,255,0.8) 50%, transparent 100%);
    animation: fallDown var(--fall-dur,1s) ease-in forwards;
    pointer-events: none;
  }
  .nebula { position: absolute; border-radius: 50%; filter: blur(60px); pointer-events: none; }

  .anim-fade-down  { animation: fadeInDown 1.2s ease both; }
  .anim-fade-up-1  { animation: fadeInUp 1.4s ease 0.3s both; }
  .anim-fade-up-2  { animation: fadeInUp 1.4s ease 0.6s both; }
  .anim-fade-up-3  { animation: fadeInUp 1.5s ease 0.8s both; }
  .anim-fade-right { animation: fadeInRight 1.4s ease 0.4s both; }

  .neon-frame {
    border-radius: 16px;
    background: linear-gradient(135deg, var(--neon-blue), #7c3aed, var(--neon-blue));
    padding: 3px;
    animation: framePulse 2.5s ease-in-out infinite;
  }
  .neon-frame-inner {
    width: 100%; height: 100%; border-radius: 13px;
    background: linear-gradient(135deg,#1a0a3d,#0a1a3d);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .neon-frame-inner img {
    width: 100%; height: 100%; object-fit: cover; border-radius: 13px;
  }

  .gift-btn {
    font-family: 'Orbitron', sans-serif;
    color: var(--neon-blue);
    border: 2px solid var(--neon-blue);
    background: rgba(0,212,255,0.06);
    border-radius: 50px; cursor: pointer;
    animation: giftGlow 2s ease-in-out infinite, rotate3d 6s linear infinite, fadeInUp 1.5s ease 0.8s both;
    transition: background 0.2s;
  }
  .gift-btn:hover { background: rgba(0,212,255,0.15); }

  .blow-btn {
    font-family: 'Orbitron', sans-serif;
    color: #ffd700; border: 2px solid #ffd700;
    background: rgba(255,215,0,0.06);
    border-radius: 50px; cursor: pointer;
    animation: goldGlow 2s ease-in-out infinite, rotate3d 6s linear infinite;
    transition: background 0.2s;
  }
  .blow-btn:hover { background: rgba(255,215,0,0.15); }

  .cake-enter { animation: cakeFadeUp 1s ease both; }
  .scrapbook-enter { animation: scrapFadeIn 1.2s ease both; }

  .confetti-piece {
    position: absolute; width: 6px; height: 6px; border-radius: 1px; pointer-events: none;
    animation: confettiFall var(--cf-dur,2s) ease-out forwards var(--cf-delay,0s);
  }

  .memory-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px; padding: 10px 6px; text-align: center;
    transition: transform 0.2s, box-shadow 0.2s; cursor: default;
  }
  .memory-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,212,255,0.15);
  }
`

/* ─── StarField ────────────────────────────────────── */
function StarField() {
  const stars = useRef(
    [...Array(130)].map((_, i) => ({
      id: i,
      left: rand(0, 100),
      top: rand(0, 100),
      size: rand(1, 3.5),
      dur: rand(2, 5),
      delay: -rand(0, 5),
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-static"
          style={{
            left: s.left + '%',
            top: s.top + '%',
            width: s.size + 'px',
            height: s.size + 'px',
            '--dur': s.dur + 's',
            '--delay': s.delay + 's',
          }}
        />
      ))}
    </div>
  )
}

/* ─── Nebulas ──────────────────────────────────────── */
function Nebulas() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <div className="nebula" style={{ width: 400, height: 300, left: '-10%', top: '10%', background: 'rgba(80,0,180,0.12)' }} />
      <div className="nebula" style={{ width: 300, height: 250, right: '-5%', top: '30%', background: 'rgba(0,100,200,0.1)' }} />
      <div className="nebula" style={{ width: 250, height: 200, left: '20%', bottom: '5%', background: 'rgba(120,0,100,0.09)' }} />
    </div>
  )
}

/* ─── FallingStar ──────────────────────────────────── */
function FallingStar({ onDone }) {
  const left   = rand(5, 95)
  const top    = rand(0, 40)
  const length = rand(60, 140)
  const angle  = rand(10, 30)
  const dur    = rand(0.8, 1.4)
  const dist   = rand(250, 450)

  return (
    <div
      className="fall-star"
      style={{
        left: left + '%',
        top: top + '%',
        height: length + 'px',
        '--angle': angle + 'deg',
        '--fall-dur': dur + 's',
        '--fall-dist': dist + 'px',
      }}
      onAnimationEnd={onDone}
    />
  )
}

/* ─── Confetti ─────────────────────────────────────── */
function Confetti({ active }) {
  if (!active) return null
  const pieces = [...Array(40)].map((_, i) => ({
    id: i,
    left: rand(20, 80),
    top: rand(30, 60),
    color: ['#00d4ff', '#ff6b9d', '#ffd700', '#a78bfa', '#4ade80', '#fb923c'][i % 6],
    dist: rand(80, 200),
    x: rand(-120, 120),
    rot: rand(360, 720) * (Math.random() > 0.5 ? 1 : -1),
    delay: rand(0, 0.3),
    dur: rand(1.5, 2.5),
  }))
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20 }}>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left + '%',
            top: p.top + '%',
            background: p.color,
            '--cf-dist': p.dist + 'px',
            '--cf-x': p.x + 'px',
            '--cf-rot': p.rot + 'deg',
            '--cf-delay': p.delay + 's',
            '--cf-dur': p.dur + 's',
          }}
        />
      ))}
    </div>
  )
}

/* ─── CakeSVG ──────────────────────────────────────── */
function CakeSVG({ blownOut }) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (blownOut) return
    const t = setInterval(() => setTick((n) => n + 1), 80)
    return () => clearInterval(t)
  }, [blownOut])

  const candles = [
    { x: 80,  color: '#ff6b9d', flame: '#ff9dbb' },
    { x: 120, color: '#a78bfa', flame: '#c4b5fd' },
    { x: 160, color: '#00d4ff', flame: '#7dd3fc' },
    { x: 200, color: '#ffd700', flame: '#fde68a' },
    { x: 240, color: '#4ade80', flame: '#bbf7d0' },
  ]
  const flameH = blownOut ? 0 : 12

  return (
    <svg
      viewBox="0 0 320 220"
      width="260"
      height="179"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 0 20px rgba(255,120,0,0.4))' }}
    >
      <defs>
        <style>{`
          @keyframes flicker {
            0%,100% { transform: scaleY(1) scaleX(1); }
            50%      { transform: scaleY(1.15) scaleX(0.85); }
          }
        `}</style>
      </defs>

      {/* Plate shadow */}
      <ellipse cx="160" cy="205" rx="150" ry="12" fill="rgba(0,212,255,0.12)" />

      {/* Bottom layer */}
      <rect x="30"  y="150" width="260" height="55" rx="8" fill="#1a0050" />
      <rect x="30"  y="150" width="260" height="55" rx="8" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
      {[0,1,2,3,4,5].map((i) => (
        <path key={'fw'+i} d={`M${30+i*44} 150 Q${52+i*44} 143 ${74+i*44} 150`} fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="2" />
      ))}

      {/* Middle layer */}
      <rect x="50"  y="105" width="220" height="48" rx="6" fill="#12003a" />
      <rect x="50"  y="105" width="220" height="48" rx="6" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
      {[0,1,2,3,4].map((i) => (
        <path key={'mw'+i} d={`M${50+i*46} 105 Q${73+i*46} 98 ${96+i*46} 105`} fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="2" />
      ))}

      {/* Top layer */}
      <rect x="75"  y="65"  width="170" height="42" rx="6" fill="#0a0028" />
      <rect x="75"  y="65"  width="170" height="42" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
      {[0,1,2,3].map((i) => (
        <path key={'tw'+i} d={`M${75+i*46} 65 Q${98+i*46} 58 ${121+i*46} 65`} fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="2" />
      ))}

      {/* Decorations */}
      {[70,110,150,190,250].map((x, i) => (
        <text key={'ds'+i} x={x} y="175" fontSize="12" textAnchor="middle"
          fill={['#ffd700','#ff6b9d','#00d4ff','#a78bfa','#ffd700'][i]}>★</text>
      ))}
      {[90,130,170,210].map((x, i) => (
        <text key={'ds2'+i} x={x} y="130" fontSize="10" textAnchor="middle"
          fill={['#00d4ff','#ffd700','#ff6b9d','#a78bfa'][i]}>✦</text>
      ))}

      {/* Candles */}
      {candles.map((c, i) => (
        <g key={'c'+i}>
          <rect x={c.x-5} y="42" width="10" height="24" rx="3" fill={c.color} />
          <line x1={c.x} y1="42" x2={c.x} y2="36" stroke="#888" strokeWidth="1.5" />

          {!blownOut && (
            <g style={{ transformOrigin: `${c.x}px 36px`, animation: `flicker ${0.3+i*0.07}s ease-in-out infinite alternate` }}>
              <ellipse cx={c.x} cy={36-flameH/2}   rx="4" ry={flameH/2+1} fill={c.flame}  opacity="0.9" />
              <ellipse cx={c.x} cy={36-flameH/2-2} rx="2" ry={flameH/3}   fill="#fff"     opacity="0.7" />
            </g>
          )}

          {!blownOut && [...Array(4)].map((_, j) => {
            const angle = (tick * 15 + j * 90 + i * 30) * Math.PI / 180
            const r  = 10 + j * 4
            const px = c.x + Math.cos(angle) * r
            const py = (36 - flameH) + Math.sin(angle) * r * 0.4
            return (
              <circle key={j} cx={px} cy={py} r={1.5 + (j % 2)}
                fill={['#ffd700','#fff','#ffb347',c.flame][j]}
                opacity={0.7 + 0.3 * Math.sin((tick + j * 20) * 0.3)} />
            )
          })}

          {blownOut && (
            <g>
              <circle cx={c.x}   cy="36" r="3" fill="rgba(200,200,200,0.3)" />
              <circle cx={c.x+2} cy="30" r="2" fill="rgba(200,200,200,0.2)" />
            </g>
          )}
        </g>
      ))}
    </svg>
  )
}

/* ─── ProfileFrame ─────────────────────────────────── */
function ProfileFrame() {
  const size = 'clamp(90px, 14vw, 140px)'
  return (
    <div className="anim-fade-right" style={{ flexShrink: 0 }}>
      <div
        className="neon-frame"
        style={{ width: size, height: size }}
      >
        <div
          className="neon-frame-inner"
          style={{ fontSize: 'clamp(36px,6vw,64px)' }}
        >
          {/*
            ── REPLACE BELOW WITH YOUR IMAGE ──────────────────────────
            Change '🌙' to an <img> tag:
            <img src="YOUR_IMAGE_URL" alt="Adyasha" />
            The CSS class neon-frame-inner img handles size & fit.
            ────────────────────────────────────────────────────────────
          */}
          🌙
        </div>
      </div>
    </div>
  )
}

/* ─── Scrapbook ────────────────────────────────────── */
function Scrapbook() {
  const memories = [
    { emoji: '🌙', text: 'Midnight chats & laughter' },
    { emoji: '✨', text: 'Every sparkle is you'      },
    { emoji: '🎂', text: 'Sweeter every year'        },
    { emoji: '💫', text: 'Dreams turning to stars'   },
    { emoji: '🌸', text: 'Bloom in your own time'    },
    { emoji: '🎁', text: 'You are the gift'          },
  ]

  return (
    <div
      className="scrapbook-enter"
      style={{
        width: '100%', maxWidth: 560,
        background: 'rgba(10,0,30,0.85)',
        border: '1.5px solid rgba(0,212,255,0.3)',
        borderRadius: 18, padding: 20,
        boxShadow: '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(124,58,237,0.1)',
        marginTop: 16,
      }}
    >
      <div style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: 'clamp(13px,2.5vw,18px)', fontWeight: 700,
        color: 'var(--neon-blue)',
        textShadow: '0 0 15px var(--neon-blue-glow)',
        marginBottom: 14, textAlign: 'center',
      }}>
        ✦ Digital Memory Scrapbook ✦
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 14 }}>
        {memories.map((m, i) => (
          <div key={i} className="memory-card">
            <span style={{ fontSize: 'clamp(20px,3vw,28px)', display: 'block', marginBottom: 4 }}>{m.emoji}</span>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(9px,1.5vw,11px)',
              color: 'rgba(200,200,255,0.7)', fontStyle: 'italic', lineHeight: 1.3,
            }}>{m.text}</div>
          </div>
        ))}
      </div>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(12px,2vw,15px)', fontStyle: 'italic',
        color: 'rgba(220,200,255,0.85)', textAlign: 'center', lineHeight: 1.6,
        borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12,
      }}>
        Happy Birthday, Adyasha Satapathy 🌙<br />
        May every star in this midnight sky be a wish that comes true for you.<br />
        <span style={{ color: 'rgba(0,212,255,0.8)', fontSize: '0.9em' }}>— With love, always ✦</span>
      </p>
    </div>
  )
}

/* ─── Main Layout ──────────────────────────────────────────── */
function BirthdayWish() {
  const [fallingStars, setFallingStars] = useState([])
  const [phase,        setPhase]        = useState('intro') // intro | cake | blowing | gift
  const [blownOut,     setBlownOut]     = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const nextStarId = useRef(0)

  /* Launch a falling star every 3–5 s */
  useEffect(() => {
    let timerId
    const schedule = () => {
      timerId = setTimeout(() => {
        const id = nextStarId.current++
        setFallingStars((fs) => [...fs, id])
        setTimeout(() => setFallingStars((fs) => fs.filter((x) => x !== id)), 2000)
        schedule()
      }, rand(3000, 5000))
    }
    schedule()
    return () => clearTimeout(timerId)
  }, [])

  const handleGiftClick = () => { if (phase === 'intro') setPhase('cake') }

  const handleBlowClick = () => {
    if (phase !== 'cake') return
    setPhase('blowing')
    setBlownOut(true)
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setPhase('gift')
    }, 1800)
  }

  return (
    <>
      {/* Inject global keyframes & utility classes */}
      <style>{globalStyles}</style>

      <div style={{
        width: '100%', height: '100%', minHeight: 500,
        background: 'radial-gradient(ellipse at 60% 40%, #0d0042 0%, #05001a 40%, #000008 100%)',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Cormorant Garamond', serif",
      }}>
        <Nebulas />
        <StarField />

        {fallingStars.map((id) => (
          <FallingStar key={id} onDone={() => setFallingStars((fs) => fs.filter((x) => x !== id))} />
        ))}

        <Confetti active={showConfetti} />

        {/* Main card */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center',
          padding: '24px 20px 20px',
          maxWidth: 860, width: '95%',
        }}>

          {/* Birthday row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', width: '100%' }}>

            {/* Text side */}
            <div style={{ flex: 1, minWidth: 200, textAlign: 'center' }}>
              <div className="anim-fade-down" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(13px,2.5vw,18px)', letterSpacing: '0.35em',
                fontWeight: 300, fontStyle: 'italic',
                color: 'rgba(180,200,255,0.7)', textTransform: 'uppercase', marginBottom: 4,
              }}>Happy Birthday</div>

              <h1 className="anim-fade-up-1" style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: 'clamp(20px,4vw,40px)', fontWeight: 700,
                background: 'linear-gradient(135deg, #fff 0%, var(--neon-blue) 40%, #a78bfa 70%, #fff 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.5))',
                lineHeight: 1.2, marginBottom: 8,
              }}>Adyasha Satapathy</h1>

              <div className="anim-fade-up-2" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(11px,2vw,15px)', letterSpacing: '0.5em',
                fontStyle: 'italic', color: 'rgba(200,180,255,0.6)', textTransform: 'uppercase',
              }}>A night written in the stars</div>

              {phase === 'intro' && (
                <button
                  className="gift-btn anim-fade-up-3"
                  onClick={handleGiftClick}
                  style={{ marginTop: 20, fontSize: 'clamp(11px,2vw,14px)', fontWeight: 700, letterSpacing: '0.08em', padding: '10px 24px' }}
                >
                  ⭐ Click for your gift
                </button>
              )}
            </div>

            {/* Profile image */}
            <ProfileFrame />
          </div>

          {/* Cake */}
          {(phase === 'cake' || phase === 'blowing' || phase === 'gift') && (
            <div
              className={phase === 'cake' ? 'cake-enter' : ''}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 16, width: '100%' }}
            >
              <CakeSVG blownOut={blownOut} />

              {phase === 'cake' && (
                <button
                  className="blow-btn"
                  onClick={handleBlowClick}
                  style={{ marginTop: 14, fontSize: 'clamp(10px,1.8vw,12px)', fontWeight: 700, letterSpacing: '0.06em', padding: '10px 22px' }}
                >
                  ⭐ Blow the candle, take your gift
                </button>
              )}
            </div>
          )}

          {/* Scrapbook */}
          {phase === 'gift' && <Scrapbook />}
        </div>
      </div>
    </>
  )
}
export default BirthdayWish;