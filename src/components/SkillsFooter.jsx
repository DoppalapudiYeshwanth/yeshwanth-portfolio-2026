// src/components/SkillsFooter.jsx
import { ArrowUpRight, Mail, Award, Code2, Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "AI & LLM Systems",
    skills: [
      "LLMs",
      "RAG / GraphRAG",
      "Pydantic",
      "Instructor",
      "Groq API",
      "Prompt Engineering",
      "LLMOps",
    ],
  },
  {
    title: "Machine Learning & DL",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    title: "Backend & Web",
    skills: [
      "FastAPI",
      "RESTful APIs",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "JWT",
      "React.js",
      "HTML5",
      "CSS3",
      "Streamlit",
    ],
  },
  {
    title: "Data & Knowledge Graphs",
    skills: [
      "Neo4j",
      "Cypher",
      "Knowledge Graphs",
      "MongoDB",
      "MySQL",
      "Power BI",
      "Excel",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub Actions (CI)",
      "Docker",
      "pytest",
      "Postman",
      "Linux",
      "VS Code",
    ],
  },
];

const certifications = [
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft & NASSCOM",
  },
  { title: "Foundations of Prompt Engineering", issuer: "AWS" },
  { title: "Java Advanced", issuer: "Infosys Springboard" },
  {
    title: "Google Cloud Computing Foundations with Kubernetes",
    issuer: "Google & SSC NASSCOM",
    note: "In Progress",
  },
  { title: "Power BI Training Program", issuer: "NSS Antariksh" },
];

const achievements = [
  { title: "26th of 146 Teams", event: "HackNUThon 6.0 (PetPooja Track)" },
  { title: "Participant", event: "World Engineering Day Hackathon 2025" },
];

const Kicker = ({ children, light = false }) => (
  <p
    className={`font-sans flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] ${
      light ? "text-[#D8CBB8]" : "text-[#6B6559]"
    }`}
  >
    {children}
    <span className="text-sm leading-none text-[#B59F84]">✦</span>
  </p>
);

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const outlineBtn =
  "font-sans inline-flex items-center gap-2 rounded-full border border-[#F6F3EC]/40 px-6 py-3 text-sm font-medium text-[#F6F3EC] transition-colors hover:bg-[#F6F3EC]/10";

