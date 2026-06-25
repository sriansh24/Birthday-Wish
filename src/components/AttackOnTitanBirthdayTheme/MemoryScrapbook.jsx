import { useRef } from "react";
import { motion } from "framer-motion";

const memories = [
  {
    title: "The First Hello World",
    desc: "That moment the screen printed those words. Nothing was ever the same.",
    emoji: "👾",
    color: "#F59E0B",
  },
  {
    title: "First Project Launch",
    desc: "Deployed into the world. Terrifying. Beautiful. Real.",
    emoji: "🚀",
    color: "#FFB703",
  },
  {
    title: "Learning the Hard Way",
    desc: "Bugs that lasted days. Lessons that lasted forever.",
    emoji: "🐛",
    color: "#D97706",
  },
  {
    title: "The Dream Takes Shape",
    desc: "Frontend became a language. Designs became experiences.",
    emoji: "🎨",
    color: "#F59E0B",
  },
  {
    title: "Friendships & Mentors",
    desc: "People who saw potential before you did. Priceless.",
    emoji: "🤝",
    color: "#FFB703",
  },
  {
    title: "Year 25 Begins",
    desc: "Still here. Still moving. Still building.",
    emoji: "⭐",
    color: "#D97706",
  },
];

function MemoryScrapbook() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#111827] to-[#0F172A] mt-40"
      id="scrapbook"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
          Memory Vault
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold">
          The Scrapbook
        </h2>
        <p className="font-cormorant text-[#64748b] text-lg italic mt-3">
          Scroll to relive the journey →
        </p>
      </motion.div>

      <div
        className="flex gap-6 overflow-x-auto pb-8 px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {memories.map((mem, i) => (
          <motion.div
            key={mem.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            style={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            className="flex-shrink-0 w-64 md:w-72 glass-card p-6 cursor-pointer transition-all duration-300"
          >
            <div
              className="w-full h-40 rounded-lg mb-4 flex items-center justify-center text-5xl"
              style={{
                background: `linear-gradient(135deg, ${mem.color}22, ${mem.color}44)`,
                border: `1px solid ${mem.color}44`,
              }}
            >
              {mem.emoji}
            </div>
            <div className="p-5">
              <h3 className="font-cinzel text-[#E2E8F0] font-bold text-sm mb-2">
                {mem.title}
              </h3>
              <p className="font-cormorant text-[#94a3b8] text-base italic leading-relaxed">
                {mem.desc}
              </p>
            </div>
            <div
              className="mt-4 h-px w-full"
              style={{
                background: `linear-gradient(90deg, ${mem.color}60, transparent)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default MemoryScrapbook;
