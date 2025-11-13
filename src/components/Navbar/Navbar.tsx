import Navlogo from "./Navlogo";
import Navlinks from "./Navlinks";
import Navdropdown from "./Navdropdown";
import { useState } from "react";
export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownClick() {
    setShowDropdown((prev) => !prev);
  }
  return (
    <div className="bg-red-200 sticky top-0 w-full">
      <div className="nav-flex justify-between p-3 px-5">
        {/* Logo */}
        <Navlogo />

        {/* Nav links */}
        <Navlinks handleClick={handleDropdownClick} />

        {/* Download Resume */}
        <button className="hidden md:block bg-black text-white cursor-pointer p-2 px-3 rounded-full font-semibold">
          <div className="flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="w-6 h-6 fill-white"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
            <p>My Resume</p>
          </div>
        </button>
      </div>
      {/* Nav dropdown */}
      <Navdropdown showDropdown={showDropdown} />
    </div>
  );
}
