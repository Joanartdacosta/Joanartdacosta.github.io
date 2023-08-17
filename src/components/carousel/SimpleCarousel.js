import React from "react";
import Slider from "react-slick";

export default function SimpleCarousel(props) {
  const settings = {
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
    <div>
      <Slider {...settings}>
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
