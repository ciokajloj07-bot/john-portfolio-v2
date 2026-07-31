"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/70 px-8 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/30">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-black dark:text-white"
        >
          John Ciokajlo
          <span className="text-blue-500">.</span>
        </Link>


        <div className="hidden items-center gap-8 text-sm text-gray-700 dark:text-gray-300 md:flex">

          <Link
            href="/about"
            className="transition hover:text-blue-500"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="transition hover:text-blue-500"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-500"
          >
            Contact
          </Link>

        </div>


        <div className="flex items-center gap-4">

          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-black"
          >
            Let's Talk
          </Link>

        </div>

      </nav>
    </motion.header>
  );
}
