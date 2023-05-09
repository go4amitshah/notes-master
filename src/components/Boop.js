import React, { useEffect } from "react";
import LayoutSingle from "./LayoutSingle";
import "../App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Imformation from "./Imformation";
import Navbar from "./Navbar";
import BoopClass from "./BOOP/BoopClass";
import BoopIntro from "./BOOP/BoopIntro";
import { useState } from "react";

export default function Boop() {
  return (
    <div className="text-white bg-dark">
      <div className="wrapperDarkB"></div>

      <div className="container">
        <div className="row">
          {/*----------------- SIDE BAR -------------------*/}

          <div className="sidebar col-2">
            <div
              className="row sidebarLinks"
              style={{ fontSize: "2vw", border: "none" }}
            >
              Topics we cover!
              <button className="btn btn-dark" onClick={toggle()}>
                Toggle
              </button>
              {/* <button
                id="sidebarToggler"
                onClick={toggleStyle(div, "display", "none")}
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
            </div>
            <div id="navbarBtnTarget" style={{ color: "white" }}>
              <div className="row">
                <Link className="sidebarLinks" to="/boop/1">
                  Intoduction
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Data Types
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Input/Output
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Functions
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Class
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Access
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Overloadings
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Inheritance
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Constructors
                </Link>
              </div>
              <div className="row">
                <Link className="sidebarLinks" to="">
                  Destructors
                </Link>
              </div>
            </div>
          </div>

          {/* --------------CONTENT------------- */}

          <div className="col-10">
            <Routes>
              <Route path="/boop/1" element={<BoopIntro />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
  function toggle() {
    var sidebar = document.getElementById("navbarBtnTarget");
    // var state = "open";
    var state = "open";
    if (sidebar) {
      if (state === "open") {
        sidebar.style.transition = "all 0.5s linear";
        sidebar.style.transform = "translate(-200%, 0%)";
        state = "closed";
      } else {
        sidebar.style.transition = "all 0.5s linear";
        sidebar.style.transform = "translate(0%, 0px)";
        state = "open";
        state = "open";
      }
    }
  }
}
