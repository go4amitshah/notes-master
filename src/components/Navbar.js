import React from 'react'
import '../App.css'
export default function Navbar() {
    
    return (  
    <div>
        
      <div className="container">
        <div className="navbar navbar-expand-lg">
            <div className="navbar-brand"  style={{fontFamily:"Sigmar",color:"white"}}>   <h3> notesMasters! </h3></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#show" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id='show' className="collapse navbar-collapse">
                <ul className="navbar-nav text-decoration-none">
                    <li className="navbar-item mx-1">
                        <h4><a id="navbarStyling" href="#About" className="navbar-link">Home</a></h4>
                    </li>
                    <li className="navbar-item mx-1">
                        <h4>
                            <a id="navbarStyling" href="#Prcing" className="navbar-link">Pricing</a>
                        </h4>
                    </li>
                    {/* <li id='navbarStyling' className="navbar-item"></li> */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
