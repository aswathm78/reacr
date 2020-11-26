
import React, { Component } from 'react';
import loanofferimg from '../../assets/images/loanoffer.png';
import config from '../../assets/config/config';
import axios from 'axios';
import HijriDatePicker, { withTheme } from 'hijri-date-picker';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import Logo from '../agentlogin/maalem-logo.png'
import StcLogo from '../../assets/images/stc-logo.png'
import './newStyleHndle.scss'
import Loader from '../smelogin/utils/loader'
//import { onlineApplication } from '../../store/action';
import CustomerApi from './AgentApi';
import PopUp from '../smelogin/utils/alertPage'
import SideImage from './basicdetail.png'
import JARIRLogo from './jarir.png'
import Newpopup from '../agentlogin/popup'
class agentdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      popupState: false,
      successMsg: '',
      failureMsg:'',
      activekey: 21,
      customerdetails: '',
      fieldArray: {},
      documentList: [],
      documentRequired:[],
      assetfieldArray: {},
      errorarray: {},
      assetData: {},
      errorassetarray:{},
      // assetData: [{ assetmodel: '', assetname: 'MOBILE', assetprice: '', assetqty: '', assetdescription: '' }],
      assetDataArray:[],
      newModel: '',
      newAssetName: '',
      newAssetPrice: 0,
      newAssetQty: 0,
      msg: '',
      requestAmt: '',
      payableAmt: '',
      monthlyInst: '',
      invoiceAmt: '',
      downpayment: '',
      selectedFile: null,
      selectedFileType: '',
      loandetailsData: '',
      obligationsMonthly: 0,
      financePremium: 0,
      monthlyHomeRent: 0,
      newCustomerFields: [],
      loaderState:false,
      uploadDoc:[],
      poData:{
        fileName:'',
        fileExtension:'',
        fileContent:'',
      },
      assetDataRiyadh:{},
      duplicateMsgPopUp:false,
      // employmentDetails: JSON.parse(sessionStorage['TAHKUM_CUSTOMRE_DATA']),
      addressDetail: {},
      customerDetail: {},
      documentType: '',
      documentUploaded: [],
      loan: {
        "reqAmount": 3000,
        "tenure": 6,
        "downPayemnt": 5000
      },
      requestData: [
        {
          userDtlsModel: [
            {
              appId: '351',
              moduleFlag: null,
              idType: 'NID', //static
              idNumber: '1021017338', //static
              firstName: 'Sunny', //required
              martialStatus: ' DIVORCED', //required
              noofchildren: '2', //required
              nationalAddress: ' Unit 54, Building 86 3, Street Mena,  Almadinah, Ad Difa Dist, Saudi Arabia  ', //required
              typeOfEmployment: 'SAL', //static
              middleName: 'Janet Rangel', //required
              lastName: 'SMITH', //required
              designation: 'DESIG008', //required
              dateOfJoining: '2020-06-06', //required
              noOfYearsInProfession: '0', //required
              retiredage: '58',
              relatedemployer: null,
              salcreditanb: null,
              directManagerNam: null,
              directManagerEmail: null,
              directManagerTelNo: null,
              directManagerExtnNo: null,
              companyName: null,
              registrationNumber: null,
              registrationDate: null,
              registrExpiryDate: null,
              percentOfShareholding: null,
              streetName: null,
              city: null,
              province: null,
              zipCode: null,
              poBox: null,
              country: null,
              retsalcreditanb: null,
              mobileNumber: '8369571358',
              emailId: null, //not required
              dateofBirth: '1999-02-17', //required
              gender: 'F',
              nationality: 'SAU',
              placeOfStay: 'RIYADH',
              productcode: 'MURR',
              cgCompanyName: null,
              totalExperience: null,
              regAnyStatuotaryAuthority: null,
              natureOfBusiness: null,
              isCoApplicant: 'false',
              currency: 'SAR',
              isCustomer: null,
              accountNo: null,
              familyName: 'SMITH',
              employerName: '95',
              idIssueDate: '0008-07-28',
              idExpireDate: '0028-07-28',
              idIssuePlace: '65418746',
              firstNameInArabic: 'Ø±Ø­Ø§Ù†',
              secondNameInArabic: ' Ù…Ù†ØµÙˆØ±',
              thirdNameInArabic: 'Ø§Ù„Ø­Ø§Ø±Ø«ÙŠ',
              arabicfamilyname: 'Ø¹Ù…Ø§Ø±ÙŠ',
            },
          ],
          incomeLiabilityModel: [
            {
              appId: 351, //each request should be unique
              grossMonthlyIncome: 320000.0, //required
              currentEMI: null,
              anyliabilities: 'N', //required
              netIncome: null,
              annualBonus: null,
              avgMonthlyIncentive: null,
              prevYearProfit: null,
              currency: 'SAR',
              costOfLiving: '25630.0', //required
            },
          ],
          loanDtlsModel: [
            {
              appId: 351,
              reqAmount: 500000.0,
              subProduct: 'MURRCD', //static
              productid: 'MURR', //static
              currency: 'SAR', //static
              schemeId: '10', //static
              tenure: 65, //required
            },
          ],
          loanDependantScreenModel: null,
          coApplicantDtlsModel: null,
          addressDtlsModel: [
            {
              appId: 351,
              phoneNumber: null,
              mobileNumber: null,
              email: null,
              address1: 'TEST ADDRESS 1',
              address2: 'TEST ADDRESS 1',
              address3: null,
              city: 'CITY066',
              state: 'NJR',
              country: 'KSA',
              zipcode: null,
              livingSince: '2009',
            },
          ],
        },
      ],
    };
  }
  dropDownHandler = (e) => {
    if ((e.target.value) == 'en') {
      this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'en')
      this.setState({loaderState:false})

      // window.location.reload(false);
    } else if ((e.target.value) == 'ar') {
      this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'ar')
      // window.location.reload(false);
      this.setState({loaderState:false})

    } else if ((e.target.value) == 'logout') {
      this.logout()
    }

  }

  processInputAssetRiyadh= async (event) => {
    let assetDataRiyadh = this.state.assetDataRiyadh;
    assetDataRiyadh[event.target.name] = event.target.value;
    this.setState({
      assetDataRiyadh,
    });
    console.log(assetDataRiyadh)
  }
  addMoreDetailsRiyadh = async (e) => {
    e.preventDefault();
    // window.sessionStorage.getItem('');
    let assetDataRiyadh = this.state.assetDataRiyadh;
    let errorassetarray = {};
    let asseformStatus = true;
    if (!assetDataRiyadh['unitPrice']) {
      errorassetarray['unitPrice'] = 'Please enter Unit Price';
      asseformStatus = false;
    }
    if (!assetDataRiyadh['weight']) {
      errorassetarray['weight'] = 'Please select Weight';
      asseformStatus = false;
    }
    if (!assetDataRiyadh['serialNoRamzalsanaf']) {
      errorassetarray['serialNoRamzalsanaf'] = 'Please Select Serial Number';
      asseformStatus = false;
    }
    if (!assetDataRiyadh['typesofgood']) {
      errorassetarray['typesofgood'] = 'Please select Good Type';
      asseformStatus = false;
    }if (!assetDataRiyadh['totalPrincipalAmount']) {
      errorassetarray['totalPrincipalAmount'] = 'Please enter Principle Amount';
      asseformStatus = false;
    }
   if(asseformStatus){
    let newassetdetails = {
      unitPrice: this.state.assetDataRiyadh.unitPrice,
      weight: this.state.assetDataRiyadh.weight,
      serialNumber: this.state.assetDataRiyadh.serialNoRamzalsanaf,
      typesofgood: this.state.assetDataRiyadh.typesofgood,
      principleAmount: this.state.assetDataRiyadh.totalPrincipalAmount,

    };
    await this.createAssestResourceRiyadh();
    // let assetDataRiyadh= this.state.assetDataRiyadh
    assetDataRiyadh.unitPrice= ''
    assetDataRiyadh.weight=''
    assetDataRiyadh.serialNoRamzalsanaf= 0
    assetDataRiyadh.typesofgood= ''
    assetDataRiyadh.totalPrincipalAmount= 0

    this.setState({
      assetDataArray: this.state.assetDataArray.concat(newassetdetails),
      assetDataRiyadh,
      errorassetarray:''
    });
  }else{
    this.setState({
      errorassetarray: errorassetarray,
    });
  }
    console.log(this.state.assetDataRiyadh)
  };
  removePopup() {
    setTimeout(
      function () {
        this.setState({ popupState: false })
      }.bind(this),
      5000
    )
  }
  saveandcont = e => {
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = {};
    let formStatus = true;

    // if (!fieldArray['subSector']) {
    //   errorarray['subSector'] = 'Please select subSector  !';
    //   formStatus = false;
    // }

    // if (!fieldArray['sector']) {
    //   errorarray['sector'] = 'Please select sector !';
    //   formStatus = false;
    // }

    // if (!fieldArray['employmentType']) {
    //   errorarray['employmentType'] = 'Please select employment type !';
    //   formStatus = false;
    // }

    if (!fieldArray['employerName']) {
      errorarray['employerName'] = 'Please enter your employer name !';
      formStatus = false;
    }
    if (!fieldArray['serviceinmonths']) {
      errorarray['serviceinmonths'] = 'Please enter service in month';
      formStatus = false;
    }
    if (!fieldArray['dateOfJoining']) {
      errorarray['dateOfJoining'] = 'Please enter the date of joining';
      formStatus = false;
    }
    // if (!fieldArray['hijri_date']) {
    //   errorarray['hijri_date'] = 'Please enter the date of joining';
    //   formStatus = false;
    // }

    if (!fieldArray['monthlyAdditionalIncome']) {
      errorarray['monthlyAdditionalIncome'] = 'Please enter additional income';
      formStatus = false;
    }
    if (!fieldArray['monthlySalary']) {
      errorarray['monthlySalary'] = 'Please enter monthly salary';
      formStatus = false;
    }
    if (!fieldArray['noofchildren']) {
      errorarray['noofchildren'] = 'Please enter number of dependency child';
      formStatus = false;
    }
    if (!fieldArray['numofdpdntSpouse']) {
      errorarray['numofdpdntSpouse'] = 'Please enter number of dependency spouse';
      formStatus = false;
    }
    // if (!fieldArray['assetvalue']) {
    //   errorarray['assetvalue'] = 'Please enter asset value';
    //   formStatus = false;
    //  }
    let targateName = e.target.name ? e.target.name : '';
    let targateValue = e.target.value ? e.target.value : '';
    if (targateName === 'monthlyHomeRent') {
      let homeRent = e.target.value;
      let fpremium = fieldArray['financePremium'] != undefined ? fieldArray['financePremium'] : 0;
      this.setState({
        obligationsMonthly: fpremium * 1 + homeRent * 1,
      });
      console.log(this.state.obligationsMonthly, 'kjhigfydtr');
    }
    if (targateName === 'financePremium') {
      let homeRent = fieldArray['monthlyHomeRent'] != undefined ? fieldArray['monthlyHomeRent'] : 0;
      let fpremium = e.target.value;

      this.setState({
        obligationsMonthly: fpremium * 1 + homeRent * 1,
      });
    }
    // if (!fieldArray['homefinance']) {
    //   errorarray['homefinance'] = 'Please enter home finance';
    //   formStatus = false;
    // }
    // if (!fieldArray['financeinstallments']) {
    //   errorarray['financeinstallments'] = 'Please enter finance installments';
    //   formStatus = false;
    // }
    // if (!fieldArray['creditcardlimits']) {
    //   errorarray['creditcardlimits'] = 'Please enter credit card limit';
    //   formStatus = false;
    // }
    this.setState({
      errorarray: errorarray,
    });
    let field = {};

    if (formStatus == true) {
      field['subSector'] = '';
      field['sector'] = '';
      field['employmentType'] = '';
      field['employerName'] = '';
      field['serviceinmonths'] = '';
      field['dateOfJoining'] = '';
      field['hijri_date'] = '';
      field['financialpremium'] = '';
      // field['monthlyAdditionalIncome'] = '';
      field['monthlySalary'] = '';
      field['noofchildren'] = '';
      field['numofdpdntSpouse'] = '';
      field['assetvalue'] = '';
      field['monthlyHomeRent'] = '';
      field['homefinance'] = '';
      fieldArray['familyName'] = 'dvgdg';
      fieldArray['password'] = 'a123';
      fieldArray['mobileNumber'] = '121212';
      // field['financeinstallments'] = '';
      // field['creditcardlimits'] = '';
      // window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', customerReq);
      //console.log(fieldArray, 'datasetdaatataa')
      const config = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
      };
      axios.post('http://122.166.172.240:3031/api/customers', fieldArray, config).then(res => {
        console.log(res, 'customer details getting');
      });

      this.setState({
        activekey: 3,
      });
      return true;
    } else {
      this.setState({
        msg: 'Error ! Invalid Input.....',
      });
      return false;
    }
  };

  nexttodocumentupload = () => {
    this.setState({
      activekey: 3,
    });
  };

  nexttoloandetails = () => {
    this.setState({
      activekey: 4,
    });
  };

  gotoloanofferletter = e => {
    e.preventDefault();
    this.setState({
      activekey: 10,
    });
  };

  async acceptRejectOfferLoanDetail(comment,decision,stage){
    let outh;
    let headerConfig = {
        headers: {
            Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
        },
        params: {
            grant_type: 'password',
            username: 'user_admin',
            password: config.KASTLE_PASS,
        },
    }
    console.log(headerConfig)
    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)
    


    let reqData = {
        "compApplId": this.state.fieldArray['compApplId'],
        "comments": comment,
        "decision": decision,
        "stage": stage

    }
    console.log("reqData",reqData)
    const response = await axios.post(config.KASTLE_URL + '/digital/customerAcceptReject?access_token=' + outh.data.access_token, reqData)
    console.log(response)
    if (response.status == 200) {

        return true
    }
    else {
        return false
    }
  }

  rejectLoanSubmit = () => {
    if(this.acceptRejectOfferLoanDetail(this.state.loanOffer.customerRejectionRemarks,'Reject','')){
      this.props.history.push('/agent/dashboard')
    }  
  }

  nexttosixthpage = () => {
    // console.log(appId)
    //getting document List
    this.getAssetDetail(this.state.fieldArray['appId'])
    if(this.acceptRejectOfferLoanDetail('N/A','Accept','')){
      if(window.sessionStorage.getItem('vendor')=='STC' || window.sessionStorage.getItem('vendor')=='JARIR'){
        this.setState({
          activekey: 2,
        });
      }else{
        this.setState({
          activekey: 11,
        });
      }
      
    }  
  };
  gotoempdetails = () => {
    this.setState({
      activekey: 1,
    });
  };
  gotoseventhpage = () => {
    this.setState({
      activekey: 7,
    });
  };
  viewdashboard = e => {
    e.preventDefault();
    this.props.history.push('/agent/dashboard');
  };
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var ageValue = age * 12 + m;
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return ageValue;
  }

  // onFileChange = event => {
  //   // Update the state
  //   console.log(this.state.fieldArray)
  //   console.log(this.state.fieldArray['customerId'])
  //   this.setState({ selectedFile: event.target.files[0],
  //     selectedFileType:event.target.files[0].type,
  //    });
  // };

  onFileChange = async (event) => {
    this.setState({loaderState:true})
if(event.target.files != null && event.target.files != '' ){
    console.log(event.target.id, event.target.files);
    let temp = event.target;
    let baseData = null;

    await this.fileToBase64(event.target.files[0]).then((data) => {
      baseData = data;
    });
    // console.log('IORD Resp = ', baseData);
    // this.addCustomerFunction(data[0])

    let reqData = [
      {
        data: baseData.replace("data:image/jpeg;base64,/", ""),
        docId: temp.id,
        fileName: temp.files[0].name,
        replaceOrAddDoc: "I",
      },
    ];

    let repo = await CustomerApi.uploaddocument(reqData);
    console.log(repo);
    if (repo) {
      let doc = this.state.uploadDoc;
      doc.push(temp.id);
      this.setState({
        doc,
        loaderState:false
      })
    }
  }
  };

  changeDocument = (e,type)=>{
    console.log(this.state.fieldArray)
    console.log(this.state.fieldArray['customerId'])
    this.setState({
      documentType: type
    })
  }


  onFileUpload = async () => {
    this.setState({loaderState:true})
    console.log(this.state.documentUploaded)
    console.log(this.state.documentRequired)
    const found =  this.state.documentRequired.every(r=>this.state.documentUploaded.includes(r))
    console.log("found",found)
    if(found){
      const loan = await CustomerApi.loanCalculator(this.state.loan)
      console.log("loan calculator",loan)
      let loanDetail = this.state.loan 
      loanDetail.monthlyInst = loan.monthlyEMI
      loanDetail.totalInterest = loan.totalInterest
      loanDetail.payableAmt=loan.payableAmount
      this.setState({
        loanDetail,
      });
      this.setState({
        activekey: 4,
        loaderState:false
      });
    }else{
      let errorArray ={}
      errorArray['documentError'] = "Document Not Fulfilled"
      this.setState({
        errorarray:errorArray,
        loaderState:false
      })
    }
    // if (this.state.documentUploaded.includes('applicationForm') && this.state.documentUploaded.includes('identificationDocument') &&
    //   this.state.documentUploaded.includes('salaryCertification') && this.state.documentUploaded.includes('lastThreeMonthStatement')) {
      
    // }
    // Create an object of formData
    // const formData = new FormData();

    // Update the formData object
    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );

    // Details of the uploaded file
    // console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    //axios.post("api/uploadfile", formData);
  };
  addMoreDetails = async (e) => {
    e.preventDefault();
    // window.sessionStorage.getItem('');
    let assetData = this.state.assetData;
    let errorassetarray = {};
    let asseformStatus = true;
    console.log(assetData)
    if (!assetData['assetModel']) {
      errorassetarray['assetModel'] = 'Please enter asset model number';
      asseformStatus = false;
    }
    if (!assetData['assetName']) {
      errorassetarray['assetName'] = 'Please enter asset name';
      asseformStatus = false;
    }
    if (!assetData['assetPrice']) {
      errorassetarray['assetPrice'] = 'Please enter asset price';
      asseformStatus = false;
    }
    if (!assetData['assetQty']) {
      errorassetarray['assetQty'] = 'Please enter asset quantity';
      asseformStatus = false;
    }
    console.log(asseformStatus)
    if(asseformStatus){
    this.setState({
      errorassetarray: errorassetarray,
    });
    
    let newassetdetails = {
      assetModel: this.state.assetData.assetModel,
      assetName: this.state.assetData.assetName,
      assetPrice: this.state.assetData.assetPrice,
      assetQty: this.state.assetData.assetQty,
    };
    await this.createAssestResource();
    // let assetData= this.state.assetData
    assetData.assetModel= ''
    assetData.assetName=''
    assetData.assetPrice= 0
    assetData.assetQty= 0
    this.setState({
      assetDataArray: this.state.assetDataArray.concat(newassetdetails),
      assetData
    });
  }else{
    this.setState({errorassetarray: errorassetarray})
  }
    console.log(this.state.errorassetarray)
  };
  handleAssetInput = obj => {
    let assetfieldArray = this.state.assetfieldArray;
    assetfieldArray[obj.target.name] = obj.target.value;
    this.setState({
      assetfieldArray,
    });
  };
  // addMoreDetails = async (e) => {
  //   e.preventDefault();
  //   // let newassetdetails = {
  //   //   assetmodel: this.state.newModel,
  //   //   assetname: this.state.newAssetName,
  //   //   assetprice: this.state.newAssetPrice,
  //   //   assetqty: this.state.newAssetQty,
  //   // };
  //   // this.setState({
  //   //   assetData: this.state.assetData.concat(newassetdetails),
  //   //   assetmodel: '',
  //   //   assetname: '',
  //   //   assetprice: 0,
  //   //   assetqty: 0,
  //   // });
  // };
  handleAssetModel = obj => {
    this.setState({
      newModel: obj.target.value,
    });
  };
  handleAssetName = obj => {
    this.setState({
      newAssetName: obj.target.value,
    });
  };
  handleAssetPrice = obj => {
    this.setState({
      newAssetPrice: obj.target.value,
    });
  };
  handleAssetQty = obj => {
    this.setState({
      newAssetQty: obj.target.value,
    });
  };
  handleAssetDesc = obj => {
    this.setState({
      newassetdetails: obj.target.value,
    });
  };
  handlepayableAmt = obj => {
    this.setState({
      payableAmt: obj.target.value,
    });
  };
  handleMonthlyInst = obj => {
    this.setState({
      monthlyInst: obj.target.value,
    });
  };
  handlerequestAmt = obj => {
    this.setState({
      requestAmt: obj.target.value,
    });
  };
  handleInvoidAmt = async (event) => {

    let filedvalue = this.state.loan;

    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue,
    });
    const loan = await CustomerApi.loanCalculator(this.state.loan)
    console.log("loan calculator",loan)
    let loanDetail = this.state.loan 
    loanDetail.monthlyInst = loan.monthlyEMI
    loanDetail.totalInterest = loan.totalInterest
    loanDetail.payableAmt=loan.payableAmount
    this.setState({
      loanDetail,
    });
  };
  handleDownpayment = async (event) => {
    let filedvalue = this.state.loan;
    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue
    });
  };
  logout = () => {
    this.props.history.push('/agent/signin');
  };

  rejectmethod = () => {
    this.setState({loaderState:true})
    this.setState({
      activekey: 8,
      loaderState:false
    });
  };
  appealmethod = () => {
    this.setState({loaderState:true})
    this.setState({
      activekey: 9,
      loaderState:false
    });
  };

  docUpload=(e)=>{
    this.setState({loaderState:true})
    console.log(e.target.id)
    let id = e.target.id
    if(e.target.files!=null && e.target.files.length>0 && e.target.files[0].type!=undefined){
      this.documentUpload(e.target.id,e.target.files[0],this.state.fieldArray,e.target.files[0].type,callBack=>{
      
        if(callBack!=null){
            console.log("documentCallBack",callBack)
            let result = callBack
            if(result.status=='Success'){
              console.log(this.state.documentUploaded)
              let documentUploaded  = this.state.documentUploaded.concat(id)
              console.log(documentUploaded)
              this.setState({
                documentUploaded:documentUploaded,
                loaderState:false
              })
            }else{
                this.setState({loaderState:false})
            }
        }
      })
    }
    


    // console.log(event.target.id, event.target.files);
    // let temp = event.target;
    // let baseData = null;

    // await this.fileToBase64(event.target.files[0]).then((data) => {
    //   baseData = data;
    // });
    // // console.log('IORD Resp = ', baseData);
    // // this.addCustomerFunction(data[0])

    // let reqData = [
    //   {
    //     data: baseData.replace("data:image/jpeg;base64,/", ""),
    //     docId: temp.id,
    //     fileName: temp.files[0].name,
    //     replaceOrAddDoc: "I",
    //   },
    // ];

    // let repo = await CustomerApi.uploaddocument(reqData);
    // console.log(repo);
    // if (repo) {
    //   let doc = this.state.uploadDoc;
    //   doc.push(temp.id);
    // }
    // console.log("in docUpload")
    // this.documentUpload(this.state.documentType,e.target.files[0],this.state.fieldArray,e.target.files[0].type,callBack=>{
      
    //   if(callBack!=null){
    //       let result = callBack
    //       if(result.status=='Success'){
    //         console.log(this.state.documentUploaded)
    //         let documentUploaded  = this.state.documentUploaded.concat(this.state.documentType)
    //         console.log(documentUploaded)
    //         this.setState({
    //           documentUploaded:documentUploaded
    //         })
    //       }else{

    //       }
    //   }
    // })
  }

  documentUpload(documentType,selectedFile,fieldArray,selectedFileType,callBack){
    var self = this
    return new Promise((resolve, reject) => {
      var self = this
      let imageFormData = new FormData()
      imageFormData.append('docType',documentType)
      imageFormData.append('uploadFile', selectedFile)
      imageFormData.append('customerId', (fieldArray['customerId']!=null && fieldArray['customerId']!=undefined)?fieldArray['customerId']:"") //need to set this from response of save continue employment detail
      imageFormData.append('type', selectedFileType) 
      imageFormData.append('applicationId', (fieldArray['applicationId']!=null && fieldArray['applicationId']!=undefined)?fieldArray['applicationId']:"") //need to set this from response of save continue employment detail
      var xhr = new XMLHttpRequest()
      xhr.open('post', "http://122.166.172.240:3031/uploadDoc", true)
      xhr.onload = function () {
        console.log(this.status)
        if (this.status == 200) {
          console.log(this.response)
          resolve(this.response)
          callBack(JSON.parse(this.response))
          
          // callBack(JSON.parse(this.response))
        } else {
          reject(this.statusText)
        }
      }
      xhr.send(imageFormData)
    })
  }

  // addressdatasubmit = () => {
  //   var country = document.getElementById('countryid').value;
  //   var proviceid = document.getElementById('proviceid').value;
  //   var address1 = document.getElementById('address1').value;
  //   var address2 = document.getElementById('address2').value;
  //   var zipcode = document.getElementById('zipcode').value;
  //   var pobox = document.getElementById('pobox').value;
  //   var dist = document.getElementById('dist').value;
  //   var city = document.getElementById('city').value;
  //   var street = document.getElementById('street').value;
  //   var buildingno = document.getElementById('buildingno').value;

  //   let addressdetails = {
  //     country: country,
  //     provice: proviceid,
  //     pobox: pobox,
  //     street: street,
  //     buildingno: buildingno,
  //     address1: address1,
  //     address2: address2,
  //     zipcode: zipcode,
  //     district: dist,
  //     city: city,
  //   };
  //   let customerNin = this.props.customerNIN;

  //   const config = {
  //     headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  //   };

  //   console.log(customerNin)

  //   axios.post('http://122.166.172.240:3031/api/addresses', addressdetails, config).then(res => {
  //     console.log(res,"data get")
  //   }); // custmerNIN
  //   this.setState({
  //     activekey: 1,
  //   });
  // };

  // assetdetails = () => {
  //   var assetcat = document.getElementById('assetcat').value;
  //   var assetmodel = document.getElementById('assetmodel').value;
  //   var assetnam = document.getElementById('assetnam').value;
  //   var assetprice = document.getElementById('assetprice').value;
  //   var assetqty = document.getElementById('assetqty').value;
  //   var assetdesc = document.getElementById('assetdesc').value;

  //   let assetobj = {
  //     assetCategory: assetcat,
  //     assetModel: assetmodel,
  //     assetPrice: assetprice,
  //     dealerName: assetnam,
  //   };
  //   const config = {
  //     headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  //   };
  //   axios.post('http://122.166.172.240:3031/api/assets', assetobj, config).then(res => {
  //     // console.log(res,"asset details")
  //   });

  //   this.setState({
  //     activekey: 3,
  //   });
  // };


  async getDocumentList(){
    console.log("documentList")
          let documentList = await CustomerApi.getDocumentList(this.state)
          this.setState({ documentList: documentList });
          if(documentList!=null && documentList.length>0){   
            documentList.map((data)=>{
              let documentRequired = this.state.documentRequired.concat(data.docid)
              console.log(documentRequired)
              this.setState({
              //   loaderState:false,
                documentRequired:documentRequired
              })
              })
              await this.setState({
                activekey: 3
              })
          }else{
            this.setState({
              documentRequired:[],
              // loaderState:false
            })
            documentList= [
              {
                  "compApplId": this.state.fieldArray['compApplId'],
                  "docid": this.state.fieldArray['compApplId']+"1",
                  "dms_doc_id": "",
                  "docdescription": "ApplicationForm",
                  "uploadedyn": "N"
              },
              {
                  "compApplId": this.state.fieldArray['compApplId'],
                  "docid": this.state.fieldArray['compApplId']+"2",
                  "dms_doc_id": "",
                  "docdescription": "3 Month Bank Statement",
                  "uploadedyn": "N"
              },
              {
                  "compApplId": this.state.fieldArray['compApplId'],
                  "docid": this.state.fieldArray['compApplId']+"3",
                  "dms_doc_id": "",
                  "docdescription": "id Proof",
                  "uploadedyn": "N"
              },
              
  
            ]
          this.setState({ documentList: documentList });
          documentList.map((data)=>{
            let documentRequired = this.state.documentRequired.concat(data.docid)
            console.log(documentRequired)
            this.setState({
              // loaderState:false,
              documentRequired:documentRequired
            })
          })
          await this.setState({
            activekey: 3
          })
          }
          this.setState(()=>this.loaderFalse());
  }

  saveAndContinueDraft = async (e) => {
    console.log("In saveAndContinueDraft")
    this.setState({loaderState:true})
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = {};
    let formStatus = true;
    if (!fieldArray['employerName']) {
      errorarray['employerName'] = 'Please enter your employer name!';
      formStatus = false;
      // return;
    }
    if (!fieldArray['serviceinmonths']) {
      errorarray['serviceinmonths'] = 'Please enter service in month';
      formStatus = false;
      // return;
    }
    if (!fieldArray['dateOfJoining']) {
      errorarray['dateOfJoining'] = 'Please enter the date of joining';
      formStatus = false;
      // return;
    }
    // if (!fieldArray['hijri_date']) {
    //   errorarray['hijri_date'] = 'Please enter the date of joining';
    //   formStatus = false;
    // }

    if (!fieldArray['financePremium']) {
      errorarray['financePremium'] = 'Please enter financial problem';
      formStatus = false;
      // return;
    }
    if (!fieldArray['monthlyAdditionalIncome']) {
      errorarray['monthlyAdditionalIncome'] = 'Please enter additional income';
      formStatus = false;
      // return;
    }
    if (!fieldArray['monthlySalary']) {
      errorarray['monthlySalary'] = 'Please enter monthly salary';
      formStatus = false;
      // return;
    }
    if (!fieldArray['noofchildren']) {
      errorarray['noofchildren'] = 'Please enter number of dependency child';
      formStatus = false;
      // return;
    }
    if (!fieldArray['numofdpdntSpouse']) {
      errorarray['numofdpdntSpouse'] = 'Please enter number of dependency spouse';
      formStatus = false;
      // return;
    }
    if (!fieldArray['assetvalue']) {
      errorarray['assetvalue'] = 'Please enter asset value';
      formStatus = false;
    }
    if (!fieldArray['monthlyHomeRent']) {
      errorarray['monthlyHomeRent'] = 'Please enter monthly home rent';
      formStatus = false;
      // return;
    }
    console.log("error", errorarray)
    console.log("formStatus", formStatus)
    if (formStatus) {
      // return;
      let check = await CustomerApi.checkCustomer(this.state.fieldArray)
    console.log("checkCustomer", check)
    if (check) {
      let stat = await CustomerApi.addCustomer(this.state.fieldArray)
      // if (stat) {

      //   this.setState({ activekey: 3 });
      // }
    }
    else {
      let stat = await CustomerApi.updateCustomer(this.state.fieldArray)
      // if (stat) {
      //   this.setState({ activekey: 3 });
      // }
    }
    fieldArray['activekey'] = "1"
    await this.setState({
      fieldArray
    })
    await CustomerApi.addLoan(this.state.fieldArray)
    // console.log(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'))
    if(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA')){
      let data = JSON.parse(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'))
      if(data){
        let submitApplication = await this.submitApplicationTo3i(data.appId)
        if(submitApplication){
          this.getDocumentList();
          // let documentList = await CustomerApi.getDocumentList(this.state)
          // this.setState({ documentList: documentList });
          // if(documentList!=null && documentList.length>0){   
          //   documentList.map((data)=>{
          //     let documentRequired = this.state.documentRequired.concat(data.docid)
          //     console.log(documentRequired)
          //     this.setState({
          //     //   loaderState:false,
          //       documentRequired:documentRequired
          //     })
          //     })
          //     await this.setState({
          //       activekey: 3
          //     })
          // }else{
          //   this.setState({
          //     documentRequired:[],
          //     // loaderState:false
          //   })
          //   documentList= [
          //     {
          //         "compApplId": this.state.fieldArray['compApplId'],
          //         "docid": this.state.fieldArray['compApplId']+"1",
          //         "dms_doc_id": "",
          //         "docdescription": "ApplicationForm",
          //         "uploadedyn": "N"
          //     },
          //     {
          //         "compApplId": this.state.fieldArray['compApplId'],
          //         "docid": this.state.fieldArray['compApplId']+"2",
          //         "dms_doc_id": "",
          //         "docdescription": "3 Month Bank Statement",
          //         "uploadedyn": "N"
          //     },
          //     {
          //         "compApplId": this.state.fieldArray['compApplId'],
          //         "docid": this.state.fieldArray['compApplId']+"3",
          //         "dms_doc_id": "",
          //         "docdescription": "id Proof",
          //         "uploadedyn": "N"
          //     },
              
  
          //   ]
          // this.setState({ documentList: documentList });
          // documentList.map((data)=>{
          //   let documentRequired = this.state.documentRequired.concat(data.docid)
          //   console.log(documentRequired)
          //   this.setState({
          //     // loaderState:false,
          //     documentRequired:documentRequired
          //   })
          // })
          // await this.setState({
          //   activekey: 3
          // })
          // }
          // this.setState(()=>this.loaderFalse());
        }
        

      }
    }

    
    }else{
     

        this.setState({
          errorarray: errorarray,
          loaderState:false
        });
        
    }
   

  };
loaderFalse=()=>{
  this.setState({loaderState:false})
  console.log('')
}
  fileToBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
    });


  getAssetDetail = async (id) =>{
    try {
      let headerConfig = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
      const response = await axios.get(`http://122.166.172.240:3031/api/assets?appId.equals=` + id, headerConfig);
      console.log(response.data)
      if(response.data.length>0){
        response.data.map((data)=>{
          let newassetdetails = {
            assetModel: data.assetModel,
            assetName: data.assetName,
            assetPrice: data.assetPrice,
            assetQty: data.assetQty,
          };
          this.setState({
            assetDataArray: this.state.assetDataArray.concat(newassetdetails),
          });
        })
      }
        
      

  } catch (error) {
      console.log(error);
      return false;
  }
  }


  async createDuplicateDecision(){
    try {
      let reqData = {
        "appId": this.state.fieldArray['appId'],
        "compApplId": this.state.fieldArray['compApplId'],
        "compId": this.state.fieldArray['compApplId'],
        "decision": "Pending",
        "decisionRemark": "Pending",
        "maalemUserID": 0,
        "underwriterDecision": "",
        "underwriterRemark": ""
       }
      let headerConfig = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
      };
      const response = await axios.post(`http://122.166.172.240:3031/api/duplicate-decisions`, reqData,headerConfig);
      console.log(response.data)
      if(response.status == 200 || response.status == 201){
          return true
      }else{
        return false
      }
        
      

  } catch (error) {
      console.log(error);
      return false;
  }
  }

  async submitApplicationTo3i(appId){
    let headerConfig = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    try {
        const response = await axios.get(`http://122.166.172.240:3031/api/iord-soluton/onlineapp-sendto3i/` +appId, headerConfig);
        console.log("3iData",response.data)
        if(response.data.message !='error to update compAppId. null'){

        //get compAppId and send it to getDocumentList
        let loan = this.state.loan;
        let fieldArray = this.state.fieldArray;
        // fieldArray['compApplId']= '893'
        // loan['compApplId'] = '893'
        fieldArray['compApplId']= response.data.compApplId
        loan['compApplId'] = response.data.compApplId
        
        if(response.data.DuplicateFound && response.data.DuplicateFound=='Y'){
          fieldArray['loanCurrentStatus'] = "Duplicate Entry"
          const updateLoan = await CustomerApi.updateLoan(this.state); 
          await this.createDuplicateDecision();
          await this.setState({
            fieldArray,
            duplicateMsgPopUp:true
          })
          //need to model open and redirect him to dashboard to wait for decision from 3i
        }
        this.setState({
          loan,
          fieldArray,
        //   loaderState:false
          
        })
        console.log('color:green','loaderState',this.state.loaderState)
        return true
      }else{
        this.setState({ popupState: true,
          failureMsg: true,
          loaderState:false,
          status: response.data.message},
          () => this.removePopup())
      }
    } catch (error) {
        console.log(error);
        return false;
    }
    return false
  }


  async updateApplicationTo3i(appId){
    let headerConfig = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    try {
        const response = await axios.get(`http://122.166.172.240:3031/api/iord-soluton/submitApp-sendto3i/` +appId, headerConfig);
        console.log("3iData",response.data)
        
        //get compAppId and send it to getDocumentList
        let loan = this.state.loan;
        let fieldArray = this.state.fieldArray;
        if(response.data.compApplId){
          fieldArray['compApplId']= response.data.compApplId
          loan['compApplId'] = response.data.compApplId
          this.setState({
            loan,
            fieldArray
          })
        }
        console.log("here we are")
        return true
    } catch (error) {
        console.log(error);
        return false;
    }

  }

  

  saveAndContinue = async (e) => {
    this.setState({loaderState:true})
    console.log("In save And continue")
    console.log("In save And continue",this.state.fieldArray)
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = this.state.errorarray;
    let formStatus = true;

    if (!fieldArray['province']) {
      errorarray['province'] = 'Please enter your provience !';
      formStatus = false;

    }else{
      errorarray['province'] = '';
    }
    if (!fieldArray['address2']) {
      errorarray['address2'] = 'Please enter your address2 !';
      formStatus = false;
    }
    else{

    }
    if (!fieldArray['address1']) {
      errorarray['address2'] = 'Please enter your address1 !';
      formStatus = false;

    }
    if (!fieldArray['zipcode']) {
      errorarray['zipcode'] = 'Please enter your zipcode !';
      formStatus = false;

    }
    if (!fieldArray['city']) {
      errorarray['city'] = 'Please enter your city !';
      formStatus = false;

    }
    if (!fieldArray['buildingnumber']) {
      errorarray['buildingnumber'] = 'Please enter your buildingnumber !';
      formStatus = false;

    }
    if (!fieldArray['nationality']) {
      errorarray['nationality'] = 'Please enter your country !';
      formStatus = false;

    }
    if (!fieldArray['street']) {
      errorarray['street'] = 'Please enter your street !';
      formStatus = false;

    }


    if (!fieldArray['poBox']) {
      errorarray['poBox'] = 'Please enter your pobox !';
      formStatus = false;
    }
    console.log(fieldArray)
    console.log(errorarray)
    console.log(formStatus)

    if (formStatus) {
      const sta = await CustomerApi.checkAddress(this.state.fieldArray)
      console.log(sta)
      if (sta) {
        let staAdd = await CustomerApi.addAddress(this.state.fieldArray)
        console.log(staAdd)
        if (staAdd) {
          this.setState({ activekey: 1 ,loaderState:false});
          console.log('color:green','loaderState',this.state.loaderState)

        }

      }
      else {
        let staAdd = await CustomerApi.updateAddress(this.state.fieldArray)
        console.log(staAdd)
        if (staAdd) {
          this.setState({ activekey: 1,loaderState:false });
          console.log('color:green','loaderState',this.state.loaderState)

        }
        
      }
    }
    else {
      this.setState({
        errorarray: errorarray,
        loaderState:false
      });
      console.log('color:green','loaderState',this.state.loaderState)

    }
  };

  handleSelectChange = async (event) => {

    let filedvalue = this.state.fieldArray;
    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue,
    });
  }

  processInputAsset = async (event) => {
    let assetData = this.state.assetData;
    assetData[event.target.name] = event.target.value;
    this.setState({
      assetData,
    });
  }

  saveLoanDetail(){

  }


  // async componentDidMount() {



  // }


  newCustomer = () => {
    axios.get(config.STRAPI_URL + '/agent-newcustomers').then(res => {
      // console.log(res)
      this.setState({ newCustomerFields: res.data });
      // console.log('newCustomerFields', this.state.newCustomerFields)
    });
  }

  processInputHijriDate = obj => {
    let fieldArray = this.state.fieldArray;
    this.state.fieldArray.dateOfJoiningH = obj
    this.state.fieldArray.serviceinmonths = this.getAge(obj);
    // console.log('this.state.fieldArray.serviceinmonths');
    // console.log(this.state.fieldArray.serviceinmonths);
    this.setState({
      fieldArray,
    });
  }

  processInput = async (obj) => {
    let fieldArray = this.state.fieldArray;
    // console.log('OBJ: ' + obj);
    // console.log('target: ' + obj.target);
    let targateName = obj.target.name ? obj.target.name : '';
    let targateValue = obj.target.value ? obj.target.value : '';

    if (targateName === 'dateOfJoining' || targateName === 'dateOfJoiningH') {
      this.state.fieldArray.serviceinmonths = await this.getAge(targateValue);
      // console.log('this.state.fieldArray.serviceinmonths');
      // console.log(this.state.fieldArray.serviceinmonths);
    }

    if (targateName === 'monthlyHomeRent') {
      // console.log(' in monthlyHomeRent')
      // console.log('financePremium',fieldArray['financePremium'])
      let homeRent = obj.target.value;
      let fpremium = fieldArray['financePremium'] != undefined ? fieldArray['financePremium'] : 0;
      fieldArray.obligationsMonthly = fpremium * 1 + homeRent * 1
      await this.setState({
        obligationsMonthly: fpremium * 1 + homeRent * 1,
      });
    }
    if (targateName === 'financePremium') {
      let homeRent = fieldArray['monthlyHomeRent'] != undefined ? fieldArray['monthlyHomeRent'] : 0;
      let fpremium = obj.target.value;
      fieldArray.obligationsMonthly = fpremium * 1 + homeRent * 1
      await this.setState({
        obligationsMonthly: fpremium * 1 + homeRent * 1,
      });
    }

    fieldArray[targateName] = targateValue;
    this.setState({
      fieldArray,
    });
  };

  async getLoanDetail(appId){
    console.log("appId",appId)
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  };

    try {
        const response = await axios.get(`http://122.166.172.240:3031/api/loans?id.equals=` + appId, headerConfig);
        console.log(response)
        let fieldArray = this.state.fieldArray
        fieldArray=response.data[0]
        fieldArray['appId'] = appId
        await this.setState({
          fieldArray:fieldArray
        })
        console.log(response.data[0])
        return response.data[0]
        // let draftkey = this.state.fieldArray['activekey'];
        // console.log(draftkey)
        // if(draftkey){
        //   await this.setState({
        //     activekey: Number(draftkey),
        //   });
        // }
        
        // if (response.data.length == 0) {
        //     return true;
        // }
        // else {

        //     fieldArray['customerId'] = response.data[0].id
        //     return false
        // }

    } catch (error) {
        console.log(error);
        return {};
    }
  }


  jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
  }

  async componentDidMount() {
      this.setState({loaderState:true})
    // var tenure= document.getElementById('tenure').value;
    // var downpayment = document.getElementById('downpayment').value;
    // var invoiceAmt = document.getElementById('invoiceAmt').value;
    // var monthlyInst = document.getElementById('monthlyInst').value;
    // var payableAmount = document.getElementById('payableAmt').value;
    // var requestamount = document.getElementById('requestData').value;
    // const config = {
    //   headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') }
    // };
    // axios.get('http://122.166.172.240:3031/api/loans', config).then(res => {
    //   this.setState({
    //     loandetailsData: res,
    //   });
    //   const loandata = this.state.loandetailsData;
    //   console.log(loandata, 'loandetailsdata');
    // });
    // console.log(this.state)
    if(this.props.history!=null && this.props.history.location!=null && this.props.history.location.data!=null && this.props.history.location.data!=undefined){ 
      if(this.props.history.location.data.loan_current_status=='Approved'){
        let fieldArray = this.state.fieldArray
        fieldArray['appId']=this.props.history.location.data.appId
        await this.setState({
          fieldArray
        })
        await this.getLoanDetail(this.props.history.location.data.appId)
        console.log("compApplId",this.state.fieldArray.compApplId)
        if(this.state.fieldArray.compApplId){
          
          await this.getLoanOfferAndDocuments(this.state.fieldArray.compApplId)
        }
        await this.setState({
          activekey:5 
        })
      }else if(this.props.history.location.data.loan_current_status=='Draft'){
        let loanDetail = await this.getLoanDetail(this.props.history.location.data.appId)
        console.log("loanDetail",loanDetail)
        if(loanDetail){
          let customerData = await CustomerApi.getCustomer(loanDetail.custId)
          console.log("customerData",customerData)
          let addressData = await CustomerApi.getAddress(loanDetail.custId)
          if(addressData){
            customerData =await this.jsonConcat(customerData,addressData)
          }
          customerData =await this. jsonConcat(customerData,loanDetail)
          await this.setState({
            fieldArray:customerData
          })
        }   
        this.setState({
          activekey:21
        })
      }else if(this.props.history.location.data.loan_current_status=='OnlineApplication' || this.props.history.location.data.loan_current_status=='Duplicate Entry'){
        let loanDetail = await this.getLoanDetail(this.props.history.location.data.appId)
        console.log("loanDetail",loanDetail)
        if(loanDetail){
          let customerData = await CustomerApi.getCustomer(loanDetail.custId)
          console.log("customerData",customerData)
          let addressData = await CustomerApi.getAddress(loanDetail.custId)
          if(addressData){
            customerData =await this.jsonConcat(customerData,addressData)
          }
          customerData =await this. jsonConcat(customerData,loanDetail)
          let loan = this.state.loan
          loan['compApplId'] = this.state.fieldArray.compApplId
          await this.setState({
            fieldArray:customerData,
            loan
          })
          await this.getDocumentList();
          
        }
        this.setState({
          activekey:3
        })
      }
    }else{
      let customer = await JSON.parse(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'))

      console.log("customer",customer)
      
      let fieldArray = Object.assign({}, this.state.fieldArray);
      if(customer){
        fieldArray = customer
        fieldArray['custId']=customer.custId
        fieldArray['customerId']=customer.custId
        await this.setState({ fieldArray })
      }
   
      // await this.setState({ fieldArray: customer })
      const TAHKUM_CUSTOMRE_DATA = await JSON.parse(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'));
      const TAHKUM_ADDRESSS_DATA = await JSON.parse(window.sessionStorage.getItem('TAHKUM_ADDRESS_DATA'));
      // if (TAHKUM_CUSTOMRE_DATA) {
      //   // this.setState({
      //   //   customerDetail:JSON.parse(TAHKUM_CUSTOMRE_DATA)
      //   // })
      //   await this.setState({
      //     customerDetail: TAHKUM_CUSTOMRE_DATA
      //   })
      //   let fieldArray = Object.assign({}, this.state.fieldArray);
      //   fieldArray['custId']=customer.custId
      //   fieldArray['customerId']=customer.custId
      // }
      console.log("address",TAHKUM_ADDRESSS_DATA)
      if (TAHKUM_ADDRESSS_DATA!=null && TAHKUM_ADDRESSS_DATA.length>0) {
        // this.setState({
        //   addressDetail:JSON.parse(TAHKUM_ADDRESSS_DATA)
        // })
        console.log(TAHKUM_ADDRESSS_DATA[0])
        let fieldArray = Object.assign({}, this.state.fieldArray);
        fieldArray.address2 = TAHKUM_ADDRESSS_DATA[0].address2;
        fieldArray.address1 = TAHKUM_ADDRESSS_DATA[0].address1;
        fieldArray.poBox = Number(TAHKUM_ADDRESSS_DATA[0].postcode);
        fieldArray.district = TAHKUM_ADDRESSS_DATA[0].district;
        fieldArray.city = TAHKUM_ADDRESSS_DATA[0].city;
        fieldArray.street = TAHKUM_ADDRESSS_DATA[0].street;
        fieldArray.buildingnumber = TAHKUM_ADDRESSS_DATA[0].buildingnumber;
        fieldArray.ninId = TAHKUM_ADDRESSS_DATA[0].ninno;
       await  this.setState({
          addressDetail: TAHKUM_ADDRESSS_DATA[0],
          fieldArray
        })
      }
      // console.log(TAHKUM_CUSTOMRE_DATA);
      // console.log(TAHKUM_ADDRESSS_DATA);
    }
    console.log("componentDidMount",this.state.fieldArray)
    // await this.props.onlineApplication();
    // window.sessionStorage.setItem('language',"en")
    if (window.sessionStorage.getItem('language') == null) window.sessionStorage.setItem('language', 'en');
   
    await this.newCustomer()

    
    // this.setState({ activekey: 3 });
    const token = window.sessionStorage.getItem('iord_id_token');
    // axios({
    //   method: 'get',
    //   url: 'http://122.166.172.240:3031/api/customers?',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     ContentType: `application/json`,
    //   },
    //   params: {
    //     'id.equals': 35001,
    //   },
    // }).then(res => {
    //   this.setState({
    //     customerdetails: res,
    //   });
    //   console.log(this.state.customerdetails, 'customerdtatatata');
    // });

    axios.get('http://122.166.172.240:4000/simah').then(async (res) => {
      // console.log("simah",res)
      let loan = this.state.loan;
      let fieldArray = this.state.fieldArray
      if(res.data){
        let simahData = await res.data.simah
        console.log(simahData)
        loan.reqAmount = simahData[0].totalLimits - (simahData[0].totalLiabilities + simahData[0].loanInstallments)
        if(loan.reqAmount>30000){
          loan.reqAmount=30000
        }
        fieldArray.creditCardsLimits = res.data.simah[0].creditCardLimits
        await this.setState({
          loandetailsData: res.data.simah,
        })
      }
      
     
     
     
      await this.setState({
        // loandetailsData: res.data.simah,
        loan,
        fieldArray
      });
    });
    if(this.state.fieldArray==null){
      console.log('here')
      this.setState({
        fieldArray:{}
      })
    }
    // console.log(this.state.fieldArray)
    this.setState({loaderState:false})

  }

  handleTenureChange = async (event) => {

    let filedvalue = this.state.loan;
    filedvalue["tenure"] = event.target.value;
    this.setState({
      filedvalue,
    });
    const loan = await CustomerApi.loanCalculator(this.state.loan)
    console.log("loan calculator",loan)
    let loanDetail = this.state.loan 
    loanDetail.monthlyInst = loan.monthlyEMI
    loanDetail.totalInterest = loan.totalInterest
    loanDetail.payableAmt=loan.payableAmount
    this.setState({
      loanDetail,
    });
    
    // console.log(this.state)

  }


   saveAndContinueLoan = async (event) => {
     this.setState({loaderState:true})
      // const loan = await CustomerApi.updateLoan(this.state)
      event.preventDefault();
      let loan = this.state.loan;
      let formStatus = true;
      let errorArray = {}
      if(!loan['tenure']){
        errorArray['tenure']="Please Select tenure"
        formStatus=false
      }
      if(!loan['downPayment']){
        errorArray['downPayment']="Please fill down payment"
        formStatus=false
      }
      if(!loan['reqAmount']){
        errorArray['reqAmount']="Please fill requested Amount"
        formStatus=false
      }
      let fieldArray = this.state.fieldArray
      fieldArray['activekey']="4"
      await this.setState({
        fieldArray
      })
      if(formStatus){
        const updateLoan = await CustomerApi.updateLoan(this.state);
        if(updateLoan){
          let data = JSON.parse(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'))
          if(data){
            await this.updateApplicationTo3i(data.appId)
            this.setState({
              activekey:10,
              loaderState:false
            })
            console.log('color:green','loaderState',this.state.loaderState)

          }
         
        }
      }else{
        this.setState({
          errorarray:errorArray,
          loaderState:false
        })
        console.log('color:green','loaderState',this.state.loaderState)

      }
      



      // const loan = await CustomerApi.getLoan(this.state)
      // console.log("loanstatus",loan)
      // if(loan){
      //     const newLoan = CustomerApi.addLoan(this.state);
      //     if(newLoan){
      //         this.setState({
      //           activekey:10
      //         })
      //     }
      // }else{
        
      // }

      // console.log("update")
      // this.setState({ activekey: this.state.activekey + 1 })
   }

  //  getLoanOfferFrom3i(comAppId){
  //   let comAppIdData = {
  //     "comAppId": comAppId
  //   };
  //   const config = {
  //     // headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  //     headers: { appId: '1' },
  //   };
  //   axios.post(config.KASTLE_URL + 'digital/getIndicativeOffer?access_token='+window.sessionStorage.getItem('3iaccessToken'), comAppIdData, config).then(res => {
  //       if(res!=null){
  //         console.log(res)
  //       }
  //   });
  //  }

   createAssestResource(){
    let assestData = {
      // "agentName": 0,
      "appId": this.state.fieldArray['id'],
      "assetCategory": this.state.assetData['assetCat'],
      "assetCondition": 'New',
      "assetCost": 0,
      "assetDetails": this.state.assetData['assetDesc'],
      "assetMake": '',
      "assetModel": '',
      "assetModelYear": 0,
      "assetName": this.state.assetData['assetName'],
      "assetPrice": Number(this.state.assetData['assetPrice']),
      "assetSubCategory": '',
      "balloonPayment": 0,
      "createDate": "2020-11-13",
      "dealerName": "string",
      "downPayment": 0,
      // "id": 0,
      "itemNumber": 0,
      "loanAppicationStatus": "string",
      "noOfUnits": 0,
      "referenceNumber": 0,
      "requestId": 0,
      "vat": 0,
      "vendorId": window.sessionStorage.getItem('vendor')=='STC'?"359":(window.sessionStorage.getItem('vendor')=='JARIR'?"360":"349"),
    };
    console.log("assestData",assestData)
    const config = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    axios.post('http://122.166.172.240:3031/api/assets', assestData, config).then(res => {
      if(res!=null){
        console.log('assetdetail',res)
      }
  });
   }



   createAssestResourceRiyadh(){
    let assestData = {
      // "agentName": 0,
      "appId": this.state.fieldArray['id'],
      "assetCategory": this.state.assetData['assetCat'],
      "assetCondition": 'New',
      "assetCost": 0,
      "assetDetails": this.state.assetData['assetDesc'],
      "assetMake": '',
      "assetModel": '',
      "assetModelYear": 0,
      "assetName": this.state.assetData['assetName'],
      "assetPrice": Number(this.state.assetData['assetPrice']),
      "assetSubCategory": '',
      "balloonPayment": 0,
      "createDate": "2020-11-13",
      "dealerName": "string",
      "downPayment": 0,
      // "id": 0,
      "itemNumber": 0,
      "loanAppicationStatus": "string",
      "noOfUnits": 0,
      "referenceNumber": 0,
      "requestId": 0,
      "vat": 0,
      "vendorId": window.sessionStorage.getItem('vendor')=='STC'?"359":(window.sessionStorage.getItem('vendor')=='JARIR'?"360":"349"),
      "unitPrice":this.state.assetDataRiyadh['unitPrice'],
      "weight":this.state.assetDataRiyadh['weight'],
      "serialNoRamzalsanaf":this.state.assetDataRiyadh['serialNoRamzalsanaf'],
      "typesofgood":this.state.assetDataRiyadh['typesofgood'],
      "totalPrincipalAmount":this.state.assetDataRiyadh['totalPrincipalAmount'],

    };
    console.log("assestData",assestData)
    const config = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    axios.post('http://122.166.172.240:3031/api/assets', assestData, config).then(res => {
      if(res!=null){
        console.log('assetdetail',res)
      }
    });
   }


  async getLoanOfferAndDocuments(comAppId){
      this.setState({loaderState:true})
    console.log('in getLoanOfferAndDocuments')
    let outh;
    let headerConfig = {
        headers: {
            Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
        },
        params: {
            grant_type: 'password',
            username: 'user_admin',
            password: config.KASTLE_PASS
        },
    }
    console.log(headerConfig)
    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)

    let comAppIdData = {
      "compApplId": comAppId
    };
    // const configg = {
    //   // headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    //   headers: { "Content-Type": 'application/json' },
    // };
    await axios.post(config.KASTLE_URL + 'digital/getOfferDetails?access_token='+outh.data.access_token, comAppIdData).then(res => {
      console.log(res)  
      if(res.data!=null){
        let loanOffer = Object.assign({}, this.state.loanOffer);
        loanOffer.approvedLoanAmount = res.data.offerfinanceamt
        loanOffer.loanId = res.data.compApplId
        loanOffer.emiAmount= res.data.instalmentamount
        loanOffer.tenure= this.state.fieldArray['tenure']
        loanOffer.processingFee=0
        loanOffer.requestedLoanAmount= res.data.reqfinanceamt
        loanOffer.underWriterDecision= 'Approved'
        this.setState({
          loanOffer,
        
        },()=>this.loaderFalse())
        }
    });
   }


  //  getIndicativeOffer(comAppId){
  //   let comAppIdData = {
  //     "comAppId": comAppId
  //   };
  //   const config = {
  //     // headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  //       headers: { "Content-Type": 'application/json',
  //       appId: '1' },
  //     };
  //     axios.post(config.KASTLE_URL + 'digital/getIndicativeOffer?access_token='+window.sessionStorage.getItem('3iaccessToken'), comAppIdData, config).then(res => {
  //         if(res!=null){
  //           console.log(res)
  //         }
  //     });
  //  }

    saveAndContinueAsset =  async () => {
    //upload document
this.setState({loaderState:true})
    let loan = this.state.loan;
    loan.compApplId=this.state.fieldArray['compApplId']
    await this.setState({
      loan
    })
    let documentList = await CustomerApi.getDocumentList(this.state)
    this.setState({ documentList: documentList });
    if(documentList!=null && documentList.length>0){

    }else{
      documentList= [
        {
            "compApplId": this.state.fieldArray['compApplId'],
            "docid": this.state.fieldArray['compApplId']+"1",
            "dms_doc_id": "",
            "docdescription": "ApplicationForm",
            "uploadedyn": "N"
        },
        {
            "compApplId": this.state.fieldArray['compApplId'],
            "docid": this.state.fieldArray['compApplId']+"2",
            "dms_doc_id": "",
            "docdescription": "3 Month Bank Statement",
            "uploadedyn": "N"
        },
        {
            "compApplId": this.state.fieldArray['compApplId'],
            "docid": this.state.fieldArray['compApplId']+"3",
            "dms_doc_id": "",
            "docdescription": "id Proof",
            "uploadedyn": "N"
        },
        

      ]
    this.setState({ documentList: documentList });
    documentList.map((data)=>{
      let documentRequired = this.state.documentRequired.concat(data.docid)
      console.log(documentRequired)
      this.setState({
        documentRequired:documentRequired
      })
    })
    }
    await this.getPurchaseOrder(this.state.fieldArray['compApplId'])
    this.setState({
      activekey:6,
      loaderState:false
    })
    console.log('color:green','loaderState',this.state.loaderState)

   }

    downloadPurchaseOrder = (arrayBuffer, type) =>  {
      this.setState({loaderState:true})
    var file = new Blob([arrayBuffer], { type: 'application/pdf'  });
    // var url = URL.createObjectURL(blob);
    const fileURL = URL.createObjectURL(file);

            window.open(fileURL, "_blank");
    // window.open(url);
  }


   async getPurchaseOrder(compApplId){
    let outh;
    let headerConfig = {
        headers: {
            Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
        },
        params: {
            grant_type: 'password',
            username: 'user_admin',
            password: config.KASTLE_PASS
        },
    }
    console.log(headerConfig)
    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)

      let reqData = {
        "compApplId": this.state.fieldArray['compApplId'],
        "rptType":"PO",
        "makerId":null
    }
      console.log("reqData",reqData)
      const response = await axios.post(config.KASTLE_URL + 'digital/getpo/?access_token=' + outh.data.access_token, reqData)
      console.log(response)
      if (response.status == 200) {
        let poData = Object.assign({}, this.state.poData);
          poData.fileName=response.data.fileName
          poData.fileExtension=response.data.fileExtension
          poData.fileContent=response.data.fileContent
          this.setState({
            poData,
            loaderState:false
          })
          console.log('color:green','loaderState',this.state.loaderState)

      }
      else {
          return []
          this.setState({
            loaderState:false
          })
      }

   }

   async getLoanOfferLetter(compApplId){
    let outh;
    let headerConfig = {
        headers: {
            Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
        },
        params: {
            grant_type: 'password',
            username: 'user_admin',
            password: config.KASTLE_PASS
        },
    }
    console.log(headerConfig)
    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)
   }

    applicationSubmited = async () => {
      this.setState({loaderState:true})
     console.log(this.state.fieldArray)
    let flag = await this.updateApplicationTo3i(this.state.fieldArray['appId'])
    //  let flag = await this.updateApplicationTo3i(this.state.fieldArray['id'])
    console.log(flag)
     if(flag){
       this.setState({
        activekey: 10,
        loaderState:false
       })
       console.log('color:green','loaderState',this.state.loaderState)

     }
   }

   processLoanOfferInput = (e)=>{
     let loanOffer = this.state.loanOffer
     loanOffer[e.target.name]=e.target.value
     this.setState({
      loanOffer
     })
     
   }


    updateLoanOffer = async () => {
      this.setState({loaderState:true})
     console.log(this.state)
    let outh;
    let headerConfig = {
        headers: {
            Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
        },
        params: {
            grant_type: 'password',
            username: 'user_admin',
            password: config.KASTLE_PASS
        },
    }
    console.log(headerConfig)
    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig)
    let reqData = {
        "compApplId": this.state.fieldArray['compApplId'],
        "newreqfinanceamt":this.state.loanOffer.newRequestedLoanAmount,
        "newtenure": this.state.loanOffer.newTenure,
        "offerfinanceamt": this.state.loanOffer.requestedLoanAmount,
        "oldtenure": this.state.loanOffer.oldtenure
    }
    console.log("reqData",reqData)
    const response = await axios.post(config.KASTLE_URL + 'digital/customerAppeal?access_token=' + outh.data.access_token, reqData)
    console.log(response)
    if (response.status == 200) {
      this.props.history.push('/agent/dashboard')
this.setState({loaderState:false})
console.log('color:green','loaderState',this.state.loaderState)

    }
    else {
        // return []
        this.setState({loaderState:false})
        console.log('color:green','loaderState',this.state.loaderState)


    }
   }

  render() {
    let newCustomerDataObj = this.state.newCustomerFields ? this.state.newCustomerFields : '';

    let field0001, field0002, field0003, field0004, field0005, field0006, field0007, field0008, field0009, field0010, field0011, field0012, field0013, field0014, field0015, field0016, field0017, field0018, field0019, field0020, field0021, field0022, field0023, field0024, field0025, field0026, field0027, field0028, field0029, field0030,
      field0031, field0032, field0033, field0034, field0035, field0036, field0037, field0038, field0039, field0040, field0041, field0042, field0043, field0044, field0045, field0046, field0047, field0048, field0049, field0050, field0051, field0052, field0053, field0054, field0055, field0056, field0057, field0058, field0059, field0060,
      field0061, field0062, field0063, field0064, field0065, field0066, field0067, field0068, field0069, field0070, field0071, field0072, field0073, field0074, field0075, field0076, field0077, field0078, field0079, field0080, field0081, field0082, field0083, field0084, field0085, field0086, field0087, field0088, field0089, field0090,
      field0091, field0092, field0093, field0094, field0095, field0096, field0097, field0098, field0099, field0100, field0101, field0102, field0103, field0104, field0105, field0106, field0107, field0108, field0109, field0110, field0111, field0112, field0113, field0114, field0115, field0116, field0117, field0118, field0119, field0120,
      field0121, field0122, field0123, field0124, field0125, field0126, field0127, field0128, field0129, field0130, field0131, field0132, field0133, field0134, field0135, field0136, field0137, field0138, field0139, field0140, field0141, field0142, field0143, field0144, field0145, field0146, field0147, field0148, field0149, field0150, field0151, field0152, field0153, field0154, field0155, field0156, field0157, field0158, field0159, field0160, field0161, field0162, field0163, field0164, field0165, field0166, field0167, field0168, field0169, field0170, field0171, field0172, field0173, field0174, field0175, field0176, field0177, field0178, field0179, field0180, field0181, field0182, field0183, field0184, field0185, field0186, field0187, field0188, field0189, field0190, field0191, field0192, field0193, field0194, field0195, field0196, field0197, field0198, field0199;
    // const TAHKUM_CUSTOMRE_DATA = window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA');
    // const TAHKUM_ADDRESSS_DATA = window.sessionStorage.getItem('TAHKUM_ADDRESSS_DATA');
    // console.log(JSON.stringify(TAHKUM_CUSTOMRE_DATA));
    //console.log(JSON.stringify(TAHKUM_ADDRESSS_DATA));
    const vendor = window.sessionStorage.getItem('vendor') != null ? window.sessionStorage.getItem('vendor').toLowerCase() : "";

    let loandetailsdata = this.state.loandetailsData ? this.state.loandetailsData[0] : [];
    // console.log(newCustomerDataObj)
    // console.log(window.sessionStorage.getItem('language'))
    // if(newCustomerDataObj!=null && newCustomerDataObj.length==2){
    //   if(newCustomerDataObj[0].field0001== window.sessionStorage.getItem('language')){

    //   }else if(newCustomerDataObj[1].field0001== window.sessionStorage.getItem('language')){

    //   }
    // }
    newCustomerDataObj.map((b, index) => {
      // console.log(b)
      if (b.field0001 == window.sessionStorage.getItem('language')) {
        field0001 = b.field0001; field0002 = b.field0002; field0003 = b.field0003; field0004 = b.field0004; field0005 = b.field0005; field0006 = b.field0006; field0007 = b.field0007; field0008 = b.field0008; field0009 = b.field0009; field0010 = b.field0010; field0011 = b.field0011; field0012 = b.field0012; field0013 = b.field0013; field0014 = b.field0014; field0015 = b.field0015; field0016 = b.field0016; field0017 = b.field0017; field0018 = b.field0018; field0019 = b.field0019; field0020 = b.field0020; field0021 = b.field0021; field0022 = b.field0022; field0023 = b.field0023; field0024 = b.field0024; field0025 = b.field0025; field0026 = b.field0026; field0027 = b.field0027; field0028 = b.field0028; field0029 = b.field0029; field0030 = b.field0030; field0031 = b.field0031;
        field0032 = b.field0032; field0033 = b.field0033; field0034 = b.field0034; field0035 = b.field0035; field0036 = b.field0036; field0037 = b.field0037; field0038 = b.field0038; field0039 = b.field0039; field0040 = b.field0040; field0041 = b.field0041; field0042 = b.field0042; field0043 = b.field0043; field0044 = b.field0044; field0045 = b.field0045; field0046 = b.field0046; field0047 = b.field0047; field0048 = b.field0048; field0049 = b.field0049; field0050 = b.field0050; field0051 = b.field0051; field0052 = b.field0052; field0053 = b.field0053; field0054 = b.field0054; field0055 = b.field0055; field0056 = b.field0056; field0057 = b.field0057; field0058 = b.field0058; field0059 = b.field0059; field0060 = b.field0060; field0061 = b.field0061; field0062 = b.field0062;
        field0063 = b.field0063; field0064 = b.field0064; field0065 = b.field0065; field0066 = b.field0066; field0067 = b.field0067; field0068 = b.field0068; field0069 = b.field0069; field0070 = b.field0070; field0071 = b.field0071; field0072 = b.field0072; field0073 = b.field0073; field0074 = b.field0074; field0075 = b.field0075; field0076 = b.field0076; field0077 = b.field0077; field0078 = b.field0078; field0079 = b.field0079; field0080 = b.field0080; field0081 = b.field0081; field0082 = b.field0082; field0083 = b.field0083; field0084 = b.field0084; field0085 = b.field0085; field0086 = b.field0086; field0087 = b.field0087; field0088 = b.field0088; field0089 = b.field0089; field0090 = b.field0090; field0091 = b.field0091; field0092 = b.field0092; field0093 = b.field0093;
        field0094 = b.field0094; field0095 = b.field0095; field0096 = b.field0096; field0097 = b.field0097; field0098 = b.field0098; field0099 = b.field0099; field0100 = b.field0100; field0101 = b.field0101; field0102 = b.field0102; field0103 = b.field0103; field0104 = b.field0104; field0105 = b.field0105; field0106 = b.field0106; field0107 = b.field0107; field0108 = b.field0108; field0109 = b.field0109; field0110 = b.field0110; field0111 = b.field0111; field0112 = b.field0112; field0113 = b.field0113; field0114 = b.field0114; field0115 = b.field0115; field0116 = b.field0116; field0117 = b.field0117; field0118 = b.field0118; field0119 = b.field0119; field0120 = b.field0120; field0121 = b.field0121; field0122 = b.field0122; field0123 = b.field0123; field0124 = b.field0124; field0125 = b.field0125; field0126 = b.field0126;
        field0127 = b.field0127; field0128 = b.field0128; field0129 = b.field0129; field0130 = b.field0130; field0131 = b.field0131; field0132 = b.field0133; field0134 = b.field0134; field0135 = b.field0135; field0136 = b.field0136; field0137 = b.field0137; field0138 = b.field0138; field0139 = b.field0139; field0140 = b.field0140; field0141 = b.field0141; field0142 = b.field0142; field0143 = b.field0143; field0144 = b.field0144; field0145 = b.field0145; field0146 = b.field0146; field0147 = b.field0147; field0148 = b.field0148; field0149 = b.field0149; field0150 = b.field0150; field0151 = b.field0151; field0152 = b.field0152; field0153 = b.field0153; field0154 = b.field0154; field0155 = b.field0155; field0156 = b.field0156; field0157 = b.field0157; field0158 = b.field0158; field0159 = b.field0159; field0160 = b.field0160; field0161 = b.field0161;
        field0162 = b.field0162; field0163 = b.field0163; field0164 = b.field0164; field0165 = b.field0165; field0166 = b.field0166; field0167 = b.field0167; field0168 = b.field0168; field0169 = b.field0169; field0170 = b.field0170; field0171 = b.field0171; field0172 = b.field0172; field0173 = b.field0173; field0174 = b.field0174; field0175 = b.field0175; field0176 = b.field0176; field0177 = b.field0177; field0178 = b.field0178; field0179 = b.field0179; field0180 = b.field0180; field0181 = b.field0181; field0182 = b.field0182; field0183 = b.field0183; field0184 = b.field0184; field0185 = b.field0185; field0186 = b.field0186; field0187 = b.field0187; field0188 = b.field0188; field0189 = b.field0189; field0190 = b.field0190; field0191 = b.field0191; field0192 = b.field0192; field0193 = b.field0193; field0194 = b.field0194; field0195 = b.field0195; field0196 = b.field0196;
        field0197 = b.field0197; field0198 = b.field0198; field0198 = b.field0199;
      }
    });
    ///console.log(loandetailsdata, 'loandatata')
    //console.log(this.state.employmentDetails,'empdetails')
    //let empdetailsdata=this.state.employmentDetails;

    return (
      <div>
        {this.state.loaderState?
        <Loader/>
        :''}
          {this.state.popupState ? (
          <PopUp
            status={this.state.status}
            successMsg={this.state.successMsg}
            failureMsg={this.state.failureMsg}
          />
         ) : (
            ''
          )}
          {this.state.duplicateMsgPopUp?( <Newpopup  viewdashboard={this.viewdashboard.bind(this)}/>):''}
         
        <div className="container-fluid">
        <div className={(window.sessionStorage.getItem('language'))=='en'?'englishCssStc':'arabicCssStc'}>
          <div className='top-image' >
              <div className='col-sm-2 col-xs-12  text-center'>
                <img
                  src={Logo}
                  style={{ maxWidth: '130px', marginTop: '17px' }}
                />
              </div>
            </div>
            <div
              className='col-sm-10 col-xs-12 card-main-head'
              style={{ marginTop: '33px', height: '77px' }}
            >
              <div class=''>
                <div className='col-xs-6 col-sm-6' style={{ direction: 'ltr' }}>
                {window.sessionStorage.getItem('vendor')=='STC'?
                  <img
                    src={StcLogo}
                    style={{ maxWidth: '100px', marginTop: '10px' }}
                  />
                  :""}
                  {window.sessionStorage.getItem('vendor')=='JARIR' ?
                   <img
                    src={JARIRLogo }
                    style={{ maxWidth: '150px'}}
                  />
                  :""}
                </div>
                <div className='col-xs-6 col-sm-6 side-dropdown' style={{ textAlign: 'end' }}>
                  <select defaultValue={window.sessionStorage.getItem('language')} onChange={(e) => this.dropDownHandler(e)} style={{ background: 'white', marginTop: '25px',width:'initial' }}>
                    <option value='logout'>logout</option>
                    <option value='en'>English</option>
                    <option value='ar'>Arabic</option>

                  </select>
               
                </div>
              </div>
            </div>
            <div className='down-image'>
              <div className='col-sm-2 col-xs-12  text-center'>
                <img
                  src={Logo}
                  style={{ maxWidth: '130px', marginTop: '17px' }}
                />
              </div>
            </div>
              <div className="col-xs-12">
           
              <div className="col-sm-4 col-xs-12" style={{marginTop:'20px'}} >
                  <div className="verficationcardstyle">
                    <div >
                      <div className="card-body text-center" >
                      
                <img src={SideImage} style={{marginTop:'20px'}}/>

                        <div className="text-center">
                          <div>
                            <button className="signup-btn" onClick={this.viewdashboard} style={{ width: '169px', padding: '10px' }} >
                              {/* {field0028} */}{field0028}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-xs-12" >
                  <div className="new-signup">
                {this.state.activekey == 1 ? (
                  <div className="Firstpage">
                    <div className="agent-reject-details">Employment Details</div>

                    <div className='row'>
                                        <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label name="subSector" value={this.state.fieldArray.subSector} onChange={this.handleSelectChange} >{field0007}</label>
                          <select>
                            <option value="-1">{field0196}</option>
                            <option value="procurement">Procurement</option>
                            <option value="procurement">Information Technology</option>
                            <option value="procurement">House Keeping</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label name="sector"> {field0007}</label>
                          <select id="sector" name="sector" value={this.state.fieldArray.sector} onChange={this.handleSelectChange}>
                            <option value="-1">{field0196}</option>
                            <option value="private">Private</option>
                            <option value="government">Government</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label name="employmentType">{field0030}</label>
                          <select name="employmentType" value={this.state.fieldArray.employmentType} onChange={this.handleSelectChange}>
                            <option value="-1">{field0192}</option>
                            <option value="BUSS">Business</option>
                            <option value="SEMP">Self Employed</option>
                            <option value="SAL">Salaried</option>
                          </select>
                        </div>
                      </div>
                      </div>
                      <div className='row'>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                      
                            <label>{field0004}</label>
                            <input
                              type="text"
                              name="employerName"
                              value={this.state.fieldArray.employerName}
                              onChange={this.processInput}
                              id="empname"
                            />
                            <i className="text-danger">{this.state.errorarray.employerName}</i>
                       
                        </div>
                   </div>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                     
                            <label for="designation">{field0008}</label>
                            <select name="designation" value={this.state.fieldArray.designation} onChange={this.handleSelectChange}>
                              <option value="">Select Designation</option>
                              <option value="CGM">Chief General Manager</option>
                              <option value="GM">General Manager</option>
                              <option value="DGM">Associate Chief Manager</option>
                              <option value="MAN1">Manager</option>
                              <option value="RM">Regional Manager</option>
                              <option value="DRM">Deputy Regional Manager</option>
                              <option value="NHO">National Head - Branch & Centralized Operations</option>
                              <option value="AM">Area Manager</option>
                              <option value="HIT">Head - Information Technology</option>
                              <option value="AUD">Auditor</option>
                              <option value="ASM">Area Sales Manager</option>
                              <option value="CEO">Director and Chief Executive</option>
                              <option value="ACC">Accountant</option>
                            </select>
                          </div>
                        </div>
                   
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label> {field0010}</label>
                          <input
                            type="number"
                            name="serviceinmonths"
                            value={this.state.fieldArray.serviceinmonths}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.serviceinmonths}</i>
                        </div>
                      </div>
                    </div>
                      <div className='row'>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label>{field0197}</label>
                          <HijriDatePicker
                            inputName="hijri_date"
                            className="form-control"
                            selectedDate="1424/08/03"
                            dateFormat="iYYYY/iMM/iDD"
                            quickSelect
                            value={this.state.fieldArray.dateOfJoiningH}
                            onChange={this.processInputHijriDate}
                          />
                          <i className="text-danger">{this.state.errorarray.dateOfJoining}</i>
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label>{field0009}</label>
                          <input
                            type="date"
                            name="dateOfJoining"
                            min="2002-11-04"
                            value={this.state.fieldArray.dateOfJoining}
                            onChange={this.processInput}
                            style={{ fontSize: '14px' }}
                          />
                          <i className="text-danger">{this.state.errorarray.dateOfJoining}</i>
                        </div>
                      </div>
                    </div>
                   
                    <div className="agent-reject-details">Financial Details</div>
                    {/* first section start */}
                    <div className='row'>

                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                            <label>{field0014}</label>
                            <input
                              type="number"
                              name="financePremium"
                              value={this.state.fieldArray.financePremium}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.financePremium}</i>
                          </div>
                    
                      </div>
                      <div className="col-sm-4 col-xs-12">
                          <div style={{marginTop:'20px'}} className="agent-lablestyle">
                            <label>{field0013}</label>
                            <input
                              type="number"
                              name="monthlyAdditionalIncome"
                              value={this.state.fieldArray.monthlyAdditionalIncome}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlyAdditionalIncome}</i>
                          </div>
                      
                      </div>
                      <div className="col-sm-4 col-xs-12">
                      
                          <div style={{marginTop:'20px'}} className="agent-lablestyle">
                            <label>{field0012} </label>
                            <input
                              type="number"
                              name="monthlySalary"
                              value={this.state.fieldArray.monthlySalary}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlySalary}</i>
                          </div>
                      
                      </div>
                    </div>
               
                    <div className="row">
                     
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                     
                            <label>{field0016} </label>
                            <input
                              type="number"
                              name="noofchildren"
                              value={this.state.fieldArray.noofchildren}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.noofchildren}</i>
                          </div>
                        </div>
                  
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                      
                            <label>{field0015} </label>
                            <input
                              type="number"
                              name="numofdpdntSpouse"
                              value={this.state.fieldArray.numofdpdntSpouse}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.numofdpdntSpouse}</i>
                          </div>
                  
                      </div>
                
                   

                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                          <label>{field0024}</label>
                          <input type="number" name="assetvalue" value={this.state.fieldArray.assetvalue} onChange={this.processInput} />
                          <i className="text-danger">{this.state.errorarray.assetvalue}</i>
                        </div>
                      </div>
                      </div>
                      <div className='row'>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle">
                         
                              <label>{field0018} </label>
                              <input
                                type="number"
                                name="monthlyHomeRent"
                                value={this.state.fieldArray.monthlyHomeRent}
                                onChange={this.processInput}
                              />
                              <i className="text-danger">{this.state.errorarray.monthlyHomeRent}</i>
                            </div>
                      
                      </div>
                      <div className="col-sm-4 col-xs-12">
                          <div style={{marginTop:'20px'}} className="agent-lablestyle">
                            <label>{field0017} </label>
                            <select name="accomodationType" value={this.state.fieldArray.accomodationType} onChange={this.handleSelectChange}>
                            <option value="">Select Accomodation Type</option>
                              <option value="Flat">Flat</option>
                              <option value="Flat">Flat</option>
                            </select>
                          </div>
                      </div>
                  
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle shadow">
                          <label>{field0031}</label>

                          <input type="text" name="homefinance" disabled value="0.00" className="shadow" />
                        </div>
                      </div>
                      </div>
                      <div className='row'>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle shadow">
                          <label>Obligations (Monthly) </label>
                          <input
                            type="text"
                            name="obligationsMonthly"
                            readOnly="readOnly"
                            className="shadow"
                            value={this.state.obligationsMonthly}
                          />
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle shadow">
                          <label>{field0021} </label>
                          <input
                            type="text"
                            name="financingInstallments"
                            disabled
                            value={loandetailsdata.loanInstallments}
                            className="shadow"
                          />
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <div style={{marginTop:'20px'}} className="agent-lablestyle shadow">
                          <label>{field0022}</label>
                          <input type="text" name="creditLimit" disabled value={loandetailsdata.creditCardLimits} className="shadow" />
                        </div>
                      </div>
                    </div>

                    <div className="agent-saveandcontinuestyle">
                      <button className="agent-savebtn" onClick={this.saveAndContinueDraft}>
                        Save And Continue
                      </button>
                    </div>
                  </div>
               
                ) : this.state.activekey == 2 ? (
                  <div className="second-page">
                    <div className="agent-reject-details">Asset Details</div>
                    {/* first section start */}
                    { window.sessionStorage.getItem('vendor')=='STC' ? (
                    <div>
                    <div className="row" >
                      <div className="col-sm-4 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0038} </label>
                          <select id="assetCat" name="assetCat" onChange={this.processInputAsset}>
                            <option value="electonics">Electronics</option>
                            <option value="mobiles">Mobile</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-4 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0036} </label>
                          <input
                            type="text"
                            name="assetModel"
                            onChange={this.processInputAsset}
                            value={this.state.assetData.assetModel}
                            id="assetModel"
                          />
                          <i className='text-danger'>{this.state.errorassetarray.assetModel}</i>
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0037} </label>
                          <input
                            type="text"
                            name="assetName"
                            onChange={this.processInputAsset}
                            value={this.state.assetData.assetName}
                            id="assetName"
                          />
                                                    <i className='text-danger'>{this.state.errorassetarray.assetName}</i>

                        </div>
                      </div>
                      </div>
                      <div className='row'>
                      <div className="col-sm-4 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0035} </label>
                          <input
                            type="number"
                            name="assetPrice"
                            onChange={this.processInputAsset}
                            value={this.state.assetData.assetPrice}
                            id="assetPrice"
                          />
                                                    <i className='text-danger'>{this.state.errorassetarray.assetPrice}</i>

                        </div>
                      </div>
               

                      <div className="col-sm-4 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0040}</label>
                          <input
                            type="number"
                            name="assetQty"
                            onChange={this.processInputAsset}
                            id="assetQty"
                            value={this.state.assetData.assetQty}
                          />
                                                    <i className='text-danger'>{this.state.errorassetarray.assetQty}</i>

                        </div>
                      </div>
</div>
<div className='row'>
                      <div className="col-sm-12 col-xs-12">
                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                          <label>{field0039} </label>
                          <input type="text" name="assetDesc" id="assetDesc" value={this.state.assetData.assetDesc} onChange={this.processInputAsset}/>
                        </div>
                      </div>
                      </div>
                      <div className="asset-addmoreasset">
                        <button className="asset-savebtn" onClick={this.addMoreDetails}>
                          {field0041}
                        </button>
                      </div>
                    </div>
                  ) : ""}

                    {/*asset - table details */}

                    <div className="asset-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Item Number</th>
                            <th>Asset Name</th>
                            <th>Quantity</th>
                            <th>Item Price</th>
                            <th>Vat Amount</th>
                            <th>Total Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.assetDataArray!=null && this.state.assetDataArray.length>0?this.state.assetDataArray.map((row, index) => {
                            let vatAmt = (row.assetPrice * 15) / 100;
                            return (
                              <tr key={index}>
                                <td>{row.assetModel}</td>
                                <td>{row.assetName}</td>
                                <td>{row.assetQty}</td>
                                <td>SR {row.assetPrice}</td>
                                <td>SR {(row.assetPrice * 15) / 100}</td>
                                <td>SR {(row.assetPrice + vatAmt) * row.assetQty}</td>
                              </tr>
                            );
                          }):""}
                        </tbody>
                      </table>
                      <div className="agent-saveandcontinuestyle">
                        <button className="agent-savebtn" onClick={this.saveAndContinueAsset}>
                          {field0023}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey == 3 ? (
                  <div className="thirdpage">
                    <div className="row">
                      <div className="agent-reject-details">{field0050}</div>
                      <div className="col-sm-6 col-xs-12">
                        {this.state.documentType}
                     
                          <div className='upload' style={{height:'150px',marginTop:'52px'}}>
                    <input
                      type='file'
                      accept='application/pdf,image/jpg ,image/jpeg'
                      onChange={(e)=>this.docUpload(e)}
                    />
                    <p>Upload Documents</p>
                  </div>
                      </div>
                      {/* left section end */}
                      <div className="col-sm-6 col-xs-12">
                
                     
                      {this.state.documentList &&
                          this.state.documentList.map((item) => {
                            return (
         
                              <div  style={{marginTop:'10px'}}>
                              

                                <p className="" id={item.docid}>
                               <b> <i className="fa fa-file-pdf-o red-color "></i>&nbsp;{item.docdescription}</b>
                                </p>
                                <input
                                  type="file"
                                  id={item.docid}
                                  onChange={this.docUpload}
                                />
                              </div>
                            );
                          })}

                      </div>
                    </div>
                    <i className="text-danger">{this.state.errorarray.documentError}</i>
                    <div className="agent-saveandcontinuestyle">
                      <button className="agent-savebtn" onClick={this.onFileUpload}>
                        {field0023}
                      </button>
                    </div>
                  </div>
                ) : /* Loan details page */
                      this.state.activekey == 4 ? (
                        <div className="fourth page">
                            <div className="agent-reject-details">{field0057}</div>
                            <div className="row">

                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label> {field0198} </label>
                                <select name="tenure" onChange={this.handleTenureChange} value={this.state.loan.tenure} >
                                  <option value="6">6</option>
                                  <option value="12">12</option>
                                  <option value="18">18</option>
                                  <option value="24" selected>24</option>
                                  <option value="30">30</option>
                                  <option value="36">36</option>
                                  <option value="42">42</option>
                                  <option value="48">48</option>
                                  <option value="54">54</option>
                                  <option value="60" >
                                    60
                            </option>
                                </select>
                                <i className="text-danger">{this.state.errorarray.tenure}</i>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label>{field0059} </label>
                                <input type="number"  id="downPayment" name="downPayment" value={this.state.loan.downPayment} onChange={this.handleDownpayment} />
                                <i className="text-danger">{this.state.errorarray.downPayment}</i>
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label>{field0199}  </label>
                               <input type="number" id="reqAmount" name="reqAmount" value={this.state.loan.reqAmount} onChange={this.handleInvoidAmt} />
                               <i className="text-danger">{this.state.errorarray.reqAmount}</i> 
                              </div>
                            </div>
                          </div>

                          <div className="row" >
                         
                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label>{field0063}</label>
                                <input type="number" value={this.state.loan.monthlyInst} readOnly  />
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label>{field0062} </label>
                                <input type="number" value={this.state.loan.payableAmt} readOnly />
                              </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                              <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                <label>{field0061} </label>
                                <input type="number" value={this.state.loan.reqAmount} readOnly/>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button className="signup-btn" style={{width:'150px',padding:'10px'}} onClick={this.saveAndContinueLoan}>
                              Submit
                      </button>
                          </div>
                        </div>
                      ) : /*---------------------------- Loan Offer Details-------------------------------------------- */
                        this.state.activekey == 5 ? (
                          <div className="fifth page">
                              <div className="agent-loan-details">Loan Offer Details</div>
                              <div className="row">

                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0068} </label>
                                  <input type="number" name="emiAmount" value={this.state.loanOffer.emiAmount}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0066}  </label>
                                  <input type="number" name="requestedLoanAmount" value={this.state.loanOffer.requestedLoanAmount}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0058} </label>
                                  <input type="number" name="loanId" value={this.state.loanOffer.loanId}/>
                                </div>
                              </div>
                            </div>

                            <div className="row" >

                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0118} </label>
                                  <input type="number" name="tenure" value={this.state.loanOffer.tenure}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0070}</label>
                                  <input type="number" name="processingFee" value={this.state.loanOffer.processingFee}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0069}</label>
                                  <input type="text" name="underWriterDecision" value={this.state.loanOffer.underWriterDecision}/>
                                </div>
                              </div>
                            </div>

                            <div className="row" >
                         
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0072}</label>
                                  <input type="number" name="approvedLoanAmount" value={this.state.loanOffer.approvedLoanAmount}/>
                                </div>
                              </div>
                         
                              <div className="col-sm-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0073}</label>
                                  <input type="text" name="rejectionRemarks" value={this.state.loanOffer.rejectionRemarks}/>
                                </div>
                              </div>
                            </div>
                   
                                  <div className='row'>
                                    <div className='col-sm-4 col-xs-12 text-center'>
                                      <button className="signup-btn " style={{ width: '100px', padding: '10px' }} onClick={this.nexttosixthpage}>
                                        {field0074}
                                      </button>
                                    </div>
                                    <div className='col-sm-4 col-xs-12 text-center'>
                                      <button className="signup-btn " style={{ width: '100px', padding: '10px' }} onClick={this.rejectmethod}>
                                        {field0075}
                                      </button>

                                    </div>
                                    <div className='col-sm-4 col-xs-12 text-center'>
                                      <button className="signup-btn " style={{ width: '187px', padding: '10px' }} onClick={this.appealmethod}>
                                        Change the offer
                        </button>
                                    </div>
                                  </div>
                          </div>
                        ) : /* Loan offer and document start */


                        this.state.activekey == 7 ? (
                          <div className="fifth page">
                              <div className="agent-loan-details">Application Submited</div>
                              <div className="row">

                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0068} </label>
                                  <input type="number" name="emiAmount" value={this.state.loanOffer.emiAmount}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0066}  </label>
                                  <input type="number" name="requestedLoanAmount" value={this.state.loanOffer.requestedLoanAmount}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0058} </label>
                                  <input type="number" name="loanId" value={this.state.loanOffer.loanId}/>
                                </div>
                              </div>
                            </div>

                            <div className="row">

                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0118} </label>
                                  <input type="number" name="tenure" value={this.state.loanOffer.tenure}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0070}</label>
                                  <input type="number" name="processingFee" value={this.state.loanOffer.processingFee}/>
                                </div>
                              </div>
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0069}</label>
                                  <input type="text" name="underWriterDecision" value={this.state.loanOffer.underWriterDecision}/>
                                </div>
                              </div>
                            </div>

                            <div className="row" >
                           
                              <div className="col-sm-4 col-xs-12">
                                <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                  <label>{field0072}</label>
                                  <input type="number" name="approvedLoanAmount" value={this.state.loanOffer.approvedLoanAmount}/>
                                </div>
                              </div>
                            </div>

                            {/* <div className="col-sm-12" style={{ marginTop: '10px' }}>
                              <div className="col-sm-12">
                                <div className="agent-lablestyle">
                                  <label>{field0073}</label>
                                  <input type="text" name="rejectionRemarks" value={this.state.loanOffer.rejectionRemarks}/>
                                </div>
                              </div>
                            </div> */}
                            <div className="text-center">
                              <div>
                                <button className="signup-btn" style={{width:'100px',padding:'10px'}} onClick={this.applicationSubmited}>
                                  {field0074}
                                </button>
                                
                              </div>
                            </div>
                          </div>
                        ) :




                          this.state.activekey == 6 ? (
                            <div className="sixthpage">
                              <div className="agent-loanofferheading">Loan Offer and Document</div>
                              <div className='row'>
                              <div className="col-sm-6 col-xs-12">
                              {/* {this.state.poData!=null ? 
                                 (
                                <div>
                                 {this.state.poData.fileName}
                                    <button className='signup-btn' style={{width:'150px',padding:'10px',marginBottom:'10px'}} onClick={(e)=>this.downloadPurchaseOrder(this.state.poData.fileContent,this.state.poData.fileExtension)}>Download
                                    </button>
                                  </div>):""} */}
                              {this.state.documentList &&
                          this.state.documentList.map((item) => {
                            return (
                              <div style={{ display: "flex" }}>
                                <div className="">
                                  <i className="fa fa-file-pdf-o red-color "></i>
                                </div>

                                <div className="agent-pdf-text" id={item.docid}>
                                  {item.docdescription}
                                </div>
                                <input
                                  type="file"
                                  id={item.docid}
                                  onChange={this.onFileChange}
                                />
                              </div>
                            );
                          })}
                                

                                <div className="dfs-L-wisardSaveStyle">
                                  <div>
                                    <button className="signup-btn" style={{width:'100px',padding:'10px',margin:'5px'}}>{field0093}</button>
                                  </div>
                                  <div>
                                    <button className="signup-btn" style={{width:'100px',padding:'10px',margin:'5px'}} onClick={this.gotoseventhpage}>
                                      {field0064}
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6 col-xs-12">
                                <div className="">
                                  {/* pdficonbuttonstart */}
                                  <div className="dfs-L-completeprocess">
                                    {field0085}
                                  </div>
                                  {this.state.poData!=null ? 
                                  <div className="dfs-L-3padding">
                                    <div className="dfs-L-loantxtpadding">
                                      <div className="dfs-L-offerletter">{this.state.poData.fileName}</div>
                                    </div>
                                    <button className='signup-btn' style={{width:'150px',padding:'10px',marginBottom:'10px'}} onClick={(e)=>this.downloadPurchaseOrder(this.state.poData.fileContent,this.state.poData.fileExtension)}>Download
                                    </button>
                                  </div>
                                  :""}

                                  {/* pdficonbuttonend */}

                                  <div className="textbar-or">
                                    <span>OR</span>
                                  </div>

                                  <div className="dfs-L-upload">{field0088}</div>
                                  <div>
                                    <img src={loanofferimg} />
                                  </div>

                                  <div className="dfs-L-accept">
                                    {field0088}
                                    <br />
                                    {field0090}
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          ) : /* Loan offer and document end*/

                            /* kindly confirm the address start*/
                            this.state.activekey == 21 ? (
                              <div className="sevenpage">
                                <div className="">
                                <div className="agent-loan-details">Kindly Conﬁrm the Address</div>
                                      <div className='row'>
                                        <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Country</label>
                                      {/* {console.log(this.state.fieldArray)} */}
                                      <select id="nationality" name="nationality" onChange={this.handleSelectChange} value={this.state.fieldArray!=null?this.state.fieldArray.nationality:""}>
                                        <option value="">Select Country</option>
                                        <option value="KSA">Kingdom of Saudi Arabia</option>
                                        <option value="ABW">Aruba</option>
                                        <option value="AFG">Afghanistan</option>
                                      </select>
                                        <i className="text-danger">{this.state.errorarray.nationality}</i>
                                    </div>
                                  </div>

                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      
                                      <label>Province </label>
                                      <input type="text" id="proviceid" name="province" value={this.state.fieldArray!=null?this.state.fieldArray.province:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.province}</i>
                                    </div>
                                  </div>

                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Address 2 </label>
                                      <input type="text" id="address2" name="address2" value={this.state.fieldArray!=null?this.state.fieldArray.address2:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.address2}</i>
                                    </div>
                                  </div>
</div>
<div className='row'>
                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Address 1  </label>
                                      <input type="text" id="address1" name="address1" value={this.state.fieldArray!=null?this.state.fieldArray.address1:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.address1}</i>
                                    </div>
                                  </div>

                                {/* first section */}
                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Zip Code</label>
                                      <input type="number" id="zipcode" name="zipcode" value={this.state.fieldArray!=null?this.state.fieldArray.zipcode:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.zipcode}</i>
                                    </div>
                                  </div>

                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Po Box</label>
                                      <input type="number" id="pobox" name="poBox" value={this.state.fieldArray!=null?this.state.fieldArray.poBox:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.poBox}</i>
                                    </div>
                                  </div>
</div>
<div className='row'>
                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>District/Neighbourhood </label>
                                      <select id="dist" name="district" onChange={this.handleSelectChange} value={this.state.fieldArray!=null?this.state.fieldArray.district:""}>
                                        <option value="">Select District</option>
                                        <option value="Riyadh">Riyadh</option>
                                      </select>
                                        <i className="text-danger">{this.state.errorarray.district}</i>
                                    </div>
                                  </div>

                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>city</label>
                                      <select id="city" name="city" onChange={this.handleSelectChange} value={this.state.fieldArray!=null?this.state.fieldArray.city:""}>
                                      <option value="">Select City</option>
                                        <option value="CITY055">Al Birk</option>
                                        <option value="CITY056">Al Hada</option>
                                          <i className="text-danger">{this.state.errorarray.city}</i>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-sm-4 col-xs-12">
                                  <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Street</label>
                                      <input type="text" id="street" name="street" value={this.state.fieldArray!=null?this.state.fieldArray.street:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.street}</i>
                                    </div>
                                  </div>
</div>
                                 <div className='row'>

                                  <div className="col-sm-4 col-xs-12">
                                    <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                      <label>Building No.</label>
                                      <input type="number" id="buildingno" name="buildingnumber" value={this.state.fieldArray!=null?this.state.fieldArray.buildingnumber:""} onChange={this.processInput} />
                                        <i className="text-danger">{this.state.errorarray.buildingnumber}</i>
                                    </div>
                                  </div>
                                </div>
                                <div className="agent-saveandcontinuestyle">
                                  <button className="agent-savebtn" onClick={this.saveAndContinue}>
                                    Save And Continue
                      </button>
                                </div>
                              </div>
                              </div>
                            ) : /* kindly confirm the address end*/

                              this.state.activekey == 8 ? (
                                <div className="eightpage loan rejection details">
                                  <div className="agent-reject-details">Loan Rejection Details</div>
                                  <div className="row" >
                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Underwriter Decision</label>
                                        <input type="text" name="underWriterDecision" value={this.state.loanOffer.underWriterDecision}/>
                                      </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Requested Loan Amount</label>
                                        <input type="number" name="requestedLoanAmount" value={this.state.loanOffer.requestedLoanAmount}/>
                                      </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Loan ID </label>
                                        <input type="number" name="loanId" value={this.state.loanOffer.loanId}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row" >
                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Processing Fee</label>
                                        <input type="number" name="processingFee" value={this.state.loanOffer.processingFee}/>
                                      </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Tenure</label>
                                        <input type="number" name="tenure" value={this.state.loanOffer.tenure}/>
                                      </div>
                                    </div>

                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Emi Amount</label>
                                        <input type="text" name="emiAmount" value={this.state.loanOffer.emiAmount}/>
                                      </div>
                                    </div>
                                  </div>


                                  <div className="row" >
                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Approved Loan Amount</label>
                                        <input type="number" name="approvedLoanAmount" value={this.state.loanOffer.approvedLoanAmount}/>
                                      </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                        <label>Customer Rejection Remarks</label>
                                        <input type="text" name="customerRejectionRemarks" value={this.state.loanOffer.customerRejectionRemarks} onChange={this.processLoanOfferInput}/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row text-center">
                                    <div className='col-xs-12 col-sm-6'>
                                      <button className="signup-btn" style={{width:'150px',padding:'10px'}}>Cancel</button>
                                      </div>
                                      <div className='col-xs-12 col-sm-6'>

                                      <button className="signup-btn" style={{width:'150px',padding:'10px'}} onClick = {this.rejectLoanSubmit}>Submit</button>
                                    </div>
                                  </div>
                                </div>
                              ) : /* loan appeal details */
                                this.state.activekey == 9 ? (
                                  <div className="ninthpage">
                                    <div className="agent-reject-details">Loan Appeal Details</div>
                                    <div className="row">
                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Old Tenure</label>
                                          <input type="number" name="tenure" value={this.state.loanOffer.tenure}/>
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Old Requested Loan Amount</label>
                                          <input type="number" name="requestedLoanAmount" value={this.state.loanOffer.requestedLoanAmount}/>
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Loan ID </label>
                                          <input type="number" name="loanId" value={this.state.loanOffer.loanId}/>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <div className="col-sm-4">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Down Payment</label>
                                          <input type="number" name="downPayment" value={this.state.loanOffer.downPayment} onChange={this.processLoanOfferInput}/>
                                        </div>
                                      </div>


                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Tenure</label>
                                          <input type="number" name="newTenure" value={this.state.loanOffer.newTenure} onChange={this.processLoanOfferInput}/>
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>New Requested Loan Amount</label>
                                          <input type="number" name="newRequestedLoanAmount" value={this.state.loanOffer.newRequestedLoanAmount} onChange={this.processLoanOfferInput}/>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row" >
                                      <div className="col-sm-12">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Appeal Remarks</label>
                                          <input type="text" name="appealRemarks" value={this.state.loanOffer.appealRemarks} onChange={this.processLoanOfferInput}/>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row text-center">
                                      <div className='col-sm-6 col-xs-12'>
                                        <button className="signup-btn" style={{width:'150px',padding:'10px'}}>Cancel</button>
                                        </div>
                                        <div className='col-sm-6 col-xs-12'>

                                        <button className="signup-btn" style={{width:'150px',padding:'10px'}} onClick={this.updateLoanOffer}>Submit</button>
                                      </div>
                                    </div>
                                  </div>
                                ) : this.state.activekey == 10 ? (
                                  <div className="onboardingcomplete text-center" style={{marginTop:'30px'}}>
                                    <div className="col-sm-12 col-xs-12">
                                      <div className="dfs-onboardingcomp">
                                        <h3>Onboarding Completed</h3>
                                      </div>

                                      <div className="dfs-cong-text">
                                        <span style={{ 'font-weight': 'bold' }}> Congratulations !! Mr. Abdullah,</span> your loan application is submitted
                        successfully.
                        <br />
                                        <span style={{ 'font-weight': 'bold' }}> your Application ID 371</span>
                                      </div>
                                      <div className="signup-btn-style">
                                        <div>
                                          <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '10px', width: '169px' }}>
                                            View Dashboard
                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : this.state.activekey == 11 ? 
                                  <div className="second-page">
                                    <div className="agent-assetdetails">Asset Details Riyadh</div>
                                    {/* first section start */}
                                    <div className="row" >
                                      <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Unit Price </label>
                                          <input
                                            type="text"
                                            name="unitPrice"
                                            onChange={this.processInputAssetRiyadh}
                                            value={this.state.assetDataRiyadh.unitPrice}
                                            id="unitPrice"
                                          />
                                          <i className='text-danger'>{this.state.errorassetarray.unitPrice}</i>
                                        </div>
                                      </div>
                
                                      <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Weight </label>
                                          <select id="weight" name="weight" onChange={this.processInputAssetRiyadh}  value={this.state.assetDataRiyadh.weight}>
                                            <option value="">Select Weight</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                          </select>
                                          <i className='text-danger'>{this.state.errorassetarray.weight}</i>

                                        </div>
                                       
                                      </div>
                                      <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Serial Number Ramz Alsanaf </label>
                                          <select id="serialNoRamzalsanaf" name="serialNoRamzalsanaf" onChange={this.processInputAssetRiyadh} value={this.state.assetDataRiyadh.serialNoRamzalsanaf}>
                                          <option value="">Select Serial Number Ramz Alsanaf</option>
                                            <option value="indian rice">Indian Rice</option>
                                          </select>
                                          <i className='text-danger'>{this.state.errorassetarray.serialNoRamzalsanaf}</i>

                                        </div>
                                      </div>
                                      </div>
                                      <div className='row'>
                                      <div className="col-sm-4 col-xs-12">
                                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Type Of Goods</label>
                                          <select id="typesofgood" name="typesofgood" onChange={this.processInputAssetRiyadh} value={this.state.assetDataRiyadh.typesofgood}>
                                          <option value="">Select Good Type</option>
                                            <option value="Foods Stuff">Foods Stuff</option>
                                          </select>
                                          <i className='text-danger'>{this.state.errorassetarray.typesofgood}</i>

                                        </div>
                                      </div>
                                  
                                      <div className="col-sm-4 col-xs-12">
                                        <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                                          <label>Total Princiapl Amount</label>
                                          <input
                                            type="number"
                                            name="totalPrincipalAmount"
                                            onChange={this.processInputAssetRiyadh}
                                            id="totalPrincipalAmount"
                                            value={this.state.assetDataRiyadh.totalPrincipalAmount}
                                          />
                                                                                    <i className='text-danger'>{this.state.errorassetarray.totalPrincipalAmount}</i>

                                        </div>
                                      </div>
                </div>
                <div className='row text-center'>
                                        <button className="signup-btn" style={{width:'200px',padding:'10px',marginBottom:'10px'}} onClick={this.addMoreDetailsRiyadh}>
                                          {field0041}
                                        </button>
                                      </div>
                                
                
                                    {/*asset - table details */}
                
                                    <div className="asset-table" style={{overflow:'auto'}}>
                                      <table >
                                        <thead>
                                          <tr>
                                            <th>Item Number</th>
                                            <th>Type of Good</th>
                                            <th>Serial number Ramz AlSanaf</th>
                                            <th>Weight (Tons)</th>
                                            <th>Unit price</th>
                                            <th>Total Price</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {this.state.assetDataArray!=null && this.state.assetDataArray.length>0?this.state.assetDataArray.map((row, index) => {
                                            let vatAmt = (row.assetPrice * 15) / 100;
                                            return (
                                              <tr key={index}>
                                                <td>{row.itemNumber}</td>
                                                <td>{row.typesofgood}</td>
                                                <td>{row.serialNumber}</td>
                                                <td>Tons {row.weight}</td>
                                            <td>SR {row.unitPrice}</td>
                                                <td>SR {(row.unitPrice) * row.weight}</td>
                                              </tr>
                                            );
                                          }):""}
                                        </tbody>
                                      </table>
                                      
                                    </div>
                                    <div className="row text-center">
                                        <button className="signup-btn" style={{width:'200px',padding:'10px'}}onClick={this.saveAndContinueAsset}>
                                          {field0023}
                                        </button>
                                      </div>
                                  </div>
                            
                                  :""}
              </div>
              </div>
              {/* right side close */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
    language: state.reducer.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguage: value => dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),

    // onlineApplication: () => dispatch(onlineApplication())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(agentdetails);