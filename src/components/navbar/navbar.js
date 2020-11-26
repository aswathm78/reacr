import React, { Component } from "react";
import { connect } from "react-redux";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let items = [];
    if (this.props.navBarData) {
      this.props.navBarData.map(i => {
        if (i.lang === this.props.language) {
          i.menu.menu.map((j, index) => {
            items.push(<li class={this.props.location.pathname === j.href ? "active" : null} ><a style={{ cursor: 'pointer' }} onClick={() => this.props.history.push(j.href)}>{j.item}</a></li>)
          })
        }
      })
    }
    return (
      <nav class="main-nav navbar-collapse collapse" id="primary-nav">
        <ul class="nav nav-pills" style={this.props.language === "ar" ? { transform: 'rotateY(180deg)' } : null}>
          {items}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)(Navbar);
