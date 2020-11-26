import React, { Component } from 'react';

import './customerlogin.css'
class loginpassword extends Component {
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
                                        <div className="pwd_input">
                                            <input type="text" placeholder="Enter Password" />
                                        </div>

                                      

                                        <div className="customerpwd_nextbtn">
                                            <button className="customerpwd_btnstyle">Next</button>
                                        </div>
                                        <div className="customerpwd_forgetpwd">
                                        <a href="#"> Forgot password</a>    
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

export default loginpassword;