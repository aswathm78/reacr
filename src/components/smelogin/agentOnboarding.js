import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Button
} from 'react-bootstrap'
// import './agentsigin.css'
import './agentnewStyle.scss'

import { Otp } from 'react-otp-timer'
import LayoutUi from './layoutMain'
import Country from '../../translation/countryCode.json'
import { customerOnbaordingApi } from './utils/actionCreator'
// import { onboardValidation } from './validation'
import $ from 'jquery'
import Language from '../smelogin/demo.json'
import AlertPoup from './utils/alertPage'
export default class customersignup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      successMsg: true,
      failureMsg: false,
      popupState: false,
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
      customerData: {
        companyName: '',
        commercialRegNo: '',
        ibanNo: '',
        fundingAmount: '',
        totalMontlyRevenue: '',
        purposeOfFunding: '',
        noOfBranches: 0,
        revenueVsAvgThreeMonth: '',
        revenueTrendThreeMonth: '',
        durationOfFacilityWithFodex: '',
        pecentCardOperation: '',
        notes: '',
        customerId: ''
      },
      checkMsg: '',
      languageData: ''
    }
  }

  setLanguage (languageDataa) {
    this.setState({
      languageData: languageDataa
    })
  }

  componentWillReceiveProps (nextProps) {
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
  componentDidMount () {
    this.setState({
      languageData: this.props.languageData
    })
  }
  UNSAFE_componentWillMount () {
    console.log(this.props.location.pathname)
    console.log(this.props.location.customerId)
    if (
      this.props.location.customerId != undefined &&
      this.props.location.customerId != null
    ) {
      let customerData = Object.assign({}, this.state.customerData)
      customerData.customerId = this.props.location.customerId
      this.setState({
        customerData
      })
    }
    console.log(window.innerWidth)
    if (window.innerWidth == 768) {
      console.log(window.innerWidth)

      $('#menu2').removeClass('row')
    }
  }
  onChangeHandler = (e, type) => {
    let customerData = Object.assign({}, this.state.customerData)
    if (type == 'companyName') {
      console.log(e.target.value)
      customerData.companyName = e.target.value
    } else if (type == 'commercialRegNo') {
      customerData.commercialRegNo = e.target.value
    } else if (type == 'ibanNo') {
      customerData.ibanNo = e.target.value
    } else if (type == 'fundingAmount') {
      customerData.fundingAmount = e.target.value
    } else if (type == 'totalMontlyRevenue') {
      customerData.totalMontlyRevenue = e.target.value
    } else if (type == 'purposeOfFunding') {
      customerData.purposeOfFunding = e.target.value
    } else if (type == 'noOfBranches') {
      customerData.noOfBranches = e.target.value
    } else if (type == 'revenueVsAvgThreeMonth') {
      customerData.revenueVsAvgThreeMonth = e.target.value
    } else if (type == 'revenueTrendThreeMonth') {
      customerData.revenueTrendThreeMonth = e.target.value
    } else if (type == 'durationOfFacilityWithFodex') {
      customerData.durationOfFacilityWithFodex = e.target.value
    } else if (type == 'pecentCardOperation') {
      customerData.pecentCardOperation = e.target.value
    } 
    this.setState({ customerData })
  }
  onboardValidation = customerData => {
    if (customerData.companyName.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterCompanyName,
        field: 'companyName'
      }
    } else if (customerData.commercialRegNo.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterComercialReg,
        field: 'commercialRegNo'
      }
    } else if (customerData.ibanNo.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterIban,
        field: 'ibanNo'
      }
    } else if (customerData.fundingAmount.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterFundingAmt,
        field: 'fundingAmount'
      }
    }else if (customerData.revenueTrendThreeMonth.trim().length === 0 || '') {
      return {
        status: false,
        msg:this.state.languageData.enterRevenueTrend,
        field: 'revenueTrendThreeMonth'
      }
    }
     else if (customerData.revenueVsAvgThreeMonth.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterRevenueAvgVs,
        field: 'revenueVsAvgThreeMonth'
      }
    }  
    else if (customerData.noOfBranches.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterBranches,
        field: 'noOfBranches'
      }
    } else if (customerData.pecentCardOperation.trim().length == 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterPercentOperation,
        field: 'pecentCardOperation'
      }
    } else if (customerData.durationOfFacilityWithFodex.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterFodic,
        field: 'durationOfFacilityWithFodex'
      }
    } else if (customerData.totalMontlyRevenue.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.enterMonthlyRevenue,
        field: 'totalMontlyRevenue'
      }
    } else if (customerData.purposeOfFunding.trim().length === 0 || '') {
      return {
        status: false,
        msg: this.state.languageData.purposeOfFundings,
        field: 'purposeOfFunding'
      }
    } 

    return { status: true, msg: '' }
  }
  submitData = () => {
    console.log(this.state.customerData)
    let check = this.onboardValidation(this.state.customerData)
    if (check.status) {
      if (
        this.state.customerData.customerId != '' &&
        this.state.customerData.customerId != undefined &&
        this.state.customerData.customerId != null
      ) {
        customerOnbaordingApi(this.state.customerData, callBack => {
          console.log(callBack)
          if (callBack != null && callBack.status == 'Success') {
            this.props.history.push({
              pathname: '/agent/sme/customer/loanOffer',
              customerId: this.state.customerData.customerId
            })
          }
        })
      }
      this.setState({
        checkMsg: check
      })
    }
    this.setState({
      checkMsg: check
    })
    console.log(this.state.checkMsg)
  }
  removePopup () {
    setTimeout(
      function () {
        this.setState({ popupState: false })
      }.bind(this),
      5000
    )
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
      <React.Fragment>
        <LayoutUi
        help={this.state.languageData.help}
          textDisplay={this.state.languageData.agentCustomerOnBoarding}
          changeLanguage={this.props.changeLanguage}
        />
        {this.state.popupState ? (
          <AlertPoup
            successMsg={this.state.successMsg}
            failureMsg={this.state.failureMsg}
          />
        ) : (
          ''
        )}
     
        <div className='container-fluid'>
          <div
            className={
              localStorage.getItem('css') == 'en'
                ? 'englishCss'
                : localStorage.getItem('css') == 'ar'
                ? 'arabicCss'
                : 'englishCss'
            }
          >
            <div className='row' style={{ marginTop: '20px' }}>
              <div className='col-sm-4 col-xs-12'>
                <div
                  className='card new-width onboardingsmall'
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
                        className='view-button'
                        onClick={this.viewdashboard}>
                        {this.state.languageData.viewDashboard}
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              <div className='col-sm-8 col-xs-12'>
                <div
                  className='signUp-div onboading-div'
                  style={{
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px'
                  }}
                >
                  <h5 style={{ fontWeight: '600' }}>
                    {this.state.languageData.companyDetails}
                  </h5>
                  <div className='row' id='menu2'>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.companyName}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.companyName}
                        onChange={e => this.onChangeHandler(e, 'companyName')}
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'companyName'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>

                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {/* Commercial Registration No */}
                        {this.state.languageData.companyRegNumber}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.companyRegNumber}
                        onChange={e =>
                          this.onChangeHandler(e, 'commercialRegNo')
                        }
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'commercialRegNo'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.ibnNumber}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.ibnNumber}
                        onChange={e => this.onChangeHandler(e, 'ibanNo')}
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'ibanNo'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.fundingAmount}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.fundingAmount}
                        onChange={e => this.onChangeHandler(e, 'fundingAmount')}
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'fundingAmount'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>{' '}
                    </div>

                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.revenueTrend}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.revenueTrend}
                        onChange={e =>
                          this.onChangeHandler(e, 'revenueTrendThreeMonth')
                        }
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'revenueTrendThreeMonth'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.averageRevenue}
                      </label>
                      <input
                        className='user-input'
                        onChange={e =>
                          this.onChangeHandler(e, 'revenueVsAvgThreeMonth')
                        }
                        placeholder={this.state.languageData.averageRevenue}
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'revenueVsAvgThreeMonth'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.numberOfBranches}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.numberOfBranches}
                        onChange={e => this.onChangeHandler(e, 'noOfBranches')}
                      />{' '}
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'noOfBranches'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.PercentageOfCard}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.PercentageOfCard}
                        onChange={e =>
                          this.onChangeHandler(e, 'pecentCardOperation')
                        }
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'pecentCardOperation'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.WorkWithFodex}
                      </label>
                      <input
                        className='user-input'
                        onChange={e =>
                          this.onChangeHandler(e, 'durationOfFacilityWithFodex')
                        }
                        placeholder={this.state.languageData.WorkWithFodex}
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field ==
                        'durationOfFacilityWithFodex'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.totalMonthlyRevenue}
                      </label>
                      <input
                        className='user-input'
                        placeholder={
                          this.state.languageData.totalMonthlyRevenue
                        }
                        onChange={e =>
                          this.onChangeHandler(e, 'totalMontlyRevenue')
                        }
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'totalMontlyRevenue'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>{' '}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.purposeOfFunding}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.purposeOfFunding}
                        onChange={e =>
                          this.onChangeHandler(e, 'purposeOfFunding')
                        }
                      />
                      <span className='text-danger'>
                        {this.state.checkMsg.field == 'purposeOfFunding'
                          ? this.state.checkMsg.msg
                          : ''}
                      </span>{' '}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.notes}
                      </label>
                      <input
                        className='user-input'
                        placeholder={this.state.languageData.notes}
                        onChange={e => this.onChangeHandler(e, 'notes')}
                      />
                    </div>
                    <br />
                    <div className=' col-xs-12 text-center'>
                      <button
                        className='submit-button'
                        onClick={this.submitData}
                      >
                        {this.state.languageData.saveAndContinue}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
