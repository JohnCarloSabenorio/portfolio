import resumeFile from "/files/Sabenorio_Resume.pdf";
export default function Navdropdown({
  showDropdown,
}: {
  showDropdown: boolean;
}) {
  return (
    <div
      className={`text-center ${showDropdown ? "block" : "hidden"} md:hidden`}
    >
      <a href="#intro-section">
        <div className="active p-1">Me</div>
      </a>
      <a href="#projects-section">
        <div className="p-1">Projects</div>
      </a>
      <a href="#skills-section">
        <div className="p-1">Skills</div>
      </a>
      <a href="#experience-section">
        <div className="p-1">Experience</div>
      </a>
      <a href={resumeFile} download={resumeFile} target="_blank">
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
      </a>
    </div>
  );
}
