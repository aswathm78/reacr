import React, { Component } from 'react';
import './beneficiaries.css';
import { connect } from "react-redux";
import { beneficiaryDetails } from "../../store/action";
import * as actionTypes from "../../store/action";
import Axios from 'axios';
import config from '../../assets/config/config';

// const mapStateToProps = state => ({

// });

// const mapDispatchToProps = dispatch => ({



// });
class beneficiaries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            beneficiariesdetails: []
        }
    }
    async componentDidMount() {



        await this.props.beneficiaryDetails()
        Axios
            .get(config.STRAPI_URL + '/beneficiaries')
            .then(res => {
                this.setState({ beneficiariesdetails: res.data })
                //console.log('beneficiariesdetails', this.state.beneficiariesdetails)
            })

    }

    render() {

        //console.log('beneficiariesdetailsdata', this.state.beneficiariesdetails)
        let beneficiariesData = this.props.reducer.beneficiariesdata ? this.props.reducer.beneficiariesdata : []
        let DisbursementData = this.props.reducer.DisbursementData ? this.props.reducer.DisbursementData : []
        // console.log(beneficiariesData, 'beneficiariesData')
        let beneficiariesDetails = this.state.beneficiariesdetails ? this.state.beneficiariesdetails : ''

        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let beneficiaryNumber, beneficiaryName, beneficiarydescription, beneficiaryAccountType, beneficiaryMobileNumber, beneficiaryBank, maximumLimitToTransfer, beneficiaryheading, savebtn, submitbtn
        if (beneficiariesDetails) {


            beneficiariesDetails.map((b, index) => {

                if (b.Lang == window.sessionStorage.getItem('language')) {

                    beneficiaryNumber = b.beneficiaryNumber;
                    beneficiaryName = b.BeneficiaryName;
                    beneficiarydescription = b.BeneficiaryDescription;
                    beneficiaryAccountType = b.BeneficiaryAccountType;
                    beneficiaryMobileNumber = b.BeneficiaryMobileNumber;
                    beneficiaryBank = b.BeneficiaryBank;
                    maximumLimitToTransfer = b.MaximumLimitToTransfer
                    beneficiaryheading = b.beneficiaryheading;
                    savebtn = b.savedata;
                    submitbtn = b.submit



                }

            })


        }
        return (
            <div>
                <div className="backgroundstyling">
                    <h3 style={{ "color": "#ffff", "padding-left": "25px", "font-weight": "bold" }}>{beneficiaryheading}</h3>
                </div>
                <div class="container reapymentstyling">
                    <div class="row">

                        {/*--------- First section------- */}

                        <div className="col-sm-12 dfs_topstyling">

                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiaryNumber}</label>
                                <input type="text" value={beneficiariesData[0] ? beneficiariesData[0].beneficiaryNo : ''} />
                            </div>

                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiaryName}</label>
                                <input type="text" value={DisbursementData[0] ? DisbursementData[0].beneficiaryName : ''} />
                            </div>



                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiarydescription}</label>
                                <input type="text" value={beneficiariesData[0] ? beneficiariesData[0].beneficiaryDescription : ''} />
                            </div>



                        </div>


                        {/*--------- First section end------- */}


                        {/*--------------- second section ----------- */}

                        <div className="col-sm-12 dfs_topstyling">
                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiaryAccountType}</label>
                                <input type="text" />
                            </div>


                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiaryMobileNumber}</label>
                                <input type="text" />
                            </div>

                            <div className="col-sm-4 dfs_reapyment">
                                <label>{beneficiaryBank}</label>
                                <input type="text" value={beneficiariesData[0] ? beneficiariesData[0].beneficiaryBank : ''} />
                            </div>
                        </div>



                        {/*--------------- second section  end----------- */}


                        {/*--------------- thired section ----------- */}

                        <div className="col-sm-12 dfs_topstyling">
                            <div className="col-sm-4 dfs_reapyment">
                                <label>{maximumLimitToTransfer}</label>
                                <select>
                                    <option>select</option>
                                </select>
                            </div>

                            <div className="col-sm-4 dfs_reapyment">
                            </div>

                            <div className="col-sm-4 dfs_reapyment">
                            </div>
                        </div>

                        {/*--------------- thired section  end----------- */}


                    </div>
                    <div  className="dfs-save-submitbtn">
                        <div   className="basic_save">
                            <button style={{paddingBottom:'10px',paddingTop:'10px',"border-radius":'5px'}} className="basicforbtn">{savebtn}</button>
                        </div>
                        <div className="basic_submit">
                            <button style={{paddingBottom:'10px',paddingTop:'10px', "border-radius":'5px'}} className="basicforbtn">{submitbtn}</button>
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
        beneficiaryDetails: () => dispatch(beneficiaryDetails()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(beneficiaries);