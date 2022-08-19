import React from "react";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Skills from "./components/Skill";
import Work from "./components/Work";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
    </>
  );
}

export default Home;
