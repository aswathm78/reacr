import config from '../../assets/config/config';
import axios from 'axios';
import { CUSTOMER_LOAN_DETAILS_FAILURE } from '../../store/action';
import moment from 'moment';

class CustomerApiClass {
  getNewCustomerLabel() {
    axios.get(config.STRAPI_URL + '/agent-newcustomers').then(res => {
      // this.setState({ newCustomerFields: res.data });
      return res.data;
    });
  }

  checkAddress = async stateData => {
    let fieldArray = stateData;
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    console.log(fieldArray.ninId);
    try {
      const response = await axios.get(`http://122.166.172.240:3031/api/addresses?ninno.equals=` + fieldArray.ninId, headerConfig);
      // console.log(response.data);
      if (response.data.length == 0) {
        return true;
      } else {
        fieldArray['addressId'] = response.data[0].id;
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  addAddress = async stateData => {
    // address1: fieldArray['address1'],
    //   address2: fieldArray['address2'],
    //   buildingnumber: fieldArray['buildingnumber'],
    //   city: fieldArray['city'],
    //   country: fieldArray['nationality'],
    //   district: fieldArray['district'],
    //   ninno: fieldArray['ninId'],
    //   pobox: fieldArray['pobox'],
    //   postcode: fieldArray['zipcode'],
    //   provience: fieldArray['provience'],
    //   street: fieldArray['street'],
    //   zipcode: fieldArray['zipcode'],

    let fieldArray = stateData;
    let reqData = {
      additionalnumber: fieldArray['additionalnumber'],
      address1: fieldArray['address1'],
      address2: fieldArray['address2'],
      buildingnumber: fieldArray['buildingnumber'],
      city: fieldArray['city'],
      cityL2: fieldArray['cityL2'],
      cityid: fieldArray['cityid'],
      compApplId: '',
      compId: '',
      companynameL2: fieldArray['companynameL2'],
      country: fieldArray['nationality'],
      custId: fieldArray['customerId'],
      district: fieldArray['district'],
      districtL2: fieldArray['districtL2'],
      districtid: fieldArray['districtid'],
      email: fieldArray['emailId'],
      governorate: fieldArray['governorate'],
      governorateL2: fieldArray['governorateL2'],
      governorateid: fieldArray['governorateid'],
      isprimaryaddress: fieldArray['isprimaryaddress'],
      latitude: fieldArray['latitude'],
      livingSince: 0,
      longitude: fieldArray['longitude'],
      mobileNumber: fieldArray['mobileNumber'],
      ninno: fieldArray['ninId'],
      noancredit: '',
      objlatlng: fieldArray['objlatlng'],
      phoneNumber: fieldArray['mobileNumber'],
      pkaddressid: fieldArray['pkaddressid'],
      pobox: fieldArray['pobox'],
      polygonstring: fieldArray['polygonstring'],
      postcode: fieldArray['zipcode'],
      provience: fieldArray['provience'],
      regionid: fieldArray['regionid'],
      regionname: fieldArray['regionname'],
      regionnameL2: fieldArray['regionnameL2'],
      restriction: fieldArray['restriction'],
      state1: '',
      street: fieldArray['street'],
      streetL2: fieldArray['streetL2'],
      title: fieldArray['title'],
      titleL2: fieldArray['titleL2'],
      unitnumber: fieldArray['unitnumber'],
      zipcode: fieldArray['zipcode'],
    };
    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.post('http://122.166.172.240:3031/api/addresses', reqData, headerConfig);

    if (response.status == 200 || response.status == 201) {
      console.log(response);
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };

  updateAddress = async stateData => {
    let fieldArray = stateData;
    console.log(fieldArray);
    let reqData = {
      id: fieldArray['addressId'],
      additionalnumber: fieldArray['additionalnumber'],
      address1: fieldArray['address1'],
      address2: fieldArray['address2'],
      buildingnumber: fieldArray['buildingnumber'],
      city: fieldArray['city'],
      cityL2: fieldArray['cityL2'],
      cityid: fieldArray['cityid'],
      compApplId: '',
      compId: '',
      companynameL2: fieldArray['companynameL2'],
      country: fieldArray['nationality'],
      custId: fieldArray['customerId'],
      district: fieldArray['district'],
      districtL2: fieldArray['districtL2'],
      districtid: fieldArray['districtid'],
      email: fieldArray['emailId'],
      governorate: fieldArray['governorate'],
      governorateL2: fieldArray['governorateL2'],
      governorateid: fieldArray['governorateid'],
      isprimaryaddress: fieldArray['isprimaryaddress'],
      latitude: fieldArray['latitude'],
      livingSince: 0,
      longitude: fieldArray['longitude'],
      mobileNumber: fieldArray['mobileNumber'],
      ninno: fieldArray['ninId'],
      noancredit: '',
      objlatlng: fieldArray['objlatlng'],
      phoneNumber: fieldArray['mobileNumber'],
      pkaddressid: fieldArray['pkaddressid'],
      pobox: fieldArray['pobox'],
      polygonstring: fieldArray['polygonstring'],
      postcode: fieldArray['zipcode'],
      provience: fieldArray['provience'],
      regionid: fieldArray['regionid'],
      regionname: fieldArray['regionname'],
      regionnameL2: fieldArray['regionnameL2'],
      restriction: fieldArray['restriction'],
      state1: '',
      street: fieldArray['street'],
      streetL2: fieldArray['streetL2'],
      title: fieldArray['title'],
      titleL2: fieldArray['titleL2'],
      unitnumber: fieldArray['unitnumber'],
      zipcode: fieldArray['zipcode'],
    };

    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.put('http://122.166.172.240:3031/api/addresses', reqData, headerConfig);
    console.log(response);
    if (response.status == 200 || response.status == 201) {
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };

  checkCustomer = async stateData => {
    let fieldArray = stateData;
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    try {
      const response = await axios.get('http://122.166.172.240:3031/api/customers/' + fieldArray.customerId, headerConfig);
      if (response.data.length == 0) {
        return true;
      } else {
        fieldArray['customerId'] = response.data[0].id;
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  updateCustomer = async stateData => {
    let fieldArray = stateData;
    console.log(fieldArray)
    let reqData = {
      id: fieldArray['customerId'],
      accommodationType: '',
      accountNo: '',
      appId: fieldArray['appId'],
      assetValue: 0,
      bvn: '',
      casaAccountNo: '',
      cgCompanyName: fieldArray['companynameL2'],
      city: fieldArray['city'],
      compId: '',
      companyId: 0,
      companyName: fieldArray['companynameL2'],
      country: fieldArray['nationality'],
      creditCardsLimits: 0,
      currency: 'SAR',
      dateOfJoining: fieldArray['dateOfJoining'],
      dateofBirth: fieldArray['dobLocalDate'],
      designation: fieldArray['designation'],
      directManagerEmail: '',
      directManagerExtnNo: '',
      directManagerName: '',
      directManagerTelNo: '',
      duplicateFound: '',
      emailId: '',
      emailsOTP: 0,
      employerName: fieldArray['employerName'],
      employmentType: '',
      expiryDate: '2020-11-10',
      familyArabicName: 'string',
      familyName: fieldArray['familyName'] != undefined ? fieldArray['familyName'] : '',
      financePremium: fieldArray['financePremium'] != undefined ? fieldArray['financePremium'] : 0,
      financingInstallments: 0,
      firstName: fieldArray['firstName'],
      firstNameArabic: fieldArray['firstNameArabic'],
      gender: fieldArray['gender'],
      homeFinancePremium: 0,
      idIssueDate: '2020-11-10',
      idIssueplace: fieldArray['issue_location_en'],
      idNumber: fieldArray['ninno'],
      idType: '',
      isCoApplicant: true,
      isCustomer: '',
      joiningDate: fieldArray['dateOfJoining'],
      lastName: '',
      martialStatus: '',
      middleName: '',
      mobileNumber: 0,
      mobileOTP: 0,
      moduleFlag: '',
      monthlyAdditionalIncome: fieldArray['monthlyAdditionalIncome'],
      monthlyHomeRent: 0,
      monthlySalary: fieldArray['monthlySalary'],
      nameOfEmployer: fieldArray['nameOfEmployer'],
      nationalAddress: fieldArray['address1'] + ' ' + fieldArray['address2'],
      nationality: fieldArray['nationality'],
      natureOfBusiness: '',
      noOfYearsInProfession: 0,
      noofchildren: fieldArray['noofchildren'],
      numofDpdntChildren: fieldArray['noofchildren'],
      numofdpdntSpouse: fieldArray['numofdpdntSpouse'],
      obligationsMonthly: 0,
      occupancyStatus: '',
      otpVerified: true,
      password: fieldArray['password'],
      percentOfShareholding: 0,
      placeOfStay: fieldArray['city'],
      poBox: fieldArray['poBox'],
      productcode: '',
      province: fieldArray['province'],
      regAnyStatuotaryAuthority: 'string',
      registrExpiryDate: '2020-11-10',
      registrationDate: '2020-11-10',
      registrationNumber: '',
      relatedemployer: '',
      retiredage: 0,
      retsalcreditanb: '',
      salcreditanb: '',
      secondNameArabic: '',
      sector: fieldArray['sector'],
      serviceinmonths: fieldArray['serviceinmonths'],
      status: '',
      streetName: fieldArray['street'],
      subSector: fieldArray['subSector'],
      thirdNameArabic: 'string',
      totalExperience: 0,
      typeOfEmployment: fieldArray['typeOfEmployment'],
      userId: fieldArray['userid'],
      userRole: '',
      userType: '',
      zipCode: fieldArray['zipcode'],
    };

    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
    console.log(headerConfig);
    console.log(reqData);
    const response = await axios.put('http://122.166.172.240:3031/api/customers', reqData, headerConfig);
    console.log(response);
    // if (response.status == 200) {
    //     window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
    //     return true
    // }
    // else {
    //     return false
    // }
  };

  checkSimah = async stateData => {
    let fieldArray = stateData;
    let reqData = {
      EmployerName: fieldArray['arabicname'],
      LoanAmount: 30000.0,
      IDNumber: fieldArray['ninId'],
      IdExpiryDate: fieldArray['placeOfBirth'],
      BirthDate: fieldArray['placeOfBirth'],
      LastName: fieldArray['arabicLastname'],
      FirstName: fieldArray['arabicFirstname'],
      SecondName: fieldArray['arabicSecondname'],
      ThirdName: fieldArray['arabicThirdname'],
      LastNameEnglish: fieldArray['englishLastname'],
      FirstNameEnglish: fieldArray['englishfirstname'],
      SecondNameEnglish: fieldArray['englishSecondName'],
      ThirdNameEnglish: fieldArray['englishThirdName'],
      StreetName: fieldArray['street'],
      UnitNumber: 1,
      PostCode: fieldArray['zipcode'],
      City: fieldArray['city'],
      Mobile: fieldArray['mobile'],
      WorkingMonths: fieldArray[''],
      HousingAllowance: 0.0,
      OtherAllowance: 0.0,
      BasicWage: 0.0,
    };

    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.post('http://122.166.172.240:4000/SIMAH', reqData, headerConfig);
    console.log(response);
    if (response.status == 200) {
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };

  addLoan = async stateData => {
    const dateObj = new Date();
    const dateVal = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
    let loan = stateData.loan;
    let fieldArray = stateData;
    console.log(fieldArray)
    let reqData = {
      agentId: 0,
      appId: fieldArray['ninId'],
      assetIds: '',
      balloonPayment: 0,
      compApplId: fieldArray['compApplId'],
      createdDate: dateVal,
      currency: 'SAR',
      custId: fieldArray['customerId'],
      downPayment: 0,
      idNumber: fieldArray['customerId'],
      loanCurrentStatus: fieldArray['loanCurrentStatus'] ? fieldArray['loanCurrentStatus'] : 'Draft',
      productid: 'MURR',
      reqAmount: 30000,
      schemeId: '10',
      sendTo3i: true,
      subProduct: 'MURRCD',
      tenure: fieldArray['tenure'],
      vendorName: fieldArray['vendorName'] ? fieldArray['vendorName'] : '',
    };
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.post('http://122.166.172.240:3031/api/loans', reqData, headerConfig);
    console.log(response.data);

    if (response.status == 200 || response.status == 201) {
      fieldArray['appId'] = response.data.id;
      console.log(fieldArray);
      console.log(response.data.id);
      // window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(data));

      return true;
    } else {
      return false;
    }
  };

  updateLoan = async stateData => {
    let fieldArray = stateData.fieldArray;
    let loan = stateData.loan;
    const dateObj = new Date();
    const dateVal = dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();

    let reqData = {
      id: fieldArray['appId'],
      agentId: 0,
      appId: fieldArray['appId'],
      assetIds: '',
      balloonPayment: 0,
      compApplId: loan['compApplId'],
      createdDate: dateVal,
      currency: 'SAR',
      custId: fieldArray['customerId'],
      downPayment: loan['downPayment'] ? loan['downPayment'] : '',
      idNumber: fieldArray['customerId'],
      loanCurrentStatus: '',
      productid: 'MURR',
      reqAmount: loan['reqAmount'] ? loan['reqAmount'] : 10000,
      schemeId: '10',
      sendTo3i: true,
      subProduct: 'MURRCD',
      tenure: loan['tenure'],
      vendorName: 'Jariin',
    };
    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.put('http://122.166.172.240:3031/api/loans', reqData, headerConfig);
    console.log(response.data);
    if (response.status == 200) {
      fieldArray['appId'] = response.data.id;
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };

  loanCalculator = async stateData => {
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
    };
    try {
      outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig);
    } catch (error) {
      console.log(error);
    }
    let fieldArray = stateData;
    let rateOfInterest = 0;
    if (fieldArray['tenure'] == 1) {
      rateOfInterest = 19;
    } else if (fieldArray['tenure'] == 2) {
      rateOfInterest = 35;
    } else {
      rateOfInterest = 50;
    }

    let reqData = {
      loanAmount: fieldArray['reqAmount'],
      noOfMonths: fieldArray['tenure'],
      rateOfInterest: rateOfInterest,
    };
    const response = await axios.post(
      'http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/paymentCalculator?access_token=' + outh.data.access_token,
      reqData
    );
    console.log(response);
    if (response.status == 200) {
      fieldArray['monthlyInst'] = response.data.monthlyEMI;
      fieldArray['payableAmt'] = response.data.payableAmount;
      // fieldArray['monthlyInst'] = response.data.monthlyEMI
      return true;
    } else {
      return false;
    }
  };

  onlineApplication3i = async stateData => {
    let fieldArray = stateData.fieldArray;
    console.log('appppppp', fieldArray['appId']);

    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    try {
      const response = await axios.get(`http://122.166.172.240:3031/api/iord-soluton/onlineapp-sendto3i/` + fieldArray.appId, headerConfig);
      console.log(response)
      if (response.status == 200) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error, 'this is the error');
      return false;
    }
  };

  getDocumentList = async stateData => {
    

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
    };

    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig);

    // let loan = stateData.loan;
    // let documentListState = stateData.documentList;
    console.log(':::::loan[compApplId]::::::' + stateData);
    let reqData = {
      compApplId: stateData,
    };
    const response = await axios.post(
      'http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/getDocumentList?access_token=' + outh.data.access_token,
      reqData
    );
    console.log(response, 'this is response from');

    if (response.status == 200) {
      return response.data.aalist;
    } else {
      return [];
    }
  };

  documentUpload = (imageFile, customerId, callBack) => {
    var self = this;
    console.log(customerId);
    return new Promise((resolve, reject) => {
      var self = this;
      let imageFormData = new FormData();
      imageFormData.append('docType', imageFile.docType);
      imageFormData.append('uploadFile', imageFile);
      imageFormData.append('customerId', customerId);
      imageFormData.append('type', imageFile.fileType);

      var xhr = new XMLHttpRequest();
      xhr.open('post', 'http://122.166.172.240:3031/uploadDoc', true);
      xhr.onload = function () {
        if (this.status == 200) {
          // console.log(this.response);
          resolve(this.response);
          callBack(JSON.parse(this.response));
        } else {
          reject(this.statusText);
        }
      };
      xhr.send(imageFormData);
    });
  };

  uploaddocument = async reqData => {
    // 3i API NOT WORKING
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
    };

    outh = await axios.post(config.KASTLE_URL + 'oauth/token', null, headerConfig);

    const response = await axios.post(
      'http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/upload-documents?access_token=' + outh.data.access_token,
      reqData
    );
    console.log(response.data);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  };
}
const CustomerApi = new CustomerApiClass();

export default CustomerApi;
