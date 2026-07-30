"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#09090B]">
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 120, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]"
      />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
