import React, { Component } from "react";

import Carousel, { Modal, ModalGateway } from "react-images";
import Fade from "react-reveal/Fade";

// import cert1 from "../images/cert1.JPG";
// import cert2 from "../images/cert2.JPG";
// import cert3 from "../images/cert3.jpg";
// import cert4 from "../images/cert4.jpg";
// import cert5 from "../images/cert5.jpg";
// import cert6 from "../images/cert6.jpg";
// import cert7 from "../images/cert7.jpg";
// import cert8 from "../images/cert8.jpg";
// import cert9 from "../images/cert9.jpg";
// import cert10 from "../images/cert10.jpg";
// import cert11 from "../images/cert11.jpg";
// import cert12 from "../images/cert12.jpg";
// import cert13 from "../images/cert13.jpg";
// import cert14 from "../images/cert14.jpg";
// import cert15 from "../images/cert15.jpg";
// import cert16 from "../images/cert16.jpg";
// import cert17 from "../images/cert17.jpg";
// import cert18 from "../images/cert18.jpg";
// import cert19 from "../images/cert19.jpg";
// import cert20 from "../images/cert20.jpg";
// import cert23 from "../images/cert23.png";
// import cert24 from "../images/cert24.png";
// import cert25 from "../images/cert25.png";
// import cert26 from "../images/cert26.png";

const images = [
  { src: "certificates/cert23.png" },
  { src: "certificates/cert24.png" },
  { src: "certificates/cert25.png" },
  { src: "certificates/cert26.png" },
  { src: "certificates/cert3.jpg" },
  { src: "certificates/cert4.jpg" },
  { src: "certificates/cert5.jpg" },
  { src: "certificates/cert6.jpg" },
  { src: "certificates/cert7.jpg" },
  { src: "certificates/cert8.jpg" },
  { src: "certificates/cert9.jpg" },
  { src: "certificates/cert10.jpg" },
  { src: "certificates/cert11.jpg" },
  { src: "certificates/cert12.jpg" },
  { src: "certificates/cert3.jpg" },
  { src: "certificates/cert14.jpg" },
  { src: "certificates/cert15.jpg" },
  { src: "certificates/cert16.jpg" },
  { src: "certificates/cert17.jpg" },
  { src: "certificates/cert18.jpg" },
  { src: "certificates/cert19.jpg" },
  { src: "certificates/cert20.jpg" },
  { src: "certificates/cert1.JPG" },
  { src: "certificates/cert2.JPG" },
];

export default class Home extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false,
  };
  toggleLightbox = (selectedIndex) => {
    this.setState((state) => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }));
  };
  render() {
    const { selectedIndex, lightboxIsOpen } = this.state;
    return (
      <>
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
              {images.map(({ caption, src }, j) => (
                <Image
                  onClick={() => this.toggleLightbox(j)}
                  key={src}
                >
                  <img
                    alt={caption}
                    src={src}
                    // css={{
                    //   cursor: "pointer",
                    //   position: "absolute",
                    //   maxWidth: "100%",
                    // }}
                  />
                </Image>
              ))}
          </div>
        </section>
        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

const gutter = 2;

const Gallery = (props) => (
  <div
    // css={{
    //   overflow: "hidden",
    //   marginLeft: -gutter,
    //   marginRight: -gutter,
    // }}
    {...props}
  />
);

const Image = (props) => (
  <div
    // css={{
    //   backgroundColor: "#eee",
    //   boxSizing: "border-box",
    //   float: "left",
    //   margin: gutter,
    //   overflow: "hidden",
    //   paddingBottom: "16%",
    //   position: "relative",
    //   width: `calc(25% - ${gutter * 2}px)`,

    //   ":hover": {
    //     opacity: 0.9,
    //   },
    // }}
    {...props}
  />
);

// function Certificates() {
//   return (
//     <div>
//       <section className="my-certificates" id="certificate">
//         <h2 className=" section__title section__title--certificate">
//           <strong>
//             {" "}
//             <i class="fa fa-certificate"></i> Accomplishments
//           </strong>
//         </h2>
//         <p className="ml-5 section__subtitle section__subtitle--certificate">
//           A selection of my certificates
//         </p>

//         <div className="certificates">
//           <Fade>
//             <img src={cert23} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert24} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert25} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert26} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert1} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert2} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert3} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert4} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert5} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert6} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert7} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert8} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert9} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert10} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert11} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert12} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert13} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert14} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert15} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert16} alt="" className="certificate__img" />
//           </Fade>
//           <Fade>
//             <img src={cert17} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert18} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert19} alt="" className="certificate__img" />
//           </Fade>

//           <Fade>
//             <img src={cert20} alt="" className="certificate__img" />
//           </Fade>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Certificates;
