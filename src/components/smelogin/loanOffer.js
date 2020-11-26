import React, { Component } from 'react'
// import './agentsigin.css'
import './agentnewStyle.scss'
import LayoutUi from './layoutMain'
import { uploadDocument } from './utils/actionCreator'
import PopUp from '../smelogin/utils/alertPage'

import Language from '../smelogin/demo.json'
export default class customersignup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status:'',
      popupState: false,
      successMsg: '',
      failureMsg: '',
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
      fileName: '',
      documentData: {
        docType: '',
        uploadFile: '',
        type: ''
      },
      customerId: '',
      nextPage: '',
      languageData:''
    }
  }
  UNSAFE_componentWillMount () {
    console.log(this.props.location.pathname)
    console.log(this.props.location.customerId,'animated slideInLeft')
    if (
      this.props.location.customerId != undefined &&
      this.props.location.customerId != null
    ) {
      this.setState({
        customerId: this.props.location.customerId
      })
    }
  }
    // changeLanguage={this.props.changeLanguage}
    componentWillReceiveProps(nextProps){
    
      if(nextProps.languageData!=this.props.languageData){
        this.setState({
          languageData:this.props.languageData
        })
        console.log(this.state.languageData)
      }
    }
  onselectHandler (e, type) {
    this.setState({fileName:''})
    let documentData = Object.assign({}, this.state.documentData)
    if (type == 'applicationForm') {
      documentData.docType = 'applicationForm'
    } else if (type == 'crCopy') {
      documentData.docType = 'crCopy'
    } else if (type == 'authorisedPersonalId') {
      documentData.docType = 'authorisedPersonalId'
    } else if (type == 'ownersGuarantee') {
      documentData.docType = 'ownersGuarantee'
    } else if (type == 'foodiesAcctStatement') {
      documentData.docType = 'foodiesAcctStatement'
    } else if (type == 'bankStatement') {
      documentData.docType = 'bankStatement'
    } else if (type == 'signedLoanDoc') {
      documentData.docType = 'signedLoanDoc'
    }
    this.setState({
      documentData
    })
  }
  onChangeHandler (e) {
    if (this.state.documentData.docType != '') {
      if(e.target.files[0] !='' && e.target.files[0]!=null){
      let documentData = Object.assign({}, this.state.documentData)
      documentData.uploadFile = e.target.files[0]
      if(e.target.files[0].type !=undefined){
      documentData.type = e.target.files[0].type
      }
      this.setState(
        {
          fileName: e.target.files[0].name
        },
        () => this.uploadDocumentHandler()
      )

      this.setState({
        documentData
      })
    }
    } else {
      alert('Select Document Type First ..Application form etc.')
    }
  }
  uploadDocumentHandler () {
    console.log(this.state.documentData)
    if (this.state.customerId != null && this.state.customerId != undefined) {
      uploadDocument(
        this.state.documentData,
        this.state.customerId,
        callBack => {
          console.log(callBack.status)
          if (callBack != null && callBack.status == 'Success') {
            this.setState({nextPage:'yes'})
            this.setState({ fileName: '',documentData:'', popupState: true,
            successMsg: true,failureMsg:false,successMsg:true,status:'Document Uploaded Successfully' },()=>this.removePopup())
          } else {
            console.log('err')
            this.setState({ fileName: '', popupState: true,
            successMsg: true,failureMsg:false,successMsg:true,status:'Please Try Again Later' })
          }
        }
      )
    } else {
    }
  }
  removePopup () {
    setTimeout(
      function () {
        this.setState({ popupState: false })
      }.bind(this),
      5000
    )
  }
  viewdashboard = () => {
    this.props.history.push('/agent/sme/dashboard')
  }
  componentDidMount () {
    this.setState({
      languageData:this.props.languageData
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
  nextPage () {
    if(this.state.nextPage == 'yes'){
    if(this.state.customerId!=''){
    this.props.history.push('/agent/sme/application' + '?customerId=' + this.state.customerId )
    }
  }else{
    this.setState({popupState: true,
      successMsg: false,failureMsg:true,status:'Upload document first' },()=>this.removePopup())
  }
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
        <LayoutUi help={this.state.languageData.help} textDisplay={this.state.languageData.agentCustomerOnBoarding} changeLanguage={this.props.changeLanguage}/>
        {/* arabicCss */}
        {this.state.popupState ? (
          <PopUp
          status={this.state.status}
            successMsg={this.state.successMsg}
            failureMsg={this.state.failureMsg}
          />
        ) : (
          ''
        )}
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
                className='signUp-div loan-offer-div'
                style={{
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px'
                }}
              >
                <h5
                  style={{
                    fontWeight: '600',
                    textAlign: 'center',
                    marginTop: '20px'
                  }}
                >
                  {this.state.languageData.loanOfferAndDocuments}
                </h5>
                <div className='col-sm-6 col-xs-12'>
                  <div className='heading-loan'>
                    {this.state.languageData.uploadSignedLOAN}
                  </div>
                  <br />
                  <div style={{ fontSize: '14px' }}>
                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e =>
                          this.onselectHandler(e, 'applicationForm')
                        }
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.applicationForm}
                      </div>
                    </p>
                    <p style={{ cursor: 'pointer' }}>
                      <div onClick={e => this.onselectHandler(e, 'crCopy')}>
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.crCopy}
                      </div>
                    </p>
                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e =>
                          this.onselectHandler(e, 'authorisedPersonalId')
                        }
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp;{this.state.languageData.authorisedPersonalId}
                      </div>
                    </p>
                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e =>
                          this.onselectHandler(e, 'ownersGuarantee')
                        }
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.ownersGuarantee}
                      </div>
                    </p>

                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e =>
                          this.onselectHandler(e, 'foodiesAcctStatement')
                        }
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.foodiesACCTStatement}
                      </div>
                    </p>
                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e => this.onselectHandler(e, 'bankStatement')}
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.bankAccountProof}
                      </div>
                    </p>
                    <p style={{ cursor: 'pointer' }}>
                      <div
                        onClick={e => this.onselectHandler(e, 'signedLoanDoc')}
                      >
                        <i
                          style={{ color: '#F39C12', cursor: 'pointer' }}
                          class='fa fa-file-pdf-o'
                          aria-hidden='true'
                        ></i>
                        &nbsp; {this.state.languageData.signedLoanDoc}
                      </div>
                    </p>
                  </div>
                </div>
                <div className='col-sm-6 col-xs-12'>
                  <div className='heading-loan'>
                    {this.state.languageData.uploadBelowDocument}
                  </div>
                  {this.state.documentData.docType != ''  ? (
                    <div
                      className='text-center text-primary'
                      style={{ fontSize: '12px' }}
                    >
                      You Have Selected &nbsp;
                      {this.state.documentData.docType == 'crCopy'
                        ? 'Cr Copy'
                        : this.state.documentData.docType == 'applicationForm'
                        ? 'Application Form'
                        : this.state.documentData.docType ==
                          'authorisedPersonalId'
                        ? 'Authorised Personal Id'
                        : this.state.documentData.docType == 'ownersGuarantee'
                        ? 'Owners Guarantee'
                        : this.state.documentData.docType ==
                          'foodiesAcctStatement'
                        ? 'Foodies Acct Statement'
                        : this.state.documentData.docType == 'bankStatement'
                        ? 'Bank Statement'
                        : this.state.documentData.docType == 'signedLoanDoc'
                        ? 'Signed Loan Doc'
                        : ''}
                      &nbsp;{this.state.languageData.toUpload}
                    </div>
                  ) : (
                    ''
                  )}
                  <div className='upload'>
                    <input
                      type='file'
                      accept='application/pdf,image/jpg ,image/jpeg'
                      onChange={e => this.onChangeHandler(e)}
                    />
                    <p> {this.state.fileName}</p>
                  </div>
                  <div
                    className='col-sm-8 col-xs-12 secure-text'
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      marginTop: '4px'
                    }}
                  >
                    {this.state.languageData.acceptedOnly} <br />
                    {this.state.languageData.maximumSize}
                  </div>

                  <div
                    className='col-sm-4 col-xs-12'
                    style={{
                      textAlign: 'right',
                      fontSize: '12px',
                      color: 'grey',
                      marginTop: '4px'
                    }}
                  >
                    <span class='glyphicon glyphicon-lock'></span>&nbsp;{' '}
                    {this.state.languageData.secure}
                  </div>
                  <div className='col-xs-12'>
                    <button className='btn-width submit-button cancel-btn' onClick={this.viewdashboard}>
                      {this.state.languageData.cancel}
                    </button>
                    <button
                      style={{ float: 'right' }}
                      className='btn-width submit-button ar-btn'
                      onClick={e => this.nextPage(e)}
                    >
                      {this.state.languageData.submit}
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
