import React, { Component } from 'react'
import './agentsigin.css'
import { Otp } from 'react-otp-timer'
import LayoutUi from './layoutMain'
import { createCustomerApi, verifyOtp } from './utils/actionCreator'
// import { newCustomerValidation } from './validation'
import Language from '../smelogin/demo.json'
import PopUp from '../smelogin/utils/alertPage'
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';

export default class customersignup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '',
      popupState: false,
      successMsg: '',
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
      textDisplay: '',
      firstPage: true,
      secondPage: false,
      Country: '',
      iqmaState: '',
      ninState: true,
      customerData: {
        identificationNumber: '',
        number: '',
        mobileNumber: '',
        emailId: ''
      },
      customerValidationMsg: '',
      otp: '',
      otpError: '',
      customerId: '',
      languageData: '',
      minutes: 1
    }
  }
  componentDidMount() {
    this.setState({
      languageData: this.props.languageData
    })
  }
  setLanguage(languageDataa) {
    this.setState({
      languageData: languageDataa
    })
  }
  resendOtpHandler = () => {
    console.log('qwertyuiop')
    this.setState({ minutes: 0 })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props.languageData)

    if (nextProps.languageData != this.props.languageData) {

      console.log(nextProps.languageData)
      this.setLanguage(nextProps.languageData)
      // this.setState({
      //   languageData:this.props.languageData
      // })
      console.log(this.state.languageData)
    }
    console.log(this.state.languageData)
  }
  viewdashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }
  nextpage = () => {
    this.setState({ firstPage: false, secondPage: true })
  }
  handler = (e, type) => {
    let customerData = Object.assign({}, this.state.customerData)
    if (type == 'identificationNumber') {
      customerData.identificationNumber = e.target.value
    } else if (type == 'ninNumber') {
      customerData.number = e.target.value
      this.setState({ ninState: true, iqmaState: false })
    } else if (type == 'iqmaNumber') {
      customerData.number = e.target.value
      this.setState({ ninState: false, iqmaState: true })
    } else if (type == 'emailId') {
      customerData.emailId = e.target.value
    } else if (type == 'mobileNumber') {
      customerData.mobileNumber = e.target.value
    }
    this.setState({ customerData })
  }
  submitCustomer = () => {
    console.log(this.state.customerData)
    let customerValidation = this.newCustomerValidation(this.state.customerData)
    if (customerValidation.status) {
      createCustomerApi(this.state.customerData, callBack => {
        if (callBack != null && callBack.status == 'Success') {
          this.setState({
            secondPage: true,
            firstPage: false,
            customerId: callBack.customerId
          })
        } else {
          this.setState(
            {
              popupState: true,
              failureMsg: true,
              status: callBack.status
            },
            () => this.removePopup()
          )
        }
      })

      this.setState({
        customerValidationMsg: customerValidation
      })
    }
    this.setState({
      customerValidationMsg: customerValidation
    })
    console.log(this.state.customerValidationMsg)
  }

  removePopup() {
    setTimeout(
      function () {
        this.setState({ popupState: false })
      }.bind(this),
      5000
    )
  }
  otpHandler = e => {
    this.setState({ otp: e.target.value })
  }
  otpSubmit = () => {
    if (this.state.otp != '' && this.state.otp != null && this.state.otp.trim().length == 4 && this.state.otp != 0) {
      verifyOtp(this.state.otp, this.state.customerId, callBack => {
        console.log(callBack)
        if (callBack != null && callBack.status == 'Success') {
          this.props.history.push({
            pathname: '/agent/sme/customer/onboarding',
            customerId: this.state.customerId
          })
        } else {
          this.setState({ otpError: callBack.status })
        }
      })
    } else {
      this.setState({ otpError: this.state.languageData.enterOtp})
    }
  }
  newCustomerValidation = customerData => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var numberTest = /^[0-9]+$/
    if (customerData.identificationNumber == '') {
      return {
        status: false,
        msg: this.state.languageData.enterIdentification,
        field: 'idNumber'
      }
    } else if (!numberTest.test(customerData.identificationNumber)) {
      return {
        status: false,
        msg: this.state.languageData.validMobile,
        field: 'idNumber'
      }
    }
    else if (customerData.mobileNumber == '') {
      return {
        status: false,
        msg: this.state.languageData.enterMobile,
        field: 'mobileNumber'
      }
    } else if (!numberTest.test(customerData.mobileNumber)) {
      return {
        status: false,
        msg: this.state.languageData.validMobile,
        field: 'mobileNumber'
      }
    }
    else if (customerData.emailId == '') {
      return { status: false, msg: this.state.languageData.enterEmail, field: 'emailId' }
    } else if (!filter.test(customerData.emailId)) {
      return {
        status: false,
        msg: this.state.languageData.validEmail,
        field: 'emailId'
      }
    }
    return { status: true, msg: '' }
  }
  resendEvent() { 
     
    console.log("***************Resend button pressed do stuff here *********************")

   }
  render() {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px'
      }
    }
    return (
      <React.Fragment>
        <LayoutUi
        help={this.state.languageData.help}
          textDisplay={this.state.languageData.agentCustomerOnBoarding}
          changeLanguage={this.props.changeLanguage}
        />
        {this.state.popupState ? (
          <PopUp
            status={this.state.status}
            successMsg={this.state.successMsg}
            failureMsg={this.state.failureMsg}
          />
        ) : (
            ''
          )}
        <div className={localStorage.getItem('css') == 'en' ? 'englishCss' : localStorage.getItem('css') == 'ar' ? 'arabicCss' : 'englishCss'}>
          <div className='col-xs-12' style={{ marginTop: '20px' }}>
            <div className='col-sm-4 col-xs-12'>
              <div
                className='card new-width'
                style={{
                  borderRight: ' 3px solid #e5e5e5',
                  minHeight: '450px',
                  borderBottomLeftRadius: '10px',
                  borderTopLeftRadius: '10px'
                }}
              >
                <div className='card-body'>
                  <div
                    className='verification_heading'
                    style={{ textAlign: 'right', marginTop: '9rem' }}
                  >
                    {this.state.languageData.agentDetail}
                  </div>
                  <div
                    style={{
                      textAlign: 'right',
                      fontSize: '1.4rem',
                      fontWeight: '100px',
                      paddingRight: '40px',
                      'font-weight': 'normal !important'
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
                  <div className='text-center'>
                    <button
                      className='signup-btn'
                      style={{width:'200px',padding:'10px'}}
                      onClick={this.viewdashboard}
                    >
                      {this.state.languageData.viewDashboard}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-8 col-xs-12'>
              <div
                className='signUp-div'
                style={{
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px'
                }}
              >
                <div className='input-form-box'>
                  {this.state.firstPage ? (
                    <div>
                      <h5 style={{ fontWeight: '600' ,textAlign:'center'}}>
                        {/* Customer Identification */}
                        {this.state.languageData.customerIdentification}
                      </h5>
                      <Form.Control
                      type='number'
                      className="mobile-signin-inputstyle"
                        placeholder={
                          this.state.languageData.identificationNumber
                        }
                        onChange={e => this.handler(e, 'identificationNumber')}
                      />
                      <div className='text-danger'>
                        {this.state.customerValidationMsg.field == 'idNumber'
                          ? this.state.customerValidationMsg.msg
                          : ''}
                      </div>
                      <p className='margin-t-b-10'>
                        <input
                          type='radio'
                          value='nin'
                          checked={this.state.ninState}
                          onChange={e => this.handler(e, 'ninNumber')}
                        />{' '}
                        &nbsp;{this.state.languageData.ninNumber}&nbsp;&nbsp;
                        <input
                          type='radio'
                          value='Iqma'
                          checked={this.state.iqmaState}
                          onChange={e => this.handler(e, 'iqmaNumber')}
                        />{' '}
                        &nbsp;{this.state.languageData.iqmaNumber}
                      </p>
                      <Form.Control
                            type="number"
                            placeholder="Enter Mobile Number"
                            className="mobile-signin-inputstyle"
                            name="phonenumber"
                            placeholder={this.state.languageData.mobileNumber}
                            onChange={e => this.handler(e, 'mobileNumber')}
                            id="name"
                          />
                        
                      {/* <input
                      type='number'
                        className='form-control margin-t-b-10'
                        placeholder={this.state.languageData.mobileNumber}
                        onChange={e => this.handler(e, 'mobileNumber')}
                      /> */}
                      <div className='text-danger'>
                        {this.state.customerValidationMsg.field ==
                          'mobileNumber'
                          ? this.state.customerValidationMsg.msg
                          : ''}
                      </div>
                      <Form.Control
                      type='email'
                      className="mobile-signin-inputstyle"
                        placeholder={this.state.languageData.email}
                        onChange={e => this.handler(e, 'emailId')}
                      />
                      <div className='text-danger'>
                        {this.state.customerValidationMsg.field == 'emailId'
                          ? this.state.customerValidationMsg.msg
                          : ''}
                      </div>
                      <div className='text-center'>
                        <button
                          className='submit-button'
                          onClick={this.submitCustomer}
                        >
                          {this.state.languageData.submit}
                        </button>
                      </div>
                    </div>
                  ) : (
                      ''
                    )}
                  {this.state.secondPage ? (
                    <div>
                      <h5 style={{ fontWeight: '600' }}>
                        {this.state.languageData.receivedOtp}
                      </h5>
                      <input
                        className='form-control '
                        style={{ marginTop: '65px' }}
                        placeholder={this.state.languageData.receivedOtp}
                        onChange={e => this.otpHandler(e)}
                      />
                      <div className='text-danger'>
                        {this.state.otpError != '' &&
                          this.state.otpError != null
                          ? this.state.otpError
                          : ''}
                      </div>
                      <p>
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

                        {/* <div className='otp-comp'>
                          

                        </div> */}
                      </p>
                      <div className='text-center'>
                        <button
                          className='submit-button'
                          onClick={this.otpSubmit}
                        >
                          {this.state.languageData.submit}
                        </button>
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
      </React.Fragment>
    )
  }
}
