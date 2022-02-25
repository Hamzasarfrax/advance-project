import React from 'react'
import visa from '../Style/visa.css';
import First from '../images/First.jpg'
import container from 'bootstrap';
import { Button } from 'react-bootstrap';
const Visa = () => {
  return (
  <>
  
  visa page
  <div className='row'>


  </div>
  
<h2>Opacity with Box</h2>
<p>Hover over the image to see the effect.</p>

<div className="containerg">
<div className='row'>
  <div className='col-xl-8'>
<img src={First} alt="Avatar" className='imgvisa'  />

  <div className="middle">
   
    <div ><Button  className="text">learn more</Button></div>
    <div className='card-tittle'>united kingdom</div>
  </div>
  </div>
  </div>
</div>
  </>
  )
}

export default Visa;