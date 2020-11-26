import React, { Component } from 'react';
import './apply.css'
class documentrequired extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="container applynowpadding">
                    <div className="row">
                        <div className="card" style={{ "border-radius": "10px" }}>
                            <div className="card-body">
                                <div className="document_heading">
                                    Documents Required
                               </div>
                                <div className="document_txt">
                                    The document requirements for business loans are minimum, all you have to do is just hand over the following documents to our representative who comes right at
                                    <div className="documentrequired_list">
                                    your doorstep to collect them:
                                    <div className="documentrequired_list_type">
                                        <ul>
                                            <li>Passport-sized photograph</li>
                                            <li>KYC documents</li>
                                            <li>Business proof: Certificate of business existence</li>
                                            <li> Relevant Financial documents</li>
                                            <li> Bank account statement of the last month</li>
                                        </ul>
                                    </div>
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

export default documentrequired;