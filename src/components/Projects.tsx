import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-400">
          Selected Work
        </p>

        <h2 className="max-w-3xl text-5xl font-bold text-white md:text-7xl">
          Projects built with purpose.
        </h2>

        <div className="mt-20 space-y-32">
          <ProjectShowcase
            title="TaskFlow"
            description="A modern project management application designed to help teams organize tasks, manage workflows, and stay productive."
            image="/images/taskflow.png"
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ]}
            liveUrl="https://taskflow-phi-woad.vercel.app/"
          />

          <ProjectShowcase
            title="WeatherWise"
            description="A responsive weather application that provides real-time forecasts through a clean and intuitive interface."
            image="/images/weatherwise.png"
            technologies={[
              "React",
              "Next.js",
              "API",
              "Tailwind CSS",
            ]}
            liveUrl="https://weatherwise-pi.vercel.app"
            reverse
          />
        </div>
      </div>
    </section>
  );
}
