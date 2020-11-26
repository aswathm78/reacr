import React, { Component } from 'react';
import '../../assets/css/signup.css';
import Footer from '../../components/footer/footer';
import GoogleLogin from 'react-google-login';
import FacebookLogin from '../../helpers/facebook';
import Swal from 'sweetalert2';
import Header from '../../components/header/header';
class Signupform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  responseGoogle = response => {
    console.log(response);
  };

  componentClicked = () => console.log('clicked');

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
      fields['username'] = '';
      fields['emailid'] = '';
      fields['mobileNo'] = '';
      fields['password'] = '';
      this.setState({ fields: fields });
      Swal.fire('success', 'Successfully registered!', 'success');
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['username']) {
      formIsValid = false;
      errors['username'] = '*Please enter your Full name.';
    }

    if (typeof fields['username'] !== 'undefined') {
      if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors['username'] = '*Please enter alphabet characters only.';
      }
    }

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

    if (!fields['mobileNo']) {
      formIsValid = false;
      errors['mobileNo'] = '*Please enter your mobile no.';
    }

    if (typeof fields['mobileNo'] !== 'undefined') {
      var mobilePattern = new RegExp('/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/');
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
        <div className="container">
          <div className="signup">
            <h3>Sign Up</h3>
            <form name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
              <div class="form-group">
                <label>Full name*</label>
                <div class="login_emailfield">
                  <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                </div>
                <div className="errorMsg">{this.state.errors.username}</div>
              </div>

              <div class="form-group">
                <label>Email*</label>
                <div class="login_emailfield">
                  <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                </div>
                <div className="errorMsg">{this.state.errors.emailid}</div>
              </div>

              <div class="form-group">
                <label>Password*</label>
                <div class="login_emailfield">
                  <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                </div>
                <div className="errorMsg">{this.state.errors.password}</div>
              </div>

              <div class="form-group">
                <label>Phone number*</label>
                <div class="login_emailfield">
                  <input type="text" name="mobileNo" value={this.state.fields.mobileNo} onChange={this.handleChange} />
                </div>
                <div className="errorMsg">{this.state.errors.mobileNo}</div>
              </div>
              {/* <p><input type="checkbox" name="terms"/> I agree to the<a href="">Terms</a> and <a href="">Privacy Policy</a></p> */}

              <button class="btn btn-primary signbtn">Sign Up</button>
              <p style={{ textAlign: 'center' }}>or</p>
            </form>

            <div class="row">
              <div class="socialmedia">
                <div class="fbcls">
                  <FacebookLogin />
                </div>

                <div class="googlecls">
                  <GoogleLogin
                    clientId="716649765723-dqev4n0sqhvf4g5e7bj6tujpi8s2mriq.apps.googleusercontent.com"
                    buttonText=""
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                      <button style={{ backgroundColor: 'white' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i class="fab fa-google fa-2x"></i>
                      </button>
                    )}
                  />
                </div>

                <div class="linkedin"></div>
              </div>
            </div>

            <div class="">
              <p>
                Already have an account?
                <a
                  onClick={() => {
                    this.props.history.push('/customer/signin');
                  }}
                  style={{ 'padding-left': '25px' }}
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signupform;
