import React, { Component } from 'react';
import './standardform.css';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';

class applyonline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : [];
    //  console.log(loaninformationdetails,'basic info page')
    let yakeendetails = this.props.lonaUserInfo ? this.props.lonaUserInfo : [];
    console.log(yakeendetails, '000 ---yakeendetails');
    const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' };
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' };
    let title,
      firstName,
      middlename,
      thirdname,
      familyname,
      identitynumber,
      dateofissue,
      dateofexpiry,
      mobilenumber,
      emailaddress,
      customertype,
      selectproduct,
      subproducts,
      profitRate,
      Profitindicator,
      IdentityType,
      save,
      submit;
    if (loaninformationdetails) {
      loaninformationdetails.map((b, index) => {
        if (b.lang == window.sessionStorage.getItem('language')) {
          title = b.title;
          firstName = b.firstname;
          middlename = b.middlename;
          thirdname = b.thirdname;
          familyname = b.familyname;
          IdentityType = b.identitytype;
          identitynumber = b.identitynumber;
          dateofissue = b.dateofissue;
          dateofexpiry = b.dateofexpiry;
          mobilenumber = b.mobilenumber;
          emailaddress = b.emailaddress;
          customertype = b.customertype;
          selectproduct = b.selectproducts;
          subproducts = b.subproducts;
          profitRate = b.profitrate;
          Profitindicator = b.profitindicator;
          // save = b.savedata;
          // submit = b.submit;
          save = window.sessionStorage.getItem('language') == 'en' ? 'Save' : '????? ????';
          submit = window.sessionStorage.getItem('language') == 'en' ? 'Submit' : '??? ??????';
        }
      });
    }
    return (
      <div>
        <div className="container standardpadding custom-border">
          <div className="row">
            <div className="col-sm-12 applycolpadding">
              <div className="col-sm-3 l-applynow ">
                {/* <input type="text" placeholder="Title" /> */}

                <label>{title}</label>
                <select>
                  <option value="Mr."> Mr.</option>
                  <option value="Mrs." active>
                    {' '}
                    Mrs.
                  </option>
                  <option value="Miss"> Miss</option>
                  <option value="Ms."> Ms.</option>
                  <option value="Dr."> Dr.</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{firstName}</label>
                <input type="text" defaulalue={yakeendetails ? yakeendetails.ApplicationName : ''} />
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{middlename}</label>
                <input type="text" defaulalue={yakeendetails ? yakeendetails.englishSecondNameField : ''} />
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{thirdname}</label>
                <input type="text" defaulalue={yakeendetails ? yakeendetails.englishThirdNameField : ''} />
              </div>
            </div>

            <div className="col-sm-12 applycolpadding">
              <div className="col-sm-3 l-applynow ">
                <label>{familyname}</label>
                <input type="text" defaulalue={yakeendetails ? yakeendetails.familyNameField : ''} />
                {/* <input type="text" placeholder="Title" /> */}
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{IdentityType}</label>
                <select>
                  <option>Passport</option>
                  <option>Saudi Nationality Number</option>
                  <option>Iqama Number</option>
                  <option>Driving Licanse</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{identitynumber}</label>
                <input type="text" defaulalue={yakeendetails ? yakeendetails.LoanIdNumber : ''} />
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{dateofissue}</label>
                <input
                  type="date"
                  name="dob"
                  required
                  aria-required="true"
                  defaulalue={yakeendetails ? yakeendetails.dateofjoining : ' '}
                />
              </div>
            </div>

            <div className="col-sm-12 applycolpadding">
              <div className="col-sm-3 l-applynow ">
                <label>{dateofexpiry}</label>
                <input type="date" required />
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{mobilenumber}</label>
                <input type="text" />
              </div>
              <div className="col-sm-6 l-applynow">
                <label>{emailaddress}</label>
                <input type="text" />
              </div>
            </div>

            <div className="col-sm-12 applycolpadding">
              <div className="col-sm-3 l-applynow ">
                {/* <input type="text" placeholder="Title" /> */}

                <label>{customertype}</label>
                <select>
                  <option>JARIR</option>
                  <option>STC</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow">
                <label>Products</label>
                <select>
                  <option>IJMB</option>
                  <option>AHL</option>
                  <option>AAL</option>
                  <option>APL</option>
                  <option>MUR</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{subproducts}</label>
                <select>
                  <option>IJARAST</option>
                  <option>IJRFLEET</option>
                  <option>PROIJMB</option>
                  <option>AUTOIMB</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow">
                <label>{profitRate}</label>
                <select>
                  <option value="Mr.">Select Profit Rate</option>
                </select>
              </div>
            </div>

            <div className="col-sm-12 applycolpadding">
              <div className="col-sm-3 l-applynow ">
                <label>{Profitindicator}</label>
                <select>
                  <option value="Individual.">Select Profit Indicator</option>
                </select>
              </div>
              <div className="col-sm-3 l-applynow"></div>
              <div className="col-sm-3 l-applynow"></div>
              <div className="col-sm-3 l-applynow"></div>
            </div>
          </div>

          {/*-------------------- bottom content --------------------*/}

          <div className="dfs-save-submitbtn">
            <div style={{ marginBottom: '5px' }} className="basic_save">
              <button style={{ paddingBottom: '10px', paddingTop: '10px', 'border-radius': '5px' }} className="basicforbtn">
                {save}
              </button>
            </div>
            <div style={{ marginRight: '25px', marginBottom: '5px' }} className="basic_submit">
              <button style={{ paddingBottom: '10px', paddingTop: '10px', 'border-radius': '5px' }} className="basicforbtn">
                {submit}
              </button>
            </div>
          </div>

          {/* -------------------------modal content --------------------------- */}

          {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content" style={{ "margin": "0% 20%" }}>
                                <div class="modal-header">

                                </div>
                                <div class="modal-body">
                                    <div className="otpfiledstyle">
                                        <div className="otptxt">
                                            Enter OTP
            </div>
                                        <div className="otpenterfield">
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="buttons">
                                        <div className="">
                                            <button className="confirmbtn">Confirm</button>
                                        </div>
                                        <div className="closebtnstyle">
                                            <button className="closebtn" data-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                    <div style={{ "text-align": "center", "font-size": "12px", "color": "blue" }}>
                                        Click here to resend OTP
        </div>

                                </div>

                            </div>
                        </div>
                    </div> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(applyonline);
