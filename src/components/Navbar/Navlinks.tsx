import { sectionContext } from "@/contexts/sectionContext";
import menuicon from "/svg/menuicon.svg";
import { useContext } from "react";

export default function Navlinks({ handleClick }: { handleClick: () => void }) {
  const { activeSection } = useContext(sectionContext);

  return (
    <div className="nav-flex gap-0">
      <div className="hidden md:block">
        <a
          className={`nav-link ${activeSection == "intro-section" && "active"}`}
          href="#intro-section"
        >
          Me
        </a>
        <a
          className={`nav-link ${
            activeSection == "projects-section" && "active"
          }`}
          href="#projects-section"
        >
          Projects
        </a>
        <a
          className={`nav-link ${
            activeSection == "skills-section" && "active"
          }`}
          href="#skills-section"
        >
          Skills
        </a>
        <a
          className={`nav-link ${
            activeSection == "experience-section" && "active"
          }`}
          href="#experience-section"
        >
          Experience
        </a>
      </div>

      <img
        className="image-size cursor-pointer md:hidden"
        onClick={handleClick}
        src={menuicon}
      />
    </div>
  );
}
