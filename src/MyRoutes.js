import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Navbar from "./components/Navbar"
import Maths from './components/Maths';
import BDE from './components/BDE';
import Physics from './components/Physics';
import Boop from './components/Boop';
import Swd from './components/Swd';
import Ic from './components/Ic';
import LayoutDouble from './components/LayoutDouble';
import LayoutSingle from './components/LayoutSingle';
import Imformation from './components/Imformation';
// import Home from './Home'
const temp = () => {
    return(
        <h1>Fuckin Works</h1>
    )
}
export default function MyRoutes() {
  return (
    <div>
        {/* <Routes>
            <Route path="/home" element={<temp/>}/>
            <Route path="/about" element={<LayoutSingle 
            header="About US" 
            data="This website was made by Parv Shah and Devansh Jani of VPMP Poly. in order to provide quality notes and also learn react! This website is currently in development and has been made with help of CSS, JS, HTML, Bootstrap and React. All the routing you see on the website has been completely made non-refreshable, mentaining the speed of the page." 
            footer="Enjoy the site!" 
            title="Two brillient Minds!"

            />}/>
             <Route path="*" element={<LayoutDouble 
              header="Getting Started!"
              title="The following are the demonstrations of various notes!"
              SUBheader="Physics"
              SUBtitle="Interfearence of Light:"
              SUBpera1="Constructive Interfearence: When 2 waves are incident on a point such that the crest of one wave is incident on crest of other wave and trough of one wave is incident on trough of other wave, the amplitude of the resultant wave increases and thus the intensity of wave also increases...."
              SUBpera2="Destructive Interfearence: When 2 waves are incident on a point such that the crest of one wave is incident on trough of other wave and trough of one wave is incident on crest of other wave, the amplitude of the resultant wave decreases and thus the intensity of wave also decreases...."
             />}/>
             <Route path="/maths" element={<Home/>}/>
             <Route path="/bde" element={<BDE/>}/>
             <Route path="/swd" element={<Swd/>}/>
             <Route path="/physics" element={<Physics/>}/>
             <Route path="/ic" element={<Ic/>}/>
             <Route path="/boop" element={<Boop/>}/>
            </Routes> */}
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
             <Route path="*" element={<Boop/>}/>
             
             <Route path="/bde" element={<BDE/>}/>
             <Route path="/swd" element={<Swd/>}/>
             <Route path="/physics" element={<Physics/>}/>
             <Route path="/ic" element={<Ic/>}/>
             <Route path="/boop" element={<Boop/>}/>
             {/* <Route path="/boop/test1" element={<Imformation/>}/> */}
             {/* <Route path="/boop/1" element={<Navbar/>}/> */}

             {/* <Route path="/boop/test2" element={<Temp2/>}/> */}
            </Routes>
    </div>
  )
}
