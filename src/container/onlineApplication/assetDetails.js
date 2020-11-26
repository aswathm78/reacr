import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button,select} from 'reactstrap';
import '../../assets/css/online-app-css/onlineApplication.css'
class assetDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    saveAndContinue = (e) => {
      e.preventDefault();
      this.props.nextStep();
  }

  back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }
    
    render() {
        return (
            <div>
            <Container className="App">
               
            <Form>
             <legend>Asset Details</legend>

           <div className="row">
           <Col>
            <FormGroup>
            <Label>Asset category*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Asset model*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Asset make*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>
            </div>

            
           <div className="row">
           <Col>
            <FormGroup>
            <Label>Asset model year*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Asset price*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Asset condition*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>
            </div>

            <div className="row">
           <Col>
            <FormGroup>
            <Label>Dealer name*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Balloon payment*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Down payment*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>
            </div>
            <div className="row">
                <Col>
                </Col>
            <Col>
            <button className="next" onClick={this.back}>Back</button>
            </Col>

            <Col>
            <button className="next" onClick={this.saveAndContinue}>Submit </button>
            </Col>
            </div>

            </Form>
            </Container>
            </div>
        );
    }
}

export default assetDetails;