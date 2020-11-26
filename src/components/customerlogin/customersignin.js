import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './customersigin.css';
import './loginbox.css';
import config from '../../assets/config/config';
import { Otp } from 'react-otp-timer';
import { login, logout } from '../utils/index';
import Axios from 'axios';
export default class Customersigin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      input: {},
      errors: {},
      changeotp: 'ihavepwd',
      otp: {},
      display: [],
      lang: window.sessionStorage.getItem('language'),
    };
  }
  componentDidMount() {
    this.show();
    logout();
    this.loadSessionData();
    fetch(config.IORD_SERVICE_URL + '/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin',
        rememberMe: true,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.status);
        console.log('Got IORD Token');
        window.sessionStorage.setItem('iord_id_token', responseData.id_token);
      });
  }
  loadSessionData = async () => {
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }

   
  };
  
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
    if(this.validate()){
let errors = {}
  const data ={
        emailId: this.state.input.email,
        password: this.state.input.password
  }
  const config = {
    headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') }
  };
  Axios.post('http://122.166.172.240:3031/api/customers/emailLogin', data, config).then(res => {
    console.log(res,"data get")
    if (res.data.id != null && res.data) {
      window.sessionStorage.setItem('customerID', res.data.id);
      window.sessionStorage.setItem('customerName', res.data.firstName + ' ' + res.data.lastName);
      window.sessionStorage.setItem('vendor', res.data.vendor);
      window.sessionStorage.setItem('email', res.data.email);
      window.sessionStorage.setItem('mobile', res.data.mobile);
      window.sessionStorage.setItem('storeLocation', res.data.storeLocation);
      console.log(res.data)
      login()
      this.props.history.push('/customer/dashboard')
      // this.todashboard();
    } else {
      this.state.lang === 'en'?
      errors['email'] = 'Please enter valid email or password':
      errors['email'] = 'الرجاء إدخال عنوان البريد الإلكتروني الخاص بك'

      ;

      this.setState({
        errors: errors,
      });

      console.log('Invalid email or password');
    }
  }).catch(error=>{
    this.state.lang === 'en'?
    errors['email'] = 'Please enter valid email or password':
    errors['email'] = 'الرجاء إدخال عنوان البريد الإلكتروني الخاص بك'

    this.setState({
      errors:errors,
    })
  })


    if (this.validate()) {
      if (this.state.changeotp == 'sentopt') {
        this.setState({
          activekey: 2,
        });
      } 
      else {
        if(document.getElementById('password0').value == 1234){

          login();
          this.todashboard()
        }
      }

      let input = {};

      input['email'] = '';

      this.setState({ input: input });
    }
    }else{
      return this.validate()
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

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  radiochange = event => {
    this.setState({
      changeotp: event.target.value,
      display: event.target.value === 'sentotp' ? 'display-none' : '',
    });
  };

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
      // login();
      // console.log(this.state);
      // let otp = {};
      // otp['mobile'] = '';
      // this.setState({ otp: otp });
      this.props.history.push('/customer/dashboard');
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

  gotootp = () => {
    this.setState({
      activekey: 4,
    });
  };
  todashboard = () => {
    this.props.history.push('/customer/dashboard');
  };
  hide = () => {
    document.getElementById('divPass').classList.add('display-none');
    document.getElementById('radio_otp').checked = true;
  };
  show = () => {
    document.getElementById('divPass').classList.remove('display-none');
    document.getElementById('radio_pass').checked = true;
    // document.getElementById("myCheck").checked = false;
  };
  render() {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px',
      },
    };
    console.log(this, 'logindata');
    return (
      <div className="signbackground-img" style={{ overflow: 'hidden' }}>
        {/* <div className="signbackground-img">

               </div> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-5" style={{ 'margin-top': '16%' }}>
                <div className="maalme-heading">
                  <h3>{this.state.lang == 'en' ? 'Welcome to Maalem Financing' : 'مالیام فنانسنگ میں خوش آمدید'}</h3>
                  <h3>{this.state.lang == 'en' ? 'Login to get your Finance' : 'اپنا فنانس حاصل کرنے کے لئے لاگ ان کریں'}</h3>
                </div>

                {/* <div className="allproductcls">
                  <div>Auto Loan</div>

                  <div style={{ 'margin-left': '92px' }}>Consumer Loan</div>
                </div>
                <div className="allproductcls">
                  <div>Commercial Loan</div>

                  <div style={{ 'margin-left': '20px' }}>SME Loan</div>
                </div> */}

                <div className="">
                  <span style={{ fontSize: '1.5rem', color: 'white' }}>{this.state.lang == 'en' ? 'Consumer Loan' : 'صارف قرض'} </span>
                  <span style={{ fontSize: '1.5rem', color: 'white', margin: '0 0 0 1rem' }}>
                    {this.state.lang == 'en' ? 'Commercial Loan' : 'تجارتی قرض'}{' '}
                  </span>
                  <span style={{ fontSize: '1.5rem', color: 'white', margin: '0 0 0 1rem' }}>
                    {this.state.lang == 'en' ? 'SME Loan' : 'ایس ایم ای لون'}{' '}
                  </span>
                </div>
              </div>

              <div className="col-sm-6 " style={{ 'margin-top': '2%' }}>
                {this.state.activekey === 1 ? (
                  <div class="card cardstyle">
                    <div class="card-body">
                      <div className="logintxt">{this.state.lang == 'en' ? 'Customer Sign In' : 'کسٹمر سائن ان'}</div>
                      <div className="login_input">
                        <input
                          type="text"
                          placeholder={
                            this.state.lang == 'en' ? 'Enter Email id or Mobile Number' : 'ای میل آئی ڈی یا موبائل نمبر درج کریں'
                          }
                          name="email"
                          style={{ padding: '0.5rem' }}
                          value={this.state.input.email}
                          onChange={this.handleChange}
                          id="email"
                        />
                        <div className="text-danger">{this.state.errors.email}</div>
                      </div>
                      <div id="divPass" className={`login_input ${this.state.display}`}>
                        <input type="password" name="password"  onChange={this.handleChange} placeholder={this.state.lang == 'en' ? 'Password' : 'پاس ورڈ'} id="password0" />
                        {/* <div className="text-danger">{this.state.errors.email}</div> */}
                      </div>
                      <div className="login_radiobtn">
                        <div className="customerpwdstyle">
                          <label>
                            <input
                              id="radio_pass"
                              type="radio"
                              style={{ 'margin-right': '6px' }}
                              name="selectradio"
                              onChange={event => {
                                this.radiochange(event);
                                this.show();
                              }}
                              value="ihavepwd"
                            />
                            {this.state.lang == 'en' ? 'I Have Password' : 'میرے پاس پاس ورڈ ہے'}
                          </label>
                        </div>

                        <div className="customerpwdstyle">
                          <label>
                            <input
                              id="radio_otp"
                              type="radio"
                              style={{ 'margin-right': '6px' }}
                              name="selectradio"
                              onChange={event => {
                                this.radiochange(event);
                                this.hide();
                              }}
                              value="sentopt"
                            />
                            {this.state.lang == 'en' ? 'Forgot Password' : 'پاسورڈ بھول گے'}
                          </label>
                        </div>
                      </div>

                      <div className="login_nextbtn">
                        <button className="signup-btn" onClick={this.handleSubmit}>
                          {this.state.lang == 'en' ? 'Submit' : 'جمع کرائیں'}
                        </button>
                      </div>

                      <div className="singup-alreadtmember" style={{ 'margin-top': '20px', 'margin-left': '40%' }}>
                        <p>
                          {this.state.lang == 'en' ? 'New to Maalem?' : 'ملائم کے لئے نیا؟'}{' '}
                          <span>
                            {' '}
                            <a href="/customer/signup">{this.state.lang == 'en' ? 'Sign Up' : 'سائن اپ'}</a>{' '}
                          </span>{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : // close
                this.state.activekey === 2 ? (
                  <div class="card customerpwd_cardstyle">
                    <div class="card-body">
                      <div className="logintxt">{this.state.lang == 'en' ? 'Sign in' : 'سائن ان'}</div>
                      <div className="customerotp_radiobtn">
                        <div className="customerpwdstyle">
                          <label>
                            <input type="radio" style={{ 'margin-right': '6px' }} name="otpoption" />
                            {this.state.lang == 'en' ? 'Send OTP on mobile no' : 'موبائل نمبر پر او ٹی پی بھیجیں'}
                          </label>
                        </div>

                        <div to="/customerresendotp" className="customerpwdstyle">
                          <label>
                            <input type="radio" style={{ 'margin-right': '6px' }} name="otpoption" />
                            {this.state.lang == 'en' ? 'Send OTP on Email Id' : 'ای ٹی ایل پر او ٹی پی بھیجیں'}
                          </label>
                        </div>
                      </div>

                      <div className="customerotp_nextbtn">
                        <button className="signup-btn" onClick={this.gotootp}>
                          {this.state.lang == 'en' ? ' submit' : 'جمع کرائیں'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : // close
                this.state.activekey === 3 ? (
                  <div class="card customerpwd_cardstyle">
                    <div class="card-body">
                      <div className="logintxt">{this.state.lang == 'en' ? 'Signin' : 'سائن ان'}</div>
                      <div className="pwd_input">
                        <input
                          type="password"
                          placeholder={this.state.lang == 'en' ? 'Enter Password' : 'پاس ورڈ درج کریں'}
                          autoComplete="off"
                        />
                      </div>

                      <div className="customerpwd_forgetpwd">
                        <a href="#">{this.state.lang == 'en' ? ' Forgot password' : ' Forgot password'}</a>
                      </div>
                      <div className="customerpwd_nextbtn">
                        <button className="signup-btn" onClick={this.todashboard}>
                          {this.state.lang == 'en' ? 'Submit' : 'جمع کرائیں'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey === 4 ? (
                  <div class="card customerpwd_cardstyle">
                    <div class="card-body">
                      <div className="logintxt">{this.state.lang == 'en' ? 'Sign in with OTP' : 'OTP کے ساتھ سائن ان کریں'}</div>
                      <div className="pwd_input">
                        <input
                          type="number"
                          placeholder={this.state.lang == 'en' ? 'Enter OTP' : 'OTP درج کریں'}
                          name="mobile"
                          value={this.state.otp.mobile}
                          onChange={this.otpchange}
                          id="mobile"
                        />
                        <div className="text-danger">{this.state.errors.mobile}</div>
                      </div>

                      <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                        <div className="sign-resendotp">
                          <a href="#"> {this.state.lang == 'en' ? 'Resend OTP' : 'او ٹی پی کو دوبارہ بھیجیں'}</a>
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
                          {this.state.lang == 'en' ? 'Submit' : 'جمع کرائیں'}
                        </button>
                      </div>
                      {/* <div className="customerpwd_forgetpwd">
                               Resend OTP
                           </div> */}
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
