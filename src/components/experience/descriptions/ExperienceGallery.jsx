import React from "react";
import CardGallery from "./CardExperienceGallery";
import EXPERIENCE_URLS from "./urls";

function ExperienceGallery() {
  return (
    <div className="experience-gallery">
      {EXPERIENCE_URLS.map((experience) => {
        return (
          <CardGallery
            key={experience.id}
            url={experience.url}
            imgUrl={experience.imgUrl}
            text={experience.text}
          />
        );
      })}
    </div>
  );
}

export default ExperienceGallery;
