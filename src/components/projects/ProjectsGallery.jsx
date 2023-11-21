import React from "react";
import CardProject from "./CardProject";
import PROJECTS_URL from "./projects";

function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      {PROJECTS_URL.map((project) => {
        return (
          <CardProject
            key={project.id}
            title={project.title}
            href={project.href}
            imgUrl={project.imgUrl}
            description={project.description}
          />
        );
      })}
    </div>
  );
}

export default ProjectsGallery;
