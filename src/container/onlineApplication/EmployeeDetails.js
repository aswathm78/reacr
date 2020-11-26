import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input,Button,select} from 'reactstrap';
import '../../assets/css/online-app-css/onlineApplication.css'
class EmployeeDetials extends Component {
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
                 
           {/*-------------------------- Employment details------------------------- */}
           <legend>Employment details:</legend>
           <div className="row">
           <Col>
            <FormGroup>
            <Label>Id type*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Id number*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

           <Col>
            <FormGroup>
            <Label>Product code*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Type of employment*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

         
            </div>

            <div className="row">
           
            <Col>
            <FormGroup>
            <Label>Company name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Cgcompany Name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

            <Col>
            <FormGroup>
            <Label>Joining date*</Label>
            <Input type="date"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Total experience*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>    
            </div>

           
            
         
           
           <div className="row">
           <Col>
            <FormGroup>
            <Label>RegAnyStatuotaryAuthority*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 

              <Col>
            <FormGroup>
            <Label>Registration date*</Label>
            <Input type="date"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Registration number*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Nature of business*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>    

            

          </div>

          <div className="row">
        

            <Col>
            <FormGroup>
            <Label>No of years in profession*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Iscoapplicant*</Label>
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
            <Label>Bvn*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
          </div>



        
          <div className="row">
       

            <Col>
            <FormGroup>
            <Label>Casa account no*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Martial status*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>No of children*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>National address*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
  
          </div>


          <div className="row">
         

            <Col>
            <FormGroup>
            <Label>Designation*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Retiredage*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Related employer*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Salcreditanb*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
  
          </div>

       

          <div className="row">
          <Col>
            <FormGroup>
            <Label>Direct manager name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Direct manager email*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Direct manager telNo*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
          
            <Col>
            <FormGroup>
            <Label>Direct manager extnNo*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
          </div>


          <div className="row">
          

            <Col>
            <FormGroup>
            <Label>Registr expiry Date*</Label>
            <Input type="date"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Street name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Country*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Province*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
          </div>

        

          <div className="row">
          <Col>
            <FormGroup>
            <Label>City*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

          <Col>
            <FormGroup>
            <Label>Zip Code*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>PoBox*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Percent Of shareholding*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  
  
          </div>
        
          <div className="row">
          <Col>
            <FormGroup>
            <Label>Retsalcreditanb*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Iscustomer*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Account no*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Name of employer*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 
  
          </div>

         
        
          <div className="row">
           

            <Col>
            <FormGroup>
            <Label>Family name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Id issue place*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 

              <Col>
            <FormGroup>
            <Label>Id issue date*</Label>
            <Input type="date"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Expiry date*</Label>
            <Input type="date"/>
            </FormGroup>
            </Col>   
  
          </div>

         

          <div className="row">
            
          <Col>
            <FormGroup>
            <Label>First name arabic*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   

          <Col>
            <FormGroup>
            <Label>Second name arabic*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Third name arabic*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
            <FormGroup>
            <Label>Family arabic name*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            {/* <Col>
            <FormGroup>
            <Label>Occupancy status*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>   */}
  
  
          </div> 
          
          <div className="row">
          <Col>
            <FormGroup>
            <Label>Occupancy status*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>  

            <Col>
           
            </Col>  

            <Col>
            
            </Col>  

            <Col>
           
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
           

         {/* <button className="btn btn-primary submitbtn">Submit</button> */}

        </Form>
        </Container>
            </div>
        );
    }
}

export default EmployeeDetials;