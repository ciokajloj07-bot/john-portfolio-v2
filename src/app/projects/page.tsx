import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] px-8 py-40 text-white">

      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.5em] text-blue-400">
          Projects
        </p>

        <h1 className="mt-8 text-6xl font-bold md:text-8xl">
          Selected Work.
        </h1>


        {/* TaskFlow */}

        <section className="mt-24 grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <h2 className="text-4xl font-bold">
              TaskFlow
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-400">
              A modern productivity application designed
              to help users organize tasks, manage workflows,
              and stay productive.
            </p>


            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
              ].map((tech)=>(
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>


            <Link
              href="/projects/taskflow"
              className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-4"
            >
              View Case Study
            </Link>


          </div>


          <div className="aspect-video rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">

            <span className="text-gray-500">
              TaskFlow Screenshot
            </span>

          </div>


        </section>



        {/* WeatherWise */}

        <section className="mt-32 grid gap-12 md:grid-cols-2 md:items-center">


          <div className="aspect-video rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center">

            <span className="text-gray-500">
              WeatherWise Screenshot
            </span>

          </div>


          <div>

            <h2 className="text-4xl font-bold">
              WeatherWise
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-400">
              A responsive weather application that delivers
              real-time weather information through external APIs.
            </p>


            <div className="mt-6 flex flex-wrap gap-3">

              {[
                "React",
                "API Integration",
                "CSS",
              ].map((tech)=>(
                <span
                  key={tech}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}

            </div>


            <Link
              href="/projects/weatherwise"
              className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-4"
            >
              View Case Study
            </Link>


          </div>


        </section>


      </div>

    </main>
  );
}
