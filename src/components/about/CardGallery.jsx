import React from "react";

function CardGallery(props) {
  return (
    <div
      className="about-hobbies-category md-about-card"
      style={{
        backgroundImage: props.url,
      }}
    >
      <p className="subtitle-image md-subtitle-image">{props.text}</p>
    </div>
  );
}

export default CardGallery;
