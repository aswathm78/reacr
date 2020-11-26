import React, { Component } from 'react';
import './customerlogin.css'
import { Link } from 'react-router-dom'
class customerlogin extends Component {
     
    render() {
        console.log(this.props,"logindata")
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

                                    <div style={{ "padding-bottom": "39%" }}>
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
                                <div class="card cardstyle">
                                    <div class="card-body">
                                        <div className="logintxt">
                                            Login
                                      </div>
                                        <div className="login_input">
                                            <input type="text" placeholder="Enter Email id or Mobile Number" />
                                        </div>

                                        <div className="login_radiobtn">
                                            <Link to="/customerotp" className="customerpwdstyle">
                                                <label><input type="radio" style={{ "margin-right": "6px" }}
                                                />Send OTP</label>
                                            </Link>

                                            <Link to="/customerpwd" className="customerpwdstyle">
                                                <label><input type="radio" style={{ "margin-right": "6px" }}
                                                />I Have Password</label>
                                            </Link>




                                        </div>

                                        <div className="login_nextbtn">
                                            <button className="next_btnstyle">Next</button>
                                        </div>

                                        <div class="hr-sect">or</div>

                                        {/* <div className="login_socialmediabtn">
                                            <FacebookLogin />
                                            <GoogleLogin
                                                clientId="716649765723-dqev4n0sqhvf4g5e7bj6tujpi8s2mriq.apps.googleusercontent.com"
                                                buttonText=""
                                                onSuccess={this.responseGoogle}
                                                onFailure={this.responseGoogle}
                                                cookiePolicy={"single_host_origin"}
                                                render={(renderProps) => (
                                                    <button
                                                        style={{ backgroundColor: "white" }}
                                                        onClick={renderProps.onClick}
                                                        disabled={renderProps.disabled}
                                                    >
                                                        <i class="fab fa-google-plus-g fa-2x" style={{ "color": "red" }}></i>
                                                    </button>
                                                )}
                                            />
                                           <div className="fab fa-linkedin-in fa-2x" style={{ "color": "#1976d2" }} ></div>
                                         

                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        );
    }
}

export default customerlogin;