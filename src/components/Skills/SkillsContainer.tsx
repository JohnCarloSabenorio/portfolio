import BadgeContainer from "./BadgeContainer";
export default function SkillsContainer({ header, skillsData }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl">{header}</h1>

      <BadgeContainer skills={skillsData} />
    </div>
  );
}
