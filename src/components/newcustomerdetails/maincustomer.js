import React, { Component } from "react";
import Personalinfo from "./personalinfo";
import EmployeeDetails from "./employeementdetails";
import Identification from "./identification";
import Contactdetails from "./contactDetails";
import Productdetails from "./productdetails";
import Assetdetails from "./assetInformation";

import { connect } from "react-redux";
import * as actionTypes from "../../store/action";
import { Onboardingfun } from "../../store/action";
import Header2 from "../../components/header/header2";
import AppNavBar from "./Layout/AppNavBar.component";

const mapStateToProps = (state) => {
  return {
    ...state,
    language: state.reducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (value) =>
      dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),

    Onboardingfun: () => dispatch(Onboardingfun()),
  };
};
class Maincustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  async componentDidMount() {
    await this.props.Onboardingfun();
  }

  render() {
    // let onboardinguserinfo = this.props.reducer.onboardingpersonal ? this.props.reducer.onboardingpersonal : []
    // console.log(onboardinguserinfo, 'onboardingdatagetting')
    const { step } = this.state;
    let component;
    switch (step) {
      case 1:
        component = <Personalinfo nextStep={this.nextStep} {...this.props} />;
        break;
      case 2:
        component = (
          <EmployeeDetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
        break;
      case 3:
        component = (
          <Identification nextStep={this.nextStep} prevStep={this.prevStep} />
        );
        break;
      case 4:
        component = (
          <Contactdetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
        break;

      case 5:
        component = (
          <Productdetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
        break;

      case 6:
        component = (
          <Assetdetails nextStep={this.nextStep} prevStep={this.prevStep} />
        );
        break;
    }
    return (
      <>
        {/* <Header2 {...this.props} /> */}
        <AppNavBar {...this.props} />
        {component}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Maincustomer);
