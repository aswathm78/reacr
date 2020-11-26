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
import "./step3.css";
class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    let finalMessage;
    if(this.props.referrallabels){
    console.log(this.props.referrallabels.finalmessage)
    }

    return (
      <Container className="faqForm">
        <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col  style={{padding:'10px'}}>
    <span>{this.props.referrallabels ? this.props.referrallabels.finalmessage.msg1 :null}</span>
          </Col>
        </Row>
        <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col style={{padding:'10px'}}>
           <span>{this.props.referrallabels ? this.props.referrallabels.finalmessage.msg2 :null} </span>
          </Col>       
        </Row>       
       <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
       <Col style={{padding:'10px'}}>
           <span style={{color:'#6c6e6f'}}>{this.props.referrallabels ? this.props.referrallabels.finalmessage.msg3 :null} </span><a href={this.props.referrallabels ? this.props.referrallabels.finalmessage.msg4.href :null}>{this.props.referrallabels ? this.props.referrallabels.finalmessage.msg4.label :null}</a> 
          </Col> 
       </Row>
      </Container>
    );
  }
}
export default Step3;
