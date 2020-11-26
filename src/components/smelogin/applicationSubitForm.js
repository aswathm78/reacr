import React, { Component } from 'react'
import './agentsigin.css'
import LayoutUi from './layoutMain'
import queryString from 'query-string'
import {companyDetailApi} from './utils/actionCreator'

let query=''
export default class CustomersNew extends Component {
  constructor (props) {
    super(props)

    this.state = {
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
      languageData:''
    }
  }
  viewdashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }
componentDidMount(){
  this.setState({
    languageData:this.props.languageData
  })
  query = this.props.location.search
  console.log(query)
  if (query != null && query != '') {
    const values = queryString.parse(this.props.location.search)
    console.log(values.customerId)
    if(values.customerId!=undefined && values.customerId!=null){
      this.getCompanyDetailApi(values.customerId);
    }
}
}
getCompanyDetailApi(customerId){
  companyDetailApi(customerId,callBack=>{
    console.log(callBack)
    if(callBack!=null){
      this.setState({
        customerDetail:callBack
      })
    }
  })
}
setLanguage(languageDataa){
  this.setState({
    languageData:languageDataa
  })
}

componentWillReceiveProps(nextProps){
  console.log(this.props.languageData)

  if(nextProps.languageData!=this.props.languageData){
    
    console.log(nextProps.languageData)
    this.setLanguage(nextProps.languageData)
    // this.setState({
    //   languageData:this.props.languageData
    // })
    console.log(this.state.languageData)
  }
  console.log(this.state.languageData)
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
        <LayoutUi help={this.state.languageData.help} textDisplay={this.state.languageData.agentCustomerOnBoarding} changeLanguage={this.props.changeLanguage} />

        <div className={ localStorage.getItem('css')=='en'?'englishCss': localStorage.getItem('css')=='ar'?'arabicCss':'englishCss'} >
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
                  <button className='submit-button' onClick={this.viewdashboard}>{this.state.languageData.viewDashboard}</button>
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
                  <h5 style={{fontWeight:'600',textAlign:'center'}}>{this.state.languageData.applicationSubmited}</h5>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                      <label className='label-basic' >{this.state.languageData.loanId}</label>
                      <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.loanId} readOnly/>
                  </div>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                  <label className='label-basic' >{this.state.languageData.requestedLoanAmount}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.requestedLoanAmount} readOnly/>

                  </div>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                  <label className='label-basic' >{this.state.languageData.emiAmount}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.emiAmount} readOnly/>

                  </div>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
              <label className='label-basic'>{this.state.languageData.underwritterDecision}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.underwritterDecision} readOnly/>

                  </div>
               
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                  <label className='label-basic'>{this.state.languageData.approvedLoanAmount}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.approvedLoanAmount} readOnly/>

                  </div>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                  <label className='label-basic'>{this.state.languageData.processingFees}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.processingFees} readOnly/>

                  </div>
                  <div className='col-sm-6 col-md-4 col-xs-12'>
                  <label className='label-basic'>{this.state.languageData.tenure}</label>
                  <input className='user-input' style={{background:'lightgray'}} placeholder={this.state.languageData.tenure} readOnly/>

                  </div>
                
                 
              </div>
             
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
