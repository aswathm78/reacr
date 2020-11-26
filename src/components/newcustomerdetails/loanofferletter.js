import React, { Component } from "react";

class loanofferletter extends Component {
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
              <div className="col-sm-6 assetstyle">
                <div>
                  <label>Email Id</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Loan Id Number</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Underwritter Decision</label>
                  <input type="text" />
                </div>

                <div>
                  <label>Rejection Remarks</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loanofferletter;
