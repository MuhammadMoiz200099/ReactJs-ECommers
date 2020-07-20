import React, { useState, useEffect } from "react";
import Image1 from "./../../../asserts/banner1.PNG";

const SliderImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      setImages(Image1);
    }
  });
  return (
    <div className="slider">
      {images.map((img) => (
        <img src={img} alt="" />
      ))}
    </div>
  );
};

export default SliderImages;
