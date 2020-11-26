import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import { Otp } from 'react-otp-timer';
export default class customersignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 4,
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
      this.state.idenotp.identificationOTP = '';
      idenotp['identificationOTP'] = '';
      this.setState({
        idenotp: idenotp,
        activekey: 6,
      });
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
      this.setState({
        nid: nid,
        activekey: 5,
      });
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
    this.props.history.push('/agent/customer/profile');
  };
  viewdashboard = () => {
    this.props.history.push('/agent/dashboard');
  };
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
    console.log('this.state.user');
    console.log(this.state.user);
    console.log('this.state.user');
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12" style={{ width: '97vw' }}>
            <div className="card" style={{ borderRadius: '10px', width: '97vw', marginLeft: '20px', marginTop: '20px' }}>
              <button className="dfs-savebtn" onClick={this.logout} style={{ top: '20px', width: '40px ', margin: '30px' }}>
                <span class="glyphicon glyphicon-log-out"></span>
              </button>
              <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
                <div className="jarir-img" width="150" height="50"></div>
                <br />
              </div>
            </div>
            <br />
            <div className="col-sm-6">
              <div className="col-sm-6 verficationcardstyle">
                <div className="card" style={{ borderRadius: '10px' }}>
                  <div className="card-body" style={{ height: '60vh', borderRadius: '10px' }}>
                    <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
                      Agent Details
                    </div>
                    <div
                      style={{
                        textAlign: 'right',
                        fontSize: '1.4rem',
                        fontWeight: '100px',
                        paddingRight: '40px',
                        'font-weight': 'normal !important',
                      }}
                    >
                      Junaid Qazi
                      <br />
                      <br />
                      sales.jarir@maalem.com.sa
                      <br />
                      <br />
                      +966 5677 87698
                      <br />
                      <br />
                      Jarir Book Store
                      <br />
                      <br />
                    </div>

                    <div className="signup-btn-style">
                      <div>
                        <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                          Dashboard
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              {this.state.activekey == 4 ? (
                // {/* Verfication card */}

                <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '50px', width: '45rem' }}>
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <div className="card-body" style={{ height: '35vh', borderRadius: '10px' }}>
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

                          <div className="ninnumberradiobtnstyle" style={{ display: 'flex' }}>
                            <label>
                              <input type="radio" name="identificationnumber" id="identificationnumber" />
                              NIN Number
                            </label>
                            <label>
                              <input type="radio" name="identificationnumber" id="identificationnumber" />
                              Iqama Number
                            </label>
                          </div>
                          <div className="signup-btn-style">
                            <button className="signup-btn" onClick={this.nidsubmit}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              ) : this.state.activekey == 5 ? (
                // {/* Verfication card */}

                <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '150px', width: '45rem' }}>
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <div className="card-body" style={{ height: '35vh', borderRadius: '10px' }}>
                      <div className="verification_heading">OTP Verification</div>
                      {/* <label className="mobile-label">Identification OTP</label> */}
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
              ) : this.state.activekey == 6 ? (
                <div className="verficationcardstyle" style={{ height: '40vh', borderRadius: '10px', marginTop: '150px', width: '45rem' }}>
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <div className="card-body" style={{ height: '35vh', borderRadius: '10px' }}>
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
    );
  }
}
