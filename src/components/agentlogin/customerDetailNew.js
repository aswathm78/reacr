import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import axios from 'axios';
import $ from 'jquery';
import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import config from '../../assets/config/config';
import CustomerApi from './AgentApi';
import Logo from '../agentlogin/maalem-logo.png'
import StcLogo from '../../assets/images/stc-logo.png'
import './newStyleHndle.scss'
import JARIRLogo from './jarir.png'
import SideImage from './signinsignup.png'
import Loader from '../smelogin/utils/loader'

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
      loandetailsData:{},
      loaderState:false,
      assetDataArray:[]
    };
  }

  newCustomer = () => {
this.setState({loaderState:true})
    axios.get(config.STRAPI_URL + '/agent-newcustomers')
    .then(res => {
      console.log(res,'1234567890-')
      this.setState({ newCustomerFields: res.data,loaderState:false });
      // console.log('newCustomerFields', this.state.newCustomerFields)
    });
  }

  dropDownHandler = (e) => {
    if ((e.target.value) == 'en') {
        this.setState({loaderState:true})
      window.sessionStorage.setItem('language', 'en')
      this.setState({loaderState:false})

    //   window.location.reload(false);
    } else if ((e.target.value) == 'ar') {
        this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'ar')
    //   window.location.reload(false);
    this.setState({loaderState:false})

    } else if ((e.target.value) == 'logout') {
      this.logout()
    }

  }
  logout = () => {
    this.props.history.push('/agent/signin');
  };
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

  jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
  }

  async getLoanDetail(appId){
    console.log("appId",appId)
    let headerConfig = {
      headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
  };

    try {
        const response = await axios.get(`http://122.166.172.240:3031/api/loans?id.equals=` + appId, headerConfig);
        console.log(response)
        let fieldArray = this.state.fieldArray
        fieldArray=response.data[0]
        fieldArray['appId'] = appId
        await this.setState({
          fieldArray:fieldArray
        })
        console.log(response.data[0])
        return response.data[0]
    } catch (error) {
        console.log(error);
        return {};
    }
  }

  async componentDidMount() {
      window.sessionStorage.setItem('vendor','STC')
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
    if(this.props.history!=null && this.props.history.location!=null && this.props.history.location.data!=null && this.props.history.location.data!=undefined){ 
      let loanDetail = await this.getLoanDetail(this.props.history.location.data.appId)
        console.log("loanDetail",loanDetail)
        if(loanDetail){
          let customerData = await CustomerApi.getCustomer(loanDetail.custId)
          console.log("customerData",customerData)
          let addressData = await CustomerApi.getAddress(loanDetail.custId)
          if(addressData){
            customerData =await this.jsonConcat(customerData,addressData)
          }
          customerData =await this. jsonConcat(customerData,loanDetail)
          await this.setState({
            fieldArray:customerData
          })
          await this.getAssetDetail(this.state.fieldArray['appId'])
          console.log("fieldArray",this.state.fieldArray)
          window.sessionStorage.setItem('TAHKUM_CUSTOMRE_DATA',JSON.stringify(this.state.fieldArray))
          console.log("assetDataArray",this.state.assetDataArray)
        }
    }else{
      let customerData = await JSON.parse(window.sessionStorage.getItem('TAHKUM_CUSTOMRE_DATA'))
      await this.getAssetDetail(customerData.appId)
      console.log("customerData",customerData)
      console.log("assetDataArray",this.state.assetDataArray)
      if(customerData){
        this.setState({
          fieldArray:customerData
        })
      }
      
    }
   
    axios.get('http://122.166.172.240:4000/simah').then(async (res) => {
      let loan = this.state.loan;
      let simahData = res.data.simah
    });

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
    // const vendor = window.sessionStorage.getItem('vendor').toLowerCase();
    let newCustomerDataObj = this.state.newCustomerFields ? this.state.newCustomerFields : '';
console.log(newCustomerDataObj)
    let field0001, field0002, field0003, field0004, field0005, field0006, field0007, field0008, field0009, field0010, field0011, field0012, field0013, field0014, field0015, field0016, field0017, field0018, field0019, field0020, field0021, field0022, field0023, field0024, field0025, field0026, field0027, field0028, field0029, field0030,
      field0031, field0032, field0033, field0034, field0035, field0036, field0037, field0038, field0039, field0040, field0041, field0042, field0043, field0044, field0045, field0046, field0047, field0048, field0049, field0050, field0051, field0052, field0053, field0054, field0055, field0056, field0057, field0058, field0059, field0060,
      field0061, field0062, field0063, field0064, field0065, field0066, field0067, field0068, field0069, field0070, field0071, field0072, field0073, field0074, field0075, field0076, field0077, field0078, field0079, field0080, field0081, field0082, field0083, field0084, field0085, field0086, field0087, field0088, field0089, field0090,
      field0091, field0092, field0093, field0094, field0095, field0096, field0097, field0098, field0099, field0100, field0101, field0102, field0103, field0104, field0105, field0106, field0107, field0108, field0109, field0110, field0111, field0112, field0113, field0114, field0115, field0116, field0117, field0118, field0119, field0120,
      field0121, field0122, field0123, field0124, field0125, field0126, field0127, field0128, field0129, field0130, field0131, field0132, field0133, field0134, field0135, field0136, field0137, field0138, field0139, field0140, field0141, field0142, field0143, field0144, field0145, field0146, field0147, field0148, field0149, field0150, field0151, field0152, field0153, field0154, field0155, field0156, field0157, field0158, field0159, field0160, field0161, field0162, field0163, field0164, field0165, field0166, field0167, field0168, field0169, field0170, field0171, field0172, field0173, field0174, field0175, field0176, field0177, field0178, field0179, field0180, field0181, field0182, field0183, field0184, field0185, field0186, field0187, field0188, field0189, field0190, field0191, field0192, field0193, field0194, field0195, field0196, field0197, field0198, field0199;
    if(newCustomerDataObj !=undefined && newCustomerDataObj !=''){
    newCustomerDataObj.map((b, index) => {
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
    }

    let cDetails = {}
    let customerDetails={}
    return (
<React.Fragment>     
    {this.state.loaderState?
    <Loader/>
    :""}
       <div className="container-fluid">
        <div className={(window.sessionStorage.getItem('language'))=='en'?'englishCssStc':'arabicCssStc'}>
        <div className=' mobileView'>
          <div
            className=''
            style={{
              borderRadius: '10px',
              // marginLeft: '20px'
            }}
          >
             <div className='top-image' >
              <div className='col-sm-2 col-xs-12  text-center'>
                <img
                  src={Logo}
                  style={{ maxWidth: '130px', marginTop: '17px' }}
                />
              </div>
            </div>
            <div
              className='col-sm-10 col-xs-12 card-main-head'
              style={{ marginTop: '33px',height:'77px' }}
            >
              <div >
                <div className='col-xs-6 col-sm-6' style={{ direction: 'ltr' }}>
                  {/* <div className={vendor}></div> */}
                  {window.sessionStorage.getItem('vendor')=='STC'?
                  <img
                    src={StcLogo}
                    style={{ maxWidth: '100px', marginTop: '10px' }}
                  />
                  :""}
                  {window.sessionStorage.getItem('vendor')=='JARIR' ?
                   <img
                    src={JARIRLogo }
                    style={{ maxWidth: '150px'}}
                  />
                  :""}
                </div>
                {/* <div className='col-xs-6 col-sm-6'> */}
                <div className='col-xs-6 col-sm-6 side-dropdown' style={{ textAlign: 'end' }}>
                  <select defaultValue={window.sessionStorage.getItem('language')} onChange={(e) => this.dropDownHandler(e)} style={{ background: 'white', marginTop: '25px',width:'initial' }}>
                    <option value='logout'>logout</option>
                    <option value='en'>english</option>
                    <option value='ar'>arabic</option>

                  </select>
               
                </div>
                {/* </div> */}
              </div>

              <br />
            </div>
            <div className='down-image'>
              <div className='col-sm-2 col-xs-12  text-center'>
                <img
                  src={Logo}
                  style={{ maxWidth: '130px', marginTop: '17px' }}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12">
           
              <div className="col-sm-4 col-xs-12" style={{marginTop:'20px'}} >
                  <div className="verficationcardstyle">
                    <div >
                      <div className="card-body text-center" >
                      
                <img src={SideImage} style={{marginTop:'20px'}}/>

                        <div className="text-center">
                          <div>
                            <button className="signup-btn" onClick={this.viewdashboard} style={{ width: '169px', padding: '10px' }} >
                              {/* {field0028} */}{field0028}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* left section close */}
              {/* right side start */}
              <div className="col-sm-8 col-xs-12" style={{marginTop:'20px'}}>
                <div className="">
                  <div className="text-center" style={{fontWeight:'600',fontSize:'19px',margin:'20px'}}>Basic Information</div>

                  <div className="row" >
                

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label> {field0132}</label>
                        <input readOnly type="text" placeholder={field0132} id="firstName" value={this.state.fieldArray.firstName}/>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                        <label>{field0130} </label>
                        <input readOnly type="text" id="middleName" placeholder={field0130} value={this.state.fieldArray.middleName} />
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>


                        <label>{field0131} </label>
                        <input readOnly type="text" placeholder={field0131} id="lastName" value={this.state.fieldArray.lastName} />
                      </div>
                    </div>
                  </div>
                  <div className="row" >
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                        <label>{field0137}</label>
                        <input readOnly type="text" placeholder={field0137} value={this.state.fieldArray.familyName} />
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                        <label>{field0134} </label>
                        <input readOnly type="text" placeholder={field0134} id="proviceid" value={this.state.fieldArray.lastName} />
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                        <label>{field0135} </label>
                        <input readOnly type="text" placeholder={field0135} id="address2" value={this.state.fieldArray.middleName} />
                      </div>
                    </div>
                    </div>
                    <div className='row'>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle" style={{marginTop:'20px'}}>
                        <label> {field0136}</label>
                        <input readOnly type="text" placeholder={field0136} id="address1" value={this.state.fieldArray.firstNameArabic} />
                      </div>
                    </div>
                    </div>
                    <div className='col-sm-12'>
                  <div className="text-center" style={{fontWeight:'600',fontSize:'19px',margin:'20px'}}>Address Information</div>
                  </div>
                  <div className="row" >
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0084}</label>
                        <input readOnly id="city" type='text' placeholder={field0084} value={this.state.fieldArray.street}  />
                          {/* <option value="Mr.">{tahakomAddressDetails.street}</option>*/}
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0092}</label>
                        <input readOnly type="number" placeholder={field0092} id="buildingno" value={this.state.fieldArray.buildingnumber}/>
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0180} </label>
                        <input readOnly type="text" placeholder={field0180} id="address2" value={this.state.fieldArray.address2} />
                      </div>
                    </div>
                    </div>
                    <div className="row" >
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label> {field0046}</label>
                        <input readOnly type="text" id="address1" placeholder={field0046} value={this.state.fieldArray.address1} />
                      </div>
                    </div>
               
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0020}</label>
                        <input readOnly type="text" placeholder={field0020} value={this.state.fieldArray.country} />
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0056} </label>
                        <input readOnly type="text" placeholder={field0056} id="proviceid" value={this.state.fieldArray.city} />
                      </div>
                    </div>
                    </div>
                    <div className="row" >

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0194}</label>
                        <input readOnly type="number" placeholder={field0194} id="zipcode" value={this.state.fieldArray.zipCode} />
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0111}</label>
                        <input readOnly type="number" placeholder={field0111} id="pobox" value={this.state.fieldArray.poBox} />
                      </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0122}</label>
                        <input readOnly id="dist" type='text' placeholder={field0122} value={this.state.fieldArray.district} />
                       
                      </div>
                    </div>
                  </div>

                 
                </div>
                <div className="">
                  <div className="text-center" style={{fontWeight:'600',fontSize:'19px',margin:'20px'}}>{field0005}</div>
                  <div className="row" >
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label name="subsector">{field0007}</label>
                        <input readOnly type="text" name="subsector" placeholder={field0007} id="subsector" value={this.state.fieldArray.subSector} />
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label name="sector">{field0006}</label>
                        <input readOnly
                        placeholder={field0006}
                          type="text"
                          name="sector"
                          id="sector"
                          value={this.state.fieldArray.sector}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label name="emptype">{field0030}</label>
                        <input readOnly
                        placeholder={field0030}
                          type="text"
                          name="employmentType"
                          id="employmentPage"
                          value={this.state.fieldArray.employmentType}
                        />
                      </div>
                    </div>
                    </div>
                    <div className='row'>

                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0004}</label>
                          <input readOnly
                          placeholder={field0004}
                            type="text"
                            name="nameOfEmployer"
                            value={this.state.fieldArray.employerName}
                          />
                        </div>
                      </div>
                    </div>
              
                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label for="designation">{field0008}</label>
                          <input readOnly
                          placeholder={field0008}
                            type="text"
                            name="nameOfEmployer"
                            id="empname"
                            value={this.state.fieldArray.designation}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0010}</label>
                        <input readOnly
                        placeholder={field0010}
                          type="number"
                          name="serviceinmonth"
                          value={this.state.fieldArray.serviceinmonths}
                        />
                      </div>
                    </div>
                    </div>

                                      <div className='row'>

                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                        <label>{field0009}</label>
                        <input readOnly
                        placeholder={field0009}
                          type="text"
    
                          value={this.state.fieldArray.dateOfJoining}
                          onChange={this.processInput}
                          style={{ fontSize: '14px' }}
                        />
                      </div>
                    </div>
                    </div>
                
                  <br />
                  <div className="text-center" style={{fontWeight:'600',fontSize:'19px',margin:'20px'}}>Financial Details</div>
                    <div className="row">
                    <div className="col-sm-4 col-xs-12">
                      <div>
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0031} </label>
                          <input readOnly
                          placeholder={field0031}
                            type="number"
                            name="financialpremium"
                            value={this.state.fieldArray.financePremium}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div>
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0013}</label>
                          <input readOnly
                          placeholder={field0013}
                            type="number"
                            name="monthlyeditionincome"
                            value={this.state.fieldArray.monthlyAdditionalIncome}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0012} </label>
                          <input readOnly
                          placeholder={field0012}
                            type="number"
                            name="monthlysalary"
                            value={this.state.fieldArray.monthlySalary}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" >
                  
                    <div className="col-sm-4 col-xs-12">
                      <div>
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0016} </label>
                          <input readOnly
                          placeholder={field0016}
                          
                            type="number"
                            name="numberofdependencychild"
                            value={this.state.fieldArray.noofchildren}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0015} </label>
                          <input readOnly
                          placeholder={field0015}
                            type="number"
                            name="numberofdependencyspouse"
                            value={this.state.fieldArray.numofdpdntSpouse}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                 

                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0018}</label>
                          <input readOnly
                          placeholder={field0018}
                            type="number"
                            name="monthlyhomerent"
                            value={this.state.fieldArray.monthlyHomeRent}
                            onChange={this.processInput}
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className='row'>
                  
                    <div className="col-sm-4 col-xs-12">
                      <div >
                        <div className="agent-lablestyle"  style={{marginTop:'20px'}}>
                          <label>{field0017} </label>
                          <input readOnly type='text'  value={this.state.fieldArray.accommodationType} placeholder={field0017}/>
                           
                        </div>
                      </div>
                    </div>
                 
                  
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle shadow" style={{marginTop:'20px'}}>
                        <label>{field0021} </label>
                        <input readOnly
                        placeholder={field0021}
                          type="text"
                          name="financingInstallments"
                          disabled
                          value={this.state.fieldArray.financingInstallments}
                          className="shadow"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle shadow" style={{marginTop:'20px'}}>
                        <label>{field0032}</label>
                        <input readOnly type="text" name="obligationmonthly" value={this.state.fieldArray.obligationsMonthly} placeholder={field0032}  className="shadow" />
                      </div>
                    </div>
                    </div>
                    <div className='row'>
                

                   
                    <div className="col-sm-4 col-xs-12">
                      <div className="agent-lablestyle shadow" style={{marginTop:'20px'}}>
                        <label>{field0022}</label>
                        <input readOnly type="text" placeholder={field0022} name="creditLimit" disabled value={this.state.fieldArray.creditCardsLimits}className="shadow" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="second-page">
                  <div className="asset-table" style={{overflow:'auto'}}>
                      {this.state.assetDataArray !=null && this.state.assetDataArray!=''?
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
                        {this.state.assetDataArray.map((row, index) => {
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
                        })}
                      </tbody>
                    </table>
                    :""}
                  </div>
                  <div className='row text-center'>
                      <button className='signup-btn' onClick={this.viewdashboard} style={{width:'100px',padding:'10px'}}>Close</button>
                  </div>
                </div>



</div>
              </div>
            </div>
          </div>
      
      </div>
      </React.Fragment>

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(customerdetails);