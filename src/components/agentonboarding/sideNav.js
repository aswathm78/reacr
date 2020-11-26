import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { logout } from '../utils/index';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './sideNav.css';
export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  openDropdown = e => {
    var dropmenu = document.getElementById('dropMenu');
    if (dropmenu.style.display == 'block') {
      dropmenu.style.display = 'none';
      document.getElementById('dropOpen').style.marginBottom = '15px';
    } else {
      dropmenu.style.display = 'block';
      document.getElementById('dropOpen').style.marginBottom = '0px';
    }
  };
  componentDidMount() {}
  render() {
    return (
      <div className="row side-nav">
        <div className="col-xs-12 menu-list  ">
          <Link onClick={() => this.setState({ active: 1 })} to="/business/business-details">
            {' '}
            <h6>
              <PersonIcon style={{ fontSize: '2.5rem' }} className={this.state.active === 1 ? 'active' : ''} />
              <span>Business Details</span>
            </h6>
          </Link>
        </div>
        <div className="col-xs-12 menu-list">
          <Link onClick={() => this.setState({ active: 2 })} to="/business/agents">
            {' '}
            <h6>
              <PeopleAltIcon style={{ fontSize: '2.5rem' }} className={this.state.active === 2 ? 'active' : ''} />
              <span>Agents</span>
            </h6>
          </Link>
        </div>
        <div className="col-xs-12 menu-list">
          <Link onClick={() => this.setState({ active: 3 })} to="/business/add-agent">
            {' '}
            <h6>
              <GroupAddIcon style={{ fontSize: '2.5rem' }} className={this.state.active === 3 ? 'active' : ''} />
              <span>Add Agents</span>
            </h6>
          </Link>
        </div>

        {/* <div className="col-xs-12 menu-list" id="dropOpen" onClick={e => this.openDropdown(e)}>
                    <span className="glyphicon glyphicon-ok-sign"></span><h6>Team</h6>
                </div> */}

        <div className="col-xs-12 menu-list">
          <Link onClick={() => this.setState({ active: 4 })} to="/business/changePassword">
            {' '}
            <h6>
              <LockOpenIcon style={{ fontSize: '2.5rem' }} className={this.state.active === 4 ? 'active' : ''} />
              <span>Change Password</span>
            </h6>
          </Link>
        </div>

        <div className="col-xs-12 menu-list">
          <Link onClick={() => logout()} to="/business/signin">
            {' '}
            <h6>
              {' '}
              <ExitToAppIcon />
              Logout
            </h6>{' '}
          </Link>
        </div>

        <div id="dropMenu" className="col-xs-12 menu-list-dropdown">
          <a>Admin</a>
          <br />
          <a>Agent</a>
        </div>
      </div>
    );
  }
}
