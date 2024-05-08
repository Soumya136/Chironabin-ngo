'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({slides}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((item, index) => (
        <div key={index}>
          <div className="img-body">
            <img src={item} />
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default PhotoCarousel;
