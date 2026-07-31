"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-5 left-0 z-50 w-full"
    >
      <nav className="mx-auto max-w-7xl rounded-full border border-gray-200 bg-white/90 px-6 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/40">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
          >
            John Ciokajlo
            <span className="text-blue-500">.</span>
          </Link>


          {/* Desktop Links */}
          <div className="hidden items-center gap-8 text-sm md:flex">

            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-500 dark:text-gray-200"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-gray-800 hover:text-blue-500 dark:text-gray-200"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-500 dark:text-gray-200"
            >
              Contact
            </Link>

          </div>


          {/* Actions */}
          <div className="flex items-center gap-3">

            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:scale-105 sm:block"
            >
              Let's Talk
            </Link>


            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full border border-gray-300 px-3 py-2 text-black dark:border-white/20 dark:text-white md:hidden"
            >
              ☰
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {open && (

          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-black">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-gray-800 dark:text-gray-200"
            >
              About
            </Link>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-gray-800 dark:text-gray-200"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-800 dark:text-gray-200"
            >
              Contact
            </Link>

          </div>

        )}

      </nav>
    </motion.header>
  );
}
