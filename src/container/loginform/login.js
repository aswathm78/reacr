import React, { Component } from 'react';
import '../../assets/css/login.css';
import $ from 'jquery';

import Header from '../../components/header/header';
class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  componentDidMount() {
    $('.toggle-password').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');
      var input = $($(this).attr('toggle'));
      if (input.attr('type') == 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
    });
  }

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};

      fields['emailid'] = '';

      fields['password'] = '';
      this.setState({ fields: fields });
      alert('Form submitted');
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['emailid']) {
      formIsValid = false;
      errors['emailid'] = '*Please enter your email-ID.';
    }

    if (typeof fields['emailid'] !== 'undefined') {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields['emailid'])) {
        formIsValid = false;
        errors['emailid'] = '*Please enter valid email-ID.';
      }
    }

    if (typeof fields['mobileNo'] !== 'undefined') {
      var mobilePattern = new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
      if (!mobilePattern.test(nid['mobileNo'])) {
        formIsValid = false;
        errors['mobileNo'] = 'Please enter valid mobile number!';
      }
    }

    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = '*Please enter your password.';
    }

    if (typeof fields['password'] !== 'undefined') {
      if (!fields['password'].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors['password'] = '*Please enter secure and strong password.';
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div class="container">
          <div class="login">
            <h3>Log In</h3>
            <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
              <div class="form-group">
                <label>Email*</label>
                <div class="login_emailfield">
                  <input
                    type="text"
                    name="emailid"
                    value={this.state.fields.emailid}
                    onChange={this.handleChange}
                    placeholder="E-mail Address"
                  />
                </div>

                <div className="errorMsg">{this.state.errors.emailid}</div>
              </div>

              <div class="form-group">
                <label>Password*</label>
                <div className="login_password">
                  <input
                    type="password"
                    id="password-field"
                    name="password"
                    value={this.state.fields.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>

                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <div class="forgetpwd">
                <p>
                  <a href="">Forgot your password?</a>
                </p>
              </div>
              <button class="btn btn-primary loginbtn">Login</button>
              <p style={{ textAlign: 'center' }}>or</p>
            </form>

            <div class="dotacoount">
              <p>
                Don't have an account?{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    this.props.history.push('/sign-up');
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
