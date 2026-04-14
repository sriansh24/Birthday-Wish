import CakeSVG from './CakeSvg'
import { PHASES } from '../../constants/data'

function CakeSection({ phase, blownOut, onBlowClick }) {
  const isVisible = phase === PHASES.CAKE || phase === PHASES.BLOWING || phase === PHASES.GIFT

  if (!isVisible) return null

  return (
    <div
      className={phase === PHASES.CAKE ? 'cake-enter' : ''}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', marginTop: 16, width: '100%',
      }}
    >
      <CakeSVG blownOut={blownOut} />

      {/* Blow button — only visible while candles are still lit */}
      {phase === PHASES.CAKE && (
        <button
          className="blow-btn"
          onClick={onBlowClick}
          style={{
            marginTop: 14,
            fontSize: 'clamp(10px, 1.8vw, 12px)',
            fontWeight: 700, letterSpacing: '0.06em',
            padding: '10px 22px',
          }}
        >
          ⭐ Blow the candle, take your gift
        </button>
      )}
    </div>
  )
}
export default CakeSection;