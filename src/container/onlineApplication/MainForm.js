import React, { Component } from 'react';
// import OnlineApplication from './onlineApplication'
import PersonDetails from './PersonalDetails'
import Loandetails from './loanDetails'
import EmployeeDetails from './EmployeeDetails'
import LoanDependent from './loanDependent'
import IncomeLiability from './incomeLiability'
import AssetDetails from './assetDetails';
//import Header from "../../components/header/header";
class MainForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             step:1
        }
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    
    render() {
        const {step} = this.state;
       let component;
        switch(step) {
        case 1:
            component =  <PersonDetails
                    nextStep={this.nextStep}
                 
                    />
                    break;
        case 2:
             component =  <EmployeeDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                   
                    />
                    break;
        case 3:
             component =  <Loandetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                
                    />
                    break;
        case 4:
             component =  <LoanDependent
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            />
            break;

        case 5:
             component =  <IncomeLiability
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            
            />
            break;
        
        case 6:
             component =  <AssetDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            
            />
            break;

        
        }
      return(
          <>
        {/* <Header {...this.props}/> */}
{component}
            </>
 )
        
    }
}

export default MainForm;