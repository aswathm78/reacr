import React, { Component } from 'react';

class servicerequest extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="container settingpgpadding">
                    <div className="row">
                        <div className="card settingstyle">
                            <div className="card-body">
                                <div className="service_heading">
                                    Service request
                                </div>
                                <div className="servicerequest_list">
                                    <ul>
                                        <li>Change Request for Address.</li>
                                        <li>Change Request for Phone Number.</li>
                                        <li>Request for statement of Account.</li>
                                        <li>Status enquiry.</li>
                                        <li>Find Transations.</li>
                                        <li>Shedule Transations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default servicerequest;