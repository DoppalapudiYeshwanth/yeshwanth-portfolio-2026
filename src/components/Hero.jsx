// src/components/Hero.jsx
import { ArrowRight, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "9.76", label: "CGPA ADYPU" },
  { value: "3", label: "AI/ML Internships" },
  { value: "96.7%", label: "RAG Accuracy" },
  { value: "$0", label: "API Run Cost" },
];

const SquareGrid = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(to right, #B59F84 1px, transparent 1px), linear-gradient(to bottom, #B59F84 1px, transparent 1px)",
      backgroundSize: "10px 10px",
      opacity: 0.22,
      WebkitMaskImage:
        "radial-gradient(circle at center, #000 30%, transparent 75%)",
      maskImage: "radial-gradient(circle at center, #000 30%, transparent 75%)",
    }}
  />
);

const DotGrid = ({ className = "" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute ${className}`}
    style={{
      backgroundImage: "radial-gradient(#B59F84 1.6px, transparent 1.8px)",
      backgroundSize: "14px 14px",
      opacity: 0.8,
    }}
  />
);

const Star = ({ size = 22, stroke = "#F6F3EC", fill = "none", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="1.2"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F6F3EC]">
      {/* Background decorations */}
      <SquareGrid className="hidden lg:block left-[-40px] bottom-[-20px] w-[360px] h-[360px]" />
      <SquareGrid className="hidden lg:block left-[46%] top-[16%] w-[220px] h-[280px]" />
      <DotGrid className="hidden lg:block right-[3%] top-[22%] w-[190px] h-[220px]" />
      <DotGrid className="hidden lg:block left-[52%] bottom-[8%] w-[170px] h-[150px]" />

      {/* Large warm taupe blob, bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-40 w-[520px] h-[520px] sm:w-[640px] sm:h-[640px] bg-[#C4A596] opacity-90"
        style={{ borderRadius: "52% 48% 40% 60% / 48% 52% 48% 52%" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-6 pb-16 lg:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="flex flex-col pt-4 lg:pt-10">
          <p className="font-sans text-xs font-medium text-[#6B6559] flex items-center gap-2">
            AI &amp; ML Systems Engineer
            <span className="text-[#B59F84] text-sm leading-none">✦</span>
          </p>

          <h1 className="font-serif mt-6 text-5xl sm:text-6xl lg:text-[64px] leading-[1.06] text-[#242118]">
            Systems that
            <br />
            <em className="italic">Build Intelligence.</em>
          </h1>

          <p className="font-sans mt-7 text-sm sm:text-[15px] text-[#4A463D] max-w-md leading-relaxed">
            I build resilient GraphRAG pipelines, neural networks from scratch,
            and production AI workflows that stay accurate and scale efficiently.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-8">
            <a
              href="mailto:yeshwanthd2006@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#242118] px-7 py-3.5 font-sans text-sm font-medium text-[#F6F3EC] hover:bg-black transition-colors"
            >
              Collaborate
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium text-[#242118] hover:gap-4 transition-all"
            >
              View My Work
              <ArrowRight size={16} strokeWidth={1.75} />
            </a>
          </div>

          {/* Stat pill */}
          <div className="mt-14 lg:mt-20">
            <div className="inline-flex flex-wrap items-center gap-7 sm:gap-9 border border-[#D8CBB8] rounded-full px-7 py-4 bg-[#F6F3EC]/80 backdrop-blur-sm">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-sans text-2xl sm:text-[28px] font-medium leading-none text-[#242118]">
                    {s.value}
                  </span>
                  <span className="font-sans mt-1.5 text-[11px] sm:text-xs text-[#242118]/85">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto lg:mx-0 lg:ml-auto w-[340px] sm:w-[520px] lg:w-[560px] max-w-full">
          {/* Oval portrait */}
          <div
            className="relative w-full h-[380px] sm:h-[550px] lg:h-[590px] overflow-hidden shadow-xl bg-[#D5C7B2] rounded-[52%_48%_46%_54%/54%_46%_54%_46%]"
          >
            <img
              src="/profile.png"
              alt="Doppalapudi Yeshwanth"
              className="w-full h-full object-cover object-[58%_10%] scale-[1.0]"
            />
          </div>

          {/* Callout card */}
          <div className="absolute bottom-4 -right-2 sm:-right-6 z-30 bg-[#242118] text-[#F6F3EC] rounded-3xl p-5 max-w-[230px] shadow-xl overflow-hidden">
            <Star
              size={26}
              stroke="#FFFFFF"
              className="absolute top-4 right-4"
            />
            <Star
              size={90}
              stroke="none"
              fill="#F6F3EC"
              className="absolute -bottom-6 -right-5 opacity-[0.07]"
            />
            <p className="relative font-sans text-[15px] leading-snug font-medium pt-5">
              AI/ML &amp; GraphRAG
              <br />
              with Meaning.
              <br />
              Results that Last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}