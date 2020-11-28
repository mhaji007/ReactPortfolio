import React from "react";
import Fade from "react-reveal/Fade";
import cert1 from "../images/cert1.JPG";
import cert2 from "../images/cert2.JPG";
import cert3 from "../images/cert3.jpg";
import cert4 from "../images/cert4.jpg";
import cert5 from "../images/cert5.jpg";
import cert6 from "../images/cert6.jpg";
import cert7 from "../images/cert7.jpg";
import cert8 from "../images/cert8.jpg";
import cert9 from "../images/cert9.jpg";
import cert10 from "../images/cert10.jpg";
import cert11 from "../images/cert11.jpg";
import cert12 from "../images/cert12.jpg";
import cert13 from "../images/cert13.jpg";
import cert14 from "../images/cert14.jpg";
import cert15 from "../images/cert15.jpg";
import cert16 from "../images/cert16.jpg";
import cert17 from "../images/cert17.jpg";
import cert18 from "../images/cert18.jpg";
import cert19 from "../images/cert19.jpg";
import cert20 from "../images/cert20.jpg";
import cert23 from "../images/cert23.png";
import cert24 from "../images/cert24.png";
import cert25 from "../images/cert25.png";
import cert26 from "../images/cert26.png";

function Certificates() {
  return (
    <div>
      <section className="my-certificates" id="certificate">
        <h2 className=" section__title section__title--certificate">
          <strong>
            {" "}
            <i class="fa fa-certificate"></i> Accomplishments
          </strong>
        </h2>
        <p className="ml-5 section__subtitle section__subtitle--certificate">
          A selection of my certificates
        </p>

        <div className="certificates">
          <Fade>
            <img src={cert23} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert24} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert25} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert26} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert1} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert2} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert3} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert4} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert5} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert6} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert7} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert8} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert9} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert10} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert11} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert12} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert13} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert14} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert15} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert16} alt="" className="certificate__img" />
          </Fade>
          <Fade>
            <img src={cert17} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert18} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert19} alt="" className="certificate__img" />
          </Fade>

          <Fade>
            <img src={cert20} alt="" className="certificate__img" />
          </Fade>
        </div>
      </section>
    </div>
  );
}

export default Certificates;
