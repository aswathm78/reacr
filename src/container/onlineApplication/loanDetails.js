import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button,select} from 'reactstrap';
import '../../assets/css/online-app-css/onlineApplication.css'
class loanDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props
        return (
            <div>
               <Container className="App">
            <Form>
             <legend>Loan Details</legend>

           <div className="row">
           <Col>
            <FormGroup>
            <Label>App id*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Req Amount*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Sub product*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   
            </div>
            
            <div className="row">
           <Col>
            <FormGroup>
            <Label>Currency*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Scheme id*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Tenure*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   
            </div>

            <div className="row">
           <Col>
            <FormGroup>
            <Label>Product id*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Down payment*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Balloon payment*</Label>
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

export default loanDetails;