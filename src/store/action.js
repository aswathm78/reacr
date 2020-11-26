import Axios from 'axios';
import config from '../assets/config/config';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

export const CUSTOMER_LOAN_DETAILS_SUCCESS = 'CUSTOMER_LOAN_DETAILS_SUCCESS ';
export const CUSTOMER_LOAN_DETAILS_REQUEST = 'CUSTOMER_LOAN_DETAILS_REQUEST';
export const CUSTOMER_LOAN_DETAILS_FAILURE = 'CUSTOMER_LOAN_DETAILS_FAILURE';

export const LOAN_PRODUCT_DETAILS_SUCCESS = 'LOAN_PRODUCT_DETAILS_SUCCESS';
export const LOAN_PRODUCT_DETAILS_REQUEST = 'LOAN_PRODUCT_DETAILS_REQUEST';
export const LOAN_PRODUCT_DETAILS_FAILURE = 'LOAN_PRODUCT_DETAILS_FAILURE';

export const REPAYMENT_DETAILS_SUCCESS = 'REPAYMENT_DETAILS_SUCCESS';
export const REPAYMENT_DETAILS_REQUEST = 'REPAYMENT_DETAILS_REQUEST';
export const REPAYMENT_DETAILS_FAILURE = 'REPAYMENT_DETAILS_FAILURE';

export const BENEFICIARY_DETAILS_SUCCESS = 'BENEFICIARY_DETAILS_SUCCESS';
export const BENEFICIARY_DETAILS_REQUEST = 'BENEFICIARY_DETAILS_REQUEST';
export const BENEFICIARY_DETAILS_FAILURE = 'BENEFICIARY_DETAILS_FAILURE';

export const LOANINFORMATION_DETAILS_SUCCESS = 'LOANINFORMATION_DETAILS_SUCCESS';
export const LOANINFORMATION_DETAILS_REQUEST = 'LOANINFORMATION_DETAILS_REQUEST';
export const LOANINFORMATION_DETAILS_FAILURE = 'LOANINFORMATION_DETAILS_FAILURE';

export const PROFILE_DETAILS_SUCCESS = 'PROFILE_DETAILS_SUCCESS';
export const PROFILE_DETAILS_REQUEST = 'PROFILE_DETAILS_REQUEST';
export const PROFILE_DETAILS_FAILURE = 'PROFILE_DETAILS_FAILURE';

export const YAKEEN_DETAILS_SUCCESS = 'YAKEEN_DETAILS_SUCCESS';
export const YAKEEN_DETAILS_REQUEST = 'YAKEEN_DETAILS_REQUEST';
export const YAKEEN_DETAILS_FAILURE = 'YAKEEN_DETAILS_FAILURE';

export const ONBOARDING_DETAILS_SUCCESS = 'ONBOARDING_DETAILS_SUCCESS';
export const ONBOARDING_DETAILS_REQUEST = 'ONBOARDING_DETAILS_REQUEST';
export const ONBOARDING_DETAILS_FAILURE = 'ONBOARDING_DETAILS_FAILURE';

// export const CUSTOMER_ONBOARDING_SUCCESS = 'ONBOARDING_DETAILS_SUCCESS';
// export const CUSTOMER_ONBOARDING_SUCCESS = 'ONBOARDING_DETAILS_REQUEST';
// export const CUSTOMER_ONBOARDING_SUCCESS = 'ONBOARDING_DETAILS_FAILURE';
export const ONLINEAPPLICATION_DETAILS_SUCCESS = 'ONLINEAPPLICATION_DETAILS_SUCCESS';
export const ONLINEAPPLICATION_DETAILS_REQUEST = 'ONLINEAPPLICATION_DETAILS_REQUEST';
export const ONLINEAPPLICATION_DETAILS_FAILURE = 'ONLINEAPPLICATION_DETAILS_FAILURE';

