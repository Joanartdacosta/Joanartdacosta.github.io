import React from "react";
import CardGallery from "./CardExperienceGallery";
import { useState } from "react";
import EXPERIENCE_URLS from "./urls";

function Cards() {
  return (
    <div className="experience-gallery">{EXPERIENCE_URLS.map(createCard)}</div>
  );
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
