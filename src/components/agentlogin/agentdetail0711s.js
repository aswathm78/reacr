import React, { Component } from 'react';
import loanofferimg from '../../assets/images/loanoffer.png';
import config from '../../assets/config/config';
import axios from 'axios';
import HijriDatePicker, { withTheme } from 'hijri-date-picker';
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
//import { onlineApplication } from '../../store/action';
class agentdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 21,
      fieldArray: {},
      assetfieldArray: {},
      errorarray: {},
      assetData: [{ assetmodel: '', assetname: 'MOBILE', assetprice: '', assetqty: '', assetdescription: '' }],
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
      loandetailsData: '',



      requestData: [
        {
          assetDtlsModel: [
            {
              assetName: 'MOBILE', // required
              assetDetails: '', // required
              assetCategory: '',
              assetSubCategory: null,
              assetCondition: 'N',
              assetMake: '',
              assetModel: '',
              assetModelYear: '',
              assetPrice: 0, // reequired
              balloonPayment: '0',
              dealerName: window.sessionStorage.getItem('vendor'),
              downPayment: 0,
              referenceNumber: '1234',
              itemNumber: '3434',//required
              noOfUnits: 1,//required
              assetCost: 5000,//required
              vat: 90,//required
              createDate: '07-02-1998',//required (todays date)
              requestId: '121',
              vendorId: '32',
              agentName: 'swap',
            },
          ],
          userDtlsModel: [
            {
              appId: '351',
              moduleFlag: null,
              idType: 'NID',//static
              idNumber: '1021017338',//static
              firstName: 'Sunny',//required
              martialStatus: ' DIVORCED',//required
              noofchildren: '2',//required
              nationalAddress: ' Unit 54, Building 86 3, Street Mena,  Almadinah, Ad Difa Dist, Saudi Arabia  ',//required
              typeOfEmployment: 'SAL',//static
              middleName: 'Janet Rangel',//required
              lastName: 'SMITH',//required
              designation: 'DESIG008',//required
              joiningDate: '2020-06-06',//required
              noOfYearsInProfession: '0',//required
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
              emailId: null,//not required
              dateofBirth: '1999-02-17',//required
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
              nameOfEmployer: '95',
              idIssueDate: '0008-07-28',
              idExpireDate: '0028-07-28',
              idIssuePlace: '65418746',
              firstNameInArabic: 'رحان',
              secondNameInArabic: ' منصور',
              thirdNameInArabic: 'الحارثي',
              arabicfamilyname: 'عماري',
            },
          ],
          incomeLiabilityModel: [
            {
              appId: 351, //each request should be unique
              grossMonthlyIncome: 320000.0,//required
              currentEMI: null,
              anyliabilities: 'N',//required
              netIncome: null,
              annualBonus: null,
              avgMonthlyIncentive: null,
              prevYearProfit: null,
              currency: 'SAR',
              costOfLiving: '25630.0',//required
            },
          ],
          loanDtlsModel: [
            {
              appId: 351,
              reqAmount: 500000.0,
              subProduct: 'MURRCD',//static
              productid: 'MURR',//static
              currency: 'SAR',//static
              schemeId: '10',//static
              tenure: 65,//required
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
  async componentDidMount() {

    //await this.props.onlineApplication();
  }
  processInput = obj => {
    let fieldArray = this.state.fieldArray;
    let targateName = obj.target.name;
    let targateValue = obj.target.value;
    if (targateName === 'dateofjoining' || targateName === 'hijri_date') {
      this.state.fieldArray.serviceinmonth = this.getAge(targateValue);
    }
    fieldArray[targateName] = targateValue;
    this.setState({
      fieldArray,
    });
  };
  saveandcont = e => {
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = {};
    let formStatus = true;
    if (!fieldArray['nameOfEmployer']) {
      errorarray['nameOfEmployer'] = 'Please enter your employer name !';
      formStatus = false;
    }
    if (!fieldArray['serviceinmonth']) {
      errorarray['serviceinmonth'] = 'Please enter service in month';
      formStatus = false;
    }
    if (!fieldArray['dateofjoining']) {
      errorarray['dateofjoining'] = 'Please enter the date of joining';
      formStatus = false;
    }
    // if (!fieldArray['hijri_date']) {
    //   errorarray['hijri_date'] = 'Please enter the date of joining';
    //   formStatus = false;
    // }

    if (!fieldArray['financialpremium']) {
      errorarray['financialpremium'] = 'Please enter financial problem';
      formStatus = false;
    }
    if (!fieldArray['monthlyeditionincome']) {
      errorarray['monthlyeditionincome'] = 'Please enter additional income';
      formStatus = false;
    }
    if (!fieldArray['monthlysalary']) {
      errorarray['monthlysalary'] = 'Please enter monthly salary';
      formStatus = false;
    }
    if (!fieldArray['numberofdependencychild']) {
      errorarray['numberofdependencychild'] = 'Please enter number of dependency child';
      formStatus = false;
    }
    if (!fieldArray['numberofdependencyspouse']) {
      errorarray['numberofdependencyspouse'] = 'Please enter number of dependency spouse';
      formStatus = false;
    }
    // if (!fieldArray['assetvalue']) {
    //   errorarray['assetvalue'] = 'Please enter asset value';
    //   formStatus = false;
    //  }
    if (!fieldArray['monthlyhomerent']) {
      errorarray['monthlyhomerent'] = 'Please enter monthly home rent';
      formStatus = false;
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
      field['nameOfEmployer'] = '';
      field['serviceinmonth'] = '';
      field['dateofjoining'] = '';
      field['hijri_date'] = '';
      field['financialpremium'] = '';
      // field['monthlyeditionincome'] = '';
      field['monthlysalary'] = '';
      field['numberofdependencychild'] = '';
      field['numberofdependencyspouse'] = '';
      field['assetvalue'] = '';
      field['monthlyhomerent'] = '';
      field['homefinance'] = '';
      fieldArray['familyName'] = 'dvgdg';
      fieldArray['password'] = 'a123';
      fieldArray['mobileNumber'] = '121212';
      // field['financeinstallments'] = '';
      // field['creditcardlimits'] = '';
      // window.sessionStorage.setItem('CUSTOMRE_DATA_REQ', customerReq);
      console.log(fieldArray, 'dataset')
      const config = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') }
      };
      axios.post('http://122.166.172.240:3031/api/customers', fieldArray, config).then(res => {
        console.log(res, "customer details getting")
      })

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
  nexttosixthpage = () => {
    this.setState({
      activekey: 6,
    });
  };
  gotoempdetails = () => {
    this.setState({
      activekey: 1
    })
  }
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

  onFileChange = event => {

    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });

  };
  onFileUpload = () => {

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
    this.setState({
      activekey: 4
    })
  };
  addMoreDetails = e => {
    e.preventDefault();
    window.sessionStorage.getItem('');
    let assetfieldArray = this.state.assetfieldArray;
    let errorassetarray = {};
    let asseformStatus = true;
    if (!assetfieldArray['assetmodel']) {
      errorassetarray['assetmodel'] = 'Please enter asset model number';
      asseformStatus = false;
    }
    if (!assetfieldArray['assetname']) {
      errorassetarray['assetname'] = 'Please enter asset name';
      asseformStatus = false;
    }
    if (!assetfieldArray['assetprice']) {
      errorassetarray['assetprice'] = 'Please enter asset price';
      asseformStatus = false;
    }
    if (!assetfieldArray['assetqty']) {
      errorassetarray['assetqty'] = 'Please enter asset quantity';
      asseformStatus = false;
    }
    this.setState({
      errorassetarray: errorassetarray,
    });
  };
  handleAssetInput = obj => {
    let assetfieldArray = this.state.assetfieldArray;
    assetfieldArray[obj.target.name] = obj.target.value;
    this.setState({
      assetfieldArray,
    });
  };
  addMoreDetails = e => {
    e.preventDefault();
    let newassetdetails = {
      assetmodel: this.state.newModel,
      assetname: this.state.newAssetName,
      assetprice: this.state.newAssetPrice,
      assetqty: this.state.newAssetQty,
    };
    this.setState({
      assetData: this.state.assetData.concat(newassetdetails),
      assetmodel: '',
      assetname: '',
      assetprice: 0,
      assetqty: 0,
    });
  };
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
  handleInvoidAmt = obj => {
    this.setState({
      invoiceAmt: obj.target.value,
    });
  };
  handleDownpayment = obj => {
    this.setState({
      downpayment: obj.target.value,
    });
  };
  logout = () => {
    this.props.history.push('/agent/signin');
  };

  rejectmethod = () => {
    this.setState({
      activekey: 8
    })
  }
  appealmethod = () => {
    this.setState({
      activekey: 9
    })
  }



  addressdatasubmit = () => {
    var countryid = document.getElementById('countryid').value;
    var proviceid = document.getElementById('proviceid').value;
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var zipcode = document.getElementById('zipcode').value;
    var pobox = document.getElementById('pobox').value;
    var dist = document.getElementById('dist').value;
    var city = document.getElementById('city').value;
    var street = document.getElementById('street').value;
    var buildingno = document.getElementById('buildingno').value;

    let addressdetails = {
      address1: address1,
      address2: address2,
      country: countryid,
      zipcode: zipcode,
      district: dist,
      city: city,
    }
    const config = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') }
    };

    axios.post('http://122.166.172.240:3031/api/addresses', addressdetails, config).then(res => {
      //console.log(res,"data get")
    })
    this.setState({
      activekey: 1
    })
  }

  assetdetails = () => {
    var assetcat = document.getElementById('assetcat').value;
    var assetmodel = document.getElementById('assetmodel').value;
    var assetnam = document.getElementById('assetnam').value;
    var assetprice = document.getElementById('assetprice').value;
    var assetqty = document.getElementById('assetqty').value;
    var assetdesc = document.getElementById('assetdesc').value;

    let assetobj =
    {
      assetCategory: assetcat,
      assetModel: assetmodel,
      assetPrice: assetprice,
      dealerName: assetnam
    }
    const config = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') }
    };
    axios.post('http://122.166.172.240:3031/api/assets', assetobj, config).then(res => {
      // console.log(res,"asset details")
    })

    this.setState({
      activekey: 3
    })
  }

  componentDidMount() {
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
    //     loandetailsData: res
    //   })
    // const loandata = this.state.loandetailsData;
    // console.log(loandata, 'loandetailsdata')

    // })
    axios.get('http://122.166.172.240:4000/simah')
      .then(res => {
        this.setState({
          loandetailsData: res.data.simah
        })

      })


  }





  render() {

    const TAHKUM_CUSTOMRE_DATA = window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA');
    const TAHKUM_ADDRESSS_DATA = window.sessionStorage.getItem('TAHKUM_ADDRESSS_DATA');
    console.log(JSON.stringify(TAHKUM_CUSTOMRE_DATA));
    console.log(JSON.stringify(TAHKUM_ADDRESSS_DATA));
    const vendor = window.sessionStorage.getItem('vendor').toLowerCase();

    let loandetailsdata = this.state.loandetailsData[0] ? this.state.loandetailsData[0] : []
    ///console.log(loandetailsdata, 'loandatata')



    return (
      <div>
        <div style={{ background: 'white', height: '99vh' }}>
          <div className="row">
            <div className="col-sm-12" style={{ width: '97vw' }}>
              <div className="card" style={{ borderRadius: '10px', width: '97vw', marginLeft: '20px', marginTop: '20px' }}>
                <button className="dfs-savebtn" onClick={this.logout} style={{ top: '20px', width: '40px ', margin: '30px' }}>
                  <span className="glyphicon glyphicon-log-out"></span>
                </button>
                <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
                  <div className={vendor} width="150" height="50"></div>
                  <br />
                </div>
              </div>
              <br />
              <div className="col-sm-3">
                <div className="col-sm-12 verficationcardstyle">
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <div className="card-body" style={{ height: '60vh', borderRadius: '10px' }}>
                      <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
                        Agent Details
                      </div>
                      <div
                        style={{
                          textAlign: 'right',
                          fontSize: '1.4rem',
                          fontWeight: '100px',
                          paddingRight: '40px',
                        }}
                      >
                        {/* {vendor == 'jarir' ? 'Junaid Qazi' : 'Imran Khan'} */}
                        <br />
                        <br />
                        {window.sessionStorage.getItem('email')}
                        <br />
                        <br />
                        +966 5677 87698
                        <br />
                        <br />
                        {window.sessionStorage.getItem('vendor')}
                        <br />
                        <br />
                      </div>

                      <div className="signup-btn-style">
                        <div>
                          <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                            View Dashboard
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* left section close */}
              {/* right side start */}
              <div className="col-sm-9">
                {this.state.activekey == 1 ? (
                  <div className="Firstpage">
                    <div className="agent-empdetails">Employment Details</div>

                    <div className="col-sm-12">
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="subsector">Sub Sector</label>
                          <select id="subsector">
                            <option value="-1">Select Sector</option>
                            <option value="procurement">Procurement</option>
                            <option value="procurement">Procurement</option>
                            <option value="procurement">Procurement</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="sector"> Sector</label>
                          <select id="sector">
                            <option value="-1">Select Sector</option>
                            <option value="retail">Retail</option>
                            <option value="retail">Retail</option>
                            <option value="retail">Retail</option>
                            <option value="retail">Retail</option>
                            <option value="retail">Retail</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label name="emptype">Employment Type</label>
                          <select>
                            <option value="-1">Select Employment</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                            <option value="private">Private</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Employer Name</label>
                            <input
                              type="text"
                              name="nameOfEmployer"
                              value={this.state.fieldArray.nameOfEmployer}
                              onChange={this.processInput}
                              id="empname"
                            />
                            <i className="text-danger">{this.state.errorarray.nameOfEmployer}</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* first section close */}

                    {/* second section start */}
                    <div className="col-sm-12" style={{ marginTop: '40px' }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label for="designation">Designation</label>
                            <select>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                              <option value="pmanager">Program Manager</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label> Service in Months</label>
                          <input
                            type="number"
                            name="serviceinmonth"
                            value={this.state.fieldArray.serviceinmonth}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">{this.state.errorarray.serviceinmonth}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Date Of Joining (Hijri)</label>
                          <HijriDatePicker
                            inputName="hijri_date"
                            className="form-control"
                            selectedDate="1424/08/03"
                            dateFormat="iYYYY/iMM/iDD"
                            quickSelect
                            value={this.state.fieldArray.dateofjoining}
                          />
                          <i className="text-danger">{this.state.errorarray.dateofjoining}</i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Date Of Joining</label>
                          <input
                            type="date"
                            name="dateofjoining"
                            min="2002-11-04"
                            value={this.state.fieldArray.dateofjoining}
                            onChange={this.processInput}
                            style={{ fontSize: '14px' }}
                          />
                          <i className="text-danger">{this.state.errorarray.dateofjoining}</i>
                        </div>
                      </div>
                    </div>
                    {/* second section end */}
                    <br />
                    {/* Financial details main section start */}
                    <div className="agent-financialdetails">Financial Details</div>
                    {/* first section start */}
                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Finance Premium </label>
                            <input
                              type="number"
                              name="financialpremium"
                              value={this.state.fieldArray.financialpremium}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.financialpremium}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Monthly Additional Income</label>
                            <input
                              type="number"
                              name="monthlyeditionincome"
                              value={this.state.fieldArray.monthlyeditionincome}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlyeditionincome}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Monthly Salary </label>
                            <input
                              type="number"
                              name="monthlysalary"
                              value={this.state.fieldArray.monthlysalary}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlysalary}</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* first section end */}
                    {/* second section start */}
                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3"></div>
                      <div className="col-sm-3"></div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Number Of Dependents (Children) </label>
                            <input
                              type="number"
                              name="numberofdependencychild"
                              value={this.state.fieldArray.numberofdependencychild}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.numberofdependencychild}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Number of Dependents (Spouse) </label>
                            <input
                              type="number"
                              name="numberofdependencyspouse"
                              value={this.state.fieldArray.numberofdependencyspouse}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.numberofdependencyspouse}</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* section section end */}

                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Monthly Home Rent </label>
                            <input
                              type="number"
                              name="monthlyhomerent"
                              value={this.state.fieldArray.monthlyhomerent}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">{this.state.errorarray.monthlyhomerent}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Asset Value</label>
                            <input type="number" name="assetvalue" value={this.state.fieldArray.assetvalue} onChange={this.processInput} />
                            <i className="text-danger">{this.state.errorarray.assetvalue}</i>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Accommodation Type </label>
                            <select>
                              <option value="">Flat</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>Home Finance Premium </label>

                          <input type="text" name="homefinance" disabled value="0.00" className="shadow" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>Obligations (Monthly) </label>
                          <input type="text" name="obligationmonthly" readOnly="readOnly" className="shadow" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>Financing Installments </label>
                          <input
                            type="text"
                            name="financingInstallments"
                            disabled
                            value={this.state.financingInstallments}
                            className="shadow"
                          />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle shadow">
                          <label>Credit Cards Limits</label>
                          <input type="text" name="creditLimit" disabled value={this.state.creditLimit} className="shadow" />
                        </div>
                      </div>
                    </div>

                    <div className="agent-saveandcontinuestyle">
                      <button className="agent-savebtn" onClick={this.saveandcont}>
                        Save And Continue
                      </button>
                    </div>
                  </div>
                ) : this.state.activekey == 2 ? (
                  <div className="second-page">
                    <div className="agent-assetdetails">Asset Details</div>
                    {/* first section start */}
                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Category </label>
                          <select id="assetcat">
                            <option value="">Electronics</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset model </label>
                          <input type="text" name="assetmodel" onChange={this.handleAssetModel} value={this.state.newModel} id="assetmodel" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Name </label>
                          <input type="text" name="assetname" onChange={this.handleAssetName} value={this.state.newAssetName} id="assetnam" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Price </label>
                          <input type="number" name="assetprice" onChange={this.handleAssetPrice} value={this.state.newAssetPrice} id="assetprice" />
                        </div>
                      </div>
                    </div>



                    {/* asset - first section close */}

                    <div className="col-sm-12" style={{ marginTop: '10px' }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Quantity </label>
                          <input type="number" name="assetqty" onChange={this.handleAssetQty} id="assetqty" value={this.state.newAssetQty} />
                        </div>
                      </div>

                      <div className="col-sm-9">
                        <div className="agent-lablestyle">
                          <label>Asset Description </label>
                          <input type="text" name="assetdesc" id="assetdesc" value={this.state.assetData.assetdescription} />
                        </div>
                      </div>
                      <div className="asset-addmoreasset">
                        <button className="asset-savebtn" onClick={this.addMoreDetails}>
                          Add More Asset
                        </button>
                      </div>
                    </div>

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
                          {this.state.assetData.map((row, index) => {
                            let vatAmt = (row.assetprice * 15) / 100;
                            return (
                              <tr key={index}>
                                <td>{row.assetmodel}</td>
                                <td>{row.assetname}</td>
                                <td>{row.assetqty}</td>
                                <td>SR {row.assetprice}</td>
                                <td>SR {(row.assetprice * 15) / 100}</td>
                                <td>SR {(row.assetprice + vatAmt) * row.assetqty}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <div className="agent-saveandcontinuestyle">
                        <button className="agent-savebtn" onClick={this.assetdetails}>
                          Save And Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey == 3 ? (
                  <div className="thirdpage">
                    <div className="col-sm-12">
                      <div className="agent-assetdetails">Please Upload Documents</div>
                      <div className="col-sm-6">
                        <div className="agent-dropimage">
                          <div className="browsertxt">
                            Drop your files here.
                            <br />
                            <label for="files">
                              Or <a style={{ color: 'blue' }}>Browser</a>
                            </label>
                            <input id="files" style={{ visibility: 'hidden' }} type="file" onChange={this.onFileChange} />
                          </div>
                        </div>
                      </div>
                      {/* left section end */}
                      <div className="col-sm-6">
                        <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Application Form</div>
                        </div>

                        <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-image-o light-BLUE" aria-hidden="true"></i>
                          </div>
                          <div className="agent-pdf-text">Identification Document</div>
                        </div>

                        <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Salary Certification</div>
                        </div>

                        <div style={{ display: 'flex' }}>
                          <div className="">
                            <i className="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Last 3 months bank statement</div>
                        </div>
                      </div>
                    </div>
                    <div className="agent-saveandcontinuestyle">
                      <button className="agent-savebtn" onClick={this.onFileUpload}>
                        Save And Continue
                      </button>
                    </div>
                  </div>
                ) : /* Loan details page */
                      this.state.activekey == 4 ? (
                        <div className="fourth page">
                          <div className="col-sm-12" style={{ marginTop: '10px' }}>
                            <h3 className="agent-loan-details">Loan Details</h3>
                            <div className="col-sm-3"></div>

                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label> Maximum Tenure (Months) </label>
                                <select>
                                  <option value="6">6</option>
                                  <option value="12">12</option>
                                  <option value="18">18</option>
                                  <option value="24">24</option>
                                  <option value="30">30</option>
                                  <option value="36">36</option>
                                  <option value="42">42</option>
                                  <option value="48">48</option>
                                  <option value="54">54</option>
                                  <option value="60" selected>60</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label>Down Payment </label>
                                <input type="number" value={this.state.downpayment} onChange={this.handleDownpayment} />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label>Maximum Amount </label>
                                <input type="number" value={loandetailsdata.totalLimits} onChange={this.handleInvoidAmt} />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12" style={{ marginTop: '25px' }}>
                            <div className="col-sm-3"></div>

                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label>Monthly Installment</label>
                                <input type="number" value={this.state.monthlyInst} onChange={this.handleMonthlyInst} />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label>Payable Amount </label>
                                <input type="number" value={this.state.payableAmt} onChange={this.handlepayableAmt} />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="agent-lablestyle">
                                <label>Requested Amount </label>
                                <input type="number" value={this.state.requestAmt} onChange={this.handlerequestAmt} />
                              </div>
                            </div>
                          </div>
                          <div className="agent-submitbtn">
                            <button className="agent-submitbuttonstyle" onClick={this.gotoloanofferletter}>
                              Submit
                      </button>
                          </div>
                        </div>
                      ) : /*---------------------------- Loan Offer Details-------------------------------------------- */
                        this.state.activekey == 5 ? (
                          <div className="fifth page">
                            <div className="col-sm-12" style={{ marginTop: '10px' }}>
                              <div className="agent-loan-details">Loan Offer Details</div>
                              <div className="col-sm-3"></div>

                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>EMI Amount </label>
                                  <input type="number" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Loan ID </label>
                                  <input type="number" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Invoice Amount </label>
                                  <input type="number" />
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12" style={{ marginTop: '10px' }}>
                              <div className="col-sm-3"></div>

                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Tenure </label>
                                  <input type="number" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Processing Fee </label>
                                  <input type="number" />
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Underwriter Decision</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12" style={{ marginTop: '10px' }}>
                              <div className="col-sm-3"></div>
                              <div className="col-sm-3"></div>
                              <div className="col-sm-3"></div>
                              <div className="col-sm-3">
                                <div className="agent-lablestyle">
                                  <label>Approved Loan Amount</label>
                                  <input type="number" />
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12" style={{ marginTop: '10px' }}>
                              <div className="col-sm-12">
                                <div className="agent-lablestyle">
                                  <label>Rejection Remarks</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="agent-allbtns">
                              <div>
                                <button className="agent-savebtn-accept" onClick={this.nexttosixthpage}>
                                  Accept
                        </button>
                                <button className="agent-savebtn-reject" onClick={this.rejectmethod}>Reject</button>
                                <button className="agent-savebtn-Appeal" onClick={this.appealmethod}>Change the offer</button>
                              </div>
                            </div>
                          </div>
                        ) : /* Loan offer and document start */
                          this.state.activekey == 6 ? (
                            <div className="sixthpage">
                              <div className="agent-loanofferheading">Loan Offer and Document</div>
                              <div className="col-sm-6">
                                <div className="">UPLOAD BELOW DOCUMENTS DULY SIGNED</div>

                                <div style={{ display: 'flex', marginTop: '10px' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">PURCHASE ORDER</div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">PROMISSORY NOTE</div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">LOAN OFFER LETTER</div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">3 MONTHS BANK STATEMENT</div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">APPLICATION FORM</div>
                                </div>

                                <div style={{ display: 'flex' }}>
                                  <div className="">
                                    <i className="fa fa-file-pdf-o red-color "></i>
                                  </div>
                                  <div className="agent-pdf-text">LOAN OFFER LETTER</div>
                                </div>

                                <div className="dfs-L-wisardSaveStyle">
                                  <div>
                                    <button className="dfs-L-btnsave">Cancel</button>
                                  </div>
                                  <div>
                                    <button className="dfs-L-btnsubmit" onClick={this.gotoseventhpage}>
                                      Submit
                          </button>
                                  </div>
                                </div>
                              </div>

                              <div className="col-sm-6">
                                <div className="col-sm-12">
                                  {/* pdficonbuttonstart */}
                                  <div className="dfs-L-completeprocess">
                                    kindly download the loan offer letter document and upload the duly signed document to complete process.
                        </div>
                                  <div className="dfs-L-3padding">
                                    <div className="dfs-L-loantxtpadding">
                                      <div className="dfs-L-offerletter">LOAN OFFER LETTER.PDF</div>
                                    </div>
                                    <button className="dfs-L-buttonstyle">Download</button>
                                  </div>

                                  {/* pdficonbuttonend */}

                                  <div className="textbar-or">
                                    <span>OR</span>
                                  </div>

                                  <div className="dfs-L-upload">Upload Signed Loan Offer Document</div>
                                  <div>
                                    <img src={loanofferimg} />
                                  </div>

                                  <div className="dfs-L-accept">
                                    Accepted Files Types: PDF, JPEG, JPG only.
                          <br />
                          Maximum file size: 2 MB
                        </div>
                                </div>
                              </div>
                            </div>
                          ) : /* Loan offer and document end*/

                            /* kindly confirm the address start*/
                            this.state.activekey == 21 ? (
                              <div className="sevenpage">
                                <div className="col-sm-12">
                                  <div className="agent-loan-details">Kindly Conﬁrm the Address</div>
                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Country</label>
                                      <select id="countryid">
                                        <option value="saudi" >Saudi Arabia</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Province </label>
                                      <input type="text" id="proviceid" />
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Address 2 </label>
                                      <input type="text" id="address2" />
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Address 1  </label>
                                      <input type="text" id="address1" />
                                    </div>
                                  </div>
                                </div>

                                {/* first section */}
                                <div className="col-sm-12" style={{ marginTop: '15px' }}>
                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Zip Code</label>
                                      <input type="number" id="zipcode" />
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Po Box</label>
                                      <input type="number" id="pobox" />
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>District/Neighbourhood </label>
                                      <select id="dist">
                                        <option value="riyadh">Riyadh</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>city</label>
                                      <select id="city">
                                        <option value="riyadh.">Riyadh</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-sm-12" style={{ marginTop: '15px' }}>
                                  <div className="col-sm-3"></div>

                                  <div className="col-sm-3"></div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Street</label>
                                      <input type="text" id="street" />
                                    </div>
                                  </div>

                                  <div className="col-sm-3">
                                    <div className="agent-lablestyle">
                                      <label>Building No.</label>
                                      <input type="number" id="buildingno" />
                                    </div>
                                  </div>
                                </div>
                                <div className="agent-saveandcontinuestyle">
                                  <button className="agent-savebtn" onClick={this.addressdatasubmit}>
                                    Save And Continue
                      </button>
                                </div>
                              </div>
                            )
                              /* kindly confirm the address end*/

                              : this.state.activekey == 8 ?
                                <div className="eightpage loan rejection details">
                                  <h3 className="agent-reject-details">Loan Rejection Details</h3>
                                  <div className="col-sm-12" style={{ marginTop: '10px' }}>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Down Payment</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Requested Loan Amount</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Loan ID </label>
                                        <input type="number" />
                                      </div>
                                    </div>


                                  </div>


                                  {/* first section close */}
                                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Processing Fee</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Interest Rate</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Underwriter Decision</label>
                                        <input type="text" />
                                      </div>
                                    </div>


                                  </div>

                                  {/* second section end */}

                                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Approved Loan Amount</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>Tenure</label>
                                        <input type="number" />
                                      </div>
                                    </div>

                                    <div className="col-sm-4">
                                      <div className="agent-lablestyle">
                                        <label>EMI Amount</label>
                                        <input type="text" />
                                      </div>
                                    </div>


                                  </div>
                                  {/* third section close */}


                                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                                    <div className="col-sm-12">
                                      <div className="agent-lablestyle">
                                        <label>Customer Rejection Remarks</label>
                                        <input type="text" />
                                      </div>
                                    </div>




                                  </div>


                                  <div className="agent-allbtns">
                                    <div>
                                      <button className="agent-savebtn-accept">
                                        Cancel
                        </button>
                                      <button className="agent-savebtn-reject">Submit</button>

                                    </div>
                                  </div>

                                </div>

                                /* loan appeal details */
                                : this.state.activekey == 9 ?
                                  <div className="ninthpage">
                                    <h3 className="agent-reject-details">Loan Appeal Details</h3>
                                    <div className="col-sm-12" style={{ marginTop: '10px' }}>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle">
                                          <label>Old Tenure</label>
                                          <input type="number" />
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle">
                                          <label>Old Requested Loan Amount</label>
                                          <input type="number" />
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle">
                                          <label>Loan ID </label>
                                          <input type="number" />
                                        </div>
                                      </div>


                                    </div>

                                    <div className="col-sm-12" style={{ marginTop: '10px' }}>

                                      <div className="col-sm-4">

                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle">
                                          <label>Tenure</label>
                                          <input type="number" />
                                        </div>
                                      </div>

                                      <div className="col-sm-4">
                                        <div className="agent-lablestyle">
                                          <label>New Requested Loan Amount</label>
                                          <input type="number" />
                                        </div>
                                      </div>


                                    </div>

                                    <div className="col-sm-12" style={{ marginTop: '10px' }}>

                                      <div className="col-sm-12">
                                        <div className="agent-lablestyle">
                                          <label>Appeal Remarks</label>
                                          <input type="text" />
                                        </div>
                                      </div>

                                    </div>

                                    <div className="agent-allbtns">
                                      <div>
                                        <button className="agent-savebtn-accept">
                                          Cancel
                                       </button>
                                        <button className="agent-savebtn-reject">Submit</button>

                                      </div>
                                    </div>
                                  </div>


                                  : this.state.activekey == 10 ?

                                    <div className="onboardingcomplete">
                                      <div className="col-sm-12">
                                        <div className="dfs-onboardingcomp">
                                          <h3>onboarding Completed</h3>
                                        </div>

                                        <div className="dfs-cong-text">
                                          <span style={{ "font-weight": "bold" }}> Congratulations !! Mr. Abdullah,</span>  your loan application is submitted successfully.<br />
                                          <span style={{ "font-weight": "bold" }}> your Application ID 371</span>
                                        </div>
                                        <div className="signup-btn-style">
                                          <div>
                                            <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                                              View Dashboard
                          </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    : ''}
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