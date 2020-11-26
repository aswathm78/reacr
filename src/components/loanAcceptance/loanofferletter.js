import React, { Component } from 'react';
import './loanofferletter.css';
import loanofferimg from '../../assets/images/loanoffer.png';
import { Otp } from 'react-otp-timer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faBriefcase, faGem, faMoneyBill, faPassport, faUser } from '@fortawesome/free-solid-svg-icons';

export default class Loanofferletter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      errors: '',
      otp: {},
      open: false,
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
  nextesignverification = () => {};

  next_onboardingcomp = () => {
    // this.setState({
    //     activekey: 4
    // })
  };
  acceptfunction = () => {
    this.setState({
      activekey: 2,
    });
  };
  nexte_sign = () => {
    this.setState({
      activekey: 4,
    });
  };
  loanofferletter = () => {
    this.setState({
      activekey: 3,
    });
  };

  // otp validation

  otpchange = event => {
    let otp = this.state.otp;
    otp[event.target.name] = event.target.value;

    this.setState({
      otp,
    });
  };

  otpsubmit = event => {
    event.preventDefault();

    if (this.otpvalidate()) {
      console.log(this.state);

      let otp = {};

      otp['documentotp'] = '';
      this.setState({ otp: otp, activekey: 5 });
    }
  };

  otpvalidate() {
    let otp = this.state.otp;

    let errors = {};

    let isValid = true;

    if (!otp['documentotp']) {
      isValid = false;

      errors['documentotp'] = 'Please enter 4 digits otp number';
    }

    if (typeof otp['documentotp'] !== 'undefined') {
      var pattern = new RegExp('^\\d{4}$');

      if (!pattern.test(otp['documentotp'])) {
        isValid = false;

        errors['documentotp'] = 'Please enter valid otp.';
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  todashboard = () => {
    this.props.history.push('/customer/dashboard');
  };
  rejectoffer = () => {
    this.props.history.push('/customer/dashboard');
  };
  render() {
    let style = {
      otpTimer: {
        margin: '10px',
        color: 'blue',
        'font-size': '14px',
      },
    };
    // const { open } = this.state;
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
              <div className="container rightdiv">
                <div className="dfs-LL-heading">
                  <h6>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h6>
                </div>
                <div className="row">
                  <div className="col-sm-12 dfs-LL-sectionofst">
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Application Id</label>
                      <input type="number" readonly value="2" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Requested Loan Amount</label>
                      <input type="text" readonly value="SR 16,665.00" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>EMI Amount</label>
                      <input type="text" readonly value="SR 2,933.00" />
                    </div>
                  </div>

                  <div className="col-sm-12 dfs-LL-sectionofst">
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Underwritter Decision</label>
                      <input type="text" readonly value="Approved" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Approved Loan Amount</label>
                      <input type="text" readonly value="SR 17,601.00" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Currency</label>
                      <input type="text" readonly value="SR" />
                    </div>
                  </div>

                  <div className="col-sm-12 dfs-LL-sectionofst">
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Rejection Remarks</label>
                      <input type="text" readonly value="N/A" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Interest Rate</label>
                      <input type="text" readonly value="19 %" />
                    </div>
                    <div className="col-sm-4 dfs-LL-input">
                      <label>Tenure</label>
                      <input type="text" readonly value="6 months" />
                    </div>
                  </div>
                </div>
                {/* modal */}

                {/* <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="myModalLabel">Basic Modal </h4>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <h3>Modal Body</h3>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                {/* modal close*/}

                <div className="acceptrejectbtn">
                  <div className="">
                    <button className="dfs-accept-btn" data-toggle="modal" data-target="#basicModal" onClick={this.acceptfunction}>
                      Accept Offer
                    </button>
                  </div>
                  <div className="">
                    <button className="dfs-reject-btn" onClick={this.rejectoffer}>
                      Reject Offer
                    </button>
                  </div>
                </div>
              </div>
            ) : /* second section */
            this.state.activekey === 2 ? (
              <div className="container rightdiv">
                <div className="loan-acceptance-txt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Loan Offer Letter </h3>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    {/* <div className="col-sm-6">
                                        <div className="dfs-L-left-padding">
                                            <div className="dfs-L-input">
                                                <label>Application Number</label>
                                                <input type="text" readonly />
                                            </div>

                                            <div className="dfs-L-input">
                                                <label>LOAN ID NUMBER</label>
                                                <input type="number" readonly />
                                            </div>

                                            <div className="dfs-L-input">
                                                <label>Underwritter Decision</label>
                                                <input type="number" readonly />
                                            </div>

                                            <div className="dfs-L-input">
                                                <label>Rejection Remarks</label>
                                                <input type="number" readonly />
                                            </div>
                                        </div>
                                    </div> */}
                    {/* ------------------left section close---------------- */}
                    <div className="col-sm-12">
                      {/* pdficonbuttonstart */}
                      <div className="dfs-L-3padding">
                        <div className="dfs-L-loantxtpadding">
                          <div className="dfs-L-offerletter">LOAN OFFER LETTER.PDF</div>
                        </div>
                        <button className="dfs-L-buttonstyle" onClick={this.loanofferletter}>
                          E-Sign
                        </button>
                      </div>

                      {/* pdficonbuttonend */}

                      <div className="textbar-or">
                        <span>OR</span>
                      </div>

                      <div className="dfs-L-completeprocess">
                        kindly download the loan offer letter document and upload the duly signed document to complete process.
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
                <div className="dfs-L-wisardSaveStyle">
                  <div>
                    <button className="dfs-L-btnsave">Save</button>
                  </div>
                  <div>
                    <button className="dfs-L-btnsubmit" onClick={this.nextesignverification}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : /*---------- simple loan agreement-------------- */
            this.state.activekey === 3 ? (
              <div className="container rightdiv">
                <div className="loan-acceptance-txt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Loan Offer Letter</h3>
                </div>

                <div>
                  <div className="dfs-L-simpleAgree">
                    CUSTOMER LOAN AGREEMENT
                    <br />
                  </div>
                  <div class="dfs-L-justifytext">
                    <p>&nbsp;</p>
                    <h7>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas ultrices enim, ac scelerisque enim. Nunc
                      consequat in purus at auctor. Maecenas ac nunc felis. Nullam vel facilisis orci. Nunc id lacinia tortor. Phasellus leo
                      dolor, facilisis vitae mauris quis, tempor facilisis metus.
                    </h7>
                    <h7>
                      Pellentesque mollis eleifend arcu, rutrum facilisis quam elementum sit amet. Donec posuere neque sem, eu vehicula ex
                      mollis vitae. Donec ac porta sapien, in iaculis ligula.
                    </h7>
                    <h7>
                      Nam eget pharetra libero. Vivamus suscipit tempor suscipit. Ut porta hendrerit tellus, quis accumsan quam tincidunt
                      sit amet. Aliquam erat volutpat.
                    </h7>
                    <h7>
                      Pellentesque neque nibh, egestas a tellus ut, blandit dapibus odio. Nunc porta, sapien nec finibus tempus, felis arcu
                      mollis metus, et fermentum diam diam quis dolor.
                    </h7>
                    <h7>
                      Curabitur id commodo sem. Suspendisse sit amet ex commodo est varius maximus. In sollicitudin libero id sem mollis
                      posuere. Sed tempor euismod nulla eget elementum. Maecenas mattis, nulla sed sodales cursus, eros odio posuere lacus.
                    </h7>
                    <h7>
                      {' '}
                      ut ultrices eros odio at tortor. Sed libero velit, elementum ac magna ut, malesuada bibendum ex. Proin eu erat
                      vestibulum, condimentum velit vitae, scelerisque ante. Donec pharetra felis nibh, vel tristique elit pulvinar ut. Ut
                      vel quam ornare, sagittis sem et, tincidunt sapien. Etiam sagittis ex vitae diam vestibulum mollis. Etiam vestibulum
                      velit dolor, sit amet varius quam fringilla non
                    </h7>
                    <p>&nbsp;</p>
                  </div>
                </div>

                <div className="dfs-L-loanaggrementtxt"></div>

                <div className="dfs-L-checkboxstyle">
                  <input type="checkbox" />
                  <label class="form-check-label" for="exampleCheck1">
                    I Agree, terms & Conditions.
                  </label>
                </div>

                <div className="dfs-L-savesubmitstlye">
                  <div>
                    <button className="dfs-L-btnsave">Save</button>
                  </div>
                  <div>
                    <button className="dfs-L-btnsubmit" onClick={this.nexte_sign}>
                      E-Sign
                    </button>
                  </div>
                </div>
              </div>
            ) : /*------------------------- Loan offer letter agreement finish------------------ */

            /* ---------------------E-signature OTP Verification----------------------- */

            this.state.activekey === 4 ? (
              <div className="container ">
                <div className="loan-acceptance-txt rightdiv">
                  <h4>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h4>
                </div>

                <div class="card otpdocumentstyle">
                  <div class="card-body">
                    <div className="e-sign-txt">E-Sign Verification</div>
                    <div className="dfs-L-esign_input">
                      <label>E-signature OTP</label>
                      <input
                        type="text"
                        placeholder="Enter Document Signature OTP"
                        name="documentotp"
                        value={this.state.otp.documentotp}
                        onChange={this.otpchange}
                        id="documentotp"
                      />
                      <div className="text-danger">{this.state.errors.documentotp}</div>
                    </div>
                    {/* <div className="dfs-L-seconds">
                                                20 Seconds
                            </div> */}

                    <div style={{ display: 'flex', 'justify-content': 'space-around' }}>
                      <div className="sign-resendotp">
                        <a href="#"> Resend OTP</a>
                      </div>

                      <div className="otp-comp">
                        <Otp
                          style={style}
                          minutes={1}
                          // resendEvent={this.resendEvent}
                          ButtonText=""
                        />
                      </div>
                    </div>

                    <div className="e-signoptbuttonstyle">
                      <button className="eisignin-otp" onClick={this.otpsubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : this.state.activekey === 5 ? (
              <div className="container rightdiv">
                <div className="dfs-personalinfotxt">
                  <h5>Welcome Mr. Abdullah, Kindly complete your profile to get start with your loan application.</h5>
                  <h3>Onboarding Completed</h3>
                </div>
                <div className="row">
                  <h5>The Request of Vendor On boarding for Jarir Bookstore has been initiated successfully</h5>
                  <div className="col-sm-12 assetmaindivpadding">
                    <h4>Customer Details</h4>
                    <div class="row">
                      <div className="col-sm-4 dfs-applynow " style={{ textAlign: 'right !important' }}>
                        <label>Name:</label>
                      </div>
                      <div class="dfs-L-completeprocess">Abdullah Alkhudhayr</div>
                    </div>
                    <div class="row">
                      <div className="col-sm-4 dfs-applynow " style={{ textAlign: 'right !important' }}>
                        <label>Vendor Name:</label>
                      </div>
                      <div class="dfs-L-completeprocess">Jarir Bookstore</div>
                    </div>
                    <div class="row">
                      <div className="col-sm-4 dfs-applynow " style={{ textAlign: 'right !important' }}>
                        <label>Email: </label>
                      </div>
                      <div class="dfs-L-completeprocess">Abdullah.Alkhudhayr@gmail.com</div>
                    </div>
                    <div class="row">
                      <div className="col-sm-4 dfs-applynow " style={{ textAlign: 'right !important' }}>
                        <label>Location: </label>
                      </div>
                      <div class="dfs-L-completeprocess">SA</div>
                    </div>
                    <div class="row">
                      <div className="col-sm-4 dfs-applynow " style={{ textAlign: 'right !important' }}>
                        <label>Amount: </label>
                      </div>
                      <div class="dfs-L-completeprocess">SR 16,665.00</div>
                    </div>
                  </div>

                  {/*----------- customer details fields------------- */}
                  <div className="col-sm-12"></div>
                </div>

                <div style={{ 'text-align': 'center' }}>
                  <button className="dfs-L-consumer-btn" onClick={this.todashboard}>
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}
