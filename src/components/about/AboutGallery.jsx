import React from "react";
import urls from "./urls";
import CardGallery from "./CardGallery";

function createCard(urls) {
  return <CardGallery key={urls.id} url={urls.url} text={urls.text} />;
}

function AboutGallery() {
  return (
    <div>
      <div class="about-gallery">{urls.map(createCard)}</div>
    </div>
  );
}

export default AboutGallery;
