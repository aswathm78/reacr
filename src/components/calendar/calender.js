import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../assets/css/calender/calender.css'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../../assets/css/chatWidget.css';
import moment from 'moment'
//import Header from '../header/header'
const localizer = momentLocalizer(moment)


class calender extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        // addResponseMessage(response);
    };

    render() {
        const dummyEvents = [
            {

                title: 'Conference',
                start: new Date('2020-08-13 15:01:26'),
                end: new Date('2020-08-13 15:01:26'),
                desc: 'Big conference for important people'
            },
            {

                title: 'meeting',
                start: new Date('2020-08-10 15:01:26'),
                end: new Date('2020-08-11 15:01:26'),
                desc: 'Big conference for important people'



            }


        ];
        return (
            
            <div>
              
                <div className="container-fluid maindivcal">
                    <div className="calenderheading">
                       <a href="http://www.dhanraj.com" style={{"color":"#333"}}>Calender</a> 
                       </div>

                    <div className="container clawidth">
                        <div className="row">
                            <div id="calendercls">
                                <div className="calenderview">
                                    Calender view
                        </div>
                                <Calendar
                                    text="hello"
                                    localizer={localizer}
                                    events={dummyEvents}
                                    startAccessor="start"
                                    endAccessor="end"
                                    style={{ height: 500, "backgroundColor": "#ffff" }}

                                />
                            </div>
                        </div>
                    </div>


                </div>
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="Maleem Financing"
                    subtitle="Best Loan service"
                />
            </div>
        );
    }
}

export default calender;