import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './customersigin.css';
import { Otp } from 'react-otp-timer';
import axios from 'axios';
import config from '../../assets/config/config';
import Header2 from '../header/header2';
import CustomerApi from './CustomerApi';
import { login, logout } from '../utils/index';
export default class customersignup extends Component {
  constructor(props) {
    super(props);
    let yas;
    this.state = {
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
      signupdata: [],
      customerPersonalData: {},
      customerAddressData: {},
      yas,
    };
  }

  componentDidMount() {
    this.getsignupdata();
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }
  }

  getsignupdata = async () => {
    await axios.get(config.STRAPI_URL + '/customer-signups').then(res => {
      // console.log(res,'signupdata');
      this.setState({ signupdata: res.data });
    });
  };

  handleChange = event => {
    let input = this.state.input;

    input[event.target.name] = event.target.value;
    // if (window.sessionStorage.getItem('language') === "ar") {
    //     this.arabicValue(input)
    // }
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
      this.setState({ activekey: 4 });
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
    console.log(this.state);
    event.preventDefault();
    if (this.idenotpvalidate()) {
      let idenotp = {};
      idenotp['identificationOTP'] = '';
      // this.setState({ idenotp: idenotp, activekey: 6 });
      event.preventDefault();

      // let ninid = 1029987532;
      let ninid = this.state.nid.nin;
      let mobileOtp = this.state.idenotp.identificationOTP;
      fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-apis?ninId.equals=' + ninid + '&mobileOtp.equals=' + mobileOtp, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        },
      })
        // .then((response) => response.json())
        .then(response => {
          if (response.status == 200) {
            //login success
            let jsonResp = response.json().then(data => {
              let addressDataObj = this.getaddress();
              let custPersonalInformation = {
                ...data[0],
                mobileNumber: this.state.input.phonenumber,
                emailId: this.state.input.email,
                password: this.state.pwd.password,
                ...addressDataObj,
              };
              this.state.customerPersonalData = custPersonalInformation;
              window.sessionStorage.setItem('customerPersonalData', JSON.stringify(custPersonalInformation));

              console.log(' JSON.stringify(this.state.customerPersonalData): ' + JSON.stringify(this.state.customerPersonalData));
              this.addCustomerFunction(custPersonalInformation);
            });
            let addressDataObj = this.getaddress();
            console.log(addressDataObj);
            this.setState({
              idenotp: null,
              activekey: 6,
            });
          } else {
            let errors = {};
            errors['identificationOTP'] = 'Please enter Valid NIN/Iqama & OTP';
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

  addCustomerFunction = async data => {
    let check = await CustomerApi.checkCustomer(data);
    console.log(' ADDING NEW CUSTOMER: ' + check);
    if (check) {
      let stat = await CustomerApi.addCustomer(data);
    } else {
      let stat = await CustomerApi.updateCustomer(data);
    }
  };

  getaddress = () => {
    let ninid = this.state.nid.nin;
    let custAddressData = {};
    fetch(config.IORD_SERVICE_URL + '/api/iord-tahkum-addresses?ninno.equals=' + ninid, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
      },
    })
      // .then((response) => response.json())
      .then(response => {
        console.log(response, 'response');
        if (response.status == 200) {
          //login success
          let jsonResp = response.json().then(data => {
            custAddressData = data[0];
            this.state.customerAddressData = custAddressData;
            window.sessionStorage.setItem('customerAddressData', JSON.stringify(custAddressData));
            console.log('::custAddressData:: ', custAddressData);
          });

          this.setState({
            idenotp: null,
            activekey: 6,
          });
        } else {
          let errors = {};
          errors['identificationOTP'] = 'Please enter Valid NIN/Iqama & OTP';
          this.setState({
            errors: errors,
          });
        }
      });
    return custAddressData;
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
    console.log('nid     ', this.nidvalidate());
    if (this.nidvalidate()) {
      console.log(this.state);
      // let nid = {};
      // nid['nin'] = '';
      this.setState({ activekey: 5 });
    }
  };

  nidvalidate() {
    let nid = this.state.nid;
    let errors = {};
    let isValid = true;
    if (!nid['nin']) {
      isValid = false;
      errors['nin'] = 'Please enter 10 digits NID / Iquama number.';
    }

    // if (!nid["iqamanum"]) {
    //     isValid = false;
    //     errors["iqamanum"] = "Please enter 10 digits NID number";
    // }

    if (typeof nid['nin'] !== 'undefined') {
      var pattern = new RegExp('^\\d{10}$');

      if (!pattern.test(nid['nin'])) {
        isValid = false;

        errors['nin'] = 'Please enter valid number.';
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
    console.log(this.state.error);
    return isValid;
  }
  //-----------------------------National identification number validation end--------------------------//

  handleSubmit = event => {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);
      this.setState({ activekey: 2 });
    }
  };

  validate() {
    let input = this.state.input;

    let errors = {};

    let isValid = true;

    if (!input['name']) {
      isValid = false;
      errors['name'] = 'Please enter your name!';
    }
    if (!input['phonenumber']) {
      isValid = false;

      errors['phonenumber'] = 'Please enter your mobile number!';
    } else {
      var pattern = new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
      if (!pattern.test(input['phonenumber'])) {
        isValid = false;
        errors['phonenumber'] = 'Please enter valid mobile number!';
      }
    }

    // if (!input['email']) {
    //   isValid = false;
    //   errors['email'] = 'Please enter your email Address.';
    // }

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
    login();
    this.props.history.push('/customer/profile');
  };

  arabicValue(txt) {
    this.state.yas = txt.value;
    console.log(txt.value);
    this.state.yas = this.state.yas.replace(/`/g, 'ذ');
    this.state.yas = this.state.yas.replace(/0/g, '۰');
    this.state.yas = this.state.yas.replace(/1/g, '۱');
    this.state.yas = this.state.yas.replace(/2/g, '۲');
    this.state.yas = this.state.yas.replace(/3/g, '۳');
    this.state.yas = this.state.yas.replace(/4/g, '٤');
    this.state.yas = this.state.yas.replace(/5/g, '۵');
    this.state.yas = this.state.yas.replace(/6/g, '٦');
    this.state.yas = this.state.yas.replace(/7/g, '۷');
    this.state.yas = this.state.yas.replace(/8/g, '۸');
    this.state.yas = this.state.yas.replace(/9/g, '۹');
    this.state.yas = this.state.yas.replace(/0/g, '۰');
    this.state.yas = this.state.yas.replace(/q/g, 'ض');
    this.state.yas = this.state.yas.replace(/w/g, 'ص');
    this.state.yas = this.state.yas.replace(/e/g, 'ث');
    this.state.yas = this.state.yas.replace(/r/g, 'ق');
    this.state.yas = this.state.yas.replace(/t/g, 'ف');
    this.state.yas = this.state.yas.replace(/y/g, 'غ');
    this.state.yas = this.state.yas.replace(/u/g, 'ع');
    this.state.yas = this.state.yas.replace(/i/g, 'ه');
    this.state.yas = this.state.yas.replace(/o/g, 'خ');
    this.state.yas = this.state.yas.replace(/p/g, 'ح');
    this.state.yas = this.state.yas.replace(/\[/g, 'ج');
    this.state.yas = this.state.yas.replace(/\]/g, 'د');
    this.state.yas = this.state.yas.replace(/a/g, 'ش');
    this.state.yas = this.state.yas.replace(/s/g, 'س');
    this.state.yas = this.state.yas.replace(/d/g, 'ي');
    this.state.yas = this.state.yas.replace(/f/g, 'ب');
    this.state.yas = this.state.yas.replace(/g/g, 'ل');
    this.state.yas = this.state.yas.replace(/h/g, 'ا');
    this.state.yas = this.state.yas.replace(/j/g, 'ت');
    this.state.yas = this.state.yas.replace(/k/g, 'ن');
    this.state.yas = this.state.yas.replace(/l/g, 'م');
    this.state.yas = this.state.yas.replace(/\;/g, 'ك');
    this.state.yas = this.state.yas.replace(/\'/g, 'ط');
    this.state.yas = this.state.yas.replace(/z/g, 'ئ');
    this.state.yas = this.state.yas.replace(/x/g, 'ء');
    this.state.yas = this.state.yas.replace(/c/g, 'ؤ');
    this.state.yas = this.state.yas.replace(/v/g, 'ر');
    this.state.yas = this.state.yas.replace(/b/g, 'لا');
    this.state.yas = this.state.yas.replace(/n/g, 'ى');
    this.state.yas = this.state.yas.replace(/m/g, 'ة');
    this.state.yas = this.state.yas.replace(/\,/g, 'و');
    this.state.yas = this.state.yas.replace(/\./g, 'ز');
    this.state.yas = this.state.yas.replace(/\//g, 'ظ');
    this.state.yas = this.state.yas.replace(/~/g, ' ّ');
    this.state.yas = this.state.yas.replace(/Q/g, 'َ');
    this.state.yas = this.state.yas.replace(/W/g, 'ً');
    this.state.yas = this.state.yas.replace(/E/g, 'ُ');
    this.state.yas = this.state.yas.replace(/R/g, 'ٌ');
    this.state.yas = this.state.yas.replace(/T/g, 'لإ');
    this.state.yas = this.state.yas.replace(/Y/g, 'إ');
    this.state.yas = this.state.yas.replace(/U/g, '‘');
    this.state.yas = this.state.yas.replace(/I/g, '÷');
    this.state.yas = this.state.yas.replace(/O/g, '×');
    this.state.yas = this.state.yas.replace(/P/g, '؛');
    this.state.yas = this.state.yas.replace(/A/g, 'ِ');
    this.state.yas = this.state.yas.replace(/S/g, 'ٍ');
    this.state.yas = this.state.yas.replace(/G/g, 'لأ');
    this.state.yas = this.state.yas.replace(/H/g, 'أ');
    this.state.yas = this.state.yas.replace(/J/g, 'ـ');
    this.state.yas = this.state.yas.replace(/K/g, '،');
    this.state.yas = this.state.yas.replace(/L/g, '/');
    this.state.yas = this.state.yas.replace(/Z/g, '~');
    this.state.yas = this.state.yas.replace(/X/g, 'ْ');
    this.state.yas = this.state.yas.replace(/B/g, 'لآ');
    this.state.yas = this.state.yas.replace(/N/g, 'آ');
    this.state.yas = this.state.yas.replace(/M/g, '’');
    this.state.yas = this.state.yas.replace(/\?/g, '؟');
    txt.value = this.state.yas;
  }
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
        // console.log('=++=');
        // console.log(window.sessionStorage.getItem('language'));
        // console.log('++');

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
        'font-size': '14px',
      },
      // resendBtn: {
      //     backgroundColor: '#5cb85c',
      //     color: 'white',
      //     border: '1 px solid #ccc'
      // }
    };

    return (
      <>
        <Header2 {...this.props} />
        <div className="signbackground-img" style={{ overflow: 'hidden' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-6 " style={{ 'margin-top': '16%' }}>
                  <div className="maalme-heading">
                    <h3>{welcometext}</h3>
                    <h3>{logintoget}</h3>
                  </div>

                  <div className="allproductcls">
                    <div>{autoloan}</div>
                    <div style={{ 'margin-left': '92px' }}>{consumerloan}</div>
                  </div>
                  <div className="allproductcls">
                    <div>{commertialloan}</div>
                    <div style={{ 'margin-left': '20px' }}>{smeloan}</div>
                  </div>
                </div>

                <div className="col-sm-6 ">
                  {this.state.activekey === 1 ? (
                    <div className="card signupcardstyling">
                      <div className="card-body">
                        <div className="signup-heading" style={arStyle}>
                          <h5 style={{ 'font-weight': 'bold', 'margin-left': '10px' }}>{signupheading}</h5>
                        </div>
                      </div>

                      <Form className="formstyling" onSubmit={this.handleSubmit}>
                        <div class="input-icons">
                          <Form.Group>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <Form.Control
                              type="text"
                              placeholder={youname}
                              className="signin-inputstyle"
                              name="name"
                              value={this.state.input.name}
                              onChange={this.handleChange}
                              id="name"
                              style={arStyle}
                            />
                            <div className="text-danger">{this.state.errors.name}</div>
                          </Form.Group>

                          <Form.Group>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <Form.Control
                              type="number"
                              placeholder={mobilenumber}
                              className="mobile-signin-inputstyle"
                              name="phonenumber"
                              value={this.state.input.phonenumber}
                              onChange={this.handleChange}
                              id="name"
                              style={arStyle}
                            />
                            <div className="text-danger">{this.state.errors.phonenumber}</div>
                          </Form.Group>

                          <Form.Group>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <Form.Control
                              type="email"
                              placeholder={emailid}
                              className="signin-inputstyle"
                              type="text"
                              name="email"
                              value={this.state.input.email}
                              onChange={this.handleChange}
                              id="email"
                              style={arStyle}
                            />
                            <div className="text-danger">{this.state.errors.email}</div>
                          </Form.Group>

                          <div className="signup-btn-style">
                            <button className="signup-btn" onClick={this.changepage}>
                              {submitbtn}
                            </button>
                          </div>
                        </div>
                      </Form>
                      <div className="singup-alreadtmember">
                        <p>
                          {alreadymembertxt}?{' '}
                          <span>
                            {' '}
                            <a href="/customer/signin">{signinlink}</a>{' '}
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : this.state.activekey === 2 ? (
                    // {/* Verfication card */}

                    <div className="verficationcardstyle">
                      <div className="card signupcardstyling ">
                        <div className="card-body">
                          <div className="verification_heading" style={arStyle}>
                            {otpverificationtxt}
                          </div>
                          {/* <label className="mobile-label">Mobile</label> */}
                          <Form className="formstyling">
                            <div class="input-icons">
                              {/* <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter Mobile OTP" className="signin-inputstyle"
                                        name="mobile"
                                        value={this.state.otp.mobile}
                                        onChange={this.otpchange}
                                        id="mobile"
                                    />
                                    <div className="text-danger">{this.state.errors.mobile}</div>
                                </Form.Group> */}
                              {/* <div className="sign-resendotp">
                                      <a href="#" > Resend OTP</a>
                                      <div className="">
                                      </div>
                                  </div> */}
                              {/* <label className="email-label">E-Mail</label> */}
                              <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                  type="number"
                                  placeholder={otpreceviedplaceholder}
                                  className="signin-inputstyle"
                                  name="mobile"
                                  value={this.state.otp.mobile}
                                  onChange={this.otpchange}
                                  id="mobile"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.mobile}</div>
                              </Form.Group>

                              <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                                <div className="sign-resendotp">
                                  <a href="#">{resendotplink}</a>
                                </div>

                                <div className="otp-comp" style={arStyle}>
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
                                  {submitbtn}
                                </button>
                              </div>
                            </div>
                          </Form>
                          <div className="singup-alreadtmember">
                            <p>
                              {alreadymembertxt}?{' '}
                              <span>
                                {' '}
                                <a href="/customer/signin">{signinlink}</a>
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
                          <div className="verification_heading" style={arStyle}>
                            {passwordgenerationheading}
                          </div>
                          <Form className="formstyling">
                            <div class="input-icons">
                              <Form.Group controlId="formBasicEmail">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <Form.Control
                                  type="password"
                                  placeholder={enterpasswordplaceholdertxt}
                                  className="signin-inputstyle"
                                  type="password"
                                  name="password"
                                  value={this.state.input.password}
                                  onChange={this.pwdchange}
                                  id="password"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.password}</div>
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                <Form.Control
                                  type="password"
                                  placeholder={Confirmpasswordtxt}
                                  className="signin-inputstyle"
                                  type="password"
                                  name="confirm_password"
                                  value={this.state.input.confirm_password}
                                  onChange={this.pwdchange}
                                  id="confirm_password"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.confirm_password}</div>
                              </Form.Group>

                              <div className="signup-btn-style">
                                <button className="signup-btn" onClick={this.pwdsubmit}>
                                  {submitbtn}
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
                          <div className="verification_heading">{personalidentificationheading}</div>
                          <Form className="formstyling">
                            <div class="input-icons">
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                  type="number"
                                  placeholder={nationalnumber}
                                  className="signin-inputstyle"
                                  name="nin"
                                  value={this.state.input.nid}
                                  onChange={this.nidchange}
                                  id="nin"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.nin}</div>
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
                                  <input type="radio" checked="true" name="identificationnumber" style={arStyle} />
                                  {ninnumberradiobtn}
                                </label>

                                <label>
                                  <input type="radio" name="identificationnumber" style={arStyle} />
                                  {iqamanumberradiobtn}
                                </label>

                                {/* <label>Date of birth*</label>
                                                                    <input type="date" value={dateofbirth} name="dateofbirth" onChange={this.handlechange} /> */}
                              </div>
                              <Form.Group>
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <Form.Control
                                  type="number"
                                  placeholder={mobilenumber}
                                  className="mobile-signin-inputstyle"
                                  name="phonenumber"
                                  value={this.state.input.phonenumber}
                                  onChange={this.handleChange}
                                  id="name"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.phonenumber}</div>
                              </Form.Group>

                              <Form.Group>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <Form.Control
                                  type="email"
                                  placeholder={emailid}
                                  className="signin-inputstyle"
                                  type="text"
                                  name="email"
                                  value={this.state.input.email}
                                  onChange={this.handleChange}
                                  id="email"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.email}</div>
                              </Form.Group>
                              <div className="signup-btn-style">
                                <button className="signup-btn" onClick={this.nidsubmit}>
                                  {submitbtn}
                                </button>
                              </div>
                            </div>
                          </Form>
                          <div className="singup-alreadtmember">
                            <p>
                              {alreadymembertxt}?{' '}
                              <span>
                                {' '}
                                <a href="/customer/signin">{signinlink}</a>{' '}
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
                          <div className="verification_heading">{otpverificationtxt}</div>
                          <label className="mobile-label">{identificationotplable}</label>
                          <Form className="formstyling">
                            <div class="input-icons">
                              <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                  type="number"
                                  placeholder={entertheotpreceived}
                                  className="signin-inputstyle"
                                  name="identificationOTP"
                                  value={this.state.idenotp.identificationOTP}
                                  onChange={this.idenotpchange}
                                  id="identificationOTP"
                                  style={arStyle}
                                />
                                <div className="text-danger">{this.state.errors.identificationOTP}</div>
                              </Form.Group>

                              <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                                <div className="sign-resendotp">
                                  <a href="#">{resendotplink}</a>
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
                                  {submitbtn}
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
                          <div className="dfs-cong" style={arStyle}>
                            {congratulationsheading} !
                          </div>

                          <div className="dfs-name" style={arStyle}>
                            {deartxt} {this.state.customerAddressData.title} {this.state.customerPersonalData.englishfirstname}!!
                          </div>

                          <div className="dfs-nametxt" style={arStyle}>
                            {thankyouheading}
                          </div>

                          <div className="dfs-maalemteam" style={arStyle}>
                            {maalemfinancingteam}
                          </div>

                          <div>
                            <button className="dfs-getstarted" onClick={this.state.customerAddressData.title? this.getstarted : console.log('please wait...')}>
                              {this.state.customerAddressData.title ? getstartedbtn : 'Loading...'}
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
      </>
    );
  }
}
