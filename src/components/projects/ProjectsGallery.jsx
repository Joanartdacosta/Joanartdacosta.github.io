import React from "react";
import CardProject from "./CardProject";
import chalets from "./websites/Chalet";
import roads from "./websites/Roads";
import reunions from "./websites/Reunions";

function createCard(project) {
  return <CardProject name={project.name} imgURL={project.imgURL} />;
}

function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      <p>
        <a href="https://www.instagram.com/chalet_designinteriores/">
          Chalet - Interior Design
        </a>
      </p>
      {chalets.map((chalet) => createCard(chalet))}
      <p>Estrada Fora - Travel Blog</p>
      {roads.map((road) => createCard(road))}
      <p>Mamaste - Lactation Consultations</p>
      {mamastes.map((mamaste) => createCard(mamaste))}
      <p>Reunion - Le Wagon Bootcamp's final project</p>
      {reunions.map((reunion) => createCard(reunion))}
    </div>
  );
}

export default ProjectsGallery;
