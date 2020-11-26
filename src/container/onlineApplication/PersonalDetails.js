import React, { Component } from 'react';
import {Container, Col, Form,FormGroup, Label, Input} from 'reactstrap';
import Axios from 'axios'
import Swal from 'sweetalert2'
 import '../../assets/css/online-app-css/onlineApplication.css';
import Countrylist from './countryList'
import config from '../../assets/config/config';

class PersonalDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             middlename:'',
             lastname:'',
             mobilenumber:'',
             email:'',
             dateofbirth:'',
             gender:'',
             nationality:'',
             placeofstay:''

        }
    }
    handlechange=(e)=>
    {
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    
      
    onsubmitdata=(e)=>
    {
        e.preventDefault() 
        
            const personalObj={
                Firstname:this.state.firstname,
                Middlename:this.state.middlename,
                Lastname:this.state.lastname,
                Mobilenumber:this.state.mobilenumber,
                Email:this.state.email,
                Dateofbirth:this.state.dateofbirth,
                Gender:this.state.gender,
                Nationality:this.state.nationality,
                Placeofstay:this.state.placeofstay,
            }
            
            Axios.post(config.STRAPI_URL + '/personaldetails',personalObj)
            .then((res)=>{
                //console.log(res,'somthing')
                Swal.fire('success', 'Successfully registered!', 'success')
                this.setState({
                    firstname:'',
             middlename:'',
             lastname:'',
             mobilenumber:'',
             email:'',
             dateofbirth:'',
             gender:'',
             nationality:'',
             placeofstay:''
                })
            }).catch((error)=>{
                console.log(error)
            })
          
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    
    render() {
        const {firstname,middlename,lastname,mobilenumber,email,dateofbirth, gender,nationality,placeofstay}=this.state
        return (
            <div>
                <Container className="app">
                <legend>Personal Details</legend>
                    <Form>
                    {/* <div className="row">

           
                <Col>
                <FormGroup>
                <Label>App id*</Label>
                <Input type="text" name="firstname" value={firstname} onChange={this.handlechange} required/>

                </FormGroup>
                </Col>

                <Col>
                <FormGroup>
                <Label>Module flag</Label>
                <Input type="text" name="middlename" value={middlename} onChange={this.handlechange}/>
                </FormGroup>
                </Col>

                <Col>
                <FormGroup>
                <Label>Company id*</Label>
                <Input type="text" name="lastname"  value={lastname} onChange={this.handlechange}/>
                </FormGroup>
                </Col>
                    
                <Col>
            <FormGroup>
            <Label>userId*</Label>
            <Input type="text" name="firstname" value={firstname} onChange={this.handlechange} required/>
           </FormGroup>
            </Col>

                </div>

             
 */}

            <div className="row">
            <Col>
            <FormGroup>
            <Label>First name*</Label>
            <Input type="text" name="firstname" value={firstname} onChange={this.handlechange} required/>
        
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Middle name</Label>
            <Input type="text" name="middlename" value={middlename} onChange={this.handlechange}/>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Last name*</Label>
            <Input type="text" name="lastname"  value={lastname} onChange={this.handlechange}/>
            </FormGroup>
            </Col>
                
           
         
           </div>

           <div className="row">

           <Col>
            <FormGroup>
            <Label>Mobile number*</Label>
            <Input type="text" value={mobilenumber} name="mobilenumber"  onChange={this.handlechange}/>
            </FormGroup>
            </Col>

            
            <Col>
            <FormGroup>
            <Label>Email*</Label>
            <Input type="email" value={email} name="email" onChange={this.handlechange}/>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Date of birth*</Label>
            <Input type="date" value={dateofbirth} name="dateofbirth" onChange={this.handlechange}/>
            </FormGroup>
            </Col> 

            </div>
          

        
            <div className="row">
            <Col>
            <FormGroup>
            <Label>Gender*</Label>
            <Input type="select" value={placeofstay} name="placeofstay" onChange={this.handlechange}>
            <option value="">-- select one --</option>
             <option>Male</option>
             <option>Female</option>
             <option>Other</option>
            </Input>
            </FormGroup>
            </Col> 
             
            <Col>
            <FormGroup>
            <Label>Nationality*</Label>
            <Input type="select" value={nationality} name="nationality" onChange={this.handlechange}>
             <option value="">-- select one --</option>
           
            </Input>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Place Of stay*</Label>
            <Input type="text" value={placeofstay} name="placeofstay" onChange={this.handlechange}/>
            </FormGroup>
            </Col> 
           </div>
           
           <legend>Address</legend>
           

            <div className="row">
            {/* <Col>
            <FormGroup>
            <Label>App id*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> */}


            <Col>
            <FormGroup>
            <Label>Address1*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Address2*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 

            </div>

            
            <div className="row">

            <Col>
            <FormGroup>
            <Label>Address3</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>


            <Col>
            <FormGroup>
            <Label>City*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>State*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 

            </div>


            <div className="row">

            <Col>
            <FormGroup>
            <Label>Country</Label>
            <Input type="select">
            <option>-- select one --</option>
            <option><Countrylist/></option>  
            </Input>
            </FormGroup>
            </Col>


            <Col>
            <FormGroup>
            <Label>Zipcode*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            <Label>Livingsince*</Label>
            <Input type="text"/>
            </FormGroup>
            </Col> 

            </div>



        

                    {/* <button className="btn btn-primary" onClick={this.onsubmitdata}>Submit</button> */}
                    <button  class="next" onClick={this.saveAndContinue}>Next {" "} </button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default PersonalDetails;