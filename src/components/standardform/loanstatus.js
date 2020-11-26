import React, { Component } from 'react';
import './standardform.css';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
class loanstatus extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : [];
    let Loanstatus =  this.props.lonaUserInfo ? this.props.lonaUserInfo:[]
    const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' };
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' };
    let applicationnumber, underwritterdecision, rejectionremarks, save, submit;
    if (loaninformationdetails) {
      loaninformationdetails.map((b, index) => {
        if (b.lang == window.sessionStorage.getItem('language')) {
          applicationnumber = b.applicationnumber;
          underwritterdecision = b.underwritterdecision;
          rejectionremarks = b.rejectionremarks;
          save = window.sessionStorage.getItem('language') == 'en'? 'Save':'????? ????'
          submit = window.sessionStorage.getItem('language') == 'en'?'Submit':'??? ??????';
        }
        return null;
      });
    }
    return (
      <div className="custom-border py-4">
        <div className="container standardpadding ">
          <div className="row">
            <div className="defLoan_padding">
              <div className="def_inputfields">
                <label>{applicationnumber}</label>
                <input type="text" required value={Loanstatus.ApplicationNumber} />
              </div>

              <div className="def_inputfields">
                <label>Loan Id number</label>
                <input type="text" required value={Loanstatus.LoanIdNumber} />
              </div>

              <div className="def_inputfields">
                <label>Underwriterdecision</label>
                <input type="text" required value={Loanstatus.underwritterDecision} />
              </div>

              <div className="def_inputfields">
                <label>{rejectionremarks}</label>
                <input type="text" required value={Loanstatus.RejectionRemarks} />
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
const mapStateToProps = state => {
  return {
    ...state,
    language: state.reducer.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguage: value => dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loanstatus);
