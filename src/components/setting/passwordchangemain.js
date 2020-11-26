import React, { Component } from 'react';
import Getotp from './getotp';
import Sentotp from './sentotp';
import Otpverify from './otpverified';
import Success from './passwordsuccess';
export default class passwordchangemain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activekey: this.props.tab,
    };
  }

  onTabClick = key => {
    this.setState({
      activekey: key,
    });
  };
  render() {
    console.log(this.props.tab, 'checktab');
    return (
      <div>
        {this.state.activekey === 1 ? (
          <div>
            <Getotp lang={this.props.lang} onTabClick={() => this.onTabClick(2)} />
          </div>
        ) : this.state.activekey === 2 ? (
          <div>
            <Sentotp lang={this.props.lang} onTabClick={() => this.onTabClick(3)} />
          </div>
        ) : this.state.activekey === 3 ? (
          <div>
            <Otpverify lang={this.props.lang} onTabClick={() => this.onTabClick(4)} />
          </div>
        ) : this.state.activekey === 4 ? (
          <div>
            <Success lang={this.props.lang} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
