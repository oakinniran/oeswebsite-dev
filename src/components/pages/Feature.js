import React, { useState } from 'react'
import Slider from '../Slider'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { CiPhone } from "react-icons/ci";
import Footer from '../Footer'
import SideCard from '../SideCard'
import { Modal, Button } from "react-bootstrap";
import Navbar from '../Navbar';



function Feature() {

  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar />

     <Slider />
     <SideCard />
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
    </div>
  )
}

export default Feature
