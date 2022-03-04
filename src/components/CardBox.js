import React from "react";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import  './CardBox.css';
import card1 from './images/1.webp'
import card2 from './images/2.webp'
import card3 from './images/3.webp'
import card4 from './images/4.webp'


function CardBox(){

    return(
        <div className="card-box">
          <p>We have offices in the four global financial capitals. Do you want to join us?</p>
         <h1>Global Presence</h1>
          <div className="card-group">
            
  <CardGroup border="success">
  <Card  >
    <Card.Img variant="top" src={card1} />
    </Card>
  <Card>
    <Card.Img variant="top" src={card2} />
  </Card>
  <Card>
    <Card.Img variant="top" src={card3} />
    </Card>

  <Card>
    <Card.Img variant="top" src={card4} />
    </Card>
</CardGroup>
</div>
</div>
    );
}

export default CardBox;