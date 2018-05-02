import React, { Component } from 'react';

export default class SlaveItemMini extends Component{
	render(){
		return(
			<li className="header-cart-item">
              <div className="header-cart-item-img">
                <img src="images/item-cart-01.jpg" alt="IMG"/>
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