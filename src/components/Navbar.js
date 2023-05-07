import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import '../MyRoutes.js'
// import LayoutSingle from './LayoutSingle';
// import Navbar from "./components/Navbar"
import Maths from './Maths';
import BDE from './BDE';
import Physics from './Physics';
import Boop from './Boop';
import Swd from './Swd';
import Ic from './Ic';
import LayoutDouble from './LayoutDouble';
import LayoutSingle from './LayoutSingle';
import Imformation from './Imformation';
import MyRoutes from '../MyRoutes.js';
const Testing = () => {
    return (
        <h1>Works</h1>
    )
}
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
export default function Navbar() {
    
    return (  
    <div>
        
      <div className="container">
        <div className="navbar navbar-expand-lg">
            <div className="navbar-brand"  style={{fontFamily:"Sigmar",color:"white"}}>   <h3> 
                
            <Link to="/" style={{color:"white", textDecoration:"none"}}>
            notesMasters!
            </Link>  </h3></div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#show" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id='show' className="collapse navbar-collapse">
                <ul className="navbar-nav text-decoration-none">
                    <li className="navbar-item mx-1">
                        <h4><Link id="navbarStyling" to="/about" className="navbar-link">About Us</Link></h4>
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
      
      <Routes>
            <Route path="/" element={<><Imformation/>
            <LayoutDouble 
              header="Getting Started!"
              title="The following are the demonstrations of various notes!"
              SUBheader="Physics"
              SUBtitle="Interfearence of Light:"
              SUBpera1="Constructive Interfearence: When 2 waves are incident on a point such that the crest of one wave is incident on crest of other wave and trough of one wave is incident on trough of other wave, the amplitude of the resultant wave increases and thus the intensity of wave also increases...."
              SUBpera2="Destructive Interfearence: When 2 waves are incident on a point such that the crest of one wave is incident on trough of other wave and trough of one wave is incident on crest of other wave, the amplitude of the resultant wave decreases and thus the intensity of wave also decreases...."
             />
            </>}/>
            {/* <Route path="/" element={}/> */}

            <Route path="/about" element={<LayoutSingle 
            header="About US" 
            data="This website was made by Parv Shah and Devansh Jani of VPMP Poly. in order to provide quality notes and also learn react! This website is currently in development and has been made with help of CSS, JS, HTML, Bootstrap and React. All the routing you see on the website has been completely made non-refreshable, mentaining the speed of the page." 
            footer="Enjoy the site!" 
            title="Two brillient Minds!"

            />}/>
             <Route path="*" element={<MyRoutes/>}  />
            </Routes>
            
    </div>
  )
}
