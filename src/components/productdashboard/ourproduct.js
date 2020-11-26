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

//import axios from 'axios'
import Loanfstsection from './loanfstsection'
import Activeloan from './activeLoan'
import Collapsible from 'react-collapsible';
import { connect } from "react-redux";
import { customerLoanDetails } from "../../store/action";
import { loanProductDetails } from "../../store/action";
//import Graph from './graph'


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
            //loanaccount: []
        }
    }
    async componentDidMount() {
        await this.props.customerLoanDetails()
        // await this.props.loanProductDetails('AAL')

    }
    //  settabid= async(tabId)=>
    //  {
    //     await this.props.loanProductDetails(tabId)
    //  }


    render() {
        const percentage = 66;

        return (
            <div>
                <div className="container loandashboardpadding" style={{ "margin-top": "3%" }}>
                    <div className="row">

                        <div className="car" style={{ "border-radius": "10px" }}>
                            <div className="card-body">
                                {/* <div className="dfs_ourproduct">
                                    OUR PRODUCT
                            </div> */}
                                <div style={{ "padding": "15px" }}>
                                    <TabProvider defaultTab="AAL">
                                        <section className="my-tabs">
                                            <TabList className="my-tablist">
                                                <Tab tabFor="AAL">Auto Loan</Tab>
                                                <span className="divider"></span>

                                                <Tab tabFor="CD">Consumer Loan</Tab>
                                                <span className="divider"></span>

                                                <Tab tabFor="MF">Commercial Loan</Tab>
                                                <span className="divider"></span>

                                                <Tab tabFor="SPER">Sme Loan</Tab>
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
                                                <TabPanel tabId="AAL">
                                                    <OurproductAutoloan />

                                                </TabPanel>
                                                <TabPanel tabId="CD">
                                                    <OurproductConsumerloan />
                                                </TabPanel>
                                                <TabPanel tabId="MF">

                                                    <OurproductCommercial />
                                                </TabPanel>
                                                <TabPanel tabId="SPER">
                                                    <OurproductSmeloan />
                                                </TabPanel>

                                            </div>
                                        </section>
                                    </TabProvider>
                                </div>
                                <div className="dfs_btnapplyloan">
                        <button className="dfs_applyforloan">Apply for Loan</button>
                          </div>
                            </div>
                        </div>




                        {/* <Loanfstsection/> */}
                       
                                {/* <div className="L-activeloanstyle"> */}
                                {/* <div className="card">
                                    <div className="card-body">
                                 
                                    Active Loan
                                   
                                <Collapsible trigger={<img src="http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png"/>}>
                                        <Activeloan />
                                    </Collapsible>
                                </div>
                                 
                                    </div> */}
                                  
                                    
                               
                                 
                                {/* </div> */}

                           
                               {/* <Loanfstsection/>

                               <Autoloan/> */}
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