import Role from "./Role";
import Profile from "./Profile";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Greeting() {
  useEffect(() => {
    gsap.fromTo(
      "#myName",
      { x: -300, opacity: 0 }, // starting position
      { x: 0, duration: 2, opacity: 1 } // end position
    );
    gsap.fromTo(
      "#dev-role",
      { x: 300, opacity: 0 }, // starting position
      { x: 0, duration: 2, opacity: 1 } // end position
    );
  }, []);
  return (
    <div className="text-center md:text-left">
      <div>ᜇᜌ ᜐᜒ</div>
      <div>Hi👋! My name is</div>
      <div id="myName" className="big-text titan-one-bold mb-3">
        John Carlo Sabenorio
      </div>
      <Profile />
      <Role />
    </div>
  );
}
