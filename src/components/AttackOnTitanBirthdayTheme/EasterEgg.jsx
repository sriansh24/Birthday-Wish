import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function EasterEgg() {
  const [keyClicks, setKeyClicks] = useState(0);
  const [showBasement, setShowBasement] = useState(false);
  const [konamiIdx, setKonamiIdx] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === KONAMI[konamiIdx]) {
        const next = konamiIdx + 1;
        if (next === KONAMI.length) {
          setShowBasement(true);
          setKonamiIdx(0);
        } else setKonamiIdx(next);
      } else setKonamiIdx(0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [konamiIdx]);

  const handleKeyClick = () => {
    const next = keyClicks + 1;
    setKeyClicks(next);
    if (next >= 3) {
      setShowBasement(true);
      setKeyClicks(0);
    }
  };

  return (
    <>
      <motion.button
        onClick={handleKeyClick}
        className="fixed bottom-6 left-6 z-[500] w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#334155] hover:text-[#F59E0B] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Secret button"
      >
        🗝️
      </motion.button>

      <AnimatePresence>
        {showBasement && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBasement(false)}
          >
            <motion.div
              className="glass-card glow-border p-8 md:p-12 max-w-lg mx-4 text-center"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-6">🔑</div>
              <p className="font-inter text-[#F59E0B] text-xs tracking-[0.4em] uppercase mb-4">
                Secret Unlocked
              </p>
              <h2 className="font-cinzel text-2xl md:text-3xl text-[#E2E8F0] font-bold mb-4">
                Basement Memories
              </h2>
              <p className="font-cormorant text-[#94a3b8] text-lg italic leading-relaxed mb-6">
                "The truth was always here. You just had to look for it."
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["📷", "🎬", "🗒️"].map((icon, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-[#1E293B] flex items-center justify-center text-3xl border border-[#334155]"
                  >
                    {icon}
                  </div>
                ))}
              </div>
              <p className="font-inter text-[#64748b] text-xs mb-6">
                Add your private photos & videos by editing EasterEgg.jsx
              </p>
              <button
                onClick={() => setShowBasement(false)}
                className="font-cinzel text-[#F59E0B] text-sm border border-[#F59E0B]/40 px-6 py-2 rounded-full hover:bg-[#F59E0B]/10 transition-colors"
              >
                Close Basement
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default EasterEgg;