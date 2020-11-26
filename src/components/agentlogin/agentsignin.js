import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';

import { Otp } from 'react-otp-timer';
import { login, logout } from '../utils/index';
import axios from "axios";
import config from "../../assets/config/config";
export default class Customersigin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      input: {},
      errors: {},
      changeotp: 'sentopt',
      otp: {},
    };
  }


  handleSubmit = event => {

    let errors = {};
    // const encryptKey = 'ewfWE@#%$rfdsefgdsf';
    let encryptedPassword = this.state.input.password; // encrypt(this.state.password);
    // console.log(encryptedPassword);

    let requestUrl =
      'http://122.166.172.240:3031/api/iord-agents?email.equals=' + this.state.input.email + '&password.equals=' + encryptedPassword;
    console.log(requestUrl);
    console.log(window.sessionStorage.getItem('iord_id_token'));
    fetch(requestUrl, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())

      .then(result => {
        console.log(result)
        let inputFlow = result[0];
        console.log(inputFlow)
        if (inputFlow) {
          window.sessionStorage.setItem('agent', inputFlow);
          window.sessionStorage.setItem('agentId', inputFlow.id);
          window.sessionStorage.setItem('agentName', inputFlow.firstName + ' ' + inputFlow.lastName);
          window.sessionStorage.setItem('vendor', inputFlow.vendor);
          window.sessionStorage.setItem('vendorId', inputFlow.vendorId);
          window.sessionStorage.setItem('email', inputFlow.email);
          window.sessionStorage.setItem('mobile', inputFlow.mobile);
          window.sessionStorage.setItem('location', inputFlow.location);
          login()
          this.todashboard();
        } else {
          errors['email'] = 'Please enter valid email or password.';

          this.setState({
            errors: errors,
          });

          console.log('Invalid email or password');
        }
      });
  };
  
  getsignupdata = async () => {
    await axios.get(config.STRAPI_URL + '/customer-signins').then(res => {
      // console.log(res,'signupdata');
      // window.sessionStorage.setItem('language', 'ar');
      this.setState({ signupdata: res.data });
      console.log(res.data);
    });
  };

  componentDidMount() {
    // window.sessionStorage.setItem('language', 'ar');
    this.getsignupdata();
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }
    logout();
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

  // handleSubmit = event => {
  //   event.preventDefault();

  //   if (this.validate()) {
  //     let input = {};
  //     let inputFlow = this.state.input.email === 'sales.jarir@maalem.com.sa' ? 'JARIR' : 'STC';
  //     window.sessionStorage.setItem('vendor', inputFlow);
  //     window.sessionStorage.setItem('email', this.state.input.email);
  //     input['password'] = '';
  //     this.props.history.push('/agent/dashboard');
  //     this.setState({ input: input });
  //   }
  // };



  validate() {
    let input = this.state.input;

    let errors = {};

    let isValid = true;
    console.log(this.state.input)
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

    if (!input['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password.';
    }

    if (typeof input['password'] !== 'undefined') {
      if (input['password'].length < 6) {
        isValid = false;
        errors['password'] = 'Please add at least 6 charachter.';
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  radiochange = event => {
    this.setState({
      changeotp: event.target.value,
    });
  };

  //--------------------------------OTP Validation Start--------------------------------------------------//

  //-------------------------------OTP Validation END-----------------------------------------------------//

  todashboard = () => {
    this.props.history.push('/agent/dashboard');
  };
  render() {
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
          <div className="rows">
            <div className="col-sm-12">
              <div className="col-md-6 col-sm-12 " style={{ 'margin-top': '16%' }}>
                <div className="maalme-heading">
                  <h3>Welcome to Maalem Financing</h3>
                  <h3>Login to get your Finance</h3>
                </div>

                <div className="allproductcls">

                  <ul>
                    <li>Consumer Loan</li>
                    <li>Business Loan</li>
                    <li>SME Loan</li>
                  </ul>

                </div>

              </div>

              <div className="col-md-6 col-sm-12 " style={{ 'margin-top': '7%' }}>
                {this.state.activekey === 1 ? (
                  <div class="card cardstyle">
                    <div class="card-body">
                      <div className="logintxt">Agent Sign In</div>
                      <div className="login_input">
                        <input
                          type="text"
                          placeholder="Enter Email id or Mobile Number"
                          name="email"
                          style={{ padding: '0.5rem' }}
                          value={this.state.input.email}
                          onChange={this.handleChange}
                          id="email"
                        />
                        <div className="text-danger">{this.state.errors.email}</div>
                      </div>
                      <div class="login_input">
                        <input
                          type="password"
                          name="password"
                          value={this.state.input.password}
                          onChange={this.handleChange}
                          class="form-control"
                          placeholder="Enter password"
                          id="password"
                        />
                        <div className="text-danger">{this.state.errors.password}</div>
                      </div>

                      <div className="login_input_drop">
                        <select style={{width:'100%'}}>
                          <option value="">Select Location</option>
                          <option value="hayatmall">Hayat Mall</option>
                          <option value="alizdhhar">Al Izdhhar</option>
                          <option value="garnatha">Garnatha</option>
                        </select>
                      </div>

                      <div className="login_nextbtn">
                        <button className="signup-btn" onClick={this.handleSubmit}>
                          Submit
                        </button>
                      </div>

                      <div className="singup-alreadtmember" 
                      style={{ 'margin-top': '20px' }}>
                        <p>
                          New Agent to Maalem?{' '}
                          <span>
                            {' '}
                            <a href="/agent/signup">Sign Up</a>{' '}
                          </span>{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : // close
                  this.state.activekey === 2 ? (
                    <div class="card customerpwd_cardstyle">
                      <div class="card-body">
                        <div className="logintxt">Sign in</div>
                        <div className="customerotp_radiobtn">
                          <div className="customerpwdstyle">
                            <label>
                              <input type="radio" style={{ 'margin-right': '6px' }} name="otpoption" />
                            Send OTP on mobile no
                          </label>
                          </div>

                          <div to="/customerresendotp" className="customerpwdstyle">
                            <label>
                              <input type="radio" style={{ 'margin-right': '6px' }} name="otpoption" />
                            Send OTP on Email Id
                          </label>
                          </div>
                        </div>
                        <div className="customerotp_nextbtn">
                          <button className="signup-btn" onClick={this.gotootp}>
                            submit
                        </button>
                        </div>
                      </div>
                    </div>
                  ) : // close
                    this.state.activekey === 3 ? (
                      <div class="card customerpwd_cardstyle">
                        <div class="card-body">
                          <div className="logintxt">Signin</div>
                          <div className="pwd_input">
                            <input type="password" placeholder="Enter Password" autoComplete="off" />
                          </div>
                          <div className="customerpwd_forgetpwd">
                            <a href="#"> Forgot password</a>
                          </div>
                          <div className="customerpwd_nextbtn">
                            <button className="signup-btn" onClick={this.todashboard}>
                              Submit
                        </button>
                          </div>
                        </div>
                      </div>
                    ) : this.state.activekey === 4 ? (
                      <div class="card customerpwd_cardstyle">
                        <div class="card-body">
                          <div className="logintxt">Sign in with OTP</div>
                          <div className="pwd_input">
                            <input
                              type="number"
                              placeholder="Enter OTP"
                              name="mobile"
                              value={this.state.otp.mobile}
                              onChange={this.otpchange}
                              id="mobile"
                            />
                            <div className="text-danger">{this.state.errors.mobile}</div>
                          </div>

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

                          <div className="customerpwd_nextbtn">
                            <button className="signup-btn" onClick={this.otpsubmit}>
                              Submit
                        </button>
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