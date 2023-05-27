import React from "react";
import projects from "./Projects";
import CardProject from "./CardProject";

function createCard(project) {
  return <CardProject name={project.name} imgURL={project.imgURL} />;
}

function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      {projects.map((project) => createCard(project))}
    </div>
  );
}

export default ProjectsGallery;
