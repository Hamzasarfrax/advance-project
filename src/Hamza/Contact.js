import React from 'react'









import First from '../images/First.jpg';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Contact = () => {
  return (
    // <div>Contact</div>


    <div class="container">
  <div class="row">
    <div class="col-sm py-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={First} className="imgvisa" />
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
  <Card.Img variant="top" src={First} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    <div class="col-sm py-2">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={First} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  </div>
</div>


  )
}

export default Contact;