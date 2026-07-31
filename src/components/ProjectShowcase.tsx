"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectShowcaseProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  reverse?: boolean;
};

export default function ProjectShowcase({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid gap-12 md:grid-cols-2 md:items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >

      {/* Project Image */}
      <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-2 transition dark:border-white/10 dark:bg-white/5">

        <div className="absolute inset-0 bg-blue-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

        <Image
          src={image}
          alt={`${title} screenshot`}
          width={1200}
          height={800}
          className="relative rounded-2xl transition duration-700 group-hover:scale-105"
        />

      </div>


      {/* Project Content */}
      <div>

        <h3 className="text-4xl font-bold text-black dark:text-white">
          {title}
        </h3>


        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          {description}
        </p>


        {/* Technology Tags */}
        <div className="mt-6 flex flex-wrap gap-3">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}

        </div>


        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href={liveUrl}
            target="_blank"
            className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Live Demo →
          </Link>


{githubUrl && (
  <Link
    href={githubUrl}
    target="_blank"
    className="rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-blue-700"
  >
    GitHub →
  </Link>
)}
        </div>

      </div>

    </motion.div>
  );
}

