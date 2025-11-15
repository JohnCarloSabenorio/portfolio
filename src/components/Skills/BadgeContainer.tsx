import SkillBadge from "./SkillBadge";
export default function BadgeContainer({ skills }) {
  return (
    <div className="flex flex-wrap justify-center mt-3 gap-5">
      {skills.map((skill, idx) => {
        return <SkillBadge key={idx} skill={skill} />;
      })}
    </div>
  );
}
