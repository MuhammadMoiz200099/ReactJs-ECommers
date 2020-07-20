import React from "react";
import Navbar from "./../navigation-bar/navbar";
import Slider from "../slider/slider";

const Home = () => {
  return (
    <div class="container">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
