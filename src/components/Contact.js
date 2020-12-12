import React from 'react';
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div>
      <section className="footer-section">
                    <footer className="footer">
                <a href="mailto:mhaji007@fiu.edu" className="footer__link">mhaji007@fiu.edu</a>
                <ul className="social-list">
                  <Fade up>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://www.linkedin.com/in/mehdi-hajikhani/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                  </Fade>
                  <Fade up>
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com/mhaji007">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                  </Fade>
                </ul>
            </footer>
        </section>
    </div>
  )
}

export default Contact