export function customerLoanDetails() {
  return async dispatch => {
    dispatch(customerLoanDetailsRequest('Request'));


    await Axios.post(config.KASTLE_URL + 'oauth/token', null, {
      headers: {
        Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
      },
      params: {
        grant_type: 'password',
        username: config.KASTLE_USER,
        password: config.KASTLE_PASS,
      },
    })
      .then(response => {
        let url1 = config.KASTLE_URL + 'digital/getAccountDetails?';
        let url2 = config.KASTLE_URL + 'digital/getOverdueDetails?';
        let url3 = config.KASTLE_URL + 'digital/getTransactionDetails?';

        let data1 = {
          language: 'en-US',
          loanId: '3047',
        };

        let data3 = {
          fromDate: '2018-07-01',
          language: 'en-US',
          loanId: '3047',
          noOfTrans: '',
          sequence: '',
          toDate: '2019-07-01',
          flag: 'R',
        };

        let headers = { appId: 1 };
        let params = { access_token: response.data.access_token };
        const requestOne = Axios.post(url1, data1, { headers: headers, params: params });
        const requestTwo = Axios.post(url2, data1, { headers: headers, params: params });
        const requestThree = Axios.post(url3, data3, { headers: headers, params: params });

        Promise.all([requestOne, requestTwo, requestThree]).then(values => {
          dispatch(customerLoanDetailsSuccess(values));
          //    this.setState({
          //        loanoverview:values[0].data,
          //        loanoverdue:values[1].data,
          //        transcationdetails:values[2].data['pslist'].slice(0, 8)

          //    })
        });
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(customerLoanDetailsFailure('customer loan details failure'));
      });
  };
}

const customerLoanDetailsSuccess = response => ({
  type: CUSTOMER_LOAN_DETAILS_SUCCESS,
  response,
});

const customerLoanDetailsRequest = response => ({
  type: CUSTOMER_LOAN_DETAILS_REQUEST,
  response,
});

const customerLoanDetailsFailure = error => ({
  type: CUSTOMER_LOAN_DETAILS_FAILURE,
  error,
});

export function loanProductDetails() {
  return async dispatch => {
    dispatch(loanProductDetailsRequest('Request'));

    await Axios.post(config.KASTLE_URL + 'oauth/token', null, {
      headers: {
        Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
      },
      params: {
        grant_type: 'password',
        username: 'user_admin',
        password: config.KASTLE_PASS,
      },
    })
      .then(response => {
        let url1 = config.KASTLE_URL + 'digital/product?';
        let accessToken = response.data.access_token;
        //let params = { access_token: response.data.access_token, productcode: reqbody }
        const requestOne = Axios.get(url1, { params: { access_token: accessToken, productcode: 'AAL' } });
        const requestTwo = Axios.get(url1, { params: { access_token: accessToken, productcode: 'CD' } });
        const requestThree = Axios.get(url1, { params: { access_token: accessToken, productcode: 'MF' } });
        const requestFour = Axios.get(url1, { params: { access_token: accessToken, productcode: 'SPER' } });

        Promise.all([requestOne, requestTwo, requestThree, requestFour]).then(values => {
          dispatch(loanProductDetailsSuccess(values));
        });
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(loanProductDetailsFailure('customer loan details failure'));
      });
  };
}

const loanProductDetailsSuccess = response => ({
  type: LOAN_PRODUCT_DETAILS_SUCCESS,
  response,
});

const loanProductDetailsRequest = response => ({
  type: LOAN_PRODUCT_DETAILS_REQUEST,
  response,
});

const loanProductDetailsFailure = error => ({
  type: LOAN_PRODUCT_DETAILS_FAILURE,
  error,
});

// --------------------RepaymentDetails API ---------------

export function repaymentDetails(data) {
  console.log(data, 'checkdata');
  return async dispatch => {
    dispatch(repaymentDetailsRequest('Request'));

    await Axios.post(config.KASTLE_URL + 'oauth/token', null, {
      headers: {
        Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
      },
      params: {
        grant_type: 'password',
        username: config.KASTLE_USER,
        password: config.KASTLE_PASS,
      },
    })
      .then(response => {
        let url1 = config.KASTLE_URL + 'digital/getRepaymentMode?';
        let url2 = config.STRAPI_URL + '/re-payment-modes';

        // let data1 =
        // {
        //     "language": "en-US",
        //     "loanId": "2809"
        // }

        let headers = { appId: 1 };
        let params = { access_token: response.data.access_token };

        const requestOne = Axios.post(url1, data, { headers: headers, params: params });
        const requestTwo = Axios.get(url2);

        Promise.all([requestOne, requestTwo]).then(values => {
          //console.log(values,'values')
          dispatch(repaymentDetailsSuccess(values));
        });
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(repaymentDetailsFailure('customer loan details failure'));
      });
  };
}

const repaymentDetailsSuccess = response => ({
  type: REPAYMENT_DETAILS_SUCCESS,
  response,
});

const repaymentDetailsRequest = response => ({
  type: REPAYMENT_DETAILS_REQUEST,
  response,
});

const repaymentDetailsFailure = error => ({
  type: REPAYMENT_DETAILS_FAILURE,
  error,
});

// -------------------beneficiary API response-------------------------------

