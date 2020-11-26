import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Autoloan from './autoloan'
import Consumerloan from './consumerloan'
import Commercial from './commercial'
import Smeloan from './smeloan'
import OurproductAutoloan from './ourproduct_autoloan'
import OurproductCommercial from './ourproduct_commercial'
import OurproductConsumerloan from './ourproduct_consumerloan'
import OurproductSmeloan from './ourproduct_smeloan'
import './loans.css'
import './product.css'
//import axios from 'axios'
import Loanfstsection from './loanfstsection'
import Activeloan from './activeLoan'
import Collapsible from 'react-collapsible';
import { connect } from "react-redux";
import { customerLoanDetails } from "../../store/action";
import { loanProductDetails } from "../../store/action";
//import Graph from './graph'
import Loancalculator from '../emiloancalculator/emiloancal'
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { IconButton } from '@material-ui/core';
const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    customerLoanDetails: () => dispatch(customerLoanDetails()),
    loanProductDetails: (data) => dispatch(loanProductDetails(data)),

});
class autoloan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loanoverview: [],
            loanoverdue: [],
            transcationdetails: [],
            loanRequest:[],
            //loanaccount: []
            display:'none'
        }
        console.log(this,'this is for dashboard')
    }
    async componentDidMount() {
        await this.props.customerLoanDetails()
    }
    
  onItemClicked = item => {
        console.log(this);

        this.props.onChange(item);
    };


    render() {
        const percentage = 66;

        return (
            <div>
                <div className="container loandashboardpadding" style={{ "margin-top": "3%" }}>
                    <div  className="row">

                        <div className="custom-border" style={{ "border-radius": "10px","margin":'0 1%' }}>
                            <div className="card-body">
                                <div  style={{textAlign:'center'}} className="dfs_ourproduct">
                                {this.props.lang == 'en'? ' OUR PRODUCTS':'ہماری مصنوعات'} 
                            </div>
                                <div style={{ "padding": "15px" }}>
                                    <TabProvider defaultTab="MF">
                                        <section className="my-tabs">
                                            <TabList className="my-tablist">
                                                {/* <Tab tabFor="AAL">Auto Loan</Tab>
                                                <span className="divider"></span>

                                                <Tab tabFor="CD">Consumer Loan</Tab>
                                                <span className="divider"></span> */}

                                                <Tab style={{marginLeft:'20%',"border-radius": "10px 0 0 10px"}} tabFor="MF"> {this.props.lang == 'en'? 'Commercial Loan':'تجارتی قرض'} </Tab>
                                                <span className="divider"></span>

                                                <Tab tabFor="SPER">{this.props.lang == 'en'? 'Sme Loan':'سم لون'}</Tab>
                                                <span className="divider"></span>
                                                {/* <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Dropdown button
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Auto Loan</a>
                                                        <a class="dropdown-item" href="#">Consumer Loan</a>
                                                        <a class="dropdown-item" href="#">Commercial Loan</a>
                                                    </div>
                                                </div> */}




                                            </TabList>

                                            <div className="wrapper">
                                                {/* <TabPanel tabId="AAL">
                                                    <OurproductAutoloan />

                                                </TabPanel>
                                                <TabPanel tabId="CD">
                                                    <OurproductConsumerloan />
                                                </TabPanel> */}
                                                <TabPanel tabId="MF">

                                                    <OurproductCommercial lang={this.props.lang} />
                                                </TabPanel>
                                                <TabPanel tabId="SPER" >
                                                    <OurproductSmeloan lang={this.props.lang} />
                                                </TabPanel>

                                            </div>
                                        </section>
                                    </TabProvider>
                                </div>
                                <div className="dfs_btnapplyloan">
                        <button onClick={()=>this.onItemClicked('Loan Information')} className="dfs_applyforloan">{this.props.lang == 'en'? 'Apply for Loan':'قرض کے لئے درخواست دیں'}</button>
                          </div>
                            </div>
                        </div>




                        {/* <Loanfstsection/> */}
                       
                                {/* <div className="L-activeloanstyle"> */}
                                <div className="active-loan" style={{"margin":'3% 1%'}}>
                                <div className="active-loan-top" onClick={()=>{this.setState({display:this.state.display == 'none'? 'block':'none'})}}>
                                <sapn className="active-loan-heading" style={{fontWeight:'900', margin:'auto 10px'}} >{this.props.lang == 'en'? 'Active Loan':'فعال قرض'}</sapn>
                                <IconButton>
                                    <KeyboardArrowDownRoundedIcon style={{fontSize:'34px'}}/>
                                    </IconButton>
                                </div>
                                    
                                        <div className="active-loan-data" style={{display:this.state.display}}>
                                        <Activeloan />
                                        </div>
                               </div>
                               
                                 
                                {/* </div> */}

                           
{/* <Loancalculator/> */}
                                <div >
                                <Loanfstsection lang={this.props.lang}/>
                                </div>
                             
                               {/* <Autoloan/> */}
                               {/* <Graph/> */}

                               


                        {/*------------------- Ourproduct---------------- */}
                        {/* <div className="card" style={{"border-radius":"10px"}}>
                          <div className="card-body">
                         
                            <div style={{"padding":"15px"}}> */}
                        {/* <TabProvider defaultTab="auto">
                            <section className="my-tabs">
                                <TabList className="my-tablist">
                                    <Tab tabFor="auto">Auto Loan</Tab>
                                    <span className="divider"></span>

                                    <Tab tabFor="consumer">Consumer Loan</Tab>
                                    <span className="divider"></span>

                                    <Tab tabFor="commercial">Commercial Loan</Tab>
                                    <span className="divider"></span>

                                    <Tab tabFor="sme">Sme Loan</Tab>
                                    <span className="divider"></span>





                                </TabList>

                                <div className="wrapper">
                                    <TabPanel tabId="auto">
                                        <Autoloan />
                                    </TabPanel>
                                    <TabPanel tabId="consumer">
                                        <Consumerloan />
                                    </TabPanel>
                                    <TabPanel tabId="commercial">
                                        <Commercial />
                                    </TabPanel>
                                    <TabPanel tabId="sme">
                                        <Smeloan />
                                    </TabPanel>

                                </div>
                            </section>
                        </TabProvider> */}
                        {/* </div>
                                </div>
                                </div> */}



                    </div>


                    {/* </div>
                    </div> */}

                </div>
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(autoloan);