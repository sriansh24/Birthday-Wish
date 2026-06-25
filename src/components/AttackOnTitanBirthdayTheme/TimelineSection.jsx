import { motion } from "framer-motion";

const arcs = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Childhood Memories",
    desc: "The walls were vast, the world was new. Curiosity ignited by everything around — a mind beginning to ask why.",
    icon: "🌅",
  },
  {
    number: "02",
    title: "Growth",
    subtitle: "School Years",
    desc: "Inside the walls, lessons were learned. Not just from books, but from people, failures, and silent victories.",
    icon: "📚",
  },
  {
    number: "03",
    title: "Dreams",
    subtitle: "Learning to Build",
    desc: "A screen. A blank canvas. The first line of code was a key that opened a door to infinite worlds.",
    icon: "💻",
  },
  {
    number: "04",
    title: "Beyond The Walls",
    subtitle: "Building & Pursuing",
    desc: "Projects shipped. Ideas realized. The horizon was not the end — it was the beginning of everything.",
    icon: "🚀",
  },
];

function TimelineSection() {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-[#111827] to-[#0F172A] mt-40"
      id="timeline"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 px-4"
      >
        <p className="font-inter text-[#F59E0B] text-xl tracking-[0.4em] uppercase mb-3">
          Chronicles
        </p>
        <h2 className="font-cinzel text-3xl md:text-5xl text-[#E2E8F0] font-bold">
          The Four Arcs
        </h2>
        <p className="font-cormorant text-[#64748b] text-lg italic mt-4">
          Every arc shaped who I am.
        </p>
      </motion.div>

      {/* Timeline wrapper — full viewport width, no max-w cap */}
      <div className="relative w-full px-12">
        {/* Center vertical line */}
        <div
          className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F59E0B]/40 to-transparent"
          style={{ left: "50%" }}
        />

        <div className="flex flex-col gap-16 m-20">
          {arcs.map((arc, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={arc.number}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                // ✅ Full width two-column grid, no max-w restriction
                className="relative w-full grid gap-8 items-center"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                {isLeft ? (
                  <>
                    {/* ✅ Card fills entire left half */}
                    <div className="glass-card p-8 hover:glow-border transition-all duration-500 group w-full ">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{arc.icon}</span>
                        <div className="flex-1">
                          <span className="font-cinzel text-[#F59E0B]/50 text-xs tracking-widest">
                            ARC {arc.number}
                          </span>
                          <h3 className="font-cinzel text-[#E2E8F0] text-2xl md:text-3xl font-bold mt-1 mb-2 group-hover:text-gold-gradient transition-all duration-300">
                            {arc.title}
                          </h3>
                          <p className="font-inter text-[#F59E0B] text-xs tracking-widest uppercase mb-3">
                            {arc.subtitle}
                          </p>
                          <p className="font-cormorant text-[#94a3b8] text-xl italic leading-relaxed">
                            {arc.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Right half empty */}
                    <div className="w-full" />
                  </>
                ) : (
                  <>
                    {/* Left half empty */}
                    <div className="w-full" />
                    {/* ✅ Card fills entire right half */}
                    <div className="glass-card p-8 hover:glow-border transition-all duration-500 group w-full p-10">
                      <div className="flex items-start gap-4">
                        <span className="text-4xl">{arc.icon}</span>
                        <div className="flex-1">
                          <span className="font-cinzel text-[#F59E0B]/50 text-xs tracking-widest">
                            ARC {arc.number}
                          </span>
                          <h3 className="font-cinzel text-[#E2E8F0] text-2xl md:text-3xl font-bold mt-1 mb-2 group-hover:text-gold-gradient transition-all duration-300">
                            {arc.title}
                          </h3>
                          <p className="font-inter text-[#F59E0B] text-xs tracking-widest uppercase mb-3">
                            {arc.subtitle}
                          </p>
                          <p className="font-cormorant text-[#94a3b8] text-xl italic leading-relaxed">
                            {arc.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Center dot */}
                <div
                  className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 items-center justify-center"
                  style={{ left: "calc(50% - 8px)" }}
                >
                  <div className="w-4 h-4 rounded-full border-2 border-[#F59E0B] bg-[#0F172A] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
