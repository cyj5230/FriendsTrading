import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Leftbar from './components/Leftbar';
import MarketDisplay from './components/MarketDisplay';
import About from './components/About';
import ProfileDisplay from './components/ProfileDisplay';
import Setting from './components/Setting';
import user_test_json from './me.json';
import all_users_test_json from './test.json';
import Web3 from 'web3';
// import W3function from './W3function.js';

class App extends Component {
  
  constructor(props){
    super(props);
    this.handleSetting = this.handleSetting.bind(this);
    this.handleRanking = this.handleRanking.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    //let me = W3function.get_user(addr);
    //if(!me){
      //const me_temp = {"address": {String(addr)}};
      //me = JSON.parse(me_temp);
      //}
      //-------------------------------
      //let marketSlaves = W3function.get_allUsers();
    this.state={
      user:user_test_json,
      allUsers:all_users_test_json,
      marketSlaves:all_users_test_json,
      focusUser:all_users_test_json[0]
    };
  }

  componentDidMount () {
      const script0 = document.createElement("script");

      script0.src = "js/main.js";
      script0.async = true;

      const script1 = document.createElement("script");

      script1.src = "js/slick-custom.js";
      script1.async = true;

      document.body.appendChild(script0);
      document.body.appendChild(script1);

      if (window.web3 && window.web3.currentProvider.isMetaMask) {
        window.web3.eth.getAccounts((error, accounts) => {
          // Do whatever you need to.
          this.setState({address: accounts[0]});
        });
      } else {
        console.log('MetaMask account not detected :(');
      }
  }

  handleFocus(id){    
    let focusUser = all_users_test_json[parseInt(id)-1];
    this.setState({focusUser:focusUser});
    let path = (id === this.state.user['id']) ? '/my-profile' : '/profile';
    return path;
  }

  handleSetting(name, intro){
    if(!name || !intro){
      return 'Please enter valid value';
    }
    this.setState({
        name:name,
        introduction:intro,
        id:"010"
    });
  }

  handleRanking(){
    let rankedPrice = this.state.allUsers
      .map(s => ({id: s['id'], name: s['name'], price: s['price']}))
      .sort((a, b) => b.price - a.price);
    
    let rankedNumSlave = this.state.allUsers
      .map(s => ({id: s['id'], name: s['name'], nSlave: s['slavesID'].length}))
      .sort((a, b) => b.nSlave - a.nSlave);
    
    return(
      <div>
        <h4 className="m-text23 p-t-34 p-b-7">
          👑Price Ranking
        </h4>
        <ul>
          {
            rankedPrice.slice(0,3).map((user, i)=><li className="m-b-10" key={`rankedPrice-${i}`}><strong>#{user.id} {user.name}</strong><p className='m-l-48'>${user.price}</p></li>)
          }
        </ul>

        <h4 className="m-text23 p-t-34 p-b-7">
          👑Slave Ranking
        </h4>
        <ul>
          {
            rankedNumSlave.slice(0,3).map((user, i)=><li className="m-b-10" key={`rankedNumSlave-${i}`}><strong>#{user.id} {user.name}</strong><p className='m-l-48'>{user.nSlave} slaves</p></li>)
          }
        </ul>
      </div>
    );
  }

  handleSorting(value){
    let sorted = [];

    switch(value){
      case 'default': 
        sorted = this.state.allUsers;
        break;

      case 'price+' : 
        sorted = this.state.allUsers
        .map(s => ({id: s['id'], address:s['address'], name: s['name'], price: s['price']}))
        .sort((a, b) => a.price - b.price);
        break;

      case 'price-' : 
        sorted = this.state.allUsers
        .map(s => ({id: s['id'], address:s['address'], name: s['name'], price: s['price']}))
        .sort((a, b) => b.price - a.price);
        break;

      default: sorted = this.state.allUsers;
    }

    this.setState({marketSlaves:sorted});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <Header 
          name={this.state.user['name']} 
          id={this.state.user['id']}
          slavesID={this.state.user['slavesID']}
          price={this.state.user['price']}
          allUsers={this.state.allUsers}
          handleFocus={this.handleFocus}
        />

        {/*<!-- Title Page -->*/}
        <section className="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{backgroundImage: "url(images/bg-banner-03.jpg)"}}>

          <h2 className="l-text2 t-center shadow">
            Friends Trading
          </h2>
          <p className="m-text13 t-center inline-yellow">
            Buy and Sell Your Friends in Blockchain
          </p>
        </section>

        {/*  <!-- Content page -->*/}
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
              <Switch>
                <Route path='/' 
                 render={()=>
                    <Market 
                    id={this.state.user['id']}
                    slavesID={this.state.user['slavesID']}
                    masterID={this.state.user['masterID']}
                    marketSlaves={this.state.marketSlaves}
                    handleRanking={this.handleRanking}
                    handleSorting={this.handleSorting}                    
                    handleFocus={this.handleFocus}
                    />}
                  exact={true}/>              
                <Route path='/my-profile' 
                  render={()=>
                    <MyProfile 
                    isMe={true}
                    user={this.state.user}
                    allUsers={this.state.allUsers}                    
                    handleRanking={this.handleRanking}
                    handleFocus={this.handleFocus}
                    />}
                  exact={true}/>    
                <Route path='/setting' 
                  render={()=>
                    <Setting 
                    address={this.state.address}
                    handleSetting={this.handleSetting}
                    />}
                />

                <Route path='/profile' 
                  render={()=>
                    <Profile 
                    isMe={false}
                    user={this.state.focusUser || (this.props.to.state && this.props.to.state.focusUser)}
                    allUsers={this.state.allUsers}                    
                    handleRanking={this.handleRanking}                    
                    handleFocus={this.handleFocus}
                    />}
                  exact={true}/>           
                <Route path='/about' component={About}/>
              </Switch>
          </div>
        </section>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

class Market extends Component{
  render(){
    return(
      <div className="row">            
        <Leftbar handleRanking={this.props.handleRanking}/>
        <MarketDisplay 
          id={this.props.id}
          slavesID={this.props.slavesID}
          masterID={this.props.masterID}
          marketSlaves={this.props.marketSlaves}
          handleSorting={this.props.handleSorting}
          handleFocus={this.props.handleFocus}
        />            
      </div>
    );
  }
}

class MyProfile extends Component{
  render(){
    return(
      <div className="row">            
        <Leftbar handleRanking={this.props.handleRanking}/>
        <ProfileDisplay 
          isMe={this.props.isMe}
          id={this.props.user['id']}
          name={this.props.user['name']} 
          address={this.props.user['address']}
          slavesID={this.props.user['slavesID']}
          masterID={this.props.user['masterID']}
          introduction={this.props.user['introduction']}
          price={this.props.user['price']}
          allUsers={this.props.allUsers}
          handleFocus={this.props.handleFocus}
        />            
      </div>
    );
  }
}

class Profile extends Component{
  render(){
    return(
      <div className="row">            
        <Leftbar handleRanking={this.props.handleRanking}/>
        <ProfileDisplay 
          isMe={this.props.isMe}
          id={this.props.user['id']}
          name={this.props.user['name']} 
          address={this.props.user['address']}
          slavesID={this.props.user['slavesID']}
          masterID={this.props.user['masterID']}
          introduction={this.props.user['introduction']}
          price={this.props.user['price']}
          allUsers={this.props.allUsers}
          handleFocus={this.props.handleFocus}
        />            
      </div>
    );
  }
}

export default App;
