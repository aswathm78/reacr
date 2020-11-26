import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import { Otp } from 'react-otp-timer';
import config from '../../assets/config/config';
import CustomerApi from './CustomerApi'
import Logo from '../agentlogin/maalem-logo.png'
import StcLogo from '../../assets/images/stc-logo.png'
import './newStyleHndle.scss'
import Loader from '../smelogin/utils/loader'
import JARIRLogo from './jarir.png'
import SideLogo from '../agentlogin/newside.png'
import axios from 'axios';

export default class customersignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {
        identificationNo:'',
        mobileNo:'',
      },
      idenotp: {
        otpValue:''
      },
      loaderState:false,
      cmscustomerdata:[]

    };
  }
  resendEvent(){
    
  }
  getLanguageData=()=>{
    this.setState({loaderState:true})
    axios.get('http://122.166.172.240:1337/customer-sign-up-and-agent-dashboards')
    .then(res => {
      console.log(res)
      if(window.sessionStorage.getItem('language')=='en'){
      this.setState({ cmscustomerdata: res.data[0],loaderState:false });
      }else{
        this.setState({ cmscustomerdata: res.data[1],loaderState:false });
      }
      console.log('cmscustomerdata', this.state.cmscustomerdata)
    });
  
        console.log(this.state.cmscustomerdata)
  }
  componentDidMount(){
    this.getLanguageData()
  }
  addCustomerFunction = async (data) => {
      console.log(data)
      let check = await CustomerApi.checkCustomer(data)
      console.log(check)
      if (check) {
        data['mobileNumber'] = this.state.nid.mobileNo 
        let stat = await CustomerApi.addCustomer(data)
      }else {
        if(window.sessionStorage.getItem('DATA_TO_UPDATE')){
          console.log('existingData',JSON.parse(window.sessionStorage.getItem('DATA_TO_UPDATE')))
          let existingData = JSON.parse(window.sessionStorage.getItem('DATA_TO_UPDATE'));
          data['mobileNumber'] = this.state.nid.mobileNo 
          data['customerId']=existingData.id
          let stat = await CustomerApi.updateCustomer(data,existingData)
        }
       
      }
  }

  changepage = () => {
    // this.setState({
    //     activekey: 2
    // })
  };

  handleChange = event => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  };

  // /-------------   password validation----------------
  pwdchange = event => {
    let pwd = this.state.pwd;
    pwd[event.target.name] = event.target.value;
    this.setState({
      pwd,
    });
  };

  pwdsubmit = event => {
    event.preventDefault();
    if (this.pwdvalidate()) {
      console.log(this.state);
      let pwd = {};

      pwd['password'] = '';
      pwd['confirm_password'] = '';
      this.setState({
        pwd: pwd,
        activekey: 4,
      });
    }
  };

  pwdvalidate() {
    let pwd = this.state.pwd;
    let errors = {};
    let isValid = true;
    // if (!pwd[""]) {
    //     isValid = false;
    //     errors["password"] = "Please enter your password.";
    // }
    var pattern = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$');
    if (!pattern.test(pwd['password'])) {
      // isValid = false;
      // errors["password"] = "Please enter valid password.";
      if (!pwd['confirm_password']) {
        isValid = false;
        errors['confirm_password'] = this.state.cmscustomerdata.Mobilepwd
      }

      if (typeof pwd['password'] !== 'undefined' && typeof pwd['confirm_password'] !== 'undefined') {
        if (pwd['password'] != pwd['confirm_password']) {
          isValid = false;
          errors['password'] = this.state.cmscustomerdata.Invalidpwd
        }
      }
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }
  // ----------------------------------   paasword validation end--------------------------------------//

  //--------------------------------OTP Validation Start--------------------------------------------------//
  otpchange = (event,type) => {
    let idenotp = Object.assign({}, this.state.idenotp);
    // let otp = this.state.otp;
    idenotp.otpValue = event.target.value;
    this.setState({
      idenotp
    });
  };

  otpsubmit = event => {
    event.preventDefault();
    if (this.otpvalidate()) {
      console.log(this.state);
      let otp = {};

      otp['mobile'] = '';
      this.setState({
        otp: otp,
        activekey: 3,
      });
    }
  };

  otpvalidate() {
    let otp = this.state.otp;
    let errors = {};
    let isValid = true;
    if (!otp['mobile']) {
      isValid = false;
      errors['mobile'] = this.state.cmscustomerdata.mobileoptvalidate
    }

    if (typeof otp['mobile'] !== 'undefined') {
      var pattern = new RegExp('^\\d{4}$');
      if (!pattern.test(otp['mobile'])) {
        isValid = false;
        errors['mobile'] = this.state.cmscustomerdata.validpw
      }
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }



  //-------------------------------OTP Validation END-----------------------------------------------------//
  idenotpsubmit = async (event)=> {
    this.setState({loaderState:true})
    event.preventDefault();
    if (this.idenotpvalidate()) {
      let ninid = this.state.nid.identificationNo;
      let mobileOtp = this.state.idenotp.otpValue;
      await fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-apis?ninId.equals=' + ninid + '&mobileOtp.equals=' + mobileOtp, {
        // fetch(config.IORD_SERVICE_URL +  '/api/iord-tahkum-apis/' + ninid + '/' + mobileOtp, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        },
      })
        // .then((response) => response.json())
        .then(async (response) => {
          console.log(response)
          if (response.status == 200) {
            //login success
            // this.setState({loaderState:false})
            let jsonResp = await response.json().then(async (data) => {
              console.log('IORD Resp = ', data);
              await this.addCustomerFunction(data[0])
              await this.getaddress();
            });
            // let jsonResp = response.json();
            // console.log('IORD Resp = ', jsonResp);
            // this.getaddress();
            // window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', jsonResp);
            
          } else {
            let errors = {};
            errors['otpValue'] = this.state.cmscustomerdata.valid_nin_iqama_otp_num
            this.setState({
              errors: errors,
            });
          }
        });

      // this.setState({
      //           idenotp: null,
      //           activekey: 6,
      //         });
    }
  };






  getaddress = async () => {
    console.log(window.sessionStorage.getItem('iord_id_token'))
    fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-addresses?ninno.equals='+this.state.nid.identificationNo, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
      },
    })
      // .then((response) => response.json())
      .then(response => {
        console.log(response, 'response')
        if (response.status == 200) {
          //login success
          let jsonResp = response.json().then(data => {
            console.log('IORD Resp = ', data);
            window.sessionStorage.setItem('TAHKUM_ADDRESS_DATA', JSON.stringify(data));
          });
          this.setState({
            idenotp: null,
            activekey: 6
            
          },()=>this.setState({loaderState:false}));
        } else {
          let errors = {};
          errors['otpValue'] = this.state.cmscustomerdata.valid_nin_iqama_otp_num
          this.setState({
            errors: errors,
          });
        }
      });
  }

  // -----------------------------Identification OTP start------------------------------------------------//
  idenotpchange = event => {
    let idenotp = this.state.idenotp;
    idenotp.otpValue=event.target.value;
    // idenotp[event.target.name] = event.target.value;
    console.log(idenotp)
    this.setState({
      idenotp
    });
  };

  // idenotpsubmit = event => {
  //   event.preventDefault();
  //   if (this.idenotpvalidate()) {
  //     console.log('sbmit click=', this.state);
  //     let idenotp = {};
  //     let ninid = 1029987532;
  //     let mobileOtp = this.state.idenotp.identificationOTP;
  //     fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-apis?ninId.equals=' + ninid + '&mobileOtp.equals=' + mobileOtp, {
  //       // fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-apis/' + ninid + '/' + mobileOtp, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
  //       },
  //     })
  //       //  .then((response) => response.json())
  //       .then(response => {
  //         if (response.status == 200) {
  //           //login success
  //           let jsonResp = response.json();
  //           //console.log('IORD Resp = ', jsonResp);
  //           window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', jsonResp);
  //           this.setState({
  //             idenotp: null,
  //             activekey: 6,
  //           });
  //         } else {
  //           let errors = {};
  //           errors['identificationOTP'] = 'Please enter Valid NIN/Iqama & OTP';
  //           this.setState({
  //             errors: errors,
  //           });
  //         }
  //       });
  //     // this.setState({
  //     //           idenotp: null,
  //     //           activekey: 6,
  //     //         });
  //   }
  // };

  idenotpvalidate() {
    let idenotp = this.state.idenotp;
    let errors = {};
    let isValid = true;
    if (!idenotp['otpValue']) {
      isValid = false;
      errors['otpValue'] = this.state.cmscustomerdata.Otpnumber
    }

    if (typeof idenotp['otpValue'] !== 'undefined') {
      var pattern = new RegExp('^\\d{4}$');
      if (!pattern.test(idenotp['otpValue'])) {
        isValid = false;
        errors['otpValue'] = this.state.cmscustomerdata.Validpwd
      }
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }
  // -----------------------------Identification OTP END------------------------------------------------//

  //-----------------------------National identification number validation start--------------------------//
  nidchange = (event,type) => {
    // let nid = this.state.nid;
    let nid = Object.assign({}, this.state.nid);
    // nid[event.target.name] = event.target.value;
    if(type=='identificationNo'){
      nid.identificationNo = event.target.value
    }else if(type=='mobileNo'){
      nid.mobileNo=event.target.value
    }
    console.log(nid)
    this.setState({
      nid
    });
  };

  nidsubmit = event => {
    this.setState({loaderState:true})
    event.preventDefault();
    console.log(this.state.idenotp)
    if (this.nidvalidate()) {
      // let nid = {};
      // this.state.idenotp.identificationOTP = '';
      // nid['nationalid'] = '';
      this.setState({
        // nid: nid,
        loaderState:false,
        activekey: 5,
      });
    }
  };

  nidvalidate() {
    let nid = this.state.nid;
    let errors = {};
    let isValid = true;
    if (!nid['identificationNo']) {
      isValid = false;
      errors['identificationNo'] = this.state.cmscustomerdata.identification_no
    }

    // if (!nid["iqamanum"]) {
    //     isValid = false;
    //     errors["iqamanum"] = "Please enter 10 digits NID number";
    // }

    if (typeof nid['identificationNo'] !== 'undefined') {
      var pattern = new RegExp('^\\d{10}$');
      if (!pattern.test(nid['identificationNo'])) {
        isValid = false;
        errors['identificationNo'] = this.state.cmscustomerdata.validnumber
      }
    }

    if (!nid['mobileNo']) {
      isValid = false;
      errors['mobileNo'] = this.state.cmscustomerdata.mobile_no
    }

    if (typeof nid['mobileNo'] !== 'undefined') {
      var pattern = new RegExp('^\\d{10}$');
      if (!pattern.test(nid['mobileNo'])) {
        isValid = false;
        errors['mobileNo'] = this.state.cmscustomerdata.valid_mobile_no
      }
    }

    // if (typeof nid["iqamanum"] !== "undefined") {
    //     var pattern = new RegExp('^\\d{10}$');
    //     if (!pattern.test(nid["iqamanum"])) {
    //         isValid = false;
    //         errors["iqamanum"] = "Please enter valid number.";
    //     }

    // }

    this.setState({
      errors: errors,
    });
    return isValid;
  }
  //-----------------------------National identification number validation end--------------------------//

  handleSubmit = event => {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      input['name'] = '';
      input['phonenumber'] = '';
      input['email'] = '';
      // input["password"] = "";
      // input["confirm_password"] = "";
      this.setState({
        input: input,
        activekey: 2,
      });
      // alert('Demo Form is submited');
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input['name']) {
      isValid = false;
      errors['name'] = this.state.cmscustomerdata.customer_name
    }
    if (!input['phonenumber']) {
      isValid = false;
      errors['phonenumber'] = this.state.cmscustomerdata.phone_num
    }

    if (!input['email']) {
      isValid = false;
      errors['email'] = this.state.cmscustomerdata.email
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input['email'])) {
        isValid = false;
        errors['email'] = this.state.cmscustomerdata.valid_email
      }
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }

  // resendEvent = () => {
  //     console.log("***************Resend button pressed do stuff here *********************")

  // }
  // passwordvalidation = () => {
  //     this.setState({
  //     })
  // }
  // identification = () => {
  //     this.setState({
  //     })

  // }

  identificationOTP = () => {
    this.setState({
      activekey: 6,
    });
  };

  getstarted = () => {
    this.props.history.push('/agent/details');
  };
  viewdashboard = () => {
    this.props.history.push('/agent/dashboard');
  };
  logout = () => {
    this.props.history.push('/agent/signin');
  };
  dropDownHandler = (e) => {
    if ((e.target.value) == 'en') {
      this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'en')
      // window.location.reload(false);
      this.setState({loaderState:false})

    } else if ((e.target.value) == 'ar') {
      this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'ar')
      this.setState({loaderState:true})

      // window.location.reload(false);
    } else if ((e.target.value) == 'logout') {
      this.logout()
    }

  }
  render() {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px',
      },
      // resendBtn: {
      //     backgroundColor: '#5cb85c',
      //     color: 'white',
      //     border: '1 px solid #ccc'
      // }
    };
