import React, { Component } from "react";
import Animate from 'animate.css-react';
import config from '../../assets/config/config';
import OwlCarousel from 'react-owl-carousel2';
import { connect } from "react-redux";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const arabicStyleText = {transform:'rotateY(180deg)',textAlign:'right',direction:'rtl'}
    const arabicStyle = {transform:'rotateY(180deg)',direction:'rtl'}
    const options = {
      items: 2,
      nav: false,
      navText:false,
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

      let heading,details,buttonLabel,link,imageURl=config.STRAPI_URL + '';
      if(this.props.welcomeData){
        this.props.welcomeData.map(i=>{
          if(i.language === this.props.language){
            heading = i.heading;
            details = i.details;
            link = i.link;
            buttonLabel = i.buttonlabel;
            imageURl += i.image.map(j=>{
              return(j.formats.small.url)
            })
          }
        })
      }
      let serviceHeading,serviceItem=[];
      if(this.props.serviceData){
        this.props.serviceData.map(i=>{
          if(i.language === this.props.language){
            serviceHeading = i.heading;           
            i.serviceslides.map((j,iteration)=>{
              let image = config.STRAPI_URL + ''
            image +=  j.image.map(k=>{
              return k.formats.small.url;
             })
             if(iteration === 0){
              serviceItem.push(
              <Animate
                appear="fadeInRight"
                durationAppear={5000}
                component="div" >
                <div class="image-and-text-box ">
                  <div class="bordered-thumb"><a href="services.html"><img src={image} alt=""/></a></div>
              <h3 style={this.props.language === "ar" ? arabicStyleText :null}><a href="services.html">{j.heading}</a></h3>
              <p style={this.props.language === "ar" ? arabicStyleText :null}>{j.details}</p>
                </div>
                </Animate>)
             }   
             else if (iteration === 1){
              serviceItem.push(<Animate
                appear="fadeInRight"
                durationAppear={5000}
                component="div" >
                <div class="image-and-text-box ">                 
              <h3 style={this.props.language === "ar" ? arabicStyleText :null}><a href="services.html">{j.heading}</a></h3>
              <p style={this.props.language === "ar" ? arabicStyleText :null}>{j.details}</p>
              <div class="bordered-thumb"><a href="services.html"><img src={image} alt=""/></a></div>
                </div>
                </Animate>)
             } 
             else if (iteration === 2){
                  serviceItem.push(<div class="image-and-text-box">     
                   <div class="bordered-thumb"><a href="services.html"><img src={image} alt=""/></a></div>          
                <h3 style={this.props.language === "ar" ? arabicStyleText :null}><a href="services.html">{j.heading}</a></h3>
                <p style={this.props.language === "ar" ? arabicStyleText :null}>{j.details}</p>
               
              </div>)
             }
             else{
                 serviceItem.push(<div class="image-and-text-box">            
                <h3 style={this.props.language === "ar" ? arabicStyleText :null}><a href="services.html">{j.heading}</a></h3>
                <p style={this.props.language === "ar" ? arabicStyleText :null}>{j.details}</p>
                <div class="bordered-thumb"><a href="services.html"><img src={image} alt=""/></a></div>
              </div>)
             }
             
               
           })
          }
        })
      }
     
      return (
      <>
        <section class="bg-blue" >
          <div class="container">
            <div class="row" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
              <div class="col-md-6" >
                <Animate
                  appear="fadeInLeft"
                  durationAppear={5000}
                  component="div" >
                  <h2 style={this.props.language === "ar" ? arabicStyleText :null}>{heading}</h2>
                  <div class="height-10"></div>
                  <p style={this.props.language === "ar" ? arabicStyleText :null}>{details}</p>
                  <div class="height-10"></div>
                  <div class="height-20"></div>
                   <a style={this.props.language === "ar" ? arabicStyleText :null} href="about-us.html" class="btn btn-bordered-dark" data-text={buttonLabel}>{buttonLabel}</a>
                  <div class="height-40"></div>
                </Animate>

              </div>
              <div class="col-md-6 ">
                <Animate
                  appear="fadeInRight"
                  durationAppear={5000}
                  component="div" >
                  <div class="video-widget">
                    <img style={this.props.language === "ar" ? arabicStyleText :null} src={imageURl} class="img-shadow" alt="" />
                    <a style={this.props.language === "ar" ? arabicStyle :null} href={link} class="fancybox-media"><i
                      class="fa fa-play"></i></a>
                  </div>
                </Animate>
              </div>
            </div>
          </div>
        </section>

    {/* Section 2 */}

        <section class="text-center">
      <h3>{serviceHeading}</h3><br></br><br></br>
		<div class="container" style={this.props.language === "ar" ? {transform:'rotateY(180deg)'} :null}>
      {this.props.serviceData.length ?
        <OwlCarousel options={options} >     
        {serviceItem}   	
         </OwlCarousel>
      :null}
  
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


export default connect(mapStateToProps, null)(MainContent);
