import React, { Component } from "react";
import {
  Button,
  
  FormGroup,
  Label,
  Input,
  

  Container, Row, Col,
} from "reactstrap";
import "./step1.css";
class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="faqForm">        
        <Row style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col md="4">
            <FormGroup style={{marginBottom:'5px'}}>
              <Label for="exampleName" className="label">
                {this.props.referrallabels ? this.props.referrallabels.name : null} <span style={{ color: "red" }}>*</span>
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{marginBottom:'5px'}}>
              <Input
                type="name"
                name="name"
                id="exampleName" 
                dir ={this.props.selectedLanguage === 'english' ? null : "rtl" }               
              />
            </FormGroup>
          </Col>
        </Row>
        <Row style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col md="4">
            {" "}
            <FormGroup style={{marginBottom:'5px'}}>
            <Label for="exampleEmail" className="label">
            {this.props.referrallabels ? this.props.referrallabels.email : null} <span style={{ color: "red" }}>*</span>      
            </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{marginBottom:'5px'}}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"    
                dir ={this.props.selectedLanguage === 'english' ? null : "rtl" }            
              />
            </FormGroup>
          </Col>
        </Row>
        <Row style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col md="4">
            {" "}
            <FormGroup style={{marginBottom:'5px'}}>
            <Label for="exampleEmail" className="label">
            {this.props.referrallabels ? this.props.referrallabels.phone : null}  <span style={{ color: "red" }}>*</span>
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{marginBottom:'5px'}}>
            <Input
                type="text"
                name="phone"
                id="examplephone"
                dir ={this.props.selectedLanguage === 'english' ? null : "rtl" } 
              />
            </FormGroup>
          </Col>
        </Row>   
        <Row style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col md="4">
            {" "}
            <FormGroup style={{marginBottom:'5px'}}>         
            <Label for="exampleLoan" className="label">{this.props.referrallabels ? this.props.referrallabels.loan : null} </Label>       
            </FormGroup>
          </Col>
          <Col>
            <FormGroup style={{marginBottom:'5px'}}>
            <Input
                type="number"
                name="loan"
                id="exampleloan"   
                dir ={this.props.selectedLanguage === 'english' ? null : "rtl" }        
              />
            </FormGroup>
          </Col>
        </Row>  
     
        <Row style={ this.props.selectedLanguage !== "english" ? {display:'flex',textAlign:'right',flexDirection:'row-reverse'}:{display:'flex',textAlign:'left',flexDirection:'initial'}}>
          <Col>
            <FormGroup dir ={this.props.selectedLanguage === 'english' ? null : "rtl" } style={this.props.selectedLanguage === 'english' ? { marginLeft: "20px", marginRight: "20px" ,marginBottom:'5px'} : null}>
              <Input
                type="checkbox"
                name="loan"
                id="exampleloan"              
                style={{marginTop:'7px'}}
                
              />
              <Label for="exampleLoan" className="label" style={this.props.style !== "english" ? { marginRight:'20px'}:null}>{this.props.referrallabels ? this.props.referrallabels.tc : null} </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row  style={ this.props.selectedLanguage !== "english" ? {display:'flex',flexDirection:'row-reverse'}:{display:'flex',textAlign:'end'}}>       
        
          <Col>
            <Button type="button" onClick={() => this.props.OnGotoStep(2)} style={{padding:'2px',fontSize:'14px'}}>
            {this.props.referrallabels ? this.props.referrallabels.submit : null} 
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Step2;
