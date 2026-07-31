export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-32 text-black transition-colors dark:bg-[#09090B] dark:text-white">

      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
          About Me
        </p>


        <h1 className="text-5xl font-bold md:text-7xl">
          Building modern digital experiences.
        </h1>


        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          I'm a frontend developer focused on creating fast,
          responsive, and visually engaging web applications.
          I specialize in React, Next.js, TypeScript, and
          Tailwind CSS to build clean user experiences.
        </p>


        <div className="mt-16 grid gap-6 md:grid-cols-3">


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-bold">
              Frontend
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Modern interfaces built with React,
              Next.js, and TypeScript.
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-bold">
              Design
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Responsive layouts focused on
              usability and visual quality.
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-2xl font-bold">
              Development
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Clean, maintainable code using
              modern web technologies.
            </p>
          </div>


        </div>

      </div>

    </main>
  );
}
