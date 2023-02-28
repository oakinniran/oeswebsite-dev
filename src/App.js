//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Nopage from './components/Nopage';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from './components/pages/Home';
import Howto from './components/pages/Howto';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Feature from './components/pages/Feature';
import School from './components/pages/School';
import Parent from './components/pages/Parent';
import Teacher from './components/pages/Teacher';
import Er from './components/pages/Er';
import Ert from './components/pages/Ert';
import Eru from './components/pages/Eru';
import Erb from './components/pages/Erb';
import './index.css'



function App() {
  return (
  <>  
    <Router>
     <Routes>
     <Route exact  path='/'  element={<Home />} /> 
     <Route  path='/about'  element={<About />} /> 
     <Route  path='/feature'  element={<Feature />} /> 
     <Route  path='/contact'  element={<Contact />} /> 
     <Route  path='/nopage'  element={<Nopage />} /> 
     <Route  path='/er'  element={<Er />} /> 
     <Route  path='/erb'  element={<Erb />} /> 
     <Route  path='/eru'  element={<Eru />} /> 
     <Route  path='/ert'  element={<Ert />} /> 
     <Route  path='/howtovideo'  element={<Howto />} /> 
     <Route path='/connectasaschool' element={<School />} />
     <Route path='/connectasastudent' element={<Parent />} />
     <Route path='/connectasaTeacher' element={<Teacher />} />
     <Route path="/sign-up" render={() => window.location = "https://applications.oes.com.ng/OESWebApp/"}/>
     </Routes> 
     </Router>
  </>
  );
}

export default App;
