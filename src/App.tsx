import "./App.css";
import "./styles/navbar.css";
import Navbar from "./components/Navbar/Navbar";
import IntroSection from "./components/Introduction/IntroSection";
import { useState, useEffect } from "react";
import RoleSection from "./components/Role/RoleSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Footer from "./components/Footer/Footer";
import { sectionContext } from "@/contexts/sectionContext.ts";
// import ActionButton from "./components/ActionButton";

function App() {
  const [activeSection, setActiveSection] = useState("intro-section");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);
  return (
    <>
      <sectionContext.Provider value={{ activeSection, setActiveSection }}>
        <Navbar />
        <main className="flex flex-col justify-center items-center max-w-350 mx-auto">
          {/* Intro Div */}

          <IntroSection />

          <RoleSection />

          <ProjectsSection />

          <SkillsSection />

          <ExperienceSection />
        </main>
        {/* <ActionButton /> */}
        <Footer />
      </sectionContext.Provider>
    </>
  );
}

export default App;
