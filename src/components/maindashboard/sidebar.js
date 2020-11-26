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
import './content.css'

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 10,
        top: 34,
        marginTop: 10
    },
    container: {
        backgroundColor: '#43425D',
        width: 260,
        paddingTop: 32,
        height: 'calc(104% - 32px)',
        
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901

    },
    mainContainer: {
        height: '100%',
        minHeight: '50vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    mainContainerExpanded: {
        width: '100%',
        minWidth: '100vh'
    },
    menuItemList: {
        marginTop: 0
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    // separator: {
    //     borderTop: '1px solid #DFE0EB',
    //     marginTop: 16,
    //     marginBottom: 16,
    //     opacity: 0.06
    // },
    hide: {
        left: -255
    },
    show: {
        left: 0
    },

});

function SidebarComponent({ onChange, selectedItem, lang,props }) {
    // console.log(props,'sidebar')
    const [expanded, setExpanded] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const input1 = useRef(null);
    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        forceUpdate();
    }, [window.innerWidth]);

    const onItemClicked = item => {
        setExpanded(false);
        return onChange(item);
    };
    const onSubmenuClicked =(item) =>{
            // alert(item)
            return onChange(item)
    }
    const toggleMenu = () => setExpanded(!expanded);

    const renderBurger = () => {
        return (
            <div onClick={toggleMenu} className={css(styles.burgerIcon)}>
                <IconBurger />
            </div>
        );
    };

    return (
        <div style={{ position: 'relative' }}>

            <Row
                componentRef={element => (input1.current = element)}
                className={css(styles.mainContainer)}
                breakpoints={{
                    768: css(
                        styles.mainContainerMobile,
                        expanded && styles.mainContainerExpanded

                    )
                }}
            >
                {isMobile && !expanded && renderBurger()}
                <Column
                    className={css(styles.container)}
                    breakpoints={{
                        768: css(
                            styles.containerMobile,
                            expanded ? styles.show : styles.hide
                        )
                    }}
                >
                    <p style={{ color: "#ffff", "margin-left": "40px" }}>{lang == 'en' ? 'Maalem Financing' : 'مالیام فنانسنگ'}</p>
                    <Column className={css(styles.menuItemList)}>

                        <span style={{cursor:'default',textAlign:'center', padding:'1rem 0',color:'white'}}
                            >
                                {lang == 'en' ? 'Welcom Abdullah' : 'خوش آمدید Abdullah'}
                                </span>
                            
                            

                        <MenuItemComponent
                            title={lang == 'en' ? 'Dashboard' : 'ڈیش بورڈ'}
                            icon={IconBurger}
                            onClick={() => onItemClicked('Dashboard')}
                            active={selectedItem === 'Dashboard'}
                        />

                        <MenuItemComponent
                            title={lang == 'en' ? 'Loan Information' : 'قرض کی معلومات'}
                            icon={Loaninfo}
                            onClick={() => onItemClicked('Loan Information')}
                            active={selectedItem === 'Loan Information'}
                        />

                        {/* <MenuItemComponent
                            title="Referral Program"
                            icon={ReferralIcon}
                            onClick={() => onItemClicked('Referral Program')}
                            active={selectedItem === 'Referral Program'}
                        />

                        <MenuItemComponent
                            title="Loyaity Program"
                            icon={LoyaityIcon}
                            onClick={() => onItemClicked('Loyaity Program')}
                            active={selectedItem === 'Loyaity Program'}
                        /> */}

                        <MenuItemComponent
                            title={lang == 'en' ? 'Feedback' : 'آراء'}
                            icon={feedback}
                            onClick={() => onItemClicked('Feedback')}
                            active={selectedItem === 'Feedback'}
                            />

                        <MenuItemComponent
                            title={lang == 'en' ? 'Ticket & Support' : 'ٹکٹ اور اعانت'}
                            icon={TicketIcon}
                            onClick={() => onItemClicked('Ticket & support')}
                            active={selectedItem === 'Ticket & support'}
                            />

                        <MenuItemComponent
                            title={lang == 'en' ? 'User Profile' : 'صارف پروفائل'}
                            icon={ProfileIcon}
                            onClick={() => onItemClicked('User Profile')}
                            active={selectedItem === 'User Profile'}
                            />

                        <MenuItemComponent
                            title={lang == 'en' ? 'Settings' : 'ترتیبات'}
                            subTitle1={lang=== 'en' ? 'Beneficiaries' : 'فائدہ اٹھانے والے'}
                            subTitle2={lang=== 'en' ? 'Bank Details' : 'بینک کی تفصیلات'}

                            icon={IconIdeas}
                            onClick={() => onItemClicked('Settings')}
                            active={selectedItem === 'Settings'|| selectedItem=== 'Beneficiaries' || selectedItem=== 'Bank Details'}
                            onChange={(item)=>onSubmenuClicked(item)}
                        />

                        {/* <MenuItemComponent
                            title="Loan Calculator"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Loan Calculator')}
                            active={selectedItem === 'Loan Calculator'}
                        />

                        <MenuItemComponent
                            title="Bank Details"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Bank Details')}
                            active={selectedItem === 'Bank Details'}
                        />
                        
                        <MenuItemComponent
                            title="Re-payment Mode"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Re-payment Mode')}
                            active={selectedItem === 'Re-payment Mode'}
                        />
                        
                        <MenuItemComponent
                            title="User Profile"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('User Profile')}
                            active={selectedItem === 'User Profile'}
                        /> 
                        
                        <MenuItemComponent
                            title="Beneficiaries"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Beneficiaries')}
                            active={selectedItem === 'Beneficiaries'}
                        />

                        <MenuItemComponent
                            title="Notifcation"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Notifcation')}
                            active={selectedItem === 'Notifcation'}
                        /> 

                        <MenuItemComponent
                            title="Beneficiaries"
                            icon={IconIdeas}
                            onClick={() => onItemClicked('Beneficiaries')}
                            active={selectedItem === 'Beneficiaries'}
                        />
                        */}

                    </Column>
                </Column>
                {isMobile && expanded && (
                    <div
                        className={css(styles.outsideLayer)}
                        onClick={toggleMenu}
                    ></div>
                )}
            </Row>
        </div>

    );
}

export default SidebarComponent;