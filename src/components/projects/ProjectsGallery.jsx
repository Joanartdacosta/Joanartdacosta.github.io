import React from "react";
import Carousel from "../../components/carousel/Carousel";
import CHALETS from "./websites/chalets";
import REUNIONS from "./websites/reunions";
import ROADS from "./websites/roads";

function ProjectsGallery() {
  const simpleCarouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="projects-gallery">
      <div>
        <p>
          <a href="https://www.instagram.com/chalet_designinteriores/">
            Chalet - Interior Design
          </a>
        </p>
        <Carousel slides={CHALETS} settings={simpleCarouselSettings} />
      </div>

      <div className="projects-gallery-section">
        <p>Estrada Fora - Travel Blog</p>
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
