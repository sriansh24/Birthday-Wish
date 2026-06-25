import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { gsap } from "gsap";

function TitanPowerSection() {
  const [unleashed, setUnleashed] = useState(false);
  const containerRef = useRef(null);

  const handleUnleash = () => {
    if (unleashed) return;
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: "+=10",
        y: "+=5",
        duration: 0.05,
        repeat: 10,
        yoyo: true,
        onComplete: () => gsap.set(containerRef.current, { x: 0, y: 0 }),
      });
    }
    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.5 },
        colors: ["#F59E0B", "#FFB703", "#D97706", "#E2E8F0"],
      });
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors: ["#F59E0B", "#FFB703"],
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors: ["#F59E0B", "#FFB703"],
      });
    }, 400);
    setUnleashed(true);
  };

  return (
    <section
      className="relative py-32 px-4 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0F172A]"
      id="titan"
    >
      <AnimatePresence>
        {unleashed &&
          [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.15, 0, 0.08, 0] }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
            />
          ))}
      </AnimatePresence>

      <AnimatePresence>
        {unleashed && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${100 + i * 40}px`,
                  height: `${100 + i * 40}px`,
                  left: "50%",
                  top: "50%",
                  background: `rgba(245, 158, 11, 0.${Math.floor(Math.random() * 3) + 1})`,
                  filter: "blur(40px)",
                }}
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{
                  scale: [0, 2 + i * 0.3, 0],
                  opacity: [0, 0.6, 0],
                  x: `calc(-50% + ${(Math.random() - 0.5) * 200}px)`,
                  y: `calc(-50% + ${(Math.random() - 0.5) * 200}px)`,
                }}
                transition={{ duration: 2, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <AnimatePresence mode="wait">
          {!unleashed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-6">
                Titan Transformation
              </p>
              <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold mb-4">
                Year 22 Awaits
              </h2>
              <p className="font-cormorant text-[#64748b] text-xl italic mb-12">
                Bite the hand. Transform. Emerge.
              </p>
              <motion.button
                onClick={handleUnleash}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 60px rgba(180,70,0,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="font-cinzel px-12 py-5 text-lg font-black tracking-widest rounded-full"
                style={{
                  background: "linear-gradient(135deg, #c2410c, #ea580c)",
                  color: "#fff",
                  border: "1px solid #9a3412",
                }}
              >
                ⚡ UNLEASH POWER
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="unleashed"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
            >
              <motion.p
                className="font-inter text-[#F59E0B] text-xs tracking-[0.6em] uppercase mb-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡ TRANSFORMATION COMPLETE ⚡
              </motion.p>
              <motion.h1
                className="font-cinzel font-black leading-none text-gold-gradient mb-6"
                style={{ fontSize: "clamp(3rem, 15vw, 10rem)" }}
                animate={{
                  textShadow: [
                    "0 0 20px #F59E0B",
                    "0 0 60px #F59E0B",
                    "0 0 20px #F59E0B",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LEVEL 25
              </motion.h1>
              <motion.p
                className="font-cinzel text-2xl md:text-4xl text-[#E2E8F0] font-bold tracking-widest mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                ACHIEVED
              </motion.p>
              <motion.p
                className="font-cormorant text-[#94a3b8] text-xl italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Commander Srianshu has transcended.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
export default TitanPowerSection;
