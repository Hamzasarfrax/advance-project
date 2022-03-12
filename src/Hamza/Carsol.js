import React from 'react'
import {Carousel, Button } from 'react-bootstrap';
import First from '../images/First.jpg';
import Second from '../images/Second.jpg';
import Third from '../images/Third.jpg';
import carsol from '../Style/carsol.css';
const Carsol = () => {
  return (
<>
    


{/* 
<div className='container'>
      <div className='row'>
        <div className='col-md'>
          <img src={require("../images/logo.png")} className="w-25 h-25" />
          </div>
        </div>
      </div>
 */}





    <Carousel  className='carsol'>
   
    <Carousel.Item>

      <img
        className="d-block w-100"
        src={First}
        alt="First slide"
      />

      <Carousel.Caption>
      <div className='container'>
      <div className='row'>
        <div className='col-sm'>
< Button  href="#"  className='btn  boton'>learn more</Button>
          </div>
        </div>
      </div>
       
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../images/Second.jpg")}
        alt="Second slide"
      />
  
      <Carousel.Caption>
      <div className='container'>
      <div className='row'>
        <div className='col-sm'>
 < Button  href="#"  className='btn  boton'>learn more</Button>
          </div>
        </div>
      </div>
         
      </Carousel.Caption>
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../images/Third.jpg")}
        alt="Third slide"
      />
 
      <Carousel.Caption>
      <div className='container'>
      <div className='row'>
        <div className='col-sm'>
< Button  href="#"  className='btn  boton'>learn more</Button>
          </div>
        </div>
      </div>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



  </>
  )
}

export default Carsol;