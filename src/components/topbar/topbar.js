import React, { Component } from "react";
import axios from "axios";
import "../../assets/css/topbar.css";
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl'}
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
    let heading, phone, email, address;

    if (this.props.topBarData) {
      this.props.topBarData.map((i, index) => {
        if (i.lang === this.props.language) {
          heading = i.title;
          phone = i.phone;
          email = i.email;
          address = i.address;
        }
      });
    }

    return (
      <div class="top-bar clearfix">
        <p
          style={
            this.props.language === "ar"
              ? { transform: "rotateY(180deg)" }
              : null
          }
        >
          {heading}
        </p>
        <ul>
          <li
           style={this.props.language === "ar" ? arabicStyle :null}
          >
            <i class="icon-telephone114"></i>
            {phone}
          </li>
          <li
            style={this.props.language === "ar" ? arabicStyle :null}
          >
            <i class="icon-mail "></i>
            <a href="mailto:info@maalem.com.sa" class="color-white">
              {email}
            </a>
          </li>
          <li
           style={this.props.language === "ar" ? arabicStyle :null}
          >
            <i class="icon-icons74"></i>
            {address}
          </li>
          <li> <a style={this.props.language === "ar" ? arabicStyle :null}  class="language" onClick={() =>this.props.language === "en" ? this.props.onChangeLanguage("ar") : this.props.onChangeLanguage("en")}>{this.props.language === "en" ? "عربي" : "EN"}</a></li> 
         
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeLanguage: (value) =>
    {
      window.sessionStorage.setItem('language',value);
      dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value })
    }
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
