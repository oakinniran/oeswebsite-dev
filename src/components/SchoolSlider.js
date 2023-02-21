import React, { useState, useEffect } from 'react'
import { sliderData } from "./data/slider-dataschool.js";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.scss"
import { CiPhone } from "react-icons/ci";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Modal, Button } from "react-bootstrap";

export default function SchoolSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //slideLenth = 1,2,3

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 9000;

    const nextSlide = () => {
        setCurrentSlide(slide => slide === slideLength - 1 ? 0 : slide + 1 )
        console.log(currentSlide)
    };

    const prevSlide = () => {
        setCurrentSlide(slide => slide === 0 ? slide - 1  : slide - 1 )
    };

    useEffect(() => {
        setCurrentSlide(0)
    },[]);

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
      if(autoScroll){
        auto();
       }
    return () => clearInterval(slideInterval)
    },[ currentSlide ]);

  return (
    <div className="slider">
        <AiOutlineArrowLeft className="arrow prev"  onClick={prevSlide} />
        <AiOutlineArrowRight className="arrow next" onClick=
        {nextSlide} />
             
             <CiPhone  className="phonerelative" onClick={handleShow} /> 
      <TawkMessengerReact
                propertyId="58d1073366272e0ab0734c66"
                widgetId="default"/>

       <Modal show={showModal} onHide={handleClose} className="alert" >
        
        <Modal.Body>Company Contact: +2348033905561</Modal.Body>
          <Button className="btn--primary" onClick={handleClose} >
            Close
          </Button>
        
      </Modal>          
        { sliderData.map((slide, index) => {
            return (
              <a href="https://applications.oes.com.ng/OESWebApp/createschoolout.do"><div className={index === currentSlide ? "slide current" : "slide" } key={index}>
                    {index === currentSlide && ( 
                        <>
                          <img src={slide.image} alt="slide"  />
                          <div className="content">
                            <h2>{slide.heading}</h2><hr />
                            <p>{slide.desc}</p>
                            <hr />
                            <button className="btn --btn-primary">Get Started</button>
                          </div>
                          </>
                    )}
                    </div></a>

            )
        })}
      
    </div>
  )
}
