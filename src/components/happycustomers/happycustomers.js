import React, { Component } from "react";
import image1 from "../../assets/images/review-author-img.png";
import { connect } from "react-redux";
class Happycustomers extends Component {
	constructor(props) {
		super(props);
		this.state = {
		
		};
	  }
  render() {
	  let heading,detail,item=[],buttonLabel;
	  if(this.props.reviewData){
		this.props.reviewData.map(i=>{
			if(i.language === this.props.language){
				heading = i.heading;
				detail = i.detail;
				buttonLabel = i.buttonlabel;
				i.reviewitems.map((j,index)=>{
					item.push(<div class="col-md-6">
                <div class="testimonial">
                  <div class="testimonial-content">
                    <p>
                    {j.detail}
                    </p>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="testimonials-author">
                        <img class="img-circle" src={image1} alt="" />
                        <p>
					{j.name}<span>{j.designation}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="text-right">
                        <ul class="rating">
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                          <li>
                            <i class="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
				})
				
			}
		})
	  }
    return (
      <div>
        <section class="bg-blue">
          <div class="container">
            <div class="heading text-center">
			<h2>{heading}</h2>
			<p>{detail}</p>
            </div>
            <div class="row">            
             {item}
            </div>
            <div class="text-center">
              <a
                class="btn btn-bordered-dark cd-see-all iconic"
                data-delay="200"
                href="javascript:void(0);"
                data-text="View All"
              >
                <i class="icon-img-grid"></i>{buttonLabel}
              </a>
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


export default connect(mapStateToProps, null)(Happycustomers);
