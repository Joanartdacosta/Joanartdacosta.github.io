import React from "react";
import HOBBIES_URLS from "./about_urls";
import CardGallery from "./CardGallery";

export default function AboutGallery() {
  return (
    <div>
      <div className="about-gallery">
        {HOBBIES_URLS.map((hobbie) => {
          return (
            <CardGallery key={hobbie.id} url={hobbie.url} text={hobbie.text} />
          );
        })}
      </div>
    </div>
  );
}
