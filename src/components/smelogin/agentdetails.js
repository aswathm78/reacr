import React, { Component } from "react";
import loanofferimg from "../../assets/images/loanoffer.png";
import axios from "axios";

export default class agentdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: 1,
      fieldArray: {},
      errorarray: {},
    };
  }

  saveandcont = (e) => {
    e.preventDefault();
    let fieldArray = this.state.fieldArray;
    let errorarray = {};
    let formStatus = true;
    if (!fieldArray["empname"]) {
      errorarray["empname"] = "Please enter Employer name";
      formStatus = false;
    }
    if (!fieldArray["serviceinmonth"]) {
      errorarray["serviceinmonth"] = "Please enter service in month";
      formStatus = false;
    }
    let field = {};
    if (formStatus == true) {
      let url =
        "http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/swagger-ui.html#/";
      axios.post(url, fieldArray).then((response) => {
        field["empname"] = "";
        this.setState({
          fieldArray: field,
        });
      });
      return true;
    } else {
      return false;
    }
    // this.setState({
    //     activekey: 2
    // })
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

  gotoloanofferletter = () => {
    this.setState({
      activekey: 5,
    });
  };
  nexttosixthpage = () => {
    this.setState({
      activekey: 6,
    });
  };
  gotoseventhpage = () => {
    this.setState({
      activekey: 7,
    });
  };
  processInput = (event) => {
    let fieldArray = this.state.fieldArray;
    fieldArray[event.target.name] = event.target.value;
    this.setState({
      fieldArray,
    });
  };
  render() {
    return (
      <div>
        <div className="">
          <div className="row">
            <div className="col-sm-12" style={{ width: "97vw" }}>
              <div
                className="card"
                style={{
                  borderRadius: "10px",
                  width: "97vw",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
              >
                <button
                  className="dfs-savebtn"
                  onClick={this.logout}
                  style={{ top: "20px", width: "40px ", margin: "30px" }}
                >
                  <span class="glyphicon glyphicon-log-out"></span>
                </button>
                <div
                  className="card-body"
                  style={{ height: "10vh", borderRadius: "10px" }}
                >
                  <div className="jarir-img" width="150" height="50"></div>
                  <br />
                </div>
              </div>
              <br />
              <div className="col-sm-3">
                <div className="col-sm-12 verficationcardstyle">
                  <div className="card" style={{ borderRadius: "10px" }}>
                    <div
                      className="card-body"
                      style={{ height: "60vh", borderRadius: "10px" }}
                    >
                      <div
                        className="verification_heading"
                        style={{ textAlign: "right", marginTop: "9rem" }}
                      >
                        Agent Details
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: "1.4rem",
                          fontWeight: "100px",
                          paddingRight: "40px",
                          "font-weight": "normal !important",
                        }}
                      >
                        Junaid Qazi
                        <br />
                        <br />
                        stc@maalem.com.sa
                        <br />
                        <br />
                        +966 5677 87698
                        <br />
                        <br />
                        Stc
                        <br />
                        <br />
                      </div>

                      <div className="signup-btn-style">
                        <div>
                          <button
                            className="signup-btn"
                            onClick={this.viewdashboard}
                            style={{ padding: "15px 1px", width: "25rem" }}
                          >
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
                          <label>Sub Sector</label>
                          <select>
                            <option value="Mr.">Procurement</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label> Sector</label>
                          <select>
                            <option value="Mr.">Retail</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Employment Type</label>
                          <select>
                            <option value="Mr.">Private</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <div className="agent-lablestyle">
                            <label>Employer Name</label>
                            <input
                              type="text"
                              name="empname"
                              value={this.state.fieldArray.empname}
                              onChange={this.processInput}
                            />
                            <i className="text-danger">
                              {this.state.errorarray.empname}
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* first section close */}

                    {/* second section start */}

                    <div className="col-sm-12" style={{ "margin-top": "40px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label> Service in Months</label>
                          <input
                            type="number"
                            name="serviceinmonth"
                            value={this.state.fieldArray.serviceinmonth}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.serviceinmonth}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Date Of Joining</label>
                          <input
                            type="date"
                            name="dateofjoining"
                            value={this.state.fieldArray.dateofjoining}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.dateofjoining}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Designation</label>
                          <select>
                            <option value="">Program Manager</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* second section end */}

                    {/* Financial details main section start */}
                    <div className="agent-financialdetails">
                      Financial Details
                    </div>
                    {/* first section start */}
                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Finance Premium </label>
                          <input
                            type="number"
                            name="financialpremium"
                            value={this.state.fieldArray.financialpremium}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.financialpremium}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Monthly Additional Income </label>
                          <input
                            type="number"
                            name="monthlyeditionincome"
                            value={this.state.fieldArray.monthlyeditionincome}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.monthlyeditionincome}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Monthly Salary </label>
                          <input
                            type="number"
                            name="monthlysalary"
                            value={this.state.fieldArray.monthlysalary}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.monthlysalary}
                          </i>
                        </div>
                      </div>
                    </div>
                    {/* first section end */}

                    {/* second section start */}

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3"></div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Number Of Dependents (Children) </label>
                          <input
                            type="number"
                            name="numberofdependencychild"
                            value={
                              this.state.fieldArray.numberofdependencychild
                            }
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.numberofdependencychild}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Number of Dependents (Spouse) </label>
                          <input
                            type="number"
                            name="numberofdependencyspouse"
                            value={
                              this.state.fieldArray.numberofdependencyspouse
                            }
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.numberofdependencyspouse}
                          </i>
                        </div>
                      </div>
                    </div>
                    {/* section section end */}

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Value</label>
                          <input
                            type="number"
                            name="assetvalue"
                            value={this.state.fieldArray.assetvalue}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.assetvalue}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Monthly Home Rent </label>
                          <input
                            type="number"
                            name="monthlyhomerent"
                            value={this.state.fieldArray.monthlyhomerent}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.monthlyhomerent}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Accommodation Type </label>
                          <select>
                            <option value="">Flat</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Obligations (Monthly) </label>
                          <input
                            type="number"
                            name="obligationmonthly"
                            value={this.state.fieldArray.obligationmonthly}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.obligationmonthly}
                          </i>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Home Finance Premium </label>
                          <input
                            type="number"
                            name="homefinance"
                            value={this.state.fieldArray.homefinance}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.homefinance}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Financing Installments </label>
                          <input
                            type="number"
                            name="financeinstallments"
                            value={this.state.fieldArray.financeinstallments}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.financeinstallments}
                          </i>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Credit Cards Limits</label>
                          <input
                            type="number"
                            name="creditcardlimits"
                            value={this.state.fieldArray.creditcardlimits}
                            onChange={this.processInput}
                          />
                          <i className="text-danger">
                            {this.state.errorarray.creditcardlimits}
                          </i>
                        </div>
                      </div>
                    </div>

                    <div className="agent-saveandcontinuestyle">
                      <button
                        className="agent-savebtn"
                        onClick={this.saveandcont}
                      >
                        Save And Continue
                      </button>
                    </div>
                  </div>
                ) : this.state.activekey == 2 ? (
                  <div className="second-page">
                    <div className="agent-assetdetails">Asset Details</div>
                    {/* first section start */}
                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Category </label>
                          <select>
                            <option value="">Electronics</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset model </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Name </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Price </label>
                          <input type="number" />
                        </div>
                      </div>
                    </div>

                    {/* asset - first section close */}

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Asset Quantity </label>
                          <input type="number" />
                        </div>
                      </div>

                      <div className="col-sm-9">
                        <div className="agent-lablestyle">
                          <label>Asset Description </label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="asset-addmoreasset">
                        <button className="asset-savebtn">
                          Add More Asset
                        </button>
                      </div>
                    </div>

                    {/*asset - table details */}

                    <div className="asset-table">
                      <table>
                        <tr>
                          <th>Item Number</th>
                          <th>Asset Name</th>
                          <th>Quantity</th>
                          <th>Item Price</th>
                          <th>Vat Amount</th>
                          <th>Total Price</th>
                        </tr>
                        <tr>
                          <td>556830</td>
                          <td>IPHONE 12 PRO 512 GB BLUE</td>
                          <td>1</td>
                          <td>SR 9,999.00</td>
                          <td>SR 1,499.85</td>
                          <td>SR 11,498.85</td>
                        </tr>
                        <tr>
                          <td>556830</td>
                          <td>IPHONE 12 PRO 512 GB BLUE</td>
                          <td>1</td>
                          <td>SR 9,999.00</td>
                          <td>SR 1,499.85</td>
                          <td>SR 11,498.85</td>
                        </tr>

                        <tr>
                          <td></td>
                          <td>Total</td>
                          <td>2</td>
                          <td></td>
                          <td></td>
                          <td>SR 11,498.85</td>
                        </tr>
                      </table>
                      <div className="agent-saveandcontinuestyle">
                        <button
                          className="agent-savebtn"
                          onClick={this.nexttodocumentupload}
                        >
                          Save And Continue
                        </button>
                      </div>
                    </div>
                  </div>
                ) : this.state.activekey == 3 ? (
                  <div className="thirdpage">
                    <div className="col-sm-12">
                      <div className="agent-assetdetails">
                        Please Upload Documents
                      </div>
                      <div className="col-sm-6">
                        <div className="agent-dropimage">
                          <div className="browsertxt">
                            Drop your files here.
                            <br />
                            <label for="files">
                              Or <a style={{ color: "blue" }}>Browser</a>
                            </label>
                            <input
                              id="files"
                              style={{ visibility: "hidden" }}
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                      {/* left section end */}
                      <div className="col-sm-6">
                        <div style={{ display: "flex" }}>
                          <div className="">
                            <i class="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">Application Form</div>
                        </div>

                        <div style={{ display: "flex" }}>
                          <div className="">
                            <i
                              class="fa fa-file-image-o light-BLUE"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div className="agent-pdf-text">
                            Identification Document
                          </div>
                        </div>

                        <div style={{ display: "flex" }}>
                          <div className="">
                            <i class="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">
                            Salary Certification
                          </div>
                        </div>

                        <div style={{ display: "flex" }}>
                          <div className="">
                            <i class="fa fa-file-pdf-o red-color "></i>
                          </div>
                          <div className="agent-pdf-text">
                            Last 3 months bank statement
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="agent-saveandcontinuestyle">
                      <button
                        className="agent-savebtn"
                        onClick={this.nexttoloandetails}
                      >
                        Save And Continue
                      </button>
                    </div>
                  </div>
                ) : /* Loan details page */
                this.state.activekey == 4 ? (
                  <div className="fourth page">
                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="agent-loan-details">Loan Details</div>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Tenure (Months) </label>
                          <select>
                            <option value="">12</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Down Payment </label>
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

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Monthly Installment</label>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Payable Amount </label>
                          <input type="number" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Requested Amount </label>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                    <div className="agent-submitbtn">
                      <button
                        className="agent-submitbuttonstyle"
                        onClick={this.gotoloanofferletter}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ) : /*---------------------------- Loan Offer Details-------------------------------------------- */
                this.state.activekey == 5 ? (
                  <div className="fifth page">
                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="agent-loan-details">
                        Loan Offer Details
                      </div>
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

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
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
                          <input type="number" />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
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

                    <div className="col-sm-12" style={{ "margin-top": "10px" }}>
                      <div className="col-sm-12">
                        <div className="agent-lablestyle">
                          <label>Rejection Remarks</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="agent-allbtns">
                      <div>
                        <button
                          className="agent-savebtn-accept"
                          onClick={this.nexttosixthpage}
                        >
                          Accept
                        </button>
                        <button className="agent-savebtn-reject">Reject</button>
                        <button className="agent-savebtn-Appeal">Appeal</button>
                      </div>
                    </div>
                  </div>
                ) : /* Loan offer and document start */
                this.state.activekey == 6 ? (
                  <div className="sixthpage">
                    <div className="agent-loanofferheading">
                      Loan Offer and Document
                    </div>
                    <div className="col-sm-6">
                      <div className="">UPLOAD BELOW DOCUMENTS DULY SIGNED</div>

                      <div style={{ display: "flex", "margin-top": "10px" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">PURCHASE ORDER</div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">PROMISSORY NOTE</div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">LOAN OFFER LETTER</div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">
                          3 MONTHS BANK STATEMENT
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">APPLICATION FORM</div>
                      </div>

                      <div style={{ display: "flex" }}>
                        <div className="">
                          <i class="fa fa-file-pdf-o red-color "></i>
                        </div>
                        <div className="agent-pdf-text">LOAN OFFER LETTER</div>
                      </div>

                      <div className="dfs-L-wisardSaveStyle">
                        <div>
                          <button className="dfs-L-btnsave">Cancel</button>
                        </div>
                        <div>
                          <button
                            className="dfs-L-btnsubmit"
                            onClick={this.gotoseventhpage}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="col-sm-12">
                        {/* pdficonbuttonstart */}
                        <div className="dfs-L-completeprocess">
                          kindly download the loan offer letter document and
                          upload the duly signed document to complete process.
                        </div>
                        <div className="dfs-L-3padding">
                          <div className="dfs-L-loantxtpadding">
                            <div className="dfs-L-offerletter">
                              LOAN OFFER LETTER.PDF
                            </div>
                          </div>
                          <button className="dfs-L-buttonstyle">
                            Download
                          </button>
                        </div>

                        {/* pdficonbuttonend */}

                        <div className="textbar-or">
                          <span>OR</span>
                        </div>

                        <div className="dfs-L-upload">
                          Upload Signed Loan Offer Document
                        </div>
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
                this.state.activekey == 7 ? (
                  <div className="sevenpage">
                    <div className="col-sm-12">
                      <div className="agent-loan-details">
                        Kindly Conﬁrm the Address
                      </div>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Country</label>
                          <select>
                            <option value="Mr.">Saudi Arabia</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Province </label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Address 2 </label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Address 1  </label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>

                    {/* first section */}
                    <div className="col-sm-12" style={{ "margin-top": "15px" }}>
                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Zip Code</label>
                          <input type="number" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Po Box</label>
                          <input type="number" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>District/Neighbourhood </label>
                          <select>
                            <option value="Mr.">Riyadh</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>city</label>
                          <select>
                            <option value="Mr.">Riyadh</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12" style={{ "margin-top": "15px" }}>
                      <div className="col-sm-3"></div>

                      <div className="col-sm-3"></div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Street</label>
                          <input type="number" />
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <div className="agent-lablestyle">
                          <label>Building No.</label>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* kindly confirm the address end*/}
              </div>
              {/* right side close */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
