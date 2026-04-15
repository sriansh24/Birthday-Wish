function HeroModal({ hero, onClose }) {
  return (
    <div className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-md flex items-center justify-center px-4">
      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-5xl bg-[#0b1220] rounded-2xl overflow-hidden border border-red-600 shadow-[0_0_60px_rgba(255,0,0,0.5)]">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl"
        >
          ✕
        </button>

        {/* IMAGE SECTION */}
        <div className="w-full h-100 md:h-125 bg-black">
          <img
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="p-8 text-center">
          <h2 className="font-bebas text-3xl md:text-4xl tracking-[0.3rem] text-white">
            {hero.name}
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            {hero.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroModal;
