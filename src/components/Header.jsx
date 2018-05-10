import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import SlaveItemMini from './SlaveItemMini';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.checkInfo = this.checkInfo.bind(this);
    this.handleSlaves = this.handleSlaves.bind(this);
  }

  checkInfo(){
    if(this.props.id != undefined && this.props.id !== "")
      return true;
    else
      return false;
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
      <header className="header1">
        {/*Header desktop -->*/}
        <div className="container-menu-header">
          <div className="topbar">
            <div className="topbar-child2">
              <span className="topbar-email">
                {this.checkInfo() && <div>Welcome, {this.props.name} ! Your price is ${this.props.price}</div>}
                {!this.checkInfo() && <div>Log on to enjoy FriendsTrading!</div>}
              </span>
            </div>
          </div>

          <div className="wrap_header">
            {/*//!-- Logo -->*/}
            <Link to="/" className="logo">
              <img src="images/icons/FT-logo.png" alt="IMG-LOGO"/>
            </Link>

            {/*!-- Menu -->*/}
            <div className="wrap_menu">
              <nav className="menu">
                <ul className="main_menu">
                  <li>
                  <Link to="/">Market</Link>                  
                  </li>

                  {this.checkInfo() && 
                    <li>
                     <Link to="/my-profile">Profile</Link>
                    </li>
                  }
                  
                  {!this.checkInfo() && 
                    <li>
                     <Link to="/setting">Log On</Link>
                    </li>
                  }

                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/*!-- Header Icon -->*/}
            <div className="header-icons">
              <Link to={this.checkInfo() ? "/my-profile":"/setting"} className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1 h-avatar" alt="ICON"/>
              </Link>

              <span className="linedivide1"></span>
              {this.handleSlaves()}
              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.slaves.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    {
                      this.slaves.map((slave)=><SlaveItemMini key={`h-slave-${slave['id']}`} id={slave['id']} address={slave['address']} name={slave['name']} price={slave['price']}/>)
                    }
                  </ul>

                  <div className="header-cart-total">
                    Total: {this.slaves.length} Slaves
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
              <Link to={this.checkInfo() ? "/my-profile":"/setting"} className="header-wrapicon1 dis-block">
                <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
              </Link>

              <span className="linedivide2"></span>

              <div className="header-wrapicon2">
                <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON"/>
                <span className="header-icons-noti">{this.slaves.length}</span>

                {/*!-- Header cart noti -->*/}
                <div className="header-cart header-dropdown">
                  <ul className="header-cart-wrapitem">
                    {
                      this.slaves.map((slave)=><SlaveItemMini key={`h-slave-${slave['id']}`} id={slave['id']} address={slave['address']} name={slave['name']} price={slave['price']}/>)
                    }
                  </ul>

                  <div className="header-cart-total">
                    Total: {this.slaves.length} Slaves
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
                  {this.checkInfo() && <div>Welcome, {this.props.name} ! Your price is ${this.props.price}</div>}
                  {!this.checkInfo() && <div>Log on to enjoy FriendsTrading!</div>}
                </span>

                </div>
              </li>

              <li className="item-menu-mobile">
                <button>
                  <Link to="/">Market</Link> 
                </button>                 
              </li>

             {this.checkInfo() && 
                <li className="item-menu-mobile">
                <button>
                 <Link to="/my-profile">Profile</Link>
                </button>
                </li>
              }
            
            {!this.checkInfo() && 
              <li className="item-menu-mobile">
               <button>
                 <Link to="/setting">Log On</Link>
               </button>               
              </li>
            }

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