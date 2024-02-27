import Project from "./Project";
import dataProjects from "../../data/data-projects.json";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex">
      <h1>Portfolio</h1>
      {dataProjects.map((project) => {
        return (
          <Project
            key={project.id}
            img={project.img}
            name={project.name}
            about={project.about}
            tools={project.tools}
          />
        );
      })}
    </div>
  );
}
