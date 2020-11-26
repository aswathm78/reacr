import React, { Component } from 'react';
import './setting.css'

import SentOtp from './sentotp'
class setting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        
        }
    }
  
   
    render() {
       
        return (
            <div>
               
               
                <div className="container settingpgpadding">
                    <div className="row">
                        <div className="card settingstyle">
                            <div className="card-body">
                                <div className="changepwd">
                                {this.props.lang=='en' ? 'Change your password':'اپنا پاس ورڈ تبدیل کریں'}
                                </div>
                                <div className="mobileenter">
                                {this.props.lang=='en' ? 'Enter Your Mobile Number':'اپنے موبائل فون کا نمبر درج کریں'} 
                                </div>
                               <div className="row">
                                
                                <div className="getotpnum">
                                        <input type="text" placeholder="Mobile Number"/>
                                    </div>
                                
                                
                                <div className="getotpbtn">
                               
                               <button className="getotp" onClick={()=>this.props.onTabClick(2)} >Get OTP</button>
                            
                              
                        
                                        
                                    </div>
                                    
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               
            </div>
        );
 
    }
}

export default setting;