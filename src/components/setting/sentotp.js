import React, { Component } from 'react';
import Passwordsucc from './passwordsuccess'
class sentotp extends Component {
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
                                {this.props.lang=='en' ? ' OTP sent to Register mobile number':'او ٹی پی رجسٹر موبائل نمبر پر بھیجا گیا'} 
                                </div>
                               
                                
                                <div className="otpstyle">
                                        <input  type="text" maxlength="6" />
                                    </div>
                                
                               
                                <div className="getotpbtn">
                                        <button className="getotp"  onClick={()=>this.props.onTabClick(3)} >Submit OTP</button>
                                    </div>
                                
                               
                            </div>
                        </div>


                    </div>
                    {/* <Passwordsucc/> */}
                </div>

               
            </div>
        );
    }
}

export default sentotp;