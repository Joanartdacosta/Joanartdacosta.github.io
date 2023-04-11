import React from "react";
import urls from "./arrays/urls";
import CardGallery from "./CardExperienceGallery";

function createCard(urls) {
  return <CardGallery key={urls.id} url={urls.url} text={urls.text} />;
}

function ExperienceGallery() {
  return <div className="experience-gallery">{urls.map(createCard)}</div>;
}

export default ExperienceGallery;
