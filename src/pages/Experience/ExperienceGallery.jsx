import React from "react";
import urls from "./arrays/urls";
import CardGallery from "./CardExperienceGallery";
import { useState } from "react";

function Cards() {
  return <div className="experience-gallery">{urls.map(createCard)}</div>;
}

function createCard(urls) {
  return <CardGallery key={urls.id} url={urls.url} text={urls.text} />;
}

function ExperienceGallery() {
  const [toggle, setToggle] = useState(null);

  function toggleMenu() {
    setToggle(true);
  }

  return (
    <div>
      <button className="button-gallery" onClick={toggleMenu}>
        Tasks - More information
      </button>
      {toggle && <Cards onClick={toggleMenu} />}
    </div>
  );
}

export default ExperienceGallery;
