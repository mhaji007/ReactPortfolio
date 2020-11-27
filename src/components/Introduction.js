import React from "react";
import icon from "../images/Icon-01.jpg";

const Introduction = () => {
  return (
    <section className="section-wrapper">
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Mehdi Hajikhani</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro ">
          A web developer
        </p>

        <img className="intro__img" src={icon} />
      </section>
    </section>
  );
};

export default Introduction;
