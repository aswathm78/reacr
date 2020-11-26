import React, { Component } from 'react';
import './standardform.css'
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";

class personaldetails extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : []
        let LoandetailsData = this.props.lonaUserInfo ? this.props.lonaUserInfo:[]
        console.log(LoandetailsData,'fdsfsd')
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let cifid, applicantname, customerid, loanstatus, loantype, loandescription, existingloannumbers, totalloanamount, currentapplicationnumber,
            matchedapplicationnumbers, matchedapplicantname, matchedapplicantidnumber, matchedapplicantidtype, matchedappplicationstage, matchedappplicationproduct, matchedappplicationscheme, matchedappplicationsourcingstaff, matchedappplicationsourcingtype, matchedappplicationbranch, duplicatedecision, remarks, matchedappplicationsubproduct, save, submit

        if (loaninformationdetails) {
            loaninformationdetails.map((b, index) => {
                if (b.lang == window.sessionStorage.getItem('language')) {
                    cifid = b.cifid;
                    applicantname = b.applicantname;
                    customerid = b.customerid;
                    loanstatus = b.loanstatus;
                    loantype = b.loantype;
                    loandescription = b.loandescription;
                    existingloannumbers = b.existingloannumbers;
                    totalloanamount = b.totalloanamount;
                    currentapplicationnumber = b.currentapplicationnumber;
                    matchedapplicationnumbers = b.matchedapplicationnumbers;
                    matchedapplicantname = b.matchedapplicantname;
                    matchedapplicantidnumber = b.matchedapplicantidnumber;
                    matchedapplicantidtype = b.matchedapplicantidtype;
                    matchedappplicationstage = b.matchedappplicationstage;
                    matchedappplicationproduct = b.matchedappplicationproduct;
                    matchedappplicationscheme = b.matchedappplicationscheme;
                    matchedappplicationsourcingstaff = b.matchedappplicationsourcingstaff;
                    matchedappplicationsourcingtype = b.matchedappplicationsourcingtype;
                    matchedappplicationbranch = b.matchedappplicationbranch;
                    duplicatedecision = b.duplicatedecision;
                    remarks = b.remarks
                    matchedappplicationsubproduct = b.matchedappplicationsubproduct;
                    save = window.sessionStorage.getItem('language') == 'en'? 'Save':'????? ????'
                    submit = window.sessionStorage.getItem('language') == 'en'?'Submit':'??? ??????';


                }
            })
        }
        return (
            <div>
                <div className="container standardpadding custom-border">
                    <div className="row">

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal ">
                                <label>{cifid}</label>
                                <input type="text" value={LoandetailsData.CifId} />

                            </div>
                            <div className="col-sm-4 cupersonal">

                                <label>{applicantname}</label>
                                <input type="text" value={LoandetailsData.ApplicationName}/>



                            </div>
                            <div className="col-sm-4 cupersonal">

                                <label>{customerid}</label>
                                <input type="text" value={LoandetailsData.CustomerId} />
                            </div>

                        </div>



                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal ">
                                <label>{loanstatus}</label>
                                <input type="text" value={LoandetailsData.loanstatus}/>

                            </div>
                            <div className="col-sm-4 cupersonal">

                                <label>{loantype}</label>
                                <input type="text" value={LoandetailsData.LoanType}/>



                            </div>
                            <div className="col-sm-4 cupersonal">

                                <label>{loandescription}</label>
                                <input type="text" value={LoandetailsData.LoanDescription} />
                            </div>

                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal ">


                                <label>{existingloannumbers}</label>
                                <input type="text" value={LoandetailsData.LoanNumber} />

                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{totalloanamount}</label>
                                <input type="text" value={LoandetailsData.TotalLoanAmount} />
                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{currentapplicationnumber}</label>
                                <input type="text" value={LoandetailsData.CurrentApplicationNumber}/>

                            </div>

                        </div>


                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal">

                                <label>{matchedapplicationnumbers}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationNumber} />
                            </div>


                            <div className="col-sm-4 cupersonal ">


                                <label>{matchedapplicantname}</label>
                                <input type="text" value={LoandetailsData.matchedapplicantname}/>

                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{matchedapplicantidnumber}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationIDNumber}/>
                            </div>

                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal">

                                <label>{matchedapplicantidtype}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationIDType} />
                            </div>


                            <div className="col-sm-4 cupersonal ">


                                <label>{matchedappplicationstage}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationState}/>

                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{matchedappplicationproduct}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationProduct}/>
                            </div>

                        </div>

                        <div className="col-sm-12 applycolpadding">
                        <div className="col-sm-4 cupersonal">

                        <label>{remarks}</label>
                        <input type="text" value={LoandetailsData.Remark} />
                    </div>


                            <div className="col-sm-4 cupersonal ">


                                <label>{matchedappplicationscheme}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationScheme}/>

                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{matchedappplicationsourcingstaff}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationSourcingstaff}/>
                            </div>

                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 cupersonal">

                                <label>{matchedappplicationsourcingtype}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationSourcingType}/>
                            </div>


                            <div className="col-sm-4 cupersonal ">


                                <label>{matchedappplicationbranch}</label>
                                <input type="text" value={LoandetailsData.MatchedApplicationBrach}/>

                            </div>
                            <div className="col-sm-4 cupersonal">
                                <label>{duplicatedecision}</label>
                                <input type="text" value={LoandetailsData.DuplicateDesicion}/>
                            </div>

                        </div>

                        <div className="col-sm-12 applycolpadding">
                            

                            <div className="col-sm-4 cupersonal ">




                            </div>
                            <div className="col-sm-4 cupersonal">


                            </div>

                        </div>



                    </div>
                    <div className="dfs-save-submitbtn">
                        <div  style={{marginBottom:'5px'}} className="basic_save">
                            <button  style={{paddingBottom:'10px',paddingTop:'10px',"border-radius":'5px'}}  className="basicforbtn">{save}</button>
                        </div>
                        <div  style={{marginRight:'25px',marginBottom:'5px'}} className="basic_submit">
                            <button style={{paddingBottom:'10px',paddingTop:'10px', "border-radius":'5px'}} className="basicforbtn">{submit}</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(personaldetails);

