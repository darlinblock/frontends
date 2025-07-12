import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit"; // kalau pakai RainbowKit
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [lang, setLang] = useState("ID");

  const toggleLang = () => {
    setLang((prev) => (prev === "ID" ? "EN" : "ID"));
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-black shadow-md border-b border-red-500">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center space-x-2"
      >
        <img src="/logo.png" alt="Darlux" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-red-500">Darlux</h1>
      </motion.div>

      {/* Menu */}
      <nav className="flex items-center gap-4 text-sm md:text-base">
        <Link to="/" className="hover:text-red-400">Home</Link>
        <Link to="/presale" className="hover:text-red-400">Presale</Link>
        <Link to="/mining" className="hover:text-red-400">Mining</Link>
        <Link to="/wallet" className="hover:text-red-400">Wallet</Link>
        <Link to="/leaderboard" className="hover:text-red-400">Leaderboard</Link>
      </nav>

      {/* Right: Language + Wallet */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleLang}
          className="text-xs border border-red-400 px-2 py-1 rounded hover:bg-red-500 hover:text-black"
        >
          {lang}
        </button>

        {/* Connect Wallet Button (wagmi / rainbowkit) */}
        <ConnectButton showBalance={false} />
      </div>
    </header>
  );
}