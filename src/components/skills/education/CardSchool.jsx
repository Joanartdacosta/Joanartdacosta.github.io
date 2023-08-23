import React from "react";

function CardSchool(props) {
  return (
    <div>
      <img className="skills-education-logo" src={props.imgURL} alt=""></img>

      <p>{props.course}</p>
      <p>{props.school}</p>
      <p>{props.year}</p>
    </div>
  );
}

export default CardSchool;
