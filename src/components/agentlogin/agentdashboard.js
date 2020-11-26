
// import React, { Component } from 'react';
// import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
// import './agentsigin.css';
// import axios from 'axios';
// import $ from 'jquery';
// import Loader from '../smelogin/utils/loader'
// import Logo from '../agentlogin/maalem-logo.png'
// import StcLogo from '../../assets/images/stc-logo.png'
// import './newStyleHndle.scss'
// import JARIRLogo from './jarir.png'
// export default class agentdashboard extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       resp: [],
//       activekey: 4,
//       input: {},
//       errors: {},
//       pwd: {},
//       otp: {},
//       nid: {},
//       idenotp: {},
//       aapRequest: {},
//       loaderState:false
//     };
//   }


//   detailPage = (ids,e,status,data) => {
//       this.setState({loaderState:true})
//     if(status=='Approved'){
//       window.sessionStorage.setItem('userid', ids);
//       this.props.history.push({pathname:'/agent/details',
//       data:data});
//     }else{
//       window.sessionStorage.setItem('userid', ids);
//       this.props.history.push({pathname:'/agent/details',
//       data:data});
//       // window.sessionStorage.setItem('userid', ids);
//       // this.props.history.push('/customer/details');
//     }
    
//   }

//   componentDidMount() {

//     $(document).ready(function () {
//       $("#myInput").on("keyup", function () {
//         var value = $(this).val().toLowerCase();
//         $("#myTable tr").filter(function () {
//           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//       });
//     });
//     this.getLoanData();
//     // this.getApplicationData(
//     //   callBack => {
//     //     console.log(callBack);
//     //   },
//     //   e => {
//     //     console.lof(e);
//     //   }
//     // );

//     console.log(this.state.resp);

//   }

//   getLoanData = () => {
//     this.setState({loaderState:true})
//   console.log(window.sessionStorage.getItem('agentId'))
//     // const iord_id_token=window.sessionStorage.getItem('iord_id_token') ;
//     fetch("http://122.166.172.240:3031/api/iord-soluton/agentdashboard/"+window.sessionStorage.getItem('agentId'), {
//       method: 'GET',
//       headers: {
//         'Authorization': 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       data1: JSON.stringify([]),

//     }).then((Response) => Response.json())

//       .then(result => this.setState({ resp: result,loaderState:false }))
//     // console.log(result);

//   }


