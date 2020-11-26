import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './assets/css/advisor.css';
import './assets/css/bootstrap.css';
import './assets/css/plugins.css';
import './assets/css/color-default.css';
import './assets/css/responsive.css';
import './assets/css/hero-slider.css';
import 'animate.css/animate.css';
import Home from './container/home/home';
import Profile from './container/profile/profile';
import Referral from './container/referral/referral';
import Products from './container/products/products';
import config from './assets/config/config';
import axios from 'axios';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './store/reducer';
import CustomerDetails from './components/agentlogin/customerDetailNew';
import MainForm from './container/onlineApplication/MainForm';
import Maindashboard from './components/maindashboard/maindashboard';
import Customersignin from './components/customerlogin/customersignin';
import Customersignup from './components/customerlogin/customersignup';
//import * as globalconst from "./util/const";
import Newcustomerprofile from './components/newcustomerdetails/maincustomer';
import PrivateRoute from './components/utils/PrivateRoute';
import PrivateRoute2 from './components/utils/PrivateRoute2';
import LoanAcceptance from './components/loanAcceptance/loanofferletter';
import Agentsignin from './components/agentlogin/agentsignin';
import Agentsignup from './components/agentlogin/agentsignup';
import Agentdashboard from './components/agentlogin/agentdashboard';
import Agentnewcustomer from './components/agentlogin/customersignup';
import Agentnewcustomerprofile from './components/agentlogin/customerinfo';
import Agentdetails from './components/agentlogin/agentDetailNew';
import BusinessTable from './components/agentonboarding/businessTable';
import BusinessLogin from './components/agentonboarding/businessLogin';
import CreatePassword from './components/agentonboarding/createPassword';
//import BusinessLogin from './components/agentonboarding/businessLogin';
//import Loaninformation from './components/standardform/standardform'
import OwnerVerification from './components/agentonboarding/ownerVerification';
import AddAdmin from './components/agentonboarding/addAdmin';
import EditAgent from './components/agentonboarding/editagent';
import OtpValidate from './components/agentonboarding/otpValidate';

import BusinessAddAgent from './components/agentonboarding/businessAddAgent';
import BusinessDetails from './components/agentonboarding/businessDetails';
import BusinessHome from './components/agentonboarding/businessHome';
import BusinessAgentEdit from './components/agentonboarding/businessAgentEdit';
import BusinessChangePassword from './components/agentonboarding/businessChangePassword';
import BusinessAgents from './components/agentonboarding/businessAgents';
import createPassword from './components/agentonboarding/createPassword';
import AgentsigninSme from './components/smelogin/newAgentSignIn'
import CompletedOnboadingSme from './components/smelogin/onboardCompleted'
import AgentdetailsSme from './components/smelogin/agentDetailsNew'

