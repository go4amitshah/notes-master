import React from "react";

export default function BoopDT() {
  return (
    <div>
      <div className="myBorderLeftSubtle " style={{ fontFamily: "Comfortaa" }}>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="aligner mx-3">
              <br />
              <div className="row">
                <h2 className="myBorderLeft">What are C++ DataTypes?</h2>
              </div>
              <hr />
              <br />
              <div className="row display-6 text-muted">
                "Data types represent what kind of data can be entered in a
                perticular veriable , array , function , etc.... and what value
                it stores."
              </div>
              <br />

              {/* APPLICATIONS */}
              <div className="row ">
                <h3 className="myBorderLeft">Types of Data Types:</h3>
                <p className="text-muted">
                  <ol>
                    <li>Primitive data types</li>
                    <li>Derived data types</li>
                    <li>User Defined data types</li>
                  </ol>
                </p>
              </div>
              <div className="row">
                <h3 className="myBorderLeft">Primitive Data Types:</h3>
                <p className="text-muted">
                  These data types are built-in or predefined data types and can
                  be used directly by the user to declare variables. example:
                  int, char, float, bool, etc. Primitive data types available in
                  C++ are:
                  <ul>
                    <li>int</li>
                    <li>char</li>
                    <li>float</li>
                    <li>double</li>
                    <li>bool</li>
                    <li>void</li>
                  </ul>
                </p>
              </div>
              <div className="row">
                <h3 className="myBorderLeft"> Derived Data Types: </h3>
                <p className="text-muted">
                  Derrived data type are derived from the primitive or built-in
                  datatypes are referred to as Derived Data Types. These can be
                  of four types namely:
                  <ul>
                    <li>Function</li>
                    <li>Array</li>
                    <li>Pointer</li>
                    <li>Reference</li>
                  </ul>
                </p>
              </div>
              <div className="row">
                <h3 className="myBorderLeft">User Defined Data Types:</h3>
                <p className="text-muted">
                  User Defined Data Types are defined by the user itself. Like,
                  defining a class in C++ or a structure. C++ provides the
                  following user-defined datatypes:
                  <ul>
                    <li>Class</li>
                    <li>Structure</li>
                    <li>Union</li>
                    <li>Enum</li>
                    <li>Typedef</li>
                  </ul>
                </p>
              </div>
              <div className="row">
                <h3 className="myBorderLeft">Operators:</h3>
                <p className="text-muted">
                  This lists of operators in C++ are:
                  <ol>
                    <li>Logical Operator</li>
                    <li>Arithmatic Operator</li>
                    <li>Relational Operator</li>
                    <li>Assignment Operator</li>
                    <li>Increament/Decreament Operator</li>
                    <li>Special Operator</li>
                    <li>Bitwise Operator</li>
                    <li>Conditional Operator</li>
                  </ol>
                </p>
              </div>
              {/* CONCEPTS */}

              <div className="row">
                <p>Thats all for this section...</p>
              </div>
              <div className="row mb-5">
                <h3 className="myBorderLeft">
                  Learn About basic concepts of C++ including printing and
                  scaning in next section!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
