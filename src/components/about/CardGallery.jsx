import React from "react";

function CardGallery(props) {
  return (
    <div
      className="about-hobbies-category"
      style={{
        backgroundImage: props.url,
      }}
    >
      {props.text}
    </div>
  );
}

export default CardGallery;
