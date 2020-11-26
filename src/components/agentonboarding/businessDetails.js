import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';
import EditBusinessDetails from './editBusinessDetails'
import { Link } from 'react-router-dom';
export default class BusinessDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
           businessDetails:{
               taxID:'',
               businessName:'',
               address:' ',
               businessPhone:'',
               id:'',
               website:'',
               managementFee:'',
               feeStartDate:'',
               feeEndDate:''
           },
            pointerEvent:'none',
           active:1
        };
    }

    
  componentDidMount () {

    const  headerConfig={
     headers:{
      Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
   } };
         
        
        
 
    Axios.get(`http://122.166.172.240:3031/api/business-partners/${window.sessionStorage.getItem('agentID')}`,headerConfig)
    .then(res => {
      console.log(res.data,'000 ---this is business details');
      res.data != undefined ?
     this.setState({businessDetails:res.data}):console.log('no data available')
    })
    
  
  
     }
  
     onChange (e) {
        this.setState({[e.target.name]:e.target.value});
        
      }
      onClickHandler(e){
          if(this.state.businessDetails.id && this.state.businessDetails.id != null ){

              this.state.pointerEvent === 'none'? 
              this.setState({pointerEvent:'auto'}):
              this.setState({pointerEvent:'none'})
              this.state.pointerEvent === 'none'? 
              this.setState({active:0}):
              this.setState({active:1})
            }
            else{
                alert('you are not logged in')
            }
      }

      agentTable = (e) => {
        this.props.history.push('/agent/agenttable');
      };

    render() {
        return (
            <div className="rtl-css">
                <div className="container-fluid add-agent">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <SideNav />
                        </div>
                        {this.state.active === 0 ? 
                        <div className="col-md-9 col-sm-9 col-xs-12 add-agent-panel" >

                                
                                <EditBusinessDetails id={this.state.businessDetails.id}/>
                                
                                {/* <div className="row">
                                <div className="col-sm-12 col-xs-12">
                            
                                    <button  className="agent-savebtn"  onClick={e => this.onClickHandler(e)}> {this.state.pointerEvent==='none'?'Update':'Save' } </button>
                                
                                </div>
                            </div> */}
                        </div>:
                        <div className="col-md-10 col-sm-10 col-xs-12 add-agent-panel">
                           {/* <div className="container"> */}
                            <div className="row" style={{paddingTop:'3rem'}}>
                                
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="lname"  name="taxID"  defaultValue={this.state.businessDetails.crnnumber}  onChange={e => this.onChange(e)} required />
                                        <label for="lname">Company Registration No</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="city"  name="lastNameArabic" defaultValue={this.state.businessDetails.businessType}   onChange={e => this.onChange(e)} required />
                                        <label for="city">Business Type</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="businessName"  name="businessName"  defaultValue={this.state.businessDetails.businessName} onChange={e => this.onChange(e)} required />
                                        <label for="text">Registred Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="registrationIssueDate"  name="registrationIssueDate"  defaultValue={this.state.businessDetails.feeStartDate}   onChange={e => this.onChange(e)} required />
                                        <label for="registrationIssueDate">Registration Issue Date</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="address"  name="address"  defaultValue={this.state.businessDetails.companyStatus}   onChange={e => this.onChange(e)} required />
                                        <label for="address">Company Status</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="state"  name="agentEmployeeId" defaultValue={this.state.businessDetails.feeEndDate}   onChange={e => this.onChange(e)} required />
                                        <label for="state"> Registration Expiry Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber"  defaultValue={this.state.businessDetails.taxID}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">Location</label>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="driveLicense"  name="drivinglicansenum"  defaultValue={this.state.businessDetails.businessPhone}  onChange={e => this.onChange(e)} required />
                                        <label for="driveLicense">Telephone</label>
                                    </div>
                                </div>
                                {/* <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="country"  name="storeLocation"   onChange={e => this.onChange(e)} required />
                                        <label for="country">Postal Box</label>
                                    </div>
                                </div> */}
                               <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber" defaultValue={this.state.businessDetails.managementFee}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">management Fee</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="email" id="emailAddress" defaultValue="" required />
                                        <label for="email">Email Address</label>
                                    </div>
                                </div> */}
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber" defaultValue={this.state.businessDetails.website}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">Website</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber" defaultValue={this.state.businessDetails.businessEmail}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">Eamil</label>
                                    </div>
                                </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        {this.state.businessDetails.id !== '' ? null : "Loading..."}
                                    </div>
                                </div>
                            
                            {/* <div className="col-sm-4 col-xs-12"></div> */}
                          
                           
                            </div>

                                    {/* </div> */}
                            {/* <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber" defaultValue={this.state.businessDetails.managementFee}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">managementFee</label>
                                    </div>
                                </div>
                            
                           
                              
                                <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input style={{pointerEvents:this.state.pointerEvent}} type="text" id="pin"  name="personalIdentificationNumber" defaultValue={this.state.businessDetails.defaultPayoutCurrency}  onChange={e => this.onChange(e)} required />
                                        <label for="pin">defaultPayoutCurrency</label>
                                    </div>
                                </div>
                            </div>

                                     */}
                            {/* <div className="row">
                                <div className="col-sm-12 col-xs-12">
                                
                                    <button  className="agent-savebtn"  onClick={e => this.onClickHandler(e)}> {this.state.pointerEvent==='none'?'Update':'Save' } </button>
                                
                                </div>
                            </div> */}
                           
                        </div>
    }
                    </div>
                </div>
            </div>
        );
    }
}