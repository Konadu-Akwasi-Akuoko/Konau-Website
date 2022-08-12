import React from "react";
import AboutImage from "../../../assets/images/aboutImage.png";

function AboutMe() {
  return (
    <div className="about body__padding-horizontal body__padding-vertical">
      <div className="about__div01">
        <img
          alt="Konadu in his school wearing an African dress"
          src={AboutImage}
          className="about__div01__img"
        />
      </div>
      <div className="about__div02">
        <p className="h3-medium">About Me</p>
        <p className="about__div02__p02 h2-bold">Full stack developer</p>
        <p className="about__div02__p03">
          Hello! My name is Konadu, and I like making things that are
          interactive and exist online including websites.
        </p>
        <p className="about__div02__p04">
          When I decided to attempt and make my own game with Unity3d in 2019,
          that is when my interest in programming first began. It turns out that
          experience taught me a lot about programming.
        </p>
        <p className="about__div02__p05">
          I left up game programming when I began my undergraduate studies in
          computer technology because I fell in love with web development. I can
          now create extremely interactive websites with frontend and backend
          tools like NodeJS, ReactJS, ExpressJS, and MongoDB.
        </p>
        <button className="button-primary" type="button">
          Skills &amp; Experience
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
