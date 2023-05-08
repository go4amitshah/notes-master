import React from "react";

export default function LayoutDouble(props) {
  return (
    <div style={{fontFamily:"Comfortaa"}}>
      <br />
      <div className="container">
        <div className="row">
          <div class="card text-center layoutOne">
            <div className="card-header">{props.header}</div>
            <div class="card-body">
              <h4 class="card-title display-3">{props.title}</h4>
              <p class="card-text">
                <br />
              {/* Physics Example */}

                <div className="row">
                  <div className="col-xxl">
                    <div class="card  text-center bg-transparent" style={{boxShadow:"rgba(255, 255, 255, 0.159) 0 0 5000px"}}>
                        <div className="card-header">{props.SUBheader}</div>
                        <div class="card-body">
                          <h4 class="card-title">{props.SUBtitle}</h4>
                          <p class="card-text">{props.SUBpera1}</p>
                          <p class="card-text">{props.SUBpera2}</p>
                        </div>
                      </div>
                    </div>
                  <div className="col-xxl">
                    <div className="card  text-center bg-transparent" style={{boxShadow:"rgba(255, 255, 255, 0.159) 0 0 5000px"}}>
                      <div className="card-header">Object Oriented Programming</div>
                      <div className="card-body">
                        <h4 className="title">Inheritence</h4>
                        <div className="card-body">
                          Inheritence means to create a derived class based on base class. Through inheritence we can create derived class which can access all the member functions of its parent class.
                          There are 3 types of inheritence:
                          <br />
                          <br />
                          <ul className="text-start">
                            <li>Single level Inheritence</li>
                            <li>Multi level Inheritence</li>
                            <li>Multiple Inheritence</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>





              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
