import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './loans.css'
import './product.css'
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import ReactSpeedometer from "react-d3-speedometer";
import Axios from 'axios'
import moment from 'moment'

import { connect } from "react-redux";
import {Row,Col} from 'react-bootstrap';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({


});
class loanfstsection extends Component {
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
        /// console.log(transcationdetails,'oauth/token')
        return (
            <div style={{margin:'2rem 0'}}>
                <div className="container loandashboardpadding">
                    {/* <div className="row"> */}
                        <div className="">
                            
                            <div className="card-body">
                            
                         
                            
                               
                            </div>
                        </div>


                        {/* <div className="secondsec"> */}
                        {/* <div className="row "> */}

                        {/* section start */}

                        <Row>


                            {/* <div className="col-sm-4"> */}
                            <Col xs={6} md={4} sm={6} style={{margin:'2rem 0'}}>
                                <div className="custom-border" style={{ "border-radius": "10px", "background-color": "#FFFFFF"}}>
                                    <div className="card-body">
                                        <div className="loanpaymentsummary">
                                        {this.props.lang == 'en'? 'Loan Payment Summary':'قرض کی ادائیگی کا خلاصہ'}
                                </div>


                                        <div className="loanpayable">
                                            <table>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Overdue':'حد سے زیادہ'}</td>
                                                    <td>{this.props.lang == 'en'? 'Date on 20/08/2020':'تاریخ 20/08/2020'}</td>
                                                    <td>${loanoverdue.totalOverdueAmt}</td>
                                                </tr>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Overdue charges':'واجب الادا چارجز'}  </td>
                                                    <td></td>
                                                    <td>${loanoverdue.chargesOverdue}</td>
                                                </tr>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Next EMI':'اگلا EMI'} </td>
                                                    <td>{this.props.lang == 'en'? 'Date on 20/09/2020':'تاریخ 20/09/2020'}</td>
                                                    <td>$50,000.00</td>
                                                </tr>

                                            </table>

                                        </div>

                                        <div className="upcomigpaynamt">
                                            <div className="upcomingpay">
                                            {this.props.lang == 'en'? 'Upcoming payment':'آنے والی ادائیگی'}
                                                </div>
                                            <div className="upcmingamt">
                                                $103,000.00
                                                </div>
                                        </div>


                                        <div className="totalamt">
                                            <table>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Total Loan Amount.':'قرض کی کل رقم۔'}</td>
                                                    <td></td>
                                                    <td>${loanoverdue.loanAmount}</td>
                                                </tr>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Total Paid EMI.':'کل ادا شدہ ای ایم آئی۔'}</td>
                                                    <td></td>
                                                    <td>${loanoverdue.emi}</td>
                                                </tr>

                                                <tr>
                                                    <td>{this.props.lang == 'en'? 'Balence due':'توازن'}  </td>
                                                    <td></td>
                                                    <td>$345,671.00</td>
                                                </tr>

                                            </table>

                                        </div>


                                    </div>
                                </div>

                                {/* </div> */}
                            </Col>

                            {/* <div className="col-sm-4"> */}
                            <Col xs={6} md={4} sm={6} style={{margin:'2rem 0'}}>
                                <div className="custom-border" style={{ "border-radius": "10px" }}>
                                    <div className="card-body">
                                        <div className="transcationhea">
                                        {this.props.lang == 'en'? 'Transcation History':'نقل و حمل کی تاریخ'} 
                                        </div>
                                        <div style={{ "display": "flex", "padding": "10px 20px" }}>
                                            <div style={{ "border-bottom": "1px solid", "font-weight": "bold", "font-size": "12px", "margin-left": "25px" }}>
                                            {this.props.lang == 'en'? 'Date':'تاریخ'} 
                                            </div>

                                            <div style={{ "border-bottom": "1px solid", "font-weight": "bold", "font-size": "12px", "margin-left": "25px" }}>
                                            {this.props.lang == 'en'? 'payment mode':'ادائیگی کا طریقہ'}
                                            </div>

                                            <div style={{ "border-bottom": "1px solid", "font-weight": "bold", "font-size": "12px", "margin-left": "25px" }}>
                                            {this.props.lang == 'en'? 'Amount':'رقم'}  
                                            </div>
                                        </div>

                                        <div >
                                            <table className="transcationhistorytable">

                                                {transcationdetails.length > 0 ? transcationdetails.map(result => (


                                                    <tr>


                                                        {/* <td>{moment.unix(result.paymentDate).format("DD/MM/YYYY")}</td> */}
                                                        <td>{moment(result.paymentDate).format("DD/MM/YYYY")}</td>
                                                        <td>{result.paymentMode}</td>
                                                        <td>{result.paymentAmount}</td>
                                                    </tr>
                                                )) : ''}







                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            {/* </div> */}

                            {/* <div className="col-sm-4"> */}
                            <Col xs={6} md={4} sm={6} style={{margin:'2rem 0'}}>
                                <div className="custom-border" style={{ "border-radius": "10px" }}>
                                    <div className="card-body">
                                        <div className="creditscore">
                                        {this.props.lang == 'en'? ' Credit score':'کریڈٹ اسکور'} 
                                            </div>
                                        <div  className="speedmeterstyle">
                                            <ReactSpeedometer 
                                                forceRender={true}
                                                needleHeightRatio={0.9}
                                                needleColor={"black"}
                                                needleTransition={"easeCircleInOut"}
                                                maxSegmentLabels={8}
                                                segments={8}
                                                customSegmentStops={[
                                                    100,
                                                    200,
                                                    300,
                                                    400,
                                                    500,
                                                    600,
                                                    700,
                                                    800,
                                                    900
                                                ]}
                                                minValue={100} //<---here
                                                maxValue={900} //<---here

                                                value={500}
                                                ringWidth={5}

                                                segmentColors={[
                                                    "grey"

                                                ]}
                                                width={220}
                                                height={230}
                                               
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* </div> */}
                            </Col>
                        </Row>
                        {/* --------------------------second section end -------------------------------*/}
                        {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

//export default loanfstsection;
export default connect(mapStateToProps, mapDispatchToProps)(loanfstsection);