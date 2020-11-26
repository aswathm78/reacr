import React, { Component } from 'react';
import './loans.css'
import { connect } from "react-redux";
import { loanProductDetails } from "../../store/action";

const mapStateToProps = state => ({
    ...state,
    });
    
    const mapDispatchToProps = dispatch => ({
        loanProductDetails: () => dispatch(loanProductDetails()),
   
    });
class ourproduct_autoloan extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    async componentDidMount()
    {
       await this.props.loanProductDetails()
    }
  

    render() {
      let autoloandata=this.props.reducer.autoloanProductdata? this.props.reducer.autoloanProductdata: []
     // console.log(autoloandata,'autoloandata')
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
                                        {autoloandata[0]?autoloandata[0].prodCode:''}
                                </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="dfs-productcodestyling">
                                    <div className="dfs-productcodeheading">
                                        Product Description:
                                </div>
                                    <div className="dfs-productcode">
                                        {autoloandata[0]?autoloandata[0].prodDesc:''}
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* ---------------------------------First section end --------------------------*/}
                        <div className="dfs-productheading">
                           SUB PRODUCT
                            </div>


                        <div className="row">
                            <div className="col-sm-6">
                          
                                <div className="col-sm-6 col-md-6">
                                {autoloandata.length > 0 ? autoloandata.map(result => (
                                    <div className="dfs.subproductstyle">
                                        <label style={{ "font-size": "12px", "font-weight": "normal" }}>
                                            <input type="radio" style={{ "margin-right": "10%", }} />
                                             sub product code:

                                       </label>
                                       
                                    </div>
                                    )) : ''}
                                </div>
                                     

                                <div className="col-sm-6 col-md-6">
                                {autoloandata.length > 0 ? autoloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        {result.subProdCode}
                                  </div>
                                   )) : ''}
                                </div>
                                 


                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-6 col-md-6">
                                {autoloandata.length > 0 ? autoloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        Sub Product Description
                                  </div>
                                    )) : ''}
                                </div>

                                <div className="col-sm-6 col-md-6">
                                {autoloandata.length > 0 ? autoloandata.map(result => (
                                    <div style={{ "font-size": "12px" }}>
                                        {result.subProdDesc}
                                  </div>
                                   )) : ''}
                                </div>


                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ourproduct_autoloan);