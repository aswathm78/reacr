import React, { Component } from 'react';
import './bankdetails.css'
class bankdetails extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                 <div className="backgroundstyling">
                            <h2 style={{"color":"#ffff","padding-left":"25px"}}>Bank Details</h2>
                        </div>
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

                                <div className="bank_cvv">
                                    <div className="cvv">
                                        <input style={{marginTop:'10px'}} type="numeric"  placeholder="CVV"/>
                                    </div>
                                    <button style={{paddingBottom:'10px',paddingTop:'10px', "border-radius":'5px'}} className="cvv_submit">
                                        submit
                                    </button>
                                </div>





                            </div>
                        </div>

                        {/* --------------------second card -------------------*/}
                        <div className="upicard">


                            <div className="card" style={{ "border-radius": "15px" }}>
                                <div className="card-body">
                                    <div className="bank_upidetail">
                                        <label class="">
                                            <input type="radio" name="optradio" />UPI (Phonepe/ Google Pay/ BHIM)
                                     </label>
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

export default bankdetails;