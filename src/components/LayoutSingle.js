import React from 'react'
import '../App.css'
const cardCSS={
    backdropFilter: "blur(5px)"
}
export default function LayoutSingle(props) {
  return (
    <div>
        <div className="container layoutSingleCSS">
            <div className="row">
                <div className="col">
                    <div class="card text-center bg-transparent" style={cardCSS}>
                        <div className="card-header">{props.header}</div>
                      <div class="card-body">
                        <h4 class="card-title">{props.title}</h4>
                        <p class="card-text">{props.data}</p>
                      </div>
                      <div className="card-footer">{props.footer}</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
