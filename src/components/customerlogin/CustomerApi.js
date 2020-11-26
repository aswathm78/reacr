import config from '../../assets/config/config';
import axios from 'axios';
class CustomerApiClass {
  checkCustomer = async stateData => {
    let fieldArray = stateData;
    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    try {
      const response = await axios.get(`http://122.166.172.240:3031/api/customers?appId.equals=` + fieldArray.ninId, headerConfig);
      console.log(response, 'check customer');
      if (response.data.length == 0) {
        return true;
      } else {
        fieldArray['customerId'] = response.data[0].id;
        window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA', JSON.stringify(fieldArray));
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  addCustomer = async stateData => {
    let fieldArray = stateData;
    let reqData = {
      accommodationType: '',
      accountNo: '',
      appId: fieldArray['appId'],
      assetValue: 0,
      bvn: '',
      casaAccountNo: '',
      cgCompanyName: '',
      city: fieldArray['city'],
      compId: 0,
      companyId: 0,
      companyName: '',
      country: fieldArray['nationality'],
      creditCardsLimits: 0,
      currency: '',
      dateOfJoining: fieldArray['dateOfJoining'],
      dateofBirth: fieldArray['dobLocalDate'],
      designation: '',
      directManagerEmail: '',
      directManagerExtnNo: '',
      directManagerName: '',
      directManagerTelNo: '',
      duplicateFound: '',
      emailId: fieldArray['emailId'],
      emailsOTP: 0,
      employerName: '',
      employmentType: '',
      expiryDate: '2020-11-10',
      familyArabicName: fieldArray['arabicfamilyname'],
      familyName: fieldArray['familyName'],
      financePremium: fieldArray['financePremium'],
      financingInstallments: 0,
      firstName: fieldArray['firstName'],
      firstNameArabic: fieldArray['firstNameArabic'],
      gender: fieldArray['gender'] === 'MALE' ? 'M' : 'F',
      homeFinancePremium: 0,
      idIssueDate: '2020-11-10',
      idIssueplace: '',
      idNumber: '',
      idType: '',
      isCoApplicant: true,
      isCustomer: '',
      joiningDate: '2020-11-10',
      lastName: '',
      martialStatus: '',
      middleName: '',
      mobileNumber: fieldArray['mobileNumber'],
      mobileOTP: 0,
      moduleFlag: '',
      monthlyAdditionalIncome: 0,
      monthlyHomeRent: 0,
      monthlySalary: 0,
      nameOfEmployer: '',
      nationalAddress: '',
      nationality: fieldArray['nationality'],
      natureOfBusiness: '',
      noOfYearsInProfession: 0,
      noofchildren: '',
      numofDpdntChildren: '',
      numofdpdntSpouse: '',
      obligationsMonthly: 0,
      occupancyStatus: '',
      otpVerified: true,
      password: fieldArray['password'],
      percentOfShareholding: 0,
      placeOfStay: '1234444',
      poBox: fieldArray['poBox'],
      productcode: '',
      province: fieldArray['province'],
      regAnyStatuotaryAuthority: '',
      registrExpiryDate: '2020-11-10',
      registrationDate: '2020-11-10',
      registrationNumber: '',
      relatedemployer: '',
      retiredage: 0,
      retsalcreditanb: '',
      salcreditanb: '',
      secondNameArabic: '',
      sector: '',
      serviceinmonths: '',
      status: '',
      streetName: '',
      subSector: '',
      thirdNameArabic: '',
      totalExperience: 0,
      typeOfEmployment: '',
      userId: fieldArray['userid'],
      userRole: '',
      userType: '',
      zipCode: '',
    };
    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.post('http://122.166.172.240:3031/api/customers', reqData, headerConfig);
    console.log(response);
    if (response.status == 200 || response.status == 201) {
      fieldArray['customerId'] = response.data.id;
      console.log('fieldArray', fieldArray);
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };

  updateCustomer = async stateData => {
    let fieldArray = stateData;

    let reqData = {
      id: fieldArray['customerId'],
      accommodationType: '',
      accountNo: '',
      appId: 0,
      assetValue: 0,
      bvn: '',
      casaAccountNo: '',
      cgCompanyName: '',
      city: fieldArray['city'],
      compId: 0,
      companyId: 0,
      companyName: '',
      country: fieldArray['nationality'],
      creditCardsLimits: 0,
      currency: '',
      dateOfJoining: fieldArray['dateOfJoining'],
      dateofBirth: fieldArray['dobLocalDate'],
      designation: '',
      directManagerEmail: '',
      directManagerExtnNo: '',
      directManagerName: '',
      directManagerTelNo: '',
      duplicateFound: '',
      emailId: fieldArray['emailId'],
      emailsOTP: 0,
      employerName: '',
      employmentType: '',
      expiryDate: '2020-11-10',
      familyArabicName: fieldArray['arabicfamilyname'],
      familyName: fieldArray['familyName'],
      financePremium: fieldArray['financePremium'],
      financingInstallments: 0,
      firstName: fieldArray['firstName'],
      firstNameArabic: fieldArray['firstNameArabic'],
      gender: fieldArray['gender'] === 'MALE' ? 'M' : 'F',
      homeFinancePremium: 0,
      idIssueDate: fieldArray['idIssueDate'],
      idIssueplace: fieldArray['idIssueDate'],
      idNumber: fieldArray['idNumber'],
      idType: fieldArray['idType'],
      isCoApplicant: false,
      isCustomer: 'true',
      joiningDate: fieldArray['joiningDate'],
      lastName: fieldArray['lastName'],
      martialStatus: fieldArray['martialStatus'],
      middleName: fieldArray['middleName'],
      mobileNumber: fieldArray['mobileNumber'],
      mobileOTP: fieldArray['mobileOTP'],
      moduleFlag: fieldArray['moduleFlag'],
      monthlyAdditionalIncome: fieldArray['monthlyAdditionalIncome'],
      monthlyHomeRent: fieldArray['monthlyHomeRent'],
      monthlySalary: fieldArray['monthlySalary'],
      nameOfEmployer: fieldArray['nameOfEmployer'],
      nationalAddress: fieldArray['address1'] + ' ' + fieldArray['address2'],
      nationality: fieldArray['nationality'],
      natureOfBusiness: fieldArray['natureOfBusiness'],
      noOfYearsInProfession: fieldArray['noOfYearsInProfession'],
      noofchildren: fieldArray['noofchildren'],
      numofDpdntChildren: fieldArray['numofDpdntChildren'],
      numofdpdntSpouse: fieldArray['numofdpdntSpouse'],
      obligationsMonthly: fieldArray['obligationsMonthly'],
      occupancyStatus: fieldArray['occupancyStatus'],
      otpVerified: fieldArray['otpVerified'],
      password: fieldArray['password'],
      percentOfShareholding: fieldArray['percent'],
      placeOfStay: fieldArray['city'],
      poBox: fieldArray['poBox'],
      productcode: 'string',
      province: fieldArray['province'],
      regAnyStatuotaryAuthority: fieldArray['regAnyStatuotaryAuthority'],
      registrExpiryDate: fieldArray['ExpiryDate'],
      registrationDate: fieldArray['registrExpiryDate'],
      registrationNumber: fieldArray['registrationNumber'],
      relatedemployer: fieldArray['relatedemployer'],
      retiredage: fieldArray['retiredage'],
      retsalcreditanb: fieldArray['retsalcreditanb'],
      salcreditanb: fieldArray['salcreditanb'],
      secondNameArabic: fieldArray['secondNameArabic'],
      sector: fieldArray['sector'],
      serviceinmonths: fieldArray['serviceinmonths'],
      status: fieldArray['status'],
      streetName: fieldArray['streetName'],
      subSector: fieldArray['subSector'],
      thirdNameArabic: fieldArray['thirdNameArabic'],
      totalExperience: fieldArray['totalExperience'],
      typeOfEmployment: fieldArray['typeOfEmployment'],
      userId: fieldArray['userId'],
      userRole: fieldArray['userRole'],
      userType: fieldArray['userType'],
      zipCode: fieldArray['zipCode'],
    };

    const headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };

    const response = await axios.put('http://122.166.172.240:3031/api/customers', reqData, headerConfig);
    console.log(response);
    if (response.status == 200) {
      fieldArray['customerId'] = response.data.id;
      console.log('fieldArray', fieldArray);
      window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', JSON.stringify(fieldArray));
      return true;
    } else {
      return false;
    }
  };
}
const CustomerApi = new CustomerApiClass();

export default CustomerApi;
