import React from "react";
import portImage from "../../../assets/images/portImage.png";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div
      id="work-done"
      className="work body__padding-vertical body__padding-horizontal"
    >
      <p className="h3-medium">Work I&apos;ve Done</p>
      <span className="h2-bold colored-text work__span">Portfolio</span>
      <div className="work__div">
        <WorkCard
          title="Pricee App"
          pills={["MongoDB", "NodeJS", "ReactJS"]}
          description="As a frontend developer, I structure content using HTML, style 
          it with CSS, and employ JavaScript when the case calls for more 
          complex interactivity."
          hasCodeLink
          projectLink="/"
          codeLink="/"
          image={portImage}
        />

        <WorkCard
          title="Pricee App"
          pills={["MongoDB", "NodeJS", "ReactJS"]}
          description="As a frontend developer, I structure content using HTML, style 
          it with CSS, and employ JavaScript when the case calls for more 
          complex interactivity."
          hasCodeLink
          projectLink="/"
          codeLink="/"
          image={portImage}
        />

        <WorkCard
          title="Pricee App"
          pills={["MongoDB", "NodeJS", "ReactJS"]}
          description="As a frontend developer, I structure content using HTML, style 
          it with CSS, and employ JavaScript when the case calls for more 
          complex interactivity."
          hasCodeLink
          projectLink="/"
          codeLink="/"
          image={portImage}
        />
      </div>
    </div>
  );
}

export default Work;
