import React, { Component } from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import SlaveItemMini from './SlaveItemMini';

export default class Header extends Component{
  constructor(props){
    super(props);
    //this.changePage = this.changePage.bind(this);
  }

  render(){
    return(
      <header className="header1">
        {/*Header desktop -->*/}
        <div className="container-menu-header">
          <div className="topbar">

            <div className="topbar-child2">
              <span className="topbar-email">
                Welcome, {this.props.name}! Your price is ${this.props.price}
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
              <Link to="/profile" className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
              </Link>

              <span className="linedivide1"></span>

              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.props.slavesID.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    {
                      this.props.slavesID.map((slave)=><SlaveItemMini key={slave} id={slave} name={'TestUser'+slave} price={15.90}/>)
                    }
                  </ul>

                  <div className="header-cart-total">
                    Total: {this.props.slavesID.length} Slaves
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/*!-- Header Mobile -->*/}
        <div className="wrap_header_mobile">
        {/*!-- Logo moblie -->*/}
          <Link to="/" className="logo-mobile">
            <img src="images/icons/FT-logo.png" alt="IMG-LOGO"/>
          </Link>

          {/*!-- Button show menu -->*/}
          <div className="btn-show-menu">
            {/*!-- Header Icon mobile -->*/}
            <div className="header-icons-mobile">
              <Link to="/profile" className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
              </Link>

              <span className="linedivide2"></span>

              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.props.slavesID.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    {
                      this.props.slavesID.map((slave)=><SlaveItemMini key={slave} id={slave} name={'TestUser'+slave} price={15.90}/>)
                    }
                  </ul>

                  <div className="header-cart-total">
                    Total: {this.props.slavesID.length} Slaves
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
                    Welcome, {this.props.name}! Your price is ${this.props.price}
                  </span>

                </div>
              </li>

              <li className="item-menu-mobile">
                <button>
                  <Link to="/">Market</Link> 
                </button>                 
              </li>

              <li className="item-menu-mobile">
                <button>
                  <Link to="/profile">Profile</Link> 
                </button>
              </li>

              <li className="item-menu-mobile">
                <button>
                  <Link to="/about">About</Link> 
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
} 