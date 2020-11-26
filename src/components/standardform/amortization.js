import React, { Component } from 'react';
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import './standardform.css'
class amortization extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : []
        let loanamount,AED,loanInterest,term,yr,startdate,calculator,monthlypayment
  
        if (loaninformationdetails) {
          loaninformationdetails.map((b, index) => {
              if (b.lang == window.sessionStorage.getItem('language')) {
                loanamount=b.loanamount;
                AED=b.AED;
                loanInterest=b.loanInterest;
                term= b.term;
                yr=b.yr;
                startdate=b.startdate;
                calculator=b.calculator
                monthlypayment=b.monthlypayment
  
  
              }
          })
      }
        return (
            <div>
                <div className="container standardpadding custom-border">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="dfs_amortizationstyle">
                                            <div class="dfs_fontstyling">
                                            Loan Amount
                                            </div>

                                            <div className="dfs_amortizationinput">
                                            <div class="input-group">
                                            <span class="input-group-addon">AED</span>
                                            <input  class="form-control" />
                                        </div>

                                            </div>
                                 </div>

                                 {/* ------------------terms--------------------- */}
                                 <div className="dfs_termstyle">
                                            <div className="dfs_fontstyling">
                                            Term
                                            </div>

                                            <div className="dfs_amortizationinput">
                                            <div class="input-group">
                                           
                                            <input  class="form-control" />
                                            <span class="input-group-addon">YR</span>
                                        </div>

                                            </div>
                                 </div>

                                    </div>

                                    <div className="col-sm-6">
                                    <div className="dfs_amortizationstyle">
                                            <div class="dfs_fontstyling">
                                            Loan Interest
                                            </div>

                                            <div className="dfs_amortizationinput">
                                            <div class="input-group">
                                           
                                            <input  class="form-control" />
                                            <span class="input-group-addon">%</span>
                                        </div>

                                            </div>
                                 </div>

                                 <div className="statdatastyling">
                                            <div class="dfs_fontstyling">
                                            Start Date
                                            </div>

                                            <div className="dfs_amortizationinput">
                                            <div class="input-group">
                                           
                                            <input  class="form-control"  type="date"/>
                                            {/* <span class="input-group-addon">YR</span> */}
                                        </div>

                                            </div>
                                 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="calculatorbutton">
                        
                        <div className="basic_submit">
                            <button className="basicforbtn">Calculate</button>
                        </div>
                    </div>
                        </div>

                        {/*----------------------------- First section close --------------------------*/}

                        <div className="card">
                            <div className="card-body">
                                <div className="dfs_aedstyling">
                                <div>
                                AED 1,060.66
                                </div>
                                <div>
                                Monthly Payment
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

const mapStateToProps = (state) => {
    return {
        ...state,
        language: state.reducer.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (value) =>
            dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(amortization);