console.log(this.state.idenotp)
    const vendor = window.sessionStorage.getItem('vendor').toLowerCase();

    return (
      <React.Fragment>
  {this.state.loaderState?
  <Loader/>
:""}
      <div className='container-fluid'>
      <div className={(window.sessionStorage.getItem('language'))=='en'?'englishCssStc':'arabicCssStc'}>
    
        <div className='top-image' >
            <div className='col-sm-2 col-xs-12  text-center'>
              <img
                src={Logo}
                style={{ maxWidth: '130px', marginTop: '17px' }}
              />
            </div>
          </div>
          <div
            className='col-sm-10 col-xs-12 card-main-head'
            style={{ marginTop: '33px',height:'77px' }}
          >
            <div class=''>
              <div className='col-xs-6 col-sm-6' style={{ direction: 'ltr' }}>
              {window.sessionStorage.getItem('vendor')=='STC'?
                  <img
                    src={StcLogo}
                    style={{ maxWidth: '100px', marginTop: '10px' }}
                  />
                  :""}
                  {window.sessionStorage.getItem('vendor')=='JARIR' ?
                   <img
                    src={JARIRLogo }
                    style={{ maxWidth: '150px'}}
                  />
                  :""}

              </div>
              {/* <div className='col-xs-6 col-sm-6'> */}
              <div className='col-xs-6 col-sm-6 side-dropdown' style={{ textAlign: 'end' }}>
                <select defaultValue={window.sessionStorage.getItem('language')} onChange={(e) => this.dropDownHandler(e)} style={{ background: 'white', marginTop: '25px' ,width:'initial'}}>
                  <option value='logout'>{this.state.cmscustomerdata.logout}</option>
                  <option value='en'>{this.state.cmscustomerdata.english}</option>
                  <option value='ar'>{this.state.cmscustomerdata.arabic}</option>

                </select>
             
              </div>
        
</div>
            <br />
          </div>
          <div className='down-image'>
            <div className='col-sm-2 col-xs-12  text-center'>
              <img
                src={Logo}
                style={{ maxWidth: '130px', marginTop: '17px' }}
              />
            </div>
          </div>
        {/* </div> */}

            <br />
         
          <br />
          <div className='col-xs-12' style={{ marginTop: '20px' }}>
            <div className='col-sm-4 col-xs-12'>
              <div className=''>
                <div className=''>
                  <div className='' style={{marginTop:'50px'}} >
                    <img src={SideLogo} />
                    {/* <div
                      className='verification_heading'
                      style={{ textAlign: 'right', marginTop: '20px' }}
                    >
                      Agent Details
                    </div>
                    <div
                      style={{
                        textAlign: 'right',
                        fontSize: '1.4rem',
                        fontWeight: '100px',
                        padding: '40px'
                      }}
                    >
                      jarir
                      {vendor!=null || vendor!=''?vendor == 'jarir' ? 'Junaid Qazi' : 'Imran Khan':""}
                      <br />
                      <br />
                      {window.sessionStorage.getItem('email')}
                      <br />
                      <br />
                      +966 5677 87698
                      <br />
                      <br />
                      {window.sessionStorage.getItem('vendor')}
                      <br />
                      <br />
                    </div> */}
                    <div className='text-center'>
                      <button
                        className='signup-btn'
                        style={{width:'200px',marginBottom:'20px',padding:'10px'}}
                        onClick={this.viewdashboard}
                      >
                        {this.state.cmscustomerdata.view_dashboard} 
                      </button>
                    </div>
                    {/* <div className="signup-btn-style">
                    <div>
                      <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                        View Dashboard
                      </button>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-8  col-xs-12'>
              {this.state.activekey === 4 ? (
                // {/* Verfication card */}
                <div
                  className='verficationcardstyle'
                  style={{
                    height: '40vh',
                    borderRadius: '10px',
                    marginTop: '30px'
                  }}
                >
                  <div className=' card-width-new'>
                    <div
                      className='card-body'
                      style={{ borderRadius: '10px' }}
                    >
                      <div className='verification_heading arr-heading'>
                      {this.state.cmscustomerdata.personal_identification}
                      </div>
                      <Form className='formstyling'>
                        <div class='input-icons'>
                          <Form.Group controlId='formBasicEmail'>
                            <Form.Control
                              type='number'
                              placeholder={this.state.cmscustomerdata.identification_number}
                              className='signin-inputstyle'
                              name='nationalid'
                              value={this.state.nid.identificationNo}
                              onChange={e =>
                                this.nidchange(e, 'identificationNo')
                              }
                            />
                            <div className='text-danger'>
                              {this.state.errors.identificationNo}
                            </div>
                          </Form.Group>

                          <div
                            className='ninnumberradiobtnstyle arr-heading'
                            style={{ display: 'flex' }}
                          >
                            <label>
                              <input
                                type='radio'
                                name='identificationnumber'
                                id='identificationnumber'
                              />
                             {this.state.cmscustomerdata.nin_number}
                            </label>
                            <label>
                              <input
                                type='radio'
                                name='identificationnumber'
                                id='identificationnumber'
                              />
                              {this.state.cmscustomerdata.iqama_number}
                            </label>
                          </div>
                          <Form.Group controlId='formBasicEmail'>
                            <Form.Control
                              type='tele'
                              placeholder={this.state.cmscustomerdata.mobilenumber}
                              className='signin-inputstyle'
                              name='mobilenumber'
                              value={this.state.nid.mobileNo}
                              onChange={e => this.nidchange(e, 'mobileNo')}
                            />
                            <div className='text-danger'>
                              {this.state.errors.mobileNo}
                            </div>
                          </Form.Group>
                          <div className='signup-btn-style'>
                            <button
                              className='signup-btn'
                              style={{padding:'10px'}}
                              onClick={this.nidsubmit}
                            >
                              {this.state.cmscustomerdata.submit}
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              ) : this.state.activekey === 5 ? (
                // {/* Verfication card */}

                <div
                  className='verficationcardstyle'
                  style={{
                    height: '40vh',
                    borderRadius: '10px',
                    marginTop: '20px'
                  }}
                >
                  <div className=' card-width-new'>
                    <div
                      className='card-body'
                      style={{ borderRadius: '10px' }}
                    >
                      <div className='verification_heading arr-heading'>
                      {this.state.cmscustomerdata.otp_verification}
                      </div>
                      {/* <label className="mobile-label">Identification OTP</label> */}
                      <Form className='formstyling'>
                        <div class='input-icons'>
                          {/* <Form.Group controlId='formBasicEmail'>
                            <Form.Control
                              type='number'
                              placeholder={this.state.cmscustomerdata.recived_otp}
                              className='signin-inputstyle'
                              name='identificationOTP'
                              value={this.state.idenotp.otpValue}
                              onChange={this.idenotpchange}
                              id='identificationOTP'
                            />
                            <div className='text-danger'>
                              {this.state.errors.otpValue}
                            </div>
                          </Form.Group>

                          <div
                            style={{
                              display: 'flex',
                              'justify-content': 'space-around'
                            }}
                          >
                            <div className='sign-resendotp'>
                              <a href='#'> {this.state.cmscustomerdata.reset_otp}</a>
                            </div>

                            <div className='otp-comp'>
                              <Otp
                                style={style}
                                minutes={1}
                                // resendEvent={this.resendEvent}
                              />
                            </div>
                          </div> */}
   <div controlId='formBasicEmail'>
                            <input
                              type='number'
                              placeholder={this.state.cmscustomerdata.recived_otp}
                              className='signin-inputstyle'
                              name='identificationOTP'
                              value={this.state.idenotp.otpValue}
                              onChange={this.idenotpchange}
                              id='identificationOTP'
                            />
                            <div className='text-danger'>
                              {this.state.errors.otpValue}
                            </div>
                          </div>

                          <span style={{ cursor: 'pointer', fontSize: '14px' }} >
                          {/* <div onClick={this.resendEvent}>
                            {this.state.languageData.resendOtp}
                          </div> */}
                          <Otp
                            style={style}
                            minutes={1}
                            resendEvent={this.resendEvent}
                            ButtonText=''
                          />
                        </span>
                          <div className='signup-btn-style'>
                            <button
                              className='signup-btn'
                              onClick={this.idenotpsubmit}
                            >
                              {this.state.cmscustomerdata.submit}
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              ) : this.state.activekey === 6 ? (
                <div
                  className='verficationcardstyle'
                  style={{
                    height: '60vh',
                    borderRadius: '10px',
                    marginTop: '20px'
                  }}
                >
                  <div className=' card-width-new text-center' >
                    <div
                      className='card-body'
                      style={{ borderRadius: '10px' }}
                    >
                      <div className='dfs-cong'>{this.state.cmscustomerdata.congratulation}</div>

                      <div className='dfs-name'>{this.state.cmscustomerdata.dear_name}</div>

                      <div className='dfs-nametxt'>
                      {this.state.cmscustomerdata.thankyouheading}
                      </div>

                      <div className='dfs-maalemteam'>
                      {this.state.cmscustomerdata.maalemteam}
                      </div>

                      <div className='text-center'>
                        <button
                          className='signup-btn' style={{width:'150px',padding:'10px',marginBottom:'10px'}}
                          onClick={this.getstarted}
                        >
                          {this.state.cmscustomerdata.getstarted}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            </div>
          </div>
        </div>
</React.Fragment>
      // <div style={{ background: 'white', height: '99vh' }}>
      //   <div className="row">
      //     <div className="col-sm-12" style={{ width: '97vw' }}>
      //       <div className="card" style={{ borderRadius: '10px', width: '97vw', marginLeft: '20px', marginTop: '20px' }}>
      //         <button className="dfs-savebtn" onClick={this.logout} style={{ top: '20px', width: '40px ', margin: '30px' }}>
      //           <span className="glyphicon glyphicon-log-out"></span>
      //         </button>
      //         <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
      //           <div className={vendor} width="150" height="50"></div>
      //           <br />
      //         </div>
      //       </div>
      //       <br />
      //       <div className="col-sm-3">
      //         <div className="col-sm-12 verficationcardstyle">
      //           <div className="card" style={{ borderRadius: '10px' }}>
      //             <div className="card-body" style={{ height: '60vh', borderRadius: '10px' }}>
      //               <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
      //                 Agent Details
      //               </div>
      //               <div
      //                 style={{
      //                   textAlign: 'right',
      //                   fontSize: '1.4rem',
      //                   fontWeight: '100px',
      //                   paddingRight: '40px',
      //                 }}
      //               >
      //                 {vendor == 'jarir' ? 'Junaid Qazi' : 'Imran Khan'}
      //                 <br />
      //                 <br />
      //                 {window.sessionStorage.getItem('email')}
      //                 <br />
      //                 <br />
      //                 +966 5677 87698
      //                 <br />
      //                 <br />
      //                 {window.sessionStorage.getItem('vendor')}
      //                 <br />
      //                 <br />
      //               </div>

      //               <div className="signup-btn-style">
      //                 <div>
      //                   <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
      //                     View Dashboard
      //                   </button>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-sm-6" style={{ paddingLeft: '20%' }}>
      //         {this.state.activekey === 4 ? (
      //           // {/* Verfication card */}
      //           <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '50px', width: '45rem' }}>
      //             <div className="card" style={{ borderRadius: '10px' }}>
      //               <div className="card-body" style={{ height: '45vh', borderRadius: '10px' }}>
      //                 <div className="verification_heading">Personal Identification</div>
      //                 <Form className="formstyling">
      //                   <div class="input-icons">
      //                     <Form.Group controlId="formBasicEmail">
      //                       <Form.Control
      //                         type="number"
      //                         placeholder="IDENTIFICATION NUMBER"
      //                         className="signin-inputstyle"
      //                         name="nationalid"
      //                         value={this.state.nid.identificationNo}
      //                         onChange={(e)=>this.nidchange(e,'identificationNo')}
      //                       />
      //                       <div className="text-danger">{this.state.errors.identificationNo}</div>
      //                     </Form.Group>

      //                     <div className="ninnumberradiobtnstyle" style={{ display: 'flex' }}>
      //                       <label>
      //                         <input type="radio" name="identificationnumber" id="identificationnumber" />
      //                         NIN Number
      //                       </label>
      //                       <label>
      //                         <input type="radio" name="identificationnumber" id="identificationnumber" />
      //                         Iqama Number
      //                       </label>
      //                     </div>
      //                     <Form.Group controlId="formBasicEmail">
      //                       <Form.Control
      //                         type="tele"
      //                         placeholder="MOBIEL NUMBER"
      //                         className="signin-inputstyle"
      //                         name="mobilenumber"
      //                         value={this.state.nid.mobileNo}
      //                         onChange={(e)=>this.nidchange(e,'mobileNo')}
      //                       />
      //                       <div className="text-danger">{this.state.errors.mobileNo}</div>
      //                     </Form.Group>
      //                     <div className="signup-btn-style">
      //                       <button className="signup-btn" onClick={this.nidsubmit}>
      //                         Submit
      //                       </button>
      //                     </div>
      //                   </div>
      //                 </Form>
      //               </div>
      //             </div>
      //           </div>
      //         ) : this.state.activekey === 5 ? (
      //           // {/* Verfication card */}

      //           <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '150px', width: '45rem' }}>
      //             <div className="card" style={{ borderRadius: '10px' }}>
      //               <div className="card-body" style={{ height: '45vh', borderRadius: '10px' }}>
      //                 <div className="verification_heading">OTP Verification</div>
      //                 {/* <label className="mobile-label">Identification OTP</label> */}
      //                 <Form className="formstyling">
      //                   <div class="input-icons">
      //                     <Form.Group controlId="formBasicEmail">
      //                       <Form.Control
      //                         type="number"
      //                         placeholder="Enter the OTP received"
      //                         className="signin-inputstyle"
      //                         name="identificationOTP"
      //                         value={this.state.idenotp.otpValue}
      //                         onChange={this.idenotpchange}
      //                         id="identificationOTP"
      //                       />
      //                       <div className="text-danger">{this.state.errors.otpValue}</div>
      //                     </Form.Group>

      //                     <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
      //                       <div className="sign-resendotp">
      //                         <a href="#"> Resend OTP</a>
      //                       </div>

      //                       <div className="otp-comp">
      //                         <Otp
      //                           style={style}
      //                           minutes={1}
      //                         // resendEvent={this.resendEvent}
      //                         />
      //                       </div>
      //                     </div>

      //                     <div className="signup-btn-style">
      //                       <button className="signup-btn" onClick={this.idenotpsubmit}>
      //                         Submit
      //                       </button>
      //                     </div>
      //                   </div>
      //                 </Form>
      //               </div>
      //             </div>
      //           </div>
      //         ) : this.state.activekey === 6 ? (
      //           <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '150px', width: '45rem' }}>
      //             <div className="card" style={{ borderRadius: '10px' }}>
      //               <div className="card-body" style={{ height: '45vh', borderRadius: '10px' }}>
      //                 <div className="dfs-cong">Congratulations !</div>

      //                 <div className="dfs-name">Dear Mr Abdullah!</div>

      //                 <div className="dfs-nametxt">Thank you very much for joining Maalem Financing.</div>

      //                 <div className="dfs-maalemteam">Maalem Financing Team.</div>

      //                 <div>
      //                   <button className="dfs-getstarted" onClick={this.getstarted}>
      //                     Get Started
      //                   </button>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         ) : (
      //                 ''
      //               )}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}