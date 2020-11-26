import React, { Component, useRef } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormCheck,
  Container, Row, Col,
} from "reactstrap";
import "./step2.css";
class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: false,
      otp: null,
    };
  }

  render() {
    return (
      <Container className="faqForm">
        <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col style={{ padding: "10px" }}>
            <span>
              {" "}
              {this.props.referrallabels
                ? this.props.referrallabels.otpmessage
                : null}{" "}
            </span>
          </Col>
        </Row>
        <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col md="2">
            {" "}
            <FormGroup style={{ marginBottom: "5px" }}>
              <Label for="exampleEmail" className="label">
                {this.props.referrallabels
                  ? this.props.referrallabels.mobile
                  : null}{" "}
                <span style={{ color: "red" }}>*</span>
              </Label>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup style={{ marginBottom: "5px" }}>
              <Input type="text" name="phone" id="examplephone" dir ={this.props.selectedLanguage === 'english' ? null : "rtl" }/>
            </FormGroup>
          </Col>
          {this.state.verify ? (
            <div>
              <Col>
                <FormGroup style={{ marginBottom: "5px" }}>
                  <Input type="text" name="otp" id="exampleotp" size="4" dir ={this.props.selectedLanguage === 'english' ? null : "rtl" }/>
                </FormGroup>
              </Col>
            </div>
          ) : null}
          <Col md="4">
            {this.state.verify ? (
              <Button
                type="button"
                onClick={() => {
                  this.props.OnGotoStep(3);
                }}
                style={{ padding: "2px", fontSize: "14px" }}
              >
                {this.props.referrallabels
                  ? this.props.referrallabels.go
                  : null}
              </Button>
            ) : null}
            <Button
              type="button"
              onClick={() => {
                this.setState({ verify: true });
              }}
              style={{ padding: "2px", fontSize: "14px" }}
            >
              {!this.state.verify
                ? this.props.referrallabels
                  ? this.props.referrallabels.verify
                  : null
                : this.props.referrallabels
                ? this.props.referrallabels.resend
                : null}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Step1;
