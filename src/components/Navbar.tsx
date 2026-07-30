"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-lg">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          John<span className="text-blue-500">.</span>
        </Link>


        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-sm text-gray-300">

          <Link
            href="/about"
            className="transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="transition hover:text-white"
          >
            Work
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

        </div>


        {/* CTA Button */}
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
        >
          Let's Talk
        </Link>

      </nav>
    </motion.header>
  );
}
