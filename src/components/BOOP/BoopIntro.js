import React from "react";
import LayoutSingle from "../LayoutSingle";

export default function BoopIntro() {
  return (
    <div style={{ fontFamily: "Comfortaa" }}>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="aligner mx-3">
            <div className="col">
              <h1>Basic Object Oriented Programming!</h1>
            </div>
            <hr />
            <br />
            <div className="row">
              <h2 className="myBorderLeft">
                What is Object Oriented Programming?
              </h2>
            </div>
            <br />
            <div className="row display-6 text-muted">
              "Object Oriented Programming is a type of programming where we
              create multiple objects and use them with verious components like
              class!"
            </div>
            <br />
            <div className="row myBorderLeft">
              <h3>
                OOP is used by many languages including C++, Java , JavaScript
                etc....
              </h3>
            </div>
            <br />
            {/* APPLICATIONS */}
            <div className="row ">
              <h3 className="myBorderLeft">
                Thre are many applications of OOP languages like C++, some are
                listed here:
              </h3>
              <p className="text-muted">
                <ol>
                  <li>
                    Operating Systems: Many popular powerfull OS are made in C++
                    including MacOS!
                  </li>
                  <li>
                    Games: Many popular games including the GTA series and
                    FarCry series are made using C++. The UnrealEngine is highly
                    based on C++!
                  </li>
                  <li>
                    GUI based Application: Applications including Photoshop ,
                    Illustrator and other Adobe applications are made in C++.
                  </li>
                  <li>Database Managment Systems </li>
                  <li>The CAM and Cad these days are modtly made using C++.</li>
                </ol>
              </p>
            </div>
            <div className="row">
              <h3 className="myBorderLeft">Key Concepts of OOP:</h3>
              <p>
                <ol></ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
