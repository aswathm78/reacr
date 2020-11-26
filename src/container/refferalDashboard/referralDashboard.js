import React, { Component } from "react";
import Header from "../../Header/Header";
import ReferenceApplicationTrack from "../../../Components/ReferenceApplicationTrack/ReferenceApplicationTrack";
import * as actionTypes from "../../../store/action";
import { connect } from "react-redux";
class ReferralDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {    
    };    
  }

  goToProfile = () =>{
    if(this.props.user !== null){
    this.props.history.push('/customer-profile/referrals');
    }
    else{
      this.props.history.push("/customer/signin");
      this.props.onLoginTo("referral")
    }
  }
  
  render() {
    
       return (
      <div style={{display:'flex',flexDirection:'column'}}>
        <Header {...this.props} {...this.state} onChangeLanguage = {(args)=>this.props.onChangeLanguage(args)} onDestroySessionStorage = {()=>{this.props.onDestroySessionStorage()}} onScrollToContent = {this.props.onScrollToContent} onScrollToTop = {this.props.onScrollToTop}/>
        <ReferenceApplicationTrack {...this.props} onGoToProfile = {this.goToProfile}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginTo: (value) =>
      dispatch({ type: actionTypes.LOGIN_TO, payload: value }),
  };
};
export default connect(null, mapDispatchToProps)(ReferralDashboard);
