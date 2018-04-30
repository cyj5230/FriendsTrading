import React, { Component } from 'react';

export default class Leftbar extends Component{
  render(){
    return(
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
        <div className="leftbar p-r-20 p-r-0-sm">

                  <div className="search-product pos-relative bo4 of-hidden">
                    <input className="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Users..."/>

                    <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                      <i className="fs-12 fa fa-search" aria-hidden="true"></i>
                    </button>
                  </div>

                  {/*<!--  -->*/}
                  <h4 className="m-text14 p-t-34 p-b-7">
                    Price Ranking
                  </h4>
                  <ul>
                    <li>LIN Yuwei   $32.00</li>
                    <li>DAI Na   $27.00</li>
                    <li>CHEN Yuji   $19.00</li>
                  </ul>

                 {/* <!--  -->*/}
                  <h4 className="m-text14 p-t-34 p-b-7">
                    Slave Ranking
                  </h4>
                  <ul>
                    <li>Username: 3 slaves</li>
                    <li>CHEN Yuji: 0 slaves</li>
                    <li>DAI Na: 0 slaves</li>
                    <li>LIN Yuwei: 0 slaves</li>
                  </ul>
                </div>
              </div>
    );
  }
}