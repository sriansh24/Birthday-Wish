function HeroCard({ hero, onClick }) {
  const { icon, name, trait, barColor, borderColor, hoverBorderClass } = hero;

  const glowMap = {
    "bg-marvel-red": "hover:shadow-[0_0_20px_rgba(255,0,0,0.35)]",
    "bg-marvel-gold": "hover:shadow-[0_0_20px_rgba(255,215,0,0.35)]",
    "bg-marvel-dark-green": "hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]",
    "bg-marvel-blue": "hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    "bg-marvel-purple": "hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
  };

  return (
    <article
      onClick={onClick}
      className={`
        group cursor-pointer w-55 h-45
        bg-[#0b1220] rounded-xl p-6
        flex flex-col items-center justify-center text-center
        border ${borderColor}
        transition-all duration-300
        hover:scale-[1.04]
        ${hoverBorderClass}
        ${glowMap[barColor]}
        relative
      `}
    >
      {/* INNER GLOW (subtle like design) */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          transition duration-300bg-linear-to-b from-transparent 
          via-transparent to-white/10`}
      />

      {/* ICON */}
      <div className="text-3xl mb-3">
        <img src={hero.icon} alt="weapons" width="60" height="60" />
      </div>

      {/* TITLE */}
      <h3 className="font-rajdhani text-2xl tracking-wider text-white">
        {name}
      </h3>

      {/* SUBTEXT */}
      <p className="text-1rem tracking-[0.2rem] text-light mt-2 uppercase">
        {trait}
      </p>
    </article>
  )
}

export default HeroCard;