export function beneficiaryDetails() {
  return async dispatch => {
    dispatch(beneficiaryDetailsRequest('Request'));
    // await axios
    // .post(config.base_url + 'cols', { })
    // .then(function (response) {
    // dispatch(customerLoanDetailsSuccess(response.data));
    // })

    await Axios.post(config.KASTLE_URL + 'oauth/token', null, {
      headers: {
        Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
      },
      params: {
        grant_type: 'password',
        username: 'user_admin',
        password: config.KASTLE_PASS,
      },
    })
      .then(response => {
        let url1 = config.KASTLE_URL + 'digital/getListOfBeneficiaries?';
        let url2 = config.KASTLE_URL + 'digital/getDisbursementDetails?';

        let data1 = {
          language: 'en-US',
          loanId: '3048',
        };

        let data2 = {
          language: 'en-US',
          loanId: '3031',
        };

        let headers = { appId: 1 };
        let params = { access_token: response.data.access_token };
        const requestOne = Axios.post(url1, data1, { headers: headers, params: params });
        const requestTwo = Axios.post(url2, data2, { headers: headers, params: params });

        Promise.all([requestOne, requestTwo]).then(values => {
          dispatch(beneficiaryDetailsSuccess(values));
        });
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(beneficiaryDetailsFailure('customer loan details failure'));
      });
  };
}

const beneficiaryDetailsSuccess = response => ({
  type: BENEFICIARY_DETAILS_SUCCESS,
  response,
});

const beneficiaryDetailsRequest = response => ({
  type: BENEFICIARY_DETAILS_REQUEST,
  response,
});

const beneficiaryDetailsFailure = error => ({
  type: BENEFICIARY_DETAILS_FAILURE,
  error,
});

// --------------------------loan information strapi data--------------------------------------//

export function loanInformationDetails() {
  return async dispatch => {
    dispatch(loanInformationDetailRequest('Request'));

    await Axios.get(config.STRAPI_URL + '/loan-informations')
      .then(response => {
        console.log('000 -- axios labels call form actions success')
        dispatch(loanInformationDetailSuccess(response));
      })
      .catch(function (error) {
        console.log('000 -- axios labels call form actions fail')
        console.log(error, 'error.., failure');
        dispatch(loanInformationDetailFailure('loan informations  details failure'));
      });
    };
  }
  
  const loanInformationDetailSuccess = response => (
    console.log('000 -- reducer labels success'),
    {
      type: LOANINFORMATION_DETAILS_SUCCESS,
      response,
    });
    
    const loanInformationDetailRequest = response => (
      console.log('000 -- reducer labels request'),
      {
        type: LOANINFORMATION_DETAILS_REQUEST,
        response,
      });
      const loanInformationDetailFailure = response => (
        console.log('000 -- reducer labels faliure'),
        {
  type: LOANINFORMATION_DETAILS_FAILURE,
  response,
});

export function Profiledetails() {
  return async dispatch => {
    dispatch(profile_details_request('Request'));
    let url1 = 'http://122.166.172.240:4000/general';
    let url2 = 'http://122.166.172.240:4000/addressList';
    const requestOne = Axios.get(url1);
    const requestTwo = Axios.get(url2);

    Promise.all([requestOne, requestTwo])
      .then(values => {
        // console.log(values,'profile details')
        dispatch(profile_details_success(values));
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(profile_details_failure('profiledetail request'));
      });
  };
}
const profile_details_success = response => ({
  type: PROFILE_DETAILS_SUCCESS,
  response,
});

const profile_details_request = response => ({
  type: PROFILE_DETAILS_REQUEST,
  response,
});
const profile_details_failure = response => ({
  type: PROFILE_DETAILS_FAILURE,
  response,
});

export function checking() {
  return async dispatch => {
    dispatch(yakeen_details_request('Request'));

    await Axios.get('http://122.166.172.240:4000/loanusrinfo')
      .then(response => {
        console.log('000 -- axios checking for loanfun call form actions success')
        dispatch(yakeen_details_success(response));
      })
      .catch(function (error) {
        console.log('000 -- axios labels call form actions fail')
        console.log(error, 'error.., failure');
        dispatch(yakeen_details_failure('loan checking fail for l  details failure'));
      });
    };
  }

