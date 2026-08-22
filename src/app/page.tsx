import { Mail, ArrowUpRight, User } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const otherProjects = [
  {
    title: "Project Two",
    description: "One-line description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "One-line description of what this project does and the problem it solves.",
    tags: ["Python", "AI/ML"],
    link: "#",
  },
  {
    title: "Project Four",
    description: "One-line description of what this project does and the problem it solves.",
    tags: ["React", "Node.js"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 ring-2 ring-slate-700">
            <User size={32} className="text-slate-500" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              David Nelson
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-slate-400">
              Full-stack & AI engineer — I build production AI systems that ship.
            </p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/Dav-Nelson"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <SiGithub size={18} /> GitHub
          </a>
          <a
            href="#"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          About
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Placeholder about blurb — a couple sentences on your background,
          what drew you to engineering, and what kind of problems you like
          solving. This is a good place to mention your veterinary medicine
          background if you want to frame it as part of your story (e.g. a
          transition into software driven by a specific problem you wanted to
          solve).
        </p>
      </section>

      {/* FEATURED PROJECT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Featured Project
        </h2>
        <div className="border-l-4 border-blue-500 bg-slate-900 rounded-r-xl p-6 sm:p-8 hover:bg-slate-900/80 transition-colors">
          <h3 className="text-2xl font-bold">HealthBridge / Weha Health</h3>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Placeholder case study summary — problem, your role, the approach
            you took, and the measurable outcome. Replace with your real
            write-up.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "AI/ML", "Healthcare"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
          >
            View case study <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* OTHER WORK */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Other Work
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block bg-slate-900 rounded-xl p-5 hover:bg-slate-800 transition-colors"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold">Let's talk</h2>
        <p className="mt-2 text-slate-400">
          Open to new opportunities and interesting problems.
        </p>
        <a
          href="mailto:med.nelsonavid@gmail.com"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-medium"
        >
          <Mail size={18} /> Email me
        </a>
      </section>
    </main>
  );
}