//   getApplicationData = () => {
//     const config = {
//       method: 'post',
//       url:
//         'https://cors-anywhere.herokuapp.com/http://14.141.165.36:8100/KASTLE-BASE-ULS-API-0.0.1-SNAPSHOT/digital/onlineApplication?access_token=7e3dfdc3-8e36-42c0-8f76-a6310a315040',
//       headers: {
//         appId: '1',
//         'Content-Type': 'application/json',
//       },
//       data: JSON.stringify([]),
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data.DupResult));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   newcustomer = () => {
//     this.props.history.push('/agent/newcustomer');
//   };

//   viewdashboard = () => {
//     this.props.history.push('/agent/dashboard');
//   };

//   logout = () => {
//     this.props.history.push('/agent/signin');
//   };
//   dropDownHandler = (e) => {
//     if ((e.target.value) == 'en') {
//       window.sessionStorage.setItem('language', 'en')
//       window.location.reload(false);
//     } else if ((e.target.value) == 'ar') {
//       window.sessionStorage.setItem('language', 'ar')
//       window.location.reload(false);
//     } else if ((e.target.value) == 'logout') {
//       this.logout()
//     }

//   }
//   render() {
    
//     // const vendor = window.sessionStorage.getItem('vendor').toLowerCase();
// const vendor ='test'
//     console.log(this.state.resp)
//     return (
// <React.Fragment>
//   {this.state.loaderState?
//   <Loader/>
// :""}
//        <div className='container-fluid'>
//         <div className={(window.sessionStorage.getItem('language'))=='en'?'englishCssStc':'arabicCssStc'}>
//         <div className=' mobileView'>
//           <div
//             className=''
//             style={{
//               borderRadius: '10px',
//               // marginLeft: '20px'
//             }}
//           >
//              <div className='top-image' >
//               <div className='col-sm-2 col-xs-12  text-center'>
//                 <img
//                   src={Logo}
//                   style={{ maxWidth: '130px', marginTop: '17px' }}
//                 />
//               </div>
//             </div>
//             <div
//               className='col-sm-10 col-xs-12 card-main-head'
//               style={{ marginTop: '33px',height:'77px' }}
//             >
//               <div >
//                 <div className='col-xs-6 col-sm-6' style={{ direction: 'ltr' }}>
//                   <div className={vendor}></div>
//                   {window.sessionStorage.getItem('vendor')=='STC'?
//                   <img
//                     src={StcLogo}
//                     style={{ maxWidth: '100px', marginTop: '10px' }}
//                   />
//                   :""}
//                   {window.sessionStorage.getItem('vendor')=='JARIR' ?
//                    <img
//                     src={JARIRLogo }
//                     style={{ maxWidth: '150px'}}
//                   />
//                   :""}
//                 </div>
//                 {/* <div className='col-xs-6 col-sm-6'> */}
//                 <div className='col-xs-6 col-sm-6 side-dropdown' style={{ textAlign: 'end' }}>
//                   <select defaultValue={window.sessionStorage.getItem('language')} onChange={(e) => this.dropDownHandler(e)} style={{ background: 'white', marginTop: '25px' }}>
//                     <option value='logout'>logout</option>
//                     <option value='en'>English</option>
//                     <option value='ar'>Arabic</option>

//                   </select>
               
//                 </div>
//                 {/* </div> */}
//               </div>

//               <br />
//             </div>
//             <div className='down-image'>
//               <div className='col-sm-2 col-xs-12  text-center'>
//                 <img
//                   src={Logo}
//                   style={{ maxWidth: '130px', marginTop: '17px' }}
//                 />
//               </div>
//             </div>
//           </div>
//           <br />
//           {/* <div className='col-sm-3 searchText'>
//             <input
//               className='form-control'
//               id='myInput'
//               type='text'
//               placeholder='Search Customer Data..'
//             />
//           </div> */}
//           <div className='col-sm-12 col-xs-12 '>
//             <button
//               className='signup-btn'
//               onClick={this.newcustomer}
//               style={{ margin: '10px 0 0px' ,width:'150px'}}
//             >
//               New Customer
//             </button>
//           </div>
//           {this.state.resp !='' && this.state.resp !=null?
//           <div className='col-sm-12 col-xs-12 table-main-card'>
//             <h6>Loan Applications</h6>
//             <table
//               id='dtBasicExample'
//               className='table table-striped'
//               // className='table table-striped table-bordered table-sm'
//               // style={{ textAlign: 'right' }}
//               cellspacing='0'
//               width='100%'
//             >
//               <thead>
//                 <tr>
//                   <th className='th-sm'>Actions</th>
//                   <th className='th-sm'>Creation Date</th>
//                   <th className='th-sm'>Status</th>
//                   <th className='th-sm'>Branch</th>
//                   <th className='th-sm'>Business</th>
//                   <th className='th-sm'>Customer Mobile</th>
//                   <th className='th-sm'>Customer Name</th>
//                   <th className='th-sm'>Loan ID</th>
//                 </tr>
//               </thead>
//               <tbody id="myTable">
//                 {(this.state.resp.length > 0) ? this.state.resp.map((rp, index) => {
//                 var str = rp.createdDate;
//                 var res = str.split("-").join("/");
//                 console.log(res)
//                   return (
//                     <tr key={index}>
//                       <td><i onClick={(e) => this.detailPage(rp.appId, e,rp.loanCurrentStatus,rp)} className="fa fa-info-circle" style={{cursor:'pointer'}} aria-hidden="true"></i>
// </td>
//                       <td>{res}</td>
//                   <td>{rp.loan_current_status}</td>
//                   <td>{rp.vendorBranch}</td>
//                       <td>{rp.nature_of_business}</td>
//                   <td>{rp.customerMobileNumber}</td>
//                   <td>{rp.customreName}</td>
//                       <td><span  className="hyperlink">{rp.appId}</span></td>

//                     </tr>
//                   )
//                 }) : <tr><td colSpan="8">Loading...</td></tr>}

//               </tbody>
//             </table>
//           </div>
//           :<div style={{marginTop:'300px'}}><h3 className='text-center'>No Data Found</h3></div>}
//         </div>
//       </div>
//       </div>
//       </React.Fragment>

//     );
//   }
// }


import React, { Component } from 'react';
import { Container, Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';
import './agentsigin.css';
import axios from 'axios';
import $ from 'jquery';
import Loader from '../smelogin/utils/loader'
import Logo from '../agentlogin/maalem-logo.png'
import StcLogo from '../../assets/images/stc-logo.png'
import './newStyleHndle.scss'
import JARIRLogo from './jarir.png'
export default class agentdashboard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      resp: [],
      activekey: 4,
      input: {},
      errors: {},
      pwd: {},
      otp: {},
      nid: {},
      idenotp: {},
      aapRequest: {},
      loaderState:false,
      cmscustomerdata:[]
    };
  }


  detailPage = async (ids,e,status,data) => {
    console.log(status)
    this.setState({loaderState:true})
    if(status=='Approved' || status=='Draft' || status=='OnlineApplication'){
      window.sessionStorage.setItem('userid', ids);
      this.props.history.push({pathname:'/agent/details',
      data:data});
    }else{
      if(status=='Duplicate Entry'){
          let duplicateData = await this.getDuplicateDecision(data.appId)
          if(duplicateData && duplicateData.underwriterDecision=='P'){
            window.sessionStorage.setItem('userid', ids);
            this.props.history.push({pathname:'/agent/details',
            data:data});
          }
      }
      // window.sessionStorage.setItem('userid', ids);
      // this.props.history.push({pathname:'/agent/details',
      // data:data});
      window.sessionStorage.setItem('userid', ids);
      this.props.history.push({pathname:'/customer/details',
      data:data});
    }   
  }
