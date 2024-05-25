import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ images, speed }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  
  

  };

  const imageStyle = {
    height: '150px',  // Fixed height
    width: '200px',   // Fixed width
    objectFit: 'contain',
    aspectRatio:'3/2',
     // Maintain aspect ratio
   // Optional padding
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img) => (
          <div key={img.id} className="slider-container">
            <img src={img.image} alt="brand logo" className="m-2 p-2" style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
