import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button,select} from 'reactstrap';
import '../../assets/css/online-app-css/onlineApplication.css'
class incomeLiability extends Component {
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
             <legend>IncomeLiability</legend>

           <div className="row">
           <Col>
            <FormGroup>
            <Label>App id*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Gross Monthly Income*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Net income*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>


         </div>

         <div className="row">
           <Col>
            <FormGroup>
            <Label>Annual bonus*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Avg monthly incentive*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Current EMI*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>


         </div>

       

         <div className="row">
           <Col>
            <FormGroup>
            <Label>Prev year profit*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Currency*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>

         <Col>
            <FormGroup>
            <Label>Anyliabilities*</Label>
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
            <button className="next" onClick={this.saveAndContinue}>Next</button>
            </Col>
            </div>

         </Form>
         </Container>
            </div>
        );
    }
}

export default incomeLiability;