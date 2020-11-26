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
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
import "./offers.css";
class Offers extends Component {
	constructor(props) {
		super(props);
		this.state = {
		 
		};
	  }
  render() {
	
    return (
      <>
                <Col md="3" style={{ padding: "10px" }}>
                <Card className="offerItems">
                  <CardBody className="offerItemContent">
                  <img src={Jio} height="250px"  width="100%"/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" style={{ padding: "10px" }}>
                <Card className="offerItems">
                  <CardBody className="offerItemContent">
                  <img src={MMT} height="250px"  width="100%"/>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" style={{ padding: "10px" }}>
                <Card className="offerItems">
                  <CardBody className="offerItemContent">
                    <CardImg src={Snapdeal} height="50" width="100%" />
                    <CardText style={{ padding: "10px" }}>
                      <p>Get upto 10 % off on any Electronic goods</p>
                    </CardText>
                    <a
                      href=""
                      class="btn btn-bordered-dark"
                      data-text="Get Deal"
                    >
                      Get Deal
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" style={{ padding: "10px" }}></Col>
              <Col md="3" style={{ padding: "10px" }}>
                    <Card className="offerItems">
                      <CardBody className="offerItemContent">
                        <CardImg src={Flipkart} height="50" width="100%" />
                        <CardText style={{ padding: "10px" }}>
                          <p>Get upto 10 % off on any Electronic goods</p>
                        </CardText>
                        <a
                          href=""
                          class="btn btn-bordered-dark"
                          data-text="Get Deal"
                        >
                          Get Deal
                        </a>
                      </CardBody>
                    </Card>
                  </Col>
                  
                  <Col md="3" style={{ padding: "10px" }}>
                    <Card className="offerItems">
                      <CardBody className="offerItemContent">
                        <CardImg src={Freecharge} height="50" width="100%" />
                        <CardText style={{ padding: "10px" }}>
                          <p>Get upto 10 % off on any Electronic goods</p>
                        </CardText>
                        <a
                          href=""
                          class="btn btn-bordered-dark"
                          data-text="Get Deal"
                        >
                          Get Deal
                        </a>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3" style={{ padding: "10px" }}>
                    <Card className="offerItems">
                      <CardBody className="offerItemContent">
                        <CardImg src={Amazon} height="50" width="100%" />
                        <CardText style={{ padding: "10px" }}>
                          <p>Get upto 10 % off on any Electronic goods</p>
                        </CardText>
                        <a
                          href=""
                          class="btn btn-bordered-dark"
                          data-text="Get Deal"
                        >
                          Get Deal
                        </a>
                      </CardBody>
                    </Card>
                  </Col>
              </>
    );
  }
}




export default connect(null, null)(Offers);
