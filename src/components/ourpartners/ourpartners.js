import React, { Component } from 'react';
import { connect } from "react-redux";

import config from '../../assets/config/config';

class Ourpartners extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
   
    
    render() {
		let heading,item=[];
		if(this.props.partnerData){
			this.props.partnerData.map(i=>{
				if(i.language === this.props.language){
					heading = i.heading;
					i.item.map((j,index)=>{
						let image = config.STRAPI_URL + '';
						console.log(j)
						if(j.formats !== null){
						image+=j.formats.thumbnail.url;						
						}
						else{
							image+=j.url
						}					
						item.push(<div class="slide"><img src={image} alt="" class="dfs-partner-logo" style={{width:"180px","padding-left":"29px"}}/></div>)
					})
				}
			})
		}
        return (
        <div>
        <div class="contact-us-bar">
		<div class="container text-center">
		<h2>{heading}</h2><br/>		
			<div class="row">
				<div class="col-md-12 customer-logos slider">
					{item}
				</div>
			</div>
		</div> 
    </div>
    </div>
            
        );
    }
}

const mapStateToProps = (state) => {
	return {
	  language: state.reducer.language
	};
  };
  
  
  export default connect(mapStateToProps, null)(Ourpartners);