import { getLanguageApi } from './components/smelogin/utils/actionCreator'
import ArabicLanguage from './components/smelogin/arabic.json'
import EnglishLanguage from './components/smelogin/demo.json'
import AuthRoute from './components/utils/authRoute'
import LayoutMain from './components/smelogin/layoutMain'
import AgentdashboardNew from './components/smelogin/agentDashboardNew'
import AgentnewcustomerNew from './components/smelogin/newCustomerNew'
import Agentonboarding from './components/smelogin/agentOnboarding'
import LoanOfferUi from './components/smelogin/loanOffer'
import AgentApplicationSubmit from './components/smelogin/applicationSubitForm'
import Popup from './components/agentlogin/popup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
      topBarData: [],
      navBarData: [],
      bannerData: [],
      productData: [],
      welcomeData: [],
      serviceData: [],
      referralData: [],
      addServiceData: [],
      faqData: [],
      homeContactData: [],
      teamData: [],
      blogData: [],
      partnerData: [],
      reviewData: [],
      requestQuotesData: [],
      newsSubscribeData: [],
      footerData: [],
      referralProgramData: [],
      profilesettingData: [],
      dashboardReferral: [],
      feedbackDate: [],
      ticketandsupport: [],
      repaymentdata: [],
      profileData: [],
      customerprofilesData: [],
    };
  }

  async getLaguage () {
    // await getLanguageApi(this.state.language, callBack => {
    //   // console.log(callBack)
    //   this.setState({
    //     languageData: callBack
    //   })
    // })
  }

  componentDidMount() {
    if(localStorage.getItem("agentLoginStatus")==null){
      localStorage.setItem("agentLoginStatus",false)
    }
 console.log(localStorage.getItem("agentLoginStatus",'agentLoginStatus'))
    this.changeLanguage('en')
    // this.setState({
    //   languageData:EnglishLanguage
    // })
    // if (this.state.language == 'en' || '') {
      console.log(localStorage.getItem('css'))
   
    // }
    this.checkCss()
    this.getLaguage()
    this.getTopbar();
    this.getNavbar();
    this.getBanner();
    this.getProduct();
    this.getWelcome();
    this.getService();
    this.getReferral();
    this.getAddService();
    this.getFAQ();
    this.getHomeContact();
    this.getBlog();
    this.getPartner();
    this.getReview();
    this.getRequestQuotes();
    this.getNewsSubscribe();
    this.getFooter();
    this.getProfile();
    this.getNewcustomerprofiles();
    this.loadSessionData();
  }

  loadSessionData = async () => {
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }

    fetch(config.IORD_SERVICE_URL + '/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin',
        rememberMe: true,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.status);
        console.log('Got IORD Token');
        window.sessionStorage.setItem('iord_id_token', responseData.id_token);
      });
  };

  loadSessionData2 = async () => {
    if (window.sessionStorage.getItem('language') == null) {
      window.sessionStorage.setItem('language', 'en');
    }

    fetch(config.IORD_SERVICE_URL + '/api/authenticate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'admin',
        password: 'admin',
        rememberMe: true,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.status);
        console.log('Got IORD Token');
        window.sessionStorage.setItem('iord_id_token', responseData.id_token);
      });
  };

  getTopbar = async () => {
    await axios.get(config.STRAPI_URL + '/topbars').then(res => {
      this.setState({ topBarData: res.data });
    });
  };

  getNavbar = async () => {
    await axios.get(config.STRAPI_URL + '/navbars').then(res => {
      this.setState({ navBarData: res.data });
    });
  };

  getBanner = async () => {
    await axios.get(config.STRAPI_URL + '/banners').then(res => {
      this.setState({ bannerData: res.data });
    });
  };

  getProfile = async () => {
    await axios.get(config.STRAPI_URL + '/profile-settings').then(res => {
      this.setState({ profileData: res.data });
    });
  };

  getProduct = async () => {
    await axios.get(config.STRAPI_URL + '/productsliders').then(res => {
      this.setState({ productData: res.data });
    });
  };

  getWelcome = async () => {
    await axios.get(config.STRAPI_URL + '/welcomes').then(res => {
      this.setState({ welcomeData: res.data });
    });
  };

  getService = async () => {
    await axios.get(config.STRAPI_URL + '/services').then(res => {
      this.setState({ serviceData: res.data });
    });
  };

  getReferral = async () => {
    await axios.get(config.STRAPI_URL + '/referralprograms').then(res => {
      this.setState({ referralData: res.data });
    });
  };

  getAddService = async () => {
    await axios.get(config.STRAPI_URL + '/additionalservices').then(res => {
      this.setState({ addServiceData: res.data });
    });
  };

  getFAQ = async () => {
    await axios.get(config.STRAPI_URL + '/faqs').then(res => {
      this.setState({ faqData: res.data });
    });
  };

  getHomeContact = async () => {
    await axios.get(config.STRAPI_URL + '/homecontacts').then(res => {
      this.setState({ homeContactData: res.data });
    });
  };

  getBlog = async () => {
    await axios.get(config.STRAPI_URL + '/blogs').then(res => {
      this.setState({ blogData: res.data });
    });
  };

  getPartner = async () => {
    await axios.get(config.STRAPI_URL + '/partners').then(res => {
      this.setState({ partnerData: res.data });
    });
  };

  getReview = async () => {
    await axios.get(config.STRAPI_URL + '/reviews').then(res => {
      this.setState({ reviewData: res.data });
    });
  };

  getRequestQuotes = async () => {
    await axios.get(config.STRAPI_URL + '/requestquotes').then(res => {
      this.setState({ requestQuotesData: res.data });
    });
  };

  getNewsSubscribe = async () => {
    await axios.get(config.STRAPI_URL + '/newssubscribes').then(res => {
      this.setState({ newsSubscribeData: res.data });
    });
  };
  getFooter = async () => {
    await axios.get(config.STRAPI_URL + '/footers').then(res => {
      this.setState({ footerData: res.data });
    });
  };
  getNewcustomerprofiles = async () => {
    await axios.get(config.STRAPI_URL + '/newcustomerprofiles').then(res => {
      this.setState({ customerprofilesData: res.data });
    });
  };


  async changeLanguage (language) {
    
    console.log(language)
    if((language=='en' && this.state.languageData!=EnglishLanguage) || (language=='ar' && this.state.languageData!=ArabicLanguage)){
          if (language == 'en') {
            localStorage.setItem('css','en')
            await this.setState({ languageData: EnglishLanguage })
            console.log(this.state.languageData)
          } else if (language == 'ar') {
              localStorage.setItem('css','ar')

              await this.setState({ languageData: ArabicLanguage })
              console.log(this.state.languageData)
          }
    }
    
  }
  

