import { motion } from "framer-motion";

const memories = [
  "First Code: PrameyaNews7",
  "First Bug: PrameyaNews7",
  "First Deploy: Stratovia",
  "First Dream: To be a Cricketer",
  "First Friend: My School Friends",
  "First Project: PrameyaNews7",
  "Year 25",
  "Keep Moving",
];

function PathsRealm() {
  return (
    <section
      className="relative py-32 px-4 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#111827] to-[#0F172A]"
      id="paths"
    >
      {/* Background glow — made bigger */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full"
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F59E0B]"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.5, 0.1] }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        {/* Tree + orbiting memories container */}
        <div
          className="relative mx-auto mb-16 flex justify-center"
          style={{ width: "700px", height: "700px" }}
        >
          {/* ✅ SVG tree — much bigger */}
          <svg
            viewBox="0 0 200 300"
            fill="none"
            style={{
              position: "absolute",
              width: "340px",
              height: "480px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.7,
            }}
          >
            <path
              d="M100,280 L100,160"
              stroke="#F59E0B"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M100,160 L60,120 M100,160 L140,120"
              stroke="#F59E0B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M60,120 L30,80 M60,120 L80,90"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M140,120 L170,80 M140,120 L120,90"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="100" cy="40" r="50" fill="#F59E0B" opacity="0.08" />
            <circle cx="100" cy="40" r="35" fill="#F59E0B" opacity="0.06" />
            <circle cx="40" cy="70" r="30" fill="#F59E0B" opacity="0.05" />
            <circle cx="160" cy="70" r="30" fill="#F59E0B" opacity="0.05" />
          </svg>

          {/* ✅ Orbiting memory labels — bigger radius */}
          {memories.map((mem, i) => {
            const angle = (i / memories.length) * 360;
            const radius = 260 + (i % 2) * 40; // ✅ was 120+30, now 260+40
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <motion.div
                key={mem}
                className="absolute"
                style={{ left: "50%", top: "50%" }}
                animate={{
                  x: [x, x * 1.05, x],
                  y: [y, y * 1.05, y],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <span
                  className="font-inter text-[#F59E0B] tracking-wider whitespace-nowrap"
                  style={{
                    fontSize: "13px", // ✅ was 10px
                    transform: "translate(-50%, -50%)",
                    display: "block",
                    textShadow: "0 0 12px rgba(245,158,11,0.6)",
                  }}
                >
                  {mem}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Text below */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cinzel text-4xl md:text-6xl text-[#E2E8F0] font-bold mb-4"
        >
          All Paths Are Connected.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant text-[#64748b] text-2xl italic"
        >
          Every memory orbits the same light.
        </motion.p>
      </div>
    </section>
  );
}

export default PathsRealm;
