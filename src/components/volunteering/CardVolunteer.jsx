import React from "react";

function CardVolunteer(props) {
  return (
    <div className="volunteer-gallery-column">
      <img
        className="volunteer-gallery-demo cursor volunteer-image"
        src={props.imgURL}
        alt={props.name}
      ></img>
    </div>
  );
}

export default CardVolunteer;
