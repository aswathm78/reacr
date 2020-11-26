import React, { Component } from 'react';
import './setting.css';
import image from '../../assets/images/alarm.png'
class notification extends Component {
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
                            <div className="card-body ">
                                <div className="notification_heading">
                                    Notifications
                                </div>
                                <div style={{"border-bottom":"1px solid #ccc"}}>
                                <div className="notification_alltxt">
                                    <div className="notification_alarm">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="notification_txt">
                                    Maalem Financing now available on google Assistant !
                                   
                                    </div>
                                  
                                </div>
                                <div className="notification_subtxt">
                                    Long press home button on your android Smart phones and just say “Talk to Maalem Financing”, you can ask for account statement, EMI and loan details, etc..
                                    </div>
                                    </div>


                                    <div className="notification_alltxt">
                                    <div className="notification_alarm">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="notification_txt">
                                    Maalem Financing now available on google Assistant !
                                   
                                    </div>
                                  
                                </div>
                                <div className="notification_subtxt">
                                    Long press home button on your android Smart phones and just say “Talk to Maalem Financing”, you can ask for account statement, EMI and loan details, etc..
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default notification;