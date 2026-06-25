import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const profileData = [
  { label: "NAME", value: "Srianshu Pattanaik" },
  { label: "AGE", value: "25" },
  { label: "RANK", value: "Commander" },
  { label: "OCCUPATION", value: "Frontend Developer" },
  { label: "DREAM", value: "Freedom and Creation" },
  { label: "STATUS", value: "⚡ Still Moving Forward" },
];

function CharacterProfile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#111827]"
      id="profile"
    >
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
            Military Dossier
          </p>
          <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold">
            Classified Profile
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="glass-card glow-border p-8 md:p-12 relative overflow-hidden m-20"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #F59E0B 0px, transparent 1px, transparent 30px), repeating-linear-gradient(90deg, #F59E0B 0px, transparent 1px, transparent 30px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="border-b border-[#F59E0B]/30 pb-4 mb-8 flex justify-between items-center p-10"
          >
            <span className="font-inter text-[#F59E0B] text-xs tracking-widest">
              SURVEY CORPS — CLASSIFIED
            </span>
            <span className="font-inter text-[#64748b] text-xs">
              DOC-22-AOT
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
            {profileData.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="border border-[#334155] rounded-lg p-4 hover:border-[#F59E0B]/40 transition-colors duration-300">
                  <p className="font-inter text-[#64748b] text-[10px] tracking-[0.3em] uppercase mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`font-cinzel text-[#E2E8F0] text-lg md:text-xl font-semibold ${item.label === "STATUS" ? "text-gold-gradient" : ""}`}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={inView ? { opacity: 0.15, scale: 1, rotate: -15 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 right-8 border-4 border-[#F59E0B] rounded-lg px-4 py-2"
          >
            <p className="font-cinzel text-[#F59E0B] text-lg font-black tracking-widest">
              APPROVED
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default CharacterProfile;