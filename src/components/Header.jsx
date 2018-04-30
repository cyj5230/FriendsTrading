import React, { Component } from 'react';
import { BrowserRouter, Link} from 'react-router-dom';

export default class Header extends Component{
  constructor(props){
    super(props);
    //this.changePage = this.changePage.bind(this);
  }

  // changePage(page){

  // }

  render(){
    return(
      <header className="header1">
        {/*Header desktop -->*/}
        <div className="container-menu-header">
          <div className="topbar">

            <div className="topbar-child2">
              <span className="topbar-email">
                Welcome, {this.props.name}! Your price is {this.props.price}
              </span>
            </div>
          </div>

          <div className="wrap_header">
            {/*//!-- Logo -->*/}
            <a href="index.html" className="logo">
              <img src="images/icons/FT-logo.png" alt="IMG-LOGO"/>
            </a>

            {/*!-- Menu -->*/}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                  <Link to="/">Market</Link>                  
                  </li>

                  <li>
                   <Link to="/profile">Profile</Link>
                  </li>

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/*!-- Header Icon -->*/}
            <div className="header-icons">
              <a href="profile.html" className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
              </a>

              <span className="linedivide1"></span>

              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.props.slavesID.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          CHEN Yuji
                        </a>

                        <span className="header-cart-item-info">
                          $19.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-02.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          DAI Na
                        </a>

                        <span className="header-cart-item-info">
                          $27.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          LIN Yuwei
                        </a>

                        <span className="header-cart-item-info">
                          $32.00
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="header-cart-total">
                    Total: $78.00
                  </div>

                  <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                      {/*!-- Button -->*/}
                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        My Slaves
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/*!-- Header Mobile -->*/}
        <div className="wrap_header_mobile">
        {/*!-- Logo moblie -->*/}          
            <a href="index.html" className="logo-mobile">
            <img src="images/icons/FT-logo.png" alt="IMG-LOGO"/>
          </a>

          {/*!-- Button show menu -->*/}
          <div className="btn-show-menu">
            {/*!-- Header Icon mobile -->*/}
            <div className="header-icons-mobile">
              <a href="profile.html" className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
              </a>

              <span className="linedivide2"></span>

              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.props.slavesID.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          CHEN Yuji
                        </a>

                        <span className="header-cart-item-info">
                          $19.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-02.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          DAI Na
                        </a>

                        <span className="header-cart-item-info">
                          $27.00
                        </span>
                      </div>
                    </li>

                    <li className="header-cart-item">
                      <div className="header-cart-item-img">
                        <img src="images/item-cart-01.jpg" alt="IMG"/>
                      </div>

                      <div className="header-cart-item-txt">
                        <a href="#" className="header-cart-item-name">
                          LIN Yuwei
                        </a>

                        <span className="header-cart-item-info">
                          $32.00
                        </span>
                      </div>
                    </li>
                  </ul>

                  <div className="header-cart-total">
                    Total: $78.00
                  </div>

                  <div className="header-cart-buttons">
                    <div className="header-cart-wrapbtn">
                      {/*!-- Button -->*/}
                      <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                        My Slaves
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
        </div>

        {/*!-- Menu Mobile -->*/}

        <div className="wrap-side-menu" >
          <nav className="side-menu">
            <ul className="main-menu">

              <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                <div className="topbar-child2-mobile">
                  <span className="topbar-email">
                    Welcome, {this.props.name}! Your price is {this.props.price}
                  </span>

                </div>
              </li>

              <li className="item-menu-mobile">
                <button>Market</button>
              </li>

              <li className="item-menu-mobile">
                <button>Profile</button>
              </li>

              <li className="item-menu-mobile">
                <button>About</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
} 