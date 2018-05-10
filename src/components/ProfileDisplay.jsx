import React, { Component } from 'react';
import SlaveItem from './SlaveItem';

declare var Pictogrify;

export default class ProfileDisplay extends Component{
	constructor(props){
		super(props);
		this.handleSlaves = this.handleSlaves.bind(this);
	}

  	componentDidMount () {
	  	document.querySelector('.my-avatar').src = new Pictogrify(this.props.address, 'monsters').base64;
		
		const script = document.createElement("script");

		script.src = "js/slick-custom.js";
		script.async = true;
		document.body.appendChild(script);
	  }

	handleSlaves(){
      this.slaves = [];

      	for(let i = 0; i < this.props.allUsers.length; i++){
	        for(let j = 0; j < this.props.slavesID.length; j++){
	          if(this.props.allUsers[i]['id'] === this.props.slavesID[j])
	            this.slaves.push(this.props.allUsers[i]);
	         }
      	}
  	}


  	render(){
	    return(
	    <div className="col-sm-6 col-md-8 col-lg-9 p-b-30">
	      <h3 className="p-b-11 m-text17">
	          Profile
	      </h3>
	      {this.handleSlaves()}
	      <section className="bgwhite p-t-66 p-b-38">
			<div className="container">
				<div className="row">
					<div className="col-md-4 p-b-30">
						<div className="hov-img-zoom">
							<img className="my-avatar" alt=""/>
						</div>
					</div>

					<div className="col-md-8 p-b-30">
						<p className="m-text21">
							{this.props.address}
						</p>
						<h3 className="m-text24">
							#{this.props.id}
						</h3>
						<h3 className="m-text26 p-b-16">
							{this.props.name}
						</h3>
						
						<p className="m-text21 p-t-15">
							Price: ${this.props.price}
						</p>
						<p className="m-text21">
							Master: #{this.props.masterID}
						</p>
						<p className="m-text21 p-b-16">
							# of Slaves: {this.slaves.length}
						</p>

						<p className="p-b-28">
							{this.props.introduction}
						</p>
						<div className="w-size2 p-t-20">
							{!this.props.isMe && this.props.canBuy &&
								<button onClick={this.props.handleBuy(this.props.address)} className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4 m-b-20">
									Buy
								</button>
							}
							{!this.props.isMe && this.props.canReward &&
								<button onClick={this.props.handleReward(this.props.address)} className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
									Reward
								</button>
							}
						</div>

					</div>
				</div>
			</div>
		</section>

	      {/*/*<!-- My Slaves -->*/}
			<section className="relateproduct bgwhite p-t-45 p-b-138">
				<div className="container">
					<div className="sec-title p-b-60">
						<h3 className="m-text5 t-center">
							Slaves of {this.props.name}
						</h3>
					</div>

					{/*<!-- Slide2 -->*/}
					<div className="wrap-slick2">
						<div className="slick2">
							{
								this.slaves.map((slave,index)=><SlaveItem key={`slave-${index}`} isMe={this.props.isMe} id={slave['id']} address={slave['address']} name={slave['name']} price={slave['price']}/>)
							}
						</div>
					</div>

				</div>
			</section>
			<script type="text/javascript">
				
			</script>
		</div>
	    );
  }
}