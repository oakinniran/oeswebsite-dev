import React, { useState } from 'react'
import './banner.css'
//import { contactpage } from "../data/contact-data.js";
import Navbar from '../Navbar';

import Footer from '../Footer'
import { CiPhone } from "react-icons/ci";
import Registration from "../Registration"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Modal, Button } from "react-bootstrap";
//import '../../assets/main.css'


function Contact() {

    //const banner = contactpage.image;

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
     <Navbar />

        <div className="contact" >
         <div className="hposition">CONTACT US</div>
         <div className="hcountry">Nigeria (NG)</div>
         <div className="hduration">24/7</div>
         <div className="hmessage">Hremsoft Customer Support is available free of charge. You only incur charges on your call. Kindly use email.</div>
        </div>
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
         <div className="contact-pic">
             <img src="/../images/location-r.png" alt="contact" />
         </div>
         <div className="antialiased bg-grey-100">
         <div  className="flex w-full min-h-screen justify-center items-center">

             <div><Registration /></div>

         </div>
         </div>
         <Footer />

        </> 

    )
}

export default Contact
