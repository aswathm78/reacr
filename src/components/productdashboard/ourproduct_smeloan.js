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
class ourproduct_smeloan extends Component {
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
        let smeloandata=this.props.reducer.smeloanProductdata ? this.props.reducer.smeloanProductdata: []
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
                                        {smeloandata[0]?smeloandata[0].prodCode:''}
                                </div>
                                    <div className="dfs-productcode">
                                    {smeloandata[0]?smeloandata[0].prodDesc:''}
                                </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div className="dfs-productcodeheading">
                                    {this.props.lang == 'en'? ' Product Description:':'مصنوعات کی وضاحت:'}    
                                </div>
                                    <div className="dfs-productcode">
                                    {this.props.lang == 'en'? 'PERFORMANCE BONDS':'پرفارمنس بانڈز'}      
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------First section end --------------------------*/}
                        <div className="dfs-productheading">
                        {this.props.lang == 'en'? ' SUB PRODUCT':'سب پروڈکٹ'}    
                            </div>


                        <div className="col-sm-12">
                            <div className="col-sm-6">
                          
                                <div className="col-sm-6">
                                {smeloandata.length > 0 ? smeloandata.map(result => (
                                    <div className="dfs.subproductstyle">
                                        <label style={{ "font-size": "12px", "font-weight": "normal" }}>
                                            <input type="radio" style={{ "margin-right": "10%", }} />
                                            {this.props.lang == 'en'? ' sub product code:':'ذیلی پروڈکٹ کوڈ:'}         

                                       </label>
                                       
                                    </div>
                                  )) : ''}
                                </div>
                                     

                                <div className="col-sm-6">
                                {smeloandata.length > 0 ? smeloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                   {result.subProdCode}
                                  </div>
                          )) : ''}
                                </div>
                                 


                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-6">
                                {smeloandata.length > 0 ? smeloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                     {this.props.lang == 'en'? ' Sub Product Description':'ذیلی مصنوعات کی تفصیل'}    
                                  </div>
                             )) : ''}
                                </div>

                                <div className="col-sm-6">
                                {smeloandata.length > 0 ? smeloandata.map(result => (
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

export default connect(mapStateToProps, mapDispatchToProps)(ourproduct_smeloan);