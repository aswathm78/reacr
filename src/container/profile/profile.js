import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Animate from "animate.css-react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Image from "../../assets/images/loyalty-program/customer-loyalty-1.png";
import UserImage from "../../assets/images/loyalty-program/user.png";
import Redeem from "../../components/redeem/redeem";
import { AnimationWrapper } from "react-hover-animation";
import Cat1 from "../../assets/images/loyalty-program/category/img-1.jpg";
import Cat2 from "../../assets/images/loyalty-program/category/img-2.jpg";
import Cat3 from "../../assets/images/loyalty-program/category/img-3.jpg";
import Cat4 from "../../assets/images/loyalty-program/category/img-4.jpg";
import Offers from "../../components/offers/offers";
import "./loyaltyProgram.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {
  FaMoneyBillWave,
  FaUserAlt,
  FaGift,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWallet,
} from "react-icons/fa";
import Slider from "react-slick";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOffers: true,
      showComponent:null
    };
  }

  displayComponent = () =>{
    this.setState({showComponent:null})
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
    };

    return (
      <div>
        <Header
          {...this.props}
          onChangeLanguage={(args) => this.props.onChangeLanguage(args)}
        />
        <section className="loyaltyContainer">
          <Container fluid>
            <Row>
              <Col>
                <Slider {...settings}>
                  <div>
                    <img src={Cat1} />
                  </div>
                  <div>
                    <img src={Cat2} />
                  </div>
                  <div>
                    <img src={Cat3} />
                  </div>
                  <div>
                    <img src={Cat4} />
                  </div>
                </Slider>
              </Col>
            </Row>
            <Row style={{paddingTop:'1in',paddingBottom:'1in'}}>
              <Col md="3" style={{ padding: "10px" }}>
                <Card className="loyaltyItems">
                  <CardBody>
                    <CardImg
                      top
                      className="userImage"
                      src={UserImage}
                      alt="Card image cap"
                      style={{ objectFit: "cover" }}
                    />
                    <CardText>
                      {" "}
                      <span>
                        {" "}
                        <FaWallet /> My Balance
                      </span>
                    </CardText>
                    <CardTitle>
                      <h3>500 Points</h3>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
                { this.state.showComponent === null ?
                <>
                <Col md="3" style={{ padding: "10px" }}>
                <Card className="loyaltyItems">
                  <CardBody className="loyaltyItemContent">
                    <CardText>
                      <FaMoneyBillWave size="50" color="#004c90" />
                    </CardText>
                    <CardTitle>
                      <h3>5+ Points</h3>
                    </CardTitle>
                    <CardSubtitle>
                      <span style={{ fontSize: "18px" }}>
                        Every $ you spend
                      </span>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" style={{ padding: "10px" }}>
                <Card className="loyaltyItems">
                  <CardBody className="loyaltyItemContent">
                    <CardText>
                      <FaUserAlt size="50" color="#004c90" />
                    </CardText>
                    <CardTitle>
                      <h3>250 Points</h3>
                    </CardTitle>
                    <CardSubtitle>
                      <span style={{ fontSize: "18px" }}>
                        Create an Account
                      </span>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" style={{ padding: "10px" }}>
                <Card className="loyaltyItems">
                  <CardBody className="loyaltyItemContent">
                    <CardText>
                      <FaGift size="50" color="#004c90" />
                    </CardText>
                    <CardTitle>
                      <h3>500 Points</h3>
                    </CardTitle>
                    <CardSubtitle>
                      <span style={{ fontSize: "18px" }}>On your Birthday</span>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
              </>
                : this.state.showComponent === "offer" ?
               <Offers />
               :
                <Redeem onDisplayComponent = {this.displayComponent}/>
                }
              
            </Row>         
        {this.state.showComponent === null || this.state.showComponent === 'offer' ? (
            <Row>
              <Col md="3" style={{ padding: "10px" }}></Col>
              <Col md="3" style={{ padding: "20px", textAlign: "center" }}>
                <button data-text="Reedeem Points" class="btn btn-primary"
                 onClick={() => {
                  this.setState({ showComponent: "redeem" });
                }}
                >
                  Reedeem Points
                </button>
              </Col>
              <Col md="3" style={{ padding: "20px", textAlign: "center" }}>
                <button
                  data-text="Offers / Rewards"
                  class="btn btn-primary"
                  onClick={() => {
                    this.setState({ showComponent: "offer" });
                  }}
                >
                  Offers / Rewards
                </button>
              </Col>
              <Col md="3" style={{ padding: "10px" }}></Col>
            </Row>
         ) : null}
          </Container>
        </section>
        <Footer {...this.props} />
      </div>
    );
  }
}

export default Profile;
