import React from "react";
import Carousel from "../../components/carousel/Carousel";
import CHALETS from "./websites/chalets";
import REUNIONS from "./websites/reunions";
import ROADS from "./websites/roads";

function ProjectsGallery() {
  const simpleCarouselSettings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="projects-gallery">
      <div>
        <p>
          <a href="https://www.chaletdesigninteriores.com/">
            Chalet - Interior Design
          </a>
        </p>
        <Carousel slides={CHALETS} settings={simpleCarouselSettings} />
      </div>

      <div className="projects-gallery-section">
        <a href="https://github.com/Joanartdacosta/roads-blog">
          <p>Estrada Fora - Travel Blog</p>
        </a>
        <Carousel slides={ROADS} settings={simpleCarouselSettings} />
      </div>

      <div className="projects-gallery-section">
        <p>Reunion - Le Wagon Bootcamp's final project</p>
        <Carousel slides={REUNIONS} settings={simpleCarouselSettings} />
      </div>
    </div>
  );
}

export default ProjectsGallery;
