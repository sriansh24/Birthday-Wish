import { motion } from "framer-motion";

const cards = [
  {
    title: "Frontend Developer",
    desc: "Crafting experiences pixel by pixel.",
    icon: "💻",
    tag: "RANK: ELITE",
  },
  {
    title: "Problem Solver",
    desc: "No bug survives long enough.",
    icon: "🔧",
    tag: "RANK: ACE",
  },
  {
    title: "Dream Chaser",
    desc: "Vision without limits.",
    icon: "🌠",
    tag: "RANK: LEGEND",
  },
  {
    title: "Builder",
    desc: "Ideas into reality, always.",
    icon: "🏗️",
    tag: "RANK: CREATOR",
  },
  {
    title: "Explorer",
    desc: "Beyond every wall, a new world.",
    icon: "🧭",
    tag: "RANK: PIONEER",
  },
];

function AchievementsWall() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#111827] to-[#0F172A] mt-40"
      id="wall"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-4"
      >
        <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
          Identity
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold">
          Achievements Wall
        </h2>
      </motion.div>

      {/* ✅ 5 equal columns covering full screen width */}
      <div className="grid grid-cols-5 gap-3 w-full px-6 m-20">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -8, zIndex: 10 }}
            className="glass-card mx-2 p-8 hover:glow-border transition-all duration-300 group relative overflow-hidden flex flex-col min-h-[150px]"
          >
            {/* Rank tag */}
            <div className="absolute top-4 right-4">
              <span className="font-inter text-[#F59E0B]/50 text-[10px] tracking-widest p-10">
                {card.tag}
              </span>
            </div>

            {/* Icon */}
            <div className="text-6xl mb-6 mt-2 p-10">{card.icon}</div>

            {/* Title */}
            <div className="p-10">
              <h3 className="font-cinzel text-[#E2E8F0] text-xl font-bold mb-4 group-hover:text-gold-gradient transition-all duration-300 leading-snug">
                {card.title}
              </h3>

              {/* Desc */}
              <p className="font-cormorant text-[#64748b] text-lg italic leading-relaxed mt-auto">
                {card.desc}
              </p>
            </div>

            {/* Bottom gold line */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F59E0B] to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsWall;
