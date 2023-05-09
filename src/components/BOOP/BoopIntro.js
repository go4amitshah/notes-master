import React from "react";
import LayoutSingle from "../LayoutSingle";

export default function BoopIntro() {
  return (
    <div style={{ fontFamily: "Comfortaa" }}>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="aligner mx-3">
            <div className="col display-4">
              Basic Object Oriented Programming!
            </div>
            <div className="row" style={{ fontSize: "5vh" }}>
              What is Object Oriented Programming?
            </div>
            <div className="row">
              Object Oriented Programming is a type of programming where we
              create multiple objects and use them with verious components like
              class!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
