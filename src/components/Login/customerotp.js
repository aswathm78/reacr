import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './customerlogin.css'
class customerotp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                 <div className="container-fluid login_backimg">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                                <div className="login_content">

                                    <div className="login_heading">
                                        Welcome to Maalem
                            </div>
                                    <div className="login_subheading">
                                        Login to get your finace
                            </div>


                                </div>

                                <div className="col-sm-12">

                                    <div className="login_loan">
                                        <div className="col-sm-6">

                                            <div className="col-sm-12">
                                                Auto Loan
                                            </div>

                                            <div className="col-sm-12">
                                                Commercial Loan
                                            </div>


                                        </div>
                                    </div>

                                    <div style={{ "padding-bottom": "38%" }}>
                                        <div className="login_loan">
                                            <div className="col-sm-6">
                                                <div className="col-sm-12">
                                                    Consumer Loan
                                            </div>

                                                <div className="col-sm-12">
                                                    SME Loan
                                            </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                            {/*--------------- rightside ---------------------*/}
                            <div className="col-sm-6">
                            <div class="card customerpwd_cardstyle">
                                    <div class="card-body">
                                        <div className="logintxt">
                                            Login
                                      </div>
                                      <div className="customerotp_radiobtn">
                                        <Link to="/customerresendotp" className="customerpwdstyle">
                                            <label><input type="radio" style={{ "margin-right": "6px" }}
                                            />Send OTP on mobile no</label>
                                           </Link>

                                            <Link to="/customerresendotp" className="customerpwdstyle">
                                            <label><input type="radio" style={{ "margin-right": "6px"}}
                                            />Send OTP on Email Id</label>
                                            </Link>




                                        </div>

                                      

                                        <div className="customerotp_nextbtn">
                                            <button className="customerotp_btnstyle">Next</button>
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

export default customerotp;