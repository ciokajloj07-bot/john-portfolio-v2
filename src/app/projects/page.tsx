import ProjectShowcase from "@/components/ProjectShowcase";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-32 text-black transition-colors dark:bg-[#09090B] dark:text-white">

      <div className="mx-auto max-w-7xl">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
          Projects
        </p>


        <h1 className="text-5xl font-bold text-black dark:text-white md:text-7xl">
          Featured Work
        </h1>


        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          A collection of applications and experiences built with modern
          frontend technologies.
        </p>


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
            description="A responsive weather application providing real-time forecasts through a clean and intuitive interface."
            image="/images/weatherwise.png"
            technologies={[
              "React",
              "Next.js",
              "API",
              "Tailwind CSS",
            ]}
            liveUrl="https://weatherwise-pi.vercel.app/"
            reverse
          />


        </div>

      </div>

    </main>
  );
}
