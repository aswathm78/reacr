import React, { Component } from 'react';
import './admin.css';
import Logo from '../../assets/images/logo.png';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="col-xs-12 head-style text-capitalize">
                <h6>Welcome {window.sessionStorage.getItem('agentName')} </h6>
                <span style={{marginRight:'35%',fontWeight:'bold', fontSize:'3.5rem', color:'#206fb7'}}><span style={{marginRight:'.8rem'}}>Maalem Financing </span>({window.sessionStorage.getItem('vendor')})</span>
            </div>
            // <div className="col-xs-12 head-style " style={{display:"flex",display: "flex", flexDirection:"row-reverse",justifyContent: 'space-around'}}>
            //     <h6>Welcome {window.sessionStorage.getItem('agentName')} </h6>
            //     <span style={{fontWeight:'bold', fontSize:'3rem', color:'#206fb7'}}>Maalem Financing({(window.sessionStorage.getItem('vendor')).toUpperCase()})</span>
            // </div>
            );
    }
}
