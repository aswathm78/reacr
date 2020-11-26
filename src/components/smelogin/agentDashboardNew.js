import React, { Component } from 'react'
import { Container, Col, Card, InputGroup, Form, Button } from 'react-bootstrap'
import './agentnewStyle.scss'
import Logo from '../agentlogin/maalem-logo.png'
import axios from 'axios'
import LayoutUi from './layoutMain'
import Language from '../smelogin/demo.json'
import Arabic from '../smelogin/arabic.json'
import { getCustomerApplicationLead } from './utils/actionCreator'
import Loader from './utils/loader'
export default class agentdashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
      appResponse: {},
      aapRequest: {},
      textDisplay: '',
      customerLeads: [],
      languageData: {},
      loaderState: false

    }
  }


  getCustomerApplication = () => {
    console.log('getCustomerApplication')
    this.setState({ loaderState: true })
    getCustomerApplicationLead(callBack => {
      console.log(callBack)
      if (callBack != null) {
        console.log(callBack)
        this.setState({
          customerLeads: callBack,
          loaderState: false
        })
      }
    })
  }

  setLanguage(languageDataa) {
    this.setState({
      languageData: languageDataa
    })
  }

  componentWillReceiveProps(nextProps) {
    
    // console.log(this.props.languageData)

    if (nextProps.languageData != this.props.languageData) {

      console.log(nextProps.languageData)
      this.setLanguage(nextProps.languageData)
      console.log(this.state.languageData)
    }
    // console.log(this.state.languageData)
  }

  

  componentDidMount()  {
    this.setState({ ruinPerformance: true });

    console.log(this.props)
    if(this.state.languageData!=this.props.languageData){
      this.setState({
        languageData: this.props.languageData
      })
    }
    this.getCustomerApplication()
    
  }



  detailCustomer = (customerId) => {
    this.props.history.push('/agent/sme/details' + '?customerId=' + customerId)
  }
  newcustomer = () => {
    this.props.history.push('/agent/sme/newcustomer')
  }
  viewdashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }
  logout = () => {
    this.props.history.push('/agent/sme/signin')
  }
  render() {

    return (
      <React.Fragment>
        <LayoutUi textDisplay={this.state.languageData.agentDashBoard} help={this.state.languageData.help} changeLanguage={this.props.changeLanguage} />
        {this.state.loaderState ? <Loader /> : ''}

        <div className='container-fluid'>
          <div className={localStorage.getItem('css') == 'en' ? 'englishCss' : localStorage.getItem('css') == 'ar' ? 'arabicCss' : 'englishCss'}>
            <div className='new-application-btn'>
              <button className='application-btn' onClick={this.newcustomer}>
                {this.state.languageData.newApplication}
              </button>
            </div>
            <div className=''>
              <div className='col-xs-12'>
                <div className='table-card'>
                  <h5>{this.state.languageData.loanApplication}</h5>
                  <table class='table table-striped'>
                    <thead>
                      <tr>
                        <th class='th-sm'>{this.state.languageData.action}</th>
                        <th class='th-sm'>{this.state.languageData.creationDate}</th>
                        <th class='th-sm'>{this.state.languageData.status}</th>
                        <th class='th-sm'>{this.state.languageData.branch}</th>
                        <th class='th-sm'>{this.state.languageData.business}</th>
                        <th class='th-sm'>{this.state.languageData.customerMobile}</th>
                        <th class='th-sm'>{this.state.languageData.customerName}</th>
                        <th class='th-sm'>{this.state.languageData.email}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.customerLeads != null &&
                        this.state.customerLeads.length > 0
                        ? this.state.customerLeads.map(data => {
                          var d = data.createdOn
                          d = d.split('T');
                          console.log(d[0]);
                          return (
                            <tr style={{ textAlign: 'center' }}>
                              <td style={{ display: 'flex' }}>
                                <span
                                  className='glyphicon glyphicon-eye-open'
                                  style={{ cursor: 'pointer' }}
                                  onClick={e =>
                                    this.detailCustomer(data.customerId)
                                  }
                                ></span>
                                &nbsp;&nbsp;
                                <span class='glyphicon glyphicon-edit' style={{ cursor: 'pointer' }} onClick={e =>
                                  this.detailCustomer(data.customerId)
                                }></span>
                              </td>
                              <td>{d[0]}</td>
                              <td>{data.status}</td>
                              <td>{data.branch}</td>
                              <td>{data.bussiness}</td>
                              <td>{data.mobileNumber}</td>
                              <td>{data.name}</td>
                              <td>{data.emailId}</td>
                            </tr>
                          )
                        })
                        : ''}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* } */}
      </React.Fragment>
    )
  }
}
