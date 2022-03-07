import {React, useState} from 'react'
import travel from '../Style/travel.css';





import {Form, Button} from 'react-bootstrap'

;


const Travel = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>


     
      <div className='container'>

        <div className='row'>

          <div className='col-md'>

            <h4>TRAVEL INSURANCE</h4>

<img src={require("../images/Turk.jpg")}  className="travel-img w-25 py-5" />
<p className=' w-50'> Hassle free traveling is always a fun but risks associated with traveling may render the journey full of worries. With an 
appropriate travel insurance plan, you have an assurance about your health, luggage or other
 belongings.  </p>










          </div>




          {/* ================this is sec colum ===============*/}



          <div className='col-md form'>

            <h4>BOOKING FORM</h4>
           



            <Form>

            <Form.Label className='py-2'>Travel policy *</Form.Label>
            <Form.Select aria-label="Default select example" className='form-travel' required>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>


<Form.Label className='py-2'>No of day's</Form.Label>
            <Form.Select aria-label="Default select example"  className='form-travel'  required>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='py-2'>Date from </Form.Label>
    <Form.Control type="date" placeholder="Enter email" onChange={onChange}   className='form-travel' required />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Date to</Form.Label>
    <Form.Control type="date" data-date-inline-picker="true" placeholder="Password" onChange={onChange}   className='form-travel' required   />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date of birth</Form.Label>
    <Form.Control type="date" placeholder="Password"  className='form-travel'    />
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label  className="py-1">Name of insured</Form.Label>
    <Form.Control type="text" placeholder="INSURED"   className='form-travel'  required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" required>
    <Form.Label  className="">Contact no</Form.Label>
    <Form.Control type="number" placeholder="03xx-xxxxxxx"  className='form-travel' required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" required>
    <Form.Label  className="">Passport</Form.Label>
    <Form.Control type="passport" placeholder="AB12345" className='form-travel'  required/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" required>
    <Form.Label  className="">comments</Form.Label>
    <Form.Control as="textarea" placeholder="Leave a comment here" className='message-box' required />
  </Form.Group>


  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  
  
  
  
  <Button variant="primary" type="submit" className='batn'>
    Submit
  </Button>


</Form>



















          </div>







        </div>
      </div>


    </>
  )
}

export default Travel;