import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head'
import SideNav from './sideNav'
export default class OwnerVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="rtl-css">
                <div className="container-fluid owner-verification">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <SideNav />
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12 verification-panel">
                            <div class="card">
                                <div class="card-body">
                                    <h5 className="common-h5"><strong>Owner Verification</strong></h5>
                                    <div class="input-wrapper">
                                        <input type="text" id="user" required />
                                        <label for="user">Username</label>
                                    </div>
                                    <div class="input-wrapper">
                                        <input type="password" required />
                                        <label for="user">Password</label>
                                    </div>
                                    <button className="common-btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}