export function Loaninfofun() {
  return async dispatch => {
    dispatch(yakeen_details_request('Request'));
    let url1 = 'http://122.166.172.240:4000/loanusrinfo';
    let url2 = 'http://122.166.172.240:4000/loandetails';

    const requestOne = Axios.get(url1);
    const requestTwo = Axios.get(url2);

    Promise.all([requestOne, requestTwo])
      .then(values => {
        console.log(values, '000 --- axios loanForFun success');
        dispatch(yakeen_details_success(values));
      })
      .catch(function (error) {
        console.log(error, '000 --- axios loanForFun failed');
        console.log(error, 'error.., failure');
        dispatch(yakeen_details_failure('yakeen request'));
      });
  };
}
const yakeen_details_success = response => (
  console.log(response, '000 --- action Loanforfun success'),
  {
    type: YAKEEN_DETAILS_SUCCESS,
    response,
  },(alert('success yakeen_Details_Success')));
  
  const yakeen_details_request = response => (
    console.log(response, '000 --- action Loanforfun request'),
    {
      type: YAKEEN_DETAILS_REQUEST,
      response,
    });
    const yakeen_details_failure = response => (
      console.log(response, '000 --- action Loanforfun failure'),
  {
  type: YAKEEN_DETAILS_FAILURE,
  response,
});

export function Onboardingfun() {
  return async dispatch => {
    dispatch(onboarding_personal_request('Request'));
    let url1 = 'http://122.166.172.240:4000/loanusrinfo';

    const requestOne = Axios.get(url1);

    Promise.all([requestOne])
      .then(values => {
        // console.log(values,'onboarding_personal_requestdata')
        dispatch(onboarding_personal_success(values));
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(onboarding_personal_failure('onboarding failure'));
      });
  };
}

const onboarding_personal_success = response => ({
  type: ONBOARDING_DETAILS_SUCCESS,
  response,
});

const onboarding_personal_request = response => ({
  type: ONBOARDING_DETAILS_REQUEST,
  response,
});
const onboarding_personal_failure = response => ({
  type: ONBOARDING_DETAILS_FAILURE,
  response,
});


