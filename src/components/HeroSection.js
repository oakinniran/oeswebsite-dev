import React from 'react'
import '../App.css';
import './HeroSection.css'
import { Button } from './Button';

function HeroSection() {
  let url="https://applications.oes.com.ng/OESWebApp/register.do";
  let url1="https://applications.oes.com.ng/OESWebApp/createschoolout.do";
  let url2="https://applications.oes.com.ng/OESWebApp/erregister.do";

  return (
    <>
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted className="myv"/>
       <h1>Welcome to Online Education System</h1>
       <p>Earn For Life - Teachers!</p>

       

       <div className="hero-btns">
       <Button 
          url={url}
         className='btns' 
         buttonStyle='btn--outline'
         buttonSize='btn--large'>
           Register a Student - Tutorial or Lectures
         </Button>
       <Button 
          url={url1}
         className='btns' 
         buttonStyle='btn--outline'
         buttonSize='btn--large'>
           Register a School -  School Management System
         </Button>
         <Button 
         url={url2}
         className='btns' 
         buttonStyle='btn--primary'
         buttonSize='btn--large'>
           Register a Teacher - ER Teacher
         </Button>
       </div>

    </div>
   
    </>
  )
}

export default HeroSection
