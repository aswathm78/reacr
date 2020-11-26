import React, { Component } from 'react';
import './apply.css'
class feecharges extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="container applynowpadding">
                    <div className="row">
                        <div className="card" style={{ "border-radius": "10px" }}>
                            <div className="card-body">
                                <div className="fees_heading">
                                    Fees and Charges
                                </div>
                                <div className="fees_table">
                                    <table id="demotable">


                                        <tr>
                                            <td>Types of Fees</td>
                                            <td>Applicable Charges</td>
                                        </tr>
                                        <tr>
                                            <td>Rate of interest</td>
                                            <td>18% p.a. onwards</td>
                                        </tr>

                                        <tr>
                                            <td>Processing fees</td>
                                            <td>Up to 2% of the loan amount (plus applicable taxes)</td>
                                        </tr>

                                        <tr>
                                            <td>DOCUMENT/STATEMENT CHARGES Statement of account/ repayment schedule/ foreclosure letter/ no dues certificate/interest certificate/ list of documents</td>
                                            <td>Download your e-statements/letters/certificates at no extra cost, on Experia. You can also get a physical copy of your statements/letters/certificates/list of documents from any of our branches at a charge of Rs. 50/- (inclusive of taxes) per statement/letter/certificate.</td>
                                        </tr>

                                        <tr>
                                            <td>Bounce charges</td>
                                            <td>Up to Rs. 3000 (inclusive of applicable taxes)</td>
                                        </tr>

                                        <tr>
                                            <td>Penal interest (applicable in case of non-payment of monthly instalment on/before the due date)</td>
                                            <td>2% per month</td>
                                        </tr>
                                        <tr>
                                            <td>Document processing charges</td>
                                            <td>Rs. 1449 + applicable taxes</td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="annualtxt">
                                Annual/Additional maintenance charges
                                </div>
                                <div className="fees_table">
                                    <table id="demotable">


                                        <tr>
                                            <td>Loan variant</td>
                                            <td>Charges</td>
                                        </tr>
                                        <tr>
                                            <td>Flexi Term Loan</td>
                                            <td>0.25% plus applicable taxes of the total with drawable amount (as per the repayment schedule) on the date of levy of such charges.</td>
                                        </tr>

                                        <tr>
                                            <td>Flexi Hybrid Loan</td>
                                            <td>1.0% plus applicable taxes of the total withdrawable amount during the initial tenor. 0.25% plus applicable taxes of the total withdrawable amount during subsequent tenor.</td>
                                        </tr>

                                     
                                    </table>
                                </div>

                                <div className="annualtxt">
                                Foreclosure charges
                                </div>

                                <div className="fees_table">
                                    <table id="demotable">


                                        <tr>
                                            <td>Loan variant</td>
                                            <td>Charges</td>
                                        </tr>
                                        <tr>
                                            <td>Loan (Term Loan/Advance EMI/ Step-Up Structured Monthly Instalment/ Step-Down Structured Monthly Instalment)</td>
                                            <td>4% + applicable taxes on the outstanding loan amount payable by the borrower on the date of such full pre-payment</td>
                                        </tr>

                                        <tr>
                                            <td>Flexi Hybrid Loan</td>
                                            <td>4% plus applicable taxes of the total withdrawable amount as per the repayment schedule, on the date of such full pre- payment.</td>
                                        </tr>

                                     
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default feecharges;