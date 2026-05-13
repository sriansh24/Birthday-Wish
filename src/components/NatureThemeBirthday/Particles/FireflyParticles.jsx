import { motion } from "framer-motion";

const FireflyParticles = ({ count = 20 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300/70 rounded-full firefly-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
};

export default FireflyParticles;
