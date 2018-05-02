import React, { Component } from 'react';
import MarketItem from './MarketItem';

export default class MarketDisplay extends Component{
  constructor(props){
    super(props); 
    this.handleLabel();
  }

  handleLabel(){
    let length = this.props.marketSlaves.length;
    this.label = [];

    for(let i = 0; i < length; i++){
      this.label.push('init');
    }

    for(let i = 0; i < length; i++){
      if(this.props.marketSlaves[i] == this.props.id)
        this.label[i] = 'you';
      else if(this.props.marketSlaves[i] == this.props.masterID)
        this.label[i] = 'master';
      else{
        for(let j = 0; j < this.props.slavesID.length; j++){
          if(this.props.marketSlaves[i] == this.props.slavesID[j])
            this.label[i] = 'slave';
        }
      }
    }
    console.log(this.label);
  }

  render(){
    return(
      <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
        {/*<!--  -->*/}
        <div className="flex-sb-m flex-w p-b-35">
          <div className="flex-w">
            <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
              <select className="selection-2" name="sorting">
                <option>Default Sorting</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
              </select>
            </div>
          </div>

          <span className="s-text8 p-t-5 p-b-5">
            Showing 1–9 of {this.props.marketSlaves.length} results
          </span>
        </div>

        {/*<!-- Product -->*/}
        <div className="row">
          {
            this.props.marketSlaves.map((slave, index)=><MarketItem key={slave} label={this.label[index]} id={slave} name={'TestUser'+slave} price={15.90}/>)
          }          
        </div>

        {/*<!-- Pagination -->*/}
        <div className="pagination flex-m flex-w p-t-26">
          <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
          <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
        </div>
      </div>
    );
  }
}