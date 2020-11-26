import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';

export default class identification extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <div>
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
            <div className="container assettabpadding rightdiv">
              <div className="dfs-personalinfotxt">
                <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                <h3>Please enter Identity Information</h3>
              </div>

              <div className="row">
                <div className="col-sm-12 assetmaindivpadding">
                  <div className="col-sm-3 dfs-applynow ">
                    <label>Id Type </label>
                    <select>
                      <option value="-1">Select Id Type</option>
                      <option value="passport">Official ID</option>
                      <option value="aadharcard">Government ID</option>
                    </select>
                  </div>

                  <div className="col-sm-3 assetstyle ">
                    <label>Id Number </label>

                    <input type="text" name="idNumber" id="idNumber" />
                  </div>
                  <div className="col-sm-3 assetstyle">
                    <label> Id Issue Date </label>
                    <input type="date" style={{ fontSize: '1.3rem' }} />
                  </div>
                  <div className="col-sm-3 assetstyle">
                    <label>Id Expiry Date</label>
                    <input type="date" style={{ fontSize: '1.3rem' }} />
                  </div>
                </div>
              </div>
              <div className="">
                <button className="previous aBtn" onClick={this.back}>
                  Back
                </button>
                <button className="next aBtn" onClick={this.saveAndContinue}>
                  Next
                </button>
              </div>
              <div className="savebtn">
                <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
