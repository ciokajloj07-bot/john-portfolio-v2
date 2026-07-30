export default function AboutPage() {
  return (
    <section className="min-h-screen px-8 py-32">
      <div className="mx-auto max-w-5xl">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          About Me
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Building modern web experiences.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-gray-400">
          I'm a frontend developer focused on creating responsive,
          user-friendly web applications using React, Next.js,
          TypeScript, and Tailwind CSS.
        </p>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-gray-400">
          I enjoy turning ideas into polished digital products with
          clean code, reusable components, and attention to detail.
        </p>

      </div>
    </section>
  );
}
