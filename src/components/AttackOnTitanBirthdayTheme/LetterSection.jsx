import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const letter = `Dear Future Me,

Thank you for surviving another year.

Thank you for believing in dreams even when the walls felt too high, even when the Titans felt too many, even when the path forward was dark.

Thank you for continuing despite difficulties. For every bug fixed at 2am, every design rebuilt from scratch, every moment you almost quit but didn't.

You chose to keep moving. That is everything.

No matter what waits beyond these walls — keep building, keep creating, keep dreaming.

The story is not over.

Happy Birthday.

— Srianshu`;

function TypewriterText({ text, started }) {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    if (!started) return;
    idx.current = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) clearInterval(iv);
    }, 25);
    return () => clearInterval(iv);
  }, [text, started]);

  return (
    <pre className="font-cormorant text-[#E2E8F0] text-base md:text-lg leading-8 whitespace-pre-wrap">
      {displayed}
      <span className="animate-pulse border-r-2 border-[#F59E0B] ml-0.5">
        {" "}
      </span>
    </pre>
  );
}

function LetterSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#111827] mt-40"
      id="letter"
    >
      <div className="max-full m-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
            For The Future
          </p>
          <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold">
            A Letter
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative rounded-lg p-8 md:p-12 p-10"
            style={{
              background: "linear-gradient(135deg, #1E293B 0%, #111827 100%)",
              border: "1px solid rgba(245,158,11,0.2)",
              boxShadow:
                "0 0 40px rgba(245,158,11,0.05), 0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="absolute inset-0 opacity-5 rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 31px, #F59E0B 31px, #F59E0B 32px)",
                backgroundPosition: "0 8px",
              }}
            />
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#F59E0B]/15" />
            <div className="relative">
              <TypewriterText text={letter} started={inView} />
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
              className="absolute -bottom-5 right-8 w-14 h-14 rounded-full flex items-center justify-center mb-25"
              style={{
                background: "linear-gradient(135deg, #D97706, #F59E0B)",
                boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
              }}
            >
              <span className="font-cinzel text-[#0F172A] font-black text-xs">
                SP
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default LetterSection;