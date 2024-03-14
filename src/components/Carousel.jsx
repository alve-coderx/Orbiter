import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide11 from "../assets/slide11.png";
import slide22 from "../assets/slide22.png";
import slide33 from "../assets/slide33.png";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    };
    const settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="overflow-hidden ">
        <div className="max-w-[1000px] mx-auto md:block hidden pb-5">
          <Slider {...settings}>
            <div className="w-full">
              <img src={slide1} alt="slide1" className="px-10 w-full" />
            </div>

            <div className="w-full">
              <img src={slide2} alt="slide1" className="px-10 w-full" />
            </div>

            <div className="w-full">
              <img src={slide3} alt="slide1" className="px-10 w-full" />
            </div>
          </Slider>
        </div>
        <div className="max-w-[1000px] mx-auto md:hidden block py-5">
          <Slider {...settings2}>
            <div className="w-full">
              <img src={slide11} alt="slide1" className=" object-cover" />
            </div>

            <div className="w-full">
              <img src={slide22} alt="slide1" className=" object-cover" />
            </div>

            <div className="w-full">
              <img src={slide33} alt="slide1" className=" object-cover" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
