import React, { Component } from 'react';
import './feedbackform.css'
import * as actionTypes from "../../store/action";
import { connect } from "react-redux";
import Axios from 'axios'
import config from '../../assets/config/config';

class feedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: {},
            errors: {},
            radiobtn: '',
            feedbackDate: []
        }
    }

    feedbackData = () => {

        var comment = document.getElementById('id-comment').value;
        var email = document.getElementById('id-name').value;
        var fstname = document.getElementById('id-yourmail').value;
        console.log(comment, 'commentdata')
        let data = {
            
            comment:comment,
            email: email,
            fstname: fstname

        }
        Axios.post('http://122.166.172.240:4000/feedback',data

        ).then(resp => {
            console.log(resp,'responseData');
        }).catch(error => {
            console.log(error);
        });
    }


    handleChange = (event) => {

        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input,
            radiobtn: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            let input = {};

            input["name"] = "";
            input["email"] = "";
            input["comment"] = "";
            this.setState({ input: input });

            alert('Demo Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your feedback.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }


    componentDidMount() {
        Axios
            .get(config.STRAPI_URL + '/feedbacks')
            .then(res => {
                this.setState({ feedbackDate: res.data })
                console.log('feedbacldata', this.state.feedbackDate)
            })
    }


    render() {
        // console.log( window.sessionStorage.getItem('language'),'feedbackrenderdata')
        //console.log(this.props.feedbackDate,'feebackdata')
        const arabicStyleText = { transform: 'rotateY(180deg)', textAlign: 'right', direction: 'rtl' }
        const arabicStyle = { transform: 'rotateY(180deg)', direction: 'rtl' }
        let feedbackHeading, feedbacktext, feedbacktype, commment, bugReports, questions, describrFeedback, fullname, youremail, submit
        if (this.state.feedbackDate) {
            this.state.feedbackDate.map((f, index) => {
                if (f.Lang == window.sessionStorage.getItem('language')) {

                    feedbackHeading = f.feedbackHeading;
                    feedbacktext = f.feedbacktext;
                    feedbacktype = f.feedbacktype;
                    commment = f.commment;
                    bugReports = f.bugReports;
                    questions = f.questions;
                    describrFeedback = f.describrFeedback;
                    fullname = f.fullname;
                    youremail = f.youremail;
                    submit = f.submit;

                }
            })
        }
        return (

            <div className="container feedbackpadding">
                <div className="row">
                    <div className="fd_cardstyle">
                        <div className="card fd_cardstyle ">
                            <div className="card-body custom-border">
                                <div className="feedbackheading">
                                    {feedbackHeading}
                                </div>
                                <div className="fb_title">
                                    {feedbacktext}
                                </div>

                                <form onSubmit={this.handleSubmit}>
                                    <div className="fb_type">
                                        {feedbacktype}
                                    </div>
                                    <div className="fb_radiobtn">

                                        <label class="radio-inline"><input type="radio" value="Comments"
                                            name="Comments" checked={this.state.radiobtn === "Comments"}
                                            onChange={this.handleChange} />{commment}</label>


                                        <label class="radio-inline"><input type="radio" value="Bug reports"
                                            name="Bug reports" checked={this.state.radiobtn === "Bug reports"}
                                            onChange={this.handleChange} />{bugReports}</label>


                                        <label class="radio-inline"><input type="radio" value="Questions"
                                            onChange="Questions" checked={this.state.radiobtn === "Questions"}
                                            onChange={this.handleChange} />{questions}</label>

                                    </div>
                                    <div className="fb_description">
                                        {describrFeedback}
                                        {/* <textarea class='autoExpand' rows="5" col="5" placeholder='Auto-Expanding Textarea'></textarea> */}
                                        <textarea class="form-control" rows="5" cols="5" name="comment"
                                            value={this.state.input.comment}
                                            onChange={this.handleChange} id="id-comment"></textarea>
                                        <div className="text-danger">{this.state.errors.comment}</div>
                                    </div>

                                    <div className="fb_fields">


                                        {/* <input type="text" name="name" value={this.state.input.name}
                                                onChange={this.handleChange} /> */}
                                        <div className="dfs-feedback" style={{ "width": "50%" }}>
                                            <input type="text" placeholder={fullname} id="id-name" name="name"  value={this.state.input.name}
                                                onChange={this.handleChange} />
                                        </div>

                                        <div className="text-danger">{this.state.errors.name}</div>





                                        {/* <input type="email" name="email"
                                                value={this.state.input.email}
                                                onChange={this.handleChange} /> */}


                                        <div className="dfs-feedback" style={{ "width": "50%", "padding-top": "25px" }}>
                                            <input type="email" placeholder={youremail} id="id-yourmail" name="email"
                                                value={this.state.input.email}
                                                onChange={this.handleChange} />
                                        </div>

                                        <div className="text-danger">{this.state.errors.email}</div>

                                    </div>

                                    <div className="fb_submit">
                                        <button className="fb_btn" onClick={this.feedbackData}>{submit}</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default feedback;