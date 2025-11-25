import Role from "./Role";
import Profile from "./Profile";
import { gsap } from "gsap";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export default function Greeting() {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    gsap.fromTo(
      "#myName",
      { x: -300 }, // starting position
      { x: 0, duration: 1, ease: "bounce.out" } // end position
    );
    gsap.fromTo(
      "#dev-role",
      { x: 300 }, // starting position
      { x: 0, duration: 1, ease: "bounce.out" } // end position
    );
  }, []);
  return (
    <div className="text-center md:text-left">
      <div>ᜇᜌ ᜐᜒ</div>
      <div>Hi👋! My name is</div>
      <div id="myName" className="big-text my-name font-bold mb-3">
        <p>
          <span className={`${isDarkMode ? "text-blue-500" : "text-blue-800"}`}>
            John Carlo
          </span>{" "}
          Sabenorio
        </p>
      </div>
      <Profile />
      <Role />
    </div>
  );
}
