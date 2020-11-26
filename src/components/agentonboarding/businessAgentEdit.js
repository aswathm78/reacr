import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';
import EditAgents from './editagent'
export default class BusinessAgentEdit extends Component {
    constructor(props) {
        super(props);
    }

    
  componentDidMount () {

   
     }
  
    

    render() {
        return (
            <div className="rtl-css">
                <div className="container-fluid add-agent">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <SideNav />
                        </div>
                        <div className="col-md-9 col-sm-9 col-xs-12 add-agent-panel">
                               
                         <EditAgents/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}