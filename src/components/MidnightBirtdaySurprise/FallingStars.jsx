const rand = (a, b) => Math.random() * (b - a) + a

function FallingStars({ onDone }) {
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
        left:          left   + '%',
        top:           top    + '%',
        height:        length + 'px',
        '--angle':     angle  + 'deg',
        '--fall-dur':  dur    + 's',
        '--fall-dist': dist   + 'px',
      }}
      onAnimationEnd={onDone}
    />
  )
}
export default FallingStars;