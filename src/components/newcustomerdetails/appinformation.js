import React, { Component } from "react";
import "./newcustomerdetails.css";
class appinformation extends Component {
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
                <label>App Id</label>
                <input type="text" />
              </div>

              <div className="col-sm-3 assetstyle">
                <label>Module Flag</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Idtype</label>
                <input type="text" />
              </div>
              <div className="col-sm-3 assetstyle">
                <label>Id Number</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default appinformation;
