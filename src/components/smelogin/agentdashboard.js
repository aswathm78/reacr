import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import axios from 'axios';

export default class agentdashboard extends Component {
  constructor(props) {
    super(props);

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
    };
  }

  data = JSON.stringify([
    {
      assetDtlsModel: [
        {
          assetCategory: null,
          assetCondition: 'N',
          assetMake: 'Mercedes',
          assetModel: '2019',
          assetModelYear: 2020,
          assetPrice: '3123456',
          balloonPayment: '8.9',
          dealerName: 'JARIR',
          downPayment: '1000',
        },
      ],
      userDtlsModel: [
        {
          appId: 811,
          moduleFlag: null,
          idType: 'NID',
          idNumber: '2290863584',
          firstName: 'MOHAMMAD',
          martialStatus: ' SINGLE',
          noofchildren: '4',
          nationalAddress: 'Almadinah, Ad Difa Dist, Saudi Arabia, Unit 54, Building 86 3, Street Mena',
          typeOfEmployment: 'SAL',
          middleName: 'SARFARAJ',
          lastName: 'AHMED',
          designation: 'DESIG0010',
          joiningDate: '2018-06-06',
          noOfYearsInProfession: '0',
          retiredage: '58',
          relatedemployer: null,
          salcreditanb: null,
          directManagerNam: 'Ananya',
          directManagerEmail: null,
          directManagerTelNo: '852963',
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
          emailId: 'rajesh@gmail.com',
          dateofBirth: '1997-03-18',
          gender: 'M',
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
          familyName: 'Chaddha',
          nameOfEmployer: '95',
          idIssueDate: '2084-07-28',
          idExpireDate: '2028-07-28',
          idIssuePlace: '65418745',
          firstNameInArabic: 'رحان',
          secondNameInArabic: ' منصور',
          thirdNameInArabic: 'الحارثي',
          arabicfamilyname: 'عماري',
        },
      ],
      incomeLiabilityModel: [
        {
          appId: 811,
          grossMonthlyIncome: 7979799,
          currentEMI: null,
          anyliabilities: 'N',
          netIncome: null,
          annualBonus: null,
          avgMonthlyIncentive: null,
          prevYearProfit: null,
          currency: 'SAR',
          costOfLiving: '1234.0',
        },
      ],
      loanDtlsModel: [
        { appId: 811, reqAmount: 797979, subProduct: 'MURRCD', productid: 'MURR', currency: 'SAR', schemeId: '10', tenure: 32 },
      ],
      loanDependantScreenModel: [
        {
          appId: 811,
          loanPurpose: null,
          propertyType: null,
          assetLocation: 'MADINAH',
          assetStatus: null,
          assetDetails: null,
          assetCost: 0,
          typeOfResidence: null,
          vehicleModel: 3,
          vehicleMake: 'Mercedes',
          exShowroomPrice: 32,
          productList: null,
          currency: 'SAR',
        },
      ],
      coApplicantDtlsModel: [
        {
          appId: 811,
          idType: null,
          idNumber: null,
          coApplicantName: 'dhanraj',
          owbership: null,
          isCoApplicant: 'true',
          coFirstName: null,
          firstName: null,
          martialStatus: null,
          noofchildren: 2,
          nationalAddress: null,
          typeOfEmployment: null,
          middleName: null,
          cofamilyName: null,
          cogender: 'F',
          employername: null,
          designation: null,
          joiningDate: null,
          noOfYearsInProfession: null,
          retiredage: null,
          relatedemployer: null,
          salcreditanb: null,
          directManagerNam: null,
          directManagerEmail: null,
          directManagerTelNo: null,
          directManagerExtnNo: null,
          companyName: null,
          bussnat: null,
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
          grossMonthlyIncome: null,
          anyliabilities: null,
          currentEMI: null,
          nationality: 102,
          costaying: null,
          coLastName: null,
          obligation: null,
        },
      ],
      addressDtlsModel: [
        {
          appId: 811,
          phoneNumber: null,
          mobileNumber: null,
          email: null,
          address1: null,
          address2: null,
          address3: null,
          city: null,
          state: null,
          country: null,
          zipcode: null,
          livingSince: null,
        },
      ],
      uploadDocDtlsInModel: null,
    },
  ]);

  
  componentDidMount() {
    console.log('123456789098765432')
    this.getApplicationData(
      callBack => {
        console.log(callBack);
      },
      e => {
        console.lof(e);
      }
    );
    const data = JSON.stringify([
      {
        assetDtlsModel: [
          {
            assetCategory: null,
            assetCondition: 'N',
            assetMake: 'Mercedes',
            assetModel: '2019',
            assetModelYear: 2020,
            assetPrice: '3123456',
            balloonPayment: '8.9',
            dealerName: 'JARIR',
            downPayment: '1000',
          },
        ],
        userDtlsModel: [
          {
            appId: 811,
            moduleFlag: null,
            idType: 'NID',
            idNumber: '2290863584',
            firstName: 'MOHAMMAD',
            martialStatus: ' SINGLE',
            noofchildren: '4',
            nationalAddress: 'Almadinah, Ad Difa Dist, Saudi Arabia, Unit 54, Building 86 3, Street Mena',
            typeOfEmployment: 'SAL',
            middleName: 'SARFARAJ',
            lastName: 'AHMED',
            designation: 'DESIG0010',
            joiningDate: '2018-06-06',
            noOfYearsInProfession: '0',
            retiredage: '58',
            relatedemployer: null,
            salcreditanb: null,
            directManagerNam: 'Ananya',
            directManagerEmail: null,
            directManagerTelNo: '852963',
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
            emailId: 'rajesh@gmail.com',
            dateofBirth: '1997-03-18',
            gender: 'M',
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
            familyName: 'Chaddha',
            nameOfEmployer: '95',
            idIssueDate: '2084-07-28',
            idExpireDate: '2028-07-28',
            idIssuePlace: '65418745',
            firstNameInArabic: 'رحان',
            secondNameInArabic: ' منصور',
            thirdNameInArabic: 'الحارثي',
            arabicfamilyname: 'عماري',
          },
        ],
        incomeLiabilityModel: [
          {
            appId: 811,
            grossMonthlyIncome: 7979799,
            currentEMI: null,
            anyliabilities: 'N',
            netIncome: null,
            annualBonus: null,
            avgMonthlyIncentive: null,
            prevYearProfit: null,
            currency: 'SAR',
            costOfLiving: '1234.0',
          },
        ],
        loanDtlsModel: [
          { appId: 811, reqAmount: 797979, subProduct: 'MURRCD', productid: 'MURR', currency: 'SAR', schemeId: '10', tenure: 32 },
        ],
        loanDependantScreenModel: [
          {
            appId: 811,
            loanPurpose: null,
            propertyType: null,
            assetLocation: 'MADINAH',
            assetStatus: null,
            assetDetails: null,
            assetCost: 0,
            typeOfResidence: null,
            vehicleModel: 3,
            vehicleMake: 'Mercedes',
            exShowroomPrice: 32,
            productList: null,
            currency: 'SAR',
          },
        ],
        coApplicantDtlsModel: [
          {
            appId: 811,
            idType: null,
            idNumber: null,
            coApplicantName: 'dhanraj',
            owbership: null,
            isCoApplicant: 'true',
            coFirstName: null,
            firstName: null,
            martialStatus: null,
            noofchildren: 2,
            nationalAddress: null,
            typeOfEmployment: null,
            middleName: null,
            cofamilyName: null,
            cogender: 'F',
            employername: null,
            designation: null,
            joiningDate: null,
            noOfYearsInProfession: null,
            retiredage: null,
            relatedemployer: null,
            salcreditanb: null,
            directManagerNam: null,
            directManagerEmail: null,
            directManagerTelNo: null,
            directManagerExtnNo: null,
            companyName: null,
            bussnat: null,
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
            grossMonthlyIncome: null,
            anyliabilities: null,
            currentEMI: null,
            nationality: 102,
            costaying: null,
            coLastName: null,
            obligation: null,
          },
        ],
        addressDtlsModel: [
          {
            appId: 811,
            phoneNumber: null,
            mobileNumber: null,
            email: null,
            address1: null,
            address2: null,
            address3: null,
            city: null,
            state: null,
            country: null,
            zipcode: null,
            livingSince: null,
          },
        ],
        uploadDocDtlsInModel: null,
      },
    ]);
    this.state.appRequest = data;
    this.setState({ appRequest: data });
  }

  getApplicationData = () => {
    let config = {
      method: 'post',
      url:
        'https://cors-anywhere.herokuapp.com/http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/onlineApplication?access_token=58be9bbf-577d-43b9-a21f-66cce81e9f37',
      headers: {
        appId: '1',
        'Content-Type': 'application/json',
      },
      data: this.data,
    };

    axios(config)
      .then(function (response) {
        this.setState({ appResponse: response.data.DupResult });
        console.log(JSON.stringify(this.state.appResponse));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  newcustomer = () => {
    this.props.history.push('/agent/newcustomer');
  };
  viewdashboard = () => {
    this.props.history.push('/agent/dashboard');
  };
  logout = () => {
    this.props.history.push('/agent/signin');
  };
  render() {
    console.log('this.state.user');
    console.log(this.state.user);
    console.log('this.state.user');
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="card" style={{ borderRadius: '10px', width: '97vw', marginLeft: '20px', marginTop: '20px' }}>
              <button className="dfs-savebtn" onClick={this.logout} style={{ top: '20px', width: '40px ', margin: '30px' }}>
                <span class="glyphicon glyphicon-log-out"></span>
              </button>
              <button className="dfs-savebtn" onClick={this.newcustomer} style={{ margin: '30px' }}>
                New Customer
              </button>
              <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
                <div className="jarir-img" width="150" height="50"></div>
                <br />
              </div>
            </div>
            <br />
            <div className="col-sm-12">
              <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="90vw" margin="50px">
                <thead>
                  <tr>
                    <th class="th-sm">Actions</th>
                    <th class="th-sm">Creation Date</th>
                    <th class="th-sm">Status</th>
                    <th class="th-sm">Branch</th>
                    <th class="th-sm">Business</th>
                    <th class="th-sm">Customer Mobile</th>
                    <th class="th-sm">Customer Name</th>
                    <th class="th-sm">Loan ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> &nbsp;</td>
                    <td>2011/04/25</td>
                    <td>Duplicate</td>
                    <td>RIYADH</td>
                    <td>Jarir</td>
                    <td>8886476456</td>
                    <td>Abdullah</td>
                    <td>356</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
