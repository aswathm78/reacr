import React, { Component } from 'react'
import './agentsigin.css'
import './agentnewStyle.scss'

import LayoutUi from './layoutMain'
import {
  documentDetailApi,
  thakomDetailApi,
  getWathqDetailApi,
  getWathqAddressDetailApi,
  companyDetailApi
} from './utils/actionCreator'
import queryString from 'query-string'
import Language from '../smelogin/demo.json'
import PopUp from '../smelogin/utils/alertPage'
import Loader from './utils/loader'
// import { BASE_URL } from '../agentlogin/utils/apiFactory'
const BASE_URL = 'http://122.166.172.240:3031'
let query = ''
export default class customersignup extends Component {
  constructor(props) {
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
      documentDetail: {},
      tahakomDetail: {},
      customerDetail: {},
      wathqDetail: {},
      wathqAddressDetail: {},
      languageData: {},
      loaderState: false,
      documentHeading: true
    }
  }
  viewdashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }
  setLanguage(languageDataa) {
    this.setState({
      languageData: languageDataa
    })
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
  getDocumentDetailApi(customerId) {
    documentDetailApi(customerId, callBack => {
      console.log(callBack, 'asdfghjzxcvbn')
      if (callBack != null) {
        this.setState({
          documentDetail: callBack
        })
      } else {
        this.setState({
          documentHeading: false
        })
      }
    })
  }

  getCompanyDetailApi(customerId) {
    companyDetailApi(customerId, callBack => {
      console.log(callBack)
      if (callBack != null) {
        this.setState({
          customerDetail: callBack
        })
      }
    })
  }

  getTahakomDetailApi(customerId) {
    thakomDetailApi(customerId, callBack => {
      console.log(callBack)
      if (callBack != null) {
        this.setState({
          tahakomDetail: callBack
        })
      }
    })
  }

  getWathqDetailApi(customerId) {
    getWathqDetailApi(customerId, callBack => {
      console.log(callBack)
      if (callBack != null) {
        this.setState({
          wathqDetail: callBack
        })
      }
    })
  }

  getWathqAddressDetailApi(customerId) {
    this.setState({ loaderState: true })
    getWathqAddressDetailApi(customerId, callBack => {
      console.log(callBack)
      if (callBack != null) {
        this.setState({
          wathqAddressDetail: callBack,
          loaderState: false
        })
      } else {
        this.setState({ loaderState: false })
      }
    })
  }

  componentDidMount() {
    this.setState({
      languageData: this.props.languageData
    })
    query = this.props.location.search
    console.log(query)
    if (query != null && query != '') {
      const values = queryString.parse(this.props.location.search)
      console.log(values.customerId)
      if (values.customerId != undefined && values.customerId != null) {
        this.getDocumentDetailApi(values.customerId)
        this.getTahakomDetailApi(values.customerId)
        this.getWathqAddressDetailApi(values.customerId)
        this.getWathqDetailApi(values.customerId)
        this.getCompanyDetailApi(values.customerId)
      }
    }
  }
  openAllDocs = () => {
    console.log('qwertyu')
    console.log(this.state.documentDetail)
    if (this.state.documentDetail != null && this.state.documentDetail != null) {
      Object.keys(this.state.documentDetail).map(head => {
        if (head != 'updatedOn' && head != 'addedOn' && head != 'id' && head != 'customerId') {
          console.log(head)
          //   if (
          //   typeof this.state.documentDetail[head] === 'string' &&
          //   this.state.documentDetail[head].substring(0, 4) === 'http'
          // ) {
          console.log('qwertyuiop', this.state.documentDetail[head])
          if (this.state.documentDetail[head] != null) {
            window.open(
             BASE_URL.concat(this.state.documentDetail[head])
              
            )
            console.log( BASE_URL.concat(this.state.documentDetail[head]))
          }
          // }
        }
      })

    }
  }
  submit = () => { }
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
          textDisplay={this.state.languageData.customerApplicationInfo}
          changeLanguage={this.props.changeLanguage}
        />
        {this.state.popupState ? (
          <PopUp
            successMsg={this.state.successMsg}
            failureMsg={this.state.failureMsg}
          />
        ) : (
            ''
          )}
          
        {this.state.loaderState ? <Loader /> : ''}
        <div className='container-fluid '>
          <div
            className={
              localStorage.getItem('css') == 'en'
                ? 'englishCss'
                : localStorage.getItem('css') == 'ar'
                  ? 'arabicCss'
                  : 'englishCss'
            }
          >
            <div className='row'>
              <div className='col-sm-4 col-xs-12' style={{ marginTop: '20px' }}>
                <div
                  className='card new-width deatail-agent'
                  style={{
                    borderRight: ' 3px solid #e5e5e5',
                    borderBottomLeftRadius: '10px',
                    borderTopLeftRadius: '10px',
                    height: '500px'
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
                        paddingRight: '40px'
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
                        onClick={this.viewdashboard}
                      >
                        {this.state.languageData.viewDashboard}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-8 col-xs-12' style={{ marginTop: '20px' }}>
                <div
                  className='signUp-div deatail-agent deatail-agent-new'
                  style={{
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px'
                  }}
                >
                  <h6 style={{ fontWeight: '600' }}>
                    {/* Authorised Personal Details */}
                    {this.state.languageData.authorisePersonalDetails}
                  </h6>
                  <div className='row' id='menu2'>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.tittle}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.tittle}
                      />
                      <span className='text-danger'></span>
                    </div>

                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.firstName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.firstName}
                        value={this.state.tahakomDetail.englishFirstName}
                      />
                      {console.log(
                        this.state.tahakomDetail,
                        'this.state.tahakomDetail'
                      )}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.middleName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.middleName}
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.lastName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.lastName}
                        value={this.state.tahakomDetail.englishFamilyName}
                      />
                      <span className='text-danger'></span>
                    </div>

                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.familyName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.familyName}
                        value={this.state.tahakomDetail.arabicFamiltyName}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.firstNameAr}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.firstNameAr}
                        value={this.state.tahakomDetail.arabicFirstName}
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.middleNameAr}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.middleNameAr}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.lastNameAr}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.lastNameAr}
                        value={this.state.tahakomDetail.arabicFamiltyName}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'></div>
                  </div>
                  <h6
                    style={{
                      fontWeight: '600',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    {this.state.languageData.fundingDetails}
                  </h6>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.companyName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.companyName}
                        value={this.state.customerDetail.companyName}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.companyRegNumber}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.companyRegNumber}
                        value={this.state.customerDetail.commercialRegNo}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.durationOfFinancing}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={
                          this.state.languageData.durationOfFinancing
                        }
                        value={
                          this.state.customerDetail.durationOfFacilityWithFodex
                        }
                      />
                    </div>
                  </div>
                  <div
                    className='row'
                    style={{
                      marginTop: '5px',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.installmentAmount}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.installmentAmount}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>Score</label>
                      <input
                        readOnly style={{ background: 'lightgray' }} className='user-input' placeholder='Score' />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.fundingAmount}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.fundingAmount}
                        value={this.state.customerDetail.fundingAmount}
                      />
                    </div>
                  </div>
                  <h6
                    style={{
                      fontWeight: '600',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    {this.state.languageData.commisionerDetails}
                  </h6>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.idNumber}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.idNumber}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.nameOfCommisioner}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.nameOfCommisioner}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.commisionerMobileNumber}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={
                          this.state.languageData.commisionerMobileNumber
                        }
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.email}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.email}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.submissionDate}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.submissionDate}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'></div>
                  </div>

                  <h6
                    style={{
                      fontWeight: '600',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    {this.state.languageData.addressDetail}
                  </h6>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.address}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.address}
                        value={this.state.wathqAddressDetail.address}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {' '}
                        {this.state.languageData.email}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.email}
                        value={this.state.wathqAddressDetail.email}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.fax}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.fax}
                        value={this.state.wathqAddressDetail.fax1}
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.mobileNumber}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.mobileNumber}
                        value={this.state.wathqAddressDetail.telephone1}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.postalBox}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.postalBox}
                        value={this.state.wathqAddressDetail.postalBox1}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'></div>
                  </div>

                  <h6
                    style={{
                      fontWeight: '600',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }}
                  >
                    {this.state.languageData.basicWathqDetails}
                  </h6>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.crNo}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.crNo}
                        value={this.state.wathqDetail.crNumber}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.crEntityNo}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.crEntityNo}
                        value={this.state.wathqDetail.crEntityNumber}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.issueDate}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.issueDate}
                        value={this.state.wathqDetail.issueDate}
                      />
                    </div>
                  </div>
                  <div className='row' style={{ marginTop: '5px' }}>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.bussinessName}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.bussinessName}
                        value={this.state.wathqDetail.bussinessName}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.fiscalYear}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.fiscalYear}
                        value={this.state.wathqDetail.fiscalYear}
                      />
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic'>
                        {this.state.languageData.status}
                      </label>
                      <input
                        readOnly
                        style={{ background: 'lightgray' }} className='user-input'
                        placeholder={this.state.languageData.status}
                        value={this.state.wathqDetail.statusNamEn}
                      />
                    </div>
                    <div className='' style={{ marginTop: '5px' }}>
                      <div className='col-sm-6 col-md-4 col-xs-12'>
                        <label className='label-basic'>
                          {this.state.languageData.location}
                        </label>
                        <input
                          readOnly
                          style={{ background: 'lightgray' }} className='user-input'
                          placeholder={this.state.languageData.location}
                          value={this.state.wathqDetail.location}
                        />
                      </div>
                      <div className='col-sm-6 col-md-4 col-xs-12'>
                        <label className='label-basic'>
                          {this.state.languageData.activities}
                        </label>
                        <input
                          readOnly
                          style={{ background: 'lightgray' }} className='user-input'
                          placeholder={this.state.languageData.activities}
                          value={this.state.wathqDetail.activitiesIsicEn}
                        />
                      </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'></div>
                  </div>
                  {this.state.documentHeading ?
                    <h6
                      style={{
                        fontWeight: '600',
                        marginTop: '15px',
                        marginBottom: '15px'
                      }}
                    >
                      {this.state.languageData.attachments}
                    </h6>
                    : ""}
                  <div
                    className='row'
                    style={{ marginTop: '5px', fontSize: '12px' }}
                  >
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      {this.state.documentDetail.applicationForm != '' &&
                        this.state.documentDetail.applicationForm != null && this.state.documentDetail.applicationForm != undefined ? (
                          <p>
                            <i
                              style={{ color: '#F39C12' }}
                              class='fa fa-file-pdf-o'
                              aria-hidden='true'
                            ></i>
                          &nbsp;
                            {this.state.languageData.applicationForm}&nbsp;
                            {console.log(BASE_URL +
                              this.state.documentDetail.applicationForm)}
                            <a
                              target='_blank'
                              href={
                                BASE_URL +
                                this.state.documentDetail.applicationForm
                              }
                            >
                              <button
                                className='submit-button view-btn'
                                style={{
                                  padding: '1px 10px',
                                  float: 'right',
                                  marginTop: '0'
                                }}
                              >
                                {this.state.languageData.view}
                              </button>
                            </a>
                          </p>
                        ) : (
                          ''
                        )}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>


                      {this.state.documentDetail.authorisedPersonalId !=
                        null ? (
                          <p>
                            <i
                              style={{ color: '#F39C12' }}
                              class='fa fa-file-pdf-o'
                              aria-hidden='true'
                            ></i>{' '}
                          &nbsp;{this.state.languageData.authorisedPersonalId}{' '}
                          &nbsp;
                            <a
                              target='_blank'
                              href={
                                BASE_URL +
                                this.state.documentDetail.authorisedPersonalId
                              }
                            >
                              <button
                                className='submit-button view-btn'
                                style={{
                                  padding: '1px 10px',
                                  float: 'right',
                                  marginTop: '0'
                                }}
                              >
                                {this.state.languageData.view}
                              </button>
                            </a>
                          </p>
                        ) : (
                          ''
                        )}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      {this.state.documentDetail.crCopy != null ? (
                        <p>
                          <i
                            style={{ color: '#F39C12' }}
                            class='fa fa-file-pdf-o'
                            aria-hidden='true'
                          ></i>{' '}
                          &nbsp; {this.state.languageData.crCopy}&nbsp;
                          <a
                            target='_blank'
                            href={BASE_URL + this.state.documentDetail.crCopy}
                          >
                            <button
                              className='submit-button view-btn'
                              style={{
                                padding: '1px 10px',
                                float: 'right',
                                marginTop: '0'
                              }}
                            >
                              {this.state.languageData.view}
                            </button>
                          </a>
                        </p>
                      ) : (
                          ''
                        )}
                    </div>
                  </div>
                  <div
                    className='row'
                    style={{ marginTop: '5px', fontSize: '12px' }}
                  >
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      {this.state.documentDetail.ownersGuarantee != null ? (
                        <p>
                          <i
                            style={{ color: '#F39C12' }}
                            class='fa fa-file-pdf-o'
                            aria-hidden='true'
                          ></i>
                          &nbsp;{this.state.languageData.ownersGuarantee} &nbsp;
                          <a
                            target='_blank'
                            href={
                              BASE_URL +
                              this.state.documentDetail.ownersGuarantee
                            }
                          >
                            <button
                              className='submit-button view-btn'
                              style={{
                                padding: '1px 10px',
                                float: 'right',
                                marginTop: '0'
                              }}
                            >
                              {this.state.languageData.view}
                            </button>
                          </a>
                        </p>
                      ) : (
                          ''
                        )}
                    </div>
                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      {this.state.documentDetail.ownersGuarantee != null ? (
                        <p>
                          <i
                            style={{ color: '#F39C12' }}
                            class='fa fa-file-pdf-o'
                            aria-hidden='true'
                          ></i>{' '}
                          &nbsp;{this.state.languageData.foodiesACCTStatement}
                          &nbsp;
                          <a
                            target='_blank'
                            href={
                              BASE_URL +
                              this.state.documentDetail.ownersGuarantee
                            }
                          >
                            <button
                              className='submit-button view-btn'
                              style={{
                                padding: '1px 10px',
                                float: 'right',
                                marginTop: '0'
                              }}
                            >
                              {this.state.languageData.view}
                            </button>
                          </a>
                        </p>
                      ) : (
                          ''
                        )}
                    </div>

                    <div className='col-sm-6 col-md-4 col-xs-12'>
                      {this.state.documentDetail.bankAccProof != null ?
                        <p>
                          <i
                            style={{ color: '#F39C12' }}
                            class='fa fa-file-pdf-o'
                            aria-hidden='true'
                          ></i>{' '}
                        &nbsp;{this.state.languageData.bankAccountProof}&nbsp;
                        <a
                            target='_blank'
                            href={
                              BASE_URL +
                              this.state.documentDetail.bankAccProof
                            }
                          >
                            <button
                              className='submit-button view-btn'
                              style={{
                                padding: '1px 10px',
                                float: 'right',
                                marginTop: '0'
                              }}
                            >
                              {this.state.languageData.view}
                            </button>
                          </a>
                        </p>
                        : ""}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-xs-12'>
                      <div className='table-card'>
                        <table class='table table-striped'>
                          <thead>
                            <tr>
                            {this.state.documentHeading ?

                              <th class='th-sm'>
                                {this.state.languageData.attachments}
                              </th>
                              :""}
                              <th class='th-sm'>
                                {this.state.languageData.name}
                              </th>
                              <th class='th-sm'>
                                {this.state.languageData.history}
                              </th>
                              <th class='th-sm'>
                                {this.state.languageData.notes}
                              </th>
                              <th class='th-sm'>
                                {this.state.languageData.toMe}
                              </th>
                              <th class='th-sm'>
                                {this.state.languageData.from}{' '}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{ textAlign: 'center' }}>
                            {this.state.documentHeading ?

                              <td>
                                <button
                                  view-btn
                                  className='submit-button'
                                  style={{
                                    padding: '1px 10px',
                                    marginTop: '0'
                                  }}
                                  onClick={this.openAllDocs}
                                >
                                  {this.state.languageData.view}
                                </button>
                              </td>
                              :""}
                              <td>{this.state.languageData.name} </td>
                              <td>{this.state.languageData.history}</td>
                              <td>{this.state.languageData.notes}</td>
                              <td>{this.state.languageData.toMe}</td>
                              <td>{this.state.languageData.from}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button
                      className='submit-button'
                      onClick={this.viewdashboard}
                    >
                      {this.state.languageData.close}
                    </button>
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
