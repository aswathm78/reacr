import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Animate from 'animate.css-react';
import { connect } from "react-redux";
import config from '../../assets/config/config';

class blogs extends Component {
    render() {
        const options = {
            items: 3,
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
					items:3
				}
			}
			};
			let heading,detail,item=[];
			if(this.props.blogData){
				this.props.blogData.map(i=>{
					if(i.language === this.props.language){
						heading = i.heading;
						detail = i.detail;
						i.blogitems.map((j,index)=>{
							let image = config.STRAPI_URL + '';
							image += j.image.map((k)=>{
								return k.formats.thumbnail.url;
							})
							item.push(
								<Animate 
								durationAppear={5000}
								component="div">
									<div class="image-and-text-box">
								  <div class="bordered-thumb"><a
										  href="http://maalem.com.sa/en/new-with-maalem/signing-a-memorandum-of-understanding/"><img
											  src={image} alt="" style={{width:"260px",height:"200px"}}/></a></div>
								  <h4><a href="http://maalem.com.sa/en/new-with-maalem/signing-a-memorandum-of-understanding/">{j.title}</a></h4>
									<p>{j.detail}</p>
								  <a href="http://maalem.com.sa/en/new-with-maalem/signing-a-memorandum-of-understanding/"
									  class="btn btn-primary" data-text="read more">{j.buttonlabel}</a>
									</div>
						   
							   </Animate>

							)
						})
					}
				})

			}
        return (
            <div>
                <section class="text-center">
		<h2>{heading}</h2>
		<p>{detail}</p>
		<br/>
		<div class="container">
			{this.props.blogData.length ?
			    <OwlCarousel options={options} > 	   
		   		{item}
	  
				</OwlCarousel>
			 :null}
    
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
  
  
  export default connect(mapStateToProps, null)(blogs);