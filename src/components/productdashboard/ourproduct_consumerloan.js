import React, { Component } from 'react';
import './loans.css'
import axios from 'axios'
import { connect } from "react-redux";
import { loanProductDetails } from "../../store/action";
const mapStateToProps = state => ({
    ...state,
    });
    
    const mapDispatchToProps = dispatch => ({
        loanProductDetails: () => dispatch(loanProductDetails()),
   
    });
class ourproduct_consumerloan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CDData:[]
        }
    }


   
    render() {
        let consumerloandata=this.props.reducer.consumerloanProductdata ? this.props.reducer.consumerloanProductdata: []
        //console.log(consumerloandata,'common')
        return (
            <div>
               <div className="container loandashboardpadding">
                    <div className="row">

                        <div className="dfs-productheading">
                            PRODUCT
                            </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div className="dfs-productcodeheading">
                                        Product code:
                                </div>
                                    <div className="dfs-productcode">
                                        {consumerloandata[0]?consumerloandata[0].prodCode:''}
                                </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div className="dfs-productcodeheading">
                                        Product Description:
                                </div>
                                    <div className="dfs-productcode">
                                    {consumerloandata[0]?consumerloandata[0].prodDesc:''}
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------First section end --------------------------*/}
                        <div className="dfs-productheading">
                           SUB PRODUCT
                            </div>


                        <div className="col-sm-12">
                            <div className="col-sm-5">
                          
                                <div className="col-sm-6">
                                {consumerloandata.length > 0 ? consumerloandata.map(result => (
                                    <div className="dfs.subproductstyle">
                                        <label style={{ "font-size": "12px", "font-weight": "normal" }}>
                                            <input type="radio" style={{ "margin-right": "10%", }} />
                                             sub product code:

                                       </label>
                                       
                                    </div>
                                    )) : ''}
                                </div>
                                     

                                <div className="col-sm-6">
                                {consumerloandata.length > 0 ? consumerloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        {result.subProdCode}
                                  </div>
                                   )) : ''}
                                </div>
                                 


                            </div>

                            <div className="col-sm-7">
                                <div className="col-sm-4">
                                {consumerloandata.length > 0 ? consumerloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        Sub Product Description
                                  </div>
                                    )) : ''}
                                </div>

                                <div className="col-sm-8">
                                {consumerloandata.length > 0 ? consumerloandata.map(result => (
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

export default connect(mapStateToProps, mapDispatchToProps)(ourproduct_consumerloan);