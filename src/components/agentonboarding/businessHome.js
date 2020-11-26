import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';

export default class BusinessHome extends React.Component {
    constructor(props) {
        super(props);
      
    }

    
  componentDidMount () {
     }
  
     onChange (e) {
        this.setState({[e.target.name]:e.target.value});
        
      }

      agentTable = (e) => {
        this.props.history.push('/agent/agenttable');
      };

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
                              
                         
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}