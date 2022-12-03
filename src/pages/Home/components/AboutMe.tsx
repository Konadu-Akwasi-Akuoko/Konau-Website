/* eslint-disable prettier/prettier */
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
        <p className="about__div02__p03 p-content">
          I am a student of the Bachelor&apos;s of Science department, studying
          Information Technology with Education at &nbsp;
          <span>
            <a href="https://aamusted.edu.gh/">
              Akenten Appiah-Menka University of Skills Training and
              Entrepreneurial Development.
            </a>
          </span>
        </p>
        <p className="about__div02__p04 p-content">
          I build <a href="#work-done">full stack web applications</a>, I
          construct websites utilizing ReactJS, NodeJS, ExpressJS, MongoDB, and
          Netlify. I recently finished my internship as a teaching assistant at
          the Open Labs NIIT, Kumasi campus. Due to my expertise in programming
          languages and software development in general, I assisted the
          instructors at Open Labs NIIT in teaching ReactJS, MySQL, and Excel,
          among other subjects.
        </p>
        <p className="about__div02__p05 p-content">
          Additionally, I offered to&nbsp;
          <a href="https://gdsc.community.dev/akenten-appiah-menka-university-of-skills-training-and-entrepreneurial-development/">
            lead the AAMUSTED Google Developer Student Club at my school
          </a>
          , where I mostly aid in this effort by providing engaging seminars and
          activities that broaden students knowledge of developer tools and
          platforms. In general, I am dedicated to supporting, expanding, and
          instructing the developer community at my school.
        </p>
        <a href="#work">
          <button className="button-primary" type="button">
            Skills &amp; Experience
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
