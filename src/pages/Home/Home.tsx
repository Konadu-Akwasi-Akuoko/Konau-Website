import React from "react";
// import AlertComingSoon from "../../components/AlertComingSoon";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Work from "./components/Work";

function Home() {
  return (
    <>
      {/* <AlertComingSoon /> */}
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
