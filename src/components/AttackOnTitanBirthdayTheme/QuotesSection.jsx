import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  { text: "Keep Moving Forward.", author: "— Survey Corps Motto" },
  { text: "Freedom is worth pursuing.", author: "— Beyond the Walls" },
  { text: "Every journey shapes the future.", author: "— Srianshu, Year 25" },
  { text: "Dedicate your heart.", author: "— Commander's Creed" },
  { text: "The story is not over.", author: "— Year 25" },
];

function QuotesSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  const q = quotes[idx];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-[#0F172A] to-[#111827] flex items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="font-cinzel text-[20vw] font-black text-[#F59E0B] select-none">
          "
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-cinzel text-2xl md:text-5xl font-bold text-gold-gradient leading-tight mb-6">
              "{q.text}"
            </p>
            <p className="font-cormorant text-[#64748b] text-xl italic">
              {q.author}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "bg-[#F59E0B] w-6" : "bg-[#334155] w-2"}`}
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default QuotesSection;