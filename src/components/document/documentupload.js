import React, { Component} from 'react';

import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import './apply.css'
import Applynow from './applynow'
import Feature from './feature&benefits'
import Eligible from './eligiblecriteria'
import Documentreq from './documentrequired'
import Fees from './feecharges'
//import '../repayment/repayment.css'
class documentupload extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                 <TabProvider defaultTab="one">
        <section className="my-tabs">
          <TabList className="my-tablist">
            <Tab tabFor="one">Apply Now</Tab>
            <span className="divider"></span>

            <Tab tabFor="two">Features & Benefits</Tab>
            <span className="divider"></span>

            <Tab tabFor="three">Eligible criteria</Tab>
            <span className="divider"></span>

            <Tab tabFor="four">Documents Required</Tab>
            <span className="divider"></span>

            <Tab tabFor="fifth">Fee & Charges</Tab>
            <span className="divider"></span>


            
          </TabList>

          <div className="wrapper tablistpadding">
            <TabPanel tabId="one">
              <p><Applynow/></p>
            </TabPanel>
            <TabPanel tabId="two">
              <p><Feature/></p>
            </TabPanel>
            <TabPanel tabId="three">
              <p><Eligible/></p>
            </TabPanel>
            <TabPanel tabId="four">
              <p><Documentreq/></p>
            </TabPanel>
            <TabPanel tabId="fifth">
              <p><Fees/></p>
            </TabPanel>
          </div>
        </section>
      </TabProvider>
            </div>
        );
    }
}

export default documentupload;