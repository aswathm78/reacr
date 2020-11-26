import React, { Component } from "react";
import "./newcustomerdetails.css";
class assetInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <div>
        <div className="container assettabpadding">
          <div className="row">
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Asset Details Model</label>
                <input type="text" />
              </div>

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
                <input type="text" />
              </div>
            </div>
            {/*------------------------------fst section end----------------------*/}
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Asset Model</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Asset Model Year</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Asset Price</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Balloon payment</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Dealer Name</label>
                <input type="text" />
              </div>
            </div>

            {/*--------------------------- second section end------------------------ */}

            <div className="col-sm-12 assetmaindivpadding">


              <div className="col-sm-3 assetstyle">
                <label>Downpayment</label>
                <input type="text" />
              </div>
              <div className="col-sm-3"></div>
              <div className="col-sm-3"></div>
            </div>
          </div>
          <div className="backandsavebtn">
            <div className="col-sm-6">
              <button className="previous aBtn" onClick={this.back}>Back</button>
            </div>

            <div className=" col-sm-6">
              <button className="dfs-savebtn" onClick={this.saveAndContinue}>Save</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default assetInformation;
