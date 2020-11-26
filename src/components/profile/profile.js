import React, { Component } from 'react';
import './profile.css';
import editimage from '../../assets/images/editicon.png';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import { Profiledetails } from '../../store/action';
import Axios from 'axios';
import config from '../../assets/config/config';

class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {
    Axios.get(config.STRAPI_URL + '/profile-settings').then(res => {
      this.setState({ profilesettingData: res.data });

      console.log('response come 11', res);
    });
    await this.props.Profiledetails();
  }

  render() {
    let addressdetailsdata = this.props.reducer.addressdetailsdata ? this.props.reducer.addressdetailsdata : [];
    let general = this.props.reducer.profiledetailsdata ? this.props.reducer.profiledetailsdata : [];
    console.log(general, 'general data');

    const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' };
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' };
    let profileheading,
      personlainformation,
      customerdetails,
      dateofbirth,
      gender,
      language,
      customerid,
      income,
      identificationdetails,
      address1,
      address2,
      country,
      Province,
      City,
      DistrictNeighbourhood,
      zipcode,
      poBox,
      buildingnumber,
      additionalNumber,
      unitnumber,
      street;

    if (this.state.profilesettingData) {
      this.state.profilesettingData.map((p, index) => {
        if (p.lang == window.sessionStorage.getItem('language')) {
          profileheading = p.profileSettings;
          personlainformation = p.personalInformation;
          customerdetails = p.customerdetials;
          dateofbirth = p.dateofbirth;
          gender = p.gender;
          language = p.Language;
          customerid = p.customerId;
          income = p.income;
          identificationdetails = p.identificationdetials;
          address1 = p.Address1;
          address2 = p.Address2;
          country = p.Country;
          Province = p.Province;
          City = p.City;
          DistrictNeighbourhood = p.DistrictNeighbourhood;
          zipcode = p.ZipCode;
          poBox = p.PoBox;
          buildingnumber = p.BuildingNumber;
          additionalNumber = p.AdditionalNumber;
          unitnumber = p.UnitNumber;
          street = p.Street;
        }
      });
    }

    return (
      <div>
        <div className="container profilepadding custom-border">
          <div className="row">
            <div className="profileheading">{profileheading}</div>

            <div className="maincard">
              <div className="col-sm-12">
                <div className="col-sm-6 ">
                  <div className="card cardboxshadow">
                    <div className="card-body">
                      <div className="profile_info">
                        {personlainformation}
                        <button className="identification_edit" style={{ backgroundColor: 'white' }}>
                          <img src={editimage} style={{ height: '20px', width: '20px' }} />
                          <div style={{ fontSize: '10px', color: 'skyblue' }}></div>
                        </button>
                      </div>
                      <div style={{ 'padding-top': '2px' }}>
                        <div className="col-sm-6 col-xs-6">
                          <div className="personalkeys">
                            <div className="keystyle">
                              <span> {dateofbirth}</span>:
                              <br />
                              <span style={{ marginTop: '4px' }}> {gender} </span>:
                              <br />
                              <span style={{ marginTop: '7px' }}> {language} </span>:
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6 col-xs-6">
                          <div className="personalvalues">
                            <div className="valuestyle">
                              {/* <input type="date" value="26/09/2020"/> */}
                              26/06/2020
                            </div>
                            <div className="valuestyle">Male</div>
                            <div className="valuestyle">English</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------------------customer details -----------------------------*/}
                <div className="col-sm-6">
                  <div className="card cardboxshadow">
                    <div className="card-body">
                      <div className="consumer_info">{customerdetails}</div>
                      <div style={{ 'padding-top': '6px' }}>
                        <div className="col-sm-row">
                          <div className="col-sm-6 col-xs-6">
                            <div className="personalkeys">
                              <div className="customer_keystyle">
                                <span style={{ marginBottom: '8px' }}> {customerid}</span>:
                              </div>
                              <div className="customer_keystyle">
                                <span> {income} </span>:
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 col-xs-6">
                            <div className="personalvalues">
                              <div className="customer_valuestyle">5679432</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------- identifiaction details------------------------------------ */}
            <div className="idetifiaction_main">
              <div className="card " style={{ 'border-radius': '10px' }}>
                <div className="card-body">
                  <div className="identification_heading">
                    {identificationdetails}
                    <button className="identification_edit" style={{ backgroundColor: 'white' }}>
                      <img src={editimage} style={{ height: '20px', width: '20px' }} />
                      <div style={{ 'font-size': '10px', color: 'skyblue' }}></div>
                    </button>
                  </div>
                  {/* <div class="row"> */}

                  <div class="row">
                    <div className="col-sm-6">
                      <div className="col-sm-6">
                        <div className="detail_list">
                          <div className="identify_list">{address1}</div>
                          <div className="identify_list">{address2}</div>
                          <div className="identify_list">{country}</div>
                          <div className="identify_list">{Province}</div>
                          <div className="identify_list">{City}</div>

                          <div className="identify_list">{DistrictNeighbourhood}</div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="idetify_details">{general[0] ? general[0].address : ''}</div>
                        <div className="idetify_details"></div>
                        <div className="idetify_details"></div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].cityField : ''}</div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].districtField : ''}</div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="col-sm-6">
                        <div className="detail_list">
                          <div className="identify_list">{zipcode}</div>
                          <div className="identify_list">{poBox}</div>
                          <div className="identify_list">{buildingnumber}</div>
                          <div style={{ marginTop: '7px' }} className="identify_list">
                            {additionalNumber}
                          </div>
                          <div className="identify_list">{unitnumber}</div>
                          <div style={{ marginTop: '9px' }} className="identify_list">
                            {street}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="idetify_details">{general[0] ? general[0].zipcode : ''}</div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].postCodeField : ''}</div>

                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].buildingNumberField : ''}</div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].additionalNumberField : ''}</div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].unitNumberField : ''}</div>
                        <div className="idetify_details">{addressdetailsdata[0] ? addressdetailsdata[0].streetNameField : ''}</div>
                      </div>
                    </div>
                  </div>

                  {/* 
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="dfs_updateBtn">
            <button className="updateprofilebtn">Update Profile</button>
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

    Profiledetails: () => dispatch(Profiledetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(profile);
