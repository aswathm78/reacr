import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import Calender from '../calendar/calender'
///import Dashboard from '../dashboard/dashboard'
import Feedback from '../feedBack/feedback.js'
// import Tickets from '../ticket&support/ticket'
//import Home from './home'
import TicketLetsConnect from '../ticket&support/ticketLetsConnect'

import Profile from '../profile/profile'
import Bankdetails from '../bankdetails/bankdetails'
import Upidetails from '../bankdetails/upidetails'
import Creditcard from '../bankdetails/creditcard'
//import Applyonline from '../document/applynow'
//import FeaturesBenifites from '../document/feature&benefits'
//import Eligible from '../document/eligiblecriteria'
//import DocumentRequired from '../document/documentrequired'
//import Feecharges from '../document/feecharges'
import Documentupload from '../document/documentupload'
import Loans from '../productdashboard/products'

import Setting from '../setting/mainsetting'
//import Repayment from  '../repayment-mode/repaymentmain'
import Beneficiaries from '../beneficiaries/beneficiaries'

import Referral from '../referral/mainreferral'
import Emiloancal from '../emiloancalculator/emiloancal'
import Standard from '../standardform/standardform'
import Newcustomer from '../newcustomerdetails/maincustomer'
import Notifcation from '../notification/notification'
import './content.css'
const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },

    // scrollcal:
    // {
    //   "overflow-x": "auto",
    //   "width":"80%"
    // },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }

});

class ContentComponent extends React.Component {
    render() {
       
        const { title ,lang} = this.props
       // console.log(title, 'aaaaa')
        return (
            <div>
                <Column>

                    {/* <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
            
            <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>  */}
                    <div className="report-pre">

                        {/* {title == "Calender" && <Calender />} */}

                        {/* {title =="Dashboard" && <Dashboard/>} */}
                        {title == "Feedback" && <Feedback {...this.props}/>}
                        {/* {title =="Ticket & support" && <TicketLetsConnect/>} */}
                        {title == "Ticket & support" && <TicketLetsConnect {...this.props}/>}
                        {title == "User Profile" && <Profile {...this.props}/>}
                        {title == "Bank Details" && <Bankdetails/>}
                        {title == "Loan Information" && <Standard {...this.props}/>}
                        {/* {title == "Loan Information" && <Newcustomer/>} */}
                        {title == "Dashboard" && <Loans {...this.props} />}
                        {title == "Settings" && <Setting {...this.props}/>}
                         {/* {title == "Re-payment Mode" && <Repayment {...this.props}/>}  */}
                        {title == "Referral Program" && <Referral {...this.props}/>}
                        {/* {title == "Loan Calculator" && <Emiloancal/>} */}
                        {title == "Beneficiaries" && <Beneficiaries {...this.props}/>}
                        {/* {title == "Notifcation" && <Notifcation {...this.props}/>} */}

                    </div>
                    {/* </Row> */}

                    {/* <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
               
                </Row>
            </Row>
            <div className={css(styles.todayTrends)}>
               
            </div>
            <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
                
            </Row> */}


                </Column>
            </div>
        );
    }
}

export default ContentComponent;