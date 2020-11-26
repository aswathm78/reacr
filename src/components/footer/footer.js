import React, { Component } from "react";
import logoimage from "../../assets/images/logo.png";
import { connect } from "react-redux";
class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	  }
	 
  render() {
  
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl'}
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
	  let subscriberHeading,buttonLabel,name,email,links1=[],links2=[],copyright,designBy,heading1,heading2,detail,time;
	if(this.props.newsSubscribeData){
		this.props.newsSubscribeData.map(i=>{
			if(i.language === this.props.language){
				subscriberHeading = i.heading;
        buttonLabel = i.buttonlabel;
        i.subscriberform.item.map((j,index)=>{
          if(j.name){ name = j.name;}
         else if(j.email){ email = j.email;}
            else {  buttonLabel = j.submit;}
         
         
        })
			}
		})
	}

	if(this.props.footerData){
		this.props.footerData.map(i=>{
			if(i.language === this.props.language){
				heading1 = i.heading1;
				heading2 = i.heading2;
				detail = i.detail;
				time = i.time;
				copyright = i.copyright;
				designBy = i.designedby;
				i.link.item.map((j,index)=>{
					if(index < 3){
					links1.push(
						<li style={this.props.language === "ar" ? arabicStyleText :null}>
                          <a   href="index.html">{j.label}</a>
                        </li>
					)}
					else{
						links2.push(
							<li style={this.props.language === "ar" ? arabicStyleText :null}>
							  <a  href="index.html">{j.label}</a>
							</li>)
							
					}

				})
			}
		})
	}
    return (
      <div>
        <footer id="footer" >
          <div class="container">
            <div class="footer-top clearfix">
              <div class="row" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null} >
                <div class="col-md-3 col-sm-3">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img
                        src={logoimage}
                        alt=""
                        style={{ "padding-top": "25px" }}
                        style={this.props.language === "ar" ? { "padding-top": "25px",transform:'rotateY(180deg)',textAlign:'right',direction:'rtl' } : {"padding-top": "25px"}}
                      />
                    </a>
                  </div>
                </div>
                <div class="col-md-9 col-sm-9">
                  <div class="newsletter-widget clearfix">
				          	<h5 style={this.props.language === "ar" ? arabicStyle :null}>{subscriberHeading}</h5>
                    <input
                       style={this.props.language === "ar" ? { width: "40%",transform:'rotateY(180deg)',textAlign:'right',direction:'rtl' } :{ width: "40%" }}
                      type="text"
                      data-delay="300"
                      placeholder={name ? name : null}
                      name="subscribe_name"
                      id="subscribe_name"
                      onKeyPress="removeChecks();"
                  
                    />
                    <input
        
                      type="text"
                      data-delay="300"
                      placeholder={email ? email : null}
                      name="subscribe_email"
                      id="subscribe_email"
                      onKeyPress="removeChecks();"
                      style={this.props.language === "ar" ? { width: "40%",transform:'rotateY(180deg)',textAlign:'right',direction:'rtl' } :{ width: "40%" }}
                    />
                    <button
                      style={this.props.language === "ar" ? arabicStyleText :null}
                      class="btn btn-primary"
                      name="Subscribe"
                      type="submit"
                      data-text={buttonLabel}
                      onClick="validateSubscription();"
                    >
                      {buttonLabel ? buttonLabel : null}
                    </button>
                  </div>
                </div>
              </div>

              <div class="footer">
                <div class="row" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
                  <div class="col-md-6">
                    <div class="usefull-links-widget clearfix">
					            <h4 style={this.props.language === "ar" ? arabicStyle :null}>{heading1}</h4>
                      <ul>
                       {links1}
                      </ul>
                      <ul>
                        {links2}
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="twitter-widget clearfix" >
						            <h4 style={this.props.language === "ar" ? arabicStyle :null}>{heading2}</h4>
                      <div class="tweet" style={this.props.language === "ar" ? {display:'flex'} :null}>
                        <i class="icon-twitter-1" style={this.props.language === "ar" ? arabicStyleText :null}></i>
                        <p style={this.props.language === "ar" ? arabicStyleText :null}>
                          <a href="#" >@maalem-finance</a>{detail}<a href="#.">www.maalem.com.sa</a>
						            	<span>{time}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <div class="container">
              <div class="row" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
                <div class="col-md-6 col-sm-6">
                  <p style={this.props.language === "ar" ? arabicStyleText :null}>
                  {copyright}
                  </p>
                </div>
                <div class="col-md-6 col-sm-6">
                  <p class="text-right" style={this.props.language === "ar" ? { transform:'rotateY(180deg)',textAlign:'left'} :null} >
                    Designed by{" "}
                    <a href="#.">
                      IntelOra Resources And Developmets Pvt. Ltd.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)(Footer);