export function onlineApplication() {
  return async dispatch => {
    dispatch(onlineapplicationDetailsRequest('Request'));
    // await axios
    // .post(config.base_url + 'cols', { })
    // .then(function (response) {
    // dispatch(customerLoanDetailsSuccess(response.data));
    // })

    await Axios.post(config.KASTLE_URL + 'oauth/token', null, {
      headers: {
        Authorization: 'Basic NjhlMWE4YjlmOWNkNjc1MjIwYTRjY2U2NGFhNjA5NjYwZTQ2OjFiMGNhNDA5OWY1ZWI2OWQ1OTE0YjkwNWIwMThlYTY0',
      },
      'Access-Control-Allow-Origin': '*',
      params: {
        grant_type: 'password',
        username: 'user_admin',
        password: config.KASTLE_PASS,
      },

    })
      .then(response => {
        let url1 = config.KASTLE_URL + 'digital/onlineApplication?';


        let data1 = {


          "assetDtlsModel": [
            {
              "assetName": "MOBILE",
              "assetDetails": "hometype",
              "assetCategory": "CATEGORY",
              "assetSubCategory": null,
              "assetCondition": "N",
              "assetMake": "Mercedes",
              "assetModel": "2019",
              "assetModelYear": "2020",
              "assetPrice": 5090,
              "balloonPayment": "0",
              "dealerName": "JARIR",
              "downPayment": 0,
              "referenceNumber": "1234",
              "itemNumber": "3434",
              "noOfUnits": 1,
              "assetCost": 5000,
              "vat": 90,
              "createDate": "07-02-1998",
              "requestId": "121",
              "vendorId": "32",
              "agentName": "swap"
            }
          ],
          "userDtlsModel": [
            {
              "appId": "351",
              "moduleFlag": null,
              "idType": "NID",
              "idNumber": "1021017338",
              "firstName": "Sunny",
              "martialStatus": " DIVORCED",
              "noofchildren": "2",
              "nationalAddress": " Unit 54, Building 86 3, Street Mena,  Almadinah, Ad Difa Dist, Saudi Arabia  ",
              "typeOfEmployment": "SAL",
              "middleName": "Janet Rangel",
              "lastName": "SMITH",
              "designation": "DESIG008",
              "joiningDate": "2020-06-06",
              "noOfYearsInProfession": "0",
              "retiredage": "58",
              "relatedemployer": null,
              "salcreditanb": null,
              "directManagerNam": "Ananya",
              "directManagerEmail": null,
              "directManagerTelNo": "852963",
              "directManagerExtnNo": null,
              "companyName": null,
              "registrationNumber": null,
              "registrationDate": null,
              "registrExpiryDate": null,
              "percentOfShareholding": null,
              "streetName": null,
              "city": null,
              "province": null,
              "zipCode": null,
              "poBox": null,
              "country": null,
              "retsalcreditanb": null,
              "mobileNumber": "8369571358",
              "emailId": "priyakanekar03@gmail.com",
              "dateofBirth": "1999-02-17",
              "gender": "F",
              "nationality": "SAU",
              "placeOfStay": "RIYADH",
              "productcode": "MURR",
              "cgCompanyName": null,
              "totalExperience": null,
              "regAnyStatuotaryAuthority": null,
              "natureOfBusiness": null,
              "isCoApplicant": "false",
              "currency": "SAR",
              "isCustomer": null,
              "accountNo": null,
              "familyName": "SMITH",
              "nameOfEmployer": "95",
              "idIssueDate": "0008-07-28",
              "idExpireDate": "0028-07-28",
              "idIssuePlace": "65418746",
              "firstNameInArabic": "رحان",
              "secondNameInArabic": " منصور",
              "thirdNameInArabic": "الحارثي",
              "arabicfamilyname": "عماري"
            }
          ],
          "incomeLiabilityModel": [
            {
              "appId": 351,
              "grossMonthlyIncome": 320000.0,
              "currentEMI": null,
              "anyliabilities": "N",
              "netIncome": null,
              "annualBonus": null,
              "avgMonthlyIncentive": null,
              "prevYearProfit": null,
              "currency": "SAR",
              "costOfLiving": "25630.0"
            }
          ],
          "loanDtlsModel": [
            {
              "appId": 351,
              "reqAmount": 500000.0,
              "subProduct": "MURRCD",
              "productid": "MURR",
              "currency": "SAR",
              "schemeId": "10",
              "tenure": 65
            }
          ],
          "loanDependantScreenModel": [
            {
              "appId": 351,
              "loanPurpose": null,
              "propertyType": null,
              "assetLocation": "MADINAH",
              "assetStatus": null,
              "assetDetails": null,
              "assetCost": 0.0,
              "typeOfResidence": null,
              "vehicleModel": 3,
              "vehicleMake": "Mercedes",
              " exShowroomPrice": 32.0,
              "productList": null,
              "currency": "SAR"
            }
          ],
          "coApplicantDtlsModel": [
            {
              " appId": 351,
              "idType": null,
              "idNumber": null,
              "coApplicantName": "raj",
              "owbership": null,
              "isCoApplicant": "true",
              "coFirstName": null,
              "firstName": null,
              "martialStatus": null,
              "noofchildren": 2,
              "nationalAddress": null,
              "typeOfEmployment": null,
              "middleName": null,
              "cofamilyName": null,
              "cogender": "F",
              "employername": null,
              "designation": null,
              "joiningDate": null,
              "noOfYearsInProfession": null,
              "retiredage": null,
              "relatedemployer": null,
              "salcreditanb": null,
              "directManagerNam": null,
              "directManagerEmail": null,
              "directManagerTelNo": null,
              "directManagerExtnNo": null,
              "companyName": null,
              "bussnat": null,
              "registrationNumber": null,
              "registrationDate": null,
              "registrExpiryDate": null,
              "percentOfShareholding": null,
              "streetName": null,
              "city": null,
              "province": null,
              "zipCode": null,
              "poBox": null,
              "country": null,
              "retsalcreditanb": null,
              "grossMonthlyIncome": null,
              "anyliabilities": null,
              "currentEMI": null,
              "nationality": 102,
              "costaying": null,
              "coLastName": null,
              "obligation": null
            }
          ],
          "addressDtlsModel": [
            {
              "appId": 351,
              "phoneNumber": null,
              "mobileNumber": null,
              "email": null,
              "address1": "TEST ADDRESS 1",
              "address2": "TEST ADDRESS 1",
              "address3": null,
              "city": "CITY066",
              "state": "NJR",
              "country": "KSA",
              "zipcode": null,
              "livingSince": "2009"
            }
          ]


        };



        let headers = { appId: 1 };
        let params = { access_token: response.data.access_token };
        const requestOne = Axios.post(url1, data1, { headers: headers, params: params });


        Promise.all([requestOne]).then(values => {
          console.log(values, 'onlinedata')
          dispatch(onlineapplicationDetailsSuccess(values));
        });
      })
      .catch(function (error) {
        console.log(error, 'error.., failure');
        dispatch(onlineapplicationDetailsFailure('customer loan details failure'));
      });
  };
}



const onlineapplicationDetailsSuccess = response => ({
  type: ONLINEAPPLICATION_DETAILS_SUCCESS,
  response,
});

const onlineapplicationDetailsRequest = response => ({
  type: ONLINEAPPLICATION_DETAILS_REQUEST,
  response,
});
const onlineapplicationDetailsFailure = response => ({
  type: ONLINEAPPLICATION_DETAILS_FAILURE,
  response,
});
