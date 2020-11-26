import React, { Component } from 'react';
import './referral.css'
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import Axios from 'axios';
import config from '../../assets/config/config';

class applyreferralcode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dashboardReferral:[]
        }
    }
    componentDidMount()
    {
       Axios
       .get(config.STRAPI_URL + '/dashboard-referrals')
       .then(res => {
 
         this.setState({ dashboardReferral: res.data })
 
       })

    }
   
    render() {
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let ApplyReferedCode,REFERALCODE
        if (this.state.dashboardReferral) {
            this.state.dashboardReferral.map((r, index) => {
                if (r.lang == window.sessionStorage.getItem('language')) {
                    ApplyReferedCode=r.ApplyReferedCode;
                    REFERALCODE=r.Referalcode;




                }
            })
        }

        
        return (
            <div>
                <div className="container referralstyle">
                    <div className="row">
                      <div className="card" style={{"border-radius":"10px"}}>
                          <div className="card-body">
                              <div className="applyreferralcodeheading">
                              {ApplyReferedCode}
                              </div>
                              <div className="codefield">
                                <div className="codeinput">
                                    <input type="text" placeholder={REFERALCODE}/>
                                </div>
                                <div className="codebutton">
                                    <button className="codebtn">Apply</button>
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
        language: state.reducer.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (value) =>
            dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(applyreferralcode);;