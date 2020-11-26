import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
//import LogoComponent from './LogoComponent';
import MenuItemComponent from './menuitem';
import { Link } from 'react-router-dom'

//import IconBurger from './assets/icon-burger.js';
import IconOverview from './assets/icon-overview.js';
//import IconTickets from './assets/icon-tickets.js';
import IconIdeas from './assets/icon-ideas.js';
//mport usericon from './assets/welcome.png'
//import { Profile } from './assets/profile.jpg'

import IconBurger from './assets/dashboard.js'
import Loaninfo from './assets/loan-information.js'
import ReferralIcon from './assets/referralproIcon.js'
import LoyaityIcon from './assets/loyaityIcon.js'
import feedback from './assets/feedback.js'
import TicketIcon from './assets/ticketsupport'
import ProfileIcon from './assets/profile.js'
// import './content.css'
import './sidebar0.css'
function SidebarComponent({onChange, selectedItem, props}){
    const onItemClicked = item => {
        
        return onChange(item);
    };
    return(
       <>
       {console.log(this,'this is for sidebar')}
       <div className="sidebar0">
           <div className="sidebarFixed">
           <div className="sidebarGreeting">Welcom Abdulla</div>
           <div className="sidebarMenus">

           {/* <div  onClick={() => onItemClicked('Hello Abdulla')}>Hello Abdulla</div> */}
           <div  onClick={() => onItemClicked('Dashboard')}>Dashboard</div>
           <div  onClick={() => onItemClicked('Loan Information')}>Loan Information</div>
           <div  onClick={() => onItemClicked('Ticket & support')}>Ticket & Support</div>
           <div  onClick={() => onItemClicked('User Profile')}>User Profile</div>
           <div  onClick={() => onItemClicked('Settings')}>Settings</div>
           <div  onClick={() => onItemClicked('Feedback')}>Feedback</div>
           

           </div>
           <div className="sidebarBottom"></div>
           </div>
       </div>
        </>
    )
}

export default SidebarComponent;