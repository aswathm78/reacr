import React, { Component } from 'react';
import './apply.css'
import Modal from 'react-modal';
class applynow extends Component {
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
                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 applynow">
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="col-sm-4 applynow">
                                <input type="text" placeholder="Mobile Number" />
                            </div>
                            <div className="col-sm-4 applynow">

                                <input type="text" placeholder="Your Email Address" />
                            </div>
                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 applynow">
                                <input type="text" name="input" placeholder="Date of birth" required
                                />
                            </div>
                            <div className="col-sm-4 applynow">
                                <input type="text" placeholder="PAN Card" />
                            </div>
                            <div className="col-sm-4 applynow">

                                <input type="text" placeholder="Pin code" />
                            </div>
                        </div>

                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 applynow">
                                <label>Business Vintage </label><br />
                                <select>
                                    <option>-- select --</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>


                            </div>
                            <div className="col-sm-4 applynow">
                                <label>Annual Turnover</label><br />
                                <select>
                                    <option>-- select --</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                            <div className="col-sm-4 applynow">
                                <label>Nature of Business</label><br />
                                <select>
                                    <option>-- select --</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 applycolpadding">
                            <div className="col-sm-4 applynow">
                            {/* <div className="left "> */}
                                <label>Type of Business</label><br />
                                <select>
                                    <option>-- select --</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>

                            {/* </div> */}


                            </div>
                            <div className="col-sm-4 applynow">
                               
                            </div>
                            <div className="col-sm-4 applynow">
                              
                            </div>
                        </div>


                    </div>
                    
                    {/*-------------------- bottom content --------------------*/}

                   

                    < div className="fb_submit">
                        <button className="fb_btn">Submit</button>
                    </div>




                </div>
            </div>
        );
    }
}

export default applynow;