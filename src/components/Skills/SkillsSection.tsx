import languages from "@/data/languages.json";
import frameworks from "@/data/frameworks.json";
import libraries from "@/data/libraries.json";
import databases from "@/data/databases.json";
import deployment from "@/data/deployment.json";
import tools from "@/data/tools.json";
import SkillsContainer from "./SkillsContainer";
export default function SkillsSection() {
  return (
    <section className="flex flex-col mt-20 w-full mb-5">
      <div className="">
        <h1 className="text-3xl">Skills</h1>
        <p className="mt-3">Skills I've acquired!</p>
      </div>

      {/* Languages */}

      <SkillsContainer header={"Languages"} skillsData={languages} />
      {/* Frameworks */}
      <SkillsContainer header={"Frameworks"} skillsData={frameworks} />
      {/* Libaries */}
      <SkillsContainer header={"Libraries"} skillsData={libraries} />
      {/* Databases */}
      <SkillsContainer header={"Databases"} skillsData={databases} />
      {/* Deployment */}
      <SkillsContainer header={"Deployment"} skillsData={deployment} />
      {/* Tools */}
      <SkillsContainer header={"Tools"} skillsData={tools} />
    </section>
  );
}
