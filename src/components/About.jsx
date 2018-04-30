import React, { Component } from 'react';

export default class About extends Component{
  render(){
    return(
      <div className="blog-detail-txt">
        <h3 className="p-b-11 m-text17">
          About Friends Trading
        </h3>

        <div className="s-text8 flex-w flex-m">
            Hong Kong University of Science and Technology
        </div>

        <div className="s-text8 flex-w flex-m p-b-21">
          <span>
            CHEN Yuji
            <span className="m-l-3 m-r-6">|</span>
          </span>

          <span>
            DAI Na
            <span className="m-l-3 m-r-6">|</span>
          </span>

          <span>
            LIN Yuwei
          </span>
        </div>

        <h4 className="p-b-11 m-text24">
          Buy and Sale Friends
        </h4>

        <p className="p-b-25">
		  In the game, you can buy or sell other users as your slaves. Every users can be both masters and slave. Each master can own several slaves but a slave can only belong to a master. As long as your balance is larger than one slave’s value, you can buy him no matter who his master is. In each transaction, a slave’s value would automatically increase at a certain amount and small transaction costs (gas) need to pay. For your slaves, you can send him to work to make money. Pay attention that a slave can not be traded when going to work. And everyone can reward a slave if you like him.
		</p>

		<h4 className="p-b-11 m-text24">
          Earn Gold Coins
        </h4>

        <p className="p-b-25">
          To make profit, you can send your slaves to work. The salary would be paid by the contract. Slaves would also be rewarded a small amount of the salary. You can also sell your slaves to gain the price difference of a slave’s increasing value.
        </p>

        <h4 className="p-b-11 m-text24">
          Reward
        </h4>

        <p className="p-b-25">
          Every user can reward other users by money. A slave can get most of the bonus while his master can get a small part.
        </p>

        <h4 className="p-b-11 m-text24">
          Notice
        </h4>

        <div className="s-text8">
        	<p className="p-b-11">
        		1. Since each transaction will be recorded in the blockchain, certain blockchain computational resources will be consumed during the period. Therefore, when you purchase a slave, you need to pay a certain fee(gas). The maximum fee will not exceed 30 gold coins, and the final price will be determined by the current blockchain consumption.
        	</p>
        	<p className="p-b-11">
        		2. When you fancy a slave, after submitting a purchase order, it will take some time to determine the transaction, since this transaction need to  be written into the Blockchain network. This order could be seen in the profile page.
        	</p>
        	<p className="p-b-11">
        		3. When you buy a slave, you need to pay a certain fee(gas). Therefore, the balance of your gold coins must be greater than the sum of slave sale price and transaction fee, before you can successfully initiate the purchase. The actual fees charged will be determined by the current blockchain consumption, which can be viewed in the profile page after the transaction is completed.
        	</p>
        	<p className="p-b-11">
        		4. In order to better maintain the order of the market, unsuccessful slaves transaction within a certain period of time may be cancelled by the system.
        	</p>
        </div>
      </div>
    );
  }
}