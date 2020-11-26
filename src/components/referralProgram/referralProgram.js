import React, { Component } from 'react';
import ReferralForm from '../utils/referralForm/referralForm';
import { connect } from 'react-redux';
class ReferralProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' };
    let heading, detail;
    if (this.props.referralData) {
      this.props.referralData.map(i => {
        if (i.language === this.props.language) {
          heading = i.heading;
          detail = i.detail;
        }
      });
    }
    return (
      <div class="container" style={this.props.language === 'ar' ? { transform: 'rotateY(180deg)' } : null}>
        <div class="funfacts text-center">
          <div class="advisor-overlay"></div>
          <div class="funfacts-inner">
            <h2 style={this.props.language === 'ar' ? arabicStyle : null}>{heading}</h2>
            <br></br>
            <h3 style={this.props.language === 'ar' ? arabicStyle : null}>{detail}</h3>
            <br></br>

            <ReferralForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.reducer.language,
  };
};

export default connect(mapStateToProps, null)(ReferralProgram);
