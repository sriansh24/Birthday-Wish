import { useState, useEffect } from 'react'
import { CANDLES } from '../../constants/data'

function CakeSVG({ blownOut }) {
  const [tick, setTick] = useState(0)

  // Drive the orbiting sparkle particles
  useEffect(() => {
    if (blownOut) return
    const t = setInterval(() => setTick((n) => n + 1), 80)
    return () => clearInterval(t)
  }, [blownOut])

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

      {/* ── Plate shadow ── */}
      <ellipse cx="160" cy="205" rx="150" ry="12" fill="rgba(0,212,255,0.12)" />

      {/* ── Bottom layer ── */}
      <rect x="30" y="150" width="260" height="55" rx="8" fill="#1a0050" />
      <rect x="30" y="150" width="260" height="55" rx="8" fill="none" stroke="#7c3aed" strokeWidth="1.5" />
      {[0,1,2,3,4,5].map((i) => (
        <path key={'fw'+i}
          d={`M${30+i*44} 150 Q${52+i*44} 143 ${74+i*44} 150`}
          fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="2"
        />
      ))}

      {/* ── Middle layer ── */}
      <rect x="50" y="105" width="220" height="48" rx="6" fill="#12003a" />
      <rect x="50" y="105" width="220" height="48" rx="6" fill="none" stroke="#00d4ff" strokeWidth="1.5" />
      {[0,1,2,3,4].map((i) => (
        <path key={'mw'+i}
          d={`M${50+i*46} 105 Q${73+i*46} 98 ${96+i*46} 105`}
          fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="2"
        />
      ))}

      {/* ── Top layer ── */}
      <rect x="75" y="65" width="170" height="42" rx="6" fill="#0a0028" />
      <rect x="75" y="65" width="170" height="42" rx="6" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
      {[0,1,2,3].map((i) => (
        <path key={'tw'+i}
          d={`M${75+i*46} 65 Q${98+i*46} 58 ${121+i*46} 65`}
          fill="none" stroke="rgba(167,139,250,0.5)" strokeWidth="2"
        />
      ))}

      {/* ── Star decorations ── */}
      {[70,110,150,190,250].map((x, i) => (
        <text key={'ds'+i} x={x} y="175" fontSize="12" textAnchor="middle"
          fill={['#ffd700','#ff6b9d','#00d4ff','#a78bfa','#ffd700'][i]}>★</text>
      ))}
      {[90,130,170,210].map((x, i) => (
        <text key={'ds2'+i} x={x} y="130" fontSize="10" textAnchor="middle"
          fill={['#00d4ff','#ffd700','#ff6b9d','#a78bfa'][i]}>✦</text>
      ))}

      {/* ── Candles ── */}
      {CANDLES.map((c, i) => (
        <g key={'c'+i}>
          {/* Body */}
          <rect x={c.x-5} y="42" width="10" height="24" rx="3" fill={c.color} />
          {/* Wick  */}
          <line x1={c.x} y1="42" x2={c.x} y2="36" stroke="#888" strokeWidth="1.5" />

          {/* Flame (hidden when blown out) */}
          {!blownOut && (
            <g style={{
              transformOrigin: `${c.x}px 36px`,
              animation: `flicker ${0.3 + i * 0.07}s ease-in-out infinite alternate`,
            }}>
              <ellipse cx={c.x} cy={36 - flameH / 2}     rx="4" ry={flameH / 2 + 1} fill={c.flame} opacity="0.9" />
              <ellipse cx={c.x} cy={36 - flameH / 2 - 2} rx="2" ry={flameH / 3}     fill="#fff"    opacity="0.7" />
            </g>
          )}

          {/* Orbiting sparkle particles */}
          {!blownOut && [...Array(4)].map((_, j) => {
            const angle = (tick * 15 + j * 90 + i * 30) * Math.PI / 180
            const r  = 10 + j * 4
            const px = c.x + Math.cos(angle) * r
            const py = (36 - flameH) + Math.sin(angle) * r * 0.4
            return (
              <circle key={j} cx={px} cy={py} r={1.5 + (j % 2)}
                fill={['#ffd700','#fff','#ffb347', c.flame][j]}
                opacity={0.7 + 0.3 * Math.sin((tick + j * 20) * 0.3)}
              />
            )
          })}

          {/* Smoke puffs after blow */}
          {blownOut && (
            <g>
              <circle cx={c.x}     cy="36" r="3" fill="rgba(200,200,200,0.3)" />
              <circle cx={c.x + 2} cy="30" r="2" fill="rgba(200,200,200,0.2)" />
            </g>
          )}
        </g>
      ))}
    </svg>
  )
}
export default CakeSVG;