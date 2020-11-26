import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head'
import SideNav from './sideNav'
export default class AddAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="ltr-css">
                <div className="container-fluid add-admin">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <SideNav />
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12 add-admin-panel">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h5 className="common-h5"><strong>Add Admin</strong></h5>
                                    <p className="mb-30">Business Partner Team Management Details</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="fname" value="First Name" required />
                                        <label for="fname">First Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="lname" value="Last Name" required />
                                        <label for="lname">Last Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="email" id="email" value="xyz@xyz.in" required />
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="address" value="Address" required />
                                        <label for="address">Address</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="city" value="City" required />
                                        <label for="city">City</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="state" value="State" required />
                                        <label for="state">State</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="country" value="Country" required />
                                        <label for="country">Country</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="number" id="zip" value="9887777" required />
                                        <label for="zip">Zip</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="driveLicense" value="" required />
                                        <label for="driveLicense">Driving License Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="email" id="emailAddress" value="" required />
                                        <label for="email">Email Address</label>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input type="text" id="pin" value="" required />
                                        <label for="pin">Personal Identification Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row btn-row">
                                <div className="col-sm-4 col-xs-12">
                                <button className="common-btn save"><span className="glyphicon glyphicon-send"></span> &nbsp;SAVE</button>
                                </div>
                                <div className="col-sm-8 col-xs-12">
                                    <div class="btn-group">
                                        <button className="common-btn"><span className="glyphicon glyphicon-circle-arrow-right"></span> &nbsp;NEXT</button>
                                        <button className="common-btn">PREVIOUS&nbsp;<span className="glyphicon glyphicon-circle-arrow-left"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}