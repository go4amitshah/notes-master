import React from 'react'
import '../App.css'
export default function Imformation() {
  return (
    <div>
      
        <div id='imformationContainer' className="container" style={{fontFamily:"Comfortaa"}}>
          <div className="row">
            <i class="fi-xnsux5-code-solid text-center" style={{color:"white"}}></i>
          </div>
          <div className="row text-center">
            <h1 className='display-2' style={{fontFamily:"Sigmar",color:"white"}}>notesMaster
            
            </h1>
            
          </div>
            <div className="row">
              <hr style={{width:"85vw"}}/>

            </div>
          
          <div className="row">
          

            <div className="col-md my-5">
              <div class="card text-start  myCardSpecifier utilDarkBackdrop" style={{backgroundColor:"rgba(16, 1, 29, 0.600)"}}>
                  <div class="card-body text-white">
                    <h4 class="card-title display-5">"Hard work beats talent when talent doesn't work hard..."</h4>
                    <p class="card-text"><h4> Welcome to our page, notesMaster. We work hard backend to provide you with the best notes from the best universities in the world!</h4>
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-md my-5">
              <div class="myCardSpecifier card text-end utilDarkBackdrop" style={{backgroundColor:"rgba(28, 1, 51, 0.100)"}}>
                    <div class="card-body">
                    <h4 class="card-title">Subjects we provide notes for..</h4>
                    <p class="card-text">
                      <div className="container d-flex" style={{justifyContent:'center',alignItems:'end',flexDirection:"column",gap:"2vh"}}>
                        <div className="row">
                          <div className="col">
                            <button className="btnHoverClass btn btn-light">Maths</button>
                          </div>
                          <div className="col">
                            <button className="btnHoverClass btn btn-dark">IC</button>
                          </div>
                          <div className="col">
                            <button className="btnHoverClass btn btn-primary">BDE</button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <button className="btnHoverClass btn btn-danger">BOOP</button>
                          </div>
                          <div className="col">
                            <button className="btnHoverClass btn btn-warning">SWD</button>
                          </div>
                          <div className="col">
                            <button className="btnHoverClass btn btn-secondary">Physics</button>
                          </div>
                        </div>
                      </div>
                    </p>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}
