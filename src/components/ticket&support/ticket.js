import React, { Component } from 'react';
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import './ticket.css'
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

class ticket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activePage: 1
        }
    }
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        return (
            <div>
                  
                <div className="conainer ticketpadding">
                {/* <div className="ticket_backgimg">
                            Messages
                        </div> */}
                    <div className="row">
                    
                        <div className="card" style={{ "border-radius": "23px", "border": "1px solid","height":"344px" }}>
                            <div className="card-body">
                                <div className="ticket_heading">
                                    Messages
                            </div>
                                <div className="ticket_table">
                                    <div className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Requested Date</th>
                                                <th>Service Requests number</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2020-08-23</td>
                                                <td>SR37781328</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <td>2020-08-29</td>
                                                <td>SR19839344</td>
                                                <td>Closed</td>
                                            </tr>

                                        </tbody>
                                        
                                    </div>
                                    

                                </div>
                                <div className="col-sm-12">
                                    <div className="col-sm-6">
                                        <div className="ticket_pagination">
                                            showing 1 to 2 of entiries
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="ticket_paginationnum">
                                            <Pagination
                                                prevPageText='prev'
                                                nextPageText='next'


                                                itemsCountPerPage={5}
                                                totalItemsCount={10}
                                                pageRangeDisplayed={3}
                                                onChange={this.handlePageChange}
                                            />
                                        </div>

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

const mapStateToProps = (state) => {
    return {
        language: state.reducer.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeLanguage: (value) =>
            dispatch({ type: actionTypes.SELECT_LANGUAGE, payload: value }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ticket);
