import React from "react";

function CardSchool(props) {
  return (
    <div>
      <img className="skills-education-logo" src={props.imgURL} alt=""></img>

      <p>{props.course}</p>
      <p>{props.school}</p>
      <p>{props.year}</p>
      <a href="https://freecodecamp.org/certification/fcc806ff4c7-711e-4dd2-8fa3-0a9a05722a83/responsive-web-design">
        <img
          className="skills-icon-download"
          src="../images/icons/download.png"
          alt="download"
        ></img>
      </a>
    </div>
  );
}

export default CardSchool;
