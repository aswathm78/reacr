import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';
export default class BusinessAddAgent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName:'',
            // lastName:'',
            // email:'',
            // password:'',
            // vendor:'',
            // agentRole:'',
            // address:'',
            // city:'',
            // stateStr:'',
            // storeLocation:'',
            //  zipcode:'',
            //  drivinglicansenum:'',
            //  status:'',
            //  results:'',
            //  firstNameArabic:'',
            //  lastNameArabc:'',
            agentStatus: 'Active',
            inputData: {},
            errorMsgs: {},
            storeNames: [],
            passwordDisplay:3
        };
    }


    componentDidMount() {

        this.stores()

    }
    stores = () => {
        const headerConfig = {
            headers: {
                Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
            }
        };

        Axios.get('http://122.166.172.240:3031/api/stores', headerConfig)
            .then(res => {
                this.setState({ storeNames: res.data })

            }).catch(error => console.log(error))


    }
    onChange(e) {
        let inputs = {}
        inputs[e.target.name] = e.target.value
        console.log(e.target.name, '000 --- targate,name')
        console.log(e.target.value, '000 --- targate,value')
        console.log(e, '000 --- targate')
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ inputData: inputs })

    }
    passwordDisplay =(type) =>{
        type === 'auto' ? this.setState({passwordDisplay:1}):this.setState({passwordDisplay:0})
    }
    onClickHandler = (e) => {
        e.preventDefault();
        let result = true;
        let errorArray = {}
        // error assinging codes ....
        if (!this.state.firstName) {
            errorArray['firstName'] = 'Please enter your first name'
            result = false
        }
        if (!this.state.lastName) {
            errorArray['lastName'] = 'Please enter your last name'
            result = false
        }
        if (!this.state.designation) {
            errorArray['designation'] = 'Please enter your designation'
            result = false
        }
        if (!this.state.firstNameArabic) {
            errorArray['firstNameArabic'] = 'Please enter your first name arabic'
            result = false
        }
        if (!this.state.lastNameArabic) {
            errorArray['lastNameArabic'] = 'Please enter your last name arabic'
            result = false
        }
        if (!this.state.designationArabic) {
            errorArray['designationArabic'] = 'Please enter your designation arabic'
            result = false
        }
        if (!this.state.baseLocation) {
            errorArray['baseLocation'] = 'Please enter your base location'
            result = false
        }
        if (!this.state.department) {
            errorArray['department'] = 'Please enter your department'
            result = false
        }
        if (!this.state.locationMapped) {
            errorArray['locationMapped'] = 'Please enter your location mapped'
            result = false
        }
        if (!this.state.managerName) {
            errorArray['managerName'] = 'Please enter your manager name'
            result = false
        }
        if (!this.state.personalIdentificationNumber) {
            errorArray['personalIdentificationNumber'] = 'Please enter your personal identification number'
            result = false
        }
        if (!this.state.email) {
            errorArray['email'] = 'Please enter your email'
            result = false
        }
        if (!this.state.mobileNo) {
            errorArray['mobileNo'] = 'Please enter your mobile no'
            result = false
        }


        this.setState({ errorMsgs: errorArray })
        // result === true ? alert('success') : alert('display errors')
        console.log(this.state, 'this is showing errors')

        if (result) {
            const data = {
                ...this.state
            };
            console.log(data, "000 --- all targates");

            const headerConfig = {
                headers: {
                    Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
                }
            };



            Axios.post('http://122.166.172.240:3031/api/iord-agents', data, headerConfig)
                .then(res => {
                    console.log(res, '00000 this is form res')
                    this.props.history.push('/business/agents');
                })
        }

    }

    agentTable = (e) => {
        this.props.history.push('/business/businessTable');
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
                        <div className="col-md-10 col-sm-10 col-xs-12 add-agent-panel">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h5 className="common-h5"><strong>Add Agent</strong></h5>
                                        <p className="mb-30">Business Partner Team Management Details</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="firstName" name="firstName" onChange={e => this.onChange(e)} required />
                                            <label for="firstName">First Name</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.firstName !== '' ? this.state.errorMsgs.firstName : null}</i>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="lastName" name="lastName" onChange={e => this.onChange(e)} required />
                                            <label for="lastName">Last Name</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.lastName !== '' ? this.state.errorMsgs.lastName : null}</i>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="designation" name="designation" onChange={e => this.onChange(e)} required />
                                            <label for="designation">Designation</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.designation !== '' ? this.state.errorMsgs.designation : null}</i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="firstNameArabic" name="firstNameArabic" onChange={e => this.onChange(e)} required />
                                            <label for="firstNameArabic">First Name Arabic</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.firstNameArabic !== '' ? this.state.errorMsgs.firstNameArabic : null}</i>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="lastNameArabic" name="lastNameArabic" onChange={e => this.onChange(e)} required />
                                            <label for="lastNameArabic">Last Name Arabic</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.lastNameArabic !== '' ? this.state.errorMsgs.lastNameArabic : null}</i>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="designationArabic" name="designationArabic" onChange={e => this.onChange(e)} required />
                                            <label for="designationArabic">designation Arabic</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.designationArabic !== '' ? this.state.errorMsgs.designationArabic : null}</i>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="department" name="department" onChange={e => this.onChange(e)} required />
                                            <label for="department">department</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.department !== '' ? this.state.errorMsgs.department : null}</i>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="locationMapped" name="locationMapped" onChange={e => this.onChange(e)} required />
                                            <label for="locationMapped">location Mapped</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.locationMapped !== '' ? this.state.errorMsgs.locationMapped : null}</i>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="text" id="managerName" name="managerName" onChange={e => this.onChange(e)} required />
                                            <label for="managerName">manager Name</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.managerName !== '' ? this.state.errorMsgs.managerName : null}</i>
                                        </div>
                                    </div>

                                    {/* <div className="col-sm-4 col-xs-12">
                                    <div className="input-wrapper">
                                        <input type="email" id="emailAddress" value="" required />
                                        <label for="email">Email Address</label>
                                    </div>
                                </div> */}
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="number" id="personalIdentificationNumber" minLength="10" maxLength="10" name="personalIdentificationNumber" onChange={e => this.onChange(e)} required />
                                            <label for="personalIdentificationNumber">Personal Identification Number</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.personalIdentificationNumber !== '' ? this.state.errorMsgs.personalIdentificationNumber : null}</i>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper">
                                            <input type="email" id="email" name="email" onChange={e => this.onChange(e)} required />
                                            <label for="email">email</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.email !== '' ? this.state.errorMsgs.email : null}</i>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="input-wrapper" style={{ minWidth: '100%!important' }} >
                                            <input type="number" id="mobileNo" name="mobileNo" onChange={e => this.onChange(e)} required />
                                            <label for="mobileNo">mobile No</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.mobileNo !== '' ? this.state.errorMsgs.mobileNo : null}</i>
                                        </div>
                                    </div>
                                    

                                </div>


                                <div className="row">
                                    
                                <div className={`col-sm-4 col-xs-12`}>
                                        <div className={`input-wrapper`} style={{ minWidth: '100%!important',display:'flex','justifyContent':'space-evenly' }} >
                                                                                        <label>chekc</label>

                                            <input type="radio"  name="selectPassword" onClick={()=>this.passwordDisplay('auto')} />
                                            <label>Auto Generated Password / Custom Password</label>
                                            <input type="radio"  name="selectPassword"  onClick={()=>this.passwordDisplay('custom')} />
  </div>
                                            </div>
                                
                                            <div className="col-sm-4 col-xs-12"></div>
                                            <div className="col-sm-4 col-xs-12">
                                        <div className="agent-lablestyle" >
                                            <label>Base Location</label>
                                            <select style={{ backgroundColor: '#f1f0f0 !important' }} name="baseLocation" onChange={e => this.onChange(e)}>
                                                <option> Select an option</option>
                                                {this.state.storeNames.map(x => <option>{x.storeName}</option>)}
                                            </select>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.baseLocation !== '' ? this.state.errorMsgs.baseLocation : null}</i>

                                        </div>
                                    </div>
                                </div>
                              <div className="row">
                              <div className={`col-sm-4 col-xs-12  ${this.state.passwordDisplay === 1 || this.state.passwordDisplay === 3 ? 'display-none':''}`}>
                                        <div className={`input-wrapper`} style={{ minWidth: '100%!important' }} >
                                            <input type="text" id="password" name="password" onChange={e => this.onChange(e)} required />
                                            <label for="password">Password</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.mobileNo !== '' ? this.state.errorMsgs.mobileNo : null}</i>
                                        </div>
                                    </div>
                                    
                                <div className={`col-sm-4 col-xs-12  ${this.state.passwordDisplay === 0 || this.state.passwordDisplay === 3 ? 'display-none':''}`}>
                                        <div className={`input-wrapper`} style={{ minWidth: '100%!important' }} >
                                            <input type="text" id="password" name="password" onChange={e => this.onChange(e)} required />
                                            <label for="password">Password</label>
                                        </div>
                                    </div>
                                    
                                    <div className={`col-sm-4 col-xs-12 ${this.state.passwordDisplay === 0 || this.state.passwordDisplay === 3 ? 'display-none':''}`}>
                                        <div className={`input-wrapper`} style={{ minWidth: '100%!important' }} >
                                            <input type="text" id="confirmPassword" name="confirmPassword" onChange={e => this.onChange(e)} required />
                                            <label for="confirmPassword">Confirm Password</label>
                                            <i style={{ color: 'red', fontSize: '1.5rem' }}>{this.state.errorMsgs.mobileNo !== '' ? this.state.errorMsgs.mobileNo : null}</i>
                                        </div>
                                    </div>
                              </div>
                                <div className="row">
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="agent-lablestyle" >
                                            <label>Status</label>
                                            <select style={{ backgroundColor: '#f1f0f0 !important' }} name="agentStatus" onChange={e => this.onChange(e)}>
                                                <option name='Active'> Select an option</option>
                                                <option name="Active"> Active</option>
                                                <option name="Inactive">Inactive</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="agent-lablestyle">
                                            <label>Agent Role</label>
                                            <select style={{ backgroundColor: '#f1f0f0 !important' }} name="agentRole" onChange={e => this.onChange(e)}>
                                                <option name="Agent">Agent</option>
                                                <option name="Senior Agent">Senior Agent</option>
                                                <option name="Lead Agent">Lead Agent</option>
                                                <option name=" Agent Manager">Agent Manager</option>
                                            </select>

                                        </div>
                                    </div>
                                    </div>

                                {/* <div className="row add-row">
                                <div className="col-sm-4 col-xs-12">
                                    <a href=""><span className="plus-sign">+</span> Add Admin</a>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <a href=""><span className="plus-sign">+</span> Add Customer</a>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <a href=""><span className="plus-sign">+</span> Add Customer</a>
                                </div>
                            </div> */}
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12">
                                        <button className="agent-savebtn" onClick={e => this.onClickHandler(e)}> Submit </button>
                                    </div>
                                    {/* <div className="col-sm-8 col-xs-12">
                                    <div className="btn-group">
                                    <button  className="agent-savebtn" onClick={e => this.agentTable(e)}> Next </button>
                                        <button className="common-btn">PREVIOUS&nbsp;<span className="glyphicon glyphicon-circle-arrow-left"></span></button>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}