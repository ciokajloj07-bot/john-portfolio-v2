export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          About Me
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          I create digital experiences that combine
          clean design with powerful technology.
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">

          <p className="text-lg leading-8 text-gray-400">
            I'm a frontend developer focused on building modern,
            responsive web applications. I specialize in React,
            Next.js, TypeScript, and Tailwind CSS.
          </p>

          <p className="text-lg leading-8 text-gray-400">
            My goal is to create interfaces that are not only
            visually impressive, but also fast, accessible,
            and enjoyable to use across every device.
          </p>

        </div>

      </div>
    </section>
  );
}
