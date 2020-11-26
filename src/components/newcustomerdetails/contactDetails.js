import React, { Component } from 'react';
import './newcustomerdetails.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';

export default class contactDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  communicationnext = () => {
    this.setState({
      activekey: 2,
    });
  };
  backtocontact = () => {
    this.setState({
      activekey: 1,
    });
  };

  // nexttoloansection = () => {
  //     console.log(this.props);
  //     this.props.history.push("/customer/loanoffer");
  // }
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
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
        <div id="sidebar_white_right" rx="0" ry="0" x="0" y="0" className="sidebar_white_right">
          <div className="rightdiv">
            {this.state.activekey === 1 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please enter your Contact Details</h3>
                </div>
                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 dfs-applynow ">
                      <label>Address Type</label>
                      <select>
                        <option>Select Address</option>
                        <option>Office</option>
                        <option>Office</option>
                        <option>Home</option>
                      </select>
                    </div>
                    <div className="col-sm-3 dfs-applynow ">
                      <label>Occupancy Status</label>
                      <select>
                        <option>Select Status</option>
                        <option>Own</option>
                        <option>public</option>
                      </select>
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Mobile 1</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Email</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Alternate No.</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle"></div>
                    <div className="col-sm-3 assetstyle"></div>
                    <div className="col-sm-3 assetstyle"></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <button className="previous aBtn" onClick={this.back}>
                    Back
                  </button>
                </div>
                <div className="">
                  <button className="next aBtn" onClick={this.communicationnext}>
                    Next
                  </button>
                </div>
                <div className="savebtn">
                  <button className="dfs-savebtn" onClick={this.saveAndContinue}>
                    Save as Draft
                  </button>
                </div>
              </div>
            ) : this.state.activekey === 2 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please enter your Address for communication</h3>
                </div>

                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Address 1 </label>
                      <input type="text" value="Eastern Ring Road" />
                    </div>

                    <div className="col-sm-3 assetstyle">
                      <label>Address 2</label>
                      <input type="text" value="Exits 13 and 14" />
                    </div>

                    <div className="col-sm-3 dfs-applynow ">
                      <label>Country</label>
                      <select>
                        <option>Saudi Arabia</option>
                        <option>India</option>
                        <option>USA</option>
                      </select>
                    </div>

                    <div className="col-sm-3 dfs-applynow">
                      <label>Province</label>
                      <select>
                        <option>Saudi Arabia</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>City</label>
                      <input type="text" value="الرياض" />
                    </div>

                    <div className="col-sm-3 assetstyle">
                      <label>District/Neighbourhood</label>
                      <input type="text" value="حي ظهرة لبن" />
                    </div>

                    <div className="col-sm-3 assetstyle ">
                      <label>Zip Code</label>
                      <input type="number" value="13784" />
                    </div>

                    <div className="col-sm-3 assetstyle ">
                      <label>PO Box </label>
                      <input type="number" value="4525" />
                    </div>
                  </div>

                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Building No. </label>
                      <input type="text" value="5" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Street</label>
                      <input type="number" value="سكاكا" />
                    </div>
                    <div className="col-sm-3 dfs-applynow "></div>
                    <div className="col-sm-3 dfs-applynow "></div>
                  </div>
                </div>
                <div className="">
                  <button className="previous aBtn" onClick={this.backtocontact}>
                    Back
                  </button>
                </div>
                <div className="">
                  <button className="next aBtn" onClick={this.communicationnext}>
                    Next
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
      </>
    );
  }
}
