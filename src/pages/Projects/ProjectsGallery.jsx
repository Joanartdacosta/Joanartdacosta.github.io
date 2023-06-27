import React from "react";
import CardProject from "./CardProject";
import chalets from "./Chalet";
import roads from "./Roads";
import reunions from "./Reunions";

function createCard(project) {
  return <CardProject name={project.name} imgURL={project.imgURL} />;
}

function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      <p>
        <a href="https://www.instagram.com/chalet_designinteriores/">
          Chalet - Interior Design -
        </a>
      </p>
      {chalets.map((chalet) => createCard(chalet))}
      <p>Estrada Fora - Travel Blog</p>
      {roads.map((road) => createCard(road))}
      <p>Reunion - Bootcamp's final project</p>
      {reunions.map((reunion) => createCard(reunion))}
    </div>
  );
}

export default ProjectsGallery;
