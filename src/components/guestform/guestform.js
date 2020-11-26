import React, { Component } from "react";
import "../../assets/css/guestform.css";
import { connect } from "react-redux";
class Guestform extends Component {
	constructor(props) {
		super(props);
		this.state = {
		 
		};
	  }
  render() {
	  let heading,title1,title2,detail;
	  if(this.props.requestQuotesData){
		  this.props.requestQuotesData.map(i=>{
			if(i.language === this.props.language){
				heading = i.heading;
				title1 = i.title1;
				title2 = i.title2;
				detail = i.detail;
			}
		  })

	  }
    return (
      <div>
        <section>
          <div class="container">
            <div class="request-a-callback clearfix ">
              <div class="request-a-callback-content">
				<h3>{heading}</h3>
                <p>
				<strong>{title1}</strong> <br />
                 {detail}
                </p>
                <p>
                  <strong>{title2}</strong>
                </p>
              </div>

              <div class="request-a-callback-form">
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Email Address" />
                  <input type="text" placeholder="Phone Number" />

                  <select class="styled-select1">
                    <option>I would like to discuss:</option>
                    <option>Auto Loan</option>
                    <option>Commercial Loan</option>
                    <option>Consumer Loan</option>
                    <option>SME Loan</option>
                    <option>Other</option>
                  </select>

                  <button data-text="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)(Guestform);
