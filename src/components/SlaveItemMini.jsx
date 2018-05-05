import React, { Component } from 'react';

declare var Pictogrify;

export default class SlaveItemMini extends Component{
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
			<li className="header-cart-item">
              <div className="header-cart-item-img">
                <img className="avatar" ref={this.setAvatarRef} alt=""/>
              </div>

              <div className="header-cart-item-txt">
                <a href="#" className="header-cart-item-name">
                  #{this.props.id} {this.props.name}
                </a>

                <span className="header-cart-item-info">
                  ${this.props.price}
                </span>
              </div>
            </li>
	);
	}
}