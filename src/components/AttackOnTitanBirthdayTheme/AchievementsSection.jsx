import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "../../assets/css/AttackOnTitanBirthdayTheme/AchievementsSection.css";

const stats = [
  { label: "Projects Built", value: 20, suffix: "+", icon: "🛠️" },
  { label: "Lessons Learned", value: 1000, suffix: "+", icon: "📖" },
  { label: "Dreams Pursued", value: 22, suffix: "", icon: "✨" },
  { label: "Challenges Overcome", value: 99, suffix: "+", icon: "⚔️" },
  { label: "Coffee Consumed", value: 365, suffix: " CUPS", icon: "☕" },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#111827] mt-40"
      id="achievements"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
          Statistics
        </p>
        <h2 className="font-cinzel text-3xl mb-7 md:text-5xl text-[#E2E8F0] font-bold">
          22 Years of Data
        </h2>
      </motion.div>

      {/* ✅ Cards — centered block with equal left/right space */}
      <div
        ref={ref}
        className="flex items-stretch justify-center gap-4 ms-50 me-50 ps-64 pe-64"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            // ✅ flex-1 so all cards share equal width
            className="glass-card flex-1 flex flex-col items-center justify-center py-5 px-6 text-center hover:glow-border transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{stat.icon}</div>

            {/* CountUp number */}
            <div
              className="font-cinzel font-black text-gold-gradient mb-3"
              style={{ fontSize: "clamp(1.12rem, 2.21vw, 2.5rem)" }}
            >
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  delay={i * 0.1}
                  suffix={stat.suffix}
                />
              ) : (
                "0"
              )}
            </div>

            {/* Label */}
            <p className="font-inter text-[#64748b] text-sm tracking-wide leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
