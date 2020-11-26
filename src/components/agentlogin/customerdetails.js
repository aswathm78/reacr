import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import axios from 'axios';
import $ from 'jquery';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import config from '../../assets/config/config';
import CustomerApi from './AgentApi';

class customerdetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      resp:[],
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
      aapRequest: {},
      fieldArray:{},
      loan:{},
      loandetailsData:{}
    };
  }

  newCustomer = () => {
    axios.get(config.STRAPI_URL + '/agent-newcustomers')
    .then(res => {
      console.log(res,'1234567890-')
      this.setState({ newCustomerFields: res.data });
      // console.log('newCustomerFields', this.state.newCustomerFields)
    });
  }


  getAssetDetail = async (id) =>{
    try {
      let headerConfig = {
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
    };
      const response = await axios.get(`http://122.166.172.240:3031/api/assets?appId.equals=` + id, headerConfig);
      console.log(response.data)
      if(response.data.length>0){
        response.data.map((data)=>{
          let newassetdetails = {
            assetModel: data.assetModel,
            assetName: data.assetName,
            assetPrice: data.assetPrice,
            assetQty: data.assetQty,
          };
          this.setState({
            assetDataArray: this.state.assetDataArray.concat(newassetdetails),
          });
        })
      }
        
      

  } catch (error) {
      console.log(error);
      return false;
  }
  }

  async componentDidMount() {
    this.newCustomer()
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    // this.getLoanData();
    // this.getApplicationData(
    //     callBack => {
    //       console.log(callBack);
    //     },
    //     e => {
    //       console.lof(e);
    //     }
    // );

    // console.log(this.state.resp);
    // await this.newCustomer()

    let check = await CustomerApi.checkCustomer(this.state.fieldArray)

    const sta = await CustomerApi.checkAddress(this.state.fieldArray)
    await this.getAssetDetail(this.state.fieldArray['appId'])
    axios.get('http://122.166.172.240:4000/simah').then(async (res) => {
      // console.log("simah",res)
      let loan = this.state.loan;
      let simahData = res.data.simah
      loan.reqAmount = simahData[0].totalLimits - (simahData[0].totalLiabilities + simahData[0].loanInstallments)
      if(loan.reqAmount>30000){
        loan.reqAmount=30000
      }
      let fieldArray = this.state.fieldArray
      
      fieldArray.creditCardsLimits = res.data.simah[0].creditCardLimits
      await this.setState({
        loandetailsData: res.data.simah,
        loan,
        fieldArray
      });
    });

  }

  getLoanData = () => {

    // const iord_id_token=window.sessionStorage.getItem('iord_id_token') ;
    fetch("http://122.166.172.240:3031/api/iord-soluton/agentdashboard/23001" ,{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data1: JSON.stringify([]),

    }).then((Response) => Response.json())
        // console.log(this.newCustomer()JSON.stringify(Response.data1))


        .then(result => this.setState({ 'resp': result }))
    // console.log(result);

  }


  getApplicationData = () => {
    const config = {
      method: 'post',
      url:
          'https://cors-anywhere.herokuapp.com/http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/onlineApplication?access_token=7e3dfdc3-8e36-42c0-8f76-a6310a315040',
      headers: {
        appId: '1',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify([]),
    };

    axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.DupResult));
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  newcustomer = () => {
    this.props.history.push('/agent/newcustomer');
  };

  viewdashboard = () => {
    this.props.history.push('/agent/dashboard');
  };

  logout = () => {
    this.props.history.push('/agent/signin');
  };
 

  render() {
    const vendor = window.sessionStorage.getItem('vendor').toLowerCase();
    let newCustomerDataObj = this.state.newCustomerFields ? this.state.newCustomerFields : '';
console.log(newCustomerDataObj)
    let field0001, field0002, field0003, field0004, field0005, field0006, field0007, field0008, field0009, field0010, field0011, field0012, field0013, field0014, field0015, field0016, field0017, field0018, field0019, field0020, field0021, field0022, field0023, field0024, field0025, field0026, field0027, field0028, field0029, field0030,
      field0031, field0032, field0033, field0034, field0035, field0036, field0037, field0038, field0039, field0040, field0041, field0042, field0043, field0044, field0045, field0046, field0047, field0048, field0049, field0050, field0051, field0052, field0053, field0054, field0055, field0056, field0057, field0058, field0059, field0060,
      field0061, field0062, field0063, field0064, field0065, field0066, field0067, field0068, field0069, field0070, field0071, field0072, field0073, field0074, field0075, field0076, field0077, field0078, field0079, field0080, field0081, field0082, field0083, field0084, field0085, field0086, field0087, field0088, field0089, field0090,
      field0091, field0092, field0093, field0094, field0095, field0096, field0097, field0098, field0099, field0100, field0101, field0102, field0103, field0104, field0105, field0106, field0107, field0108, field0109, field0110, field0111, field0112, field0113, field0114, field0115, field0116, field0117, field0118, field0119, field0120,
      field0121, field0122, field0123, field0124, field0125, field0126, field0127, field0128, field0129, field0130, field0131, field0132, field0133, field0134, field0135, field0136, field0137, field0138, field0139, field0140, field0141, field0142, field0143, field0144, field0145, field0146, field0147, field0148, field0149, field0150, field0151, field0152, field0153, field0154, field0155, field0156, field0157, field0158, field0159, field0160, field0161, field0162, field0163, field0164, field0165, field0166, field0167, field0168, field0169, field0170, field0171, field0172, field0173, field0174, field0175, field0176, field0177, field0178, field0179, field0180, field0181, field0182, field0183, field0184, field0185, field0186, field0187, field0188, field0189, field0190, field0191, field0192, field0193, field0194, field0195, field0196, field0197, field0198, field0199;
    
    newCustomerDataObj[0].map((b, index) => {
        console.log(b)
        if (b.field0001 == window.sessionStorage.getItem('language')) {
          field0001 = b.field0001; field0002 = b.field0002; field0003 = b.field0003; field0004 = b.field0004; field0005 = b.field0005; field0006 = b.field0006; field0007 = b.field0007; field0008 = b.field0008; field0009 = b.field0009; field0010 = b.field0010; field0011 = b.field0011; field0012 = b.field0012; field0013 = b.field0013; field0014 = b.field0014; field0015 = b.field0015; field0016 = b.field0016; field0017 = b.field0017; field0018 = b.field0018; field0019 = b.field0019; field0020 = b.field0020; field0021 = b.field0021; field0022 = b.field0022; field0023 = b.field0023; field0024 = b.field0024; field0025 = b.field0025; field0026 = b.field0026; field0027 = b.field0027; field0028 = b.field0028; field0029 = b.field0029; field0030 = b.field0030; field0031 = b.field0031;
          field0032 = b.field0032; field0033 = b.field0033; field0034 = b.field0034; field0035 = b.field0035; field0036 = b.field0036; field0037 = b.field0037; field0038 = b.field0038; field0039 = b.field0039; field0040 = b.field0040; field0041 = b.field0041; field0042 = b.field0042; field0043 = b.field0043; field0044 = b.field0044; field0045 = b.field0045; field0046 = b.field0046; field0047 = b.field0047; field0048 = b.field0048; field0049 = b.field0049; field0050 = b.field0050; field0051 = b.field0051; field0052 = b.field0052; field0053 = b.field0053; field0054 = b.field0054; field0055 = b.field0055; field0056 = b.field0056; field0057 = b.field0057; field0058 = b.field0058; field0059 = b.field0059; field0060 = b.field0060; field0061 = b.field0061; field0062 = b.field0062;
          field0063 = b.field0063; field0064 = b.field0064; field0065 = b.field0065; field0066 = b.field0066; field0067 = b.field0067; field0068 = b.field0068; field0069 = b.field0069; field0070 = b.field0070; field0071 = b.field0071; field0072 = b.field0072; field0073 = b.field0073; field0074 = b.field0074; field0075 = b.field0075; field0076 = b.field0076; field0077 = b.field0077; field0078 = b.field0078; field0079 = b.field0079; field0080 = b.field0080; field0081 = b.field0081; field0082 = b.field0082; field0083 = b.field0083; field0084 = b.field0084; field0085 = b.field0085; field0086 = b.field0086; field0087 = b.field0087; field0088 = b.field0088; field0089 = b.field0089; field0090 = b.field0090; field0091 = b.field0091; field0092 = b.field0092; field0093 = b.field0093;
          field0094 = b.field0094; field0095 = b.field0095; field0096 = b.field0096; field0097 = b.field0097; field0098 = b.field0098; field0099 = b.field0099; field0100 = b.field0100; field0101 = b.field0101; field0102 = b.field0102; field0103 = b.field0103; field0104 = b.field0104; field0105 = b.field0105; field0106 = b.field0106; field0107 = b.field0107; field0108 = b.field0108; field0109 = b.field0109; field0110 = b.field0110; field0111 = b.field0111; field0112 = b.field0112; field0113 = b.field0113; field0114 = b.field0114; field0115 = b.field0115; field0116 = b.field0116; field0117 = b.field0117; field0118 = b.field0118; field0119 = b.field0119; field0120 = b.field0120; field0121 = b.field0121; field0122 = b.field0122; field0123 = b.field0123; field0124 = b.field0124; field0125 = b.field0125; field0126 = b.field0126;
          field0127 = b.field0127; field0128 = b.field0128; field0129 = b.field0129; field0130 = b.field0130; field0131 = b.field0131; field0132 = b.field0133; field0134 = b.field0134; field0135 = b.field0135; field0136 = b.field0136; field0137 = b.field0137; field0138 = b.field0138; field0139 = b.field0139; field0140 = b.field0140; field0141 = b.field0141; field0142 = b.field0142; field0143 = b.field0143; field0144 = b.field0144; field0145 = b.field0145; field0146 = b.field0146; field0147 = b.field0147; field0148 = b.field0148; field0149 = b.field0149; field0150 = b.field0150; field0151 = b.field0151; field0152 = b.field0152; field0153 = b.field0153; field0154 = b.field0154; field0155 = b.field0155; field0156 = b.field0156; field0157 = b.field0157; field0158 = b.field0158; field0159 = b.field0159; field0160 = b.field0160; field0161 = b.field0161;
          field0162 = b.field0162; field0163 = b.field0163; field0164 = b.field0164; field0165 = b.field0165; field0166 = b.field0166; field0167 = b.field0167; field0168 = b.field0168; field0169 = b.field0169; field0170 = b.field0170; field0171 = b.field0171; field0172 = b.field0172; field0173 = b.field0173; field0174 = b.field0174; field0175 = b.field0175; field0176 = b.field0176; field0177 = b.field0177; field0178 = b.field0178; field0179 = b.field0179; field0180 = b.field0180; field0181 = b.field0181; field0182 = b.field0182; field0183 = b.field0183; field0184 = b.field0184; field0185 = b.field0185; field0186 = b.field0186; field0187 = b.field0187; field0188 = b.field0188; field0189 = b.field0189; field0190 = b.field0190; field0191 = b.field0191; field0192 = b.field0192; field0193 = b.field0193; field0194 = b.field0194; field0195 = b.field0195; field0196 = b.field0196;
          field0197 = b.field0197; field0198 = b.field0198; field0198 = b.field0199;
        }
      });

    let cDetails = {}
    let customerDetails={}
    return (

        <div className="row">
          <div className="col-sm-12 mobileView">
            <div className="card" style={{ borderRadius: '10px',  marginLeft: '20px', marginTop: '20px' }}>

              <div className="card-body" style={{ borderRadius: '10px' }}>
                <div class="row">
                  <div className='col-md-6'>
                    <div className={vendor} ></div>
                  <div className={vendor} width="150" height="50"></div>
                  <br />
                  {field0001}
                </div>
              </div>
              <br />
              <div className="col-sm-3">
                <div className="col-sm-12 verficationcardstyle">
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <div className="card-body" style={{ height: '60vh', borderRadius: '10px' }}>
                      <div className="verification_heading" style={{ textAlign: 'right', marginTop: '9rem' }}>
                        {field0003}
                      </div>
                      <div
                        style={{
                          textAlign: 'right',
                          fontSize: '1.4rem',
                          fontWeight: '100px',
                          paddingRight: '40px',
                        }}
                      >
                        {vendor == 'jarir' ? 'Junaid Qazi' : 'Imran Khan'}
                        <br />
                        <br />
                        {window.sessionStorage.getItem('email')}
                        <br />
                        <br />
                        +966 5677 87698
                        <br />
                        <br />
                        {window.sessionStorage.getItem('vendor')}
                        <br />
                        <br />
                      </div>

                      <div className="signup-btn-style">
                        <div>
                          <button className="signup-btn" onClick={this.viewdashboard} style={{ padding: '15px 1px', width: '25rem' }}>
                            {field0028}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* left section close */}
              {/* right side start */}
              <div className="col-sm-9">
                <div className="sevenpage">
                  <div className="agent-financialdetails">Basic Information</div>

                  <div className="col-sm-12" style={{ padding: '0', margin: '0' }}>
                    <div className="col-sm-3">
                      {/* <div className="agent-lablestyle">
                        <label>{field0133}</label>
                        <input type="text" id="firstName" value={tahakomAddressDetails.country} />
                      </div> */}
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label> {field0132}</label>
                        <input type="text" id="firstName" value={cDetails.firstName}/>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0130} </label>
                        <input type="text" id="middleName" value={cDetails.middleName} />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">


                        <label>{field0131} </label>
                        <input type="text" id="lastName" value={cDetails.lastName} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ padding: '0', margin: '0' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0137}</label>
                        <input type="text" value={cDetails.familyName} />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0134} </label>
                        <input type="text" id="proviceid" value={cDetails.lastName} />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0135} </label>
                        <input type="text" id="address2" value='' />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label> {field0136}</label>
                        <input type="text" id="address1" value={cDetails.firstNameArabic} />
                      </div>
                    </div>
                  </div>
                  <div className="agent-financialdetails">Address Information</div>

                  <div className="col-sm-12" style={{ padding: '0', margin: '0' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0084}</label>
                        <select id="city">
                          {/* <option value="Mr.">{tahakomAddressDetails.street}</option>*/}
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0092}</label>
                        <input type="number" id="buildingno" value=""/>
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0180} </label>
                        <input type="text" id="address2" value='' />
                      </div>
                    </div>
                    Loan Details
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label> {field0046}</label>
                        <input type="text" id="address1" value={cDetails.nationalAddress} />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ marginTop: '15px' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0020}</label>
                        <input type="text" value="" />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0056} </label>
                        <input type="text" id="proviceid" value="{tahakomAddressDetails.city}" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0194}</label>
                        <input type="number" id="zipcode" value="{tahakomAddressDetails.zipcode}" />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0111}</label>
                        <input type="number" id="pobox" value="{tahakomAddressDetails.pobox}" />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0122}</label>
                        <select id="dist">
                          <option value="Mr."></option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12" style={{ marginTop: '15px' }}>
                    <div className="col-sm-3"></div>

                    <div className="col-sm-3"></div>

                    {/* <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>Street</label>
                        <input type="number" id="street" />
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="Firstpage">
                  <div className="agent-empdetails">{field0005}</div>
                  <div className="col-sm-12" style={{ padding: '0', margin: '0' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label name="subsector">{field0007}</label>
                        <input type="text" name="subsector" id="subsector" value="" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label name="sector">{field0006}</label>
                        <input
                          type="text"
                          name="sector"
                          id="sector"
                          value={customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].sector}
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label name="emptype">{field0030}</label>
                        <input
                          type="text"
                          name="employmentType"
                          id="employmentPage"
                          value={
                            customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].employmentType
                          }
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0004}</label>
                          <input
                            type="text"
                            name="nameOfEmployer"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].employerName
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ marginTop: '40px' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label for="designation">{field0008}</label>
                          <input
                            type="text"
                            name="nameOfEmployer"
                            id="empname"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].employerName
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0010}</label>
                        <input
                          type="number"
                          name="serviceinmonth"
                          value={
                            customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].serviceinmonths
                          }
                        />
                      </div>
                    </div>
                    {/* <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0009}</label>
                        <input type="text" name="hijriDate" id="hijriDate" />
                      </div>
                    </div> */}
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <label>{field0009}</label>
                        <input
                          type="date"
                          name="dateofjoining"
                          min="2002-11-04"
                          value={customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].dateOfJoining}
                          onChange={this.processInput}
                          style={{ fontSize: '14px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="agent-financialdetails">Financial Details</div>
                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0031} </label>
                          <input
                            type="number"
                            name="financialpremium"
                            value={
                              customerDetails.data &&
                              customerDetails.data.customer[0] &&
                              customerDetails.data.customer[0].homeFinancePremium
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0013}</label>
                          <input
                            type="number"
                            name="monthlyeditionincome"
                            value={
                              customerDetails.data &&
                              customerDetails.data.customer[0] &&
                              customerDetails.data.customer[0].monthlyAdditionalIncome
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0012} </label>
                          <input
                            type="number"
                            name="monthlysalary"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].monthlySalary
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0016} </label>
                          <input
                            type="number"
                            name="numberofdependencychild"
                            value={
                              customerDetails.data &&
                              customerDetails.data.customer[0] &&
                              customerDetails.data.customer[0].numofDpdntChildren
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0015} </label>
                          <input
                            type="number"
                            name="numberofdependencyspouse"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].numofdpdntSpouse
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ marginTop: '10px' }}>
                    <div className="col-sm-3"></div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0018}</label>
                          <input
                            type="number"
                            name="monthlyhomerent"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].monthlyHomeRent
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0013}</label>
                          <input
                            type="number"
                            name="assetvalue"
                            value={
                              customerDetails.data && customerDetails.data.customer[0] && customerDetails.data.customer[0].accommodationType
                            }
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle">
                        <div className="agent-lablestyle">
                          <label>{field0017} </label>
                          <select>
                            <option
                              value={
                                customerDetails.data &&
                                customerDetails.data.customer[0] &&
                                customerDetails.data.customer[0].accommodationType
                              }
                            ></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12" style={{ marginTop: '10px',marginBottom: '30px' }}>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle shadow">
                        <label>{field0031} </label>
                        <input type="text" name="homefinance" disabled value="0.00" className="shadow" />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle shadow">
                        <label>{field0032}</label>
                        <input type="text" name="obligationmonthly" readOnly="readOnly" className="shadow" />
                      </div>
                    </div>

                    <div className="col-sm-3">
                      <div className="agent-lablestyle shadow">
                        <label>{field0021} </label>
                        <input
                          type="text"
                          name="financingInstallments"
                          disabled
                          value={this.state.financingInstallments}
                          className="shadow"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="agent-lablestyle shadow">
                        <label>{field0022}</label>
                        <input type="text" name="creditLimit" disabled value={this.state.creditLimit} className="shadow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="second-page">
                  <div className="asset-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Item Number</th>
                          <th>Asset Name</th>
                          <th>Quantity</th>
                          <th>Item Price</th>
                          <th>Vat Amount</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {this.state.assetData.map((row, index) => {
                          let vatAmt = (row.assetprice * 15) / 100;
                          return (
                            <tr key={index}>
                              <td>{row.assetmodel}</td>
                              <td>{row.assetname}</td>
                              <td>{row.assetqty}</td>
                              <td>SR {row.assetprice}</td>
                              <td>SR {(row.assetprice * 15) / 100}</td>
                              <td>SR {(row.assetprice + vatAmt) * row.assetqty}</td>
                            </tr>
                          );
                        })} */}
                      </tbody>
                    </table>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    // onlineApplication: () => dispatch(onlineApplication()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(customerdetails);