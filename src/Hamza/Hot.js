import React from 'react'
import hot from '../Style/hot.css'



import First from '../images/First.jpg';



import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Hot = () => {
  return (
    

    <div className='row '>
<div className='col-4 col-lg-4 col-md-4 col-sm-12'>
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
<div className='col-4 col-lg-4 col-md-4 col-sm-12'>
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
<div className='col-4 col-lg-4 col-md-4 col-sm-12'>
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
  )
}

export default Hot;