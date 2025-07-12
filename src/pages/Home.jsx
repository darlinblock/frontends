import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-red-500 font-hacker leading-tight mb-6">
          Welcome to <br />
          <span className="text-white">Darlux Protocol</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-mono">
          Decentralized Mining Simulation. Own your future. Hack the system.
        </p>
        <p className="mt-4 text-sm text-red-400 italic">
          ⛓️ Built for CEX launch — Not your average meme coin.
        </p>
      </motion.div>

      {/* Right: Hoodie Girl Image */}
      <motion.img
        src="/hoodie-girl.png"
        alt="Hacker Girl"
        className="w-64 md:w-[400px] rounded-2xl shadow-xl shadow-red-500/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
    </div>
  );