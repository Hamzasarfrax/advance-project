import React,{useState} from 'react'






import Form from 'react-bootstrap/Form'
import contact from '../Style/contact.css';

import First from '../images/First.jpg';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Alert } from 'bootstrap';

const Contact = () => {
  const [state, setstate] = useState()


function handledata(){

alert("hamza")

}


function handler(e){
// console.warn(value.target.value)


console.warn(e.target.value)
}
  return (
   <>
   
   <div className='container'>
<div className='row'>

<div className='col-md'>
  {/* ========================this is contach left side dat=============== */}


<h3 className=''>CONTACT INFO </h3>
<p className='w-75 font'>TemplateMonster provides 24/7 support for all its <span className='rang '> premium products.</span> Freebies go without it.</p>
<p className='w-75 font'>If you have any questions regarding the customization of the chosen free theme, ask <span className='rang'>TemplateTuning </span>to help you on a paid basis.</p>


{/* 
<figure className='py-5'>
							<img src={require("../images/Turk.jpg")}/>
						</figure> */}
            	<figure className="map w-25">
								<iframe src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed" className='map'></iframe>
							</figure>
<p className='w-50 font'>
The Company Name Inc.
8901 Marmora Road,
Glasgow, D04 89GR.</p><br/>

<p  className=' font'> Freephone :  <span>+1 800 559 6580</span> </p>

<p  className=' font'>Telephone :  <span>+1 800 559 6580</span> </p>

<p  className=' font'> FAX :  <span>+1 800 559 6580</span> </p>

<p  className=' font'> E-mail:  <a href="#" className='contact-link'>travelwave@gmail.com</a> </p>









</div>

<div className='col-md'>
<Form className='form-group-sm'>
  <h3>CONTACT FORM</h3>
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="NAME" placeholder="Enter Name" className='label-contact' onChange={handler} required/>
    <Form.Text className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Text>
  </Form.Group>

  
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>phone</Form.Label>
    <Form.Control type="number" placeholder="Enter phone"  className='label-contact' required onChange={handler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
 
  <Form.Group className="mb-3 " controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Email"  className='label-contact' required onChange={handler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <textarea type="textarea" placeholder="write your message" className='mesaage-contact px-2  w-100 label-contact'  required onChange={handler} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handledata} className="butn">
    Submit
  </Button>
</Form>
</div>

</div>


   </div>
   
   
   
   
   
   
   
   </>




  )
}

export default Contact;