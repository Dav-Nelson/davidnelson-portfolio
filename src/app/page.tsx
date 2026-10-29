import { Mail, ArrowUpRight, Download, MapPin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Project = {
  title: string;
  badge: string;
  role: string;
  description: string[];
  stats?: string[];
  tags?: string[];
  live?: string;
  github?: string;
};

const wins = [
  { title: "1st place", event: "The Build 2026 (NSK AI & TheUdaraProject)" },
  {
    title: "Masakhane Benchmark category",
    event: "Sahara CodeSwitch Africa Challenge",
  },
  { title: "Most Innovative Use of AI", event: "GDG Abuja Build with AI" },
  { title: "Pitch winner", event: "Techstars Startup Week Abuja" },
];

const featuredProjects: Project[] = [
  {
    title: "HealthBridge Africa",
    badge: "1st place of 43 teams, The Build 2026",
    role: "Team lead. Backend, RAG pipeline, security and deployment.",
    description: [
      "A voice-first multilingual health assistant that lets people speak or type health questions in their own language and get guidance grounded in WHO and national health guidelines for Nigeria, Ghana, Kenya and Ethiopia.",
      "Built under tight infrastructure and cost limits. We tested different models and hosting setups and changed course more than once when something did not hold up.",
    ],
    stats: ["6 languages", "300+ visits", "4+ countries"],
    tags: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "RAG",
      "Groq",
      "Gemini Embeddings",
      "Docker",
    ],
    live: "https://healthbridge-africa.vercel.app",
    github: "https://github.com/Dav-Nelson/healthbridge-africa",
  },
  {
    title: "Weha Health",
    badge: "Masakhane Benchmark category winner",
    role: "Backend and AI integration.",
    description: [
      "A voice triage agent for maternal health. It collects symptoms over a multi-turn conversation, checks them against WHO-aligned danger signs, and on an urgent result alerts a care team on WhatsApp and Telegram, finds the nearest facility and generates a shareable visit summary.",
      "Evolved from HealthBridge Africa. The team also benchmarked four speech-to-text engines and published an open dataset. We are now validating the product with real users.",
    ],
    stats: ["5 languages", "4 speech engines tested", "150 audio samples"],
    tags: [
      "React",
      "Node.js",
      "FastAPI",
      "pgvector",
      "Twilio",
      "Telegram API",
      "OpenStreetMap",
    ],
    live: "https://weha-health-voice.vercel.app",
    github: "https://github.com/Dav-Nelson/weha-health-voice",
  },
  {
    title: "Dr. Yetunde Abioye Website",
    badge: "Client project",
    role: "Design, development and deployment.",
    description: [
      "A professional website for a public health doctor, live on a custom .com domain. It includes an admin dashboard for managing blog posts and speaking engagements, plus SEO metadata and structured data.",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Cloudinary"],
    live: "https://yetundeabioye.com",
    github: "https://github.com/Dav-Nelson/dr-yetunde-website",
  },
  {
    title: "Lura",
    badge: "Most Innovative Use of AI, GDG Abuja Build with AI",
    role: "Co-built and pitched with a teammate.",
    description: [
      "A daily intelligence platform for Nigerian dropshippers. It monitors FX rates, competitor prices and supplier stock, then surfaces trending product opportunities with naira margin estimates in one morning digest.",
    ],
  },
];

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

const skills = [
  {
    group: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs"],
  },
  {
    group: "Data and AI",
    items: ["PostgreSQL", "pgvector", "RAG", "LLM APIs", "Speech-to-text"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub Actions", "Docker", "Vercel", "Railway", "Firebase"],
  },
];

const EMAIL = "med.nelsonavid@gmail.com";
const CV_PATH = "/David-Nelson-CV.pdf";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
      {children}
    </h2>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border-l-4 border-blue-500 bg-slate-900 rounded-r-xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400">
          {project.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">{project.role}</p>

      <div className="mt-4 space-y-3 text-slate-400 leading-relaxed">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {project.stats && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stats.map((stat) => (
            <span
              key={stat}
              className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400"
            >
              {stat}
            </span>
          ))}
        </div>
      )}

      {project.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(project.live || project.github) && (
        <div className="mt-6 flex flex-wrap gap-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium"
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium"
            >
              Source code
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
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
              Full stack and AI engineer building voice-first AI products and
              web platforms.
            </p>

            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} />
              Abuja, Nigeria · Open to remote roles
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={CV_PATH}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-medium"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <Mail size={18} />
            Email
          </a>

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

      {/* WINS */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>Wins in 2026</SectionTitle>

        <div className="grid sm:grid-cols-2 gap-3">
          {wins.map((win) => (
            <div key={win.event} className="bg-slate-900 rounded-xl p-4">
              <p className="font-semibold text-slate-100">{win.title}</p>
              <p className="mt-1 text-sm text-slate-400">{win.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>About</SectionTitle>

        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            I studied veterinary medicine, graduating with a First Class
            degree from the University of Jos, before moving into software
            engineering. I build full stack and AI powered applications, and
            I have experience taking a product from an early idea through to
            something people can actually use.
          </p>

          <p>
            Lately my work has centered on backend systems, AI integration,
            and retrieval augmented generation, usually applied to problems
            with real users on the other end. I work well in distributed
            teams: my hackathon teams have spanned Nigeria, Ghana and
            Ethiopia.
          </p>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>What I Build</SectionTitle>

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

      {/* FEATURED WORK */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>Featured Work</SectionTitle>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* OTHER WORK */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>Other Work</SectionTitle>

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

      {/* SKILLS */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <SectionTitle>Skills</SectionTitle>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.group} className="bg-slate-900 rounded-xl p-5">
              <h3 className="font-semibold">{skill.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-2xl font-bold">Have a project or opportunity?</h2>

        <p className="mt-2 text-slate-400">
          I am open to remote software engineering roles, contract work, and
          problems worth solving. Available to start immediately.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors font-medium"
          >
            <Mail size={18} />
            Get in touch
          </a>

          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors font-medium"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}