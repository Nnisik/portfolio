export default function Project(props) {

  return (
    <div className="flex project">
      <div className="flex project-promo">
        <img src={require(props.img)} alt="" />
        <div className="flex project-links">
          <a href={props.githubLink} className="project-github-link"></a>
          <a href={props.websiteLink} className="project-website-link">
            Website
          </a>
        </div>
      </div>
      <div className="flex project-descrip">
        <h3>{props.name}</h3>
        <p>{props.about}</p>
        <div className="project-stack">
          <h3>{props.tools}</h3>
        </div>
      </div>
    </div>
  );
}
