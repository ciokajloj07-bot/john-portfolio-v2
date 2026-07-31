export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-32 text-black transition-colors dark:bg-[#09090B] dark:text-white">

      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
          Contact
        </p>


        <h1 className="text-5xl font-bold md:text-7xl">
          Let's build something great.
        </h1>


        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Have a website, application, or idea you want to bring
          to life? I'm always interested in working on modern
          digital experiences.
        </p>


        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="mailto:your@email.com"
            className="rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Email Me →
          </a>


          <a
            href="https://github.com/ciokajloj07-bot"
            target="_blank"
            className="rounded-full border border-gray-300 px-8 py-4 font-medium text-black transition hover:border-blue-500 hover:text-blue-500 dark:border-white/20 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            GitHub
          </a>

        </div>


        <div className="mt-20 grid gap-6 md:grid-cols-3">


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6 dark:border-white/10 dark:bg-white/5">
            <h2 className="font-bold">
              Location
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              United States
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6 dark:border-white/10 dark:bg-white/5">
            <h2 className="font-bold">
              Available For
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Freelance Projects
            </p>
          </div>


          <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6 dark:border-white/10 dark:bg-white/5">
            <h2 className="font-bold">
              Focus
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Frontend Development
            </p>
          </div>


        </div>

      </div>

    </main>
  );
}
