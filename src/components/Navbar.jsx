// src/components/Navbar.jsx
import { ArrowRight } from "lucide-react";

const links = ["Home", "About", "Work", "Experience", "Skills", "Contact"];

export default function Navbar() {
  return (
    <header className="relative z-30 w-full bg-[#F6F3EC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
        :root {
          --font-serif: 'Instrument Serif', 'Playfair Display', Georgia, serif;
          --font-sans: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-sans); }
        .font-serif { font-family: var(--font-serif) !important; }
        .font-sans { font-family: var(--font-sans) !important; }
      `}</style>

      <nav className="max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <a
          href="#home"
          className="relative font-sans font-medium text-lg tracking-[0.18em] text-[#242118] whitespace-nowrap"
        >
          YESHWANTH.DEV
          <span
            aria-hidden="true"
            className="absolute -top-2 -right-4 text-[#242118] text-base leading-none"
          >
            ✦
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-sans text-xs font-medium text-[#242118]/80 hover:text-[#242118] transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full bg-[#242118] px-5 py-2.5 font-sans text-xs font-medium text-[#F6F3EC] hover:bg-black transition-colors whitespace-nowrap"
        >
          Let's Talk
          <ArrowRight size={14} strokeWidth={1.75} />
        </a>
      </nav>
    </header>
  );
}