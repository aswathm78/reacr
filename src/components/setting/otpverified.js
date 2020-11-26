import React, { Component } from 'react';

class otpverified extends Component {
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
                                {this.props.lang=='en' ? '':''}  
                                </div>
                                <div className="passfield">
                                    <input type="text" placeholder="Type New Password"/>
                                </div>
                                <div className="passfield">
                                    <input type="text" placeholder="Re-enter New Password"/>
                                </div>
                                <div className="verifybtn">
                                        <button className="getotp"  onClick={()=>this.props.onTabClick(4)} >{this.props.lang=='en' ? 'Submit':'جمع کرائیں'}  </button>
                                    </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default otpverified;