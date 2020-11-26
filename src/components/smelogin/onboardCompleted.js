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
import './agentsigin.css'
import { Otp } from 'react-otp-timer'
import LayoutUi from './layoutMain'
import Country from '../../translation/countryCode.json'
import LogoPdf from '../smelogin/pdfLogo.png'
import GreenTick from '../smelogin/Green_tick.png'
import Language from '../smelogin/demo.json'
export default class customersignup extends Component {
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
      textDisplay: Language.agentCustomerOnBoarding,
      firstPage: true,
      secondPage: false,
      Country: '',
      languageData:''
    }
  }
  viewdashboard = () => {
    this.props.history.push('/agent/dashboard')
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
componentDidMount(){
  this.setState({
    languageData:this.props.languageData
  })
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
        <LayoutUi help={this.state.languageData.help} textDisplay={this.state.textDisplay} changeLanguage={this.props.changeLanguage} />

        <div className={localStorage.getItem('css')=='en' ?'englishCss':localStorage.getItem('css')=='ar'?'arabicCss':'englishCss' }>
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
                      className='view-button'
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
                  <div className='text-center' style={{marginTop:'40px'}}>
               <img src={GreenTick} width='60px'/>
              <p>{this.state.languageData.onboardComplete}</p>
              <p><b>{this.state.languageData.congratsText}</b></p>
               <p><b>{this.state.languageData.YourApplicationId}:</b></p>
               </div>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}
