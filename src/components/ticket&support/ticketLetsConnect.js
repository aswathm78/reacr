import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import './ticketLets.css';
import Axios from 'axios';
import config from '../../assets/config/config';

class ticketLetsConnect extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ticketandsupport:[]
        }
    }
    
    componentDidMount() {
        Axios
      .get(config.STRAPI_URL + '/ticketand-supports')
      .then(res => {
        this.setState({ ticketandsupport: res.data })
         console.log('ticketandsupport', this.state.ticketandsupport)
      })
    }
    render() {
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let guidetext, fullname, emailaddress, phonenumber, helpyou, comment, maximumword, attachasnap, submitbtn, Lang, letsconnect
        if (this.state.ticketandsupport) {
            this.state.ticketandsupport.map((t, index) => {
                if (t.Lang == window.sessionStorage.getItem('language')) {
                    guidetext = t.guidetext;
                    fullname = t.fullname;
                    emailaddress = t.emailaddress;
                    phonenumber = t.phonenumber;
                    helpyou = t.helpyou;
                    comment = t.comment;
                    maximumword = t.maximumword;
                    attachasnap = t.attachasnap;
                    submitbtn = t.submitbtn;
                    Lang = t.Lang;
                    letsconnect = t.letsconnect;





                }
            })
        }
        return (
            <div>
                <div className="container letconnectpadding custom-border">
                    <div className="row">
                        <div className="ticketlets_heading">
                            {guidetext}<br /><span style={{ "border-bottom": "2px solid #00d0ff" }}>{letsconnect}</span>
                        </div>



                        <form>
                            <div className="text-center">
                                <div className="ticket_fields">
                                    <input type="text" placeholder={fullname} />
                                </div>

                                <div className="ticket_fields">
                                    <input type="email" placeholder={emailaddress} />
                                </div>

                                <div className="ticket_fields">
                                    <input type="text" placeholder={phonenumber} />
                                </div>

                                <div className="ticket_fields">
                                    <input type="text" placeholder={helpyou} />
                                </div>
                                <div className="ticket_txt">
                                    <div className="commenttxt">{comment}</div>
                                    <textarea rows="5" cols="5" name="comment"
                                    ></textarea>
                                    <div className="maxtxt">{maximumword}</div>
                                </div>
                                <div className="fileupload">

                                    <label class="custom-file-upload">
                                        <input type="file" />
                                        <i class="fa fa-cloud-upload"></i>

                                    </label>

                                    <div style={{ "font-size": "12px", "padding-left": "10px", "padding-top": "15px" }}>
                                        {attachasnap}
                                    </div>
                                </div>

                            </div>
                            <div className="letsbtn">
                            {/* <Link to="/message"> */}
                                <button className="fb_btn">{submitbtn}</button>
                                {/* </Link> */}
                            </div>
                        </form>



                    </div>
                </div >
            </div >

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
export default connect(mapStateToProps, mapDispatchToProps)(ticketLetsConnect);
