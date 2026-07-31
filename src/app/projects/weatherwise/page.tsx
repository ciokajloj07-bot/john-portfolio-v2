import Image from "next/image";
import Link from "next/link";

export default function WeatherWisePage() {
  return (
    <main className="min-h-screen bg-white px-8 py-32 text-black transition-colors dark:bg-[#09090B] dark:text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
          Project
        </p>


        <h1 className="mt-6 text-5xl font-bold md:text-7xl">
          WeatherWise
        </h1>


        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          A responsive weather application that provides
          real-time forecasts through a clean, modern interface.
          Built with a focus on usability, performance, and
          responsive design.
        </p>


        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 p-3 dark:border-white/10 dark:bg-white/5">

          <Image
            src="/images/weatherwise.png"
            alt="WeatherWise screenshot"
            width={1200}
            height={800}
            className="rounded-2xl"
          />

        </div>


        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="https://weatherwise-pi.vercel.app/"
            target="_blank"
            className="rounded-full bg-blue-600 px-8 py-4 text-white transition hover:scale-105"
          >
            Live Demo →
          </Link>


          <Link
            href="/projects"
            className="rounded-full border border-gray-300 px-8 py-4 transition hover:border-blue-500 hover:text-blue-500 dark:border-white/20"
          >
            Back To Projects
          </Link>

        </div>


      </div>

    </main>
  );
}
