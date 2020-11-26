import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let items = [];
    const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' };

    if (this.props.navBarData) {
      this.props.navBarData.map(i => {
        if (i.lang === this.props.language) {
          i.menu.menu.map((j, index) => {
            //if (j.item != "LOGIN") {
            items.push(
              <li class={this.props.location.pathname === j.href ? 'active' : null}>
                <a style={{ cursor: 'pointer' }} onClick={() => this.props.history.push(j.href)}>
                  {j.item}
                </a>
              </li>
            );
            ///}
          });
        }
      });
    }
    return (
      <>
        {/* <nav class="main-nav navbar-collapse collapse" id="primary-nav">
                <ul class="nav nav-pills" style={this.props.language === "ar" ? { transform: 'rotateY(180deg)' } : null}>
                    {items}
                </ul>
            </nav> */}
        <ul className="nav navbar-nav navbar-right" style={this.props.language === 'ar' ? { transform: 'rotateY(180deg)' } : null}>
          {items}
          <li>
            {' '}
            <a
              style={this.props.language === 'ar' ? arabicStyle : null}
              class="languageww"
              onClick={() => (this.props.language === 'en' ? this.props.onChangeLanguage('ar') : this.props.onChangeLanguage('en'))}
            >
              {this.props.language === 'en' ? 'عربي' : 'English'}
            </a>
          </li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.reducer.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeLanguage: value => {
      window.sessionStorage.setItem('language', value);
      dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
