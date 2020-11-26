import React, { Component } from 'react';
import './dashboard.css';
import Header from './header';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import Axios from 'axios';
export default class CustomerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeNames: [],
      dataCalled: true,
    };
  }
  componentDidMount() {
    if (!this.state.dataCalled) {
      this.setState({ dataCalled: true });
      this.storeData();
    }
  }
  //fetching data
  getStoreData(e) {
    let type = e.target.value;
    // alert(e.target.value)
    const headerConfig = {
      headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
      },
    };
    Axios.get(`http://122.166.172.240:3031/api/stores?vendorId.equals=${type}`, headerConfig).then(res => {
      console.log(res, '0000 store');
      this.setState({ storeNames: res.data,vendor_key:type });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  applyForLoan = () => {
    // let data = {
    //   activeKey: this.activekey,
    //   storeNames: this.state.storeNames,
    // };
    // const headerConfig = {
    //   headers: {
    //     Authorization: 'Bearer ' + window.sessionStorage.getItem('iord_id_token'),
    //   },
    // };
    // Axios.put('http://122.166.172.240:3031/api/loans', data, headerConfig).then(res => {
    //   console.log(res, '0000 store');
    //   // return this.props.dashboardData(this.state.store);
    // });
    console.log(this.state,'this is store')
    let vendor_name =  this.state.vendor_key == 359 ? 'STC' : this.state.vendor_key == 360 ? 'Jarir' : 'Riyadh Bank'
    let storeData = {storeName:this.state.store2,vendord_Key:this.state.vendor_key,vendor_name: vendor_name }
      return this.props.dashboardData(storeData);

    // console.log(this, 'this is console');
    // alert(this.state.store);
  };
  render() {
    // console.log(this, 'this is form props');
    return (
      <>
        <div className="card-body" style={{padding:'3rem 1rem 5rem 1rem'}}>
          <div className="dfs-welcomeprofile">Welcome Mr. Abdullah, Kindly select required loan product and complete your profile.</div>
          <div className="dfs-ourproduct">
            <div className="ourproductarrowstyle">
              <div className="our-productheading">OUR PRODUCTS</div>

              {/* <div class="d-downarrowstyle" style={{ float: 'right' }}>
                <a
                  class=""
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i class="fa fa-chevron-circle-down" aria-hidden="true" style={{ 'font-size': '34px', backgroundColor: '#ffff' }}></i>
                </a>
              </div> */}
            </div>

            <div style={{ paddingY: '5rem' }}>
              <TabProvider defaultTab="AAL">
                <section className="my-tabs">
                  <TabList style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }} className="my-tablist">
                    <Tab tabFor="AAL">Consumer Loan</Tab>
                    <span className="divider"></span>

                    <Tab tabFor="SPER">Business Loan</Tab>
                    <span className="divider"></span>
                  </TabList>

                  <div style={{ display: 'flex', justifyContent: 'space-around' }} className="wrapper">
                    <TabPanel tabId="AAL">
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div  className="agent-lablestyle" style={{ padding: '0 10rem' }}>
                        <label>Vendor</label>
                          <select
                            name="type"
                            onChange={e => {
                              this.getStoreData(e);
                            }}
                          >
                            <option value="">Please select an option</option>
                            <option value="359">STC</option>
                            <option value="360">JARIR</option>
                            <option value="349">Riyadh Bank</option>
                          </select>
                        </div>
                        <div className="agent-lablestyle" style={{ padding: '0 10rem' }}>
                          <label>Locaiton</label>
                          <select name="store2" onChange={e => this.onChange(e)}>
                            <option>Select an Location</option>
                            {this.state.storeNames.length > 0
                              ? this.state.storeNames.map((x, index) => {
                                  return (
                                    <option key={index++} value={x.storeName}>
                                      {x.storeName}
                                    </option>
                                  );
                                })
                              : null}
                          </select>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                        <button  className="dfs-savebtn" onClick={() => this.applyForLoan()}>
                          Apply For Loan
                        </button>
                      </div>
                    </TabPanel>
                    <TabPanel tabId="SPER">
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex',minWidth:'7rem', justifyContent: 'space-between', padding: '0 10rem' }}>
                          <label>Vendor</label>
                          <input type="radio" />
                          <span>Maalem</span>
                        </div>
                        <div style={{ padding: '0 10rem' }}>
                          <select>
                            <option>Select an option</option>
                            {this.state.storeNames.length > 0
                              ? this.state.storeNames.map((x, index) => {
                                  return <option key={index++}>{x.storeName}</option>;
                                })
                              : null}
                          </select>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                        <button  className="dfs-savebtn" onClick={() => this.applyForLoan()}>
                          Apply For Loan
                        </button>
                      </div>
                    </TabPanel>
                  </div>
                </section>
              </TabProvider>
            </div>
          </div>
        </div>
      </>
    );
  }
}
