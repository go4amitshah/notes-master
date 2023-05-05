import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Navbar from "./Navbar"
import Maths from './Maths';
import BDE from './BDE';
import Physics from './Physics';
import Boop from './Boop';
import Swd from './Swd';
import Ic from './Ic';
import LayoutSingle from './LayoutSingle';
const Home = () =>{
  return(
    <h1>Hello</h1>
  )

}
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
              <div class="card text-start  myCardSpecifier utilDarkBackdrop">
                  <div class="card-body text-white">
                    <h4 class="card-title display-5">"Hard work beats talent when talent doesn't work hard..."</h4>
                    <p class="card-text"><h4> Welcome to our page, notesMaster. We work hard backend to provide you with the best notes from the best universities in the world!</h4>
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-md my-5">
              <div class="myCardSpecifier card text-end utilDarkBackdrop">
                    <div class="card-body">
                    <h4 class="card-title">Subjects we provide notes for..</h4>
                    <p class="card-text">
                      <div className="container d-flex" style={{justifyContent:'center',alignItems:'end',flexDirection:"column",gap:"2vh"}}>
                        <div className="row d-flex" style={{flexDirection:"row",gap:"18px"}}>
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link  className="buttonImfo" to="/maths">Maths</Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link style={{color:"white"}} className="buttonImfo" to="/ic">IC</Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link  className="buttonImfo" to="/bde">BDE</Link>
                            </div>
                          </div>
                        
                        
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link className="buttonImfo" to="/boop">BOOP</Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link  className="buttonImfo" to="/swd">SWD</Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="btnHoverClass">
                              <Link  className="buttonImfo" to="physics">Physics</Link>
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

    
        <Routes>
             <Route path="/" element={<LayoutSingle/>}/>
             <Route path="/maths" element={<Maths/>}/>
             <Route path="/bde" element={<BDE/>}/>
             <Route path="/swd" element={<Swd/>}/>
             <Route path="/physics" element={<Physics/>}/>
             <Route path="/ic" element={<Ic/>}/>
             <Route path="/boop" element={<Boop/>}/>
            </Routes>
        
    </div>
  )
}
