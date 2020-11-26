import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './admin.css';


import Axios from 'axios';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import STC from '../../assets/images/stc-logo.png';
export default class Adminform extends Component {
  constructor(props) {
    super(props);

    // this.state = { vendor: "JARIR" };
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      
      firstName: '',
     lastName: '',
     email: '',
    Password:'',
    id: '',
    vendor:"",
    agentRole:'',
     address: '',
     city: '',
     stateStr:'',
     storeLocation:'',
     zipcode : '',
     drivinglicansenum: '',
     status: '',
     results:''
    
    };
  }
  

  componentDidMount () {

   const  headerConfig={
    headers:{
     Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
  } };
        
       
       

   Axios.get('http://122.166.172.240:3031/api/stores?storeName.contains=desk',headerConfig)
   .then(res => {
     console.log(res);
    
   })
    }
 

  onChange (e) {
    this.setState({[e.target.name]:e.target.value});
    
  }

  // handle_Change(e) {
  //   this.setState({ vendor: e.target.value });
  // }
 
  onClickHandler = (e) => {
    e.preventDefault();
    alert("new agent added");
    const data= {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      idd: this.state.idd,
      vendor:this.state.vendor,
      agentRole:this.state.agentRole,
      zipcode: this.state.zipcode,
      storeLocation: this.state.storeLocation,
      city: this.state.city,
      status:this.state.status,
      stateStr: this.state.stateStr,
      drivinglicansenum: this.state.drivinglicansenum,
      personalIdentificationNumber: this.state.personalIdentificationNumber,
     address: this.state.address,
     password:this.state.password,
     input: {},
     errors: {},
     
    };
  
    const  headerConfig={
      headers:{
       Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
    } };
  
  

   Axios.post('http://122.166.172.240:3031/api/iord-agents',data,headerConfig)
   .then(res => {
    
   })
  
   
  



 
  
  
  
  }
  agentTable = (e) => {
    this.props.history.push('/agentonboarding/addagenttable');
  };

  validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


  validate() {
    let input = this.state.results;

    let errors = {};

    let isValid = true;

    if (!input['email']) {
      isValid = false;

      errors['email'] = 'Please enter your email Address.';
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(input['email'])) {
        isValid = false;

        errors['email'] = 'Please enter valid email address.';
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }


  
  handleChange = event => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  };


 

  render() {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px',
      },
     
    };
    const vendor = window.sessionStorage.getItem('vendor');

    return (
      <Container fluid>
      <div style={{ background: 'white', height: '99vh' }}>
        <div className="row">
          <div className="col-sm-12" style={{ width: '95vw',marginRight:'0%'}}>
            <div className="card" style={{ borderRadius: '10px', width: '95vw', marginLeft: '2px', marginTop: '20px' }}>
             
               
              <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
                <div className={vendor} width="150" height="50"></div>
             
               
                <br />
               
              </div>
            </div>
            <br />
           

            <div className="col-sm-3">
            <div className="col-sm-12 verficationcardstyle">
              <div className="card" style={{ borderRadius: '10px' }}>
                <div className="card-body" style={{ height: '60vh', borderRadius: '10px' }}>
                
                <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
                
              </div>
                  <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
                    Agents 
                  </div>
                  <button  onClick={e => this.agentTable(e)} className="agent-savebtn"  style={{ textAlign: 'right', marginTop: '6rem'}} >
                  View Agents
                     </button>
                    
                 
                  <div
                    style={{
                      textAlign: 'right',
                      fontSize: '1.4rem',
                      fontWeight: '100px',
                      paddingRight: '40px',
                    }}
                  >
                    
                  </div>

                  <div className="signup-btn-style">
                    <div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



            <div className="col-sm-6" >
             
            <div className="col-sm-3" style={{ width: '97vw' }}>
              
            
            <div className="Firstpage">
             

              <div className="col-sm-12">
              <div className="col-sm-3" style={{margin:'1%'}}>
              <div className="agent-lablestyle">
                <div className="agent-lablestyle">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={e => this.onChange(e)}
                    onsubmit={e => this.validateForm(e)}
                     required
                    />
                 
                </div>
              </div>
            </div>

                <div className="col-sm-3" style={{margin:'1%'}}>
                  <div className="agent-lablestyle">
                    <div className="agent-lablestyle">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={e => this.onChange(e)}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="col-sm-3" style={{margin:'1%'}}>
                <div className="agent-lablestyle">
                  <div className="agent-lablestyle">
                    <label> Id</label>
                    <input
                      type="text"
                      name="id"
                      onChange={e => this.onChange(e)}
                      required
                    />
                    
                  </div>
                </div>
              </div>
                
              </div>
              
              <div className="col-sm-12" style={{ marginTop: '10px' }}>
                <div className="col-sm-3"></div>

                
                <div className="col-sm-12">
             


                <div className="col-sm-3" style={{margin:'1%'}}>
                <div className="agent-lablestyle">
                  <div className="agent-lablestyle">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={e => this.onChange(e)}
                    />
                    
                  </div>
                </div>
              </div>
               

                <div className="col-sm-3" style={{margin:'1%'}}>
                  <div className="agent-lablestyle">
                    <div className="agent-lablestyle">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        onChange={e => this.onChange(e)}
                      />
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
             


              <div className="col-sm-3" style={{margin:'1%'}}>
              <div className="agent-lablestyle">
                <div className="agent-lablestyle">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={e => this.onChange(e)}
                  />
                </div>
              </div>
            </div>
              <div className="col-sm-3" style={{margin:'1%'}}>
                <div className="agent-lablestyle">
                  <div className="agent-lablestyle">
                    <label>State</label>
                    <input
                      type="text"
                      name="stateStr"
                      onChange={e => this.onChange(e)}
                    />
                    
                  </div>
                </div>
              </div>

              <div className="col-sm-3" style={{margin:'1%'}}>
                  <div className="agent-lablestyle">
                    <div className="agent-lablestyle">
                      <label>Country</label>
                      <input
                        type="text"
                        name="storeLocation"
                        onChange={e => this.onChange(e)}
                      />
                      
                    </div>
                  </div>
                </div>
            </div>


            <div className="col-sm-12">
             


            <div className="col-sm-3" style={{margin:'1%'}}>
            <div className="agent-lablestyle">
              <div className="agent-lablestyle">
                <label>Zip</label>
                <input
                  type="text"
                  name="zipcode"
                  onChange={e => this.onChange(e)}
                />
               
              </div>
            </div>
          </div>
            <div className="col-sm-3" style={{margin:'1%'}}>
              <div className="agent-lablestyle">
                <div className="agent-lablestyle">
                  <label>Driving License Number</label>
                  <input
                    type="text"
                    name="drivinglicansenum"
                    onChange={e => this.onChange(e)}
                  />
                 
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{margin:'1%'}}>
            <div className="agent-lablestyle">
              <div className="agent-lablestyle">
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  onChange={e => this.onChange(e)}
                />
               
              </div>
            </div>
          </div>


          <div className="col-sm-3" style={{margin:'1%'}}>
            <div className="agent-lablestyle">
              <div className="agent-lablestyle">
                <label>vendor</label>
                <select name="vendor" onChange={e => this.onChange(e)}>
                <option name="JARIR"> JARIR</option>
                <option name="STC">STC</option>
              </select>
               
              </div>
            </div>
          </div>

          <div className="col-sm-3" style={{margin:'1%'}}>
          <div className="agent-lablestyle">
            <div className="agent-lablestyle">
              <label>Agent Type</label>
              <select name="agentRole" onChange={e => this.onChange(e)}>
              <option name="Agent"> Agent</option>
              <option name="Senior Agent">Senior Agent</option>
              <option name="Lead Agent">Lead Agent</option>
              <option name="Agent Manager">Agent Manager</option>
            </select>
             
            </div>
          </div>
        </div>


        
        <div className="col-sm-3" style={{margin:'1%'}}>
        <div className="agent-lablestyle">
          <div className="agent-lablestyle">
            <label>status</label>
            <select name="status" onChange={e => this.onChange(e)}>
            <option name="Active"> status</option>
            <option name="Inactive">status</option>
          </select>
           
          </div>
        </div>
      </div>


          </div>


              </div>
              
              <div className="agent-saveandcontinuestyle">
                <button  className="agent-savebtn"  onClick={e => this.onClickHandler(e)}>
                  Save 
                </button>
               
              
              </div>

              <div className="agent-saveandcontinuestyle">
              <Link  className="agent-savebtn" >
                Save 
              </Link>
             
            
            </div>
            </div>
          
        </div>
       
            </div>
          </div>
        </div>
      </div>
      </Container>
    );
  }
}


 //  fetch('http://122.166.172.240:3031/api/iord-tahkum-apis?ninId.equals=' + ninid + '&&mobileOtp.equals=' + mobileOtp, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
  //   },
  // })

    
 // instance.post("/agent.json",data).then(res => {window.location.reload(false); console.log(res)})