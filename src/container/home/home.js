import React, { Component, useCallback, useRef } from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import MainContent from "../../components/mainContent/mainContent";
import VisibilitySensor from "react-visibility-sensor";
import ReferralProgram from "../../components/referralProgram/referralProgram";
import Services from "../../components/services/services";
import Calculator from "../../components/calculator/calculator";
import Animate from "animate.css-react";
import Team from "../../components/team/team";
import OurPartners from '../../components/ourpartners/ourpartners';
import Blogs from "../../components/blogs/blogs";
import HappyCustomers from "../../components/happycustomers/happycustomers";
import GuestForm from "../../components/guestform/guestform";
import Footer from "../../components/footer/footer";
import { connect } from "react-redux";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../../assets/css/chatWidget.css';
import '../../assets/css/bootstrap.css';
import { StreamChat } from 'stream-chat';
const STREAM_API = 'dkvenzsmj6gwwy4hnkk2t3kpt56w35zf6qqd7g5525t3fb7dhw8dk4h5tqjhna82';
const client = new StreamChat(STREAM_API);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOne: false,
    };
  }

  componentDidMount() {
    if (window.sessionStorage.getItem('language') == null)
      window.sessionStorage.setItem('language', 'en')
    addResponseMessage('Welcome to Maleem Financing');
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ sectionOne: true });
    }
  };

  render() {
    const handleNewUserMessage = (newMessage) => {
      console.log(`New message incoming! ${newMessage}`);
      // Now send the message throught the backend API
      // addResponseMessage(response);
    };

    const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
    let heading, buttonLabel;
    if (this.props.homeContactData) {
      this.props.homeContactData.map(i => {
        if (i.language === this.props.language) {
          heading = i.heading;
          buttonLabel = i.buttonlabel;
        }
      })
    }
    return (
      <div>
        <Header {...this.props} onChangeLanguage={(args) => this.props.onChangeLanguage(args)} />
        <Banner {...this.props} />
        <MainContent {...this.props} />
        <ReferralProgram {...this.props} />
        <Services {...this.props} />
        <Calculator />
        <div class="contact-us-bar" style={this.props.language === "ar" ? { transform: 'rotateY(180deg)' } : null}>
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <Animate
                  appear="fadeInLeft"
                  durationAppear={1500}
                  component="h4"
                >
                  <h4 style={this.props.language === "ar" ? arabicStyleText : null}>
                    {heading}
                  </h4>
                </Animate>
              </div>
              <div class="col-md-3">
                <div class="text-right">
                  <Animate
                    appear="fadeInRight"
                    durationAppear={1500}
                    component="a"
                  >
                    <a
                      style={this.props.language === "ar" ? arabicStyleText : null}
                      href="contact-us.html"
                      class="btn btn-primary get-in-touch"
                      data-text={buttonLabel}
                    >
                      <i class="icon-telephone114"></i>{buttonLabel}
                    </a>
                  </Animate>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Team {...this.props}/> */}
        {/* <OurPartners {...this.props}/> */}
        <Blogs {...this.props} />
        <HappyCustomers {...this.props} />
        <GuestForm {...this.props} />
        <Footer {...this.props} />
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Maleem Financing"
          subtitle="Best Loan service"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};
export default connect(mapStateToProps, null)(Home);
