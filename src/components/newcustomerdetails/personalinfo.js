import React, { Component } from 'react';
import './newcustomerdetails.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import Header from '../../components/header/header';
import HijriDatePicker, { withTheme } from 'hijri-date-picker';
import config from '../../assets/config/config';
import axios from 'axios';
//import Moment from "react-moment";
import moment from 'moment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { onlineApplication } from '../../store/action';
import CustomerApi from './CustomerApi';
import wizardSteps from '../../assets/images/wizard-steps.jpg';
import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';
import { responsiveFontSizes } from '@material-ui/core';
import CustomerDashboard from '../newcustomerdashboard/dashboard';
import { login } from '../utils/index';
import Axios from 'axios';

class personalinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitBtnStatus:1,
      activekey: 0,
      fieldArray: {},
      errorarray: {},
      documentList: [],
      uploadDoc: [],
      dataArray: [],
      financingInstallments: 0,
      loan: {
        compApplId: '',
        reqAmount: 30000,
        tenure: 12,
        downPayemnt: 0,
      },
      nationalityfields: {
        Dateofbirth: '',
        Age: 0,
        Nationality: '',
        IqamaNumber: 0,
        NationalityId: 0,

      },
      familyfields: {},
      errors: {},
      items: [
        { label: 'Personal', icon: faUser },
        { label: 'Employment', icon: faBriefcase },
        { label: 'Identification', icon: faPassport },
        { label: 'Contact Details', icon: faAddressBook },
        { label: 'Onboarding Complete', icon: faGem },
        // { label: 'Loan Acceptance', icon: faMoneyBill },
      ],
    };
  }

  async componentDidMount() {
    // await this.props.onlineApplication();

    if (window.sessionStorage.getItem('language') == null) window.sessionStorage.setItem('language', 'en');

    let customerPersonalData = JSON.parse(window.sessionStorage.getItem('customerPersonalData'));
    let customerAddressData = JSON.parse(window.sessionStorage.getItem('customerAddressData'));
    let customerSimahData = JSON.parse(window.sessionStorage.getItem('customerAddressData'));
    let customerRequestData = JSON.parse(window.sessionStorage.getItem('CUSTOMRE_DATA_REQ'));

    console.log('customerAddressData: ' + JSON.stringify(customerAddressData));
    console.log('customerAddressData: ' + JSON.stringify(customerAddressData));
    // customerAddressData = {
    //   address1: customerAddressData.address1,
    //   address2: customerAddressData.address2,
    //   buildingnumber: customerAddressData.buildingnumber,
    //   city: customerAddressData.city,
    //   country: customerPersonalData.nationality,
    //   district: customerAddressData.district,
    //   ninno: customerAddressData.ninId,
    //   pobox: customerAddressData.pobox,
    //   postcode: customerAddressData.postcode,
    //   provience: customerAddressData.regionname,
    //   street: customerAddressData.street,
    //   zipcode: customerAddressData.postcode,
    // };
    customerAddressData['zipcode'] = customerAddressData.postcode
    customerAddressData['provience'] = customerAddressData.regionname
    customerAddressData['country'] = customerPersonalData.nationality
    customerAddressData['customerId'] = customerRequestData.customerId
    customerAddressData['password'] = customerPersonalData.password




    this.setState({ fieldArray: customerPersonalData });
    this.setState({
      fieldArray: customerAddressData,
      financingInstallments: customerSimahData.loanInstallments,
    });

    await this.newCustomer();

    //  here we call simha
    // await CustomerApi.checkSimah(this.state.fieldArray)
    // await CustomerApi.onlineApplication3i(this.state);

    // let documentListData = await CustomerApi.getDocumentList(this.state);
    // this.setState({ documentList: documentListData });
    // this.setState({ activekey: 1 });
  }

  newCustomer = () => {
    axios.get(config.STRAPI_URL + '/agent-newcustomers').then(res => {
      this.setState({ newCustomerFields: res.data });
      console.log('newCustomerFields', this.state.newCustomerFields);
    });
  };

  nextfamily = () => {
    this.setState({
      activekey: 3,
    });
  };

  backpage = () => {
    this.setState({
      activekey: this.state.activekey - 1,
    });
  };

  saveAndContinue = async e => {
    this.setState({submitBtnStatus:0});
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = this.state.errorarray;
    let formStatus = true;

    if (!fieldArray['provience']) {
      errorarray['provience'] = 'Please enter your provience !';
      formStatus = false;
    }
    if (!fieldArray['address2']) {
      errorarray['address2'] = 'Please enter your address2 !';
      formStatus = false;
    }
    if (!fieldArray['address1']) {
      errorarray['address1'] = 'Please enter your address1 !';
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

    if (!fieldArray['pobox']) {
      errorarray['pobox'] = 'Please enter your pobox !';
      formStatus = false;
    }


    console.log(this.state)

    if (formStatus) {
      const sta = await CustomerApi.checkAddress(this.state.fieldArray);
      console.log(sta);
      if (sta) {
        let staAdd = await CustomerApi.addAddress(this.state.fieldArray);
        if (staAdd) {
          this.setState({ activekey: this.state.activekey + 1 ,submitBtnStatus:1});
        }
        this.setState({submitBtnStatus:1})
      } else {
        let staAdd = await CustomerApi.updateAddress(this.state.fieldArray);
        if (staAdd) {
          this.setState({ activekey: this.state.activekey + 1,submitBtnStatus:1 });
        }
        this.setState({submitBtnStatus:1})
      }
    } else {
      this.setState({
        errorarray: errorarray,submitBtnStatus:1
      });
    }
  };

  saveAndContinueDraft = async e => {
    this.setState({submitBtnStatus:0})
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = {};
    let formStatus = true;
    if (!fieldArray['subSector']) {
      errorarray['subSector'] = 'Please select your subSector!';
      formStatus = false;
    }
    if (!fieldArray['sector']) {
      errorarray['sector'] = 'Please select your sector!';
      formStatus = false;
    }
    if (!fieldArray['employmentType']) {
      errorarray['employmentType'] = 'Please select your employmentType!';
      formStatus = false;
    }
    if (!fieldArray['designation']) {
      errorarray['designation'] = 'Please select your designation!';
      formStatus = false;
    }
    if (!fieldArray['companynameL2']) {
      errorarray['companyName'] = 'Please enter your employer name!';
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

    if (!fieldArray['financePremium']) {
      errorarray['financePremium'] = 'Please enter financial premium';
      formStatus = false;
    }
    if (!fieldArray['monthlyAdditionalIncome']) {
      errorarray['monthlyAdditionalIncome'] = 'Please enter additional income';
      formStatus = false;
    }
    if (!fieldArray['monthlysalary']) {
      errorarray['monthlysalary'] = 'Please enter monthly salary';
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
    if (!fieldArray['assetvalue']) {
      errorarray['assetvalue'] = 'Please enter asset value';
      formStatus = false;
    }
    if (!fieldArray['monthlyhomerent']) {
      errorarray['monthlyhomerent'] = 'Please enter monthly home rent';
      formStatus = false;
    }
    console.log(errorarray);

    if (formStatus) {
      await CustomerApi.addLoan(this.state.fieldArray);
      let check = await CustomerApi.checkCustomer(this.state.fieldArray);
      console.log(check);
      if (!check) {
        let stat = await CustomerApi.updateCustomer(this.state.fieldArray);
      }
      let respo1 = await CustomerApi.updateLoan(this.state);
      console.log(respo1)

      // 3i API NOT WORKING
      let responseData3i = await CustomerApi.onlineApplication3i(this.state);
      console.log('responseData3i');
      console.log(responseData3i);
      console.log('RESPONSE FROM 3I compApplId:  ' + responseData3i.compApplId);

      let loanData = this.state.loan;

      loanData['compApplId'] = responseData3i.compApplId;
      fieldArray['compApplId'] = responseData3i.compApplId;
      
      // let documentListData = await CustomerApi.getDocumentList(responseData3i.compApplId);
      let documentListData = await CustomerApi.getDocumentList(937);
      this.setState({ documentList: documentListData ,submitBtnStatus:1});
      this.setState({ activekey: this.state.activekey + 1 });
    } else {
      this.setState({
        errorarray: errorarray,submitBtnStatus:1
      });
    }
  };

  onFileChange = async event => {
    console.log(event.target.id, event.target.files);
    let temp = event.target;
    let baseData = null;

    await this.fileToBase64(event.target.files[0]).then(data => {
      baseData = data;
    });
    // console.log('IORD Resp = ', baseData);
    // this.addCustomerFunction(data[0])

    let reqData = [
      {
        data: baseData.replace('data:image/jpeg;base64,/', ''),
        docId: temp.id,
        fileName: temp.files[0].name,
        replaceOrAddDoc: 'I',
      },
    ];
    //we remove when kastal api fix//we remove when kastal api fix
    // let imageFormData = new FormData();
    // imageFormData.append('docType', 'National ID');
    // imageFormData.append('uploadFile', baseData.replace('data:image/jpeg;base64,/', ''));
    // imageFormData.append('customerId', this.state.fieldArray['customerId']); //need to set this from response of save continue employment detail
    // imageFormData.append('type', temp.files[0].type);
    // imageFormData.append('applicationId', this.state.fieldArray['appId']); //need to set this from response of save continue employment detail
    // let repo = await CustomerApi.documentUpload(temp.files[0], this.state.fieldArray['customerId'], callBack => {
    //   console.log(callBack.status);
    //   if (callBack != null && callBack.status == 'Success') {
    //     // this.setState({nextPage:'yes'})
    //     let doc = this.state.uploadDoc;
    //     doc.push(12);
    //     this.setState({
    //       fileName: '',
    //       documentData: '',
    //       popupState: true,
    //       successMsg: true,
    //       failureMsg: false,
    //       successMsg: true,
    //       status: 'Document Uploaded Successfully',
    //     });
    //   } else {
    //     console.log('err');
    //     this.setState({
    //       fileName: '',
    //       popupState: true,
    //       successMsg: true,
    //       failureMsg: false,
    //       successMsg: true,
    //       status: 'Please Try Again Later',
    //     });
    //   }
    // });

    //we remove when kastal api fix//we remove when kastal api fix
    let repo = await CustomerApi.uploaddocument(reqData);
    console.log(repo);
    let doc = this.state.uploadDoc;
    doc.push(temp.id);
  };

  fileToBase64 = async file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = e => reject(e);
    });

  saveAndContinueFile = event => {
    let doc = this.state.uploadDoc;
    let docList = this.state.documentList;
    console.log(doc, docList);
    if (doc.length != docList.length) {
      alert('Please upload all document');
    } else {
      this.setState({ activekey: this.state.activekey + 1 });
    }
  };

  //-----------------------------first section validation start--------------------//
  handleChange = event => {
    let filedvalue = this.state.filedvalue;

    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue,
    });
  };

  handleSubmit = () => {
    // event.preventDefault();
    // console.log(this.validate())
    // if (this.validate()) {
    //   let filedvalue = {};

    console.log(this.state.fieldArray);

    // this.setState({ filedvalue: filedvalue, activekey: 2 });
    // }
    window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(this.state.fieldArray));

    this.setState({ activekey: this.state.activekey + 1 });
  };

  handleTenureChange = async event => {
    let filedvalue = this.state.loan;
    filedvalue['tenure'] = event.target.value;
    this.setState({
      filedvalue,
    });
    const loan = await CustomerApi.loanCalculator(this.state.loan);
    // console.log(this.state)
  };

  handleInvoiceAmt = async event => {
    let filedvalue = this.state.loan;

    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue,
    });
    const loan = await CustomerApi.loanCalculator(this.state.loan);
    console.log(this.state);
  };

  handleSelectChange = async event => {
    console.log(event, 'this is event');
    let filedvalue = this.state.fieldArray;
    filedvalue[event.target.name] = event.target.value;
    this.setState({
      filedvalue,
    });
  };

  saveAndContinueLoan = async event => {
    const loan = await CustomerApi.updateLoan(this.state);
    console.log('update');
    this.setState({ activekey: this.state.activekey + 1 });
  };

  saveAndContinueDashboard = async event => {
    const customerID = this.state.fieldArray.customerId
    alert(customerID)
    // 23501 -- TEST ID
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  };
    Axios.get(`http://122.166.172.240:3031/api/customers?id.equals=${customerID}`,headerConfig).then(res =>{
      console.log(res,'this is for login ')
      // if (res.data.id != null && res.data) {
        window.sessionStorage.setItem('customerID', res.data.id);
        window.sessionStorage.setItem('customerName', res.data.firstName);
        
        // window.sessionStorage.setItem('vendor', res.data.vendor);
        window.sessionStorage.setItem('vendor', this.state.fieldArraYStore.vendor_name);

        // window.sessionStorage.setItem('email', res.data.email);
        // window.sessionStorage.setItem('mobile', res.data.mobile);
        window.sessionStorage.setItem('storeLocation', res.data.storeLocation);
        window.sessionStorage.setItem('storeLocation', this.state.fieldArraYStore.storeName);

        console.log(res.data)
        login()
        this.props.history.push('/customer/dashboard')
        // this.todashboard();
      // }
      // else{
      //   console.log('failed to land dashboard')
      // }
    // return alert('ok')
    })

    // login();
    // this.props.history.push('/customer/signin');
  };
  //-----------------------------first section validation END--------------------//

  //-----------------------------second section validation start----------------//
  inputFiledchange = event => {
    let nationalityfields = this.state.nationalityfields;
    nationalityfields[event.target.name] = event.target.value;
    this.setState({
      nationalityfields,
    });
  };
  // inputfiledSubmit = () => {
  //   // event.preventDefault();
  //   // if (this.inputfiledvalidate()) {
  //   console.log(this.state);
  //   let nationalityfields = {};
  //   nationalityfields['Dateofbirth'] = '19-02-1986';
  //   nationalityfields['Age'] = '34';
  //   nationalityfields['Nationality'] = 'Saudi Arabia';
  //   nationalityfields['IqamaNumber'] = '';
  //   nationalityfields['NationalityId'] = '1029987532';

  //   this.setState({ activekey: this.state.activekey + 1 });
  // };

  // inputfiledvalidate() {
  //   let nationalityfields = this.state.nationalityfields;
  //   let errors = {};

  //   let isValid = true;
  //   if (!nationalityfields['Dateofbirth']) {
  //     isValid = false;
  //     errors['Dateofbirth'] = 'Cannot be empty';
  //   }

  //   //  if(typeof nationalityfields["Dateofbirth"] !== "undefined"){
  //   //   if(!nationalityfields["Dateofbirth"].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')){
  //   //     isValid = false;
  //   //      errors["Dateofbirth"] = "Only number";
  //   //   }
  //   // }

  //   if (!nationalityfields['Age']) {
  //     isValid = false;
  //     errors['Age'] = 'Cannot be empty';
  //   }

  //   //  if(typeof nationalityfields["Age"] !== "undefined"){
  //   //   if(!nationalityfields["Age"].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')){
  //   //     isValid = false;
  //   //      errors["Age"] = "Only number";
  //   //   }
  //   // }

  //   if (!nationalityfields['Nationality']) {
  //     isValid = false;
  //     errors['Nationality'] = 'Cannot be empty';
  //   }

  //   if (typeof nationalityfields['Nationality'] !== 'undefined') {
  //     if (!nationalityfields['Nationality'].match(/^[a-zA-Z]+$/)) {
  //       isValid = false;
  //       errors['Nationality'] = 'Only letter';
  //     }
  //   }
  //   if (!nationalityfields['IqamaNumber']) {
  //     isValid = false;
  //     errors['IqamaNumber'] = 'Cannot be empty';
  //   }

  //   if (typeof nationalityfields['IqamaNumber'] !== 'undefined') {
  //     if (!nationalityfields['IqamaNumber'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
  //       isValid = false;
  //       errors['IqamaNumber'] = 'Only number';
  //     }
  //   }
  //   if (!nationalityfields['NationalityId']) {
  //     isValid = false;
  //     errors['NationalityId'] = 'Cannot be empty';
  //   }

  //   if (typeof nationalityfields['NationalityId'] !== 'undefined') {
  //     if (!nationalityfields['NationalityId'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
  //       isValid = false;
  //       errors['NationalityId'] = 'Only number';
  //     }
  //   }
  //   this.setState({
  //     errors: errors,
  //   });

  //   return isValid;
  // }
  //-----------------------------second section validation end----------------//

  //-----------------------------Third section validation start----------------//
  // familydataSubmit = event => {
  //   event.preventDefault();

  //   if (this.familyfiledvalidate()) {
  //     console.log(this.state);

  //     let familyfields = {};

  //     familyfields['Gender'] = 'M';
  //     familyfields['Marital status'] = 'Married';
  //     familyfields['Resident Status'] = '';
  //     familyfields['Nationality'] = 'Saudi Arabia';
  //     familyfields['No. of Dependants'] = '';

  //     this.setState({ familyfields: familyfields });

  //     this.saveAndContinue();
  //   }
  // };

  processInput = obj => {
    let fieldArray = this.state.fieldArray;
    console.log('OBJ: ' + obj);
    let targateName = obj.target.name ? obj.target.name : '';
    let targateValue = obj.target.value ? obj.target.value : '';

    if (targateName === 'dateOfJoining' || targateName === 'dateOfJoiningH') {
      this.state.fieldArray.serviceinmonths = this.getAge(targateValue);
      console.log('this.state.fieldArray.serviceinmonths');
      console.log(this.state.fieldArray.serviceinmonths);
    }

    if (targateName === 'monthlyhomerent') {
      let homeRent = obj.target.value;

      let fpremium = fieldArray['financePremium'] != undefined ? fieldArray['financePremium'] : 0;
      this.setState({
        obligationmonthly: fpremium * 1 + homeRent * 1,
      });
    }

    if (targateName === 'financePremium') {
      let homeRent = fieldArray['monthlyhomerent'] != undefined ? fieldArray['monthlyhomerent'] : 0;
      let fpremium = obj.target.value;

      this.setState({
        obligationmonthly: fpremium * 1 + homeRent * 1,
      });
    }

    fieldArray[targateName] = targateValue;
    this.setState({
      fieldArray,
    });
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

  previouspage = () => {
    this.setState({
      activekey: 1,
    });
  };

  render() {
    let onboardinguserinfo = this.props.reducer.onboardingpersonal ? this.props.reducer.onboardingpersonal : [];
    const arabicStyleText = {
      transform: 'rotateY(180deg)',
      textAlign: 'right',
      direction: 'rtl',
    };
    let heading = [];
    if (this.props.customerprofilesData) {
      this.props.customerprofilesData.map(i => {
        if (i.language === this.props.language) {
          heading.push(
            <div className="dfs-personalinfotxt " style={this.props.language === 'ar' ? arabicStyleText : null}>
              <h5>{i.welcomeheading}</h5>
              <h3>{i.telmeyourself}</h3>
            </div>
          );
        }
      });
    }

    let newCustomerDataObj = this.state.newCustomerFields ? this.state.newCustomerFields : '';

    let field0001,
      field0002,
      field0003,
      field0004,
      field0005,
      field0006,
      field0007,
      field0008,
      field0009,
      field0010,
      field0011,
      field0012,
      field0013,
      field0014,
      field0015,
      field0016,
      field0017,
      field0018,
      field0019,
      field0020,
      field0021,
      field0022,
      field0023,
      field0024,
      field0025,
      field0026,
      field0027,
      field0028,
      field0029,
      field0030,
      field0031,
      field0032,
      field0033,
      field0034,
      field0035,
      field0036,
      field0037,
      field0038,
      field0039,
      field0040,
      field0041,
      field0042,
      field0043,
      field0044,
      field0045,
      field0046,
      field0047,
      field0048,
      field0049,
      field0050,
      field0051,
      field0052,
      field0053,
      field0054,
      field0055,
      field0056,
      field0057,
      field0058,
      field0059,
      field0060,
      field0061,
      field0062,
      field0063,
      field0064,
      field0065,
      field0066,
      field0067,
      field0068,
      field0069,
      field0070,
      field0071,
      field0072,
      field0073,
      field0074,
      field0075,
      field0076,
      field0077,
      field0078,
      field0079,
      field0080,
      field0081,
      field0082,
      field0083,
      field0084,
      field0085,
      field0086,
      field0087,
      field0088,
      field0089,
      field0090,
      field0091,
      field0092,
      field0093,
      field0094,
      field0095,
      field0096,
      field0097,
      field0098,
      field0099,
      field0100,
      field0101,
      field0102,
      field0103,
      field0104,
      field0105,
      field0106,
      field0107,
      field0108,
      field0109,
      field0110,
      field0111,
      field0112,
      field0113,
      field0114,
      field0115,
      field0116,
      field0117,
      field0118,
      field0119,
      field0120,
      field0121,
      field0122,
      field0123,
      field0124,
      field0125,
      field0126,
      field0180,
      field0194,
      field0192,
      field0193,
      field0195,
      field0196,
      field0197,
      field0198,
      field0199;

    if (newCustomerDataObj) {
      newCustomerDataObj.map((b, index) => {
        if (b.field0001 == window.sessionStorage.getItem('language')) {
          field0001 = b.field0001;
          field0002 = b.field0002;
          field0003 = b.field0003;
          field0004 = b.field0004;
          field0005 = b.field0005;
          field0006 = b.field0006;
          field0007 = b.field0007;
          field0008 = b.field0008;
          field0009 = b.field0009;
          field0010 = b.field0010;
          field0011 = b.field0011;
          field0012 = b.field0012;
          field0013 = b.field0013;
          field0014 = b.field0014;
          field0015 = b.field0015;
          field0016 = b.field0016;
          field0017 = b.field0017;
          field0018 = b.field0018;
          field0019 = b.field0019;
          field0020 = b.field0020;
          field0021 = b.field0021;
          field0022 = b.field0022;
          field0023 = b.field0023;
          field0024 = b.field0024;
          field0025 = b.field0025;
          field0026 = b.field0026;
          field0027 = b.field0027;
          field0028 = b.field0028;
          field0029 = b.field0029;
          field0030 = b.field0030;
          field0031 = b.field0031;
          field0032 = b.field0032;
          field0033 = b.field0033;
          field0034 = b.field0034;
          field0035 = b.field0035;
          field0036 = b.field0036;
          field0037 = b.field0037;
          field0038 = b.field0038;
          field0039 = b.field0039;
          field0040 = b.field0040;
          field0041 = b.field0041;
          field0042 = b.field0042;
          field0043 = b.field0043;
          field0044 = b.field0044;
          field0045 = b.field0045;
          field0046 = b.field0046;
          field0047 = b.field0047;
          field0048 = b.field0048;
          field0049 = b.field0049;
          field0050 = b.field0050;
          field0051 = b.field0051;
          field0052 = b.field0052;
          field0053 = b.field0053;
          field0054 = b.field0054;
          field0055 = b.field0055;
          field0056 = b.field0056;
          field0057 = b.field0057;
          field0058 = b.field0058;
          field0059 = b.field0059;
          field0060 = b.field0060;
          field0061 = b.field0061;
          field0062 = b.field0062;
          field0063 = b.field0063;
          field0064 = b.field0064;
          field0065 = b.field0065;
          field0066 = b.field0066;
          field0067 = b.field0067;
          field0068 = b.field0068;
          field0069 = b.field0069;
          field0070 = b.field0070;
          field0071 = b.field0071;
          field0072 = b.field0072;
          field0073 = b.field0073;
          field0074 = b.field0074;
          field0075 = b.field0075;
          field0076 = b.field0076;
          field0077 = b.field0077;
          field0078 = b.field0078;
          field0079 = b.field0079;
          field0080 = b.field0080;
          field0081 = b.field0081;
          field0082 = b.field0082;
          field0083 = b.field0083;
          field0084 = b.field0084;
          field0085 = b.field0085;
          field0086 = b.field0086;
          field0087 = b.field0087;
          field0088 = b.field0088;
          field0089 = b.field0089;
          field0090 = b.field0090;
          field0091 = b.field0091;
          field0092 = b.field0092;
          field0093 = b.field0093;
          field0094 = b.field0094;
          field0095 = b.field0095;
          field0096 = b.field0096;
          field0097 = b.field0097;
          field0098 = b.field0098;
          field0099 = b.field0099;
          field0100 = b.field0100;
          field0101 = b.field0101;
          field0102 = b.field0102;
          field0103 = b.field0103;
          field0104 = b.field0104;
          field0105 = b.field0105;
          field0106 = b.field0106;
          field0107 = b.field0107;
          field0108 = b.field0108;
          field0109 = b.field0109;
          field0110 = b.field0110;
          field0111 = b.field0111;
          field0112 = b.field0112;
          field0113 = b.field0113;
          field0114 = b.field0114;
          field0115 = b.field0115;
          field0116 = b.field0116;
          field0117 = b.field0117;
          field0118 = b.field0118;
          field0119 = b.field0119;
          field0120 = b.field0120;
          field0121 = b.field0121;
          field0122 = b.field0122;
          field0123 = b.field0123;
          field0124 = b.field0124;
          field0125 = b.field0125;
          field0126 = b.field0126;
          field0180 = b.field0180;
          field0194 = b.field0194;
          field0192 = b.field0192;
          field0193 = b.field0193;
          field0195 = b.field0195;
          field0196 = b.field0196;
          field0197 = b.field0197;
          field0198 = b.field0198;
          field0199 = b.field0199;
        }
      });
    }

    return (
      <>
        <div className="container" style={{ margin: '15rem auto 10rem' }}>
          <div className="row wizard-box">
            <div className="col-sm-12 text-center" style={{ margin: '40px auto 20px' }}>
              <h3>Customer Onboarding</h3>
            </div>

            <div className="col-sm-12">
              <div class="breadcrumb-pagination">
                {this.state.items.map((item, index) => (
                  <>
                    {index === 0 ? (
                      <div className={this.state.activekey !== 1 && this.state.activekey > index + 1 ? 'completed' : 'active'}>
                        <span></span>
                        <p>{field0034}</p>
                      </div>
                    ) : (
                        <div className={this.state.activekey === index + 1 ? 'active' : 'todo'}>
                          <span>
                            <FontAwesomeIcon className="text-4xl" icon={item.icon} />
                          </span>
                          <p>{item.label}</p>
                        </div>
                      )}
                  </>
                ))}
              </div>
            </div>
            <div className="col-sm-12" style={{ padding: 0, display: 'flex' }}>
              <div
                className="col-sm-3"
                style={{
                  //backgroundImage: `url(${wizardSteps})`,
                  backgroundColor: '#ccc',
                  backgroundSize: 'cover',
                  padding: 0,
                  display: 'none',
                }}
              >
                <ListItem style={{ color: '#ffffff' }}>User Profile</ListItem>
                <List component="nav">
                  {this.state.items.map((item, index) => (
                    <ListItem button key={item.label} style={{ color: '#ffffff' }}>
                      <ListItemIcon>
                        <FontAwesomeIcon className="text-4xl" icon={this.state.items[0].icon} />
                      </ListItemIcon>
                      <ListItemText className="text-4xl" primary={`${item.label}`} />
                    </ListItem>
                  ))}
                </List>
              </div>

              <div className="widzard-form col-sm-12">
                {this.state.activekey === 0 ? (
                  <div>
                    <CustomerDashboard
                      dashboardData={event => {
                        this.setState({ activekey: 1, fieldArraYStore: event });
                        console.log(this.state);
                      }}
                      activekey={this.state.activekey}
                    />
                    {console.log(this.state, 'this new field array')}
                  </div>
                ) : this.state.activekey === 1 ? (
                  <div className="sevenpage">
                    <div className="col-sm-12">
                      <div className="text-center">
                        <h4>Kindly Conﬁrm the Address</h4>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0020}</label>

                          <select
                            id="nationality"
                            name="nationality"
                            onChange={this.handleSelectChange}
                            defaultValue='Select Locati'
                            // defaultValue={this.state.fieldArray.nationality}
                            selected={this.state.dataArray.nationality}
                          >
                            <option value="-1">{field0192}</option>
                            <option value="AFG">Afghanistan</option>
                            <option value="ALB">Albania</option>
                            <option value="DZA">Algeria</option>
                            <option value="AND">Andorra</option>
                            <option value="AGO">Angola</option>
                            <option value="AIA">Anguilla</option>
                            <option value="ATG">Antigua and Barbuda</option>
                            <option value="ARG">Argentina</option>
                            <option value="ARM">Armenia</option>
                            <option value="ABW">Aruba</option>
                            <option value="AUS">Australia</option>
                            <option value="AUT">Austria</option>
                            <option value="AZE">Azerbaijan</option>
                            <option value="BHS">Bahamas</option>
                            <option value="BHR">Bahrain</option>
                            <option value="BAN">Bangladesh</option>
                            <option value="BGD">Bangladesh</option>
                            <option value="BRB">Barbados</option>
                            <option value="BLR">Belarus</option>
                            <option value="BEL">Belgium</option>
                            <option value="BLZ">Belize</option>
                            <option value="BEN">Benin</option>
                            <option value="BMU">Bermuda</option>
                            <option value="BTN">Bhutan</option>
                            <option value="BOL">Bolivia</option>
                            <option value="BIH">Bosnia and Herzegovina</option>
                            <option value="BWA">Botswana</option>
                            <option value="BRA">Brazil</option>
                            <option value="BRN">Brunei</option>
                            <option value="BGR">Bulgaria</option>
                            <option value="BFA">Burkina Faso</option>
                            <option value="BDI">Burundi</option>
                            <option value="KHM">Cambodia</option>
                            <option value="CMR">Cameroon</option>
                            <option value="CAN">Canada</option>
                            <option value="CPV">Cape Verde</option>
                            <option value="CAF">Central African Republic</option>
                            <option value="TCD">Chad</option>
                            <option value="CHL">Chile</option>
                            <option value="CHN">China</option>
                            <option value="COL">Columbia</option>
                            <option value="COM">Comoros</option>
                            <option value="COG">Congo,</option>
                            <option value="CRI">Costa Rica</option>
                            <option value="HRV">Croatia</option>
                            <option value="CUB">Cuba</option>
                            <option value="CYP">Cyprus</option>
                            <option value="CZE">Czech Republic</option>
                            <option value="DNK">Denmark</option>
                            <option value="DJI">Djibouti</option>
                            <option value="DMA">Dominica</option>
                            <option value="TMP">East Timor</option>
                            <option value="ECU">Ecuador</option>
                            <option value="EGY">Egypt</option>
                            <option value="SLV">El Salvador</option>
                            <option value="GBR">England</option>
                            <option value="GNQ">Equatorial Guinea</option>
                            <option value="ERI">Eritrea</option>
                            <option value="EST">Estonia</option>
                            <option value="ETH">Ethiopia</option>
                            <option value="FJI">Fiji</option>
                            <option value="FIN">Finland</option>
                            <option value="FRA">France</option>
                            <option value="GAB">Gabon</option>
                            <option value="GMB">Gambia</option>
                            <option value="GEO">Georgia</option>
                            <option value="DEU">Germany</option>
                            <option value="GHA">Ghana</option>
                            <option value="GRC">Greece</option>
                            <option value="GRD">Grenada</option>
                            <option value="GTM">Guatemala</option>
                            <option value="GIN">Guinea</option>
                            <option value="GNB">Guinea-Bissau</option>
                            <option value="GUY">Guyana</option>
                            <option value="HTI">Haiti</option>
                            <option value="HND">Honduras</option>
                            <option value="HUN">Hungary</option>
                            <option value="ISL">Iceland</option>
                            <option value="IND">INDIA</option>
                            <option value="IDN">Indonesia</option>
                            <option value="IRN">Iran</option>
                            <option value="IRQ">Iraq</option>
                            <option value="IRL">Ireland</option>
                            <option value="ISR">Israel</option>
                            <option value="ITA">Italy</option>
                            <option value="CIV">Ivory Coast</option>
                            <option value="JAM">Jamaica</option>
                            <option value="JPN">Japan</option>
                            <option value="KAZ">Kazakhstan</option>
                            <option value="KEN">Kenya</option>
                            <option value="KSA">
                              Kingdom of Saudi Arabia
                            </option>
                            <option value="KIR">Kiribati</option>
                            <option value="KWT">Kuwait</option>
                            <option value="KGZ">Kyrgyz Republic</option>
                            <option value="LAO">Laos</option>
                            <option value="LVA">Latvia</option>
                            <option value="LBN">Lebanon</option>
                            <option value="LSO">Lesotho</option>
                            <option value="LBR">Liberia</option>
                            <option value="LBY">Libya</option>
                            <option value="LIE">Liechtenstein</option>
                            <option value="LTU">Lithuania</option>
                            <option value="LUX">Luxembourg</option>
                            <option value="MKD">Macedonia</option>
                            <option value="MDG">Madagascar</option>
                            <option value="MWI">Malawi</option>
                            <option value="MYS">Malaysia</option>
                            <option value="MDV">Maldives</option>
                            <option value="MLI">Mali</option>
                            <option value="MLT">Malta</option>
                            <option value="MHL">Marshall Islands</option>
                            <option value="MRT">Mauritania</option>
                            <option value="MUS">Mauritius</option>
                            <option value="MEX">Mexico</option>
                            <option value="FSM">Micronesia</option>
                            <option value="MDA">Moldova</option>
                            <option value="MCO">Monaco</option>
                            <option value="MNG">Mongolia</option>
                            <option value="MNE">Montenegro</option>
                            <option value="MAR">Morocco</option>
                            <option value="MOZ">Mozambique</option>
                            <option value="MMR">Myanmar (formerly known as Burma)</option>
                            <option value="NAM">Namibia</option>
                            <option value="NRU">Nauru</option>
                            <option value="NPL">Nepal</option>
                            <option value="NLD">Netherlands</option>
                            <option value="NZL">New Zealand</option>
                            <option value="NZL1">New Zealand</option>
                            <option value="NIC">Nicaragua</option>
                            <option value="NER">Niger</option>
                            <option value="NGA">Nigeria</option>
                            <option value="PRK">North Korea</option>
                            <option value="NOR">Norway</option>
                            <option value="OMN">Oman</option>
                            <option value="OTH">Others</option>
                            <option value="PAK">Pakistan</option>
                            <option value="PLW">Palau</option>
                            <option value="PSE">Palestine</option>
                            <option value="PAN">Panama</option>
                            <option value="PNG">Papua New Guinea</option>
                            <option value="PRY">Paraguay</option>
                            <option value="PER">Peru</option>
                            <option value="PHL">Philippines</option>
                            <option value="POL">Poland</option>
                            <option value="PRT">Portugal</option>
                            <option value="PRI">Puerto Rico</option>
                            <option value="QAT">Qatar</option>
                            <option value="ROM">Romania</option>
                            <option value="RUS">Russia</option>
                            <option value="RWA">Rwanda</option>
                            <option value="KNA">Saint Kitts and Nevis</option>
                            <option value="LCA">Saint Lucia</option>
                            <option value="WSM">Samoa</option>
                            <option value="SMR">San Marino</option>
                            <option value="STP">Sao Tome and Principe</option>
                            <option value="JOR">SAU</option>
                            <option value="SCO">Scotland</option>
                            <option value="SEN">Senegal</option>
                            <option value="SRB">Serbia</option>
                            <option value="SYC">Seychelles</option>
                            <option value="SLE">Sierra Leone</option>
                            <option value="SGP">Singapore</option>
                            <option value="SVK">Slovakia</option>
                            <option value="SVN">Slovenia</option>
                            <option value="SLB">Solomon Islands</option>
                            <option value="SOM">Somalia</option>
                            <option value="ZAF">South Africa</option>
                            <option value="KOR">South Korea</option>
                            <option value="ESP">Spain</option>
                            <option value="LKA">Sri Lanka</option>
                            <option value="SDN">Sudan</option>
                            <option value="SUR">Suriname</option>
                            <option value="SWZ">Swaziland</option>
                            <option value="SWE">Sweden</option>
                            <option value="CHE">Switzerland</option>
                            <option value="SYR">Syria</option>
                            <option value="TWN">Taiwan</option>
                            <option value="TJK">Tajikistan</option>
                            <option value="TZA">Tanzania</option>
                            <option value="THA">Thailand</option>
                            <option value="TGO">Togo</option>
                            <option value="TON">Tonga</option>
                            <option value="TTO">Trinidad and Tobago</option>
                            <option value="TUN">Tunisia</option>
                            <option value="TUR1">Turkestan</option>
                            <option value="TUR">Turkey</option>
                            <option value="TKM">Turkmenistan</option>
                            <option value="TUV">Tuvalu</option>
                            <option value="UAE">UAE</option>
                            <option value="UGA">Uganda</option>
                            <option value="UKR">Ukraine</option>
                            <option value="ARE">United Arab Emirates</option>
                            <option value="UK1">United Kingdom</option>
                            <option value="USA">United States</option>
                            <option value="URY">Uruguay</option>
                            <option value="UZB">Uzbekistan</option>
                            <option value="VUT">Vanuatu</option>
                            <option value="VEN">Venezuela</option>
                            <option value="VNM">Vietnam</option>
                            <option value="WAL">Wales</option>
                            <option value="YEM1">Yeman</option>
                            <option value="YEM">Yemen</option>
                            <option value="ZMB">Zambia</option>
                            <option value="ZWE">Zimbabwe</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.nationality}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0193} </label>
                            <input
                              type="text"
                              id="provience"
                              name="provience"
                              defaultValue={this.state.fieldArray.provience}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.provience}</i>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0180} </label>
                          <input
                            type="text"
                            id="address2"
                            name="address2"
                            defaultValue={this.state.fieldArray.address2}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.address2}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0046} </label>
                          <input
                            type="text"
                            id="address1"
                            name="address1"
                            defaultValue={this.state.fieldArray.address1}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.address1}</i>
                        </div>
                      </div>
                    </div>

                    {/* first section */}
                    <div className="col-xs-12">
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0194}</label>
                          <input
                            type="number"
                            id="zipcode"
                            name="zipcode"
                            defaultValue={this.state.fieldArray.zipcode}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.zipcode}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0111}</label>
                          <input type="number" id="pobox" name="pobox" defaultValue={this.state.fieldArray.pobox} onChange={this.processInput} />
                          <i className="text-danger">{this.state.errorarray.pobox}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0122} </label>

                          <select id="district" name="district" onChange={this.handleSelectChange} defaultValue={this.state.fieldArray.district}>
                            <option value="Riyadh">Riyadh</option>
                            <option value="Riyadh">Riyadh</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.district}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0056}</label>

                          <select id="city" name="city" onChange={this.handleSelectChange} defaultValue={this.state.fieldArray.city}>
                            <option value="Riyadh">Riyadh</option>
                            <option value="Riyadh">Riyadh</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.city}</i>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0084}</label>
                          <input type="text" id="street" name="street" defaultValue={this.state.fieldArray.street} onChange={this.processInput} />
                          <i className="text-danger">{this.state.errorarray.street}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0092}</label>
                          <input
                            type="text"
                            id="buildingnumber"
                            name="buildingnumber"
                            defaultValue={this.state.fieldArray.buildingnumber}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.buildingnumber}</i>
                        </div>
                      </div>
                    </div>
                    {/* <div className="savebtnnext">
                    <button onClick={this.handleSubmit} className="dfs-savebtn">
                      Next
                 </button>
                  </div> */}
                    <div className="col-sm-12 save-container">
                      <button className="dfs-savebtn" onClick={this.state.submitBtnStatus === 1 ? this.saveAndContinue : null}>
                      {this.state.submitBtnStatus === 1 ? 'Save And Continue':'Processing..'}
                      </button>
                    </div>
                  </div>
                ) : /*------------------------------------------------ first page done (your self)-------------------------------------------------- */

                  this.state.activekey === 2 ? (
                    <div className="Firstpage">
                      <div className="text-right" style={{ marginRight: '30px' }}>
                        <h4>{field0005}</h4>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="subsector">{field0007}</label>

                          <select id="subSector" name="subSector" onChange={this.handleSelectChange} defaultValue={this.state.fieldArray.subsector}>
                            <option value="-1">{field0192}</option>
                            <option value="procurement">Procurement</option>
                            <option value="procurement">Procurement1</option>
                            <option value="procurement">Procurement2</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.subsector}</i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="sector">{field0006}</label>

                          <select id="sector" name="sector" onChange={this.handleSelectChange} defaultValue={this.state.fieldArray.sector}>
                            <option value="-1">{field0192}</option>
                            <option value="retail">Retail</option>
                            <option value="retail">Retail1</option>
                            <option value="retail">Retail2</option>
                            <option value="retail">Retail3</option>
                            <option value="retail">Retail4</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.sector}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="emptype">{field0030}</label>

                          <select
                            id="employmentType"
                            name="employmentType"
                            onChange={this.handleSelectChange}
                            defaultValue={this.state.fieldArray.employmentType}
                          >
                            <option value="-1">{field0192}</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                          </select>
                          <i className="text-danger">{this.state.errorarray.employmentType}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0004}</label>
                            <input
                              type="text"
                              name="companynameL2"
                              defaultValue={this.state.fieldArray.companynameL2}
                              onChange={this.processInput}
                              id="empname"
                            />
                            <i className="text-danger">{this.state.errorarray.companyName}</i>
                          </div>
                        </div>
                      </div>
                      {/* first section close */}
                      {/* second section start */}
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label for="designation">{field0008}</label>

                            <select
                              id="designation"
                              name="designation"
                              onChange={this.handleSelectChange}
                              defaultValue={this.state.fieldArray.designation}
                            >
                              <option value="-1">{field0192}</option>
                              <option value="Porgram Manager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                            </select>
                            <i className="text-danger">{this.state.errorarray.designation}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label> {field0010}</label>
                          <input
                            type="number"
                            name="serviceinmonths"
                            defaultValue={this.state.fieldArray.serviceinmonths}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.serviceinmonth}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0197}</label>
                          <HijriDatePicker
                            inputName="hijri_date"
                            className="form-control"
                            selectedDate="1424/08/03"
                            dateFormat="iYYYY/iMM/iDD"
                            quickSelect
                            defaultValue={this.state.fieldArray.dateOfJoining}
                          />
                          <i className="text-danger">{this.state.errorarray.dateofjoining}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>{field0009}</label>
                          <input
                            type="date"
                            name="dateOfJoining"
                            min="2002-11-04"
                            max={moment(Date.now).format('yyyy-mm-dd')}
                            defaultValue={this.state.fieldArray.dateOfJoining}
                            onChange={this.processInput}
                            style={{ fontSize: '14px' }}
                          />
                          <i className="text-danger">{this.state.errorarray.dateofjoining}</i>
                        </div>
                      </div>
                      {/* second section end */}
                      {/* Financial details main section start */}
                      <div className="col-xs-12 text-right field-seprator" style={{ marginRight: '30px' }}>
                        <h4>{field0011}</h4>
                      </div>
                      {/* first section start */}
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0014}</label>
                            <input
                              type="number"
                              name="financePremium"
                              defaultValue={this.state.fieldArray.financePremium}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.financePremium}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0013}</label>
                            <input
                              type="number"
                              name="monthlyAdditionalIncome"
                              defaultValue={this.state.fieldArray.monthlyAdditionalIncome}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlyeditionincome}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0012}</label>
                            <input
                              type="number"
                              name="monthlysalary"
                              defaultValue={this.state.fieldArray.monthlysalary}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlysalary}</i>
                          </div>
                        </div>
                      </div>
                      {/* first section end */}
                      {/* second section start */}
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0016}</label>
                            <input
                              type="number"
                              name="noofchildren"
                              defaultValue={this.state.fieldArray.noofchildren}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.numberofdependencychild}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0015}</label>
                            <input
                              type="number"
                              name="numofdpdntSpouse"
                              defaultValue={this.state.fieldArray.numofdpdntSpouse}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.numberofdependencyspouse}</i>
                          </div>
                        </div>
                      </div>
                      {/* section section end */}

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0018} </label>
                            <input
                              type="number"
                              name="monthlyhomerent"
                              defaultValue={this.state.fieldArray.monthlyhomerent}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlyhomerent}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0024}</label>
                            <input type="number" name="assetvalue" defaultValue={this.state.fieldArray.assetvalue} onChange={this.processInput} />
                            <i className="text-danger">{this.state.errorarray.assetvalue}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>{field0017} </label>
                            <select>
                              <option value="Flat">Flat</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>{field0032} </label>
                          <input type="number" name="obligationmonthly" readOnly className="shadow" defaultValue={this.state.obligationmonthly} />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>{field0031} </label>
                          <input type="text" name="homefinance" disabled value="0.00" className="shadow" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>{field0021}</label>
                          <input
                            type="text"
                            name="financingInstallments"
                            disabled
                            defaultValue={this.state.financingInstallments}
                            className="shadow"
                          />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>{field0022}</label>
                          <input type="text" name="creditLimit" disabled defaultValue={this.state.creditLimit} className="shadow" />
                        </div>
                      </div>

                      <div className="col-xs-12 save-container">
                        <button onClick={this.backpage} className="dfs-savebtn" style={{ marginRight: '30px' }}>
                          Back
                      </button>

                        {/* <div className="savebtnnext1">
                      <button onClick={this.handleSubmit} className="dfs-savebtn">
                        Next
                            </button>
                    </div> */}
                        <button className="dfs-savebtn" onClick={this.state.submitBtnStatus === 1 ? this.saveAndContinueDraft :null}>
                       { this.state.submitBtnStatus === 1 ? 'Save And Continue':'Proccessing..'}
                      </button>
                      </div>
                    </div>
                  ) : /*--- second page done (your Nationality)------ */

                    this.state.activekey === 3 ? (
                      <div id="tp" className="thirdpage">
                        <div className="col-sm-12">
                          <div className="align-center">
                            <h4>Please Upload Documents</h4>
                          </div>
                          <div className="col-sm-6">
                            <div className="agent-dropimage">
                              <div className="browsertxt">
                                Drop your files here.
                            <br />
                                <label for="files">
                                  Or <a style={{ color: 'blue' }}>Browser</a>
                                </label>
                                <input id="files" style={{ visibility: 'hidden' }} type="file" />
                              </div>
                            </div>
                          </div>
                          {/* left section end */}
                          <div className="col-sm-6">
                            {this.state.documentList &&
                              this.state.documentList.map(item => {
                                return (
                                  <div style={{ display: 'flex' }}>
                                    <div className="">
                                      <i className="fa fa-file-pdf-o red-color "></i>
                                    </div>

                                    <div className="agent-pdf-text" id={item.docid}>
                                      {item.docdescription}
                                    </div>
                                    <input type="file" id={item.docid} onChange={this.onFileChange} />
                                  </div>
                                );
                              })}
                            {/* <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Application Form</div>
                        </div> */}

                            {/* <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-image-o light-BLUE" aria-hidden="true"></i>
                          </div>
                          <div className="agent-pdf-text">Identification Document</div>
                        </div> */}

                            {/* <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Monthly Salary Certification</div>
                        </div> */}

                            {/* <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Last 3 months bank statement</div>
                        </div>
                      </div> */}
                          </div>
                        </div>
                        <div className="save-container col-sm-12">
                          <button onClick={this.backpage} className="dfs-savebtn" style={{ marginRight: '15px' }}>
                            Back
                      </button>

                          {/* <div className="savebtnnext1">
                        <button onClick={this.handleSubmit} className="dfs-savebtn">
                          Next
                          </button>
                      </div> */}
                          <div className=" ">
                            <button className="dfs-savebtn" onClick={this.saveAndContinueFile}>
                              Save And Continue
                        </button>
                          </div>
                        </div>
                      </div>
                    ) : this.state.activekey === 4 ? (
                      <div id="fp" className="fourthpage">
                        <div className="col-sm-12" style={{ marginTop: '10px' }}>
                          <div className="agent-loan-details">Loan Details</div>

                          <div className="col-sm-3">
                            <div className="agent-lablestyle">
                              <label>{field0060}</label>
                              <select id="tenure" name="tenure" onChange={this.handleTenureChange} defaultValue={this.state.loan.tenure}>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="24">24</option>
                                <option value="30">30</option>
                                <option value="36">36</option>
                                <option value="42">42</option>
                                <option value="48">48</option>
                                <option value="54">54</option>
                                <option value="60">60</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="agent-lablestyle">
                              <label>{field0059} </label>
                              <input
                                type="number"
                                id="downPayment"
                                name="downPayment"
                                defaultValue={this.state.loan.downPayment}
                                onChange={this.handleDownpayment}
                              />
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="agent-lablestyle">
                              <label>{field0061}</label>
                              <input
                                type="number"
                                id="reqAmount"
                                name="reqAmount"
                                defaultValue={this.state.loan.reqAmount}
                                onChange={this.handleInvoiceAmt}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-3">
                          <div className="agent-lablestyle">
                            <label>{field0063}</label>
                            <input type="number" defaultValue={this.state.loan.monthlyInst} readOnly />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="agent-lablestyle">
                            <label>{field0062} </label>
                            <input type="number" defaultValue={this.state.loan.payableAmt} readOnly />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="agent-lablestyle">
                            <label>{field0096} </label>
                            <input type="number" defaultdefaultValue={this.state.loan.reqAmount} readOnly />
                          </div>
                        </div>

                        <div className="agent-saveandcontinuestyle">
                          <div className="savebtnnext">
                            <button onClick={this.backpage} className="dfs-savebtn">
                              Back
                        </button>
                          </div>

                          {/* <div className="savebtnnext1">
                        <button onClick={this.handleSubmit} className="dfs-savebtn">
                          Next
                          </button>
                      </div> */}
                          <div className="save-container">
                            <button className="dfs-savebtn" onClick={this.saveAndContinueLoan}>
                              Save And Continue
                        </button>
                          </div>
                        </div>
                      </div>
                    ) : this.state.activekey === 5 ? (
                      <div id="fp" className="fourthpage">
                        <div className="col-sm-12" style={{ marginTop: '10px',minHeight:'40vh' }}>
                          <div className="agent-loan-info" style={{height:100}}>Onboarding Completed</div>
                          <div className="agent-loan-info">
                            Congratulations !! {window.sessionStorage.getItem('customerAddressData').title}{' '}
                            {window.sessionStorage.getItem('customerPersonalData').firstName}, Your loan application is submitted successfully.
                        Please find the details below and Visit the nearest store.
                      </div>
                      <div  className="complete-body">
                        {console.log(this.state,'this is by rahul')}
                      <div><span>Application Id : </span><span> {this.state.fieldArray.customerId}</span></div>
                      <div><span>Store Location : </span><span> {this.state.fieldArraYStore.storeName}</span></div>
                      <div><span>Vendor : </span><span>{this.state.fieldArraYStore.vendor_name}</span></div>
                      </div>
                      
                          <div className="save-container">
                            <button className="dfs-savebtn" onClick={this.saveAndContinueDashboard}>
                              View Dashboard
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
      </>
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
    onlineApplication: () => dispatch(onlineApplication()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(personalinfo);
