import Role from "./Role";
import Profile from "./Profile";
import { gsap } from "gsap";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Greeting() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#name-intro",
      { x: -300, opacity: 0 }, // starting position
      { x: 0, opacity: 1, duration: 1, ease: "back" } // end position
    );
    tl.fromTo(
      "#dev-intro",
      { x: 300, opacity: 0 }, // starting position
      { x: 0, opacity: 1, duration: 1, ease: "back" } // end position
    );
    tl.fromTo(
      "#profile",
      { opacity: 0 }, // starting position
      { opacity: 1, duration: 1, ease: "back" } // end position
    );
  }, []);

  return (
    <div className="text-center md:text-left">
      <div id="name-intro">
        <div>ᜇᜌ ᜐᜒ</div>
        <div>Hi👋! My name is</div>
        <div className="big-text font-bold mb-3">
          <p id="myName">
            <span
              className={`${isDarkMode ? "text-blue-500" : "text-blue-800"}`}
            >
              John Carlo
            </span>{" "}
            Sabenorio
          </p>
        </div>
      </div>
      <Profile />
      <Role />
    </div>
  );
}
