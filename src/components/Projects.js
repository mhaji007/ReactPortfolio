import React from "react";

function Projects() {
  return (
    <>
      <div className="content ">
        <div className="project">
          <div className="image-container">
            <div className="image-wrap">
              <div className="image"></div>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="text-container">
            <h3>aEi.ai</h3>
            <p>
              HTML, JavaScript, Bootstrap and JQuery
              {/* Implemented the website UI using HTML, JavaScript, and JQuery.<br/>
              Currently migrating the website UI to React.js/Next.js */}
            </p>


              <button><i className="fa fa-eye"></i> Read More</button>


          </div>
        </div>

        <div className="project right">
          <div className="text-container">
            <h3>eShop</h3>
            <p>
              React js, MongoDB, Express js, Node js
              {/* Utilized MERN stack along with Ant Design and Bootstrap <br/> */}
              {/* this Ecommerce app that is equipped with advanced product search and filtering system, payment integration, admin dashboard and more! */}
            </p>
            <button>READ MORE</button>
          </div>
          <div className="image-container">
            <div className="image-wrap">
              <div className="image two"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>

        <div className="project">
          <div className="image-container">
            <div className="image-wrap">
              <div className="image three"></div>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="text-container">
            <h3>Crypto Console</h3>
            <p>React js, Bootstrap and Crypto Compare API</p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="project right">
          <div className="text-container">
            <h3>Repo Finder</h3>
            <p>React js, Next js, Bulma CSS and Github API </p>
            <button>READ MORE</button>
          </div>
          <div className="image-container">
            <div className="image-wrap">
              <div className="image four"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
