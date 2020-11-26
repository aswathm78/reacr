import React, { Component } from 'react';
import './agentonboard.scss';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class BusinessChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword:'',
            currentPassword:'',
            input:{},
            success:'',
            error:'',
            currentMenu:'',
            active:0
          

           
        };
    }

    
  componentDidMount () {

   
     }
  
     onChange =(event)=> {
         console.log(event.target.name,event.target.value)
         console.log(this)
         let input = this.state.input;
    console.log(event.target.name,'this is name of event',event.target.value,'this is target value')
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
        
      }
// on proceeding submit ...... first called function 
      onClickHandler = (e) => {
          e.preventDefault();
    //this will check if current password is empty or not 
    if(this.state.input.password !==''){
        //checking confirm passowrd 
        if(this.state.input.confirmPassword === this.state.input.newPassword){
            //console.log for testing 
            console.log('true')
            this.setState({active:1})
            // header for api ->contains bearer token
            const  headerConfig={
                headers:{
                Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
            } };
            // making api call to iord-agents to fetch user data on id
            Axios.get(`http://122.166.172.240:3031/api/iord-agents/${window.sessionStorage.getItem('agentID')}`,headerConfig)
            .then(res => {
                //verifing current password is correct or not 
                return res.data.password === this.state.input.currentPassword ? res.data: false;

            }).then(e=>{
                if(e!=false){
                    // making api call for updating password with new password 
                    const  headerConfig={
                        headers:{
                        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token')
                        } 
                    };
                        let data = {...e,password:this.state.input.newPassword}
                        console.log(data)
                        Axios.put(`http://122.166.172.240:3031/api/iord-agents`,data,headerConfig).then(res=>{
                        console.log(res,'this is new response man')
                        this.setState({success:1,error:0,active:0})
                        })
                }
                else{
                    //error for current passowrd varification 
                    this.setState({error:1,success:0,active:0})
                }
                }
                )
        }
        //error storing in store for cnfirm password is same or not        
        else{
                //console.log for testing 
                console.log('false')
                //activate error (new password and old password are not matching )
            this.setState({error:2,success:0,active:0})
            }

    }
    //error storing in state for  password is empty or not 
    else{
        //console.log for testing 
        console.log('false')
        //activate error (new password and old password are not matching )
        this.setState({error:3,success:0,active:0})
    }

      }
// first funciton ends here .......................


// commented  as we don't need this now ->
    //   agentTable = (e) => {
    //     this.props.history.push('/agent/agenttable');
    //   };

    render() {
        return (
            <div className="rtl-css">
                <div className="container-fluid add-agent">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                            <SideNav />
                        </div>
                        <div className="col-md-10 col-sm-10 col-xs-12 add-agent-panel" style={{paddingTop:'20rem'}}>
                        <div className="row">
                                
                            <div className="col-sm-4 col-xs-12"></div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input  type="text" id="currentPassword"  name="currentPassword" onChange={this.onChange} required />
                                        <label for="currentPassword">Current Password</label>
                                    </div>
                                </div>
                            <div className="col-sm-4 col-xs-12"></div>
                                
                            </div>
                         
                        <div className="row">
                            <div className="col-sm-4 col-xs-12"></div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input  type="text" id="newPassword"  name="newPassword" onChange={this.onChange} required />
                                        <label for="newPassword">New Password</label>
                                    </div>
                                </div>
                            <div className="col-sm-4 col-xs-12"></div>     
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-xs-12"></div>
                                <div className="col-sm-4 col-xs-12">
                                    <div class="input-wrapper">
                                        <input  type="text" id="confirmPassword"  name="confirmPassword" onChange={this.onChange} required />
                                        <label for="confirmPassword">Confirm Password</label>
                                    </div>
                                </div>
                            <div className="col-sm-4 col-xs-12"></div>     
                        </div>
                            <div className="row">
                            <div className="col-sm-4 col-xs-12"></div>
                            <div className="col-sm-4 col-xs-12">
                                <i style={{color:'green',fontSize:'1.5rem'}}>{this.state.success === 1? 'Successfully changed password':null}</i>
                                <i style={{color:'red',fontSize:'1.5rem'}}>{this.state.error === 1? 'Current password wrong':null}</i>
                                <i style={{color:'red',fontSize:'1.5rem'}}>{this.state.error === 2? 'Password and confirm password are not matched':null}</i>
                                <i style={{color:'red',fontSize:'1.5rem'}}>{this.state.error === 3? 'Current password is empty':null}</i>
                            </div>
                            <div className="col-sm-4 col-xs-12"></div>

                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-sm-offset-4 col-xs-12 py-3">
                                    <Link to={''}>
                                    <button  className={`agent-savebtn `}  onClick={e => this.onClickHandler(e)}> {this.state.active === 1 ? 'Proccessing': 'Change'} </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}