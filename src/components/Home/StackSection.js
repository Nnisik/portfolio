import Badge from "./Badge";
import stackData from "../../data/data-stack.json";

export default function StackSection() {
  return (
    <div className="home-skills-section">
      Stack
      <div className="home-stack-section">
        {stackData.map((skill) => {
          return <Badge key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
}
