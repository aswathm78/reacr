import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './admin.css';

import { Otp } from 'react-otp-timer';
import { login, logout } from '../utils/index';
import {Link} from 'react-router-dom';
export default class CreatePassword extends Component {
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
  componentDidMount() {
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

  handleSubmit = event => {
      
    event.preventDefault();

    if (this.validate()) {
      let input = {};

      // console.log('input ====================');

      let inputFlow = this.state.input.email === 'sales.jarir@maalem.com.sa' ? 'JARIR' : 'STC';

      window.sessionStorage.setItem('vendor', inputFlow);
      window.sessionStorage.setItem('email', this.state.input.email);

      // console.log('input E   ====================');

      input['password'] = '';
      
      this.setState({ input: input });
     alert('New password created');
    }
  };

  validate() {
    let input = this.state.input;

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
    this.props.history.push('/business/businesstable');
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
      <Container>
        <div className="container">
          <div className="rows">
          <div className="col-sm-12">
              <div className="col-sm-6 " style={{ 'margin-top': '16%' }}>
                <div className="maalme-heading">
                  <h3>Welcome to Maalem Financing</h3>
             
                </div>

                <div className="allproductcls">
                  <div></div>

                  <div style={{ 'margin-left': '92px' }}></div>
                </div>
                <div className="allproductcls">
                  <div></div>

                  <div style={{ 'margin-left': '20px' }}></div>
                </div>
              </div>
           
              <div className="col-sm-6  login" style={{marginTop:'2%' }}>
                {this.state.activekey === 1 ? (
                  <div class="card cardstyle" style={{marginLeft:'0%'}}>
                    <div class="card-body">
                      <div className="logintxt">Create New Password</div>
                      <div className="login_input">
                        <input
                        type="password"
                        name="password"
                        value={this.state.input.password}
                        onChange={this.handleChange}
                        class="form-control"
                        placeholder="Enter new Password"
                        id="password"
                        />
                        <div className="text-danger">{this.state.errors.password}</div>
                      </div>
                      <div class="login_input">
                        <input
                          type="password"
                          name="password"
                          value={this.state.input.password}
                          onChange={this.handleChange}
                          class="form-control"
                          placeholder="Confirm new Password"
                          id="password"
                        />
                        <div className="text-danger">{this.state.errors.password}</div>
                      </div>

                      

                      <div className="login_nextbtn">
                        <button  className="signup-btn" onClick={this.handleSubmit}>
                          Submit
                        </button>
                      </div>

                      <div className="singup-alreadtmember" style={{ 'margin-top': '20px', 'margin-left': '40%' }}>
                        <p>
                          To continue{' '}
                          <span>
                            {' '}
                            <a href="/agent/adminsignin">Sign in</a>{' '}
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
        </Container>
      </div>
    );
  }
}
