import React, { Component } from 'react'
import './agentsigin.css'
import { Otp } from 'react-otp-timer'
import { login, logout } from '../utils/index'
import { loginValidation } from './validation'
import { userLoginApi } from './utils/actionCreator'
export default class Customersigin extends Component {
  constructor(props) {
    super(props)
    // console.log(props)
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
      loginValidationCheckMsg: '',
      errorLogin:''
    }
  }
  componentDidMount() {
    console.log("in newAgentSingin")
    //  this.props.changeLanguage('en')
    // console.log(this.props)
    logout()
  }

  componentWillReceiveProps() {
    console.log(this.props)
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
  loginSubmit = async () => {
    console.log("agentsign in ")
    console.log((this.state.loginData.emailId).split('@')[0])
    localStorage.setItem('agentLogin', true)
    console.log(localStorage.getItem('agentLogin'))
    console.log(this.state.loginData)
    let loginValidationCheck = await loginValidation(this.state.loginData)
    console.log(loginValidationCheck)
    if (loginValidationCheck.status) {
      await userLoginApi(this.state.loginData, callBack => {
        console.log(callBack)
        if (callBack != null && callBack.status == 'Success') {
          localStorage.setItem("agentLoginStatus", true)
          localStorage.setItem("agentId", callBack.agentId)
          localStorage.setItem('loginUser', (this.state.loginData.emailId).split('@')[0])
          this.props.history.push({
            pathname: '/agent/sme/dashboard',
            userData: { detail: callBack }
          })
        }else{
          this.setState({
            errorLogin:'Please Enter Valid Email and Password'
          })
        }
      })

      this.setState({
        loginValidationCheckMsg: loginValidationCheck
      })
    }
    this.setState({
      loginValidationCheckMsg: loginValidationCheck
    })
    console.log(this.state.loginValidationCheckMsg)
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
      <div className='signbackground-img'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='col-sm-6  col-sm-6 col-xs-12' style={{ 'margin-top': '16%' }}>
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

              <div className='col-sm-6 col-sm-6 col-xs-12' style={{ 'margin-top': '2%' }}>
                <div class='card cardstyle'>
                  <div class='card-body'>
                    <div className='logintxt'>Agent Sign In</div>
                    <div className='login_input'>
                      <input
                        type='text'
                        placeholder='Enter Email id'
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
                          {this.state.errorLogin !=''?
                          this.state.errorLogin
                          :""} 
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
                        {this.state.loginValidationCheckMsg.field == 'password'
                          ? this.state.loginValidationCheckMsg.msg
                          : ''}
                      </div>
                    </div>

                    <div className='login_input_drop'>
                      <select onChange={e => this.loginHandler(e, 'location')}>
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
                        {this.state.loginValidationCheckMsg.field == 'location'
                          ? this.state.loginValidationCheckMsg.msg
                          : ''}
                      </div>
                    </div>

                    <div className='login_nextbtn'>
                      <button className='signup-btn' onClick={this.loginSubmit}>
                        Submit
                      </button>
                    </div>

                    <div
                        className='singup-alreadtmember'
                        style={{ 'margin-top': '20px'}}
                    >
                      <p className='text-center'>
                        New Agent to Maalem?{' '}
                        <span>
                          {' '}
                          <a href='/agent/signup'>Sign Up</a>{' '}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
