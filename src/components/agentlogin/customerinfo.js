import React, { Component } from 'react';
import './agentsigin.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';

import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return {
    ...state,
    language: state.reducer.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguage: value => dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
  };
};
class customerinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      filedvalue: {
        Firstname: 'ABDULLAH',
        Lastname: 'ALKHUDHAYR',
        Middlename: 'MOHAMMED',
        Familyname: 'ABDULKARIM',
        FirstArabic: 'عبدالله',
        MiddleArabic: 'محمد',
        LastArabic: 'الخضير',
      },
      nationalityfields: {
        Dateofbirth: '1986-02-19',
        Age: 34,
        Nationality: 'Saudi Arabia',
        IqamaNumber: 0,
        NationalityId: 1029987532,
      },
      familyfields: {},
      errors: {},
      items: [
        { label: 'Personal', icon: faUser },
        { label: 'Employment', icon: faBriefcase },
        { label: 'Identification', icon: faPassport },
        { label: 'Contact Details', icon: faAddressBook },
        { label: 'Product', icon: faGem },
        { label: 'Loan Acceptance', icon: faMoneyBill },
      ],
    };
  }

  componentDidMount() {
    if (window.sessionStorage.getItem('language') == null) window.sessionStorage.setItem('language', 'en');
  }

  nextfamily = () => {
    this.setState({
      activekey: 3,
    });
  };
  backpage = () => {
    this.setState({
      activekey: 2,
    });
  };
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
    if (this.validate()) {
      let filedvalue = {};

      filedvalue['Firstname'] = 'ABDULLAH';
      filedvalue['Lastname'] = 'ALKHUDHAYR';
      filedvalue['Middlename'] = 'MOHAMMED';
      filedvalue['Familyname'] = 'ABDULKARIM';
      filedvalue['FirstArabic'] = 'عبدالله';
      filedvalue['MiddleArabic'] = 'محمد';
      filedvalue['LastArabic'] = 'الخضير';

      this.setState({ filedvalue: filedvalue, activekey: 2 });
    }

    this.setState({ activekey: 2 });
  };

  validate() {
    let filedvalue = this.state.filedvalue;

    let errors = {};

    let isValid = true;
    if (!filedvalue['Firstname']) {
      isValid = false;
      errors['Firstname'] = 'Cannot be empty';
    }

    if (typeof filedvalue['Firstname'] !== 'undefined') {
      if (!filedvalue['Firstname'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Firstname'] = 'Only letters';
      }
    }

    if (!filedvalue['Lastname']) {
      isValid = false;
      errors['Lastname'] = 'Cannot be empty';
    }

    if (typeof filedvalue['Lastname'] !== 'undefined') {
      if (!filedvalue['Lastname'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Lastname'] = 'Only letters';
      }
    }
    if (!filedvalue['Middlename']) {
      isValid = false;
      errors['Middlename'] = 'Cannot be empty';
    }

    if (typeof filedvalue['Middlename'] !== 'undefined') {
      if (!filedvalue['Middlename'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Middlename'] = 'Only letters';
      }
    }

    if (!filedvalue['Familyname']) {
      isValid = false;
      errors['Familyname'] = 'Cannot be empty';
    }

    if (typeof filedvalue['Familyname'] !== 'undefined') {
      if (!filedvalue['Familyname'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Familyname'] = 'Only letters';
      }
    }
    if (!filedvalue['FirstArabic']) {
      isValid = false;
      errors['FirstArabic'] = 'Cannot be empty';
    }

    if (typeof filedvalue['FirstArabic'] !== 'undefined') {
      if (!filedvalue['FirstArabic'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['FirstArabic'] = 'Only letters';
      }
    }

    if (!filedvalue['MiddleArabic']) {
      isValid = false;
      errors['MiddleArabic'] = 'Cannot be empty';
    }

    if (typeof filedvalue['MiddleArabic'] !== 'undefined') {
      if (!filedvalue['MiddleArabic'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['MiddleArabic'] = 'Only letters';
      }
    }
    if (!filedvalue['LastArabic']) {
      isValid = false;
      errors['LastArabic'] = 'Cannot be empty';
    }

    if (typeof filedvalue['LastArabic'] !== 'undefined') {
      if (!filedvalue['LastArabic'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['LastArabic'] = 'Only letters';
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  //-----------------------------first section validation END--------------------//

  //-----------------------------second section validation start----------------//
  inputFiledchange = event => {
    let nationalityfields = this.state.nationalityfields;
    nationalityfields[event.target.name] = event.target.value;
    this.setState({
      nationalityfields,
    });
  };
  inputfiledSubmit = () => {
    // event.preventDefault();
    if (this.inputfiledvalidate()) {
      console.log(this.state);
      let nationalityfields = {};
      nationalityfields['Dateofbirth'] = '19-02-1986';
      nationalityfields['Age'] = '34';
      nationalityfields['Nationality'] = 'Saudi Arabia';
      nationalityfields['IqamaNumber'] = '';
      nationalityfields['NationalityId'] = '1029987532';
    }
    this.setState({ activekey: 3 });
  };

  inputfiledvalidate() {
    let nationalityfields = this.state.nationalityfields;
    let errors = {};

    let isValid = true;
    if (!nationalityfields['Dateofbirth']) {
      isValid = false;
      errors['Dateofbirth'] = 'Cannot be empty';
    }

    if (typeof nationalityfields['Dateofbirth'] !== 'undefined') {
      if (!nationalityfields['Dateofbirth'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
        isValid = false;
        errors['Dateofbirth'] = 'Only number';
      }
    }

    // if (!nationalityfields['Age']) {
    //   isValid = false;
    //   errors['Age'] = 'Cannot be empty';
    // }

    // if (typeof nationalityfields['Age'] !== 'undefined') {
    //   if (!nationalityfields['Age'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
    //     isValid = false;
    //     errors['Age'] = 'Only number';
    //   }
    // }

    if (!nationalityfields['Nationality']) {
      isValid = false;
      errors['Nationality'] = 'Cannot be empty';
    }

    if (typeof nationalityfields['Nationality'] !== 'undefined') {
      if (!nationalityfields['Nationality'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Nationality'] = 'Only letter';
      }
    }
    if (!nationalityfields['IqamaNumber']) {
      isValid = false;
      errors['IqamaNumber'] = 'Cannot be empty';
    }

    if (typeof nationalityfields['IqamaNumber'] !== 'undefined') {
      if (!nationalityfields['IqamaNumber'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
        isValid = false;
        errors['IqamaNumber'] = 'Only number';
      }
    }
    if (!nationalityfields['NationalityId']) {
      isValid = false;
      errors['NationalityId'] = 'Cannot be empty';
    }

    if (typeof nationalityfields['NationalityId'] !== 'undefined') {
      if (!nationalityfields['NationalityId'].match('^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$')) {
        isValid = false;
        errors['NationalityId'] = 'Only number';
      }
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }
  //-----------------------------second section validation end----------------//

  //-----------------------------Third section validation start----------------//
  familydataSubmit = event => {
    event.preventDefault();

    if (this.familyfiledvalidate()) {
      console.log(this.state);

      let familyfields = {};

      familyfields['Gender'] = 'Male';
      familyfields['Marital status'] = 'Married';
      familyfields['Resident Status'] = '';
      familyfields['Nationality'] = 'Saudi Arabia';
      familyfields['No. of Dependants'] = '';

      this.setState({ familyfields: familyfields });

      this.saveAndContinue();
    }
  };
  familyfiledvalidate() {
    let familyfields = this.state.familyfields;
    let errors = {};

    let isValid = true;
    if (!familyfields['Gender']) {
      isValid = false;
      errors['Gender'] = 'Cannot be empty';
    }

    if (!familyfields['Marital status']) {
      isValid = false;
      errors['Marital status'] = 'Cannot be empty';
    }

    if (!familyfields['Nationality']) {
      isValid = false;
      errors['Nationality'] = 'Cannot be empty';
    }

    if (typeof familyfields['Nationality'] !== 'undefined') {
      if (!familyfields['Nationality'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['Nationality'] = 'Only letter';
      }
    }

    if (!familyfields['ResidentStatus']) {
      isValid = false;
      errors['ResidentStatus'] = 'Cannot be empty';
    }

    if (typeof familyfields['ResidentStatus'] !== 'undefined') {
      if (!familyfields['ResidentStatus'].match(/^[a-zA-Z]+$/)) {
        isValid = false;
        errors['ResidentStatus'] = 'Only letter';
      }
    }
    if (!familyfields['NoofDependants']) {
      isValid = false;
      errors['NoofDependants'] = 'Cannot be empty';
    }
    this.setState({
      errors: errors,
    });

    return isValid;
  }
  familyFiledchange = event => {
    let familyfields = this.state.familyfields;

    familyfields[event.target.name] = event.target.value;

    this.setState({
      familyfields,
    });
  };
  // married = (event) => {
  //   this.spouseData.visible = true;
  // }
  //-----------------------------third section validation end-----------------//
  previouspage = () => {
    this.setState({
      activekey: 1,
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
    let onboardinguserinfo = this.props.reducer.onboardingpersonal ? this.props.reducer.onboardingpersonal : [];
    const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' };
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

    return (
      <>
        <div className="col-sm-12">
          <div className="card" style={{ borderRadius: '10px', width: '97vw', marginLeft: '20px', marginTop: '20px' }}>
            <button className="dfs-savebtn" onClick={this.logout} style={{ top: '20px', width: '40px ', margin: '30px' }}>
              <span className="glyphicon glyphicon-log-out"></span>
            </button>

            <div className="card-body" style={{ height: '10vh', borderRadius: '10px' }}>
              <div className="jarir-img" width="150" height="50"></div>
              <br />
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="verficationcardstyle"
              style={{ height: '80vh', borderRadius: '10px', marginTop: '90px', width: '35rem', marginRight: '0px !important' }}
            >
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

                  <div className="signup-btn-style">
                    <div>
                      <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                        Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div id="sidebar_white_right" rx="0" ry="0" x="0" y="0" className="sidebar_white_right">
              <div className="rightdiv">
                {this.state.activekey === 0 ? (
                  <div className="container assettabpadding rightdiv"></div>
                ) : this.state.activekey === 1 ? (
                  <div className="container assettabpadding rightdiv">
                    <div className="dfs-personalinfotxt">{this.heading}</div>

                    <div className="rows">
                      <label>
                        <h3>Employment Details</h3>
                      </label>
                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 assetstyle">
                          <label>Title</label>
                          <input type="text" value="Mr." readOnly />
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>First Name</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="Firstname"
                            value={this.state.filedvalue.Firstname}
                            onChange={this.handleChange}
                            id="Firstname"
                            // value={onboardinguserinfo.englishFirstNameField}
                          />
                          {/* <div className="text-danger">{this.state.errors.Firstname}</div> */}
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>Last Name</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="Lastname"
                            value={this.state.filedvalue.Lastname}
                            onChange={this.handleChange}
                            id="Lastname"
                            // value={onboardinguserinfo.englishLastNameField}
                          />
                          {/* <div className="text-danger">{this.state.errors.Lastname}</div> */}
                        </div>
                        <div className="col-sm-3 assetstyle">
                          <label>Middle Name</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="Middlename"
                            value={this.state.filedvalue.Middlename}
                            onChange={this.handleChange}
                            id="Middlename"
                            // value={onboardinguserinfo.englishSecondNameField}
                          />
                          {/* <div className="text-danger">{this.state.errors.Middlename}</div> */}
                        </div>
                      </div>

                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 assetstyle">
                          <label>Family Name</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="Familyname"
                            value={this.state.filedvalue.Familyname}
                            onChange={this.handleChange}
                            id="Familyname"
                            // value={onboardinguserinfo.familyNameField}
                          />
                          {/* <div className="text-danger">{this.state.errors.Familyname}</div> */}
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>First Name (Ar)</label>
                          <input
                            type="text"
                            name="FirstArabic"
                            value={this.state.filedvalue.FirstArabic}
                            onChange={this.handleChange}
                            id="FirstArabic"
                            // value={onboardinguserinfo.firstNameField}
                            readOnly="readonly"
                          />
                          {/* <div className="text-danger">{this.state.errors.FirstArabic}</div> */}
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>Middle Name (Ar)</label>
                          <input
                            type="text"
                            name="MiddleArabic"
                            value={this.state.filedvalue.MiddleArabic}
                            onChange={this.handleChange}
                            id="MiddleArabic"
                            readOnly="readonly"
                          />
                          {/* <div className="text-danger">{this.state.errors.MiddleArabic}</div> */}
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>Last Name (Ar)</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="LastArabic"
                            value={this.state.filedvalue.LastArabic}
                            onChange={this.handleChange}
                            id="LastArabic"
                          />
                          {/* <div className="text-danger">{this.state.errors.LastArabic}</div> */}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="">
                      <button className="dfs-savebtn" onClick={this.handleSubmit} style={{ marginTop: '20px' }}>
                        Save as Draft
                      </button>
                    </div>
                  </div>
                ) : this.state.activekey === 2 ? (
                  <div className="container assettabpadding rightdiv">
                    <div className="dfs-personalinfotxt rightdiv">
                      <h3></h3>
                    </div>

                    <div className="row rightdiv">
                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 assetstyle">
                          <label>Date of Birth</label>
                          <input
                            type="date"
                            style={{ fontSize: '1.5rem' }}
                            name="Dateofbirth"
                            // value="1986-02-19"
                            value={this.state.nationalityfields.Dateofbirth}
                            onChange={this.inputFiledchange}
                            id="Dateofbirth"
                          />
                          <div className="text-danger">{this.state.errors.Dateofbirth}</div>
                        </div>

                        <div className="col-sm-3 assetstyle">
                          <label>Age</label>
                          <input
                            readOnly="readonly"
                            type="number"
                            name="Age"
                            value={this.state.nationalityfields.Age}
                            onChange={this.inputFiledchange}
                            id="Age"
                          />
                          <div className="text-danger">{this.state.errors.Age}</div>
                        </div>
                        <div className="col-sm-3 assetstyle">
                          <label>Nationality</label>
                          <input
                            readOnly="readonly"
                            type="text"
                            name="Nationality"
                            value={this.state.nationalityfields.Nationality}
                            onChange={this.inputFiledchange}
                            id="Nationality"
                          />
                          <div className="text-danger">{this.state.errors.Nationality}</div>
                        </div>
                        <div className="col-sm-3 assetstyle">
                          <label>Iqama Number</label>
                          <input
                            readOnly="readonly"
                            type="number"
                            name="IqamaNumber"
                            value={this.state.nationalityfields.IqamaNumber}
                            onChange={this.inputFiledchange}
                            id="IqamaNumber"
                          />
                          <div className="text-danger">{this.state.errors.IqamaNumber}</div>
                        </div>
                      </div>

                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 assetstyle">
                          <label>National Id</label>
                          <input
                            type="number"
                            name="NationalityId"
                            value={this.state.nationalityfields.NationalityId}
                            onChange={this.inputFiledchange}
                            id="NationalityId"
                          />
                          <div className="text-danger">{this.state.errors.IqamaNumber}</div>
                        </div>

                        <div className="col-sm-3 assetstyle"></div>
                        <div className="col-sm-3 assetstyle"></div>
                        <div className="col-sm-3 assetstyle"></div>
                      </div>
                    </div>
                    <div className="">
                      <button onClick={this.previouspage} className="previous aBtn">
                        Back
                      </button>
                    </div>
                    <div className="">
                      <button onClick={this.inputfiledSubmit} className="next aBtn">
                        Next
                      </button>
                    </div>
                    <div className="savebtn">
                      <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                        Save as Draft
                      </button>
                    </div>
                  </div>
                ) : this.state.activekey === 3 ? (
                  <div className="container assettabpadding rightdiv">
                    <div className="dfs-personalinfotxt rightdiv">
                      <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                      <h3>Please enter your Family Details</h3>
                    </div>

                    <div className="row ">
                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 dfs-applynow ">
                          <label>Gender</label>
                          <select>
                            <option value="">Select Gender</option>
                            <option value="Male" selected="selected">
                              Male
                            </option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="col-sm-3 dfs-applynow ">
                          <label>Marital Status</label>
                          <select name="marital_status" id="marital_status">
                            <option value="Single">Select Status</option>
                            <option value="Single">Single</option>
                            <option value="Married" /*onChange={this.married()}*/>Married</option>
                          </select>
                        </div>
                        <div className="col-sm-3 assetstyle">
                          <label>Resident status</label>
                          <input
                            type="text"
                            name="ResidentStatus"
                            value={this.state.familyfields.ResidentStatus}
                            onChange={this.familyFiledchange}
                            id="ResidentStatus"
                          />
                          <div className="text-danger">{this.state.errors.ResidentStatus}</div>
                        </div>
                        <div className="col-sm-3 assetstyle">
                          <label>Nationality</label>
                          <input
                            type="text"
                            name="Nationality"
                            // value={this.state.familyfields.Nationality}
                            value="Saudi Arabia"
                            onChange={this.familyFiledchange}
                            id="Nationality"
                          />
                          <div className="text-danger">{this.state.errors.Nationality}</div>
                        </div>
                      </div>

                      <div className="col-sm-12 assetmaindivpadding">
                        <div className="col-sm-3 assetstyle">
                          <label>No. of Dependants</label>
                          <input
                            type="text"
                            name="NoofDependants"
                            // value={this.state.familyfields.NoofDependants}
                            value="8"
                            onChange={this.familyFiledchange}
                            id="NoofDependants"
                          />
                          <div className="text-danger">{this.state.errors.NoofDependants}</div>
                        </div>

                        <div className="col-sm-3 assetstyle"></div>
                        <div className="col-sm-3 assetstyle"></div>
                        <div className="col-sm-3 assetstyle"></div>
                      </div>
                    </div>
                    <div className="">
                      <button onClick={this.saveAndContinue} className="next aBtn">
                        Next
                      </button>
                    </div>
                    <div className="">
                      <button className="previous aBtn" onClick={this.backpage}>
                        Back
                      </button>
                    </div>
                    <div className="savebtn">
                      <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                        Save as Draft
                      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(customerinfo);
