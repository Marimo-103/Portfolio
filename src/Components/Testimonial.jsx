import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Testimonial = () => {
    var settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        lassName: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
      };
  return (
    <div>
        <Slider {...settings}>
        
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Testimonial