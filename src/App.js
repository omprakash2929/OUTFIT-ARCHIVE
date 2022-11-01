import './App.css';
import Navbar from './compentes/Navbar';

import {
  BrowserRouter as Router,
Routes,
  Route,
 
} from "react-router-dom";
import Allcollection from './compentes/Allcollection';
import Home from './compentes/Home';
import Special from './compentes/Special';


function App() {
  return (
    <>
      <Router>
      <Navbar  />
      
      <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/allcollection" element={<Allcollection  />} />
      <Route exact path="/special" element={  <Special />} />
      

      </Routes>
     
      </Router>
    
    </>
  );
}

export default App;
