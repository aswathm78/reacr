import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './referral.css'
import Referral from './referral'
import Applyreferralcode from './applyreferralcode'
class mainreferral extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
               <div className="referbackgroundstyling">
                            {/* <h3 style={{"color":"#ffff","padding-left":"25px","font-weight":"bold"}}>LOAN CALCULATOR</h3> */}
                        </div>
                <div className="container referralstyle" style={{"margin-top":"15px"}}>
                    <div className="row">
                  <TabProvider defaultTab="refer">
        <section className="my-tabs">
          <TabList className="my-tablist">
            <Tab tabFor="refer"  className="activestyle">REFER</Tab>
            <span className="divider"></span>
            <Tab tabFor="apply">APPLY</Tab>
            <span className="divider"></span>
         
          </TabList>
          <div className="wrapper" style={{"margin-top":"5%"}}>
            <TabPanel tabId="refer">
              <Referral {...this.props}/>
            </TabPanel>
            <TabPanel tabId="apply">
              <Applyreferralcode {...this.props}/>
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

export default mainreferral;