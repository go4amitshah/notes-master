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
    <div className="myContent bg-dark">
      <div className="text-white bg-dark">
        <div className="wrapperDarkB"></div>

        <div
          className="container-fluid d-flex"
          style={{ flexDirection: "column" }}
        >
          <div className="row" style={{ marginRight: "0px" }}>
            <div className="col-2 hider" style={{ display: "sticky" }}>
              <div
                id="sidebar"
                style={{ position: "fixed", height: "100vh" }}
                className="sidebar col-2"
              >
                <div
                  className="row sidebarLinks"
                  style={{ fontSize: "2vw", border: "none" }}
                >
                  Topics we cover!
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
            </div>

            {/* ----------------- SIDE BAR ------------------- */}

            {/* --------------CONTENT------------- */}

            <div className="col-10">
              <Routes>
                <Route path="/boop/1" element={<BoopIntro />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="row" style={{ display: "flex", justifyContent: "end" }}>
          <div
            className=" col-4 d-flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "end",
            }}
          >
            <h3 id="hiderr">
              We hope you foun what you were looking for and learnt something
              new!
            </h3>
          </div>
          <div
            className="col-3 d-flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/1"
            >
              Introduction
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/2"
            >
              Data Types
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/3"
            >
              Input/Output
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/4"
            >
              Functions
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/5"
            >
              Class
            </Link>
          </div>
          <div
            className="col-3 d-flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/6"
            >
              Access
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/7"
            >
              Overloadings
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/8"
            >
              Inheritance
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/9"
            >
              Constructors
            </Link>
            <Link
              className="sidebarLinks"
              style={{
                borderRight: "solid cyan 4px",
                marginBottom: "2vh",
                paddingRight: "1vw",
              }}
              to="/boop/10"
            >
              Destructors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  // var state = "closed";
  // var myBtn = document.getElementById("btnID");
  // myBtn.addEventListener("click", toggle());
  // function toggle() {
  //   console.log("Toggled");
  //   if (screensize < 500) {
  //     sidebar.style.transition = "all 0.5s linear";
  //     sidebar.style.transform = "translate(-200%, 0%)";
  //     state = "closed";

  //     var sidebar = document.getElementById("sidebar");
  //     // var state = "open";
  //     if (sidebar) {
  //       console.log(state);
  //       if (state === "open") {
  //         sidebar.style.transition = "all 0.5s linear";
  //         sidebar.style.transform = "translate(-200%, 0%)";
  //         state = "closed";
  //       } else {
  //         sidebar.style.transition = "all 0.5s linear";
  //         sidebar.style.transform = "translate(0%, 0px)";
  //         state = "open";
  //         // state = "open";
  //       }
  //     }
  //   } else {
  //     state = " open ";
  //   }
  // }
}
