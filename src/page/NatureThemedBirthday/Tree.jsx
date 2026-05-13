import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FireflyParticles from "../../components/NatureThemeBirthday/Particles/FireflyParticles";

const Tree = () => {
  const navigate = useNavigate();

  const memories = [
    { img: "👫", message: "First meeting - instant connection" },
    { img: "🎉", message: "Late night adventures together" },
    { img: "🌙", message: "Dreams we shared under stars" },
    { img: "💪", message: "Strength we found in each other" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative bg-gradient-to-b from-forest-500 to-emerald-900">
      <FireflyParticles />

      <div className="text-center z-20 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-8xl font-playfair font-bold gradient-text mb-16 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          🌳 Our Friendship Tree
        </motion.h1>

        <motion.div
          className="relative w-[500px] h-[400px] mx-auto mb-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Trunk */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-80 bg-gradient-to-t from-brown-700 via-brown-600 to-emerald-800 rounded-3xl shadow-2xl" />

          {/* Crown */}
          <motion.div
            className="absolute top-0 left-0 w-full h-96 bg-gradient-radial from-emerald-500 via-green-500 to-transparent rounded-full opacity-70 glow"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Branches */}
          <motion.div
            className="absolute w-48 h-4 bg-brown-500 rounded-full -left-12 top-80 glow"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-40 h-4 bg-brown-500 rounded-full -right-16 top-72 glow"
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 glow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="text-6xl mb-6">{memory.img}</div>
              <p className="text-2xl font-bold text-emerald-100 group-hover:text-white transition-colors">
                {memory.message}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={() => navigate("/bloom")}
          className="px-16 py-8 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-2xl rounded-full glow hover:from-emerald-600 hover:to-green-700 shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🌸 Watch It Bloom
        </motion.button>
      </div>
    </div>
  );
};

export default Tree;
