import React, { Component } from 'react';

class upidetails extends Component {
    render() {
        return (
            <div>
                  <div className="container bankpadding">
                    <div className="row">
                        <div className="card" style={{ "border-radius": "15px" }}>
                            <div className="card-body">
                                <div className="bank_paymentheading">
                                    SAVED CARDS
                                </div>
                                <div className="bank_debitbank">
                                    <label class="">
                                        <input type="radio" name="optradio" />Citibank Debit Card 65XX XXXX XXXX 4787
                                             </label>
                                </div>

                                <div className="bank_debitbank">
                                    <label class="">
                                        <input type="radio" name="optradio" />State bank of India Debit Card 45XX XXXX XXXX 4193
                                     </label>
                                </div>

                               




                            </div>
                        </div>

                        {/* --------------------second card -------------------*/}
                        <div className="upicard">


                            <div className="card" style={{ "border-radius": "15px" }}>
                                <div className="card-body">
                                    <div className="bank_upidetail">
                                        <label style={{"padding":"0px 25px"}}>
                                            <input type="radio" name="optradio" />UPI (Phonepe/ Google Pay/ BHIM)
                                           
                                     </label>
                                     <div className="upi_option">
                                         choose an option
                                         <label>
                                            <input type="radio" name="optradio" />PhonePe
                                           
                                     </label>
                                     <label>
                                            <input type="radio" name="optradio" />Your UPI ID
                                           
                                     </label>
                                     </div>
                                     
                                    </div>
                                    <div className="bank_upidetail">
                                        <label class="">
                                            <input type="radio" name="optradio" />Credit / Debit/ ATM Card
                                     </label>
                                    </div>
                                    <div className="bank_upidetail">
                                        <label class="" style={{ "border-bottom": "none" }}>
                                            <input type="radio" name="optradio" />Net banking
                                     </label>
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

export default upidetails;