import React, { Component } from 'react';

export default class SlaveItem extends Component{
	render(){
		return(
			<div className="item-slick2 p-l-15 p-r-15">
				{/*<!-- Block2 -->*/}
				<div className="block2">
					<div className="block2-img wrap-pic-w of-hidden pos-relative">
						<img src="images/item-02.jpg" alt="IMG-PRODUCT"/>
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