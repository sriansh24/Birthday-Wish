function BirthdayCake({ onClick }) {
  return (
    <div
      className="relative mx-auto mb-6 w-44 h-44 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
      onClick={onClick}
      role="button"
      aria-label="Birthday cake — click to launch confetti!"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <svg
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Bottom tier */}
        <rect x="20" y="110" width="140" height="55" rx="8" fill="#C60000" />
        {/* Middle tier */}
        <rect x="30" y="85" width="120" height="35" rx="6" fill="#9a0000" />

        {/* Frosting wave – bottom */}
        <path
          d="M20 110 Q45 98 70 110 Q95 122 120 110 Q145 98 160 110"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        {/* Frosting wave – middle */}
        <path
          d="M30 85 Q52 75 75 85 Q98 95 120 85 Q142 75 150 85"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />

        {/* Avengers A on cake */}
        <text
          x="90"
          y="148"
          textAnchor="middle"
          fontFamily="'Bebas Neue', cursive"
          fontSize="36"
          fill="rgba(255,255,255,0.9)"
        >
          A
        </text>

        {/* Candles */}
        <rect x="55" y="62" width="8" height="25" rx="3" fill="#FFD700" />
        <rect x="86" y="55" width="8" height="32" rx="3" fill="#1A8CFF" />
        <rect x="117" y="62" width="8" height="25" rx="3" fill="#7B2FBE" />

        {/* Flames */}
        <ellipse cx="59" cy="59" rx="5" ry="7" fill="#FFD700" opacity="0.9" />
        <ellipse cx="59" cy="58" rx="3" ry="4" fill="white" opacity="0.6" />

        <ellipse cx="90" cy="52" rx="5" ry="7" fill="#FFD700" opacity="0.9" />
        <ellipse cx="90" cy="51" rx="3" ry="4" fill="white" opacity="0.6" />

        <ellipse cx="121" cy="59" rx="5" ry="7" fill="#FFD700" opacity="0.9" />
        <ellipse cx="121" cy="58" rx="3" ry="4" fill="white" opacity="0.6" />
      </svg>
    </div>
  )
}
export default BirthdayCake;