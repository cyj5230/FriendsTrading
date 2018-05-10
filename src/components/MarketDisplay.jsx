import React, { Component } from 'react';
import MarketItem from './MarketItem';

export default class MarketDisplay extends Component{
  constructor(props){
    super(props); 
    this.handleChange = this.handleChange.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {value: 'default'};
  }

  handleLabel(){
    let length = this.props.marketSlaves.length;
    this.label = [];

    for(let i = 0; i < length; i++){
      this.label.push('init');
    }

    for(let i = 0; i < length; i++){
      if(this.props.marketSlaves[i]['id'] === this.props.id)
        this.label[i] = 'you';
      else if(this.props.marketSlaves[i]['id'] === this.props.masterID)
        this.label[i] = 'master';
      else{
        for(let j = 0; j < this.props.slavesID.length; j++){
          if(this.props.marketSlaves[i]['id'] === this.props.slavesID[j])
            this.label[i] = 'slave';
        }
      }
    }
  }

  handleChange(e){
    let value = e.target.value;
    this.setState({value: value});    
    this.handleSubmit(value);
  }

  handleSubmit(value){
    this.props.handleSorting(value);
  }

  render(){
    return(
      <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
        {/*<!--  -->*/}
        <div className="flex-sb-m flex-w p-b-35">
          <div className="flex-w">
            <div className="rs2-select2 bo4 of-hidden w-size12 m-b-5 m-r-10">
              <select value={this.state.value} onChange={this.handleChange} className="selection-2 size6" name="sorting">
                <option value='default'>Default Sorting</option>
                <option value='price+'>Price: low to high</option>
                <option value='price-'>Price: high to low</option>
              </select>
            </div>
          </div>

          <span className="s-text8 p-t-5 p-b-5">
            Showing {this.props.marketSlaves.length} results
          </span>
        </div>

        {/*<!-- Product -->*/}
        <div className="row">
          {this.handleLabel()}
          {
            this.props.marketSlaves.map((slave,index)=>
              <MarketItem 
                key={`slave-${slave['id']}`} 
                label={this.label[index]} 
                id={slave['id']} 
                address={slave['address']} 
                name={slave['name']} 
                price={slave['price']} 
                handleFocus={this.props.handleFocus}
              />)
          }          
        </div>
      </div>
    );
  }
}