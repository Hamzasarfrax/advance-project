import React from 'react'

import First from '../images/First.jpg';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import cardimg from '../Style/cardimg.css';

import home from '../Style/home.css';

const Home = () => {
  return (
    
    
    <div>
        

        <div class="container">
  <div class="row">
    <div class="col-sm py-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={First}  className="img"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-sm py-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={First} className="img" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-sm py-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={First} className="img"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  </div>
</div>

<div className='contentsof-home'>
<div class="container">
  <div class="row">
    <div class="col-md-6 d-block">
    <h1>  welcome
       </h1>
       <img  src={First} className="img w-25 py-2"/>
     <p className='w-50 py-3'>  Welcome to Travel Wave Pvt. Ltd. We're dedicated to providing you the very best of Travel services,

with an emphasis on best visa assistance, Competitive prices , Quality Work..</p><br/>
<br/>
<p className='w-50'>  Founded in 2019, Travel Wave Pvt. Ltd. has come a long way from its beginnings in Ahmad Garden Lahore. When we first started out, with our passion for visa consultancy services drove us to start our own business.<br/><br/>

We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. </p>

Sincerely,<br/>
TRAVEL WAVE PVT. LTD.<br/>
UAN 03 111 123 002.
    </div>
    <div class="col-md-6 py-5">
  <h3> CLIENTS’ QUOTES</h3> 
  <img src={First} className="img w-25 py-3"/>
<p className='w-50'> Found this company an excellent. Staff is very cooperative and committed. What they commit they provide the same services. 100% recommended for all your international travels and tourisms with lowest and hassle free services.</p> 
  
  <div className='client-name'>Muhammad faisal</div>
  
  <button className='btn my-3'>learn more</button>
  
    </div>
  </div>
  </div>
  sfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasfsfasfasf
  sfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasfsfasfasf
  sfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasfsfasfasfsfasfasfsfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasf
  sfasfasfsfasfasf
  </div>




    </div>
  )
}

export default Home;