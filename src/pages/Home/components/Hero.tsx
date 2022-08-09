import React from "react";
import HeroImage from "../../../assets/images/heroImage.png";

function Hero() {
  return (
    <main
      id="main"
      className="hero body__padding-vertical body__padding-horizontal"
    >
      <div className="hero__div01">
        <div className="hero__div01__div">
          <p className="hero__div01__div__p01 h2-light">Hello World! I am</p>
          <p className="hero__div01__div__p02 h1-bold">Konadu Akwasi Akuoko</p>
          <p className="hero__div01__div__p03">Creative Full Stack Developer</p>
        </div>
        <button className="button-primary" type="button">
          Learn More
        </button>
      </div>
      <div className="hero-div02">
        <img alt="" src={HeroImage} className="home-hero-image1" />
      </div>
    </main>
  );
}

export default Hero;
