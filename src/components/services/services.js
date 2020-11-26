import React, { Component } from "react";
import Animate from "animate.css-react";
import OwlCarousel from "react-owl-carousel2";
import Faq from "../faq/faq";
import Image1 from "../../assets/images/who-is-behind-img1.png";
import Image2 from "../../assets/images/who-is-behind-img2.png";
import { connect } from "react-redux";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl'}
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
    const options = {
      items: 2,
      nav: false,
      navText: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
        }
    };
    let heading,detail,item=[];
    if(this.props.addServiceData){
      this.props.addServiceData.map(i=>{
        if(i.language === this.props.language){
        heading = i.heading;
        detail = i.detail;
        i.additionalserviceslides.map((j,index)=>{
       
          item.push(
            <div class="service-box" key={index}>
            <i class={j.icon}></i>
            <h4 style={this.props.language === "ar" ? arabicStyle :null}>{j.heading}</h4>
            <p style={this.props.language === "ar" ? arabicStyle :null} >
             {j.detail}
            </p>
          </div>
          )        
        })
      }
      })
    }
    return (
      <>
        <section class="different-services text-center parallax" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
          <div class="container">
            <Animate
              class="heading"
              appear="bounceIn"
              durationAppear={1500}
              component="div"
            >
              <h1 class="color-white" style={this.props.language === "ar" ? arabicStyle :null}>{heading}</h1>
              <p class="color-white" style={this.props.language === "ar" ? arabicStyle :null}>
               {detail}
              </p>
            </Animate>
          </div>
        </section>
        <section class="bg-blue" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null} >
          <div class="container">
            <div class="services text-center">
              {this.props.addServiceData.length ?
                <OwlCarousel options={options}>
                {item}
                  </OwlCarousel>
              :null}
            
            </div>
            <div class="row">
              <div class="col-md-6">
              <Animate
                 appear="fadeInLeft"
                  durationAppear={1500}
                  component="ul"
                >
                <ul class="image-list-classic ">
                  <li>
                    <img src={Image2} alt="" />
                  </li>
                  <li>
                    <img src={Image1} alt="" />
                  </li>
                </ul>
                </Animate>
              </div>
              <Faq {...this.props}/>
            </div>
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


export default connect(mapStateToProps, null)(Services);
