import React, { useState } from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer'
import Trusted from '../Trusted'
import { CiPhone } from "react-icons/ci";
import "../Slider.scss"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Modal, Button } from "react-bootstrap";
import Navbar from '../Navbar';



function Home() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
         <Navbar />

      <HeroSection />
      <Cards />
      <Trusted />
      <Footer />
     
      <CiPhone  className="phonerelative" onClick={handleShow} /> 
    <TawkMessengerReact
                propertyId="58d1073366272e0ab0734c66"
                widgetId="default"/>

       <Modal show={showModal} onHide={handleClose} className="alert" >
        
        <Modal.Body>Company Contact: +2348033905561</Modal.Body>
          <Button className="btncolor" onClick={handleClose} >
            Close
          </Button>
        
      </Modal>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/08033905561"> <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" /></a>
    </>
  )
}

export default Home
