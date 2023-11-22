import React from "react";
import PROJECTS_URL from "./projects_urls";

export default function ProjectList() {
  return (
    <div className="main-card md-main-card">
      {PROJECTS_URL.map((project) => {
        return (
          <div key={project.id} className="card md-card relative">
            <img
              className="absolute card-img cursor-pointer"
              src={project.imgUrl}
              alt={project.title}
            />
            <div className="card-content">
              <h2 className="absolute card-title md-card-title">
                {project.title}
              </h2>
              <p className="absolute card-p">{project.description}</p>
              <a href={project.href} className="card-link">
                {project.label}
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
