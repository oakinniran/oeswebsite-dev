import React, { useState, useEffect } from 'react'
import ErBanner from '../banner/ErBanner'
import ErCards from '../banner/ErCards'
import ERNavbar from '../ERNavbar';
import ECourse from '../banner/ECourse';
import Footer from '../Footer'
import Trusted from '../Trusted'
import { CiPhone } from "react-icons/ci";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";



function Er() {
  const [showCourse, setshowCourse] = useState([])

    let erdata;

    async function getServerLecturesProps(){
        const api_urls = 'https://applications.oes.com.ng/OESWebApp/getallersschoollecture.do';

        //const response = await fetch(api_urls);
        //const data = await response.json();
        Axios.get(api_urls).then((res) =>{
          console.log(res.data);
          erdata = res.data.map(function(course){
            return(
                <ECourse src={course.subjectvideo} course={course.subject} title={course.subjectTitle} author={course.teacher} duration="1 Week" Level={course.classLevel} description="test" hashtag={course.teacher} cost={course.cost}  link={course.courseGroupTab}   logo={course.logo} /> 
            )
        })
          setshowCourse(erdata)
        })
    
       // setshowCourse(erdata)
      }

  
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() =>{
    getServerLecturesProps()
  }, [])


    return (
        <div>
         <ERNavbar />
            <ErBanner />
            <ErCards />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-24 py-10">
                     {showCourse}
          </div>
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
        </div>
    )
}

export default Er



