import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';

export default class employeementdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      fields: {},
      errors: {},
      financialsfields: {},
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
  // nextfin = () => {

  //     this.setState({
  //         activekey: 2
  //     })
  // }
  backtoemp = () => {
    this.setState({
      activekey: 1,
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
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty';
    }

    if (typeof fields['name'] !== 'undefined') {
      if (!fields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['name'] = 'Only letters';
      }
    }

    if (!fields['subselector']) {
      formIsValid = false;
      errors['subselector'] = 'Cannot be empty';
    }

    if (!fields['date']) {
      formIsValid = false;
      errors['date'] = 'Cannot be empty';
    }
    if (!fields['employeementtype']) {
      formIsValid = false;
      errors['employeementtype'] = 'please select any one';
    }
    if (!fields['netsalary']) {
      formIsValid = false;
      errors['netsalary'] = 'Cannot be empty';
    }

    if (typeof fields['netsalary'] !== 'undefined') {
      if (!fields['netsalary'].match(/^[0-9]*$/)) {
        formIsValid = false;
        errors['netsalary'] = 'Only Number';
      }
    }

    if (!fields['designation']) {
      // formIsValid = false;
      // errors['designation'] = 'please select any one';
    }
    if (!fields['Sector']) {
      formIsValid = false;
      errors['Sector'] = 'Cannot be empty';
    }
    if (!fields['Employeementyear']) {
      formIsValid = false;
      errors['Employeementyear'] = 'Cannot be empty';
    }
    this.setState({ errors: errors });
    return formIsValid;
  };

  contactSubmit = e => {
    e.preventDefault();

    if (this.handleValidation()) {
      this.setState({
        activekey: 2,
      });
    }
  };

  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  };

  //------------------------------- second section start---------------------------//
  financialChange = (field, e) => {
    let financialsfields = this.state.financialsfields;
    financialsfields[field] = e.target.value;
    this.setState({ financialsfields });
  };

  financialSubmit = e => {
    e.preventDefault();

    if (this.financialValidation()) {
      this.setState({
        activekey: 2,
      });
    }
  };

  financialValidation = () => {
    let financialsfields = this.state.financialsfields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!financialsfields['name']) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty';
    }

    if (typeof financialsfields['name'] !== 'undefined') {
      if (!financialsfields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['name'] = 'Only letters';
      }
    }

    if (!financialsfields['income']) {
      formIsValid = false;
      errors['income'] = 'Cannot be empty';
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  //------------------------------- second section End-----------------------------//

  render() {
    return (
      <>
        <div id="sidebar_white_left" rx="0" ry="0" x="0" y="0" className="sidebar_white_left">
          <ListItem>User Profile</ListItem>
          <List component="nav">
            {this.state.items.map(item => (
              <ListItem button key={item.label}>
                <ListItemIcon>
                  <FontAwesomeIcon className="text-4xl" icon={item.icon} />
                </ListItemIcon>
                <ListItemText className="text-4xl" primary={`${item.label}`} />
              </ListItem>
            ))}
          </List>
        </div>
        <div id="sidebar_white_right" rx="0" ry="0" x="0" y="0" className="sidebar_white_right ">
          {this.state.activekey === 1 ? (
            <div className="container assettabpadding rightdiv">
              <div className="dfs-personalinfotxt">
                <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                <h3>Please enter your about your Employment</h3>
              </div>

              <div className="row">
                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 dfs-applynow ">
                    <label>Employment Type</label>
                    <select onChange={this.handleChange.bind(this, 'employeementtype')} value={this.state.fields['employeementtype']}>
                      <option value="-1">Select Employment</option>
                      <option value="Government">Government</option>
                      <option value="Private">Private</option>
                      <option value="Military">Military</option>
                    </select>
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['employeementtype']}</div>
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Employer Name</label>
                    <input type="text" onChange={this.handleChange.bind(this, 'name')} value={this.state.fields['name']} />
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['name']}</div>
                  </div>

                  <div className="col-sm-3 dfs-applynow ">
                    <label>Sector</label>
                    <select onChange={this.handleChange.bind(this, 'subselector')} value={this.state.fields['subselector']}>
                      <option value="-1">Select Sector</option>
                      <option value="technology">Technology</option>
                      <option value="FMCG">FMCG</option>
                      <option value="media">Media</option>
                    </select>
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['subselector']}</div>
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Date Of Joining</label>
                    <input type="date" style={{ fontSize: '1.5rem' }} value={this.state.fields['date']} />
                    {/* <div style={{ color: "red", 'font-size': "12px" }}>{this.state.errors["date"]}</div> */}
                  </div>
                </div>

                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 assetstyle">
                    <label>Net Salary</label>
                    <input type="number" onChange={this.handleChange.bind(this, 'netsalary')} value={this.state.fields['netsalary']} />
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['netsalary']}</div>
                  </div>

                  <div className="col-sm-3 dfs-applynow ">
                    <label>Designation</label>
                    <select onChange={this.handleChange.bind(this, 'designation')} value={this.state.fields['designation']}>
                      <option value="-1">Select Designation</option>
                      <option value="manager">Program Manager</option>
                      <option value="developer">Developer</option>
                    </select>
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['designation']}</div>
                  </div>

                  <div className="col-sm-3 dfs-applynow ">
                    <label>Sub Sector</label>
                    <select onChange={this.handleChange.bind(this, 'Sector')} value={this.state.fields['Sector']}>
                      <option value="-1">Select Sub Sector</option>
                      <option value="retail">Retail</option>
                    </select>
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['Sector']}</div>
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Employment Years</label>
                    <input
                      type="text"
                      onChange={this.handleChange.bind(this, 'Employeementyear')}
                      value={this.state.fields['Employeementyear']}
                    />
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['Employeementyear']}</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <button className="previous aBtn" onClick={this.back}>
                  Back
                </button>
              </div>
              <div className="">
                <button onClick={this.contactSubmit} className="next aBtn">
                  Next
                </button>
              </div>
              <div className="savebtn">
                <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                  Save as Draft
                </button>
              </div>
            </div>
          ) : /*---------- Your employeementdetails complete------------- */
          this.state.activekey === 2 ? (
            <div className="container assettabpadding rightdiv">
              <div className="dfs-personalinfotxt">
                <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                <h3>Please enter your Financials</h3>
              </div>

              <div className="row">
                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 assetstyle">
                    <label>Income (Monthly)</label>
                    <input
                      type="number"
                      onChange={this.financialChange.bind(this, 'income')}
                      value={this.state.financialsfields['income']}
                    />
                    <div style={{ color: 'red', 'font-size': '12px' }}>{this.state.errors['income']}</div>
                  </div>

                  <div className="col-sm-3 dfs-applynow ">
                    <label>Obligation (Monthly)</label>
                    <select>
                      <option>$568,697.00</option>
                      <option>$600,698.00</option>
                      <option>$568,777.00</option>
                    </select>
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Asset Identified</label>
                    <input type="text" />
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Asset Price</label>
                    <input type="number" />
                  </div>
                </div>

                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 assetstyle">
                    <label> Balloon Payment </label>
                    <input type="number" />
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label> Down Payment  </label>
                    <input type="number" />
                  </div>

                  <div className="col-sm-3 dfs-applynow ">
                    <label>Tenure (Months) </label>
                    <select>
                      <option>60</option>
                      <option>80</option>
                      <option>90</option>
                    </select>
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Requested Amount</label>
                    <input type="number" />
                  </div>
                </div>

                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 assetstyle">
                    <label> Purpose of Finance </label>
                    <input type="text" />
                  </div>

                  <div className="col-sm-3 assetstyle">
                    <label>Promotion/Campaign</label>
                    <input type="text" />
                  </div>

                  <div className="col-sm-3 dfs-applynow "></div>

                  <div className="col-sm-3 assetstyle"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <button className="previous aBtn" onClick={this.backtoemp}>
                  Back
                </button>
              </div>
              <div className="">
                <button onClick={this.financialSubmit} className="next aBtn">
                  Next
                </button>
              </div>
              <div className="backandsavebtn">
                <div className=" col-sm-6">
                  <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                    Save as Draft
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}
