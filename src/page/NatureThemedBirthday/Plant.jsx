import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FireflyParticles from "../../components/NatureThemeBirthday/Particles/FireflyParticles.jsx";

const Plant = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigate("/tree"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8
        relative bg-gradient-to-b from-emerald-900 to-forest-500"
      >
        <FireflyParticles />
        <motion.div className="text-center z-10 max-w-2xl">
          <motion.h1
            className="text-5xl md:text-7xl font-playfair font-bold gradient-text mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            🌿 Childhood Memories
          </motion.h1>

          <motion.div
            className="relative w-96 h-96 mx-auto mb-16"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Soil */}
            <motion.div
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-64 h-24 bg-gradient-to-t from-brown-600 to-brown-500 rounded-b-3xl shadow-2xl"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Stem Growth */}
            <motion.div
              className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-t from-green-600 to-emerald-400 rounded-full glow"
              style={{ height: 0 }}
              initial={{ height: 0 }}
              animate={{ height: 200 }}
              transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
            />

            {/* Leaves */}
            <motion.div
              className="absolute w-20 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-t-full -left-4 top-48 glow"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 3 }}
            />
            <motion.div
              className="absolute w-20 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-t-full -right-4 top-40 glow"
              initial={{ scale: 0, rotate: 30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
            />

            {/* Bud */}
            <motion.div
              className="absolute top-32 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full glow"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1, delay: 4 }}
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-emerald-100 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            From a tiny seed, you grew with dreams as big as the sky. Every
            moment shaped your beautiful journey, petal by petal.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Plant;
