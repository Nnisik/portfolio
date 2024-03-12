export default function Project(props) {
  return (
    <div className="flex project">
      <div className="flex project-info">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
        <div className="project-stack">
        </div>
        <div className="flex project-links">
          <a href={props.githubLink} className="project-github-link"></a>
          <a href={props.websiteLink} className="project-website-link">
            Website
          </a>
        </div>
      </div>
      <img className="project-img" src={require("./projects/bulletboard.png")} alt="" />
    </div>
  );
}
