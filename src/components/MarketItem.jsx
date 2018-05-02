import React, { Component } from 'react';

export default class MarketItem extends Component{	

	render(){
		let labelType = '';
		switch(this.props.label){
			case 'init':
				labelType = "block2-img wrap-pic-w of-hidden pos-relative";
				break;
			case 'you':
				labelType = "block2-img wrap-pic-w of-hidden pos-relative block2-labelyou";
				break;
			case 'master':
				labelType = "block2-img wrap-pic-w of-hidden pos-relative block2-labelmaster";
				break;
			case 'slave':
				labelType = "block2-img wrap-pic-w of-hidden pos-relative block2-labelowned";
				break;
			default:
				labelType = "block2-img wrap-pic-w of-hidden pos-relative";
		}
		return(
			<div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
            {/*<!-- Block2 -->*/}
	            <div className="block2">
		            <div className={labelType}>
		              <img src="images/item-cart-01.jpg" alt="IMG-PRODUCT"/>
		            </div>

		            <div className="block2-txt p-t-20">
		              <a href="#" className="block2-name dis-block s-text3">
		                #{this.props.id}
		              </a>
		              <a href="#" className="block2-name dis-block s-text3 p-b-5">
		                {this.props.name}
		              </a>

		              <span className="block2-price m-text6 p-r-5">
		                ${this.props.price}
		              </span>
	              	</div>
            	</div>
          	</div>
		);
	}
}