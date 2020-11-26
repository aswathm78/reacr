import React, { Component } from 'react';
import '../../css/mobilecomp.css';

class MobileNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  };

  submituserRegistrationForm = e => {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};

      fields['mobileno'] = '';

      this.setState({ fields: fields });
      alert('Form submitted');
    }
  };

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields['mobileno']) {
      formIsValid = false;
      errors['mobileno'] = '*Please enter your mobile no.';
    }

    if (typeof fields['mobileno'] !== 'undefined') {
      var mobilePattern = new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
      if (!mobilePattern.test(nid['mobileNo'])) {
        formIsValid = false;
        errors['mobileNo'] = 'Please enter valid mobile number!';
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="header-block">
            <h1 className="heading1 text-center" ng-bind="mobileVerifyVm.title">
              Apply for Loan
            </h1>
          </div>

          <div className="row">
            <div className="mobcls">
              <div className="input-container">
                <div className="input-field">
                  <input
                    type="text"
                    name="mobileno"
                    className="inputcls"
                    placeholder="MobileNumber"
                    value={this.state.fields.mobileno}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* <div className="errorMsg">{this.state.errors.mobileno}</div> */}
              <p>Please enter mobile number</p>
              <div className="button-container">
                <button type="submit" className="btn btn-primary" onSubmit={this.submituserRegistrationForm}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileNumber;
