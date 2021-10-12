import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,Col} from 'reactstrap';
import './Grocery.css';
const Grocery = () => { 
   const items= [
        {
          "item": "Dal",
          "type": "veg"
        },
        {
          "item": "Fish",
          "type": "non-veg"
        },
        {
          "item": "Meat",
          "type": "non-veg"
        },
        {
          "item": "Rice",
          "type": "veg"
        },
        {
          "item": "onion",
          "type": "veg"
        },
        {
          "item": "chicken",
          "type": "non-veg"
        },
        {
          "item": "potato",
          "type": "veg"
        },
        {
          "item": "chicken-sandwitch",
          "type": "non-veg"
        },
      ]
      
    return (
        <div>
        <h1>MENU CARD</h1>
            <Row>
              <Col sm="6"><Row  className="rowhead" >VEG </Row>
              {
                items.map(item => item.type==="veg"?<Row className="rowcontainer">{item.item}</Row>:null)
                
              }
              
              </Col>
              <Col sm="6"> <Row className="rowhead">NON-VEG</Row>
              {
                items.map(item => item.type==="non-veg"?<Row className="rowcontainer" >{item.item}</Row>:null)
                
              }
              </Col>
            </Row>
            </div>

      
    )
}
export default Grocery;