export default function SkillsFooter() {
  return (
    <>
      {/* SKILLS */}
      <section id="skills" className="relative scroll-mt-8 bg-[#F6F3EC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="border-t border-[#D8CBB8] pt-20 lg:pt-28">
            <Kicker>Technical Arsenal</Kicker>
            <h2 className="font-serif mt-5 text-4xl leading-[1.06] text-[#242118] sm:text-5xl lg:text-[56px]">
              Tools &amp;
              <br />
              <em className="italic">Technologies.</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <div
                key={g.title}
                className="flex flex-col rounded-3xl border border-[#D8CBB8] bg-[#EFECE4] p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl leading-tight text-[#242118]">
                    {g.title}
                  </h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F6F3EC] text-[#6B6559]">
                    {i % 2 === 0 ? (
                      <Code2 size={16} strokeWidth={1.5} />
                    ) : (
                      <Sparkles size={16} strokeWidth={1.5} />
                    )}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s, idx) => (
                    <span
                      key={s}
                      className={`font-sans rounded-full px-3.5 py-1.5 text-xs font-medium ${
                        idx % 3 === 0
                          ? "bg-[#242118] text-[#F6F3EC]"
                          : "border border-[#B59F84] bg-[#F6F3EC] text-[#4A463D]"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="relative bg-[#F6F3EC] pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="border-t border-[#D8CBB8] pt-20 lg:pt-24">
            <Kicker>Credentials &amp; Honors</Kicker>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
              {/* Certifications */}
              <div>
                <h3 className="font-serif flex items-center gap-3 text-3xl text-[#242118]">
                  <Award size={22} strokeWidth={1.5} className="text-[#6B6559]" />
                  <span>
                    <em className="italic">Certifications</em>
                  </span>
                </h3>
                <ul className="mt-6 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.title}
                      className="flex flex-col gap-2 rounded-2xl border border-[#D8CBB8] bg-[#EFECE4] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-sans text-sm font-medium text-[#242118]">
                          {c.title}
                        </p>
                        <p className="font-sans mt-0.5 text-xs text-[#6B6559]">
                          {c.issuer}
                        </p>
                      </div>
                      {c.note && (
                        <span className="font-sans w-fit shrink-0 rounded-full border border-[#B59F84] px-3 py-1 text-[11px] font-medium text-[#6B6559]">
                          {c.note}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="font-serif flex items-center gap-3 text-3xl text-[#242118]">
                  <Sparkles size={22} strokeWidth={1.5} className="text-[#6B6559]" />
                  <span>
                    <em className="italic">Achievements</em>
                  </span>
                </h3>
                <ul className="mt-6 space-y-3">
                  {achievements.map((a, i) => (
                    <li
                      key={a.event}
                      className={`rounded-2xl px-5 py-5 ${
                        i === 0
                          ? "bg-[#242118] text-[#F6F3EC]"
                          : "border border-[#D8CBB8] bg-[#EFECE4] text-[#242118]"
                      }`}
                    >
                      <p className="font-serif text-3xl leading-none">{a.title}</p>
                      <p
                        className={`font-sans mt-2 text-xs ${
                          i === 0 ? "text-[#D8CBB8]" : "text-[#6B6559]"
                        }`}
                      >
                        {a.event}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT + FOOTER */}
      <section id="contact" className="relative scroll-mt-8 bg-[#F6F3EC] px-4 pb-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#242118] p-8 text-[#F6F3EC] sm:p-14">
            <Sparkles
              aria-hidden="true"
              size={260}
              strokeWidth={0.6}
              className="pointer-events-none absolute -bottom-12 -right-10 text-[#F6F3EC] opacity-[0.05]"
            />

            <div className="relative">
              <Kicker light>Get in Touch</Kicker>
              <h2 className="font-serif mt-5 text-4xl leading-[1.06] sm:text-5xl lg:text-[64px]">
                Let's Build
                <br />
                <em className="italic">Something Intelligent.</em>
              </h2>
              <p className="font-sans mt-6 max-w-xl text-sm leading-relaxed text-[#F6F3EC]/75 sm:text-[15px]">
                Open to Machine Learning, AI, and Python Developer internships &amp;
                research collaborations.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:yeshwanthd2006@gmail.com"
                  className="font-sans inline-flex items-center gap-2 rounded-full bg-[#F6F3EC] px-6 py-3 text-sm font-medium text-[#242118] transition-colors hover:bg-white"
                >
                  <Mail size={16} strokeWidth={1.75} />
                  yeshwanthd2006@gmail.com
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className={outlineBtn}>
                  Download Resume
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
                <a
                  href="https://github.com/DoppalapudiYeshwanth"
                  target="_blank"
                  rel="noreferrer"
                  className={outlineBtn}
                >
                  <GithubIcon />
                  GitHub
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
                <a
                  href="https://www.linkedin.com/in/doppalapudi-yeshwanth-15916831a"
                  target="_blank"
                  rel="noreferrer"
                  className={outlineBtn}
                >
                  <LinkedinIcon />
                  LinkedIn
                  <ArrowUpRight size={16} strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center justify-between gap-2 px-2 py-8 sm:flex-row">
            <p className="font-sans text-xs text-[#6B6559]">
              © 2026 Doppalapudi Yeshwanth • Pune, India
            </p>
            <a
              href="#home"
              className="font-sans inline-flex items-center gap-1.5 text-xs font-medium text-[#242118] transition-all hover:gap-2.5"
            >
              Back to top
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}