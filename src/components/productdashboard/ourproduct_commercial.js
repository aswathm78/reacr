import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { loanProductDetails } from "../../store/action";
const mapStateToProps = state => ({
    ...state,
    });
    
    const mapDispatchToProps = dispatch => ({
        loanProductDetails: () => dispatch(loanProductDetails()),
   
    });
class ourproduct_commercial extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
  async  componentDidMount()
    {
        await this.props.loanProductDetails()
    }
   
    render() {
        let commercialloandata=this.props.reducer.commercialloanProductdata ? this.props.reducer.commercialloanProductdata: []
      //console.log(data,'commerciallaon')
        return (
            <div>
                <div className="container loandashboardpadding">
                    <div className="row">

                        <div className="dfs-productheading">
                        {this.props.lang == 'en'? 'PRODUCT':'پروڈکٹ'}  
                            </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div className="dfs-productcodeheading">
                                    {this.props.lang == 'en'? 'Product code:':'پروڈکٹ کوڈ:'}   
                                </div>
                                    <div className="dfs-productcode">
                                        {commercialloandata[0]?commercialloandata[0].prodCode:''}
                                </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div style={{marginLeft:'20px'}} className="dfs-productcodeheading">
                                    {this.props.lang == 'en'? 'Product Description:':'مصنوعات کی وضاحت:'}   
                                </div>
                                    <div className="dfs-productcode">
                                    {commercialloandata[0]?commercialloandata[0].prodDesc:''}
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------First section end --------------------------*/}
                        <div className="dfs-productheading">
                        {this.props.lang == 'en'? 'SUB PRODUCT':'سب پروڈکٹ'}   
                            </div>


                        <div className="col-sm-12">
                            <div className="col-sm-6">

                                <div className="col-sm-6">
                                {commercialloandata.length > 0 ? commercialloandata.map(result => (
                                    <div className="dfs.subproductstyle">
                                        <label style={{ "font-size": "12px", "font-weight": "normal" }}>
                                            <input type="radio" style={{ "margin-right": "10%", }} />
                                            Sub Poduct Code:

                                       </label>
                                    </div>
                                    )) : ''}
                                </div>

                                <div className="col-sm-6">
                                {commercialloandata.length > 0 ? commercialloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        {result.subProdCode}
                                  </div>
                                   )) : ''}
                                </div>



                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-6">
                                {commercialloandata.length > 0 ? commercialloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        Sub Product Description
                                  </div>
                                   )) : ''}
                                </div>

                                <div className="col-sm-6">
                                {commercialloandata.length > 0 ? commercialloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        {result.subProdDesc}
                                  </div>
                                  )) : ''}
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* <div className="dfs_btnapplyloan">
                        <button className="dfs_applyforloan">Apply for Loan</button>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ourproduct_commercial);