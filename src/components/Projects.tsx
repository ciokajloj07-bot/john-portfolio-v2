"use client";

import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-200 px-8 py-32 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
          Selected Work
        </p>


        <h2 className="max-w-3xl text-5xl font-bold text-black dark:text-white md:text-7xl">
          Projects built with purpose.
        </h2>


        <div className="mt-20 space-y-32">


          {/* TaskFlow */}
<ProjectShowcase
  title="TaskFlow"
  description="A modern project management application designed to help teams organize tasks, manage workflows, and stay productive with a clean and intuitive interface."
  image="/images/taskflow.png"
  technologies={[
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ]}
  liveUrl="https://taskflow-phi-woad.vercel.app/"
  githubUrl="https://github.com/ciokajloj07-bot/Taskflow"
  reverse={false}
/>

          {/* WeatherWise */}
<ProjectShowcase
  title="WeatherWise"
  description="A responsive weather application that provides real-time forecasts through a clean interface with modern design and smooth user interactions."
  image="/images/weatherwise.png"
  technologies={[
    "React",
    "Next.js",
    "API",
    "Tailwind CSS",
  ]}
  liveUrl="https://weatherwise-pi.vercel.app/"
  githubUrl="https://github.com/ciokajloj07-bot/weatherwise"
  reverse={true}
/>
        </div>

      </div>
    </section>
  );
}

