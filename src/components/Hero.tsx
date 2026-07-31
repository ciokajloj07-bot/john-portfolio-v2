"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="flex min-h-screen items-center px-8 pt-40">
      <div className="mx-auto w-full max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Label */}
          <p className="text-sm uppercase tracking-[0.5em] text-blue-600 dark:text-blue-400">
            Frontend Developer
          </p>


          {/* Main Heading */}
          <h1 className="mt-8 max-w-5xl text-6xl font-bold leading-tight text-black dark:text-white md:text-8xl">
            Building digital experiences
            <br />
            that feel effortless.
          </h1>


          {/* Description */}
          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-400">
            I design and develop modern web applications
            using React, Next.js, TypeScript, and Tailwind CSS.
            I create fast, responsive, and visually engaging
            experiences for the modern web.
          </p>


          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-blue-700"
            >
              View Work
            </Link>


            <Link
              href="/contact"
              className="rounded-full border border-gray-300 px-8 py-4 font-medium text-black transition hover:border-blue-500 hover:text-blue-500 dark:border-white/20 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              Contact
            </Link>

          </div>


        </motion.div>

      </div>

    </section>
  );
}
