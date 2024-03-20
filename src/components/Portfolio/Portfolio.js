import Project from "./Project";
import Data from "../../data/data-projects.json";
import "./style/style.css";
import React, { useState } from "react";


export default function Portfolio() {
  const [projects, setProjects] = React.useState(Data);

  const filterFrontProjects = () => {
    const newItems = Data.filter((project) => {
      return project.type === "front";
    });
    setProjects(newItems);
  };

  const filterBackProjects = () => {
    const newItems = Data.filter((project) => {
      return project.type === "back" || project.type === "full";
    });
    setProjects(newItems);
  };

  return (
    <div id="portfolio" className="flex">
      <h1>Portfolio</h1>
      <div class="portfolio-selection">
        <button className="filter-btn" onClick={() => setProjects(Data)}>All</button>
        <button className="filter-btn" onClick={() => filterFrontProjects()}>Frontend</button>
        <button className="filter-btn" onClick={() => filterBackProjects()}>Backend</button>
      </div>
      <div class="portfolio">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              text={project.about}
              stack={project.stack}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              tools={project.tools}
              img={project.img}
            />
          );
        })}
      </div>
    </div>
  );
}
