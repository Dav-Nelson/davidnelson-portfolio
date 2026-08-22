import { Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774.792 0 1.771 0h20.454z" />
    </svg>
  );
}

const otherProjects = [
  {
    title: "Nel VetVault",
    description:
      "A community-driven learning platform built for veterinary students at the University of Jos. It brings together past questions, clinical notes, and study materials in one place.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    link: "https://github.com/Dav-Nelson/nelvetvault",
  },
  {
    title: "ShopNaija",
    description:
      "A full-stack e-commerce application with product browsing, authentication, and a PostgreSQL-backed order system.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "https://github.com/Dav-Nelson/ecommerce-store",
  },
];

const healthbridgeTech = [
  "Next.js",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "pgvector",
  "RAG",
  "Groq",
  "Gemini Embeddings",
  "Docker",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="flex items-center gap-5">
          <img
            src="/headshot.jpg"
            alt="David Nelson"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0 ring-2 ring-slate-700"
          />

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              David Nelson
            </h1>

            <p className="mt-2 text-lg sm:text-xl text-slate-400">
              Full-stack & AI engineer. I build and ship web and AI products.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dav-Nelson"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <SiGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/david-nelson-352019371"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          About
        </h2>

        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            I'm a software engineer with a background in veterinary medicine.
            I build full-stack and AI-powered applications and have experience
            taking products from an idea through development and deployment.
          </p>

          <p>
            My recent work has focused on backend systems, AI integration,
            retrieval-augmented generation, and products built around real
            problems.
          </p>

          <p>
            My team and I won first place among 43 teams at The Build 2026 with
            HealthBridge Africa, a multilingual voice AI health assistant. The
            project is now being taken further as{" "}
            <span className="text-slate-200 font-medium">Weha Health</span>,
            where we are currently conducting user research and validating the
            product and business model before rebuilding around the evidence.
          </p>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          What I Build
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold">Full-stack applications</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Web applications, dashboards, platforms, and backend systems
              built from idea to deployment.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold">AI-powered products</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              AI assistants, RAG systems, voice interfaces, and AI features
              integrated into real applications.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold">MVP development</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Turning an early product idea into something people can
              actually use, test, and learn from.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Featured Work
        </h2>

        <div className="border-l-4 border-blue-500 bg-slate-900 rounded-r-xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold">
              Weha Health
            </h3>

            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400">
              Early-stage startup
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Originally built as HealthBridge Africa
          </p>

          <p className="mt-5 text-slate-400 leading-relaxed">
            Weha Health started as HealthBridge Africa, a multilingual voice
            AI health assistant built during The Build 2026. My team placed
            first among 43 teams.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            As team lead, I owned the backend, RAG pipeline, security, and
            deployment. The system used a React/Next.js frontend, a Node.js
            gateway, a FastAPI AI pipeline, PostgreSQL with pgvector, Gemini
            embeddings, and Llama 3.3 70B through Groq for generation.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Building it involved making practical engineering decisions around
            limited infrastructure, memory constraints, multilingual output,
            deployment reliability, and cost. We evaluated different models
            and infrastructure options and changed parts of the architecture
            when they did not work under our constraints.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            We are now taking the project further as Weha Health. Rather than
            assuming the hackathon version is the final product, the team is
            currently conducting user research and validating the business
            model before rebuilding around what we learn.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {healthbridgeTech.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/Dav-Nelson/healthbridge-africa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
            >
              View the project
              <ArrowUpRight size={16} />
            </a>
          </div>
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
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-900 rounded-xl p-5 hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold">{project.title}</h3>
                <ArrowUpRight
                  size={16}
                  className="text-slate-500 flex-shrink-0"
                />
              </div>

              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
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

      {/* EXPERIENCE / ACHIEVEMENT */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          A few things I've done
        </h2>

        <div className="space-y-3">
          <div className="bg-slate-900 rounded-xl p-5">
            <p className="font-semibold">
              1st place — The Build 2026
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Won among 43 teams with HealthBridge Africa.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <p className="font-semibold">
              Full-stack product development
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Experience taking applications from idea and architecture through
              development, Git/GitHub collaboration, testing, and deployment.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <p className="font-semibold">
              Multidisciplinary background
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Veterinary medicine background with a growing focus on software,
              AI, and health technology.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Currently
        </h2>

        <div className="bg-slate-900 rounded-xl p-6">
          <p className="text-slate-400 leading-relaxed">
            I'm deepening my software engineering fundamentals, improving the
            projects I've already built, and becoming more independent from AI
            coding assistance. I'm also open to software engineering
            opportunities, contract work, and interesting products to build.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold">
          Have a project or opportunity?
        </h2>

        <p className="mt-2 text-slate-400">
          I'm open to software engineering roles, contract work, and interesting
          problems worth solving.
        </p>

        <a
          href="mailto:med.nelsonavid@gmail.com"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-medium"
        >
          <Mail size={18} />
          Get in touch
        </a>
      </section>
    </main>
  );
}