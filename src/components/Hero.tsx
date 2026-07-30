"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
        >
          Available for freelance projects
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Building Modern
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
        >
          I design and develop fast, responsive websites and applications
          using React, Next.js, TypeScript, and modern frontend technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            className="rounded-full bg-white px-8 py-3 font-medium text-black transition hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-xl transition hover:bg-white/10"
          >
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
