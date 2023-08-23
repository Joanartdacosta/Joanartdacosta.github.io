import React from "react";
import HOBBIES_URLS from "./urls";
import CardGallery from "./CardGallery";

function createCard(urls) {
  return <CardGallery key={urls.id} url={urls.url} text={urls.text} />;
}

function AboutGallery() {
  return (
    <div>
      <div class="about-gallery">{HOBBIES_URLS.map(createCard)}</div>
    </div>
  );
}

export default AboutGallery;
