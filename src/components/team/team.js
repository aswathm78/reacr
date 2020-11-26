import React, { Component } from "react";
import Animate from "animate.css-react";

import OwlCarousel from "react-owl-carousel2";
import { connect } from "react-redux";
import "../../assets/css/team.css";
import config from '../../assets/config/config';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl'}
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
    const options = {
      items: 1,
      nav: true,
      navText:["<div class='leftarrow'></div>","<div class='fa fa-long-arrow-right rightarrow'></div>"],
      dots: false,
    };

    let heading,
      detail,
      item = [];
    if (this.props.teamData) {
      this.props.teamData.map((i) => {
        if (i.language === this.props.language) {
          heading = i.heading;
          detail = i.detail;
          i.teamslides.map((j, index) => {
            let image = config.STRAPI_URL;

            j.image.map((k) => {
              image += k.formats.thumbnail.url;
            });

            item.push(
              <div class="row">
                <Animate
                  class="col-md-5"
                  appear="fadeInLeft"
                  durationAppear={1500}
                  component="div"
                >
                  <img src={image} alt="" />
                </Animate>
                <Animate
                  class="col-md-7"
                  appear="fadeInRight"
                  durationAppear={1500}
                  component="div"
                >
                  <div class="meet-advisors-content" style={this.props.language === "ar" ? arabicStyle :null}>
                    <h3 >
                      {j.name}
                      <span >{j.designation}</span>
                    </h3>
                    <p>{j.detail}</p>
                    <ul class="social-text">
                      <li>
                        <a href="#." class="facebook" >
                          facebook
                        </a>
                      </li>
                      <li>
                        <a href="#." class="twitter" >
                          twitter
                        </a>
                      </li>
                      <li>
                        <a href="#." class="youtube" >
                          youtube
                        </a>
                      </li>
                    </ul>
                  </div>
                </Animate>
              </div>
            );
          });
        }
      });
    }
    return (
      <>
        <section class="meet-our-advisors" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
          <div class="container">
            <Animate
              class="heading text-center"
              appear="bounceIn"
              durationAppear={1500}
              component="div"
            >
              <h2 style={this.props.language === "ar" ? arabicStyle :null}>{heading}</h2>
              <p style={this.props.language === "ar" ? arabicStyle :null}>{detail}</p>
            </Animate>
			{this.props.teamData.length ? 
			 <OwlCarousel options={options}>
			 {item}         
		   </OwlCarousel>
			: null}
           
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.reducer.language
  };
};


export default connect(mapStateToProps, null)(Team);
