import React, { Component } from 'react'
import './loans.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import ReactSpeedometer from "react-d3-speedometer";
import Axios from 'axios'
import moment from 'moment'

import { connect } from "react-redux";
import {Row,Col} from 'react-bootstrap';
const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({


});
 class activeLoan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loanoverview: [],
            loanoverdue: [],
            transcationdetails: [],
            loanaccount: []
        }
    }

    render() {
        const percentage = 66;

        let loanoverview = this.props.reducer.loanoverview ? this.props.reducer.loanoverview : []
        let loanoverdue = this.props.reducer.loanoverdue ? this.props.reducer.loanoverdue : []
        let transcationdetails = this.props.reducer.transcationdetails ? this.props.reducer.transcationdetails : []
        return (
            <div>
                <div className="container loandashboardpadding">
                    <div className="row">
                        <div className="carc">

                            <div className="card-body">
                            <div className="row" style={{ "margin": "1%" }}>
                                    <div className="col-sm-3">
                                        <div className="">
                                            <div className="circularprogreebarstyle">
                                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                            </div>
                                        </div>
                                    </div>


                                    {/* ----------------------Section section ----------------*/}
                                    <div className="col-sm-4">
                                        <div className="card loanoverviewstyle">
                                            <div className="card-body">
                                                <div className="loanoverview">
                                                    LOAN OVERVIEW
                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-xs-6">
                                                        <div className="totallaonamt">
                                                            Total loan Amount
                                        </div>

                                                        <div className="totalpaid">
                                                            Total paid EMI
                                        </div>

                                                        <div className="interestpaid">
                                                            Interest paid
                                        </div>


                                                        <div className="tenure">
                                                            Tenure
                                        </div>

                                                    </div>

                                                    <div className="col-sm-6 col-xs-6">
                                                        <div className="loanamt">
                                                            ${loanoverview.loanAmount}
                                                        </div>
                                                        <div className="loanamt">
                                                            ${loanoverview.emi}
                                                        </div>

                                                        <div className="loanamt">
                                                            ${loanoverview.interestPaid}
                                                        </div>

                                                        <div className="loanamt">
                                                            {loanoverview.tenure}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*------------------- Third section --------------------- */}
                                    <div className="col-sm-5">
                                        <div className=" loanaccountstyling">

                                            <div className="">
                                                <div className="loanaccount">
                                                    Loan  Account
                                    </div>

                                                <div className="acctpadding">

                                                    <div style={{ "font-size": "12px", "letterSpacing": "8px" }}>
                                                        XXXX  XXXX  XXXX {loanoverview.loanId}
                                                    </div>
                                                    <div style={{ "font-size": "12px", "padding-top": "12px" }}>
                                                        {loanoverview.applicantName}
                                                    </div>
                                                </div>




                                                <div className="validatedate">

                                                    <div className="">
                                                        <div style={{ "font-size": "12px" }}>
                                                            Valid from
                                                </div>
                                                        <div style={{ "font-size": "12px" }}>
                                                            02/22
                                                </div>
                                                    </div>



                                                    <div style={{ "margin-left": "18%" }}>
                                                        <div style={{ "font-size": "12px" }}>
                                                            Valid thru
                                                </div>
                                                        <div style={{ "font-size": "12px" }}>
                                                            02/27
                                                </div>
                                                    </div>



                                                </div>

                                                <div className="acctpadding" style={{ "font-size": "14px", "padding-top": "12px", "letterSpacing": "5px" }}>
                                                    {loanoverview.loanNumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(activeLoan)