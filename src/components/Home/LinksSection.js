import Badge from "./Badge";
import linksData from "../../data/data-links.json";

function Link(props) {
  return (
    <a href={props.href} className="home-link">
      <Badge name={props.name} icon={props.icon} />
    </a>
  );
}

export default function LinksSection() {
  return (
    <div className="flex home-links-section">
      {linksData.map((link) => {
        return (
          <Link
            key={link.id}
            name={link.name}
            href={link.href}
            icon={link.icon}
          />
        );
      })}
    </div>
  );
}
