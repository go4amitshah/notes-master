import React from "react";
import Codeblock from "../Codeblock";

export default function BoopInOut() {
  const pretext = () => {
    return (
      <>
        <h1>Test?</h1>
      </>
    );
  };
  return (
    <div>
      <div className="myBorderLeftSubtle " style={{ fontFamily: "Comfortaa" }}>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="aligner mx-3">
              <br />
              <div className="row">
                <h2 className="myBorderLeft">C++ Input/Output statements!</h2>
              </div>
              <hr />
              <br />
              <div className="row display-6 text-muted">
                C++ uses cout &lt; &lt; for printing , and cin &gt; &gt; for
                scaning!
              </div>
              <br />

              {/* APPLICATIONS */}
              <div className="row ">
                <h3 className="myBorderLeft">Pre setup: </h3>
                <p className="text-muted">
                  You need to take care of following things while making a C++
                  program with input and output...
                  <ol>
                    <li>
                      Header file: #include &lt; iostream.h &gt; must be
                      included as it contains cin and cout.
                    </li>
                    <li>
                      Header file: "using namespace std" must be included as it
                      contains cin and cout for compilers not supporting
                      iostream.h, write it with iostream, such as VSCode.
                    </li>
                  </ol>
                  <Codeblock
                    header="hello.cpp"
                    code={`
#include<iostream>
using namespace std;
void main() {
    cout<<"Hello world!"<<endl;
}`}
                    footer="This prints hello world!"
                  />
                </p>
              </div>
              <div className="row">
                <h3 className="myBorderLeft">ENDL</h3>
                <p className="text-muted">
                  ENDL is basically used to get a newline. Anytime we want to
                  add multiple things like strings, newlines, veriables, etc...
                  we use incertion operators , that is {`<<`}
                  <Codeblock
                    header="multiPrint.cpp"
                    code={`
#include<iostream>
using namespace std;
void main() {
    int a=10;
    cout<<"Hello world! Value of a is: "<<a<<endl;
}`}
                    footer="This prints hello world! and the value of a, which is 10."
                  />
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
