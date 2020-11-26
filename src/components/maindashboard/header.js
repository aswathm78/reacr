import React, { Component } from 'react';
//import {browserHistory} from 'react-router'
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
// import { StyleSheet, css } from 'aphrodite';
import IconSearch from './assets/icon-search';
import IconBellNew from './assets/icon-bell-new';
import menicon from '../../assets/images/man.png';
import chaticon from '../../assets/images/chaticon.png'
import Loancalculator from '../emiloancalculator/emiloancal'
import './content.css'
import './header.css'
import { logout } from '../utils/index'
import { Link } from 'react-router-dom'
import { Avatar, IconButton } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import TranslateIcon from '@material-ui/icons/Translate';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
// const styles = StyleSheet.create({


// });


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display:'none',
            lang:'EN',
        }
        console.log(props,'this is to see props man....')
    }
    clickcal = () => {
        console.log('hello calculator')
        //  this.props.history.push(<Loancalculator/>);
        //  browserHistory.push('/');
        if(this.state.display === 'none'){
            this.setState({display:'block'})
        }else{
            this.setState({display:'none'})
        }
    }


    render() {
        const { icon, title, ...otherProps } = this.props;
        const changLang = () =>{
         
            window.sessionStorage.getItem('language') == 'en'?
            this.props.onChange('ar'):
            this.props.onChange('en')

            window.sessionStorage.getItem('language') == 'en'?
            this.setState({lang:'EN'}):            
            this.setState({lang:'ربي'})
            
            window.sessionStorage.getItem('language') == 'en'?
            window.sessionStorage.setItem('language','ar') 
            :window.sessionStorage.setItem('language','en')
          }
        return (

            <div style={{"margin":'0 1% 0 1%'}} className=" h-mainhead">

                <Row className="h-container containerstyle" vertical="center" horizontal="space-between" {...otherProps}>

                    <div  style={{"border-radius":'1%',}} class={`form-group  header-search ${this.state.lang != 'EN'? 'header-search-reverse':''}`}  style={{border:'2px solid gray'}}>
                       <IconButton><SearchIcon/></IconButton>
                        <input style={{textAlign:'left'}} type="search" className="h-search searchstyle w-100"  placeholder={this.state.lang != 'EN' ? 'Search': 'تلاش کریں'} />
                    </div>
                   
                    <Row vertical="center">
                        <div className="h-iconStyles" style={{ display: 'flex' }}>
                           <IconButton onClick={changLang}>
                           {this.state.lang}
                            {/* <TranslateIcon/> */}
    
                               </IconButton>
                                <IconButton>
    
                                <QuestionAnswerIcon/>
                                  </IconButton>
                                          <IconButton>
                                        <NotificationsActiveSharpIcon/>
    
                                      </IconButton>
                            <IconButton onClick={this.clickcal}>
                                <i class="fa fa-calculator" aria-hidden="true" ></i>
                                </IconButton>
                            {/* <IconBellNew style={{ "margin-right": "15px" }} /> */}
   {/*<IconButton>   
                            <SettingsIcon/>
</IconButton>*/}

                        </div>

                        <div className="h-separator"></div>
                        <Row vertical="center">
                            {/* <span className="h-name h-cursorPointer h1_personname" >Abdullah</span> */}

                            <div className="dropdownstyling">
                                <div class="dropdown">
                                    <div class="dropdown-toggle h-name h-cursorPointer h1_personname" type="button" data-toggle="dropdown">Abdullah
                                 </div>
                                    <ul class="dropdown-menu">

                                        <li><a href="#">{this.state.lang != 'EN'? 'My Account':'میرا اکاونٹ'} </a></li>

                                        <li>
                                            <Link onClick={() => logout()}
                                                to="/">{this.state.lang != 'EN'? 'Logout':'لاگ آوٹ'}
                                       <ExitToAppIcon/>
                                                </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                           <IconButton>
                                  <Avatar src={menicon}/>
                               </IconButton>  
                            {/* <img src={menicon} alt="" width="31px" height="31px" className="h-avatar, h-cursorPointer imgavatar" /> */}
                        </Row>
                    </Row>
                </Row>
                <div style={{transition:'display 3s',display:`${this.state.display}`}}>
                <Loancalculator lang={this.state.lang} style={{height:'100vh'}}/>

                </div>
            </div >
        );
    }
}


// function HeaderComponent(props) {


// }

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;