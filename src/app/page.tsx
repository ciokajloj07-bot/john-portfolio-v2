import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">
      <Background />

      <Navbar />

      <Hero />

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      {/* About */}
      <AnimatedSection>
        <section
          id="about"
          className="border-t border-white/10 px-8 py-32"
        >
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
              About Me
            </p>

            <h2 className="text-5xl font-bold md:text-6xl">
              Creating modern web experiences.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              I'm a frontend developer focused on building fast,
              responsive, and visually engaging applications using
              React, Next.js, TypeScript, and Tailwind CSS. I enjoy
              turning ideas into polished user experiences that look
              great on every device.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection>
        <section
          id="skills"
          className="border-t border-white/10 px-8 py-32"
        >
          <div className="mx-auto max-w-6xl">

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
              Skills
            </p>

            <h2 className="text-5xl font-bold">
              Technologies I Use
            </h2>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "Git",
                "GitHub",
                "REST APIs",
                "Responsive Design",
                "Vercel",
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg font-medium transition hover:scale-105 hover:border-blue-500"
                >
                  {skill}
                </div>
              ))}

            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <section
          id="contact"
          className="border-t border-white/10 px-8 py-32"
        >
          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
              Contact
            </p>

            <h2 className="text-5xl font-bold">
              Let's build something great.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Whether you need a modern website, a React application,
              or help improving an existing project, I'd love to hear
              about it.
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Get In Touch
            </a>

          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-8 text-center text-gray-500">
          © {new Date().getFullYear()} John. Built with Next.js,
          TypeScript & Tailwind CSS.
        </div>
      </footer>
    </main>
  );
}
