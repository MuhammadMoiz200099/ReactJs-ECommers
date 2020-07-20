import React from "react";
import Carousel from "react-elastic-carousel";
import SliderImages from "./slider-Images";
import "./slider.css";

const breakPoints = [{ width: 1, itemsToShow: 1 }];

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-heading">Hero Prizes !</div>
      <Carousel breakPoints={breakPoints}>
        <SliderImages />
        <SliderImages />
        <SliderImages />
        <SliderImages />
        <SliderImages />
        <SliderImages />
        <SliderImages />
      </Carousel>
    </div>
  );
};

export default Slider;
