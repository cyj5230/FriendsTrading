import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';

declare var Pictogrify;

export default class Setting extends Component{
  constructor(props){
  	super(props);
  	this.onFormSubmit = this.onFormSubmit.bind(this);
  	this.state = {
			error: undefined,
			redirect: false
		};
  }
  componentDidMount () {
  	document.querySelector('.user-avatar').src = new Pictogrify(this.props.address, 'monsters').base64;
  }

  onFormSubmit(e){
  	e.preventDefault();

	const name = e.target.elements.name.value.trim();
	const introduction = e.target.elements.introduction.value.trim();
	const error = this.props.handleSetting(name, introduction);

	this.setState(() => {
		return{ error };
	});

	if(error === undefined || error === null){
		this.setState(() => {
			return{redirect:true};
		});
	}

	e.target.elements.name.value = '';
	e.target.elements.introduction.value = '';
  }

  render(){
    return(
    	<div>
    		{this.state.redirect && <Redirect to="/my-profile" />}
	    	<h1>Setting</h1>
	    	<div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-l-r-auto p-lr-15-sm">
	      		<img className="user-avatar"/>

	      		<h4 className="s-text12 p-b-5 p-t-20">
					Wallet Address
				</h4>
				<div className="s-text8 flex-w flex-m">
					{this.props.address}
				</div>
		      	

				<form onSubmit={this.onFormSubmit}>
					<h4 className="s-text12 p-b-5 p-t-20">
						Nickname
					</h4>
					<div className="effect1 w-size9">
						<input className="s-text7 w-full p-b-5" type="text" name="name"/>
						<span className="effect1-line"></span>
					</div>

					<h4 className="s-text12 p-b-5 p-t-20">
						Introduction
					</h4>
					<div className="effect1 w-size9">
						<input className="s-text7 w-full p-b-5" type="text" name="introduction" placeholder="tell us about yourself..."/>
						<span className="effect1-line"></span>
					</div>

					<div className="w-size2 p-t-20 m-l-r-auto">
						{/*<!-- Button -->*/}
						<button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
							Join
						</button>
						{
							this.state.error && <p>{this.state.error}</p>
						}
					</div>
				</form>
			</div>
		</div>
    );
  }
}