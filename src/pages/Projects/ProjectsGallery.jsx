import React from "react";

import chalets from "./Chalet";
import roads from "./Roads";
import reunions from "./Reunions";
import SimpleCarousel from "../../components/carousel/SimpleCarousel";

function ProjectsGallery() {
  return (
    <div className="projects-gallery">
      <div>
        <p>
          <a href="https://www.instagram.com/chalet_designinteriores/">
            Chalet - Interior Design
          </a>
        </p>
        <SimpleCarousel slides={chalets} />
      </div>

      <div className="projects-gallery-section">
        <p>Estrada Fora - Travel Blog</p>
        <SimpleCarousel slides={roads} />
      </div>

      <div className="projects-gallery-section">
        <p>Reunion - Le Wagon Bootcamp's final project</p>
        <SimpleCarousel slides={reunions} />
      </div>
    </div>
  );
}

export default ProjectsGallery;
