import React from 'react'

import First from '../images/First.jpg';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import cardimg from '../Style/cardimg.css';


import { BiMessageRoundedDots, BiMinus } from "react-icons/bi";
import home from '../Style/home.css';
import { TiMessages} from "react-icons/ti";
const Home = () => {
  return (


    <>


      <div class="container">
        <div class="row">
          <div class="col-sm py-2">
            <Card style={{ }} className="card">
              <Card.Img variant="top" src={First} className="img" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
                <Button variant="primary" className="batn">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm py-2">
            <Card style={{  }} className="card">
              <Card.Img variant="top" src={First} className="img" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
                <Button variant="primary" className="batn">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm py-2">
            <Card style={{  }} className="card">
              <Card.Img variant="top" src={First} className="img" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
                <Button variant="primary" className="batn">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* this is for welcom and client info */}

      <div className='contentsof-home'>
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-block py-5">
              <h1>  welcome
              </h1>
              <img src={First} className="img w-25 " />
              <p className='w-50 py-3 font-awsome'>  Welcome to Travel Wave Pvt. Ltd. We're dedicated to providing you the very best of Travel services,

                with an emphasis on best visa assistance, Competitive prices , Quality Work..</p><br />
            
              <p className='w-50 font-awsome '>  Founded in 2019, Travel Wave Pvt. Ltd. has come a long way from its beginnings in Ahmad Garden Lahore. When we first started out, with our passion for visa consultancy services drove us to start our own business.<br /><br />

                We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. </p>
<span className='font text-warning'>
              Sincerely,<br />
              TRAVEL WAVE PVT. LTD.<br />
              UAN 03 111 123 002.
              </span>








              
            </div>
            <div class="col-md-6 py-5">
              <h3> CLIENTS’ QUOTES</h3>
              <img src={First} className="img w-25 py-3" />
              <p className='w-50 font-awsome'> Found this company an excellent. Staff is very cooperative and committed. What they commit they provide the same services. 100% recommended for all your international travels and tourisms with lowest and hassle free services.</p>

              <div className='client-name'>Muhammad faisal</div>

              <button className='btn my-3 batn'>learn more</button>

            </div>
          </div>
        </div>

      </div>

      {/* this is for box of home */}
      <div className="container py-5 my-5  box-data">
        <div className="row">
          <div className="col-md ">
            <h3>Latest's News</h3>

            <p className='py-3 heading-home'> srilanka</p>
            <div className='box1 my-5 '>
<br/>  < TiMessages className=' icons'/>

<br/>   
<img src={require("../images/horizontal.png")} className="horizontal-line"/>
<p className='mx-3 mb'>1 NOV</p>
          </div>
          
          
          <p className=' col-md w-50 paragraph box-first '> One of three columns
          Tourist Visa for srilanka is open now,explore srilanka with travel wave. </p>  
          
          
          
          </div>
          <div className="col-md">
            <h3></h3>
            <p className='py-5 heading-home'> srilanka</p>
            <div className='box1  '> 
          
            <br/>   < TiMessages className=' icons'/>
            <img src={require("../images/horizontal.png")} className="horizontal-line2"/>
            <p className='mx-3 margin'>1 NOV</p>
            </div>
           <p className=' w-50 paragraph'> One of three columns
           AirSial Provides Personal care pouch to the pessanger. </p>
         
           

          </div>
          
          
          <div className="col-md">
            <h3></h3>
           
           
            <p className='py-5 heading-home'> srilanka</p>
            
            
            <div className='box1 '>
            <br/>   < TiMessages className=' icons'/>
            
        
            <img src={require("../images/horizontal.png")} className="horizontal-line3"/>
            <p className='mx-3 margin'>1 NOV</p>
            </div>
            <p className='  w-50 paragraph'> One of three columns
            Tens of thousands of travellers are expected to arrive in Thailand today as the country reopens to tourists after 18 months of Covid restrictions. </p>
         
         
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home;