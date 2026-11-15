// src/components/ProjectsSection.jsx
import { ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const GITHUB = "https://github.com/DoppalapudiYeshwanth";

const featured = {
  index: "01",
  title: "ResiliGraph-RAG — Hybrid GraphRAG",
  date: "Oct 2026 – Present",
  tags: ["Python", "Neo4j", "Pydantic", "Instructor", "Groq LLMs", "Streamlit"],
  badges: [
    { value: "96.7%", label: "MRR" },
    { value: "800K", label: "Tokens/Day" },
    { value: "94%", label: "Coverage" },
  ],
  bullets: [
    "Achieved 96.7% top-5 retrieval accuracy (MRR 0.967) and lifted multi-hop recall from 84% to 92% via Neo4j vector search + Cypher traversal.",
    "Delivered 100% schema-valid extraction (657 entities, 473 relationships from 800 chunks) and sustained 800K tokens/day at $0 cost via a 4-model fallback chain.",
    "Reached 94% code coverage across 204 automated pytest tests with CI on every push.",
  ],
  demo: "https://resiligraph.streamlit.app",
  source: GITHUB,
};

const others = [
  {
    index: "02",
    title: "Multi-Layer Perceptron (MLP) Neural Network from Scratch",
    date: "2026",
    tags: ["Python", "NumPy", "PyTorch (Benchmarking)", "Streamlit", "Pillow"],
    bullets: [
      "Modular, pure-NumPy deep learning framework and real-time handwritten digit classifier (784 → 128 → 64 → 10) built with zero external ML libraries.",
      "Achieved 97.68% validation accuracy (0.0198 loss) on the 70,000-sample MNIST dataset within 10 epochs.",
      "Verified against central finite-difference numerical gradient checking (<1e-6 relative error) and benchmarked for floating-point parity against PyTorch.",
    ],
    demo: "https://handwrittentextdetector.streamlit.app",
    source: GITHUB,
  },
  {
    index: "03",
    title: "Mini-Autograd Engine — Reverse-Mode Autodiff & Neural Network Library",
    date: "2026",
    tags: ["Python", "OOP (__slots__)", "Graphviz", "Pytest", "GitHub Actions CI"],
    bullets: [
      "Built a PyTorch-style neural network API (Module, Neuron, Layer, MLP) with dynamic computation graph visualization via Graphviz.",
      "Trained a multi-layer classifier with momentum-based SGD (β = 0.9), achieving 97.5% classification accuracy and cutting hinge loss from 0.4535 to 0.1047 over 60 epochs on non-linear two-moons data.",
    ],
    source: `${GITHUB}/mini-autograd-engine`,
  },
  {
    index: "04",
    title: "TravelNest — Full-Stack Travel Listing Platform",
    date: "Dec 2025 – Jan 2026",
    tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Cloudinary"],
    bullets: [
      "Built and deployed an Airbnb-style travel listing platform with 8 categories and full CRUD across 15 route handlers and 3 data models.",
      "Replaced 8 per-category routes with 1 query-parameter route using schema-level enum validation; secured with Passport.js, bcrypt, and MongoDB-backed sessions.",
    ],
    source: GITHUB,
  },
];

const CircleLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    title={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#242118]/70 text-[#242118] transition-colors hover:bg-[#242118] hover:text-[#F6F3EC]"
  >
    {children}
  </a>
);

function FeaturedCard({ p }) {
  return (
    <article className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-[#242118] p-8 text-[#F6F3EC] sm:p-10">
      <svg
        aria-hidden="true"
        width="220"
        height="220"
        viewBox="0 0 24 24"
        fill="#F6F3EC"
        className="pointer-events-none absolute -bottom-10 -right-8 opacity-[0.05]"
      >
        <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5z" />
      </svg>

      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex items-center gap-4 font-sans text-xs font-medium text-[#B59F84]">
            <span className="tracking-[0.2em]">{p.index}</span>
            <span className="h-px w-8 bg-[#B59F84]/50" />
            <span>{p.date}</span>
          </div>

          <h3 className="font-serif mt-5 text-3xl leading-[1.1] sm:text-4xl">
            {p.title}
          </h3>

          <ul className="font-sans mt-6 space-y-3 text-sm leading-relaxed text-[#F6F3EC]/80">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B59F84]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="font-sans rounded-full bg-[#B59F84]/20 px-3 py-1 text-[11px] font-medium text-[#D8CBB8]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {p.badges.map((b) => (
              <div
                key={b.label}
                className="rounded-2xl border border-[#F6F3EC]/15 bg-[#F6F3EC]/[0.04] px-4 py-4 lg:flex lg:items-baseline lg:justify-between lg:px-6"
              >
                <div className="font-serif text-3xl leading-none sm:text-4xl lg:text-5xl">
                  {b.value}
                </div>
                <div className="font-sans mt-2 text-[11px] uppercase tracking-[0.14em] text-[#D8CBB8] lg:mt-0">
                  {b.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="font-sans inline-flex items-center gap-2 rounded-full bg-[#F6F3EC] px-6 py-3 text-sm font-medium text-[#242118] transition-colors hover:bg-white"
            >
              Live Demo
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
            <a
              href={p.source}
              target="_blank"
              rel="noreferrer"
              className="font-sans inline-flex items-center gap-2 rounded-full border border-[#F6F3EC]/40 px-6 py-3 text-sm font-medium text-[#F6F3EC] transition-colors hover:bg-[#F6F3EC]/10"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="flex flex-col rounded-3xl border border-[#D8CBB8] bg-[#EFECE4] p-7">
      <div className="flex items-center justify-between font-sans text-xs font-medium text-[#6B6559]">
        <span className="tracking-[0.2em]">{p.index}</span>
        <span>{p.date}</span>
      </div>

      <h3 className="font-serif mt-4 text-2xl leading-[1.15] text-[#242118] sm:text-[28px]">
        {p.title}
      </h3>

      <ul className="font-sans mt-5 space-y-3 text-sm leading-relaxed text-[#4A463D]">
        {p.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B59F84]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-end justify-between gap-4 pt-7">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="font-sans rounded-full border border-[#B59F84] px-3 py-1 text-[11px] font-medium text-[#6B6559]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          {p.demo && (
            <CircleLink href={p.demo} label="Live Demo">
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </CircleLink>
          )}
          <CircleLink href={p.source} label="Source on GitHub">
            <GithubIcon size={15} />
          </CircleLink>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative scroll-mt-8 bg-[#F6F3EC] py-20 lg:py-28"
    >
      <span id="projects" aria-hidden="true" className="absolute top-0" />

      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6B6559]">
              Selected Work
              <span className="text-sm leading-none text-[#B59F84]">✦</span>
            </p>
            <h2 className="font-serif mt-5 text-4xl leading-[1.06] text-[#242118] sm:text-5xl lg:text-[56px]">
              Systems Built
              <br />
              <em className="italic">for Production.</em>
            </h2>
          </div>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="font-sans inline-flex w-fit items-center gap-3 rounded-full bg-[#242118] px-7 py-3.5 text-sm font-medium text-[#F6F3EC] transition-colors hover:bg-black"
          >
            Explore GitHub
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FeaturedCard p={featured} />
          {others.map((p) => (
            <ProjectCard key={p.index} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}