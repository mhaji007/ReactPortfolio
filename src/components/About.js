import React from 'react';
import me from "../images/dev-mehdi.jpg";

function About() {
  return (
    <div>
        <section className="section-wrapper" id="about">
          <h2 className="section__title section__title--about">Who am I?</h2>
          <p className="section__subtitle section__subtitle--about">A web developer based out of California</p>

           <div className="about-me__body">
            <p>My name is Mehdi Hajikhani. I am a software developer from California.</p>

            <p>I graduated from Florida International University with a bachelor's degree in Computer Science and hold another bachelor's in Petroleum Engineering.</p>

            <p>I have experience programming in different languages such as C, Java, PHP, and of course JavaScript. I am also experienced in designing and creating websites and mobile applications using React.js and React Native. More recently I have been focused on developing serverside web applications using Next.js.</p>

            <p>In my free time, I enjoy not having to write trivia about myself.</p>
           </div>

           <img src={me} className="about-me__img"/>
        </section>

    </div>
  )
}

export default About
