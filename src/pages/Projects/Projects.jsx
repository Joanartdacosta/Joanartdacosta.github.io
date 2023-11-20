import React from "react";
import ProjectsGallery from "../../components/projects/ProjectsGallery.jsx";
import CardProject from "../../components2/CardProject.js";
import "flowbite";

function Projects() {
  return (
    <div className="justify-center align-items-center max-width">
      <h2 className="m-b-2 text-center">Projects</h2>
      <ProjectsGallery />
    </div>
  );
}

export default Projects;
