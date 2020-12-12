import React from "react";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import About from "../components/About";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import ProjectsIntro from "../components/ProjectsIntro";
// import Ribbon from "../components/Ribbon";

function Home() {
  return (
    <>
      <Introduction />
      <ProjectsIntro/>
      <Projects />
      <About />
      <Certificates />
      <Contact />
    </>
  );
}

export default Home;
