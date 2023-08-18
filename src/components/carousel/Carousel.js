import React from "react";
import Slider from "react-slick";

export default function Carousel(props) {
  return (
    <div>
      <Slider {...props.settings}>
        {props.slides.map((slide) => {
          return (
            <div key={slide.id}>
              <img className="carousel-image" src={slide.imgURL} alt="slide" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
