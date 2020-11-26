import React, { Component } from 'react';
import './setting.css'
import image from '../../assets/images/correct.png'
class passwordsuccess extends Component {
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
                               <div className="passwordchanged">
                               {this.props.lang=='en' ? 'Password changed':'پاس ورڈ تبدیل کر دیا گیا'}
                               </div>
                               <div className="pwd_changedimg">
                                   <img src={image} style={{"width":"9%"}} alt=""/>
                               </div>
                               <div className="pwdchanged_txt">
                               {this.props.lang=='en' ? 'your Password has been changed successfully':'آپ کا پاس ورڈ کامیابی کے ساتھ تبدیل کر دیا گیا ہے'}
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default passwordsuccess;