import Greeting from "./Greeting";
import "../../styles/IntroSection.css";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
export default function IntroSection() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <section
      id="intro-section"
      className={`flex flex-col justify-center items-center ${
        isDarkMode && "dark"
      }`}
    >
      <Greeting />
      {/* Contacts */}
    </section>
  );
}
