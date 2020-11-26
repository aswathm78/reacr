import React, { Component } from "react";

import Header from "../../components/header/header";
//import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
//import lib from "react-otp-input";
import { Container, Row, Col } from "reactstrap";
import "./referral.css";
//import { Tada } from "react-motions";
import { connect } from "react-redux";

//import Step1 from "../../components/utils/referralForm/step1/step1";
//import Step2 from "../../components/utils/referralForm/step2/step2";
//import Step3 from "../../components/utils/referralForm/step3/step3";
class Referral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stop: false,
      key: 1,
    };
    this.section1 = React.createRef();
  }

  componentDidMount() {
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }
    window.scrollTo(0, 0);
  }

  scrollToContent = () => {
    this.section1.current.scrollIntoView({ behavior: "smooth" });
  };

  stopAD = () => {
    console.log(this.state.stop);
    this.setState({ stop: true });
  };

  goToStep = async (args) => {
    await this.setState({ key: args });
  };

  render() {
    let title,
      description,
      submitButton,
      readButton,
      guidelines = [],
      guidelinesTitle,
      referrallabels;
    if (this.props.referralData) {
      this.props.referralData.map((i) => {
        if (this.props.language === "en") {
          if (i.id === 1) {
            guidelines = [];
            title = i.title;
            description = i.description;
            submitButton = i.descriptionbutton;
            readButton = i.guidelinesbutton;
            if (i.guidelines) {
              guidelinesTitle = i.guidelines.title;
              Object.values(i.guidelines.points).map((j, index) => {
                guidelines.push(
                  <Row key={index}>
                    <Col style={{ padding: "10px" }}>
                      <span className="guide">{j.point}</span>
                    </Col>
                  </Row>
                );
              });
            }
          }
        }
      });
    }

    if (this.props.referralFormLabelsData) {
      this.props.referralFormLabelsData.map((i) => {
        if (this.props.language === "en") {
          if (i.id === 1) {
            if (i.item) {
              i.item.items.map((j) => {
                referrallabels = j;
              });
            }
          }
        } else {
          if (i.item) {
            i.item.items.map((j) => {
              referrallabels = j;
            });
          }
        }
      });
    }

    return (
      <>
        <Header {...this.props} />
        <section style={{ top: '100px' }}>
          <Container fluid >
            <Row>
              <Col>sadads</Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)(Referral);
