export default function ContactPage() {
  return (
    <section className="min-h-screen px-8 py-40">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
          Get In Touch
        </p>

        <h1 className="mt-8 text-5xl font-bold md:text-7xl">
          Have a project in mind?
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-400">
          I'm available for freelance frontend development,
          responsive websites, and modern web applications.
          Let's build something great together.
        </p>


        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <a
            href="mailto:ciokajlo.j07@gmail.com"
            className="rounded-full bg-blue-500 px-8 py-4 transition hover:scale-105"
          >
            Email Me
          </a>


          <a
            href="https://github.com/ciokajloj07-bot"
            target="_blank"
            className="rounded-full border border-white/20 px-8 py-4 transition hover:border-blue-400"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}
