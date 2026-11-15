// src/components/ExperienceSection.jsx
import { ArrowUpRight, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const education = [
  {
    school: "Ajeenkya DY Patil University, Pune",
    program: "B.Tech CSE",
    date: "Aug 2024 – Present",
    score: "CGPA 9.76/10 (Top 1%)",
    current: true,
  },
  {
    school: "Deeksha Junior College, Hyderabad",
    program: "Intermediate MPC + CS",
    date: "2022 – 2024",
    score: "97.6%",
  },
  {
    school: "St. Anthony's High School, Hyderabad",
    program: "Class 10",
    date: "2022",
    score: "CGPA 10/10",
  },
];

const roles = [
  {
    index: "01",
    title: "Data Analytics Intern",
    company: "NASSCOM (IT-ITES SSC)",
    location: "Bangalore",
    date: "Aug 2026 – Present",
    current: true,
    bullets: [
      "Cleaned and organised programme data in Excel and built data pipelines feeding Power BI dashboards, cutting manual reporting effort by 30% for the Future Skills Prime platform.",
      "Managed and validated 10,000+ records across multiple data sources, improving data accuracy and consistency for reporting and backend integration.",
    ],
  },
  {
    index: "02",
    title: "AIML Intern",
    company: "SETV Healthcare Technologies Pvt. Ltd.",
    location: "Remote",
    date: "Apr 2026 – May 2026",
    bullets: [
      "Integrated PACS and LIS/LIMS workflows across 3 diagnostic systems, streamlining imaging and lab data exchange and reducing manual data handoffs by 25%.",
      "Contributed to Medulina, the company's enterprise AI model, through data preparation and integration work improving interoperability between imaging and laboratory platforms.",
    ],
  },
  {
    index: "03",
    title: "AIML Intern",
    company: "TechSaksham (Microsoft & SAP CSR Initiative)",
    location: "Edunet Foundation & AICTE, Remote",
    date: "Feb 2025 – Mar 2025",
    bullets: [
      "Built and deployed an ML diagnosis system predicting 40 diseases from patient symptoms with 90% accuracy after benchmarking 4 classification algorithms.",
      "Delivered real-time predictions through a Streamlit interface for non-technical clinical users.",
    ],
  },
];

const Kicker = ({ children }) => (
  <p className="font-sans flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#6B6559]">
    {children}
    <span className="text-sm leading-none text-[#B59F84]">✦</span>
  </p>
);

function EducationRow({ e }) {
  return (
    <li
      className={`flex flex-col gap-3 rounded-2xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
        e.current
          ? "border-[#242118] bg-[#242118] text-[#F6F3EC]"
          : "border-[#D8CBB8] bg-[#EFECE4] text-[#242118]"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            e.current ? "bg-[#F6F3EC]/10 text-[#D8CBB8]" : "bg-[#F6F3EC] text-[#6B6559]"
          }`}
        >
          <GraduationCap size={18} strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="font-serif text-xl leading-tight">{e.school}</h3>
          <p
            className={`font-sans mt-1 text-xs ${
              e.current ? "text-[#F6F3EC]/70" : "text-[#6B6559]"
            }`}
          >
            {e.program} · {e.date}
          </p>
        </div>
      </div>
      <span
        className={`font-sans w-fit shrink-0 rounded-full px-4 py-1.5 text-xs font-medium ${
          e.current
            ? "bg-[#B59F84]/25 text-[#D8CBB8]"
            : "border border-[#B59F84] text-[#6B6559]"
        }`}
      >
        {e.score}
      </span>
    </li>
  );
}

function RoleCard({ r }) {
  const dark = r.current;
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border p-6 sm:p-8 ${
        dark
          ? "border-[#242118] bg-[#242118] text-[#F6F3EC]"
          : "border-[#D8CBB8] bg-[#EFECE4] text-[#242118]"
      }`}
    >
      {dark && (
        <Sparkles
          aria-hidden="true"
          size={120}
          strokeWidth={0.75}
          className="pointer-events-none absolute -bottom-6 -right-4 text-[#F6F3EC] opacity-[0.06]"
        />
      )}

      <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div>
          <div
            className={`font-sans flex flex-wrap items-center gap-3 text-xs font-medium ${
              dark ? "text-[#B59F84]" : "text-[#6B6559]"
            }`}
          >
            <span className="tracking-[0.2em]">{r.index}</span>
            <span className={`h-px w-8 ${dark ? "bg-[#B59F84]/50" : "bg-[#B59F84]"}`} />
            <span>{r.date}</span>
            {r.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B59F84]/25 px-3 py-1 text-[11px] text-[#D8CBB8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8CBB8]" />
                Current
              </span>
            )}
          </div>

          <h3 className="font-serif mt-5 flex items-start gap-3 text-3xl leading-[1.1] sm:text-4xl">
            <Briefcase
              size={22}
              strokeWidth={1.5}
              className={`mt-2 shrink-0 ${dark ? "text-[#B59F84]" : "text-[#6B6559]"}`}
            />
            {r.title}
          </h3>

          <p
            className={`font-sans mt-3 text-sm font-medium ${
              dark ? "text-[#F6F3EC]" : "text-[#242118]"
            }`}
          >
            {r.company}
          </p>
          <p
            className={`font-sans mt-0.5 text-xs ${
              dark ? "text-[#F6F3EC]/65" : "text-[#6B6559]"
            }`}
          >
            {r.location}
          </p>
        </div>

        <ul
          className={`font-sans space-y-3 text-sm leading-relaxed ${
            dark ? "text-[#F6F3EC]/80" : "text-[#4A463D]"
          }`}
        >
          {r.bullets.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B59F84]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <>
      {/* ABOUT & EDUCATION */}
      <section id="about" className="relative scroll-mt-8 bg-[#F6F3EC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Kicker>Background &amp; Education</Kicker>
              <h2 className="font-serif mt-5 text-4xl leading-[1.06] text-[#242118] sm:text-5xl lg:text-[56px]">
                Grounded in
                <br />
                <em className="italic">Computer Science.</em>
              </h2>
              <p className="font-sans mt-7 max-w-md text-sm leading-relaxed text-[#4A463D] sm:text-[15px]">
                B.Tech Computer Science Engineering student at Ajeenkya DY Patil
                University, Pune (CGPA 9.76/10, University Top 1%, 9.8 SGPA). I
                combine strong algorithmic foundations with production
                engineering across GraphRAG retrieval pipelines, deep learning
                from scratch, and healthcare data interoperability.
              </p>
              <a
                href="#experience"
                className="font-sans mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#242118] transition-all hover:gap-3"
              >
                See my experience
                <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
            </div>

            <ul className="space-y-4 self-center">
              {education.map((e) => (
                <EducationRow key={e.school} e={e} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="relative scroll-mt-8 bg-[#F6F3EC] pb-20 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="border-t border-[#D8CBB8] pt-20 lg:pt-28">
            <Kicker>Industry Experience</Kicker>
            <h2 className="font-serif mt-5 text-4xl leading-[1.06] text-[#242118] sm:text-5xl lg:text-[56px]">
              Where I've
              <br />
              <em className="italic">Shipped Impact.</em>
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {roles.map((r) => (
              <RoleCard key={r.index} r={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}