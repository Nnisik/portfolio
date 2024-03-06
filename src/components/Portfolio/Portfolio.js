import Project from "./Project";
import dataProjects from "../../data/data-projects.json";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex">
      <h1>Portfolio</h1>
      {dataProjects.map((project) => {
        return (
          <div className="flex project">
            <div className="flex project-promo">
              <img src={project.img} alt="" />
              <div className="flex project-links">
                <a href={project.githubLink} className="project-github-link"></a>
                <a href={project.websiteLink} className="project-website-link">
                  Website
                </a>
              </div>
            </div>
            <div className="flex project-descrip">
              <h3>{project.name}</h3>
              <p>{project.about}</p>
              <div className="project-stack">
                <h3>{project.tools}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
