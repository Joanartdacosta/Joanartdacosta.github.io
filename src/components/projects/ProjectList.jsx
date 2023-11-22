import React from "react";
import PROJECTS_URL from "./projects_urls";

export default function ProjectList() {
  return (
    <div className="main-card cards md-card">
      {PROJECTS_URL.map((project) => {
        return (
          <div>
            <a href={project.href}>
              {" "}
              <figure>
                <img className="image" src={project.imgUrl} alt="Mountains" />

                <figcaption>
                  <span className="text-title">{project.title}</span>
                  <span>{project.description}</span>
                </figcaption>
              </figure>
            </a>
          </div>
        );
      })}
    </div>
  );
}
