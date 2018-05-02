import React, { Component } from 'react';
import SlaveItem from './SlaveItem';

export default class ProfileDisplay extends Component{
  render(){
    return(
    <div className="col-sm-6 col-md-8 col-lg-9 p-b-30">
      <h3 className="p-b-11 m-text17">
          Profile
      </h3>
      <section className="bgwhite p-t-66 p-b-38">
		<div className="container">
			<div className="row">
				<div className="col-md-4 p-b-30">
					<div className="hov-img-zoom">
						<img src="images/item-01.jpg" alt="IMG-ABOUT"/>
					</div>
				</div>

				<div className="col-md-8 p-b-30">
					<h3 className="m-text24">
						#{this.props.id}
					</h3>
					<h3 className="m-text26 p-b-16">
						{this.props.name}
					</h3>
					<p className="m-text21 p-t-15">
						Price: ${this.props.price}
					</p>
					<p className="m-text21 p-b-16">
						Master: #{this.props.masterID}
					</p>

					<p className="p-b-28">
						{this.props.introduction}
					</p>
				</div>
			</div>
		</div>
	</section>

      {/*/*<!-- My Slaves -->*/}
		<section className="relateproduct bgwhite p-t-45 p-b-138">
			<div class="container">
				<div className="sec-title p-b-60">
					<h3 className="m-text5 t-center">
						My Slaves
					</h3>
				</div>

				{/*<!-- Slide2 -->*/}
				<div className="wrap-slick2">
					<div className="slick2">
						{
							this.props.slavesID.map((slave)=><SlaveItem key={slave} id={slave} name={'TestUser'+slave} price={15.90}/>)
						}
					</div>
				</div>

			</div>
		</section>
	</div>
    );
  }
}