import React from "react";

function CardProject(props) {
  return (
    <div className="project-gallery-column">
      <img
        className="project-gallery-demo cursor project-image"
        src={props.imgURL}
        alt={props.name}
      ></img>
    </div>
  );
}

export default CardProject;
