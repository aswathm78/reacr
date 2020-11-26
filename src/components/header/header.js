import React, { Component } from "react";
import Topbar from '../topbar/topbar';
import Logo from '../../assets/images/logo.png';
import Navbar from '../navbar/navbar';
import Search from '../utils/search/search';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <header id="header" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
        <div class="container">
          <Topbar {...this.props} onChangeLanguage={(args) => this.props.onChangeLanguage(args)}/>
          <div class="header clearfix" >

            <a href="index.html" class="logo"><img src={Logo} alt="" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}/></a>       
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-nav"
              aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a style={{'margin-right':'0px',"margin-top": "19px",
             "margin-left": "8px"}} class="language navbar-toggle collapsed" aria-expanded="false"  href="/">EN</a>
            <Search />
            <Navbar {...this.props}/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
