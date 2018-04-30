import React, { Component } from 'react';

export default class MarketDisplay extends Component{
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
            Showing 1–12 of 16 results
          </span>
        </div>

        {/*<!-- Product -->*/}
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
            {/*<!-- Block2 -->*/}
            <div className="block2">
              <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                <img src="images/item-cart-01.jpg" alt="IMG-PRODUCT"/>

                <div className="block2-overlay trans-0-4">
                  <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                  </a>

                  <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="block2-txt p-t-20">
                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                  Username
                </a>

                <span className="block2-price m-text6 p-r-5">
                  $7.00
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
            {/*<!-- Block2 -->*/}
            <div className="block2">
              <div className="block2-img wrap-pic-w of-hidden pos-relative">
                <img src="images/item-cart-02.jpg" alt="IMG-PRODUCT"/>

                <div className="block2-overlay trans-0-4">
                  <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                  </a>

                  <div className="block2-btn-addcart w-size1 trans-0-4">
                    {/*<!-- Button -->*/}
                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="block2-txt p-t-20">
                <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                  Username
                </a>

                <span className="block2-price m-text6 p-r-5">
                  $9.50
                </span>
              </div>
            </div>
          </div>              
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