getLanguageData=()=>{
  this.setState({loaderState:true})
  axios.get('http://122.166.172.240:1337/customer-sign-up-and-agent-dashboards')
  .then(res => {
    console.log(res)
    if(window.sessionStorage.getItem('language')=='en'){
    this.setState({ cmscustomerdata: res.data[0],loaderState:false });
    }else{
      this.setState({ cmscustomerdata: res.data[1] ,loaderState:false});
    }
    console.log('cmscustomerdata', this.state.cmscustomerdata)
  });

}

async getDuplicateDecision(appId){
  let headerConfig = {
    headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token') },
};
  try {
    const response = await axios.get(`http://122.166.172.240:3031/api/duplicate-decisions?appId.equals=` +appId, headerConfig);
    console.log("getDuplicateDecision",response)
    if(response.data.length>0){
        return response.data[0]
    }
    
} catch (error) {
    console.log(error);
    return {};
}
}


  componentDidMount() {
this.getLanguageData()
    $(document).ready(function () {
      $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
    this.getLoanData();
    // this.getApplicationData(
    //   callBack => {
    //     console.log(callBack);
    //   },
    //   e => {
    //     console.lof(e);
    //   }
    // );

    // console.log(this.state.resp);

  }

  getLoanData = () => {
    this.setState({loaderState:true})
  console.log(window.sessionStorage.getItem('agentId'))
    // const iord_id_token=window.sessionStorage.getItem('iord_id_token') ;
    fetch("http://122.166.172.240:3031/api/iord-soluton/agentdashboard/"+window.sessionStorage.getItem('agentId'), {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data1: JSON.stringify([]),

    }).then((Response) => Response.json())

      .then(result => {
        console.log(result);
        this.setState({ resp: result,loaderState:false })
      })
    

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
  dropDownHandler = (e) => {
    if ((e.target.value) == 'en') {
      this.setState({loaderState:true})
      window.sessionStorage.setItem('language', 'en')
      this.setState({loaderState:false},()=>this.getLanguageData())

      // window.location.reload(false);
    } else if ((e.target.value) == 'ar') {
      this.setState({loaderState:true})

      window.sessionStorage.setItem('language', 'ar')
      this.setState({loaderState:false},()=>this.getLanguageData())

    } else if ((e.target.value) == 'logout') {
      this.logout()
    }

  }
  render() {
    
    // const vendor = window.sessionStorage.getItem('vendor').toLowerCase();
const vendor ='test'
    // console.log(this.state.resp)
    return (
<React.Fragment>
  {this.state.loaderState?
  <Loader/>
:""}
       <div className='container-fluid'>
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
                  <div className={vendor}></div>
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
                  <select defaultValue={window.sessionStorage.getItem('language')} onChange={(e) => this.dropDownHandler(e)} style={{ background: 'white', marginTop: '25px' ,width:'initial'}}>
                    <option value='logout'>{this.state.cmscustomerdata.logout}</option>
                    <option value='en'>{this.state.cmscustomerdata.english}</option>
                    <option value='ar'>{this.state.cmscustomerdata.arabic}</option>

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
          <br />
          {/* <div className='col-sm-3 searchText'>
            <input
              className='form-control'
              id='myInput'
              type='text'
              placeholder='Search Customer Data..'
            />
          </div> */}
          <div className='col-sm-12 col-xs-12 '>
            <button
              className='signup-btn'
              onClick={this.newcustomer}
              style={{ margin: '10px 0 0px' ,width:'150px'}}
            >
              {this.state.cmscustomerdata.new_customer}
            </button>
          </div>
          {this.state.resp !='' && this.state.resp !=null?
          <div className='col-sm-12 col-xs-12 table-main-card'>
            <h6>{this.state.cmscustomerdata.loan_application}</h6>
            <table
              id='dtBasicExample'
              className='table table-striped'
              // className='table table-striped table-bordered table-sm'
              // style={{ textAlign: 'right' }}
              cellspacing='0'
              width='100%'
            >
              <thead>

                <tr>
                  <th className='th-sm'>{this.state.cmscustomerdata.actions}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.creation_date}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.status}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.branch}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.business}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.customer_mobile}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.cust_name}</th>
                  <th className='th-sm'>{this.state.cmscustomerdata.loan_id}</th>
                </tr>
              </thead>
              <tbody id="myTable">
                {(this.state.resp.length > 0) ? this.state.resp.map((rp, index) => {
                var str = rp.createdDate;
                var res = str.split("-").join("/");
                console.log(res)
                  return (
                    <tr key={index}>
                      <td><i onClick={(e) => this.detailPage(rp.appId, e,rp.loan_current_status,rp)} className="fa fa-info-circle" style={{cursor:'pointer'}} aria-hidden="true"></i>
</td>
                      <td>{res}</td>
                  <td>{rp.loan_current_status}</td>
                  <td>{rp.vendorBranch}</td>
                      <td>{rp.nature_of_business}</td>
                  <td>{rp.customerMobileNumber}</td>
                  <td>{rp.customreName}</td>
                      <td><span  className="hyperlink">{rp.loanId}</span></td>

                    </tr>
                  )
                }) : <tr><td colSpan="8">{this.state.cmscustomerdata.loading}</td></tr>}

              </tbody>
            </table>
          </div>
          :<div style={{marginTop:'300px'}}><h3 className='text-center'>{this.state.cmscustomerdata.nodatafound}</h3></div>}
        </div>
      </div>
      </div>
      </React.Fragment>

    );
  }
}
