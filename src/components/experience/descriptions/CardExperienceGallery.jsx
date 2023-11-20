import React from "react";

function CardGallery(props) {
  return (
    <div className="experience-gallery-category">
      <img className="experience-image" src={props.url} alt={props.id} />
      <p className="experience-text">{props.text}</p>
    </div>
  );
}

export default CardGallery;
