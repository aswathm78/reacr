import React, { Component } from 'react'
import './agentsigin.css'
import { Otp } from 'react-otp-timer'
import { login, logout } from '../utils/index'
import { loginValidation } from './validation'


import {userLoginApi} from './utils/actionCreator'
export default class Customersigin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activekey: 1,
      input: {},
      errors: {},
      changeotp: 'sentopt',
      otp: {},
      loginData: {
        emailId: '',
        password: '',
        location: ''
      },
      loginValidationCheckMsg: ''
    }
  }
  componentDidMount () {
    logout()
  }
  changepage = () => {
    // this.setState({
    //     activekey: 2
    // })
  }

  handleChange = event => {
    let input = this.state.input

    input[event.target.name] = event.target.value

    this.setState({
      input
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.validate()) {
      let input = {}

      input['email'] = ''
      input['password'] = ''
      this.props.history.push('/agent/sme/dashboard')
      this.setState({ input: input })
    }
  }

  validate () {
    let input = this.state.input

    let errors = {}

    let isValid = true

    if (!input['email']) {
      isValid = false
      errors['email'] = 'Please enter your email Address.'
    }

    if (typeof input['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (!pattern.test(input['email'])) {
        isValid = false
        errors['email'] = 'Please enter valid email address.'
      }
    }

    if (!input['password']) {
      isValid = false
      errors['password'] = 'Please enter your password.'
    }

    if (typeof input['password'] !== 'undefined') {
      if (input['password'].length < 6) {
        isValid = false
        errors['password'] = 'Please add at least 6 charachter.'
      }
    }

    this.setState({
      errors: errors
    })

    return isValid
  }

  radiochange = event => {
    this.setState({
      changeotp: event.target.value
    })
  }

  //--------------------------------OTP Validation Start--------------------------------------------------//

  //-------------------------------OTP Validation END-----------------------------------------------------//

  todashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }

  /////////////////new changes////////////////////////
  loginHandler = (e, type) => {
    let loginData = Object.assign({}, this.state.loginData)
    if (type == 'email') {
      loginData.emailId = e.target.value
    } else if (type == 'password') {
      loginData.password = e.target.value
    } else if (type == 'location') {
      loginData.location = e.target.value
    }
    this.setState({
      loginData
    })
  }
  loginSubmit = () => {
    console.log(this.state.loginData)
    let loginValidationCheck = loginValidation(this.state.loginData)
    if (loginValidationCheck.status) {
     //////////////api//////////////////
      this.setState({
        loginValidationCheckMsg: loginValidationCheck
      })
    }
    this.setState({
      loginValidationCheckMsg: loginValidationCheck
    })
    console.log(this.state.loginValidationCheckMsg)
  }
  render () {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        fontSize: '14px'
      }
    }
    return (
      <div className='signbackground-img'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='col-sm-6 ' style={{ 'margin-top': '16%' }}>
                <div className='maalme-heading'>
                  <h3>Welcome to Maalem Financing</h3>
                  <h3>Login to get your Finance</h3>
                </div>

                <div className='allproductcls'>
                  <div>Auto Loan</div>

                  <div style={{ 'margin-left': '92px' }}>Consumer Loan</div>
                </div>
                <div className='allproductcls'>
                  <div>Commercial Loan</div>

                  <div style={{ 'margin-left': '20px' }}>SME Loan</div>
                </div>
              </div>

              <div className='col-sm-6 ' style={{ 'margin-top': '2%' }}>
                {this.state.activekey == 1 ? (
                  <div class='card cardstyle'>
                    <div class='card-body'>
                      <div className='logintxt'>Agent Sign In</div>
                      <div className='login_input'>
                        <input
                          type='text'
                          placeholder='Enter Email id or Mobile Number'
                          name='email'
                          style={{ padding: '0.5rem' }}
                          // value={this.state.input.email}
                          onChange={e => this.loginHandler(e, 'email')}
                          id='email'
                        />
                        <div className='text-danger'>
                          {this.state.loginValidationCheckMsg.field == 'emailId'
                            ? this.state.loginValidationCheckMsg.msg
                            : ''}
                        </div>
                      </div>
                      <div class='login_input'>
                        <input
                          type='password'
                          name='password'
                          // value={this.state.input.password}
                          onChange={e => this.loginHandler(e, 'password')}
                          class='form-control'
                          placeholder='Enter password'
                          id='password'
                        />
                        <div className='text-danger'>
                          {this.state.loginValidationCheckMsg.field ==
                          'password'
                            ? this.state.loginValidationCheckMsg.msg
                            : ''}
                        </div>
                      </div>

                      <div
                        className='login_input_drop'>
                        <select
                          onChange={e => this.loginHandler(e, 'location')}
                        >
                          <option value=''>Select Location</option>
                          <option value='hayatmall'>Hayat Mall</option>
                          <option value='alizdhhar'>Al Izdhhar</option>
                          <option value='garnatha'>Garnatha</option>
                        </select>
                        <br />
                        <div
                          className='text-danger'
                          style={{ marginTop: '11px' }}
                        >
                          {this.state.loginValidationCheckMsg.field ==
                          'location'
                            ? this.state.loginValidationCheckMsg.msg
                            : ''}
                        </div>
                      </div>

                      <div className='login_nextbtn'>
                        <button
                          className='signup-btn'
                          onClick={this.loginSubmit}
                        >
                          Submit
                        </button>
                      </div>

                      <div
                        className='singup-alreadtmember'
                        style={{ 'margin-top': '20px', 'margin-left': '40%' }}
                      >
                        <p>
                          New Agent to Maalem?{' '}
                          <span>
                            {' '}
                            <a href='/agent/signup'>Sign Up</a>{' '}
                          </span>{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : // close
                this.state.activekey == 2 ? (
                  <div class='card customerpwd_cardstyle'>
                    <div class='card-body'>
                      <div className='logintxt'>Sign in</div>
                      <div className='customerotp_radiobtn'>
                        <div className='customerpwdstyle'>
                          <label>
                            <input
                              type='radio'
                              style={{ 'margin-right': '6px' }}
                              name='otpoption'
                            />
                            Send OTP on mobile no
                          </label>
                        </div>

                        <div
                          to='/customerresendotp'
                          className='customerpwdstyle'
                        >
                          <label>
                            <input
                              type='radio'
                              style={{ 'margin-right': '6px' }}
                              name='otpoption'
                            />
                            Send OTP on Email Id
                          </label>
                        </div>
                      </div>
                      <div className='customerotp_nextbtn'>
                        <button className='signup-btn' onClick={this.gotootp}>
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                ) : // close
                this.state.activekey == 3 ? (
                  <div class='card customerpwd_cardstyle'>
                    <div class='card-body'>
                      <div className='logintxt'>Signin</div>
                      <div className='pwd_input'>
                        <input
                          type='password'
                          placeholder='Enter Password'
                          autoComplete='off'
                        />
                      </div>
                      <div className='customerpwd_forgetpwd'>
                        <a href='#'> Forgot password</a>
                      </div>
                      <div className='customerpwd_nextbtn'>
                        <button
                          className='signup-btn'
                          onClick={this.todashboard}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey == 4 ? (
                  <div class='card customerpwd_cardstyle'>
                    <div class='card-body'>
                      <div className='logintxt'>Sign in with OTP</div>
                      <div className='pwd_input'>
                        <input
                          type='number'
                          placeholder='Enter OTP'
                          name='mobile'
                          value={this.state.otp.mobile}
                          onChange={this.otpchange}
                          id='mobile'
                        />
                        <div className='text-danger'>
                          {this.state.errors.mobile}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          'justify-content': 'space-around'
                        }}
                      >
                        <div className='sign-resendotp'>
                          <a href='#'> Resend OTP</a>
                        </div>

                        <div className='otp-comp'>
                          <Otp
                            style={style}
                            minutes={1}
                            // resendEvent={this.resendEvent}
                            ButtonText=''
                          />
                        </div>
                      </div>

                      <div className='customerpwd_nextbtn'>
                        <button className='signup-btn' onClick={this.otpsubmit}>
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
    )
  }
}
