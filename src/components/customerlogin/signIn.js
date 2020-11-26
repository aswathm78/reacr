import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './customersigin.css';
export default class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      input: {},
      errors: {},
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

  handleSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};

      input['name'] = '';

      input['phonenumber'] = '';

      input['email'] = '';

      input['password'] = '';

      input['confirm_password'] = '';

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

    if (!input['password']) {
      isValid = false;

      errors['password'] = 'Please enter your password.';
    }

    if (!input['confirm_password']) {
      isValid = false;

      errors['confirm_password'] = 'Please enter your confirm password.';
    }

    if (typeof input['password'] !== 'undefined' && typeof input['confirm_password'] !== 'undefined') {
      if (input['password'] != input['confirm_password']) {
        isValid = false;

        errors['password'] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div>
        {/* <div className="signbackground-img">

               </div> */}
        <div className="container">
          <div className="col-sm-12">
            <div className="col-sm-6 " style={{ 'margin-top': '16%' }}>
              <div className="">
                <h2>Welcome to Maalem</h2>
              </div>
              <div className="">
                <h3>Login to get your finance</h3>
              </div>

              <div className="allproductcls">
                <div>Auto Loan</div>

                <div style={{ 'margin-left': '80px' }}>Consumer Loan</div>
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
                    <div className="signup-heading">Sign Up</div>
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
                          type="text"
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

                      <Form.Group controlId="formBasicPassword">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="signin-inputstyle"
                          type="password"
                          name="password"
                          value={this.state.input.password}
                          onChange={this.handleChange}
                          id="password"
                        />
                        <div className="text-danger">{this.state.errors.password}</div>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <Form.Control
                          type="password"
                          placeholder="Re-Enter password"
                          className="signin-inputstyle"
                          type="password"
                          name="confirm_password"
                          value={this.state.input.confirm_password}
                          onChange={this.handleChange}
                          id="confirm_password"
                        />
                        <div className="text-danger">{this.state.errors.confirm_password}</div>
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
                      Already a member?
                      <span>
                        <a href="/customersignin">Sign in</a>
                      </span>
                    </p>
                  </div>
                </div>
              ) : this.state.activekey === 2 ? (
                // {/* Verfication card */}

                <div className="verficationcardstyle">
                  <div className="card signupcardstyling ">
                    <div className="card-body">
                      <div className="verification_heading">Verfication</div>
                      <Form className="formstyling">
                        <div class="input-icons">
                          <Form.Group controlId="formBasicEmail">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <Form.Control type="text" placeholder="Enter Mobile OTP" className="signin-inputstyle" />
                          </Form.Group>
                          <div className="sign-resendotp">
                            <a href="#"> Resend Mobile OTP</a>
                          </div>

                          <Form.Group controlId="formBasicPassword">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                            <Form.Control type="text" placeholder="Enter Email OTP" className="signin-inputstyle" />
                          </Form.Group>
                          <div className="sign-resendotp">
                            <a href="#"> Resend Email OTP</a>
                          </div>
                          <div className="signup-btn-style">
                            <button className="signup-btn">Submit</button>
                          </div>
                        </div>
                      </Form>
                      <div className="singup-alreadtmember">
                        <p>
                          Already a member?
                          <span>
                            <a href="/customersignin">Sign in</a>
                          </span>
                        </p>
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
