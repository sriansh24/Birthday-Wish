import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FireflyParticles from "../../components/NatureThemeBirthday/Particles/FireflyParticles";
import LeafParticles from "../../components/NatureThemeBirthday/Particles/LeafParticles";

const MainSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const targetDate = new Date("2026-05-06T18:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });

      if (difference < 0) {
        navigate("/plant");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative">
      <LeafParticles />
      <FireflyParticles />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-32 h-32 mx-auto mb-12 glow bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full glow relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-transparent rounded-full animate-ping" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-playfair font-bold gradient-text mb-8 drop-shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A Seed Was Planted
        </motion.h1>

        <motion.div
          className="grid grid-cols-4 gap-4 mb-12 text-2xl font-bold text-emerald-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>{timeLeft.days || 0}d</div>
          <div>{timeLeft.hours || 0}h</div>
          <div>{timeLeft.minutes || 0}m</div>
          <div>{timeLeft.seconds || 0}s</div>
        </motion.div>

        <motion.button
          onClick={() => navigate("/plant")}
          className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl rounded-full glow hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-2xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          🌱 Begin the Journey
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MainSection;
