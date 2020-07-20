import React from "react";
import Carousel from "react-elastic-carousel";
import SliderImages from "./slider-Images";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
  return (
    <div className="slider">
      <Carousel breakPoints={breakPoints}>
        <SliderImages />
      </Carousel>
    </div>
  );
};

export default Slider;
