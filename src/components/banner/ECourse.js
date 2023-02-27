import React from "react";
import "./ECourse.css";
import { Card, Row, Col, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineArrowRight
} from "react-icons/ai";
import { FaSignal } from "react-icons/fa";


export default function ECourse(props) {
  return (
 <Card className="cartt shadow py-2 hover: text-green-900 ">
      <Card.Img variant="top" className="h-auto  transition-all duration-300  cursor-pointer filter grayscale hover:grayscale-0" src={props.picture ? "https://applications.oes.com.ng/OESWebApp/images/lecture/"+ props.picture : "https://applications.oes.com.ng/OESWebApp/assets/js/bg/pry.jpg"}
/>
      <div className="cardboarderthreesite">
        <div className="cartnutton">
          <button className="cartbuttonone">{props.course}</button>
          <button className="cartbuttosecond">{props.course1}</button>
        </div>
   
          <span className="course">₦{props.cost} </span>
        </div>

      <Card.Body>
          <Card.Title>
            <a className="adesign readmore" href="" >
              {props.title}
            </a>
          </Card.Title>
          <div className="authorareacartborder flex">
            <div className="innerauthorareacartborder">
              <img
              src={props.logo ? "https://applications.oes.com.ng/OESWebApp/images/lecture/"+ props.logo : "https://applications.oes.com.ng/OESWebApp/images/lecture/teacher.jpg"}
                
                alt="artincorsese" className="m" data-ll-status="loaded" />

              <a style={{ textDecoration: "green", paddingLeft: "5px" }} href="" >
                <span>Author: {props.author}</span>
              </a>
            </div>
          </div>
          <div className="cardbodylastdiv">
            <div className="cardbodylastdivinnerdiv">
              <span> {" "} <FaSignal color="#F14D5D" /> </span> <span className="formarginincarticon">Level: {props.Level}</span>
            </div>{" "}
            <div className="cardbodylastdivinnerdiv">
              <span> {" "}
                <AiOutlineClockCircle color="#F14D5D" />
              </span>
              <span className="formarginincarticon"> Duration: {props.duration} </span>
            </div>
          </div><br/>
          <a href={"https://applications.oes.com.ng/OESWebApp/enrolnow.do?acromyn="+ props.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-lg text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Enrol Now
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
        </Card.Body>
    </Card>
  );
}