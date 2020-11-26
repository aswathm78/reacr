import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import Servicerequest from './servicerequest'

import Changepassword from './getotp'
import Mainchangepwd from './passwordchangemain'
class mainsetting extends Component {
    constructor(props) {
        super(props)

        this.state = {
           tabtest:1
        }
    }

    render() {
        return (
            <div>
                <div style={{ "padding": "30px" }}>

                    <TabProvider defaultTab="two">
                        <section className="my-tabs">
                            <TabList className="my-tablist">

                                <Tab tabFor="two">{this.props.lang=='en' ? 'APP Notification':'اے پی پی کی اطلاع'}</Tab>
                                <span className="divider"></span>

                             

                                <Tab style={{"border-radius":'0 10px 10px 0'}} tabFor="four">{this.props.lang=='en' ? 'CHANGE PASSWORD':'پاس ورڈ تبدیل کریں'}</Tab>
                                <span className="divider"></span>







                            </TabList>

                            <div className="wrapper">

                                <TabPanel tabId="two">
                                    {/* <Servicerequest /> */}
                                </TabPanel>
                               
                                <TabPanel tabId="four">
                                    <Mainchangepwd lang={this.props.lang} tab={this.state.tabtest}/>
                                </TabPanel>

                            </div>
                        </section>
                    </TabProvider>
                </div>
            </div>
        );
    }
}

export default mainsetting;