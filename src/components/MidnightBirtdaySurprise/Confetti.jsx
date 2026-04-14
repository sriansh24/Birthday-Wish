import { CONFETTI_COLORS } from '../../constants/data'

const rand = (a, b) => Math.random() * (b - a) + a

function Confetti({ active }) {
  if (!active) return null

  const pieces = [...Array(40)].map((_, i) => ({
    id:    i,
    left:  rand(20, 80),
    top:   rand(30, 60),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    dist:  rand(80, 200),
    x:     rand(-120, 120),
    rot:   rand(360, 720) * (Math.random() > 0.5 ? 1 : -1),
    delay: rand(0, 0.3),
    dur:   rand(1.5, 2.5),
  }))

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20 }}>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left:       p.left  + '%',
            top:        p.top   + '%',
            background: p.color,
            '--cf-dist':  p.dist  + 'px',
            '--cf-x':     p.x     + 'px',
            '--cf-rot':   p.rot   + 'deg',
            '--cf-delay': p.delay + 's',
            '--cf-dur':   p.dur   + 's',
          }}
        />
      ))}
    </div>
  )
}
export default Confetti;