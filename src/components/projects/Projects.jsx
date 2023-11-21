import React from "react";
import ProjectsGallery from "./ProjectsGallery.jsx";
import "flowbite";

function Projects() {
  return (
    <div className="justify-center align-items-center max-width m-auto">
      <h2 className="m-b-2 text-center text-yellow">Projects</h2>
      <ProjectsGallery />
    </div>
  );
}

export default Projects;
