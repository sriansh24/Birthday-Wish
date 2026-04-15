function ArcReactor({ className = 'w-24 h-24' }) {
  return (
    <div className={`animate-float ${className}`} aria-label="Arc Reactor" role="img">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer rings */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(100,200,255,0.2)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(100,200,255,0.4)" strokeWidth="1" />
        {/* Core ring */}
        <circle
          cx="50" cy="50" r="28"
          fill="rgba(0,150,255,0.1)"
          stroke="rgba(100,200,255,0.7)"
          strokeWidth="2"
        />
        {/* Inner glow ring */}
        <circle
          cx="50" cy="50" r="16"
          fill="rgba(0,200,255,0.3)"
          stroke="#64c8ff"
          strokeWidth="2.5"
        />
        {/* Centre gem */}
        <circle cx="50" cy="50" r="7" fill="#aaf0ff" />

        {/* Cardinal spokes */}
        <line x1="50" y1="12" x2="50" y2="22" stroke="rgba(100,200,255,0.6)" strokeWidth="2" />
        <line x1="50" y1="78" x2="50" y2="88" stroke="rgba(100,200,255,0.6)" strokeWidth="2" />
        <line x1="12" y1="50" x2="22" y2="50" stroke="rgba(100,200,255,0.6)" strokeWidth="2" />
        <line x1="78" y1="50" x2="88" y2="50" stroke="rgba(100,200,255,0.6)" strokeWidth="2" />

        {/* Diagonal spokes */}
        <line x1="24" y1="24" x2="31" y2="31" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
        <line x1="69" y1="69" x2="76" y2="76" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
        <line x1="76" y1="24" x2="69" y2="31" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
        <line x1="24" y1="76" x2="31" y2="69" stroke="rgba(100,200,255,0.4)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
export default ArcReactor;