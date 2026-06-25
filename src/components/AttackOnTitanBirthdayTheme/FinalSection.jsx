import { motion } from "framer-motion";

function Stars() {
  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.3, 1] }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

function Birds() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => {
        const dy = (Math.random() - 0.5) * 100;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: `${10 + i * 8}%` }}
            initial={{ x: "-80px" }}
            animate={{ x: "110vw", y: dy }}
            transition={{
              duration: 12 + Math.random() * 6,
              delay: i * 1.5 + 2,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 8,
            }}
          >
            <svg viewBox="0 0 40 20" width="24" fill="none">
              <path
                d="M0,10 Q10,2 20,10 Q30,2 40,10"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}

function FinalSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="final"
      style={{
        background:
          "linear-gradient(180deg, #0F172A 0%, #080c14 40%, #000000 100%)",
      }}
    >
      <Stars />
      <Birds />
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(245,158,11,0.06))",
        }}
      />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2,
            height: 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: "#F59E0B",
            filter: "blur(1px)",
          }}
          animate={{ y: [-20, 20], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="font-inter text-[#F59E0B] text-xs tracking-[0.6em] uppercase mb-6"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✦ Year 25 ✦
          </motion.p>
          <motion.h1
            className="font-cinzel font-black text-[#E2E8F0] leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            25 Years Beyond The Walls
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="font-cormorant text-[#F59E0B] text-3xl md:text-5xl italic font-bold mb-6">
              Happy Birthday Srianshu
            </p>
            <p className="font-cormorant text-[#94a3b8] text-xl md:text-2xl italic mb-4">
              The story is not over.
            </p>
            <motion.p
              className="font-cinzel text-2xl md:text-4xl font-bold text-gold-gradient tracking-widest mt-8"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Keep Moving Forward.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default FinalSection;