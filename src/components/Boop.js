import React from 'react'
import LayoutSingle from './LayoutSingle'
import '../App.css'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Imformation from './Imformation';
import Navbar from './Navbar';
import BoopClass from './BOOP/BoopClass';
import BoopIntro from './BOOP/BoopIntro';
const Temp1 = () => {
  return(
    <h1 style={{color:"white"}}>TEST Works</h1>
  )
}
const Temp2 = () => {
  return(
    <h1>AGAIN Works</h1>
  )
}
export default function Boop() {
  return (
    <div className='text-white'>
      
      <div className="container">
        <div className="row">
   
          
          
          {/*----------------- SIDE BAR -------------------*/}




          <div className="sidebar col-2">

              <div className="row">
                <Link className='sidebarLinks' to="/boop/1">Intoduction</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Data Types</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Input/Output</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Functions</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Class</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Access</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Overloadings</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Inheritance</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Constructors</Link>
              </div>
              <div className="row">
                <Link className='sidebarLinks' to="">Destructors</Link>
              </div>

          </div>


          {/* --------------CONTENT------------- */}



          <div className="col-10">
            <Routes>
              <Route path="/boop/1" element={<BoopIntro/>}/>

            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
