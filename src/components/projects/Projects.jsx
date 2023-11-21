import React from "react";
import ProjectsGallery from "./ProjectsGallery.jsx";
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
