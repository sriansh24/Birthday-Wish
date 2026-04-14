import { useRef } from 'react'

const rand = (a, b) => Math.random() * (b - a) + a

function StarField() {
  const stars = useRef(
    [...Array(130)].map((_, i) => ({
      id:    i,
      left:  rand(0, 100),
      top:   rand(0, 100),
      size:  rand(1, 3.5),
      dur:   rand(2, 5),
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
            left:    s.left  + '%',
            top:     s.top   + '%',
            width:   s.size  + 'px',
            height:  s.size  + 'px',
            '--dur':   s.dur   + 's',
            '--delay': s.delay + 's',
          }}
        />
      ))}
    </div>
  )
}
export default StarField;