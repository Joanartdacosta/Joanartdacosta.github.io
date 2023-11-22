import React from "react";

export default function CardGallery(props) {
  return (
    <div
      className="about-hobbies-category md-about-card"
      style={{
        backgroundImage: props.url,
      }}
    >
      <p className="subtitle-image md-subtitle-image text-p">{props.text}</p>
    </div>
  );
}
