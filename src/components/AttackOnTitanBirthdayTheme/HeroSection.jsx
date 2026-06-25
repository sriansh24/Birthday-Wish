import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function SunsetBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1a0a0a] to-[#0F172A]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#D97706]/20 via-[#F59E0B]/10 to-transparent" />
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "30%",
          width: "60%",
          height: "4px",
          background: "radial-gradient(ellipse, #F59E0B 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        style={{ height: "40vh" }}
      >
        <path
          d="M0,300 L0,180 L120,80 L240,160 L360,60 L480,140 L600,40 L720,120 L840,50 L960,130 L1080,70 L1200,150 L1320,90 L1440,160 L1440,300 Z"
          fill="#0F172A"
        />
        <path
          d="M0,300 L0,220 L160,140 L320,200 L480,120 L640,180 L800,110 L960,170 L1120,130 L1280,190 L1440,150 L1440,300 Z"
          fill="#111827"
        />
      </svg>
      <motion.div
        className="absolute w-[200%] h-32"
        style={{
          bottom: "28%",
          left: "-50%",
          background:
            "linear-gradient(180deg, transparent, rgba(245,158,11,0.05) 50%, transparent)",
          filter: "blur(20px)",
        }}
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${250 + i * 100}px`,
            height: `${50 + i * 20}px`,
            top: `${8 + i * 10}%`,
            background: `rgba(${30 + i * 10}, ${40 + i * 5}, ${60 + i * 10}, 0.6)`,
            filter: "blur(25px)",
          }}
          animate={{ x: ["-5%", "5%", "-5%"] }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.3 },
      );
    }
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <SunsetBackground />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <span className="font-inter text-[#F59E0B] text-xs tracking-[0.4em] uppercase border border-[#F59E0B]/30 px-4 py-1.5 rounded-full">
            ✦ Year 25 ✦
          </span>
        </motion.div>

        <div ref={titleRef} style={{ opacity: 0 }}>
          <h1
            className="font-cinzel font-black text-[#E2E8F0] leading-tight tracking-wide mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
          >
            <span className="text-gold-gradient">25 Years</span>
            <br />
            <span
              style={{
                fontSize: "0.55em",
                letterSpacing: "0.15em",
                opacity: 0.9,
              }}
            >
              Beyond The Walls
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-10"
        >
          <p className="font-cormorant text-[#94a3b8] text-xl md:text-3xl italic leading-loose">
            Every scar. Every dream. Every victory.
            <br />
            <span className="text-[#E2E8F0]">Has brought me here.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <HeroButton onClick={() => scrollTo("timeline")} primary>
            Begin Journey
          </HeroButton>
          <HeroButton onClick={() => scrollTo("scrapbook")}>
            Open Memories
          </HeroButton>
          <HeroButton onClick={() => scrollTo("titan")}>
            ⚡ Unleash Power
          </HeroButton>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#F59E0B]" />
          <span className="font-inter text-[#64748b] text-xs tracking-widest uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function HeroButton({ children, onClick, primary }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245,158,11,0.5)" }}
      whileTap={{ scale: 0.97 }}
      className={`font-cinzel text-sm tracking-widest px-8 py-3 rounded-full border transition-all duration-300 ${
        primary
          ? "bg-[#F59E0B] text-[#0F172A] border-[#F59E0B] font-bold"
          : "bg-transparent text-[#F59E0B] border-[#F59E0B]/50 hover:border-[#F59E0B]"
      }`}
    >
      {children}
    </motion.button>
  );
}
export default HeroSection;
