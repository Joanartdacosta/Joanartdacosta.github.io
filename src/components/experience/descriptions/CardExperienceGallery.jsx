import React from "react";

function CardGallery(props) {
  return (
    <div
      className="experience-gallery-category"
      style={{
        backgroundImage: props.url,
      }}
    >
      {props.text}
    </div>
  );
}

export default CardGallery;
