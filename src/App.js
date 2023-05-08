// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Imformation from './components/Imformation';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
// import Switch from "react-router"
function App() {
  const Home = () =>{
      return(
        <h1>Hello</h1>
      )
    
  }
  return (
    <div classNameName="App">
      <div className="wrapper"></div>
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="blob3"></div>
      <Navbar/>
      {/* <Imformation/> */}
        {/* <Router> */}
          
        {/* </Router> */}
        
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return(
      
//           <Routes>
//             <Route path='/' component={<Home/>}/>
//             <Route path="./navbar" component={<Navbar/>}/>
//           </Routes>
      
//     )
//   }
// }
export default App;
