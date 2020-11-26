import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './standardform.css'
import BasicInformation from './basicinfo'
import Personal from './personaldetails'
import Employmentdetails from './employmentdetails'
import Loanstatus from './loanstatus'
import AMORTIZATION from './amortization'

import { connect } from "react-redux";
import * as actionTypes from "../../store/action";
import { loanInformationDetails,yakeendetails, Loaninfofun,checking } from "../../store/action";
import Axios from 'axios';

const mapStateToProps = (state) => {

    return {
        ...state,
        language: state.reducer.language,

    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
            loanInformationDetails: () => dispatch(loanInformationDetails()),
            // checking: () => dispatch(checking()),
            // Loaninfofun:()=> dispatch(Loaninfofun()),
    });
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onChangeLanguage: (value) =>
//             dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
//             loanInformationDetails: () => dispatch(loanInformationDetails()),
//             // Loaninfofun:()=> dispatch(Loaninfofun()),
//     };
// };
class standardform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          LoanUserInfo2:''
        }
    }
    async componentDidMount()
    {
          await this.props.loanInformationDetails();
           Axios.get('http://122.166.172.240:4000/loandetails').then((x)=>{
            console.log(x.data,'000 ---') 
            this.setState({LoanUserInfo2:x.data.Loandetails[0]})
           return x.data
           }).catch((error)=>console.log(error))
          //  await this.props.checking();
          //  this.props.Loaninfofun();
    }
    render() {
      console.log(this,'000 ---')
      let loaninformationdetails = this.props.reducer.loanInformationDetails ? this.props.reducer.loanInformationDetails : []
     console.log(loaninformationdetails,'000 --- loan information data getting')
      let basicinformationbtn,loandetails,employmentdetails,loanstatus,Amortizationschedule

      if (loaninformationdetails) {
        loaninformationdetails.map((b, index) => {
            if (b.lang == window.sessionStorage.getItem('language')) {
              basicinformationbtn=b.basicinformationbtn;
              loandetails=b.loandetails;
              employmentdetails=b.employementdetails;
              loanstatus=b.loanstatusbtn;
              Amortizationschedule=b.amortizationschedule


            }
        })
    }
        return (
          <div>
          <div  className="backgroundstyling">
                            <h3 style={{"color":"#ffff","padding-left":"25px","font-weight":"bold"}}>{this.props.lang=='en'?'LOAN INFORMATION':'قرض کی معلومات'}</h3>
                        </div>
          <div style={{"padding":"30px"}}>

         
            <div className="tabliststyling">
                 <TabProvider defaultTab="two">
        <section className="my-tabs">
          <TabList className="my-tablist" style={loaninformationdetails.lang == 'ar'? {padding:'1rem,6rem'} :null}>
            {/* <Tab tabFor="one">Apply Online</Tab>
            <span className="divider"></span> */}

          <Tab tabFor="two">{basicinformationbtn}</Tab>
            <span className="divider"></span>

          <Tab tabFor="three">{loandetails}</Tab>
            <span className="divider"></span>

          <Tab tabFor="four">{employmentdetails}</Tab>
            <span className="divider"></span>

          <Tab tabFor="fifth">{loanstatus}</Tab>
            <span className="divider"></span>

          <Tab tabFor="six">{Amortizationschedule}</Tab>
            <span className="divider"></span>

            


            
          </TabList>

          <div className="wrapper standardpadding" style={{textAlign:`${this.props.lang=='en'?'left':'right'}`}}>
            {/* <TabPanel tabId="one">
              
            </TabPanel> */}
            <TabPanel tabId="two">
            <BasicInformation {...this.props} lonaUserInfo ={this.state.LoanUserInfo2}/>
            </TabPanel>
            <TabPanel tabId="three">
              <Personal {...this.props}  lonaUserInfo ={this.state.LoanUserInfo2}/>
            </TabPanel>
            <TabPanel tabId="four">
            <Employmentdetails {...this.props}  lonaUserInfo ={this.state.LoanUserInfo2}/>
            </TabPanel>
            <TabPanel tabId="fifth">
            <Loanstatus {...this.props}  lonaUserInfo ={this.state.LoanUserInfo2}/>
            </TabPanel>
            <TabPanel tabId="six">
            <AMORTIZATION {...this.props}  lonaUserInfo ={this.state.LoanUserInfo2}/>
            </TabPanel>
          </div>
        </section>
      </TabProvider>
            </div>
            </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//   return {
//       language: state.reducer.language,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//       onChangeLanguage: (value) =>
//           dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(standardform);
export default connect(mapStateToProps, mapDispatchToProps)(standardform)
