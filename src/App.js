import  ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import { Routes, Route, Link, Router} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './Hamza/Navs';

import Home from './Hamza/Home';
import Visa from './Hamza/Visa';
import Travel from './Hamza/Travel';
import Hot from './Hamza/Hot';
import Contact from './Hamza/Contact';
import Foter from './Hamza/Foter';


import Click from "./Hamza/Click";


import Turk from "./Hamza/cards/Turk";


function App() {
  return (
    <BrowserRouter>



  <Navs />

    <Routes>

      <Route exact element={<Home />} path="/" />
      <Route exact element={<Visa />} path="/Visa" />
      <Route exact element={<Hot /> } path="/Hot" />
      <Route exact element={<Travel /> } path="/Travel" />
      <Route exact element={<Contact />} path="/Contact" />
     
     {/* this is home page cards data navigation */}
     
     
      <Route exact element={<Click />} path="/Click" />
      <Route exact element={<Click />} path="/Click" />
      <Route exact element={<Turk />} path="/Turk" />
     
     {/* this is home page cards data navigation */}

     {/* <Route exact element={<Turk />} path="/Turk" /> */}

    </Routes>



    <Foter/>
    
  </BrowserRouter>

  );
}

export default App;
