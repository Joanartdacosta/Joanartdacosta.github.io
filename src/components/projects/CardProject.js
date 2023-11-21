import React from "react";
import PROJECTS_URL from "./projects";

export default function CardProject() {
  return (
    <div className="main-card">
      {PROJECTS_URL.map((project) => {
        return (
          <div className="padding-2">
            <div className="card md-card">
              <img
                className="card-img"
                src={project.imgUrl}
                alt={project.title}
              />
              <div className="card-content">
                <h2 className="card-title">{project.title}</h2>
                <p className="card-p">{project.description}</p>
                <a href={project.href} className="button card-link">
                  {project.label}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
