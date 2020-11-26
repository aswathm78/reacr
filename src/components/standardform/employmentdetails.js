import React, { Component } from 'react';
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import './standardform.css'
class checkfield extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : []
        let employmentdetails= this.props.lonaUserInfo ?this.props.lonaUserInfo:[]
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let age, residentstatus, nationality, gender, maritalstatus, noofdependents,

            employmenttype,
            nameofestablishment, profession, designation, numberofyearsinbusiness, employername, sector, dateofjoining, noofyearsofemployment, placeofissue, addresstype, tenure, requestedamount, purposeoffinance, sourcingtype, sourcingoffice, totaldownpaymentamount, obligationmonthly, assetprice,save,submit

        if (loaninformationdetails) {
            loaninformationdetails.map((b, index) => {
                if (b.lang == window.sessionStorage.getItem('language')) {
                    age = b.age;
                    residentstatus = b.residentstatus;
                    nationality = b.nationality;
                    gender = b.gender;
                    maritalstatus = b.maritalstatus;
                    noofdependents = b.noofdependents;

                    employmenttype = b.employmenttype;
                    nameofestablishment = b.nameofestablishment;
                    profession = b.profession;
                    designation = b.designation;
                    numberofyearsinbusiness = b.numberofyearsinbusiness;
                    employername = b.employername;
                    sector = b.sector;
                    dateofjoining = b.dateofjoining;
                    noofyearsofemployment = b.noofyearsofemployment;
                    placeofissue = b.placeofissue;
                    addresstype = b.addresstype;
                    tenure = b.tenure;
                    requestedamount = b.requestedamount;
                    purposeoffinance = b.purposeoffinance;
                    sourcingtype = b.sourcingtype;
                    sourcingoffice = b.sourcingoffice;
                    totaldownpaymentamount = b.totaldownpaymentamount
                    obligationmonthly = b.obligationmonthly;
                    assetprice = b.assetprice;
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
                            <div className="col-sm-3 l-applynow ">
                                <label>{age}</label>
                                <input type="date" name="dob" required aria-required="true" />


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>Residental Status</label>
                                <input type="text" />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{nationality}</label>
                                <input type="text" value={employmentdetails.nationality}/>
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{gender}</label>
                                <input type="text" value={employmentdetails.gender}/>
                            </div>
                        </div>


                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{maritalstatus}</label>
                                <input type="text" value={employmentdetails.martialstatus} />


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>{noofdependents}</label>
                                <input type="text" value={employmentdetails.NumberofDependents} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{employmenttype}</label>
                                <input type="text" value={employmentdetails.EmploymentType} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{nameofestablishment}</label>
                                <input type="text" value={employmentdetails.NameofEstablishment}/>
                            </div>
                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{profession}</label>
                                <input type="text" value={employmentdetails.Profession}/>


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>{designation}</label>
                                <input type="text" value={employmentdetails.Designation}/>
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{numberofyearsinbusiness}</label>
                                <input type="text" value={employmentdetails.Numberofyearsinbusiness}/>
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{employername}</label>
                                <input type="text" value={employmentdetails.EmployerName}/>
                            </div>
                        </div>




                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{sector}</label>
                                <input type="text" value={employmentdetails.Sector}/>


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>{dateofjoining}</label>
                                <input type="date" value={employmentdetails.dateofjoining} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>No. of Years Employment</label>
                                <input type="text" value={employmentdetails.NOofyearsofEmpoloyment} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{placeofissue}</label>
                                <input type="text" value={employmentdetails.placeofissue}/>
                            </div>
                        </div>



                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{addresstype}</label>
                                <input type="text" value={employmentdetails.Addresstype}/>


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>Occupancy Status</label>
                                <input type="text" value={employmentdetails.Occupancystatus}/>
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>Income (Monthly)</label>
                                <input type="text" value={employmentdetails.Income} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{obligationmonthly}</label>
                                <input type="text" value={employmentdetails.Obligation} />
                            </div>
                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{assetprice}</label>
                                <input type="text" value={employmentdetails.AssetPrice} />


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>{tenure}</label>
                                <input type="text" value={employmentdetails.Tenure} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{requestedamount}</label>
                                <input type="text" value={employmentdetails.RequestedAmount}/>
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{purposeoffinance}</label>
                                <input type="text" value={employmentdetails.purposeofFinance}/>
                            </div>
                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-3 l-applynow ">
                                <label>{sourcingtype}</label>
                                <input type="text" value={employmentdetails.SourcingType}/>


                            </div>
                            <div className="col-sm-3 l-applynow">
                                <label>Sourcing Staff</label>
                                <input type="text" value={employmentdetails.SourcingStaff} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{sourcingoffice}</label>
                                <input type="text" value={employmentdetails.SourcingOffice} />
                            </div>
                            <div className="col-sm-3 l-applynow">

                                <label>{totaldownpaymentamount}</label>
                                <input type="text" value={employmentdetails.TotalDownPaymentAmount}  />
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
export default connect(mapStateToProps, mapDispatchToProps)(checkfield);