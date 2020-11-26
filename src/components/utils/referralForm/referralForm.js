import React, { Component } from "react";
import { connect } from "react-redux";
class ReferralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl',width: "25%" }
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
    let yourName,yourEmail,yourPhone,submitButton;
    if(this.props.referralData){
      this.props.referralData.map(i=>{
        if(i.language === this.props.language){
        i.formlabel.item.map(j=>{
          if(j.name){
          yourName = j.name;
          }
          else if(j.email){
            yourEmail = j.email;
          }
          else if(j.phone){
            yourPhone = j.phone;
          }
          else{
            submitButton = j.submit;
          }
        })
        }
      })
    }
    return (
      <div class="row text-center">
        <form>
          <input type="text" placeholder={yourName} style={this.props.language === "ar" ? arabicStyleText :{ width: "25%" }} />
          <input
            type="text"
            placeholder={yourEmail}          
            style={this.props.language === "ar" ? arabicStyleText :{ width: "25%" }}
          />
          <input
            type="number"
            placeholder={yourPhone}
            style={this.props.language === "ar" ? arabicStyleText :{ width: "25%" }}

          />
          <button data-text={submitButton} class="btn btn-primary" style={this.props.language === "ar" ? arabicStyle : null}>
          {submitButton}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)( ReferralForm);
