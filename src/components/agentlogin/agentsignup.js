import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import { Otp } from 'react-otp-timer';
import axios from "axios";
import config from "../../assets/config/config";
import {login} from "../utils/index"
export default class customersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activekey: 1,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
    };
  }
  changepage = () => {
    // this.setState({
    //     activekey: 2
    // })
  };
  handleChange = event => {
    login()
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
      this.setState({ pwd: pwd, activekey: 4 });
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
        errors['confirm_password'] = 'Please enter your  password.';
      }
      if (typeof pwd['password'] !== 'undefined' && typeof pwd['confirm_password'] !== 'undefined') {
        if (pwd['password'] != pwd['confirm_password']) {
          isValid = false;
          errors['password'] = "Passwords don't match.";
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
  otpchange = event => {
    let otp = this.state.otp;
    otp[event.target.name] = event.target.value;
    this.setState({
      otp,
    });
  };
  otpsubmit = event => {
    event.preventDefault();
    if (this.otpvalidate()) {
      console.log(this.state);
      let otp = {};
      otp['mobile'] = '';
      this.setState({ otp: otp, activekey: 3 });
    }
  };
  otpvalidate() {
    let otp = this.state.otp;
    let errors = {};
    let isValid = true;
    if (!otp['mobile']) {
      isValid = false;
      errors['mobile'] = 'Please enter 4 digits otp number';
    }
    if (typeof otp['mobile'] !== 'undefined') {
      var pattern = new RegExp('^\\d{4}$');
      if (!pattern.test(otp['mobile'])) {
        isValid = false;
        errors['mobile'] = 'Please enter valid otp.';
      }
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }
  //-------------------------------OTP Validation END-----------------------------------------------------//
  // -----------------------------Identification OTP start------------------------------------------------//
  idenotpchange = event => {
    let idenotp = this.state.idenotp;
    idenotp[event.target.name] = event.target.value;
    this.setState({
      idenotp,
    });
  };
  idenotpsubmit = event => {
    event.preventDefault();
    if (this.idenotpvalidate()) {
      console.log(this.state);
      let idenotp = {};
      idenotp['identificationOTP'] = '';
      this.setState({ idenotp: idenotp, activekey: 6 });
    }
  };
  idenotpvalidate() {
    let idenotp = this.state.idenotp;
    let errors = {};
    let isValid = true;
    if (!idenotp['identificationOTP']) {
      isValid = false;
      errors['identificationOTP'] = 'Please enter 4 digits otp number';
    }
    if (typeof idenotp['identificationOTP'] !== 'undefined') {
      var pattern = new RegExp('^\\d{4}$');
      if (!pattern.test(idenotp['identificationOTP'])) {
        isValid = false;
        errors['identificationOTP'] = 'Please enter valid otp.';
      }
    }
    this.setState({
      errors: errors,
    });
    return isValid;
  }
  // -----------------------------Identification OTP END------------------------------------------------//
  //-----------------------------National identification number validation start--------------------------//
  nidchange = event => {
    let nid = this.state.nid;
    nid[event.target.name] = event.target.value;
    this.setState({
      nid,
    });
  };
  nidsubmit = event => {
    event.preventDefault();
    if (this.nidvalidate()) {
      console.log(this.state);
      let nid = {};
      nid['nationalid'] = '';
      this.setState({ nid: nid, activekey: 5 });
    }
  };
  nidvalidate() {
    let nid = this.state.nid;
    let errors = {};
    let isValid = true;
    if (!nid['nationalid']) {
      isValid = false;
      errors['nationalid'] = 'Please enter 10 digits NID number';
    }
    // if (!nid["iqamanum"]) {
    //     isValid = false;
    //     errors["iqamanum"] = "Please enter 10 digits NID number";
    // }
    if (typeof nid['nationalid'] !== 'undefined') {
      var pattern = new RegExp('^\\d{10}$');
      if (!pattern.test(nid['nationalid'])) {
        isValid = false;
        errors['nationalid'] = 'Please enter valid number.';
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
      this.setState({ input: input, activekey: 2 });
      // alert('Demo Form is submited');
    }
  };
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Please enter your name.';
    }
    if (!input['phonenumber']) {
      isValid = false;
      errors['phonenumber'] = 'Please enter your phonenumber';
    }
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

  personalidetification = () => {
    this.setState({
      activekey: 5,
    });
  };

  identificationOTP = () => {
    this.setState({
      activekey: 6,
    });
  };
  getstarted = () => {
    login()
    this.props.history.push('/agent/dashboard');
  };

  componentDidMount() {
    this.getsignupdata();
    if (window.sessionStorage.getItem('language') == null) {
      // window.sessionStorage.setItem('language', 'en');
      window.sessionStorage.setItem('language', 'ar');
    }
  };



  getsignupdata = async () => {
    await axios.get(config.STRAPI_URL + '/customer-signups').then(res => {
      // console.log(res,'signupdata');
      this.setState({ signupdata: res.data });
      console.log(res.data);
    });
  };



  render() {
    const arabicStyle = {
      textAlign: 'right',
    };

    const englishStyle = {
      textAlign: 'left',
    };

    let arStyle = window.sessionStorage.getItem('language') === 'ar' ? arabicStyle : englishStyle;

    let signupheading,
      welcometext,
      logintoget,
      autoloan,
      consumerloan,
      commertialloan,
      smeloan,
      youname,
      mobilenumber,
      emailid,
      submitbtn,
      alreadymembertxt,
      signinlink,
      otpverificationtxt,
      otpreceviedplaceholder,
      resendotplink,
      enterpasswordplaceholdertxt,
      Confirmpasswordtxt,
      personalidentificationheading,
      ninnumberradiobtn,
      iqamanumberradiobtn,
      nationalnumber,
      identificationotplable,
      entertheotpreceived,
      congratulationsheading,
      deartxt,
      thankyouheading,
      maalemfinancingteam,
      getstartedbtn,
      passwordgenerationheading;

    if (this.state.signupdata) {
      this.state.signupdata.map((p, index) => {
        console.log('=++=');
        console.log(window.sessionStorage.getItem('language'));
        console.log('++');

        if (p.lang == window.sessionStorage.getItem('language')) {
          welcometext = p.welcometext;
          logintoget = p.logintoget;
          autoloan = p.autolan;
          consumerloan = p.consumerloan;
          commertialloan = p.commertialloan;
          smeloan = p.smeloan;
          signupheading = p.signupheading;
          youname = p.youname;
          mobilenumber = p.mobilenumber;
          emailid = p.emailid;
          submitbtn = p.submitbtn;
          alreadymembertxt = p.alreadymembertxt;
          signinlink = p.signinlink;
          otpverificationtxt = p.otpverificationtxt;
          otpreceviedplaceholder = p.otpreceviedplaceholder;
          resendotplink = p.resendotplink;
          passwordgenerationheading = p.passwordgenerationheading;
          enterpasswordplaceholdertxt = p.enterpasswordplaceholdertxt;
          Confirmpasswordtxt = p.Confirmpasswordtxt;
          personalidentificationheading = p.personalidentificationheading;
          nationalnumber = p.nationalnumber;
          ninnumberradiobtn = p.ninnumberradiobtn;
          iqamanumberradiobtn = p.iqamanumberradiobtn;
          identificationotplable = p.identificationotplable;
          entertheotpreceived = p.entertheotpreceived;
          congratulationsheading = p.congratulationsheading;
          deartxt = p.deartxt;
          thankyouheading = p.thankyouheading;
          maalemfinancingteam = p.maalemfinancingteam;
          getstartedbtn = p.getstartedbtn;
        }
      });
    }


    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px',
      },
    };
    return (
      <div className="signbackground-img">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-6 " style={{ 'margin-top': '16%' }}>
                <div className="maalme-heading">
                  <h3>{welcometext} Welcome to Maalem Financing</h3>
                  <h3>Login to get your Finance</h3>
                </div>
                <div className="allproductcls">
                  <div>Auto Loan</div>
                  <div style={{ 'margin-left': '92px' }}>Consumer Loan</div>
                </div>
                <div className="allproductcls">
                  <div>Commercial Loan</div>
                  <div style={{ 'margin-left': '20px' }}>SME Loan</div>
                </div>
              </div>
              <div className="col-sm-6 " style={{ 'margin-top': '7%' }}>
                {this.state.activekey === 1 ? (
                  <div className="card signupcardstyling">
                    <div className="card-body">
                      <div className="signup-heading">
                        <h5 style={{ 'font-weight': 'bold', 'margin-left': '10px' }}>Agent Sign Up</h5>
                      </div>
                    </div>
                    <Form className="formstyling" onSubmit={this.handleSubmit}>
                      <div class="input-icons">
                        <Form.Group controlId="formBasicEmail">
                          <i class="fa fa-user" aria-hidden="true"></i>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            className="signin-inputstyle"
                            name="name"
                            value={this.state.input.name}
                            onChange={this.handleChange}
                            id="name"
                          />
                          <div className="text-danger">{this.state.errors.name}</div>
                        </Form.Group>
                        <Form.Group controlId="mobilenumber">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <Form.Control
                            type="number"
                            placeholder="Enter Mobile Number"
                            className="mobile-signin-inputstyle"
                            name="phonenumber"
                            value={this.state.input.phonenumber}
                            onChange={this.handleChange}
                            id="name"
                          />
                          <div className="text-danger">{this.state.errors.phonenumber}</div>
                        </Form.Group>
                        <Form.Group controlId="emailid">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email Id"
                            className="signin-inputstyle"
                            type="text"
                            name="email"
                            value={this.state.input.email}
                            onChange={this.handleChange}
                            id="email"
                          />
                          <div className="text-danger">{this.state.errors.email}</div>
                        </Form.Group>
                        <div className="signup-btn-style">
                          <button className="signup-btn" onClick={this.changepage}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                    <div className="singup-alreadtmember">
                      <p>
                        Already a member?{' '}
                        <span>
                          {' '}
                          <a href="/agent/signin">Sign in</a>{' '}
                        </span>
                      </p>
                    </div>
                  </div>
                ) : this.state.activekey === 2 ? (
                  // {/* Verfication card */}
                  <div className="verficationcardstyle">
                    <div className="card signupcardstyling ">
                      <div className="card-body">
                        <div className="verification_heading">OTP Verfication</div>
                        {/* <label className="mobile-label">Mobile</label> */}
                        <Form className="formstyling">
                          <div class="input-icons">
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control
                                type="number"
                                placeholder="Please enter the OTP received"
                                className="signin-inputstyle"
                                name="mobile"
                                value={this.state.otp.mobile}
                                onChange={this.otpchange}
                                id="mobile"
                              />
                              <div className="text-danger">{this.state.errors.mobile}</div>
                            </Form.Group>
                            <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                              <div className="sign-resendotp">
                                <a href="#"> Resend OTP</a>
                              </div>
                              <div className="otp-comp">
                                <Otp
                                  style={style}
                                  minutes={1}
                                  // resendEvent={this.resendEvent}
                                  ButtonText=""
                                />
                              </div>
                            </div>
                            <div className="signup-btn-style">
                              <button className="signup-btn" onClick={this.otpsubmit}>
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                        <div className="singup-alreadtmember">
                          <p>
                            Already a member?{' '}
                            <span>
                              {' '}
                              <a href="/customer/signin">Sign in</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey === 3 ? (
                  // {/* Verfication card */}
                  <div className="verficationcardstyle">
                    <div className="card signupcardstyling ">
                      <div className="card-body">
                        <div className="verification_heading">Password Generation</div>
                        <Form className="formstyling">
                          <div class="input-icons">
                            <Form.Group controlId="formBasicEmail">
                              <i class="fa fa-lock" aria-hidden="true"></i>
                              <Form.Control
                                type="password"
                                placeholder="Enter password "
                                className="signin-inputstyle"
                                type="password"
                                name="password"
                                value={this.state.input.password}
                                onChange={this.pwdchange}
                                id="password"
                              />
                              <div className="text-danger">{this.state.errors.password}</div>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <i class="fa fa-lock" aria-hidden="true"></i>
                              <Form.Control
                                type="password"
                                placeholder="confirm password"
                                className="signin-inputstyle"
                                type="password"
                                name="confirm_password"
                                value={this.state.input.confirm_password}
                                onChange={this.pwdchange}
                                id="confirm_password"
                              />
                              <div className="text-danger">{this.state.errors.confirm_password}</div>
                            </Form.Group>
                            <div className="signup-btn-style">
                              <button className="signup-btn" onClick={this.pwdsubmit}>
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey === 4 ? (
                  // {/* Verfication card */}
                  <div className="verficationcardstyle">
                    <div className="card signupcardstyling ">
                      <div className="card-body">
                        <div className="verification_heading">Personal Identification</div>
                        <Form className="formstyling">
                          <div class="input-icons">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                type="number"
                                placeholder="IDENTIFICATION NUMBER"
                                className="signin-inputstyle"
                                name="nationalid"
                                value={this.state.input.nid}
                                onChange={this.nidchange}
                                id="nationalid"
                              />
                              <div className="text-danger">{this.state.errors.nationalid}</div>
                            </Form.Group>
                            {/* <div className="text-or">
                                                                        <span>or</span>
                                                                    </div> */}
                            {/* <Form.Group controlId="formBasicPassword">
                                                                        <Form.Control type="text" placeholder="Iqama Number" className="signin-inputstyle"
                                                                            name="iqamanum"
                                                                            value={this.state.input.nid}
                                                                            onChange={this.nidchange}
                                                                            id="iqamanum"
                                                                        />
                                                                        <div className="text-danger">{this.state.errors.iqamanum}</div>
                                                                    </Form.Group> */}
                            <div className="ninnumberradiobtnstyle" style={{ display: 'flex' }}>
                              <label>
                                <input type="radio" name="identificationnumber" />
                                NIN Number
                              </label>
                              <label>
                                <input type="radio" name="identificationnumber" />
                                Iqama Number
                              </label>
                              {/* <label>Date of birth*</label>
                                                                    <input type="date" value={dateofbirth} name="dateofbirth" onChange={this.handlechange} /> */}
                            </div>
                            <div className="signup-btn-style">
                              <button className="signup-btn" onClick={this.nidsubmit}>
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                        <div className="singup-alreadtmember">
                          <p>
                            Already a member?{' '}
                            <span>
                              {' '}
                              <a href="/customer/signin">Sign in</a>{' '}
                            </span>{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey === 5 ? (
                  // {/* Verfication card */}
                  <div className="verficationcardstyle">
                    <div className="card signupcardstyling ">
                      <div className="card-body">
                        <div className="verification_heading">OTP Verification</div>
                        <label className="mobile-label">Identification OTP</label>
                        <Form className="formstyling">
                          <div class="input-icons">
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                type="number"
                                placeholder="Enter the OTP received"
                                className="signin-inputstyle"
                                name="identificationOTP"
                                value={this.state.idenotp.identificationOTP}
                                onChange={this.idenotpchange}
                                id="identificationOTP"
                              />
                              <div className="text-danger">{this.state.errors.identificationOTP}</div>
                            </Form.Group>
                            <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                              <div className="sign-resendotp">
                                <a href="#"> Resend OTP</a>
                              </div>
                              <div className="otp-comp">
                                <Otp
                                  style={style}
                                  minutes={1}
                                // resendEvent={this.resendEvent}
                                />
                              </div>
                            </div>
                            <div className="signup-btn-style">
                              <button className="signup-btn" onClick={this.idenotpsubmit}>
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey === 6 ? (
                  // {/* Verfication card */}
                  <div className="verficationcardstyle">
                    <div className="card signupcardstyling ">
                      <div className="card-body" style={{ backgroundColor: '#F7F7F7' }}>
                        <div className="dfs-cong">Congratulations !</div>
                        <div className="dfs-name">Dear Mr Abdullah!</div>
                        <div className="dfs-nametxt">Thank you very much for joining Maalem Financing.</div>
                        <div className="dfs-maalemteam">Maalem Financing Team.</div>
                        <div>
                          <button className="dfs-getstarted" onClick={this.getstarted}>
                            Get Started
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
      </div>
    );
  }
}


