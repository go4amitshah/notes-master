import React from "react";
// import LayoutSingle from "../LayoutSingle";

export default function BoopIntro() {
  return (
    <div className="myBorderLeftSubtle " style={{ fontFamily: "Comfortaa" }}>
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
            {/* CONCEPTS */}
            <div className="row">
              <h3 className="myBorderLeft">Key Concepts of OOP:</h3>
              <p>
                <ol
                  className="d-flex"
                  style={{ gap: "3vh", flexDirection: "column" }}
                >
                  <li>
                    <h4>Object:</h4>
                    <ul className="text-muted">
                      <li>Objects can be efined as real time entites.</li>
                      <li>Example: person, cycle, student, etc.....</li>
                      <li>
                        An object is represented as its property (or attributes)
                        and operations performed on it.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Classes: </h4>
                    <ul className="text-muted">
                      <li>
                        A class in C++ is a user defined type or data structure
                        declared with keyword class that has data and functions
                        as its members.
                      </li>
                      <li>
                        A class definition starts with the keyword class
                        followed by the class name; and the class body, enclosed
                        by a pair of curly braces.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Abstraction: </h4>
                    <ul className="text-muted">
                      <li>
                        Abstraction means keeping necessary while hiding
                        unnecessary.
                      </li>
                      <li>
                        Data abstraction is define as providing only essential
                        information to the outside world and hiding heir
                        background details.
                      </li>
                      <li>For example,</li>
                      <li>
                        when a person is working as employee in an
                        organization,then in payroll system of organization,the
                        salary is essential property,while weight is not
                        essential.
                      </li>
                      <li>
                        On other side if a person is a member of sportsclub then
                        the weight is essential property,while salary is not
                        essential.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Encapsulation: </h4>
                    <ul className="text-muted">
                      <li>
                        {" "}
                        Putting data and functions together in a single unit is
                        known as encapsulation.
                      </li>
                      <li>
                        {" "}
                        It serves two purposes:
                        <ol>
                          <li>
                            It puts data near to the functions operating on it.{" "}
                          </li>
                          <li>
                            It separates the external aspects of the object from
                            internal implementation.
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Inheritance: </h4>
                    <ul className="text-muted">
                      <li>
                        Inheritance is a object by which one class gets the
                        properties of other class.
                      </li>
                      <li>
                        Class from which property are inherited is called base
                        class.
                      </li>
                      <li>
                        Class inheriting the property is called derived class.
                      </li>
                      <li>
                        Types of Inheritance:
                        <ol>
                          <li>Single Inheritance</li>
                          <li>Multilevel Inheritance</li>
                          <li>Multiple Inheritance</li>
                          <li>Hierarchical Inheritance</li>
                          <li>Hybrid Inheritance</li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4>Polymorphism: </h4>
                    <ul className="text-muted">
                      <li>
                        Polymorphism means different forms or ability to act
                        differently in different situations.
                      </li>
                      <li>
                        For example, + operator is used to add two integer
                        numbers
                      </li>
                      <li>
                        Some OOP languages are also used + operator to add two
                        strings.
                      </li>
                    </ul>
                  </li>
                </ol>
              </p>
            </div>
            <div className="row">
              <p>Thats all for this section...</p>
            </div>
            <div className="row mb-5">
              <h3 className="myBorderLeft">
                Learn About Data Types in next chapter!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
