import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-black text-center border-t border-[#1E293B]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-3"
      >
        <p className="font-cinzel text-[#F59E0B] text-sm tracking-widest">
          Built with passion.
        </p>
        <p className="font-cormorant text-[#64748b] text-base italic">
          A gift to myself.
        </p>
        <p className="font-inter text-[#334155] text-xs tracking-widest mt-4">
          © 2026 · Srianshu Pattanaik · All memories reserved.
        </p>
      </motion.div>
    </footer>
  );
}
export default Footer;