checkCss(){
  if(
    localStorage.getItem('css' )=='ar'){
    this.setState({ languageData: ArabicLanguage })
    console.log(this.state.languageData)
    }
    if(
      localStorage.getItem('css')== 'en'){
      this.setState({ languageData: EnglishLanguage })
      console.log(this.state.languageData)

      }
}

  render() {
    const store = createStore(Reducer, applyMiddleware(thunk));
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/customer/dashboard" component={Maindashboard} {...this.props} {...this.state} />
              <Route exact path="/" render={props => <Home {...props} {...this.state} />} />
              <Route exact path="/popup" render={props => <Popup {...props} {...this.state} />} />

              <PrivateRoute path="/customer/loyalty" component={props => <Profile {...props} {...this.state} />} />
              <PrivateRoute path="/products" component={props => <Products {...props} {...this.state} />} />
              <PrivateRoute path="/customer/referral" component={props => <Referral {...props} {...this.state} />} />
              <PrivateRoute path="/customer/application" component={props => <MainForm {...props} {...this.state} />} />
              <Route path="/customer/signin" render={props => <Customersignin {...props} {...this.state} />} />
              <Route path="/customer/signup" render={props => <Customersignup {...props} {...this.state} />} />
              <PrivateRoute path="/customer/profile" component={props => <Newcustomerprofile {...props} {...this.state} />} />
              <PrivateRoute path="/customer/loanoffer" component={props => <LoanAcceptance {...props} {...this.state} />} />
              <PrivateRoute path="/agent/newcustomer" component={props => <Agentnewcustomer {...props} {...this.state} />} />
              <PrivateRoute path="/agent/customer/profile" component={props => <Agentnewcustomerprofile {...props} {...this.state} />} />
              <Route path="/agent/signin" render={props => <Agentsignin {...props} {...this.state} />} />
              <Route path="/agent/signup" render={props => <Agentsignup {...props} {...this.state} />} />
              <PrivateRoute path="/agent/dashboard" component={props => <Agentdashboard {...props} {...this.state} />} />
              <PrivateRoute path="/agent/details" component={props => <Agentdetails {...props} {...this.state} />} />
              <PrivateRoute path="/business/createpassword" component={props => <CreatePassword {...props} {...this.state} />} />
              
              <PrivateRoute path="/agent/verify-owner" component={props => <OwnerVerification {...props} {...this.state} />} />
              <PrivateRoute path="/agent/add-admin" component={props => <AddAdmin {...props} {...this.state} />} />
              <PrivateRoute path="/business/otpvalidate" component={props => <OtpValidate {...props} {...this.state} />} />
             
              <Route path="/business/signin" render={props => <BusinessLogin {...props} {...this.state} />} />
              <PrivateRoute path="/business/createPassword" component={props => <createPassword {...props} {...this.state} />} />
              <PrivateRoute path="/business/table" component={props => <BusinessTable {...props} {...this.state} />} />

              {/* <PrivateRoute
                path='/agent/sme/application'
                render={props => (
                  <AgentApplicationSubmit
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              /> */}
              <Route
                path='/agent/sme/application'
                render={props => (
                  <AgentApplicationSubmit
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />
              <Route
                path='/agent/sme/signin'
                render={props => <AgentsigninSme {...props} {...this.state} />}
                changeLanguage={this.changeLanguage.bind(this)}
              />             
              <Route
                path='/agent/sme/thanku'
                render={props => (
                  <CompletedOnboadingSme
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />
              <Route
                path='/agent/sme/details'
                render={props => (
                  <AgentdetailsSme
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />
              <Route
                path='/agent/sme/dashboard'
                render={props => (
                  <AgentdashboardNew
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />
              <Route
                path='/agent/sme/newcustomer'
                render={props => (
                  <AgentnewcustomerNew
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />

              <Route
                path='/agent/sme/customer/onboarding'
                render={props => (
                  <Agentonboarding
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />

              <Route
                path='/agent/sme/customer/loanOffer'
                render={props => (
                  <LoanOfferUi
                    {...props}
                    {...this.state}
                    changeLanguage={this.changeLanguage.bind(this)}
                  />
                )}
              />

              {/* <PrivateRoute path="/business/editAgent/:id" component={props => <EditAgent {...props} {...this.state} />} /> */}
              <PrivateRoute path="/business/add-agent" component={props => <BusinessAddAgent {...props} {...this.state} />} />
              <PrivateRoute path="/business/editAgent/:id" component={props => <BusinessAgentEdit {...props} {...this.state} />} />
              <PrivateRoute path="/business/agents/:task/:id" component={props => <EditAgent {...props} {...this.state} />} />
              <PrivateRoute path="/business/agents" component={props => <BusinessAgents {...props} {...this.state} />} />
              <PrivateRoute path="/business/business-details" component={props => <BusinessDetails {...props} {...this.state} />} />
              <PrivateRoute path="/business/home" component={props => <BusinessHome {...props} {...this.state} />} />
              <PrivateRoute path="/business/ChangePassword" component={props => <BusinessChangePassword {...props} {...this.state} />} />
            <Route path="/customer/details" render={props => <CustomerDetails {...props} {...this.state} />} />
              
           
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
