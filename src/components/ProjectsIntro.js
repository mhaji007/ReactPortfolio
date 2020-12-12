import React from "react";

function ProjectsIntro() {
  return (
    <div className="mb-3">
      <div className="fakeMenu ">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
      </div>
      <div className="fakeScreen">
        <p className="line1">
          &#91;&nbsp;&ldquo;⚠️WARNING&rdquo;,
          <span className="cursor1">_</span>
        </p>
        <p className="line2">
          &nbsp;&nbsp;&ldquo;Cool Projects Ahead!&rdquo;,
          <span className="cursor2">_</span>
        </p>
        <p className="line3">
          &nbsp;&nbsp;&ldquo; Hope you enjoy😊&rdquo;&nbsp;&#93;
          <span className="cursor3">_</span>
        </p>
        <p className="line4">
          ><span className="cursor4">_</span>
        </p>
      </div>
    </div>
  );
}

export default ProjectsIntro;
