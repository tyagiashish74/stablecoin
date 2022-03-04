import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import banner1 from './images/banner1.webp';
import banner2 from './images/banner2.webp';
import banner3 from './images/banner3.png';
import banner4 from './images/banner4.webp';
import banner5 from './images/banner5.webp';

function Slide(){
    return(
        <div>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner5}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
       
    );
}
       
 export default Slide;