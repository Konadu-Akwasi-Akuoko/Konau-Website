import React from "react";
import BackendPic from "../../../assets/images/backend.svg";
import FrontendPic from "../../../assets/images/frontend.svg";
import DatabasePic from "../../../assets/images/database.svg";

// TODO: Make this a reusable component.
// TODO: Add a description of the skill pictures.
// TODO: Make the skill component grow horizontally.

function Skills() {
  return (
    <div className="skill body__padding-horizontal body__padding-vertical">
      <p className="h3-medium">Skills</p>
      <span className="h2-bold colored-text skill__span">What I Offer</span>
      <div className="skill__div01">
        <div className="skill__div01__div">
          <div className="skill__div01__div__div">
            <div className="skill__div01__div__div__div">
              <img
                alt="ALt"
                src={FrontendPic}
                className="skill__div01__div__div__div__img"
              />
            </div>
            <span className="text-3xl">Frontend Development</span>
            <span className="skill__div01__div__span02">
              As a frontend developer, I structure content using HTML, style it
              with CSS, and employ JavaScript when the case calls for more
              complex interactivity.
            </span>
            <span className="skill__div01__div__span03">
              When the occasion calls for it, I also use frontend frameworks and
              technologies like ReactJS, NextJS, and EJS, and I enjoy doing so
              because they speed development.
            </span>
          </div>
        </div>
        <div className="skill__div01__div">
          <div className="skill__div01__div__div">
            <div className="skill__div01__div__div__div">
              <img
                alt="ALT"
                src={BackendPic}
                className="skill__div01__div__div__div__img"
              />
            </div>
            <span className="text-3xl">Backend Development</span>
            <span className="skill__div01__div__span02">
              As a backend developer, I can build features and components that
              are accessed by users through frontend applications.
            </span>
            <span className="skill__div01__div__span03">
              This covers the central logic of the application, databases, data
              and application integration, APIs, and other background
              operations, NodeJS is my language of choice.
            </span>
          </div>
        </div>
        <div className="skill__div01__div">
          <div className="skill__div01__div__div">
            <div className="skill__div01__div__div__div">
              <img
                alt="ALT"
                src={DatabasePic}
                className="skill__div01__div__div__div__img"
              />
            </div>
            <span className="text-3xl">Database Management</span>
            <span className="skill__div01__div__span02">
              As a full-stack developer, I write code that is used to carry out
              tasks including obtaining data from the database, updating data,
              and replacing data.
            </span>
            <span className="skill__div01__div__span03">
              I&apos;m very comfortable working with relational databases or
              document databases like MySQL, MongoDb, or Firebase when it comes
              to databases.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
