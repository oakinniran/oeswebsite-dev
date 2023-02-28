import React, { useState } from 'react'
import Navbar from '../Navbar';
import Carousel from '../Carousel';
import Footer from '../Footer';
import Video from '../Video';
import Trusted from '../Trusted';
import { CiPhone } from "react-icons/ci";
import "../Slider.scss";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Modal, Button } from "react-bootstrap";


function Howto() {

    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
          <>  
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 px-32 py-10">

                <Video />
                </div>
                <Trusted />
                <Footer />
                
                <CiPhone className="phonerelative" onClick={handleShow} />
                <TawkMessengerReact
                    propertyId="58d1073366272e0ab0734c66"
                    widgetId="default" />

                <Modal show={showModal} onHide={handleClose} className="alert" >

                    <Modal.Body>Company Contact: +2348033905561</Modal.Body>
                    <Button className="btncolor" onClick={handleClose} >
                        Close
                    </Button>

                </Modal>
       </>
            )
}

            export default Howto
