export default function Project(props) {
  const toolsList = props.tools;
  // FIXME: project image not appearing
  const projectImg = `url(${props.img})`;

  return (
    <div className="flex project">
      <div className="flex project-info">
        <h3 className="project-header">{props.name}</h3>
        <p className="project-description">{props.text}</p>
        <div className="project-stack">
          {toolsList.map((tech) => {
            return (
              <h3 className="tool">{tech}</h3>
            )
          })
          }
        </div>
        <div className="flex project-links">
          <a href={props.githubLink} className="project_github-link">Source Code</a>
          <a href={props.websiteLink} className="project_website-link">Link</a>
        </div>
      </div>
      <div className="project-img" style={{background:projectImg}}></div>
    </div>
  );
}
