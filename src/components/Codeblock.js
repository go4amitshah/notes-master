import React from "react";

export default function Codeblock(props) {
  return (
    <div>
      <div className="container">
        <div className="card my-5" data-bs-theme="dark">
          <div className="card-header">{props.header}</div>
          <div className="card-body">
            <div className="card-text">
              <h4>
                <pre>{props.code}</pre>
              </h4>
            </div>
          </div>
          <div className="card-footer" style={{ whiteSpace: "pre-wrap" }}>
            {props.footer}
          </div>
        </div>
      </div>
    </div>
  );
}
