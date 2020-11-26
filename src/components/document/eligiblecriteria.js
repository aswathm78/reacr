import React, { Component } from 'react';
import './apply.css'
class eligiblecriteria extends Component {
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
                        <div className="card eligiblestyle">
                            <div className="card-body">
                                <div className="eligible_heading">
                                    Eligible criteria
                                </div>
                                <div className="eligible_txt">
                                Qualifying for a business loan from Bajaj Finserv is simple. You just need to fulfil the following criteria to avail the benefits of the loan: 
                                </div>
                                <div className="eligible_condition">
                                    <ul>
                                        <li>You should be between the age of 25-55 years</li>
                                        <li>Your business should have a vintage of at least 3 years</li>
                                        <li>Your business should have its Income Tax returns filed for at least the past 1 year</li>
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

export default eligiblecriteria;