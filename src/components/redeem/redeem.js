import React, { Component } from "react";
import { connect } from "react-redux";
import Flipkart from "../../assets/images/loyalty-program/coupons/filpkart.png";
import Freecharge from "../../assets/images/loyalty-program/coupons/freecharge.png";
import Snapdeal from "../../assets/images/loyalty-program/coupons/snapdeal.png";
import Amazon from "../../assets/images/loyalty-program/coupons/amazon.png";
import MMT from "../../assets/images/loyalty-program/coupons/mmt.jpg";
import Jio from "../../assets/images/loyalty-program/coupons/jio.jpg";
import {
    Col,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
  } from "reactstrap";
import "./redeem.css";
class Offers extends Component {
	constructor(props) {
		super(props);
		this.state = {
		 
		};
	  }
  render() {
	
    return (
      <>

            <Row className="redeemContainer">
              <Col md="4" style={{textAlign:'center'}} >
            
                  <input type="text" placeholder="Your Name" />               
                  <input type="text" placeholder="Enter Points to redeem" />

                  <button data-text="Cancel" class="btn btn-primary" onClick={()=>{this.props.onDisplayComponent()}}>
                   Cancel
                  </button>
                </Col>
                <Col md="4" style={{textAlign:'center'}} >
            
                  <input type="text" placeholder="Your Account" />
               
                  <input type="text" placeholder="Amount to be credited in SAR" disabled/>

                  <button data-text="Proceed" class="btn btn-primary">
                    Proceed
                  </button>
             
                </Col>

                  
            </Row>
       
         
   
      </>
    );
  }
}




export default connect(null, null)(Offers);
