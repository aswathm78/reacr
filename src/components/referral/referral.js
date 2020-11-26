import React, { Component } from 'react';
import './referral.css'
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import Axios from 'axios';
import config from '../../assets/config/config';

class referral extends Component {
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
        //console.log(this.state.dashboardReferral,'referaldata')
        
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let refer,name,referalcodetxt,avail,availPpoint1,availPpoint2,availPpoint3,eligibleforcashtxt,fullname,emailId,phoneNumber,condition,
        condition1,condition2,condition3,condition4,condition5,condition6,cashbacktxt,couponcodevalid,offertext
        if(this.state.dashboardReferral)
        {
            this.state.dashboardReferral.map((r,index)=>{
                if (r.Lang == window.sessionStorage.getItem('language'))
                {
                    refer=r.refer;
                    
                    name=r.name;
                    referalcodetxt=r.referalcodetxt;
                    avail=r.avail;
                    availPpoint1=r.availPpoint1;
                    availPpoint2=r.availPpoint2;
                    availPpoint3=r.availPpoint3;
                    eligibleforcashtxt=r.eligibleforcashtxt;
                    fullname=r.fullname;
                    emailId=r.emailtxt;
                    phoneNumber = r.phoneNumber;
                    condition=r.condition;
                    condition1=r.condition1;
                    condition2=r.condition2;
                    condition3=r.condition3;
                    condition4=r.condition4;
                    condition5=r.condition5;
                    condition6=r.condition6;
                    cashbacktxt=r.cashbacktxt;
                    couponcodevalid=r.couponcodevalid;
                    offertext=r.offertext;




                }
            })
        }
        return (
            <div>
                <div className="container referralstyle">
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <div className="referral_heading">
                                    {refer}
                            </div>
                            <div className="referral_alltext">
                                    <div className="referral_name">
                                        {name}
                                </div>
                                    <div className="referral_cashback">
                                       {referalcodetxt}
                                </div>
                                    <div className="referralcode">
                                        SHAI118
                                </div>
                                </div>
                                    <div className="referral_avail">
                                        {avail}
                                </div>
                                
                                    <div className="referral_alltext">
                                        <div class="list-wrapper">

                                            <div class="red-line"></div>

                                            <div class="list-item-wrapper">
                                                <div class="list-bullet">1
                                               
                                                </div>
                                                
                                                
                                                <div class="list-item">
                                                    <div class="list-title">
                                                        {availPpoint1}
                                                    </div>
                                                 
                                                </div>
                                            </div>

                                            <div class="list-item-wrapper">
                                                <div class="list-bullet">2</div>
                                            
                                                <div class="list-item">
                                                    
                                                    <div class="list-title">
                                                        {availPpoint2}
                                                    </div>
                                                  
                                                </div>
                                            </div>

                                            <div class="list-item-wrapper">
                                                <div class="list-bullet">3</div>
                                                <div class="list-item">
                                                    <div class="list-title">
                                                        {availPpoint3}
                                                    </div>
                                                   
                                                </div>
                                                <div class="white-line"></div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="referral_eligiblecash">
                                    {eligibleforcashtxt}
                                    </div>

                                <div className="referral_inputfield">

                               
                                    <div className="row applycolpadding">
                            <div className="col-sm-6 l-applynow">
                                <input type="text" placeholder={fullname} />
                            </div>
                            <div className="col-sm-6 l-applynow">
                                <input type="text" placeholder={emailId} />
                            </div>
                         
                        </div>

                        <div className="row applycolpadding">
                            <div className="col-sm-6 l-applynow">
                                <input type="text" placeholder={phoneNumber} />
                            </div>
                            <div className="col-sm-6 l-applynow">
                                
                            </div>
                         
                        </div>
                        </div>

                        <div className="referral_style">
                            <button className="offline_btn referbtninref" data-toggle="modal" data-target="#exampleModal">Refer Now</button>
                        </div>
                        
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        
        
      </div>
      <div class="modal-body">
       <div className="referearn"> {refer}</div>
       <div className="cashbackspace">
       <div className="cashback_amountpadding">
           <div className="cashback">
               {cashbacktxt}
           </div>

           <div className="cashbackamount">
              1000.00
           </div>
           

       </div>
       <div className="offertext">
      {offertext}
       </div>
       </div>

      <div className="coupan">
      <div style={{"font-size":"12px","padding":"0px 25px"}}>
      {couponcodevalid}
      </div>
      <div className="cashbackrefer">
                            <button className="offline_btn referbtninref" data-toggle="modal" data-target="#exampleModal">Refer Now</button>
                        </div>
      </div>
     



      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
                        <div className="referral_term">
                        {condition}
                        </div>

                        <div className="termandconditionlist">
                            <ul>
                                <li> {condition1}</li>
                                <li> {condition2}</li>
                                <li>{condition3}</li>
                                <li>{condition4}</li>
                                <li>{condition5}</li>
    <li>{condition6}</li>
                            </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(referral);

