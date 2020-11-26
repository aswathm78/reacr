import React, { Component } from 'react';
//import Popover from 'react-simple-popover';


class creditcard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }
    handleClick = (e) => {
        this.setState({ open: !this.state.open });
    }

    handleClose = (e) => {
        this.setState({ open: false });
    }




    render() {
        return (
            <div className="">
                <div className="container bankpadding">
                    <div className="row">
                        <div className="card" style={{ "border-radius": "15px" }}>
                            <div className="card-body">
                                <div className="bank_paymentheading">
                                    Payment options
                                </div>
                                <div className="dfs_radiobtn">
                                <div className="bank_debitbank">
                                    <label class="">
                                        <input type="radio" name="optradio" value="cards" id="cards" />Citibank Debit Card 65XX XXXX XXXX 4787
                                             </label>
                                </div>

                                <div className="bank_debitbank">
                                    <label class="">
                                        <input type="radio" name="optradio" value="cards" id="cards" />State bank of India Debit Card 45XX XXXX XXXX 4193
                                     </label>
                                </div>
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

                                        {/* -----section one --------- */}
                                        <div className="cardenterfield">
                                            <div class="user-input-wrp">

                                                <input type="text" class="inputText" required />
                                                <span class="floating-label">Enter Card Number</span>
                                            </div>
                                            <div className="creadit_cvv">
                                                <div className="cvv">
                                                    <input type="text" placeholder="CVV" />
                                                </div>

                                            </div>
                                        </div>

                                        {/*---------------- section two----------- */}

                                        <div className="cardenterfield">
                                            <div className="carddetailsdate">
                                                <input type="date" />

                                            </div>
                                            <div className="">
                                                <button className="carddetails_submit">
                                                    Pay
                                    </button>
                                            </div>

                                        </div>
                                        <div className="creditcard_info">
                                            Your card details would be securely saved for zfasterpayments. Your CVV will not be stored. <a style={{ color: "lightblue" }} href="#"
                                                className="button"
                                                ref="target"
                                                onClick={this.handleClick.bind(this)}>More info</a>
                                        </div>
                                        {/* <Popover
                                            placement='bottom'
                                            className="creditcard_info"
                                            target={this.refs.target}
                                            show={this.state.open}
                                            style={{"width":"800px","font-size":"12px"}}
                                            onHide={this.handleClose.bind(this)} >
                                            <li>We save your Card number, expiry date and name on card only. We do not save CVV Nos.  </li>
                                            <li>Be assured, your card details are 100% safe with us. we use world class encryption for storing card details and our systems are PCI DSS security certified. </li>
                                            <li>Should you wish to un-save the card, you can do so in the 'Saved Cards' section in the 'Menu Account' menu.</li>
                                        </Popover> */}
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

export default creditcard;