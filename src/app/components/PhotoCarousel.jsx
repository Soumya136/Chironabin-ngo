'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({slides}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
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
