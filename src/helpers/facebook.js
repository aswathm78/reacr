import React, { Component } from 'react';
//import FacebookLogin from 'react-facebook-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
class facebook extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false,
             userID:'',
             name: '',
             email: '',
             picture:''

        }
    }
    componentClicked=()=>console.log('clicked')

    responseFacebook=response=>{
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
        

        })
    }
    render() {

        let fbContent;

        if(this.state.isLoggedIn)
        {
           fbContent=null
        }
        else
        {
            fbContent=
            (<FacebookLogin
            appId="220315202624944"
             autoLoad={true}
            fields="name,email,picture"
            // onClick={this.componentClicked}
            // callback={this.responseFacebook} 
            buttonText=""
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <button style={{backgroundColor:"white"}}  onClick={()=>renderProps.onClick}><i class="fa fa-facebook-square fa-2x"></i></button>)}
           
            />
                
              
            
            )
        } 
        return (
            <div>
                {fbContent}
            </div>
        );
    }
}

export default facebook;