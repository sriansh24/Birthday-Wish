import ProfileFrame from './ProfileFrame'
import { BIRTHDAY_PERSON, PHASES } from '../../constants/data'

function BirthdayHeader({ phase, onGiftClick }) {
  return (
     <div className="flex flex-col items-center justify-center w-full gap-4">
 
      {/* ── Profile photo — now on top ── */}
      <ProfileFrame />
 
      {/* ── Text content ── */}
      <div className="flex flex-col items-center text-center w-full">
 
        {/* "Happy Birthday" label */}
        <div className="anim-fade-down font-[Cormorant_Garamond] text-[clamp(13px,2.5vw,18px)] tracking-[0.35em] font-light italic text-[rgba(180,200,255,0.7)] uppercase mb-1">
          Happy Birthday
        </div>
 
        {/* Name */}
        <h1 className="anim-fade-up-1 font-[Cinzel_Decorative] text-[clamp(20px,4vw,40px)] font-bold leading-tight mb-2 name-gradient">
          {BIRTHDAY_PERSON.name}
        </h1>
 
        {/* Subtitle */}
        <div className="anim-fade-up-2 font-[Cormorant_Garamond] text-[clamp(11px,2vw,15px)] tracking-[0.5em] italic text-[rgba(200,180,255,0.6)] uppercase">
          {BIRTHDAY_PERSON.subtitle}
        </div>
 
        {/* Gift button — only visible in intro phase */}
        {phase === PHASES.INTRO && (
          <button
            className="gift-btn anim-fade-up-3 mt-5 text-[clamp(11px,2vw,14px)] font-bold tracking-widest px-6 py-2.5"
            onClick={onGiftClick}
          >
            ⭐ Click for your gift
          </button>
        )}
      </div>
    </div>
  )
}
export default BirthdayHeader;