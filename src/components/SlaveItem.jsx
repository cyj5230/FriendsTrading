import React, { Component } from 'react';

declare var Pictogrify;

export default class SlaveItem extends Component{
	constructor(props){
		super(props);
		this.avatar = null;

		this.setAvatarRef = element =>{
			this.avatar = element;
		}
	}
	componentDidMount (props) {
  		this.avatar.src = new Pictogrify(this.props.name, 'monsters').base64;
  	}
	render(){
		return(
			<div className="item-slick2 p-l-15 p-r-15">
				{/*<!-- Block2 -->*/}
				<div className="block2">
					<div className="block2-img wrap-pic-w of-hidden pos-relative">
						<img ref={this.setAvatarRef} alt=""/>
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