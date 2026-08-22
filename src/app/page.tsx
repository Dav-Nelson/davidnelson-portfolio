import { Mail, ArrowUpRight } from "lucide-react";
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
    title: "Nel VetVault",
    description:
      "A learning platform for veterinary students at the University of Jos. It brings past questions, clinical notes, and study materials together in one place, with students contributing content rather than just consuming it.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    link: "https://github.com/Dav-Nelson/nelvetvault",
  },
  {
    title: "ShopNaija",
    description:
      "A full stack ecommerce application with product browsing, authentication, and an order system backed by PostgreSQL.",
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
              Full stack and AI engineer. I build and ship web and AI products.
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
            I studied veterinary medicine before moving into software
            engineering. I build full stack and AI powered applications, and
            I have experience taking a product from an early idea through to
            something people can actually use.
          </p>

          <p>
            Lately my work has centered on backend systems, AI integration,
            and retrieval augmented generation, usually applied to problems
            with real users on the other end.
          </p>

          <p>
            My team and I won first place among 43 teams at The Build 2026
            with HealthBridge Africa, a multilingual voice AI health
            assistant. We are now taking that project further as{" "}
            <span className="text-slate-200 font-medium">Weha Health</span>,
            currently validating the product and business model with real
            users before we rebuild around what we learn.
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
            <h3 className="font-semibold">Full stack applications</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Web applications, dashboards, and backend systems built and
              deployed from the ground up.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold">AI powered products</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              AI assistants, retrieval systems, voice interfaces, and AI
              features built into real applications.
            </p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold">MVP development</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Turning an early idea into something real users can try and
              give feedback on.
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
            <h3 className="text-2xl font-bold">Weha Health</h3>

            <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400">
              Early stage startup
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Originally built as HealthBridge Africa
          </p>

          <p className="mt-5 text-slate-400 leading-relaxed">
            Weha Health started as HealthBridge Africa, a multilingual voice
            AI health assistant built during The Build 2026, a hackathon
            where my team placed first among 43 teams.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            As team lead, I owned the backend, the retrieval pipeline,
            security, and deployment. The system runs on a React and Next.js
            frontend, a Node.js gateway, and a FastAPI service handling
            retrieval and generation, backed by PostgreSQL with pgvector,
            Gemini embeddings, and Llama 3.3 70B through Groq.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Getting it working meant making real engineering tradeoffs
            around limited infrastructure, memory constraints, multilingual
            output, and cost. We tested different models and hosting setups
            and changed course more than once when something did not hold up
            under our constraints.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            We are now building on that work as Weha Health. Instead of
            treating the hackathon version as finished, the team is
            currently talking to users and testing the business model before
            deciding how to rebuild it properly.
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

      {/* CURRENTLY */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
          Currently
        </h2>

        <div className="bg-slate-900 rounded-xl p-6">
          <p className="text-slate-400 leading-relaxed">
            Open to software engineering roles, contract work, and products
            worth building.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold">Have a project or opportunity?</h2>

        <p className="mt-2 text-slate-400">
          I am open to software engineering roles, contract work, and
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