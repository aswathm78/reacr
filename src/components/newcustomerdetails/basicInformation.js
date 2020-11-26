import React, { Component } from 'react';

class basicInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container assettabpadding">
          <div className="row">
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>First Name</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Middle Name</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Designation</label>
                <input type="text" />
              </div>
            </div>
            {/*------------------------------fst section end----------------------*/}
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Martial Status</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>No of Children</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>National Address</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Joining Date</label>
                <input type="text" />
              </div>
            </div>

            {/*--------------------------- second section end------------------------ */}

            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>No Of Years In Profession</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Retired Age</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Related Employer</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Salcreditanb</label>
                <input type="text" />
              </div>
            </div>

            {/* -------------------Thired section end-------------------------- */}

            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Direct Manager Name</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Direct Manager Email</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Direct Manager TelNo</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Direct Manager ExtnNo</label>
                <input type="text" />
              </div>
            </div>
            {/* -------------------fourth section end-------------------------- */}
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Company Name</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Registration Number</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Registration Date</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Registr Expiry Date</label>
                <input type="text" />
              </div>
            </div>
            {/* -------------------fifth section end-------------------------- */}
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>Percent Of Shareholding</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>StreetName</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>City</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Province</label>
                <input type="text" />
              </div>
            </div>
            {/* -------------------sixth section end-------------------------- */}
            <div className="col-sm-12 assetmaindivpadding">
              <div className="col-sm-3 assetstyle">
                <label>ZipCode</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>PoBox</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Country</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Retsalcreditanb</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default basicInformation;
