// import logo from './logo.svg';
import './App.css';
import Imformation from './components/Imformation';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  const home = () =>{
    <div>
      <h1>Hello</h1>
    </div>
  }
  return (
    <div classNameName="App">
      {/* <Navbar/>
      <Imformation/> */}
      <Router>
        <Route paths="/" component={home}/>
      </Router>
    </div>
  );
}

export default App;
