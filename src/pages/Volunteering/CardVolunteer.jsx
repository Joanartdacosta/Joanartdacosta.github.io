import React from "react";

function CardVolunteer(props) {
  return (
    <div className="column">
      <img
        className="demo cursor volunteer-image"
        src={props.imgURL}
        alt={props.name}
      ></img>
    </div>
  );
}

export default CardVolunteer;
