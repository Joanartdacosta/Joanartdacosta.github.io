import React from "react";

function CardSchool(props) {
  return (
    <div className="flex justify-center align-items-center height-10">
      <div>
        <img
          className="skills-education-logo padding-2"
          src={props.imgURL}
          alt=""
        />
      </div>

      <div>
        <p>{props.course}</p>
        <p>{props.school}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

export default CardSchool;
