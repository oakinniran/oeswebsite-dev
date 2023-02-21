//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Nopage from './components/Nopage';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Feature from './components/pages/Feature';
import School from './components/pages/School';
import Parent from './components/pages/Parent';
import Teacher from './components/pages/Teacher';
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
