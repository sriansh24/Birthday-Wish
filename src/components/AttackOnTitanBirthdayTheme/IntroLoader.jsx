import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SEQUENCE = [
  { text: "Year 25", sub: null, delay: 800 },
  { text: "Humanity still fights for freedom...", sub: null, delay: 2500 },
  { text: null, sub: null, pause: 1000 },
  { text: "Commander Srianshu", sub: "Another year has passed.", delay: 2500 },
  { text: null, sub: null, pause: 800 },
  { text: "The story continues...", sub: null, delay: 2000, final: true },
];

function TypeWriter({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const step = SEQUENCE[phase];
    if (!step) return;
    const dur = step.pause || step.delay || 2000;
    const t = setTimeout(() => {
      if (step.final) {
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 900);
        }, dur);
        return;
      }
      setPhase((p) => p + 1);
    }, dur + 600);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  const step = SEQUENCE[phase] || {};

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9995] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gray-900 opacity-60"
                style={{
                  width: `${200 + i * 80}px`,
                  height: `${60 + i * 20}px`,
                  top: `${10 + i * 15}%`,
                  left: `-200px`,
                  filter: "blur(20px)",
                }}
                animate={{ x: ["0vw", "120vw"] }}
                transition={{
                  duration: 20 + i * 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 3,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-8 max-w-2xl">
            <AnimatePresence mode="wait">
              {step.text && (
                <motion.div
                  key={phase + "main"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="font-cinzel text-[#F59E0B] text-3xl md:text-5xl font-bold tracking-widest mb-4">
                    <TypeWriter text={step.text} />
                  </p>
                  {step.sub && (
                    <motion.p
                      className="font-cormorant text-[#E2E8F0] text-xl md:text-2xl italic mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {step.sub}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F59E0B]/10 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default IntroLoader;