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
  		this.avatar.src = new Pictogrify(this.props.address, 'monsters').base64;
  	}
	render(){
		return(
			<div className="item-slick2 p-l-15 p-r-15">
				{/*<!-- Block2 -->*/}
				<div className="block2">
					<div className="block2-img wrap-pic-w of-hidden pos-relative">
						<img ref={this.setAvatarRef} alt=""/>
						{
							this.props.isMe &&
							<div className="block2-overlay trans-0-4">
								<div className="block2-btn-addcart w-size1 trans-0-4">
									{/*<!-- Button -->*/}
									<button className="flex-c-m size1 m-b-15 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
										Reward
									</button>
									<span className="effect1-line"></span>
									<button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
										Work
									</button>
								</div>
							</div>
						}						
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