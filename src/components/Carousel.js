import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//import image1 from './assets/carouselImage1.jpg'
import "./Carousel.css"

function Carousel() {
  return (
    <div style={{margin:"30px"}}>
      <h1>Basic Carousel</h1>
      <Slider>
          <div>
          </div>
      </Slider>
    </div>
  )
}

export default Carousel
