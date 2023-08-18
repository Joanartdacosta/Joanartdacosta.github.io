import React from "react";
import chalets from "./Chalet";
import roads from "./Roads";
import reunions from "./Reunions";
import Carousel from "../../components/carousel/Carousel";

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
        <Carousel slides={chalets} settings={simpleCarouselSettings} />
      </div>

      <div className="projects-gallery-section">
        <p>Estrada Fora - Travel Blog</p>
        <Carousel slides={roads} settings={simpleCarouselSettings} />
      </div>

      <div className="projects-gallery-section">
        <p>Reunion - Le Wagon Bootcamp's final project</p>
        <Carousel slides={reunions} settings={simpleCarouselSettings} />
      </div>
    </div>
  );
}

export default ProjectsGallery;
