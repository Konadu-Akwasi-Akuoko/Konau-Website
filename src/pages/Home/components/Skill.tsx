import React from "react";
import BackendPic from "../../../assets/images/backend.svg";
import FrontendPic from "../../../assets/images/frontend.svg";
import DatabasePic from "../../../assets/images/database.svg";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div
      id="work"
      className="skill body__padding-horizontal body__padding-vertical"
    >
      <p className="h3-medium">Skills</p>
      <span className="h2-bold colored-text skill__span">What I Offer</span>
      <div className="skill__div01">
        <SkillCard
          imgSrc={FrontendPic}
          cardTitle="Frontend Development"
          cardContent1="As a frontend developer, I structure content using HTML, style it with
          CSS, and employ JavaScript when the case calls for more complex
          interactivity."
          cardContent2="When the occasion calls for it, I also use frontend frameworks and
          technologies like ReactJS, NextJS, and EJS, and I enjoy doing so
          because they speed development."
        />
        <SkillCard
          imgSrc={BackendPic}
          cardTitle="Backend Development"
          cardContent1="As a backend developer, I can build features and components that are 
          accessed by users through frontend applications."
          cardContent2="This covers the central logic of the application, databases, data
          and application integration, APIs, and other background
          operations, NodeJS is my language of choice."
        />
        <SkillCard
          imgSrc={DatabasePic}
          cardTitle="Database Management"
          cardContent1="As a full-stack developer, I write code that is used to carry out tasks 
          including obtaining data from the database, updating data, and replacing data."
          cardContent2="I'm very comfortable working with relational databases or document 
          databases like MySQL, MongoDb, or Firebase when it comes to databases."
        />
      </div>
    </div>
  );
}

export default Skills;
