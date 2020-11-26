import React, { Component } from 'react';
import './agentonboard.scss';
import './businessAgents.css';
import Header from './head';
import SideNav from './sideNav';
import Axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import BlockIcon from '@material-ui/icons/Block';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-js-pagination';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import $ from 'jquery';

export default class BusinessAgents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessAgents: null,
      page: 1,
      rows: 5,
      loader: 0,
      currentData: [],
      startPagination: 0,
      endPagination: 4,
      isDataCalled: false,
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#myTable tr').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
    if (!this.state.isDataCalled) {
      this.callData();
      this.setState({ isDataCalled: true });
    }
  }
  callData = () => {
    const headerConfig = {
      headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
      },
    };
    Axios.get('http://122.166.172.240:3031/api/iord-agents', headerConfig).then(res => {
      // console.log(res.data, '000 --- this is agents details');
      this.setState({ businessAgents: res.data.reverse(), loader: 0 });
    });
  };

  render() {
    const changeStatus = (status, id) => {
      this.setState({ loader: 1 });
      const data = {
        ...this.state.businessAgents.filter(x => x.id === id)[0],
        agentStatus: status === 'Inactive' ? 'Inactive' : 'Active',
      };
      const headerConfig = {
        headers: {
          Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
        },
      };
      // alert(status)
      Axios.put(`http://122.166.172.240:3031/api/iord-agents`, data, headerConfig).then(res => {
        // console.log(res,'this response is from new call')
        this.setState({ updated: { id: id } });

        this.callData();
      });
    };
    return (
      <div className="rtl-css">
        <div className="container-fluid add-agent">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-2 col-xs-12">
              <SideNav />
            </div>

            <div className="col-md-10 col-sm-10 col-xs-12" style={{ overflowX: 'auto' }}>
              <br />
              <div className="col-sm-3 searchText">
                <input className="form-control" id="myInput" type="text" placeholder="Search Customer Data.." />
              </div>
              <div className="row">
                <div className="col-sm-12 mobileView" style={{ paddingTop: '3rem' }}>
                  <div className="col-sm-12 table-responsive responsiveTbl" style={{ minHeight: '70vh' }}>
                    <table
                      id="dtBasicExample"
                      className="table table-striped table-bordered table-sm"
                      style={{ textAlign: 'right' }}
                      cellspacing="0"
                      width="100%"
                      height="70vh"
                    >
                      <thead>
                        <tr>
                          <th>S. No</th>
                          <th>Agent Name</th>
                          <th>Agent Name (Arabic)</th>
                          <th>Email ID</th>
                          <th>Mobile No</th>
                          <th>Designation</th>
                          <th>Designation (Arabic)</th>
                          <th>Base Location</th>
                          <th>Department</th>
                          <th>Agent Role</th>
                          {/* <th>Location Mapped</th> */}
                          {/* <th>Manager Name</th>
                               <th>Task Performed</th> */}

                          <th>Edit</th>
                          <th>Active</th>
                        </tr>
                      </thead>
                      <tbody id="myTable">
                        {this.state.businessAgents ? (
                          this.state.businessAgents.map((x, index) => {
                            return (
                              <tr key={index}>
                                <td data-label="S.No">{++index}</td>
                                <td data-label="User Name (English)">{`${x.firstName ? x.firstName : ''} ${
                                  x.lastName ? x.lastName : ''
                                }`}</td>
                                <td data-label="User Name (Arabic)">{`${x.firstNameArabic ? x.firstNameArabic : ''} ${
                                  x.lastNameArabc ? x.lastNameArabc : ''
                                }`}</td>
                                <td data-label="User Email ID">{x.email}</td>
                                <td data-label="User Mobile No.">{x.mobileNo}</td>
                                <td data-label="Designation">{x.designation}</td>
                                <td data-label="Designation (Arabic)">{x.designationArabic}</td>
                                <td data-label="Base Location">{x.baseLocation}</td>
                                <td data-label="Department">{x.department}</td>
                                <td data-label="Department">{x.agentRole}</td>

                                {/* <td data-label="locationMapped">{x.locationMapped}</td>
                                        <td data-label="managerName">{x.managerName}</td>
                                        <td data-label="taskPerformed">{x.taskPerformed}</td> */}
                                <td data-label="Status">
                                  {' '}
                                  <Link to={`./editAgent/${x.id}`}>
                                    <IconButton>
                                      <EditIcon />
                                    </IconButton>
                                  </Link>{' '}
                                </td>
                                <td data-label="Edit">
                                  {' '}
                                  {x.agentStatus === 'Active' || x.agentStatus === 'active' ? (
                                    <IconButton
                                      onClick={() => {
                                        changeStatus('Inactive', x.id);
                                      }}
                                    >
                                      <FiberManualRecordIcon style={{ color: 'green' }} />
                                    </IconButton>
                                  ) : (
                                    <IconButton onClick={() => changeStatus('Active', x.id)}>
                                      <BlockIcon style={{ color: 'red' }} />
                                    </IconButton>
                                  )}{' '}
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan="12">Loading...</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
