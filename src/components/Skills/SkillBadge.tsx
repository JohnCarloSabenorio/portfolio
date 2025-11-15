export default function SkillBadge({ skill }) {
  return (
    <div
      className="button p-3 overflow-hidden flex justify-center items-center border rounded-lg cursor-pointer select-none
                hover:translate-y-2  
                transition-all duration-150 [box-shadow:5px_5px_0_0_#000000]"
    >
      <img
        className="w-20 rounded-md aspect-square"
        src={skill.image}
        alt={skill.alt}
      />
    </div>
  );
}
