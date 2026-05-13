import { motion } from "framer-motion";

const LeafParticles = ({ count = 15 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full leaf-float opacity-60"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: "100%",
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            y: ["100%", "-20%"],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

export default LeafParticles;
