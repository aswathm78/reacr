import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';
export default class productdetails extends Component {
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
      activekey: 1,
    };
  }

  addasset = () => {
    this.setState({
      activekey: 3,
    });
  };
  nexttoasset = () => {
    this.setState({
      activekey: 2,
    });
  };

  addmoreasset = () => {
    this.setState({
      activekey: 4,
    });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  backtoproduct = () => {
    this.setState({
      activekey: 1,
    });
  };

  render() {
    return (
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
        <div id="sidebar_white_right" rx="0" ry="0" x="0" y="0" className="sidebar_white_right">
          <div className="rightdiv">
            {this.state.activekey === 1 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please select your loan product</h3>
                </div>

                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 dfs-applynow ">
                      <label>Product</label>
                      <select>
                        <option value="-1">Product</option>
                        <option value="ijrah">Ijarah</option>
                        <option value="retail">Retail</option>
                        <option value="retail">Other</option>
                      </select>
                    </div>

                    <div className="col-sm-3 dfs-applynow ">
                      <label>Sub Product </label>
                      <select>
                        <option value="-1">Sub product</option>
                        <option value="gmr">Retail Product 1</option>
                        <option value="gmr">Retail Product 2</option>
                      </select>
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Scheme</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Serving Branch</label>
                      <input type="text" />
                    </div>
                  </div>
                  {/* end */}
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle"></div>
                    <div className="col-sm-3 assetstyle"></div>
                  </div>
                  <div className="">
                    <button className="previous aBtn" onClick={this.back}>
                      Back
                    </button>
                    <button className="next aBtn" onClick={this.nexttoasset}>
                      Next
                    </button>
                  </div>
                </div>
                <div className="savebtn">
                  <button className="dfs-savebtn" onClick={this.nexttoasset}>
                    Save as Draft
                  </button>
                </div>
              </div>
            ) : /* -------product page complete------------ */

            /* asset page start */
            this.state.activekey === 2 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please select / enter your Asset details</h3>
                </div>

                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Category</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Condition</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Make</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model</label>
                      <input type="number" />
                    </div>
                  </div>
                  {/*------------------------------fst section end----------------------*/}
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model Year</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Price</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Balloon payment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Dealer Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Downpayment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Quantity</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Description</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Tenure</label>
                      <input type="text" value="6 months" />
                    </div>
                  </div>
                  <div className="">
                    <button className="previous aBtn" onClick={this.addasset}>
                      Add Product
                    </button>
                  </div>
                </div>
                <div className="savebtn">
                  <Link to="/customer/loanoffer">
                    <button className="next aBtn dfs-savebtn">Submit</button>
                  </Link>
                </div>
              </div>
            ) : this.state.activekey === 3 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please select / enter your Asset details</h3>
                </div>

                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Category</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Condition</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Make</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model</label>
                      <input type="number" />
                    </div>
                  </div>
                  {/*------------------------------fst section end----------------------*/}
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model Year</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Price</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Balloon payment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Dealer Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Downpayment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Quantity</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Description</label>
                      <input type="textarea" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Tenure</label>
                      <input type="text" value="6 months" />
                    </div>
                    <div className="">
                      <button className="previous aBtn" onClick={this.addmoreasset}>
                        Add Product
                      </button>
                    </div>
                  </div>
                  <div className="savebtn">
                    <Link to="/customer/loanoffer">
                      <button className="next aBtn dfs-savebtn">Submit</button>
                    </Link>
                  </div>
                </div>
                <br />
                <br />
                <table className="dfstable">
                  <tr>
                    <th>Asset Name</th>
                    <th>Asset Quantity</th>
                    <th>Price</th>
                    <th>Vat</th>
                    <th>Price with Vat</th>
                  </tr>
                  <tr>
                    <td>iPhone 11</td>
                    <td>1</td>
                    <td>SR 9900.00</td>
                    <td>SR 99.00</td>
                    <td>SR 9999.00</td>
                  </tr>
                  <tr>
                    <td colSpan="4">Total Amount</td>
                    <td>SR 9999.00</td>
                  </tr>
                </table>
              </div>
            ) : this.state.activekey === 4 ? (
              <div className="container assettabpadding rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Please select / enter your Asset details</h3>
                </div>

                <div className="row">
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Category</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Condition</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Make</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model</label>
                      <input type="number" />
                    </div>
                  </div>
                  {/*------------------------------fst section end----------------------*/}
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Model Year</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Asset Price</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Balloon payment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Dealer Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-sm-12 assetmaindivpadding">
                    <div className="col-sm-3 assetstyle">
                      <label>Downpayment</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-3 assetstyle">
                      <label>Quantity</label>
                      <input type="number" />
                    </div>
                    <div className="col-sm-6 assetstyle">
                      <label>Description</label>
                      <input type="text" />
                    </div>
                    <div className="col-sm-3"></div>
                  </div>
                  <div className="">
                    <button className="previous aBtn" onClick={this.addmoreasset}>
                      Add Product
                    </button>
                  </div>
                </div>
                <div className="">
                  <Link to="/customer/loanoffer">
                    <button className="dfs-savebtn">Submit</button>
                  </Link>
                </div>
                <br />
                <br />
                <table className="dfstable">
                  <tr>
                    <th>Asset Name</th>
                    <th>Asset Quantity</th>
                    <th>Price</th>
                    <th>Vat</th>
                    <th>Price with Vat</th>
                  </tr>
                  <tr>
                    <td>iPhone 11</td>
                    <td>1</td>
                    <td>SR 9900.00</td>
                    <td>SR 99.00</td>
                    <td>SR 9999.00</td>
                  </tr>
                  <tr>
                    <td>iPhone 8</td>
                    <td>1</td>
                    <td>SR 6600.00</td>
                    <td>SR 66.00</td>
                    <td>SR 6666.00</td>
                  </tr>
                  <tr>
                    <td colSpan="4">Total Amount</td>
                    <td>SR 16665.00</td>
                  </tr>
                </table>
              </div>
            ) : (
              ''
            )}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
