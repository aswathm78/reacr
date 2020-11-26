import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button,select} from 'reactstrap';
import '../../assets/css/online-app-css/onlineApplication.css'
class LoanDependent extends Component {
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
             <legend>loan Dependant</legend>

           <div className="row">
           <Col>
            <FormGroup>
            <Label>App id*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>
         
         <Col>
            <FormGroup>
            <Label>Loan purpose*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>   

         <Col>
            <FormGroup>
            <Label>Asset location*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>   
            
        
      </div>


      <div className="row">
      <Col>
            <FormGroup>
            <Label>Asset details*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>  


           <Col>
            <FormGroup>
            <Label>Asset cost*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>
         
         <Col>
            <FormGroup>
            <Label>Type Of Residence*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>   

     
         
         </div>


         <div className="row">

         <Col>
            <FormGroup>
            <Label>Vehicle model*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>   
            
         <Col>
            <FormGroup>
            <Label>Vehicle make*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>  

         <Col>
            <FormGroup>
            <Label>Ex showroom price*</Label>
            <Input type="text"/>
            </FormGroup>
         </Col>  

            </div>

            <div className="row">

            <Col>
               <FormGroup>
               <Label>Product list*</Label>
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
               <Label>Property type*</Label>
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

export default LoanDependent;