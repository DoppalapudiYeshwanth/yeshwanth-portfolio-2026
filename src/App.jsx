// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsFooter from "./components/SkillsFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#242118]">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsFooter />
    </div>
  );
}